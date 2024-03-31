function FindProxyForURL(url, host) {
    if (url.indexOf('akamaized.net/audio/') !== -1) {
        return "PROXY uca8eaca6ed601aca5f8df68da8d.dl.dropboxusercontent.com/cd/0/inline/CQL5Ph5ft0x1BaQdbKxghzk6pyzpJW7Lx6-EehEfipD2kQdiL3TR1lEXjjJds6kQivOPwg0bBRUDtzR9raeoG6bui6U5rBHe0Bff-Fzcpz_ALtRIix2ittg8lgiafizcNtSuOHGCWRcfSwCyUwPLutoI/file:443"; // Replace with the actual file URL
    }
    return "DIRECT";
}
