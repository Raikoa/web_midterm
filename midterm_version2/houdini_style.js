CSS.paintWorklet.addModule('square_header.js')

CSS.registerProperty({
    name: '--boxColor',
    syntax: '<color>',
    initialValue: 'Yellow',
    inherits: false
})


CSS.registerProperty({
    name: '--widthSubtractor',
    syntax: '<integer>',
    initialValue: '0',
    inherits: false
})

CSS.registerProperty({
    name: '--number-of-circles',
    syntax: '<integer>',
    initialValue: '8',
    inherits: false
})

CSS.registerProperty({
    name: '--number-of-dashes',
    syntax: '<integer>',
    initialValue: '4',
    inherits: false
})

CSS.registerProperty({
    name: '--colorLeaf',
    syntax: '<color>',
    initialValue: 'Green',
    inherits: false
})

CSS.registerProperty({
    name: '--NumLeaf',
    syntax: '<integer>',
    initialValue: '2',
    inherits: false
})
