package utils

import (
	"errors"
	"fmt"
	"github.com/j-keck/arping"
	"net"
	"time"
)

func getCurrentIp() {
	interfaces, err := net.Interfaces()
	if err != nil {
		fmt.Println(err)
		return
	}
	for _, iface := range interfaces {
		addrs, err := iface.Addrs()
		if err != nil {
			fmt.Println(err)
			continue
		}
		for _, addr := range addrs {
			ip, _, err := net.ParseCIDR(addr.String())
			if err != nil {
				fmt.Println(err)
				continue
			}
			fmt.Println(ip)
		}
	}
}
func ExternalIP() (string, string, error) {
	ifaces, err := net.Interfaces()
	if err != nil {
		return "", "", err
	}
	for _, iface := range ifaces {
		if iface.Flags&net.FlagUp == 0 {
			continue // interface down
		}
		if iface.Flags&net.FlagLoopback != 0 {
			continue // loopback interface
		}
		addrs, err := iface.Addrs()
		if err != nil {
			return "", "", err
		}
		for _, addr := range addrs {
			var ip net.IP
			switch v := addr.(type) {
			case *net.IPNet:
				ip = v.IP
			case *net.IPAddr:
				ip = v.IP
			}
			if ip == nil || ip.IsLoopback() {
				continue
			}
			ip = ip.To4()
			if ip == nil {
				continue // not an ipv4 address
			}
			return ip.String(), iface.HardwareAddr.String(), nil
		}
	}
	return "", "", errors.New("are you connected to the network?")
}

func Mac(ip string) (net.HardwareAddr, time.Duration, error) {
	dstIP := net.ParseIP(ip)
	return arping.Ping(dstIP)
}
