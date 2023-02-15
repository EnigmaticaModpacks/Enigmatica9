ItemEvents.tooltip((event) => {
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.of('Recipe altered for Enigmatica 9: Expert. Refer to JEI.').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator', 'kubejs:disabled_structure_indicator'],
            text: [Text.of('Recipe disabled for Enigmatica 9').gold()]
        },
        {
            items: ['quark:ender_watcher'],
            text: [Text.of('Redstone Device: Detects Players Looking').darkRed()]
        },
        {
            items: ['quark:obsidian_pressure_plate'],
            text: [Text.of('Redstone Device: Detects Players').darkRed()]
        },
        {
            items: ['quark:abacus'],
            text: [Text.of('Measuring Tool').gold()]
        },
        {
            items: ['quark:grate'],
            text: [Text.of('Allows Items to Pass').gold()]
        },
        {
            items: ['quark:trowel'],
            text: [Text.of('Building Tool: Random Block Placement').gold()]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [Text.of('Locates Slime Chunks').gold()]
        },
        {
            items: ['quark:iron_button'],
            text: [Text.of('Redstone Device: Long Pulse').darkRed()]
        },
        {
            items: ['quark:gold_button'],
            text: [Text.of('Redstone Device: Short Pulse').darkRed()]
        },
        {
            items: [
                'naturesaura:animal_generator',
                'naturesaura:projectile_generator',
                'naturesaura:chorus_generator',
                'naturesaura:oak_generator',
                'naturesaura:slime_split_generator',
                'naturesaura:firework_generator',
                'naturesaura:moss_generator',
                'naturesaura:flower_generator',
                'naturesaura:potion_generator'
            ],
            text: [Text.of(`Arcane Apparatus: Aura Generator`).green()]
        },
        {
            items: ['naturesaura:snow_creator'],
            text: [Text.of(`Arcane Apparatus: Snow and Ice Maker`).green()]
        },
        {
            items: ['naturesaura:light_staff', 'ars_nouveau:jar_of_light'],
            text: [Text.of(`Arcane Instrument: Creates Light Sources`).gold()]
        },
        {
            items: ['naturesaura:cave_finder'],
            text: [Text.of(`Arcane Instrument: Highlights Nearby Dark Areas`).gold()]
        },
        {
            items: ['naturesaura:loot_finder'],
            text: [Text.of(`Arcane Instrument: Highlights Nearby Inventories`).gold()]
        },
        {
            items: ['naturesaura:netherite_finder'],
            text: [Text.of(`Arcane Instrument: Highlights Nearby Netherite`).gold()]
        },
        {
            items: ['naturesaura:death_ring'],
            text: [Text.of(`Arcane Instrument: Prevents Death`).gold()]
        },
        {
            items: ['naturesaura:shockwave_creator'],
            text: [Text.of(`Arcane Instrument: Knocks Foes Back`).gold()]
        },
        {
            items: ['naturesaura:fortress_finder'],
            text: [Text.of(`Locates Nether Fortresses`).gold()]
        },
        {
            items: ['naturesaura:end_city_finder'],
            text: [Text.of(`Locates End Cities`).gold()]
        },
        {
            items: ['naturesaura:outpost_finder'],
            text: [Text.of(`Locates Pillager Outposts`).gold()]
        },
        {
            items: ['minecraft:ender_eye'],
            text: [Text.of(`Locates Strongholds`).gold()]
        },
        {
            items: ['naturesaura:aura_timer'],
            text: [Text.of(`Arcane Apparatus: Timer`).green()]
        },
        {
            items: ['naturesaura:animal_container'],
            text: [Text.of(`Arcane Apparatus: Invisible Fence`).green()]
        },
        {
            items: ['naturesaura:field_creator'],
            text: [Text.of(`Arcane Apparatus: Block Breaker`).green()]
        },
        {
            items: ['naturesaura:placer'],
            text: [Text.of(`Arcane Apparatus: Block Placer`).green()]
        },
        {
            items: ['naturesaura:grated_chute'],
            text: [Text.of(`Arcane Apparatus: Filtered Hopper`).green()]
        },
        {
            items: [
                'ars_nouveau:glyph_pickup',
                'functionalstorage:collector_upgrade',
                'naturesaura:hopper_upgrade',
                'pneumaticcraft:magnet_upgrade',
                'sophisticatedbackpacks:advanced_magnet_upgrade',
                'sophisticatedbackpacks:advanced_pickup_upgrade',
                'sophisticatedbackpacks:magnet_upgrade',
                'sophisticatedbackpacks:pickup_upgrade',
                'sophisticatedstorage:advanced_magnet_upgrade',
                'sophisticatedstorage:advanced_pickup_upgrade',
                'sophisticatedstorage:magnet_upgrade',
                'sophisticatedstorage:pickup_upgrade',
                'thermal:device_collector'
            ],
            text: [Text.of(`Item Collector`).green()]
        },
        {
            items: [
                'hexerei:dried_sage_bundle',
                'hexerei:sage_burning_plate',
                'naturesaura:spawn_lamp',
                'immersiveengineering:electric_lantern'
            ],
            text: [Text.of(`Prevents Mob Spawns`).green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.of(`Arcane Apparatus: Generates FE From Aura`).red()]
        },
        {
            items: ['naturesaura:spring', 'ars_elemental:everfull_urn'],
            text: [Text.of(`Arcane Apparatus: Endless Water Source`).green()]
        },
        {
            items: ['naturesaura:aura_detector'],
            text: [Text.of(`Arcane Apparatus: Detects Aura Levels`).green()]
        },
        {
            items: ['naturesaura:pickup_stopper'],
            text: [Text.of(`Arcane Apparatus: Anti-Magnet`).green()]
        },
        {
            items: ['naturesaura:weather_changer'],
            text: [Text.of(`Arcane Apparatus: Weather Manipulation`).green()]
        },
        {
            items: ['naturesaura:time_changer'],
            text: [Text.of(`Arcane Apparatus: Time Manipulation`).green()]
        },
        {
            items: ['naturesaura:furnace_heater'],
            text: [Text.of(`Arcane Apparatus: Aura Powered Furnace`).green()]
        },
        {
            items: ['naturesaura:blast_furnace_booster'],
            text: [Text.of(`Arcane Apparatus: Ore Processing`).green()]
        },
        {
            items: ['naturesaura:range_visualizer'],
            text: [Text.of(`Arcane Instrument: Visualizes Apparatus Effect Area`).green()]
        },
        {
            items: [
                'naturesaura:ender_crate',
                'naturesaura:ender_access',
                'minecraft:ender_chest',
                'functionalstorage:ender_drawer',
                'occultism:stable_wormhole',
                'occultism:storage_controller',
                'mekanism:qio_dashboard',
                'mekanism:qio_drive_array',
                'mekanism:portable_qio_dashboard',
                'occultism:storage_remote',
                'hexerei:ender_satchel'
            ],
            text: [Text.of(`Cross-Dimensional Storage`).darkPurple()]
        },
        {
            items: [
                'mekanism:quantum_entangloporter',
                'mekanism:qio_redstone_adapter',
                'mekanism:qio_exporter',
                'mekanism:qio_importer',
                'ae2:quantum_link',
                'ae2:quantum_ring'
            ],
            text: [Text.of(`Cross-Dimensional Logistics`).darkPurple()]
        },
        {
            items: ['ars_nouveau:enchanters_mirror'],
            text: [Text.of(`Arcane Focus: Self`).gold()]
        },
        {
            items: ['ars_elemental:spell_horn'],
            text: [Text.of(`Arcane Focus: Area`).gold()]
        },
        {
            items: ['ars_nouveau:wand'],
            text: [Text.of(`Arcane Focus: Projectile`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_sword'],
            text: [Text.of(`Arcane Focus: Touch`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_shield'],
            text: [Text.of(`Arcane Instrument: Blocked Attacks Boost Spell Damage and Mana Regen`).lightPurple()]
        },
        {
            items: ['ars_nouveau:splash_flask_cannon'],
            text: [Text.of(`Arcane Instrument: Converts Potions to Splash Potions`).lightPurple()]
        },
        {
            items: ['ars_nouveau:lingering_flask_cannon'],
            text: [Text.of(`Arcane Instrument: Converts Potions to Lingering Potions`).lightPurple()]
        },
        {
            items: ['ars_nouveau:void_jar'],
            text: [Text.of(`Arcane Instrument: Converts Items to Source`).lightPurple()]
        },
        {
            items: ['ars_nouveau:potion_diffuser'],
            text: [Text.of(`Arcane Apparatus: Applies Potions in the Area`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [Text.of(`Arcane Instrument: Allows the Wearer to Hover`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_unstable_gifts'],
            text: [Text.of(`Arcane Instrument: Grants Random Potion Effects`).lightPurple()]
        },
        {
            items: ['ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:ring_of_greater_discount'],
            text: [Text.of(`Arcane Instrument: Reduces Spell Cost`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_boost'],
            text: [Text.of(`Arcane Instrument: Increases Personal Mana Pool`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_regen'],
            text: [Text.of(`Arcane Instrument: Increases Personal Mana Regen Rate`).lightPurple()]
        },
        {
            items: [
                'ae2:memory_card_red',
                'ae2:memory_card_black',
                'ae2:memory_card',
                'ae2:memory_card_green',
                'ae2:memory_card_brown',
                'ae2:memory_card_blue',
                'ae2:memory_card_purple',
                'ae2:memory_card_cyan',
                'ae2:memory_card_light_gray',
                'ae2:memory_card_gray',
                'ae2:memory_card_pink',
                'ae2:memory_card_lime',
                'ae2:memory_card_yellow',
                'ae2:memory_card_light_blue',
                'ae2:memory_card_magenta',
                'ae2:memory_card_orange',
                'ae2:memory_card_white',
                'pneumaticcraft:camo_applicator',
                'mekanism:configuration_card',
                'functionalstorage:configuration_tool',
                'pneumaticcraft:logistics_configurator',
                'ars_nouveau:dominion_wand',
                'mekanism:configurator',
                'thermal:wrench',
                'powah:wrench',
                'supplementaries:wrench',
                'rftoolsbase:smartwrench_select',
                'rftoolsbase:smartwrench',
                'pneumaticcraft:pneumatic_wrench',
                'littlelogistics:conductors_wrench',
                'framedblocks:framed_wrench',
                'create:wrench',
                'ae2:nether_quartz_wrench',
                'ae2:certus_quartz_wrench'
            ],
            text: [Text.of(`Configuration Tool`).gold()]
        },
        {
            items: ['kubejs:summon_death_tome'],
            text: [Text.of(`Summon a murder of Death Tomes.`).darkRed()]
        },
        {
            items: ['kubejs:spell_night_vision'],
            text: [Text.of(`Grants Night Vision.`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everdawn'],
            text: [Text.of(`Teleport to Everdawn.`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everbright'],
            text: [Text.of(`Teleport to Everbright.`).darkRed()]
        },
        {
            items: [
                'ars_nouveau:wixie_cauldron',
                'ars_nouveau:wixie_charm',
                'mekanism:crafting_formula',
                'mekanism:formulaic_assemblicator',
                'create:mechanical_crafter',
                'naturesaura:auto_crafter',
                'thermal:machine_crafter'
            ],
            text: [Text.of(`Auto-crafter`).green()]
        },
        {
            items: ['functionalstorage:armory_cabinet'],
            text: [Text.of(`Bulk Unstackable Storage`).green()]
        },
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'engineersdecor:panzerglass_block',
                'engineersdecor:panzerglass_slab',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'thermal:enderium_glass'
            ],
            text: [Text.of('Wither Immune').color('#9a1be3')]
        },
        {
            items: ['industrialforegoing:mob_duplicator', 'spirit:soul_cage', 'pneumaticcraft:pressurized_spawner'],
            text: [Text.of('Mob Spawner').green()]
        },
        {
            items: ['supplementaries:cog_block'],
            text: [Text.of('Redstone Device: Transmits Redstone Signals').darkRed()]
        },
        {
            items: ['supplementaries:wind_vane'],
            text: [Text.of('Redstone Device: Weather Detector').darkRed()]
        },
        {
            items: ['supplementaries:crystal_display'],
            text: [Text.of('Redstone Device: Displays Redstone Signals').darkRed()]
        },
        {
            items: ['supplementaries:relayer'],
            text: [Text.of('Redstone Device: Losslessly Transmits Redstone Signals').darkRed()]
        },
        {
            items: ['supplementaries:spring_launcher'],
            text: [Text.of('Redstone Device: Entity Yeeter').darkRed()]
        },
        {
            items: ['supplementaries:speaker_block'],
            text: [Text.of('Redstone Device: Sends Messages to Nearby Players').darkRed()]
        },
        {
            items: ['supplementaries:turn_table'],
            text: [Text.of('Redstone Device: Rotates Blocks and Entities').darkRed()]
        },
        {
            items: ['supplementaries:pulley_block'],
            text: [Text.of('Redstone Device: Raises or Lowers Chains and Ropes When Rotated').darkRed()]
        },
        {
            items: [
                'chimes:amethyst_chimes',
                'chimes:copper_chimes',
                'chimes:carved_bamboo_chimes',
                'chimes:iron_chimes',
                'chimes:bamboo_chimes'
            ],
            text: [Text.of('The gentle sounds keep Phantoms at bay').aqua()]
        },
        {
            items: ['kubejs:aura_leaf'],
            text: [Text.of('Generate a quantity of Aura').gold()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_producer',
                'enigmaticunity:bright_source_producer',
                'enigmaticunity:dim_source_producer'
            ],
            text: [Text.of('Arcane Apparatus: Energy to Source and Aura').green()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_generator',
                'enigmaticunity:bright_source_generator',
                'enigmaticunity:dim_source_generator'
            ],
            text: [Text.of('Arcane Apparatus: Source and Aura to Energy').green()]
        },
        {
            items: [
                'create:mechanical_pump',
                'industrialforegoing:water_condensator',
                'thermal:device_water_gen',
                'mekanism:electric_pump',
                'immersiveengineering:fluid_pump',
                'pneumaticcraft:gas_lift'
            ],
            text: [Text.of(`Fluid Pump`).gold()]
        }

        /* 
        {
            items: ['clockout:clockout_block'],
            text: [Text.of(`Outputs redstone when the player is online.`).aqua()]
        }
        */
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.base.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
