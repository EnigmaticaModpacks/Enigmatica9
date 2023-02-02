ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/block_interacting/';
    const recipes = [
        {
            item_in: { item: 'naturesaura:gold_leaf' },
            block_in: { tag: 'minecraft:logs' },
            post: [
                { type: 'place', block: 'naturesaura:wood_stand' },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                }
            ],
            id: `${id_prefix}wood_stand`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
