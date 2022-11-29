ServerEvents.tags('item', (event) => {
    event.get('forge:dusts').add(['kubejs:amethyst_dust']);
    event.get('forge:dusts/amethyst').add(['kubejs:amethyst_dust']);
});
