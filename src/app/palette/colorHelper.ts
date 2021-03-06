import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];


export const generatePalette = (starterPalette) => {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

    for (let level of levels) {
        newPalette.colors[level] = [];
    }

    for(let color of starterPalette.colors){
        let hexColor = color.color
        // [chroma(color).darken(1.4).hex() ,color,'#fff'] - 3 цвета из которых будет составленна палитра из 10 цветов  // chroma(color).darken(1.4) - делает цвет темнее
        let scale = chroma.scale([chroma(hexColor).darken(1.4).hex() ,hexColor,'#fff']).mode('lch').colors(10).reverse();
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }

    return newPalette;
}
