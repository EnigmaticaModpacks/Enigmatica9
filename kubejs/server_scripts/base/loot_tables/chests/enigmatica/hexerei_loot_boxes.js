ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/hexerei/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:jump_boost",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke"},glow:{effectAmplifierMultiplier:2,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:regeneration",effectParticle:{particle0:"minecraft:heart"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:slow_falling",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke",particle2:"minecraft:poof",particle3:"minecraft:cloud",particle4:"hexerei:broom_particle_4"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:strength",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke",particle2:"minecraft:poof",particle3:"minecraft:instant_effect",particle4:"minecraft:shriek"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:fire_resistance",effectParticle:{particle0:"minecraft:flame",particle1:"minecraft:smoke",particle2:"minecraft:poof"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:speed",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke",particle2:"minecraft:poof",particle3:"hexerei:broom_particle_4"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"hexerei:growth_effect",effectParticle:{particle0:"hexerei:broom_particle_6",particle1:"hexerei:broom_particle_5",particle2:"hexerei:broom_particle_4",particle3:"minecraft:smoke"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/herb_jar_herbs.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:water_breathing",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:cloud",particle2:"minecraft:bubble_pop",particle3:"minecraft:smoke"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:instant_damage",effectParticle:{particle0:"minecraft:flame",particle1:"minecraft:squid_ink",particle2:"minecraft:damage_indicator"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:instant_health",effectParticle:{particle0:"hexerei:damage_indicator",particle1:"hexerei:effect",particle3:"minecraft:heart"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:luck",effectParticle:{particle0:"minecraft:happy_villager"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"hexerei:sunshine_effect",effectParticle:{particle0:"minecraft:electric_spark",particle1:"minecraft:firework",particle2:"minecraft:enchanted_hit",particle3:"minecraft:end_rod"},swirl:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/candle_swirl_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:water_breathing",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:bubble",particle2:"minecraft:bubble_pop",particle3:"minecraft:smoke",particle4:"minecraft:poof",particle5:"hexerei:broom_particle_2"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:slowness",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke",particle2:"minecraft:poof",particle3:"hexerei:broom_particle_4"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
            pool.addItem(
                Item.of(
                    'hexerei:candle',
                    '{effect:"minecraft:poison",effectParticle:{particle0:"minecraft:effect",particle1:"minecraft:smoke",particle3:"minecraft:angry_villager",particle4:"hexerei:broom_particle_4"},glow:{effectAmplifierMultiplier:1,effectCooldownMultiplier:1,effectDurationMultiplier:1,layer:"hexerei:textures/block/potion_layer.png",meltingSpeedMultiplier:1,radiusMultiplier:1}}'
                ),
                1,
                8
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/hexerei/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem(Item.of('hexerei:herb_enhanced_broom_brush').enchant('minecraft:unbreaking', 5), 1, 1);
            pool.addItem('hexerei:crow_ankh_amulet', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/hexerei/rare' });
        });
    });
});
