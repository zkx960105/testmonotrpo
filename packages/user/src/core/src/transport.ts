export function createTransport(options: any,makeRequest: any) {
    function send() {
        makeRequest(options)
    }

    return {
        send
    }
}