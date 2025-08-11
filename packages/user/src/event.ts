import { getCurrentScope } from './core/src/client'

type eventOptions = {
    page?: string,
    type: string, //事件类型
    eventid?: string,
    message: string
}

export function eventCollect() {
    return function(optinos: eventOptions) {
        const currentClient = getCurrentScope()
        if(currentClient === undefined) {
            throw new Error("client is not exist")
        }

        if(currentClient.colletEvent == null) {
            currentClient.colletEvent = collect(optinos)
        } else {
            currentClient.colletEvent(optinos)
        }
    }
}

function collect(optinos: eventOptions) {
    const currentClient = getCurrentScope()
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]?.route || optinos.page || ''
    const op: eventOptions = {
        page: currentPage,
        type: optinos.type || 'click',
        eventid: optinos.eventid || '',
        message: optinos.message || ''
    }

    currentClient?.triggerSend(op)
}