ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/enigmatica/blasting/';
    const recipes = [
        {
            output: '2x twilightforest:ironwood_ingot',
            input: '#forge:ores/ironwood',
            xp: 0.5,
            id_suffix: `ironwood_ingot`
        },
        {
            input: '#forge:dusts/invar',
            output: 'emendatusenigmatica:invar_ingot',
            xp: 0.5,
            id_suffix: `invar_dust_to_ingot`
        },
        {
            input: '#forge:dusts/constantan',
            output: 'emendatusenigmatica:constantan_ingot',
            xp: 0.5,
            id_suffix: `constantan_dust_to_ingot`
        },
        {
            input: '#forge:dusts/electrum',
            output: 'emendatusenigmatica:electrum_ingot',
            xp: 0.5,
            id_suffix: `electrum_dust_to_ingot`
        },
        {
            input: '#forge:dusts/bronze',
            output: 'emendatusenigmatica:bronze_ingot',
            xp: 0.5,
            id_suffix: `bronze_dust_to_ingot`
        },
        {
            input: '#forge:dusts/aluminum',
            output: 'emendatusenigmatica:aluminum_ingot',
            xp: 0.5,
            id_suffix: `aluminum_dust_to_ingot`
        },
        {
            output: `emendatusenigmatica:osmium_ingot`,
            input: `emendatusenigmatica:osmium_dirty_dust`,
            xp: 0.5,
            id_suffix: `osmium_ingot_from_dirty_dust`
        }
    ];

    const simple_metals = ['copper', 'silver', 'gold', 'tin', 'horizonite', 'ventium', 'ventium', 'falsite'];

    simple_metals.forEach((metal) => {
        recipes.push(
            {
                output: `emendatusenigmatica:${metal}_clump`,
                input: `#create:crushed_ores/${metal}`,
                xp: 0.5,
                id_suffix: `clump_${metal}_from_crushed_ore`
            },
            {
                output: `emendatusenigmatica:${metal}_ingot`,
                input: `emendatusenigmatica:${metal}_dirty_dust`,
                xp: 0.5,
                id_suffix: `${metal}_ingot_from_dirty_dust`
            }
        );
    });

    recipes.forEach((recipe) => {
        event
            .blasting(recipe.output, recipe.input)
            .xp(recipe.xp)
            .id(`${id_prefix}minecraft_blasting/${recipe.id_suffix}`);

        event
            .custom({
                type: 'thermal:furnace',
                result: Item.of(recipe.output).toJson(),
                ingredient: Ingredient.of(recipe.input).toJson(),
                experience: recipe.xp,
                energy_mod: 2.0
            })
            .id(`${id_prefix}thermal_smelting/${recipe.id_suffix}`);

        event
            .custom({
                type: 'mekanism:smelting',
                output: Item.of(recipe.output).toJson(),
                input: { ingredient: Ingredient.of(recipe.input).toJson() }
            })
            .id(`${id_prefix}mekanism_smelting/${recipe.id_suffix}`);

        event
            .custom({
                type: 'immersiveengineering:blast_furnace',
                input: Ingredient.of(recipe.input).toJson(),
                result: Item.of(recipe.output).toJson(),
                slag: Item.of('thermal:slag').toJson(),
                time: 3 * 20
            })
            .id(`${id_prefix}immersiveengineering_blast_furnace/${recipe.id_suffix}`);
    });
});
