// const ERROR_CONSTANT = ['onerror','onunhandledrejection']
import { currrntClient } from "./core/src/index"

type ErrorOptionsKeys = 'onerror' | 'onunhandledrejection';

type ErrorOptions = Record<ErrorOptionsKeys,Boolean>

type ErrorType = {
    type: string,
    message: WechatMiniprogram.Error
}

type onUnhandledRejection = {
    type: string,
    message: WechatMiniprogram.OnUnhandledRejectionListenerResult
}

import { eventHandler } from "./global"

export function wechatError(options: Partial<ErrorOptions> = {}) {
    return function() {
        if(currrntClient !== undefined) {
            throw new Error("client has been instantiated")
        }
        const _options = {
            onerror: true,
            onunhandledrejection: true,
            ...options
        }
        if(_options.onerror) {
            initOnError()
        }
        if(_options.onunhandledrejection) {
            initOnunhandledrejection()
        }
        //...extra
    }
}

function initOnError() {
    wx.onError(message => {
        const event: ErrorType = {
            type: 'error',
            message: message
        }
        eventHandler['error'].push(event)
        currrntClient!.triggerSend(event)
    })
}

function initOnunhandledrejection() {
    wx.onUnhandledRejection(reason => {
        // eventHandler['unhandledrejection'].push(reason)
        const event: onUnhandledRejection = {
            type: 'unhandledrejection',
            message: reason
        }
        eventHandler['unhandledrejection'].push(event)
        currrntClient!.triggerSend(event)
    })
}

export function defaultIntegrations() {
    return [wechatError]
}