ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/naturesaura/animal_spawner/';
    const recipes = [
        {
            entity: 'minecraft:phantom',
            inputs: ['naturesaura:birth_spirit', 'ars_elemental:anima_essence', 'minecraft:feather'],
            aura: aura_cost.huge,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            entity: 'thermal:blitz',
            inputs: ['naturesaura:birth_spirit', 'thermal:blitz_rod', 'thermal:blitz_powder'],
            aura: aura_cost.huge,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            entity: 'thermal:blizz',
            inputs: ['naturesaura:birth_spirit', 'thermal:blizz_rod', 'thermal:blizz_powder'],
            aura: aura_cost.huge,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            entity: 'thermal:basalz',
            inputs: ['naturesaura:birth_spirit', 'thermal:basalz_rod', 'thermal:basalz_powder'],
            aura: aura_cost.huge,
            time: 120,
            id: `${id_prefix}basalz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
