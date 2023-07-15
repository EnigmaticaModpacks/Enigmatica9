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
            output: `emendatusenigmatica:aluminum_ingot`,
            input: `#mekanism:dirty_dusts/aluminum`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `aluminum_ingot_from_dirty_dust`
        },
        {
            output: `emendatusenigmatica:nickel_ingot`,
            input: `#mekanism:dirty_dusts/nickel`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `nickel_ingot_from_dirty_dust`
        },
        {
            output: `emendatusenigmatica:nickel_clump`,
            input: `#create:crushed_ores/nickel`,
            slag: 'thermal:rich_slag',
            xp: 0.5,
            id_suffix: `nickel_clump_from_raw_ore`
        },
        {
            output: `twilightforest:knightmetal_ingot`,
            input: `#forge:ores/knightmetal`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `knightmetal_ingot_from_shard_cluster`
        },
        {
            output: '4x occultism:burnt_otherstone',
            input: 'occultism:otherstone',
            slag: 'thermal:slag',
            xp: 0.5,
            id: `burnt_otherstone`
        },
        {
            output: `emendatusenigmatica:iesnium_ingot`,
            input: `#mekanism:dirty_dusts/iesnium`,
            slag: 'thermal:rich_slag',
            xp: 0.5,
            id_suffix: `iesnium_ingot_from_dirty_dust`
        },
        {
            output: `emendatusenigmatica:osmium_ingot`,
            input: `#mekanism:dirty_dusts/osmium`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `osmium_ingot_from_dirty_dust`
        }
    ];

    simple_metals.forEach((metal) => {
        let preferredIngot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${metal}`).getId();
        recipes.push(
            {
                output: `emendatusenigmatica:${metal}_clump`,
                input: `#create:crushed_ores/${metal}`,
                slag: 'thermal:slag',
                xp: 0.5,
                id_suffix: `clump_${metal}_from_crushed_ore`
            },
            {
                output: preferredIngot,
                input: `emendatusenigmatica:${metal}_dirty_dust`,
                slag: 'thermal:slag',
                xp: 0.5,
                id_suffix: `${metal}_ingot_from_dirty_dust`
            }
        );
    });

    const metals = Object.keys(metal_properties);
    metals.forEach((metal) => {
        if (metal == 'refined_obsidian') {
            return;
        }
        let preferredIngot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${metal}`).getId();
        if (Item.exists(`emendatusenigmatica:${metal}_dust`) && !preferredIngot.includes('graphite')) {
            recipes.push({
                output: preferredIngot,
                input: `#forge:dusts/${metal}`,
                slag: 'thermal:slag',
                xp: 0.5,
                id_suffix: `${metal}_ingot_from_dust`
            });
        }
    });

    const metal_shards = ['aluminum', 'tin', 'iesnium', 'silver', 'gold', 'copper', 'nickel', 'osmium', 'lead'];

    metal_shards.forEach((metal) => {
        let preferredIngot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${metal}`).getId();
        recipes.push({
            output: preferredIngot,
            input: `#mekanism:crystals/${metal}`,
            slag: 'thermal:slag',
            xp: 0.5,
            id_suffix: `${metal}_ingot_from_crystals`
        });
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
                type: 'immersiveengineering:blast_furnace',
                input: Ingredient.of(recipe.input).toJson(),
                result: Item.of(recipe.output).toJson(),
                slag: Item.of(recipe.slag).toJson(),
                time: 3 * 20
            })
            .id(`${id_prefix}immersiveengineering_blast_furnace/${recipe.id_suffix}`);
    });
});
