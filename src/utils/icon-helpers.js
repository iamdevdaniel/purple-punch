export const getIconFamilies = (icons, types) => {

    const aux = Object.entries(icons).reduce((result, entry) => {
    
        const typeRegex = RegExp(`(${types.fill})`, 'g')
        const [key, value] = entry
        const [name, iconType] = key.split(typeRegex)
    
        const iconFamily = result[name]
    
        if(iconFamily) {
            iconFamily[iconType.toLowerCase()] = value
        }
        else {
            result[name] = { regular: value }
        }
        
        return result
    }, {})

    return aux
}
