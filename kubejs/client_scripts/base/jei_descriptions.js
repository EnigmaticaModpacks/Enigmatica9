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
        /*
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
        */
        {
            items: [/quark:\w+_corundum$/],
            text: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.',
                ' ',
                'May sprout Corundum Clusters as well.'
            ]
        },
        {
            items: [/quark:\w+_corundum_cluster/],
            text: ['Grows occasionally on Corundum Blocks when grown underground.']
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Overworld or Atum. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:end' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the End or The Undergarden. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Nether. This action removes Aura from the area.',
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
            items: ['bloodmagic:weak_tau'],
            text: [`Found in chests within the Demon Realm.`]
        },
        {
            items: ['bloodmagic:strong_tau'],
            text: [`Produced by growing Tau near mobs.`]
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
                `When applied to a tool in an anvil, the tool will just stop working when durability runs out, instead of being destroyed.`
            ]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`When equipped in the belt slot, hold the sneak key while airborne to float.`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`Valid Projectiles:`, ``, `● Snowballs`, `● Eggs`, `● Arrows`, `● Fire Charges`, `● Spectral Arrows`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`● Ender Pearls`, `● Llama Spit`, `● Bottles o' Enchanting`, `● Shulker Bullets`, `● Tridents`]
        },
        {
            items: ['naturesaura:birth_spirit'],
            text: [`Obtained by manually breeding animals in high Aura areas.`]
        },
        {
            items: ['explorerscompass:explorerscompass'],
            text: [`May only be used to locate Blue Skies structures.`]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            console.log(item);
            event.addItem(item, description.text);
        });
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.addItem(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.addItem(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });

    disabledItems.forEach((item) => {
        event.addItem(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues"
        );
    });
});
