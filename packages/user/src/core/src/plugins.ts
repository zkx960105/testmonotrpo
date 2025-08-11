export function pluginHandler(options: any) {
    // const defaultPlugins = options.defaultPlugins || []
    let totalPlugins: any[] = []
    // if(options.defaultIntegrations) {

    // }
    const defaultIntegrations = options.defaultIntegrations() || []
    // const userPlugins = [ ...plugins.defaultIntegrations,...options.plugins]
    const userPlugins = options.plugins
    if(userPlugins && Array.isArray(userPlugins)) {
        totalPlugins = [...defaultIntegrations,...userPlugins]
    } else {
        totalPlugins = [...defaultIntegrations]
    }

    console.log('totalPlugins',totalPlugins[0])

    const resultPlugins: any[] = []
    //先这样处理，直接执行
    if(totalPlugins.length > 0) {
        totalPlugins.forEach(fn => {
            const callBack = fn()
            resultPlugins.push(callBack)
        })
    }

    return resultPlugins
}