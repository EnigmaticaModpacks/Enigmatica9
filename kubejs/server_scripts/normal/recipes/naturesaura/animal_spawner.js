ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/naturesaura/animal_spawner/';
    const recipes = [
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:leather', 'minecraft:coal'],
            entity: 'quark:foxhound',
            aura: 150000,
            time: 120,
            id: `${id_prefix}foxhound`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_elemental:anima_essence', 'minecraft:feather'],
            entity: 'minecraft:phantom',
            aura: 200000,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blitz_rod', 'thermal:blitz_powder'],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blizz_rod', 'thermal:blizz_powder'],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:basalz_rod', 'thermal:basalz_powder'],
            entity: 'thermal:basalz',
            aura: 150000,
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
