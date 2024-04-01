function FindProxyForURL(url, host) {
    // Redirect all traffic to Google
    return "PROXY proxy.example.com:8080";
}
