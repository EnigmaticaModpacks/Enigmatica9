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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
