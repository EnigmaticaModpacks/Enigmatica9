ServerEvents.recipes((event) => {
    const recipes = [
        { block: 'minecraft:magma_block', temp: 800 },
        { block: 'byg:cryptic_magma_block', temp: 800 },
        { block: 'minecraft:lava', temp: 1000 },
        { block: 'quark:blaze_lantern', temp: 1200 },
        { block: 'powah:blazing_crystal_block', temp: 1600 },
        { block: 'powah:nitro_crystal_block', temp: 2800 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerHeatSource(recipe.block, recipe.temp);
    });
});
