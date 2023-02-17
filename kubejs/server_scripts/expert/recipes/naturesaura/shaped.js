ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/shaped/';

    const recipes = [
        {
            output: Item.of('naturesaura:rf_converter'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/carminite',
                B: 'naturesaura:infused_iron',
                C: 'twilightforest:carminite_reactor'
            },
            id: `naturesaura:rf_converter`
        },
        {
            output: Item.of('naturesaura:potion_generator'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'minecraft:nether_bricks',
                B: '#forge:ingots/electrum',
                C: 'naturesaura:infused_iron',
                D: '#forge:storage_blocks/source'
            },
            id: `naturesaura:potion_generator`
        },
        {
            output: Item.of('naturesaura:color_changer'),
            pattern: ['ABC', 'DED', ' D '],
            key: {
                A: '#forge:dyes/red',
                B: '#forge:dyes/yellow',
                C: '#forge:dyes/blue',
                D: 'naturesaura:infused_iron',
                E: 'ars_nouveau:water_essence'
            },
            id: `naturesaura:color_changer`
        },
        {
            output: Item.of('naturesaura:spring'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:stone_bricks',
                B: 'ars_nouveau:water_essence',
                C: 'ars_nouveau:conjuration_essence'
            },
            id: `naturesaura:spring`
        },
        {
            output: Item.of('2x naturesaura:field_creator'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'ae2:charged_certus_quartz_crystal'
            },
            id: `naturesaura:field_creator`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
