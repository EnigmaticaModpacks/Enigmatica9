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
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                }
            ],
            id: `${id_prefix}wood_stand`
        },
        {
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            post: [
                { type: 'place', block: 'hexerei:mixing_cauldron' },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                }
            ],
            id: `${id_prefix}mixing_cauldron`
        },
        {
            item_in: { tag: 'forge:plates/bronze' },
            block_in: 'ars_nouveau:green_archwood_wood',
            post: [
                { type: 'place', block: 'ars_nouveau:imbuement_chamber' },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                }
            ],
            id: `${id_prefix}imbuement_chamber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
