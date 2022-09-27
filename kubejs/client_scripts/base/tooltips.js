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
            items: ['naturesaura:light_staff'],
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
            items: ['naturesaura:spawn_lamp'],
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
            items: ['naturesaura:ender_crate', 'naturesaura:ender_access', 'minecraft:ender_chest'],
            text: [Text.of(`Arcane Apparatus: Cross-Dimensional Item Transportation`).darkPurple()]
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
