ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/quark/shaped/';

    const recipes = [
        {
            output: Item.of('quark:trowel', { Damage: 0, Unbreakable: 1 }),
            pattern: ['A  ', ' BB'],
            key: {
                A: '#forge:rods/wooden',
                B: '#forge:ingots/infused_iron'
            },
            id: 'quark:tools/crafting/trowel'
        },
        {
            output: 'quark:abacus',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#minecraft:planks',
                B: '#forge:rods/wooden',
                C: '#forge:ingots/bronze'
            },
            id: 'quark:tools/crafting/abacus'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
