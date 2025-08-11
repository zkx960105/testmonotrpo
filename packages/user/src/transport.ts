import { createTransport } from "./core/src/index"

export function wechatTransport(options: any) {
    function makeRequest(request: any) {

        const requestOptions = {
            data: request.body,
            method: 'POST',
            ...options.requestOptions
        }

        wx.request({url: options.url,...requestOptions})


    }

    return createTransport(options, makeRequest)
}