ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/crusher/';
    const recipes = [
        {
            output: { item: 'ae2:sky_dust' },
            input: { item: 'ae2:sky_stone_block' },
            id: `${id_prefix}sky_dust`
        },
        {
            output: { item: 'create:powdered_obsidian' },
            input: { item: 'minecraft:obsidian' },
            id: `${id_prefix}powdered_obsidian`
        },
        {
            output: { item: 'create:cinder_flour' },
            input: { item: 'minecraft:netherrack' },
            id: `${id_prefix}cinder_flour`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:crusher';
        event.custom(recipe).id(recipe.id);
    });
});
