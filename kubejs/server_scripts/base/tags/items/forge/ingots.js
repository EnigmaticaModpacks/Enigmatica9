ServerEvents.tags('item', (event) => {
    event.add('forge:ingots', [
        'industrialforegoing:pink_slime_ingot',

        'kubejs:crude_iron_ingot',
        'kubejs:red_nether_brick',

        'naturesaura:infused_iron',
        'naturesaura:tainted_gold',
        'naturesaura:sky_ingot',
        'naturesaura:depth_ingot',

        'occultism:iesnium_ingot',

        `powah:steel_energized`,

        'spirit:soul_steel_ingot'
    ]);

    event.add(`forge:ingots/pink_slime`, 'industrialforegoing:pink_slime_ingot');

    event.add(`forge:ingots/crude_iron`, 'kubejs:crude_iron_ingot');
    event.add(`forge:ingots/brick`, 'kubejs:red_nether_brick');

    event.add(`forge:ingots/infused_iron`, 'naturesaura:infused_iron');
    event.add(`forge:ingots/tainted_gold`, 'naturesaura:tainted_gold');
    event.add(`forge:ingots/skies`, 'naturesaura:sky_ingot');
    event.add(`forge:ingots/depths`, 'naturesaura:depth_ingot');

    event.add(`forge:ingots/energized_steel`, 'powah:steel_energized');

    event.add(`forge:ingots/soul_steel`, 'spirit:soul_steel_ingot');
});
