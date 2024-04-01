function FindProxyForURL(url, host) {
    // Check if the request is for audio files on akamaized.net/audio/
    if (host==="audio-ak-spotify-com.akamaized.net") {
        // Redirect requests for audio files on akamaized.net/audio/ to the specified file URL
        return "PROXY test.com:8118"; // Replace with the actual file URL
    }
    // Direct all other requests to go directly to the target server
    return "DIRECT";
}
