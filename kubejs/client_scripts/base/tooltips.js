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
            items: ['kubejs:disabled_recipe_indicator'],
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
            items: ['naturesaura:hopper_upgrade'],
            text: [Text.of(`Arcane Apparatus: Ranged Hopper`).green()]
        },
        {
            items: [
                // 'hexerei:dried_sage_bundle',
                // 'hexerei:sage_burning_plate',
                'naturesaura:spawn_lamp'
            ],
            text: [Text.of(`Arcane Apparatus: Prevents Mob Spawns`).green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.of(`Arcane Apparatus: Generates FE From Aura`).red()]
        },
        {
            items: ['naturesaura:spring'],
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
                'functionalstorage:ender_drawer'
            ],
            text: [Text.of(`Arcane Apparatus: Cross-Dimensional Item Transportation`).darkPurple()]
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
            items: ['ars_nouveau:dominion_wand'],
            text: [Text.of(`Arcane Instrument: Configuration Tool`).lightPurple()]
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
                'naturesaura:auto_crafter'
            ],
            text: [Text.of(`Auto-crafter`).green()]
        }

        /*
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'thermal:enderium_glass',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'engineersdecor:panzerglass_block'
            ],
            text: [Text.of('Immune to the Wither').color('#4F0D75')]
        },  
        {
            items: ['clockout:clockout_block'],
            text: [Text.of(`Outputs redstone when the player is online.`).aqua()]
        }
        */
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
