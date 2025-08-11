import { Client,getCurrentScope,setCurrentScope } from './client'
import type { ClientOptions } from './client'

export type ClientClass<F extends Client, O extends ClientOptions> = new (options: O) => F;

export function initAndBind<F extends Client, O extends ClientOptions>(
    clientClass: ClientClass<F, O>,
    options: O
): Client | void {
    const currrntClient = getCurrentScope()
    if(currrntClient !== undefined) {
        throw new Error("client has been instantiated")
    } else {
        const client = new clientClass(options)
        setCurrentScope(client)
        client.init()
        return client
    }



}

export function test() {
    console.log("test")
}