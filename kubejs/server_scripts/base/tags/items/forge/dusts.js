ServerEvents.tags('item', (event) => {
    event
        .get('forge:dusts')
        .add([
            'kubejs:amethyst_dust',
            'kubejs:subzero_dust',
            'kubejs:therium_dust',
            'kubejs:sylvanite',
            'hexerei:moon_dust'
        ]);

    event.get('forge:dusts/amethyst').add(['kubejs:amethyst_dust']);
    event.get('forge:dusts/subzero').add(['kubejs:subzero_dust']);
    event.get('forge:dusts/therium').add(['kubejs:therium_dust']);
    event.get('forge:dusts/sylvanite').add(['kubejs:sylvanite']);
    event.get('forge:dusts/moon_dust').add(['hexerei:moon_dust']);
});
