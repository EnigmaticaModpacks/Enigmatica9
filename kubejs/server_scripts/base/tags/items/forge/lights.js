ServerEvents.tags('item', (event) => {
    event
        .get('forge:lights')
        .add([
            /_lantern/,
            /_lamp/,
            /torch/,
            /candle/,
            /campfire/,
            /illumin/,
            /sconce/,
            /candelabra/,
            /chandelier/,
            /brazier/,
            'minecraft:beacon',
            'minecraft:end_rod',
            'minecraft:glowstone',
            'minecraft:lava_bucket',
            'minecraft:magma_block',
            'minecraft:shroomlight',
            'immersiveengineering:balloon',
            'immersiveengineering:lantern'
        ])
        .remove(['occultism:magic_lamp_empty', 'hexerei:candle_dipper']);
});
