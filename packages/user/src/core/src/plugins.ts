export function pluginHandler(options: any) {
    // const defaultPlugins = options.defaultPlugins || []
    let totalPlugins: any[] = []
    // if(options.defaultIntegrations) {

    // }
    const defaultIntegrations = options.defaultIntegrations || []
    // const userPlugins = [ ...plugins.defaultIntegrations,...options.plugins]
    const userPlugins = options.plugins
    if(userPlugins && Array.isArray(userPlugins)) {
        totalPlugins = [...defaultIntegrations,...userPlugins]
    } else {
        totalPlugins = [...defaultIntegrations]
    }

    if(totalPlugins.length > 0) {
        totalPlugins.forEach(fn => {
            fn()
        })
    }

    return totalPlugins
}