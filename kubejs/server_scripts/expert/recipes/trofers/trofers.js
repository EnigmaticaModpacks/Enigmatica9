ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'trofers:trofers/';
    const recipes = [
        {
            colors: { accent: '#7b28bf', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 0.625 },
            item: { item: 'kubejs:tree_of_life_1' },
            name: {
                color: '#7b28bf',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_1' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/tiny',
                    cooldown: 60
                }
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'tree_of_life_1'
        },
        {
            colors: { accent: '#0f9440', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 0.75 },
            item: { item: 'kubejs:tree_of_life_2' },
            name: {
                color: '#0f9440',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_2' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/small',
                    cooldown: 60
                }
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'tree_of_life_2'
        },
        {
            colors: { accent: '#a61629', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 0.875 },
            item: { item: 'kubejs:tree_of_life_3' },
            name: {
                color: '#a61629',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_3' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/medium',
                    cooldown: 60
                }
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'tree_of_life_3'
        },
        {
            colors: { accent: '#f5f267', base: '#606060' },
            display: { offset: { y: 2.0 }, scale: 1.0 },
            item: { item: 'kubejs:tree_of_life_4' },
            name: {
                color: '#f5f267',
                translate: 'trophy.trofers.composed',
                with: [{ translate: 'item.kubejs.tree_of_life_4' }]
            },
            effects: {
                rewards: {
                    lootTable: 'enigmatica:loot_boxes/aura_leaves/large',
                    cooldown: 60
                }
            },
            animation: { type: 'spinning', speed: 0.3 },
            id: 'tree_of_life_4'
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
