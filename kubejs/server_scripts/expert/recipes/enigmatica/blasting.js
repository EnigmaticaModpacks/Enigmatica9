ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/enigmatica/blasting/';
    const recipes = [
        {
            output: '2x twilightforest:ironwood_ingot',
            input: '#forge:ores/ironwood',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `ironwood_ingot`
        },
        {
            output: 'emendatusenigmatica:invar_ingot',
            input: '#forge:dusts/invar',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `invar_dust_to_ingot`
        },
        {
            output: 'emendatusenigmatica:constantan_ingot',
            input: '#forge:dusts/constantan',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `constantan_dust_to_ingot`
        },
        {
            output: 'emendatusenigmatica:electrum_ingot',
            input: '#forge:dusts/electrum',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `electrum_dust_to_ingot`
        },
        {
            output: 'emendatusenigmatica:bronze_ingot',
            input: '#forge:dusts/bronze',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `bronze_dust_to_ingot`
        },
        {
            output: 'emendatusenigmatica:aluminum_ingot',
            input: '#forge:dusts/aluminum',
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `aluminum_dust_to_ingot`
        },
        {
            output: `emendatusenigmatica:osmium_ingot`,
            input: `#mekanism:dirty_dusts/osmium`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `osmium_ingot_from_dirty_dust`
        },
        {
            output: `emendatusenigmatica:nickel_ingot`,
            input: `#mekanism:dirty_dusts/nickel`,
            slag: 'thermal:rich_slag',
            xp: 0.5,
            id_suffix: `nickel_ingot_from_dirty_dust`
        },
        {
            output: `emendatusenigmatica:nickel_clump`,
            input: `#create:crushed_ores/nickel`,
            slag: 'thermal:rich_slag',
            xp: 0.5,
            id_suffix: `nickel_clump_from_raw_ore`
        }
    ];

    simple_metals.forEach((metal) => {
        recipes.push(
            {
                output: `emendatusenigmatica:${metal}_clump`,
                input: `#create:crushed_ores/${metal}`,
                slag: 'thermal:slag',
                xp: 0.5,
                id_suffix: `clump_${metal}_from_crushed_ore`
            },
            {
                output: `emendatusenigmatica:${metal}_ingot`,
                input: `emendatusenigmatica:${metal}_dirty_dust`,
                slag: 'thermal:slag',
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
                slag: Item.of(recipe.slag).toJson(),
                time: 3 * 20
            })
            .id(`${id_prefix}immersiveengineering_blast_furnace/${recipe.id_suffix}`);
    });
});
