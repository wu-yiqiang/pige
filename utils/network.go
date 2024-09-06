package utils

import (
	_"errors"
	"fmt"
	"net"
	"os"
	"sync"
	"time"
)

// Function to perform a ping scan on an IP address
func scanIP(ip string, wg *sync.WaitGroup, chann chan string) {
	defer wg.Done()

	conn, err := net.DialTimeout("ip4:icmp", ip, time.Second*1)
	if err != nil {
		fmt.Printf("Failed to ping IP %s: %v\n", ip, err)
		return
	}
	defer conn.Close()

	chann <- ip
}

func GetLocalNetworkDevicesIP() ([]string, error) {
	var wg sync.WaitGroup
	channel := make(chan string, 255)
	ips := []string{}
	defer close(channel)
	// Identify the local network IP range (adjust based on your network)
	localIP := "192.168.1." // Example local network range
	startIP := 1
	endIP := 254
	fmt.Println("d阿斯顿撒", os.Geteuid())
	if os.Geteuid() != 0 {
		err := errors.New("Warning: Running without root privileges may prevent pinging.")
		return ips, err
	}

	for i := startIP; i <= endIP; i++ {
		ip := fmt.Sprintf("%s%d", localIP, i)
		wg.Add(1)
		go scanIP(ip, &wg, channel)
	}
	wg.Wait()
	for data := range channel {
		ips = append(ips, data)
		// fmt.Println("d阿斯顿撒", data)
	}
	return ips, nil
}
