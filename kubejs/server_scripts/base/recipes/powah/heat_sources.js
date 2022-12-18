ServerEvents.recipes((event) => {
    const recipes = [
        { block: 'minecraft:magma_block', temp: 400 },
        { block: 'byg:cryptic_magma_block', temp: 400 },
        { block: 'minecraft:lava', temp: 500 },
        { block: 'quark:blaze_lantern', temp: 600 },
        { block: 'powah:blazing_crystal_block', temp: 800 },
        { block: 'powah:nitro_crystal_block', temp: 1400 }
    ];

    recipes.forEach((recipe) => {
        PowahAPI.registerHeatSource(recipe.block, recipe.temp);
    });
});
