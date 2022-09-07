ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/stoneworks/';

    const industrialforegoing = (event, material, type) => {
        let waterConsume = 0;
        let lavaConsume = 0;

        if (type == 'stone') {
            waterConsume = 1000;
        }

        event
            .custom({
                type: 'industrialforegoing:stonework_generate',
                output: { item: material, count: 1 },
                waterNeed: 1000,
                lavaNeed: 1000,
                waterConsume: waterConsume,
                lavaConsume: lavaConsume
            })
            .id(`${id_prefix}industrialforegoing/${material}`);
    };

    const thermal = (event, material) => {
        event
            .custom({
                type: 'thermal:rock_gen',
                result: { item: material },
                adjacent: 'minecraft:water',
                below: material
            })
            .id(`${id_prefix}thermal/${material}`);
    };

    cobblestones.forEach((material) => {
        // industrialforegoing(event, material, 'cobblestone');
        // thermal(event, material);
    });

    stones.forEach((material) => {
        // industrialforegoing(event, material, 'stone');
        // thermal(event, material);
    });
});
