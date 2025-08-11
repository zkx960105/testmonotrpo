import { wechatError } from './error'
import { eventCollect } from './event'

export function defaultIntegrations() {
    return [wechatError,eventCollect]
}