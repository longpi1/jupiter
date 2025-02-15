package grpc

import (
	"context"
	"testing"
	"time"

	"github.com/douyu/jupiter/pkg/registry/etcdv3"
	"github.com/douyu/jupiter/pkg/server"
	"github.com/douyu/jupiter/proto/testproto"
	"github.com/stretchr/testify/assert"
	"google.golang.org/grpc"
	"google.golang.org/grpc/peer"
)

func TestETCD(t *testing.T) {
	config := DefaultConfig()
	config.Addr = "etcd:///grpc:srv1:v1:unkown-mode"
	cc := testproto.NewGreeterClient(config.Build())

	results := make(map[string]int)

	n := 10
	for i := 0; i < n; i++ {
		peer := peer.Peer{}
		res, err := cc.SayHello(context.Background(), &testproto.HelloRequest{}, grpc.Peer(&peer))
		assert.Nil(t, err)
		assert.NotNil(t, res)
		results[peer.Addr.String()] += 1
	}

	assert.Equal(t, 2, len(results))
	assert.LessOrEqual(t, n/2-5, results["127.0.0.1:9528"])
	assert.LessOrEqual(t, n/2-5, results["127.0.0.1:9529"])

	// 删掉一个节点
	reg := etcdv3.DefaultConfig().MustSingleton()
	reg.UnregisterService(context.Background(), &server.ServiceInfo{
		Name:    "srv1",
		Address: "127.0.0.1:9528",
		Scheme:  "grpc",
	})

	time.Sleep(time.Second)

	for i := 0; i < n; i++ {
		peer := peer.Peer{}
		res, err := cc.SayHello(context.Background(), &testproto.HelloRequest{}, grpc.Peer(&peer))
		assert.Nil(t, err)
		assert.NotNil(t, res)
		results[peer.Addr.String()] += 1
	}

	assert.Equal(t, 2, len(results))
	assert.LessOrEqual(t, n/2-5, results["127.0.0.1:9528"])
	assert.LessOrEqual(t, n/2+n-5, results["127.0.0.1:9529"])

	time.Sleep(time.Second)
	reg.RegisterService(context.Background(), &server.ServiceInfo{
		Name:    "srv1",
		Address: "127.0.0.1:9528",
		Scheme:  "grpc",
	})

	for i := 0; i < n; i++ {
		peer := peer.Peer{}
		res, err := cc.SayHello(context.Background(), &testproto.HelloRequest{}, grpc.Peer(&peer))
		assert.Nil(t, err)
		assert.NotNil(t, res)
		results[peer.Addr.String()] += 1
	}

	assert.Equal(t, 2, len(results))
	assert.LessOrEqual(t, n-5, results["127.0.0.1:9528"])
	assert.LessOrEqual(t, n+n-5, results["127.0.0.1:9529"])
}
