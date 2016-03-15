'use strict'

export default {
  transparentize(c, p) {
    c = hexToRGB(c)
    return `rgba(${[c.r, c.g, c.b, p/100].join(',')})`
  },

  hueRotate(color, degree) {
    return colorOut(changeHue(colorIn(color), degree))
  },

  lighten(color, value) {
    return colorOut(changeLightness(colorIn(color), value))
  },

  saturate(color, value) {
    return colorOut(changeSaturation(colorIn(color), value))
  },

  mix(color1, color2, ratio) {
    ratio = ratio || 0.5
    return colorOut(blendColors(colorIn(color1), colorIn(color2), ratio))
  }
}

//Private Methods
function colorOut(color) {
  let c = color.h ? hslToRGB(color) : color
  return `rgb(${[c.r, c.g, c.b].join(',')})`
}

function colorIn(color) {
  let rgb = {}
  if (color[0] === 'r') {
    color = color.substring(color.indexOf('(') + 1, color.indexOf(')'))
    let c = color.split(',', 3)
    rgb = { r: parseInt(c[0]), g: parseInt(c[1]), b: parseInt(c[2]) }
  } else if (color.substring(0,1) === "#") {
    rgb = hexToRGB(color)
  }
  return rgbToHSL(rgb)
}

function weightedBlend(c1, c2, w, mod) {
  mod = mod || 0
  return (c1 + (c2 - c1 + mod) * w)
}

function blendColors(hsl1, hsl2, weight) {
  let hsl = {}, r, { min, floor } = Math
  let hueMix = floor(weightedBlend(hsl1.h, hsl2.h, weight))
  let hueMixReverse = floor(weightedBlend(hsl1.h, hsl2.h, weight, 360)) % 360
  r = [hueMix, hueMixReverse]
  hsl.h = min(hsl2.h - r[0], hsl1.h - r[0]) <= min(hsl1.h - r[1], hsl2.h - r[1]) ? r[1] : r[0]
  hsl.s = weightedBlend(hsl1.s, hsl2.s, weight)
  hsl.l = weightedBlend(hsl1.l, hsl2.l, weight)
  return hsl
}

function changeHue(hsl, degree) {
  hsl.h += degree
  if (hsl.h > 360) {
    hsl.h = hsl.h % 360
  } else if (hsl.h < 0) {
    hsl.h = (hsl.h % 360) + 360
  }
  return hsl
}

function changeLightness(hsl, value) {
  hsl.l += value
  if (hsl.l > 1) {
    hsl.l = 1
  } else if (hsl.l < 0) {
    hsl.l = 0
  }
  return hsl
}

function changeSaturation(hsl, value) {
  hsl.s += value
  if (hsl.s > 1) {
    hsl.s = 1
  } else if (hsl.s < 0) {
    hsl.s = 0
  }
  return hsl
}

function hexToRGB(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function rgbToHSL(rgb){
  let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255
  let max = Math.max(r, g, b), min = Math.min(r, g, b)
  let d = max - min
  let h, s, l = (max + min) / 2
  if (d === 0) {
    h = 0
  } else if (max === r) {
    h = 60 * (((g - b) / d) % 6)
  } else if (max === g) {
    h = 60 * (((b - r) / d) + 2)
  } else {
    h = 60 * (((r - g) / d) + 4)
  }

  if (d === 0) {
    s = 0
  } else if (l < 0.5) {
    s = d / (max + min)
  } else {
    s = d / (2 - d)
  }

  return {h, s, l}
}

function hslToRGB(hsl){
  let h = hsl.h,
      s = hsl.s,
      l = hsl.l,
      c = (1 - Math.abs(2*l - 1)) * s,
      x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
      m = l - c / 2,
      r, g, b

  if (h < 60) {
    r = c
    g = x
    b = 0
  } else if (h < 120) {
    r = x
    g = c
    b = 0
  } else if (h < 180) {
    r = 0
    g = c
    b = x
  } else if (h < 240) {
    r = 0
    g = x
    b = c
  } else if (h < 300) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  r = normalizeRgbValue(r, m)
  g = normalizeRgbValue(g, m)
  b = normalizeRgbValue(b, m)

  return {r, g, b}
}

function normalizeRgbValue(color, m) {
  color = Math.floor((color + m) * 255)
  if (color < 0) color = 0
  return color
}