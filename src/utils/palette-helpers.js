const colors = ['pink', 'purple', 'blue', 'orange', 'green', 'black', 'yellow']
const variations = ['bright', 'contrast']

const getColorsVariations = (colors, variations) => {
    return colors.reduce((result, color) => {
        const colorVariation = variations.reduce((result, variation) => {
            const key = variation.toUpperCase()
            const value = `${color}-${variation}`
            return { ...result, [key]: value }
        }, {})
        return { ...result, [color.toUpperCase()]: colorVariation }
    }, {})
}

export const ColorClassSelector = {
    PRIMARY_0: 'primary-0',
    PRIMARY_1: 'primary-1',
    PRIMARY_2: 'primary-2',
    PRIMARY_3: 'primary-3',
    PRIMARY_4: 'primary-4',
    ...getColorsVariations(colors, variations)
}
