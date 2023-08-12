//priority: 900

PlayerEvents.loggedIn((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const { player } = event;

    if (!player.stages.has('starting_items')) {
        player.stages.add('starting_items');

        let starting_items = [
            Item.of('minecraft:bow', {
                Damage: 0,
                'quark:RuneAttached': 1,
                'quark:RuneColor': { Count: 1, id: 'quark:blank_rune' }
            }).enchant('minecraft:unbreaking', 1),

            'supplementaries:quiver',
            '64x minecraft:arrow',
            '64x minecraft:arrow',
            '64x minecraft:arrow',
            '64x minecraft:arrow',
            '64x minecraft:arrow',
            'twilightforest:magic_map',
            Item.of(
                'sophisticatedbackpacks:backpack',
                '{borderColor:6258977,clothColor:6846789,inventorySlots:27,upgradeSlots:1}'
            )
        ];

        starting_items.forEach((item) => {
            player.give(item);
        });

        player.setHeadArmorItem(
            Item.of('minecraft:leather_helmet', {
                Damage: 0,
                display: { Name: '{"text":"Sturdy Leather Cap","color":"dark_green"}', color: 7441479 },
                'quark:RuneAttached': 1,
                'quark:RuneColor': { Count: 1, id: 'quark:blank_rune' }
            }).enchant('minecraft:unbreaking', 1)
        );

        player.setChestArmorItem(
            Item.of('minecraft:leather_chestplate', {
                Damage: 0,
                display: { Name: '{"text":"Sturdy Leather Tunic","color":"dark_green"}', color: 7441479 },
                'quark:RuneAttached': 1,
                'quark:RuneColor': { Count: 1, id: 'quark:blank_rune' }
            }).enchant('minecraft:unbreaking', 1)
        );

        player.setLegsArmorItem(
            Item.of('minecraft:leather_leggings', {
                Damage: 0,
                display: { Name: '{"text":"Sturdy Leather Pants","color":"dark_green"}', color: 7441479 },
                'quark:RuneAttached': 1,
                'quark:RuneColor': { Count: 1, id: 'quark:blank_rune' }
            }).enchant('minecraft:unbreaking', 1)
        );

        player.setFeetArmorItem(
            Item.of('minecraft:leather_boots', {
                Damage: 0,
                display: { Name: '{"text":"Sturdy Leather Boots","color":"dark_green"}', color: 7441479 },
                'quark:RuneAttached': 1,
                'quark:RuneColor': { Count: 1, id: 'quark:blank_rune' }
            }).enchant('minecraft:unbreaking', 1)
        );
    }
});
