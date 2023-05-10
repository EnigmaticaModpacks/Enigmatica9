ItemEvents.modification((event) => {
    const increaseStackSize = [
        /industrialforegoing:efficiency_addon/,
        /industrialforegoing:speed_addon/,
        /industrialforegoing:processing_addon/,
        /industrialforegoing:range_addon/,

        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',

        'powah:charged_snowball',

        'rftoolsbase:infused_enderpearl',
        'rftoolsbase:infused_diamond',

        'the_bumblezone:pollen_puff',

        //signs
        /(minecraft|supplementaries|twilightforest):\w+_sign/
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
