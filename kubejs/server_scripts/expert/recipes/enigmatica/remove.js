ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { output: 'twilightforest:ironwood_ingot' },

        { type: 'thermal:smelter_recycle' },

        { id: /immersiveengineering:blastfurnace\/fuel_charcoal/ },
        { id: /immersiveengineering:crafting\/.*_mix/ },

        { id: 'naturesaura:tree_ritual/ore_spawn_powder' },

        { id: 'thermal:enderium_dust_2' },
        { id: 'thermal:lumium_dust_4' },
        { id: 'thermal:signalum_dust_4' },
        { id: 'thermal:invar_dust_3' },
        { id: 'thermal:bronze_dust_4' },

        // Disable Ore Processing
        { type: 'minecraft:smelting', output: '#forge:nuggets' },
        { type: 'minecraft:smelting', output: '#forge:ingots' },
        { type: 'minecraft:smelting', output: '#forge:gems' },
        { type: 'minecraft:smelting', output: '#forge:dusts' },

        // { type: 'minecraft:blasting', input: '#forge:ores' },
        // { type: 'minecraft:blasting', input: '#forge:raw_materials' },

        { type: 'minecraft:blasting', output: '#forge:nuggets' },
        { type: 'minecraft:blasting', output: '#forge:ingots' },
        { type: 'minecraft:blasting', output: '#forge:gems' },
        { type: 'minecraft:blasting', output: '#forge:dusts' },

        { type: 'immersiveengineering:arc_furnace' },
        { type: 'immersiveengineering:crusher', id: /ingot_/ },

        { type: 'thermal:smelter' },
        { type: 'thermal:centrifuge', id: /centrifuge_.*_dust/ },
        { type: 'thermal:pulverizer', id: /ingot_to_dust/ },

        { type: 'occultism:crushing', id: /dust/ },

        { id: 'create:crushing/crimsite' },
        { id: 'create:crushing/asurine' },
        { id: 'create:crushing/ochrum' },
        { id: 'create:crushing/veridium' },
        { id: 'create:crushing/tuff' },
        { id: 'create:crushing/calcite' },
        { id: 'create:crushing/dripstone_block' },
        { id: 'create:crushing/diorite' },
        { id: 'create:splashing/gravel' },
        { id: 'create:splashing/soul_sand' },
        { id: 'create:splashing/red_sand' },

        { id: /mekanism:processing\/.*\/crystal/ },
        { id: /mekanism:processing\/.*\/shard/ },
        { id: /mekanism:processing\/.*\/clump/ },
        { id: /mekanism:processing\/.*\/dirty_dust/ },
        { id: /mekanism:processing\/.*\/dust/ },

        { id: /thermal:fire_charge/ },
        { id: 'thermal:compat/create/pulverizer_create_crimsite' },
        { id: 'thermal:compat/create/pulverizer_create_asurine' },
        { id: 'thermal:compat/create/pulverizer_create_ochrum' },
        { id: 'thermal:compat/create/pulverizer_create_veridium' },
        { id: 'thermal:machines/pulverizer/pulverizer_diorite' },
        { id: 'thermal:machines/pulverizer/pulverizer_granite' },
        { id: 'thermal:machines/pulverizer/pulverizer_andesite' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
