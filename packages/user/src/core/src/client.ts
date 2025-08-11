export type ClientOptions = {
    dsn?: string;
    plugins: Array<any>;
    transport: Transport;
    flushTime?: number;
    defaultIntegrations?: Boolean
}

export interface Transport {
    send<T>(): Promise<T>
}

type ErrorType = {
    type: string,
    message: WechatMiniprogram.Error
}

type onUnhandledRejection = {
    type: string,
    message: WechatMiniprogram.OnUnhandledRejectionListenerResult
}

type queue = {
    type: string,
    message: WechatMiniprogram.OnUnhandledRejectionListenerResult | WechatMiniprogram.Error
}

export let currrntClient:Client | undefined = undefined

export const getCurrentScope = ():Client | undefined => {
    return currrntClient
}
export const setCurrentScope = (newClient: Client) => {
    currrntClient = newClient
}

export abstract class Client {
    protected readonly _dsn?: string;
    protected readonly _options: ClientOptions;
    protected readonly _transport: Transport;
    protected readonly _queue: queue[] = [];
    protected _time: number = 0;
    protected _flushTimer: number | null = null; //定时器
    
    protected constructor(options: ClientOptions) {
        this._options = options
        if(options.dsn) {
            this._dsn = options.dsn
        } else {
            console.debug("options missing dsn")
        }

        this._transport = options.transport
    }

    public init(): void {
        //handle plugin
        const { plugins } = this._options 
    }

    public sendEvent() {
        if(this._queue.length === 0) {
            return
        }
        if(this._flushTimer !== null) {
            clearTimeout(this._flushTimer)
            this.sendQueueHandle()
        } else {
            this.sendQueueHandle()
        }
    }

    public sendQueueHandle() {
        this._time = this._options.flushTime || this._time
        if(this._queue.length < 30) {
            this._flushTimer = setTimeout(() => {
                this._transport.send()
                this.sendEvent()
            },this._time)
        } else {
            this._transport.send()
            this.sendEvent()
        }
    } 

    public triggerSend(event: ErrorType | onUnhandledRejection) {
        //cache indexdb?
        this._queue.push(event)
        this.sendEvent()
    }

    public getQueue() {
        return this._queue
    }
}