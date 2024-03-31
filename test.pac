function FindProxyForURL(url, host) {
    if (host === "akamaized.net" && url.indexOf("/audio/") !== -1) {
        return "PROXY uca8eaca6ed601aca5f8df68da8d.dl.dropboxusercontent.com:443"; // Replace with the actual file URL
    }
    return "DIRECT";
}
