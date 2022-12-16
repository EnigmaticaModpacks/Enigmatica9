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
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Overworld, Twilight Forest, or the Everdawn. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:end' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the End or The Bumblezone. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Nether or the Everbright. This action removes Aura from the area.',
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
            items: ['naturesaura:infused_iron_pickaxe'],
            text: [
                'Right-Click Conversions:',
                ' ',
                'Cobblestone',
                '⤷ Mossy Cobblestone',
                'Stone Bricks',
                '⤷ Mossy Stone Bricks',
                'Cobblestone Wall',
                '⤷ Mossy Cobblestone Wall',
                ' ',
                'Stone Brick Wall',
                '⤷ Mossy Stone Brick Wall',
                'Farmland',
                '⤷ Rich Soil Farmland',
                'Roots',
                '⤷ Liveroots',
                'Stone',
                '⤷ Moss Block',
                ' '
            ]
        },
        {
            items: ['occultism:tallow'],
            text: [`The Butcher's Knife has been disabled. Craft tallow instead.`]
        },
        {
            items: ['hexerei:animal_fat'],
            text: [`Drops from most large animals.`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
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
            event.addItem(item, disabled_item_message);
        }
    });
});
