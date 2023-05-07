ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/lightning_channeling/';
    const recipes = [
        {
            item_in: [{ tag: 'mekanism:dirty_dusts/iron' }],
            post: [{ type: 'drop_item', item: 'emendatusenigmatica:iron_shard', count: 6 }],
            id: `${id_prefix}shard_iron`
        },
        {
            item_in: [{ item: 'ae2:certus_quartz_crystal' }],
            post: [
                {
                    type: 'drop_item',
                    item: 'ae2:charged_certus_quartz_crystal',
                    count: 1,
                    contextual: { type: 'chance', chance: 0.5 }
                }
            ],
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            item_in: [
                { tag: 'forge:gems/source' },
                { item: 'minecraft:chiseled_stone_bricks' },
                { tag: 'forge:ores/ironwood' }
            ],
            post: [
                {
                    type: 'drop_item',
                    item: 'minecraft:lodestone',
                    count: 1
                }
            ],
            id: `${id_prefix}lodestone`
        },
        {
            item_in: [
                { tag: 'forge:storage_blocks/source' },
                { tag: 'forge:gems/carminite' },
                { tag: 'forge:gems/carminite' },
                { tag: 'forge:gems/carminite' }
            ],
            post: [
                {
                    type: 'drop_item',
                    item: 'kubejs:dim_arcanite_crystal',
                    count: 2
                }
            ],
            id: `${id_prefix}dim_arcanite_crystal`
        },
        {
            item_in: [
                { tag: 'forge:dusts/subzero' },
                { tag: 'forge:essences/air' },
                { tag: 'forge:essences/fire' },
                { tag: 'forge:essences/water' },
                { tag: 'forge:essences/earth' }
            ],
            post: [
                {
                    type: 'drop_item',
                    item: 'naturesaura:calling_spirit',
                    count: 4
                }
            ],
            id: `${id_prefix}calling_spirit`
        },
        {
            item_in: [
                { item: 'immersiveengineering:balloon' },
                { tag: 'forge:essences/air' },
                { item: 'ars_nouveau:magebloom_fiber' },
                { item: 'ars_nouveau:magebloom_fiber' }
            ],
            post: [
                {
                    type: 'drop_item',
                    item: 'starbunclemania:star_balloon',
                    count: 4
                }
            ],
            id: `${id_prefix}star_balloon`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:lightning_channeling';
        event.custom(recipe).id(recipe.id);
    });
});
