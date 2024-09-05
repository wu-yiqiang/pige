package utils

import (
 "fmt"
 "net"
 "os"
 "sync"
 "time"
)

// Function to perform a ping scan on an IP address
func scanIP(ip string, wg *sync.WaitGroup) {
   defer wg.Done()

   conn, err := net.DialTimeout("ip4:icmp", ip, time.Second*1)
   if err != nil {
      fmt.Printf("Failed to ping IP %s: %v\n", ip, err)
    return
 }
   defer conn.Close()

   fmt.Printf("IP %s is up\n", ip)
}

func GetLocalNetworkDevicesIP() {
   var wg sync.WaitGroup

   // Identify the local network IP range (adjust based on your network)
   localIP := "192.168.1." // Example local network range
   startIP := 1
   endIP := 254

   // Check if the program is running with the necessary privileges
   if os.Geteuid() != 0 {
    fmt.Println("Warning: Running without root privileges may prevent pinging.")
 }

   for i := startIP; i <= endIP; i++ {
    ip := fmt.Sprintf("%s%d", localIP, i)
    wg.Add(1)
    go scanIP(ip, &wg)
 }

   wg.Wait()
   fmt.Println("Scan complete")
}