ServerEvents.entityLootTables((event) => {
    const entity_types = [
        'blue_skies:azulfo',
        'blue_skies:crogre',
        'blue_skies:crystal_camel',
        'blue_skies:diophyde_prowler',
        'blue_skies:reindeer',
        'blue_skies:shade_monitor',
        'blue_skies:stardust_ram',
        'minecraft:cow',
        'minecraft:donkey',
        'minecraft:goat',
        'minecraft:horse',
        'minecraft:llama',
        'minecraft:pig',
        'minecraft:sheep',
        'minecraft:trader_llama',
        'twilightforest:bighorn_sheep',
        'twilightforest:boar',
        'twilightforest:deer'
    ];

    entity_types.forEach((entity_type) => {
        event.modifyEntity(entity_type, (table) => {
            table.addPool((pool) => {
                pool.rolls = 1.0;
                pool.addItem('hexerei:animal_fat', 1, [0, 2]).addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', min: 0.0, max: 1.0 }
                });
            });
        });
    });
});
