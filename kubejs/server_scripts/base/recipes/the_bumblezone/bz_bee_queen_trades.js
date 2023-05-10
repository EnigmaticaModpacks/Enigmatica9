ServerEvents.lowPriorityData((event) => {
    const recipes = [
        {
            id: 'brick',
            wants: [
                { id: '#forge:ingots/iron', required: true },
                { id: '#forge:ingots/gold', required: true },
                { id: '#forge:ingots/copper', required: true },
                { id: '#forge:ingots/nether_brick', required: true }
            ],
            possible_rewards: [
                {
                    id: 'minecraft:brick',
                    count: 1,
                    xp_reward: 1,
                    weight: 1,
                    required: true
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`the_bumblezone:bz_bee_queen_trades/${recipe.id}.json`, recipe);
    });
});
