import { initAndBind,pluginHandler } from './core/src/index'
import { BrowserClient } from "./client"
import { wechatTransport } from "./transport"
import { defaultIntegrations } from './plugins'
import type { ClientOptions } from "./core/src/index" 

export function init(options: ClientOptions) {
    console.log('init')
    const clientOptions: ClientOptions = {
        ...options,
        plugins: pluginHandler({
            defaultIntegrations: options.defaultIntegrations ? defaultIntegrations : [],
            plugins: options.plugins || []
        }),
        transport : options.transport || wechatTransport
    }
    return initAndBind(BrowserClient,clientOptions)
}

/**
 * import { init } from "@zkx/monitor-wechat"
 * init({
 *  dsn: 'xxxxxx',
 *  plugins?: [],
 * })
 */