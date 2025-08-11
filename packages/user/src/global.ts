type eventHandler = {
    "unhandledrejection": any[],
    "error": any[]
}

export const eventHandler: eventHandler = {
    'error': [],
    'unhandledrejection': []
}