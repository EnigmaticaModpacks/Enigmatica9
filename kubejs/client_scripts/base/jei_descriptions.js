JEIEvents.information((event) => {
    const descriptions = [
        {
            items: ['farmersdelight:ham'],
            text: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: ['The Blizz spawns naturally in cold biomes. Mechanical Dirt works wonders for farming them.']
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: ['The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt works wonders for farming them.']
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt works wonders for farming them.'
            ]
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 192 and 196.']
        },
        {
            items: ['naturesaura:aura_bottle'],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the appropriate dimension. This action removes Aura from the area.',
                ' ',
                `Bottled Sunlight: The Overworld, Twilight Forest, or the Everdawn`,
                `Bottled Ghosts: Nether or Everbright`,
                `Bottled Darkness: The End or The Bumblezone`,
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: ['naturesaura:bottle_two_the_rebottling'],
            text: [
                'Right-Click in the air in the appropriate dimension to obtained bottled Aura types. This action removes Aura from the area.',
                ' ',
                `Bottled Sunlight: The Overworld, Twilight Forest, or the Everdawn`,
                `Bottled Ghosts: Nether or Everbright`,
                `Bottled Darkness: The End or The Bumblezone`,
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: ['naturesaura:vacuum_bottle'],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in an area devoid of Aura.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`Only drops from Ender Dragons after the first one has been killed.`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`Scoop up a small slime in an empty bucket.`]
        },
        {
            items: ['naturesaura:gold_leaf'],
            text: [`Obtained by breaking Golden Leaves.`]
        },
        {
            items: ['naturesaura:golden_leaves'],
            text: [`Obtained by using Brilliant Fiber on leaves. Allow to spread for best effect.`]
        },
        {
            items: ['naturesaura:break_prevention'],
            text: [
                `When applied to a tool in an anvil, the tool will stop working when durability runs out instead of being destroyed.`
            ]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`When equipped in the belt slot, hold the sneak key while airborne to float.`]
        },

        {
            items: ['naturesaura:birth_spirit'],
            text: [`Obtained by manually breeding animals in high Aura areas.`]
        },
        {
            items: ['explorerscompass:explorerscompass'],
            text: [`May only be used to locate Blue Skies structures.`]
        },
        {
            items: [
                'quark:violet_corundum',
                'quark:indigo_corundum',
                'quark:blue_corundum',
                'quark:green_corundum',
                'quark:yellow_corundum',
                'quark:orange_corundum',
                'quark:red_corundum'
            ],
            text: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.',
                ' ',
                'May sprout Corundum Clusters as well.'
            ]
        },
        {
            items: [
                'quark:violet_corundum_cluster',
                'quark:indigo_corundum_cluster',
                'quark:blue_corundum_cluster',
                'quark:green_corundum_cluster',
                'quark:yellow_corundum_cluster',
                'quark:orange_corundum_cluster',
                'quark:red_corundum_cluster'
            ],
            text: ['Grows occasionally on Corundum Blocks when grown underground.']
        },
        {
            items: ['occultism:tallow'],
            text: [`The Butcher's Knife has been disabled. Craft tallow instead.`]
        },
        {
            items: ['hexerei:animal_fat'],
            text: [`Drops from most large animals.`]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_producer',
                'enigmaticunity:bright_source_producer',
                'enigmaticunity:dim_source_producer'
            ],
            text: [
                `Any FE fed into this device will be converted and sent to nearby Source Jars.`,
                ` `,
                `If no Source Jars are available, or they are completely full, then the FE will instead be converted into Aura.`
            ]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_generator',
                'enigmaticunity:bright_source_generator',
                'enigmaticunity:dim_source_generator'
            ],
            text: [
                `Source from nearby Source Jars will be pulled into this device and converted to FE.`,
                ` `,
                `If sufficient Aura is available in the area, it will be consumed as well, dramatically increasing the FE produced.`
            ]
        },
        {
            items: ['starbunclemania:fluid_sourcelink'],
            text: [`Valid Fluids:`, ` `, `Potions`, `Ether Gas`, `Liquefied Source`, `Bio Diesel`, `Sludge`]
        },
        {
            items: ['ars_nouveau:mendosteen_pod'],
            text: [
                `Found only on naturally occuring Flourishing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Flourishing Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:frostaya_pod'],
            text: [
                `Found only on naturally occuring Cascading Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Cascading Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:bombegranate_pod'],
            text: [
                `Found only on naturally occuring Blazing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Blazing Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:bastion_pod'],
            text: [
                `Found only on naturally occuring Vexing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Vexing Archwood Logs.`
            ]
        },
        {
            items: ['ars_elemental:flashpine_pod'],
            text: [
                `Found only on naturally occuring Flashing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Flashing Archwood Logs.`
            ]
        },
        {
            items: ['blue_skies:moonstone_crystal'],
            text: [
                `Will grow on Blocks of Moonstone if placed in water.`,
                ` `,
                `May be boosted with Crystal Growth Accelerators.`
            ]
        },
        {
            items: ['blue_skies:sunstone_crystal'],
            text: [
                `Will grow on Blocks of Sunstone if placed in water.`,
                ` `,
                `May be boosted with Crystal Growth Accelerators.`
            ]
        },
        {
            items: ['blue_skies:sunstone_block', 'blue_skies:moonstone_block'],
            text: [
                `Place in Water to begin growing crystals on the sides. `,
                ` `,
                `May be boosted with Crystal Growth Accelerators.`
            ]
        },
        {
            items: ['ae2:name_press'],
            text: [
                `Used to automatically rename items in an Inscriber.`,
                ` `,
                `To obtain, Right-Click a Quartz Knife in the air then insert a valid ingot and provide the desired name.`
            ]
        },
        {
            items: [
                'immersiveengineering:alloy_smelter',
                'immersiveengineering:arc_furnace',
                'immersiveengineering:assembler',
                'immersiveengineering:auto_workbench',
                'immersiveengineering:blast_furnace',
                'immersiveengineering:bottling_machine',
                'immersiveengineering:coke_oven',
                'immersiveengineering:crusher',
                'immersiveengineering:diesel_generator',
                'immersiveengineering:excavator',
                'immersiveengineering:fermenter',
                'immersiveengineering:advanced_blast_furnace',
                'immersiveengineering:lightning_rod',
                'immersiveengineering:metal_press',
                'immersiveengineering:mixer',
                'immersiveengineering:refinery',
                'immersiveengineering:sawmill',
                'immersiveengineering:silo',
                'immersiveengineering:squeezer',
                'immersiveengineering:tank'
            ],
            text: [`This is a multi-block structure. Refer to the Engineer's Manual for instructions on building it.`]
        },
        {
            items: ['immersiveengineering:excavator'],
            text: [
                `Digs up materials from deposits deep in the ground. Refer to the Engineer's Manual for a full listing of deposits and how to locate them.`
            ]
        },
        {
            items: ['immersiveengineering:diesel_generator'],
            text: [`Generates FE by burning liquid fuels. Accepts the same fuels as the Thermal Compression Dynamo.`]
        },
        {
            items: ['immersiveengineering:lightning_rod'],
            text: [
                `Generates FE randomly during rainy or stormy weather. A fake lightning bolt will strike the Lightning Rod to indicate that this has happened. The chances of generating FE may be increased by building a larger Lightning Rod on this base.`
            ]
        },
        {
            items: ['starbunclemania:source_fluid_bucket'],
            text: [`Use a Source Condenser to convert Source to this liquid form.`]
        },
        {
            items: ['starbunclemania:source_condenser'],
            text: [`Converts Source from nearby Source Jars into Liquefied Source, placing it in any tank below it.`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_1'],
            text: [`● Hover Mode (Loses Altitude)`, `● Smart Hover`, `● Slowest Tier`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_2'],
            text: [`● Hover Mode (Loses Altitude)`, `● Smart Hover`, `● Faster than Previous Tier`]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_3'],
            text: [
                `● Builder Mode (Loses Altitude)`,
                `● Hover Mode (Loses Altitude)`,
                `● Smart Hover`,
                `● Faster than Previous Tier`
            ]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_4'],
            text: [
                `● Builder Mode (Loses Altitude)`,
                `● Hover Mode (Loses Altitude)`,
                `● Smart Hover`,
                `● Flight Stabilizers`,
                `● Faster than Previous Tier`
            ]
        },
        {
            items: ['pneumaticcraft:jet_boots_upgrade_5'],
            text: [
                `● Builder Mode (Keeps Altitude)`,
                `● Hover Mode (Keeps Altitude)`,
                `● Smart Hover`,
                `● Flight Stabilizers`,
                `● Fastest Tier`
            ]
        },
        {
            items: ['supplementaries:antique_ink'],
            text: [
                `May be obtained through fishing, inside urns, or purchased from Cartographers.`,
                ` `,
                `For an easy supply, try an Aquatic Entangler with Junk Nets!`
            ]
        },
        {
            items: [
                'hexerei:sage_seed',
                'immersiveengineering:seed',
                'occultism:datura_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds'
            ],
            text: ['Purchase from the Market block.']
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            // console.log(`Descriptions: ${item}`);
            event.addItem(item, description.text);
        });
    });

    // generatableCobblestone.forEach((cobblestone) => {
    //     event.addItem(
    //         cobblestone,
    //         'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
    //     );
    // });

    // generatableStone.forEach((stone) => {
    //     event.addItem(
    //         stone,
    //         'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
    //     );
    // });

    jei.base.items.disabled.forEach((item) => {
        if (item !== air) {
            // console.log(`Disabled: ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
