package service

import (
	"fmt"
	"net"
)

type Server struct {
	Ip   string
	Port int
}

func NewServer(ip string, port int) *Server {
	server := &Server{Ip: ip, Port: port}
	return server
}

func (s *Server) Handle(conn net.Conn) {
	fmt.Println("连接成功")
}

func (s *Server) Start() {
	listen, err := net.Listen("tcp", fmt.Sprintf("%s:%d", s.Ip, s.Port))
	if err != nil {
		fmt.Println("listen err", err)
	}
	defer listen.Close()
	for {
		conn, err := listen.Accept()
		if err != nil {
			fmt.Println("accept err", err)
			continue
		}
		go s.Handle(conn)
	}
}
