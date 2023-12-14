package service

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func CreateWs() error {
	// 创建HTTP服务器
	http.HandleFunc("/ws", handleWebSocket)
	err := http.ListenAndServe(":9999", nil)
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	// 升级HTTP连接为WebSocket连接
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	defer conn.Close()
	go ReadMsg(conn)
	go WriteMsg(conn)
	// 处理WebSocket连接
	//for {
	//	// 读取消息
	//	messageType, p, err := conn.ReadMessage()
	//	if err != nil {
	//		log.Println(err)
	//		return
	//	}
	//	log.Println("Received message:", string(p))
	//
	//	// 发送消息
	//	err = conn.WriteMessage(messageType, []byte("Hello, world!"))
	//	if err != nil {
	//		log.Println(err)
	//		return
	//	}
	//}
}

func WriteMsg(conn *websocket.Conn) {
	_, _, err := conn.ReadMessage()
	if err != nil {
		log.Println(err)
		return
	}
}

func ReadMsg(conn *websocket.Conn) {
	for {
		err := conn.WriteMessage(websocket.TextMessage, []byte("Hello, world!"))
		if err != nil {
			log.Println(err)
			return
		}
	}

}
