ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/heat_frame_cooling/';

    const recipes = [
        {
            result: { item: 'minecraft:nether_star' },
            bonus_output: { limit: 0.5, multiplier: 0.01 },
            input: { type: 'pneumaticcraft:fluid', amount: 1000, fluid: 'industrialforegoing:ether_gas' },
            max_temp: 73,
            id: `${id_prefix}nether_star`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_frame_cooling';
        event.custom(recipe).id(recipe.id);
    });
});
