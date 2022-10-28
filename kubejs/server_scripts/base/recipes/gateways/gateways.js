ServerEvents.highPriorityData((event) => {
    // JSON Schema: https://gist.github.com/Shadows-of-Fire/a45a2742b7a0842c50738d3df3ce8148
    // Examples: https://github.com/Shadows-of-Fire/GatewaysToEternity/blob/master/src/main/resources/data/gateways/gateways

    let recipes = [];

    // Setup generic gateways for mobs.
    // This uses a standard layout to generate a small, medium, and large gate for each mob type.
    // Three rarities are required, but can all be the same mob.
    // NBT data may be specified as well, such as to charge creepers.
    // More unique entries should appear directly in recipes above.
    // Refer to constants/gateways_wave_modifiers for the standardized mob buffs at each wave.
    let generic_gateways = [
        {
            type: 'ghast_gate',
            color: '#F0F0F0',
            entries: {
                common: { entity: 'minecraft:ghast', nbt: '{}' },
                uncommon: { entity: 'twilightforest:carminite_ghastling', nbt: '{}' },
                rare: { entity: 'twilightforest:carminite_ghastguard', nbt: '{}' }
            }
        },
        {
            type: 'zombie_gate',
            color: '#71955B',
            entries: {
                common: { entity: 'minecraft:zombie', nbt: '{}' },
                uncommon: { entity: 'minecraft:husk', nbt: '{}' },
                rare: { entity: 'minecraft:drowned', nbt: '{}' }
            }
        },
        {
            type: 'shulker_gate',
            color: '#976797',
            entries: {
                common: { entity: 'minecraft:shulker', nbt: '{}' },
                uncommon: { entity: 'minecraft:shulker', nbt: '{}' },
                rare: { entity: 'minecraft:shulker', nbt: '{}' }
            }
        },
        {
            type: 'skeleton_gate',
            color: '#D3D3D3',
            entries: {
                common: { entity: 'minecraft:skeleton', nbt: '{}' },
                uncommon: { entity: 'minecraft:skeleton', nbt: '{}' },
                rare: { entity: 'minecraft:stray', nbt: '{}' }
            }
        },
        {
            type: 'spider_gate',
            color: '#605448',
            entries: {
                common: { entity: 'minecraft:spider', nbt: '{}' },
                uncommon: { entity: 'twilightforest:hedge_spider', nbt: '{}' },
                rare: { entity: 'twilightforest:king_spider', nbt: '{}' }
            }
        },
        {
            type: 'witch_gate',
            color: '#361758',
            entries: {
                common: { entity: 'minecraft:witch', nbt: '{}' },
                uncommon: { entity: 'minecraft:witch', nbt: '{}' },
                rare: { entity: 'minecraft:rabbit', nbt: '{"RabbitType":99}' }
            }
        },
        {
            type: 'blaze_gate',
            color: '#FFFF84',
            entries: {
                common: { entity: 'minecraft:blaze', nbt: '{}' },
                uncommon: { entity: 'minecraft:blaze', nbt: '{}' },
                rare: { entity: 'minecraft:blaze', nbt: '{}' }
            }
        },
        {
            type: 'creeper_gate',
            color: '#83DE71',
            entries: {
                common: { entity: 'minecraft:creeper', nbt: '{}' },
                uncommon: { entity: 'minecraft:creeper', nbt: '{}' },
                rare: { entity: 'minecraft:creeper', nbt: '{"powered": true}' }
            }
        },
        {
            type: 'enderman_gate',
            color: '#CC00FA',
            entries: {
                common: { entity: 'minecraft:enderman', nbt: '{}' },
                uncommon: { entity: 'minecraft:enderman', nbt: '{}' },
                rare: { entity: 'minecraft:enderman', nbt: '{}' }
            }
        },
        {
            type: 'magma_cube_gate',
            color: '#CB3D07',
            entries: {
                common: { entity: 'minecraft:magma_cube', nbt: '{}' },
                uncommon: { entity: 'minecraft:magma_cube', nbt: '{}' },
                rare: { entity: 'minecraft:magma_cube', nbt: '{}' }
            }
        },
        {
            type: 'slime_gate',
            color: '#7EBF6E',
            entries: {
                common: { entity: 'minecraft:slime', nbt: '{}' },
                uncommon: { entity: 'minecraft:slime', nbt: '{}' },
                rare: { entity: 'minecraft:slime', nbt: '{}' }
            }
        }
    ];

    generic_gateways.forEach((gateway) => {
        ['small', 'medium', 'large'].forEach((size) => {
            let id = size == 'medium' ? gateway.type : `${gateway.type}_${size}`;
            let max_wave_time = 1800;
            let setup_time = 150;

            // Defaults for Small gateways
            let loot_multiplier = 1,
                completion_xp = 250,
                spawn_range = 5,
                return_item = 'minecraft:ender_pearl',
                wave_properties = [
                    { common: 2, uncommon: 0, rare: 0, modifier: 'none' },
                    { common: 2, uncommon: 0, rare: 0, modifier: gateways_wave_modifiers.wave_two },
                    { common: 3, uncommon: 1, rare: 0, modifier: gateways_wave_modifiers.wave_three },
                    { common: 3, uncommon: 1, rare: 0, modifier: gateways_wave_modifiers.wave_four },
                    { common: 3, uncommon: 2, rare: 1, modifier: gateways_wave_modifiers.wave_five }
                ];

            // Medium
            if (size == 'medium') {
                loot_multiplier = 2;
                completion_xp = completion_xp * 2;
                spawn_range = spawn_range + 2;
                return_item = 'minecraft:ender_eye';
                wave_properties = [
                    { common: 2, uncommon: 1, rare: 0, modifier: 'none' },
                    { common: 2, uncommon: 1, rare: 0, modifier: gateways_wave_modifiers.wave_two },
                    { common: 3, uncommon: 2, rare: 0, modifier: gateways_wave_modifiers.wave_three },
                    { common: 3, uncommon: 2, rare: 1, modifier: gateways_wave_modifiers.wave_four },
                    { common: 3, uncommon: 2, rare: 2, modifier: gateways_wave_modifiers.wave_five }
                ];
            }

            // Large
            if (size == 'large') {
                loot_multiplier = 4;
                completion_xp = completion_xp * 5;
                spawn_range = spawn_range + 4;
                return_item = 'minecraft:nether_star';
                wave_properties = [
                    { common: 3, uncommon: 3, rare: 0, modifier: 'none' },
                    { common: 3, uncommon: 3, rare: 0, modifier: gateways_wave_modifiers.wave_two },
                    { common: 5, uncommon: 3, rare: 0, modifier: gateways_wave_modifiers.wave_three },
                    { common: 5, uncommon: 4, rare: 3, modifier: gateways_wave_modifiers.wave_four },
                    { common: 6, uncommon: 5, rare: 4, modifier: gateways_wave_modifiers.wave_five }
                ];
            }

            // Basic properties of the gateway
            let recipe = {
                size: size,
                color: gateway.color,
                leash_range: 64,
                waves: [],
                completion_xp: completion_xp,
                completion_rewards: {
                    common: 15 * loot_multiplier,
                    uncommon: 10 * loot_multiplier,
                    rare: 5 * loot_multiplier
                },
                spawn_range: spawn_range,
                id: id
            };

            // Rewards for completion of the entire gateway. Each wave also has rewards.
            recipe.rewards = [{ type: 'stack', stack: { item: return_item } }];

            let rarities = Object.keys(gateway.entries);
            rarities.forEach((rarity) => {
                let index = recipe.rewards.findIndex((reward) => reward.entity === gateway.entries[rarity].entity);
                // increment existing entries or create if new
                if (index >= 0) {
                    recipe.rewards[index].rolls = recipe.rewards[index].rolls + recipe.completion_rewards[rarity];
                } else {
                    recipe.rewards.push({
                        type: 'entity_loot',
                        entity: gateway.entries[rarity].entity,
                        rolls: recipe.completion_rewards[rarity]
                    });
                }
            });

            wave_properties.forEach((wave) => {
                let mob_list = [];
                rarities.forEach((rarity) => {
                    // Generate list of mobs to spawn
                    for (let i = 0; i < wave[rarity]; i++) {
                        mob_list.push({
                            entity: gateway.entries[rarity].entity,
                            nbt: gateway.entries[rarity].nbt
                        });
                    }
                });

                let loot_per_mob = 2 * loot_multiplier;
                recipe.waves.push(
                    generateGatewayWave(mob_list, loot_per_mob, wave.modifier, max_wave_time, setup_time)
                );
            });

            recipes.push(recipe);
        });
    });

    recipes.forEach((recipe) => {
        // console.log(JSON.stringify(recipe));
        event.addJson(`gateways:gateways/${recipe.id}.json`, recipe);
    });
});
