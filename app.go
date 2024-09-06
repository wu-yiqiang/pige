package main

import (
	"changeme/service"
	utils2 "changeme/utils"
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// 创建ws
func (a *App) CreateWs() H {
	err := service.CreateWs()
	fmt.Println("wsssss sad萨达")
	if err != nil {
		return M{"Code": -1, "Data": "", "Msg": ""}
	}
	return M{"Code": 200, "Data": "", "Msg": "连接成功"}
}

func (a *App) GetDevices() H {
	ips, err := utils2.GetLocalNetworkDevicesIP()
	if err != nil {
		return M{"Code": -1, "Data": "", "Msg": err.Error()}
	}
	fmt.Println("asdasda啊实打实", ips)
	return M{"Code": 200, "Data": ips, "Msg": "成功"}
}
