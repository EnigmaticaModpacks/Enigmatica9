ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    const recipes = [
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:gold_leaf'],
            entity: 'ars_nouveau:starbuncle',
            aura: 100000,
            time: 100,
            id: `${id_prefix}starbuncle`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:ancient_sapling'],
            entity: 'ars_nouveau:whirlisprig',
            aura: 100000,
            time: 100,
            id: `${id_prefix}whirlisprig`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:token_joy'],
            entity: 'ars_nouveau:drygmy',
            aura: 100000,
            time: 100,
            id: `${id_prefix}drygmy`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:spider_eye', 'minecraft:lily_pad'],
            entity: 'minecraft:frog',
            aura: 30000,
            time: 40,
            id: `${id_prefix}frog`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:leather', 'minecraft:coal'],
            entity: 'quark:foxhound',
            aura: 150000,
            time: 120,
            id: `${id_prefix}foxhound`
        },

        {
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:cabbage', 'minecraft:carrot'],
            entity: 'minecraft:rabbit',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/rabbit'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_elemental:anima_essence', 'minecraft:feather'],
            entity: 'minecraft:phantom',
            aura: 200000,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:feather', 'minecraft:jungle_sapling'],
            entity: 'minecraft:parrot',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/parrot'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:kelp', 'minecraft:seagrass'],
            entity: 'minecraft:turtle',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/turtle'
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
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:feather', 'hexerei:seed_mixture'],
            entity: 'hexerei:crow',
            aura: 150000,
            time: 120,
            id: `${id_prefix}crow`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
