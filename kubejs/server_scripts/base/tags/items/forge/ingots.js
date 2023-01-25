ServerEvents.tags('item', (event) => {
    event.add('forge:ingots', [
        `blue_skies:falsite_ingot`,
        `blue_skies:ventium_ingot`,
        `blue_skies:horizonite_ingot`,
        'occultism:iesnium_ingot',
        'kubejs:pig_iron_ingot'
    ]);

    event.add(`forge:ingots/falsite`, `blue_skies:falsite_ingot`);
    event.add(`forge:ingots/ventium`, `blue_skies:ventium_ingot`);
    event.add(`forge:ingots/horizonite`, `blue_skies:horizonite_ingot`);
    event.add(`forge:ingots/pig_iron`, 'kubejs:pig_iron_ingot');
});
