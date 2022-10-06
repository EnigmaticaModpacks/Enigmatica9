ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const aura = { small: 30000, medium: 60000, large: 90000, huge: 120000 };

    // Design Note: Only use this for animals.
    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    const recipes = [
        {
            output: 'twilightforest:helmet_crab',
            inputs: [
                'naturesaura:birth_spirit',
                'twilightforest:armor_shard_cluster',
                '#forge:raw_fishes',
                'minecraft:sand'
            ],
            aura: aura.small,
            time: 40,
            id: `${id_prefix}helmet_crab`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';

        // entity: 'minecraft:bat',
        recipe.entity = recipe.output;

        //  ingredients: [{ item: 'naturesaura:birth_spirit' }, { item: 'minecraft:feather' }],
        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? Ingredient.of(input).toJson() : Item.of(input).toJson()
        );

        event.custom(recipe).id(recipe.id);
    });
});
