ClientEvents.highPriorityAssets((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const models = [
        {
            path: 'pneumaticcraft:models/item/module_expansion_card',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/module_expansion_card' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_iron',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_iron' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_compressed_iron',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_compressed_iron' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_diamond',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_diamond' }
            }
        },
        {
            path: 'immersiveengineering:models/item/drillhead_steel',
            json_model: {
                parent: 'minecraft:item/generated',
                textures: { layer0: 'kubejs:item/drillhead_steel' }
            }
        },
        {
            path: 'immersiveengineering:models/item/sawblade',
            json_model: {
                parent: 'minecraft:item/generated',
                textures: { layer0: 'kubejs:item/sawblade' }
            }
        },
        {
            path: 'minecraft:models/item/shears',
            json_model: {
                parent: 'minecraft:item/generated',
                textures: { layer0: 'kubejs:item/shears' }
            }
        },
        {
            path: 'minecraft:models/item/heart_of_the_sea',
            json_model: {
                parent: 'minecraft:item/generated',
                textures: { layer0: 'kubejs:item/blue_pearl' }
            }
        },
        {
            path: 'occultism:models/block/golden_sacrificial_bowl',
            json_model: {
                parent: 'occultism:block/sacrificial_bowl',
                textures: {
                    1: 'kubejs:block/sourcestone_gold'
                }
            }
        },
        {
            path: 'occultism:models/block/sacrificial_bowl',
            json_model: {
                credit: 'Made with Blockbench',
                parent: 'block/block',
                texture_size: [64, 64],
                textures: {
                    0: 'kubejs:block/sourcestone',
                    1: 'kubejs:block/sourcestone',
                    2: 'kubejs:block/source_gem_core',
                    particle: 'kubejs:block/sourcestone'
                },
                elements: [
                    {
                        name: 'Top',
                        from: [4, 0, 4],
                        to: [12, 2.3, 12],
                        rotation: { angle: 0, axis: 'y', origin: [8, 0, 8] },
                        faces: {
                            north: { uv: [0, 0, 16, 4], texture: '#0' },
                            east: { uv: [0, 0, 16, 4], texture: '#0' },
                            south: { uv: [0, 0, 16, 4], texture: '#0' },
                            west: { uv: [0, 0, 16, 4], texture: '#0' },
                            up: { uv: [16, 16, 0, 0], texture: '#2' },
                            down: { uv: [16, 0, 0, 16], texture: '#0' }
                        }
                    },
                    {
                        name: 'rim',
                        from: [4.01, 1.71, 11],
                        to: [11.99, 3.71, 15],
                        rotation: { angle: -22.5, axis: 'x', origin: [8, 1, 15] },
                        faces: {
                            north: { uv: [0, 0, 15.95, 8], rotation: 180, texture: '#1' },
                            east: { uv: [0.75, 0, 5, 8], rotation: 270, texture: '#1' },
                            south: { uv: [0, 0, 16, 3], texture: '#0' },
                            west: { uv: [3.25, 0, 7.5, 8], rotation: 90, texture: '#1' },
                            up: { uv: [0, 0, 16, 8], rotation: 180, texture: '#1' },
                            down: { uv: [0, 0, 16, 8], texture: '#1' }
                        }
                    },
                    {
                        name: 'rim',
                        from: [4.01, 1.75, 1],
                        to: [11.99, 3.75, 5],
                        rotation: { angle: 22.5, axis: 'x', origin: [8, 1.5, 1] },
                        faces: {
                            north: { uv: [0, 0, 16, 3], rotation: 180, texture: '#0' },
                            east: { uv: [3.25, 0, 7.5, 8], rotation: 90, texture: '#1' },
                            south: { uv: [0, 0, 15.95, 8], texture: '#1' },
                            west: { uv: [3.25, 0, 7.5, 8], rotation: 270, texture: '#1' },
                            up: { uv: [0, 0, 16, 8], texture: '#1' },
                            down: { uv: [0, 0, 16, 8], rotation: 180, texture: '#1' }
                        }
                    },
                    {
                        name: 'rim',
                        from: [11, 1.75, 4.01],
                        to: [15, 3.75, 11.99],
                        rotation: { angle: 22.5, axis: 'z', origin: [15, 1.5, 8] },
                        faces: {
                            north: { uv: [3.25, 0, 7.5, 8], rotation: 270, texture: '#1' },
                            east: { uv: [0, 0, 16, 3], rotation: 180, texture: '#0' },
                            south: { uv: [0.75, 0, 5, 8], rotation: 90, texture: '#1' },
                            west: { uv: [0, 0, 15.95, 8], texture: '#0' },
                            up: { uv: [0, 0, 16, 8], rotation: 90, texture: '#1' },
                            down: { uv: [0, 0, 16, 8], rotation: 90, texture: '#1' }
                        }
                    },
                    {
                        name: 'rim',
                        from: [1, 1.75, 4.01],
                        to: [5, 3.75, 11.99],
                        rotation: { angle: -22.5, axis: 'z', origin: [1, 1.5, 8] },
                        faces: {
                            north: { uv: [3.25, 0, 7.5, 8], rotation: 90, texture: '#1' },
                            east: { uv: [0, 0, 15.95, 8], rotation: 180, texture: '#0' },
                            south: { uv: [0.75, 0, 5, 8], rotation: 270, texture: '#1' },
                            west: { uv: [0, 0, 16, 3], texture: '#0' },
                            up: { uv: [0, 0, 16, 8], rotation: 270, texture: '#1' },
                            down: { uv: [0, 0, 16, 8], rotation: 270, texture: '#1' }
                        }
                    }
                ],
                display: {
                    thirdperson_righthand: {
                        rotation: [75, 45, 0],
                        translation: [0, 2.5, 3],
                        scale: [0.375, 0.375, 0.375]
                    },
                    thirdperson_lefthand: {
                        rotation: [75, 45, 0],
                        translation: [0, 2.5, 3],
                        scale: [0.375, 0.375, 0.375]
                    },
                    firstperson_righthand: { rotation: [0, 45, 0], translation: [0, 3, 0], scale: [0.5, 0.5, 0.5] },
                    firstperson_lefthand: { rotation: [0, 225, 0], translation: [0, 3, 0], scale: [0.5, 0.5, 0.5] },
                    ground: { translation: [0, 1.5, 0], scale: [0.5, 0.5, 0.5] },
                    gui: { rotation: [30, -45, 0], scale: [0.75, 0.75, 0.75] },
                    head: { translation: [0, 14.5, 0] },
                    fixed: { rotation: [-90, 0, 0], translation: [0, 0, -6], scale: [0.75, 0.75, 0.75] }
                },
                groups: [{ name: 'group', origin: [1, 15.5, 8], children: [0, 1, 2, 3, 4] }]
            }
        }
    ];

    models.forEach((texture) => {
        event.add(texture.path, texture.json_model);
    });
});
