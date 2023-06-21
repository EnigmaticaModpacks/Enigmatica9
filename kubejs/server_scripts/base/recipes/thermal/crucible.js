ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/crucible/';

    const recipes = [
        {
            ingredient: { item: 'create:experience_nugget' },
            result: [
                {
                    fluid: 'sophisticatedcore:xp_still',
                    amount: 60
                }
            ],
            energy: 5000,
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            ingredient: { item: 'ars_nouveau:experience_gem' },
            result: [
                {
                    fluid: 'sophisticatedcore:xp_still',
                    amount: 60
                }
            ],
            energy: 5000,
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            ingredient: { item: 'ars_nouveau:greater_experience_gem' },
            result: [
                {
                    fluid: 'sophisticatedcore:xp_still',
                    amount: 240
                }
            ],
            energy: 5000,
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            ingredient: { item: 'minecraft:honey_block' },
            result: [
                {
                    fluid: 'the_bumblezone:honey_fluid_still',
                    amount: 1000
                }
            ],
            energy: 2000,
            id: `thermal:machines/crucible/crucible_honey_block_to_honey`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crucible';
        event.custom(recipe).id(recipe.id);
    });
});
