ServerEvents.tags('item', (event) => {
    event.get('forge:dusts').add(['kubejs:amethyst_dust', 'kubejs:subzero_dust', 'kubejs:therium_dust']);

    event.get('forge:dusts/amethyst').add(['kubejs:amethyst_dust']);
    event.get('forge:dusts/subzero').add(['kubejs:subzero_dust']);
    event.get('forge:dusts/therium').add(['kubejs:therium_dust']);
});
