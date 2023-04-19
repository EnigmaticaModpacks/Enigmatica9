const FakePlayer = Java.loadClass('net.minecraftforge.common.util.FakePlayer');

// For FakePlayer to work in Pools, you have to use this as the condition:
/*
p.or((or) => {
    or.matchMainHand(ItemFilter.PICKAXE) // Main Condition (Can be more than one!, just add another 'or')
    or.and(a => {
        a.playerPredicate((p) => {
            return p.getClass().isAssignableFrom(FakePlayer); // Predicate for proper FakePlayer Implementation (Like AE2)
        })
        a.not(n => n.playerPredicate(p => true)) // Unfortunetally method above also picks up actual Player, so this is here to make sure player is not picked up!
    })
    or.not(n => n.playerPredicate(p => true)) // Predicate for non-players, so stuff that is FakePlayer but has wonky implementation or any other custom method (like Create)
})
*/

LootJS.modifiers((event) => {
    // Clusters
    // Dimensional

    event
        .addBlockLootModifier('emendatusenigmatica:dimensional_cluster')
        .removeLoot('emendatusenigmatica:dimensional_cluster_shard')
        .or((or) => {
            or.matchMainHand(ItemFilter.PICKAXE);
            or.and((a) => {
                a.playerPredicate((p) => {
                    return p.getClass().isAssignableFrom(FakePlayer);
                });
                a.not((n) => n.playerPredicate((p) => true));
            });
            or.not((n) => n.playerPredicate((p) => true));
        })
        .not((n) => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
        .addAlternativesLoot(
            LootEntry.of('rftoolsbase:dimensionalshard')
                .limitCount([1, 2])
                .applyOreBonus('minecraft:fortune')
                .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))),
            LootEntry.of('rftoolsbase:dimensionalshard').limitCount([1, 2])
        );

    // Fluorite
    event
        .addBlockLootModifier('emendatusenigmatica:fluorite_cluster')
        .removeLoot('emendatusenigmatica:fluorite_cluster_shard')
        .or((or) => {
            or.matchMainHand(ItemFilter.PICKAXE);
            or.and((a) => {
                a.playerPredicate((p) => {
                    return p.getClass().isAssignableFrom(FakePlayer);
                });
                a.not((n) => n.playerPredicate((p) => true));
            });
            or.not((n) => n.playerPredicate((p) => true));
        })
        .not((n) => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
        .addAlternativesLoot(
            LootEntry.of('emendatusenigmatica:fluorite_gem')
                .limitCount([1, 2])
                .applyOreBonus('minecraft:fortune')
                .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))),
            LootEntry.of('emendatusenigmatica:fluorite_gem').limitCount([2, 3])
        );

    // Sulfur
    event
        .addBlockLootModifier('emendatusenigmatica:sulfur_cluster')
        .removeLoot('emendatusenigmatica:sulfur_cluster_shard')
        .or((or) => {
            or.matchMainHand(ItemFilter.PICKAXE);
            or.and((a) => {
                a.playerPredicate((p) => {
                    return p.getClass().isAssignableFrom(FakePlayer);
                });
                a.not((n) => n.playerPredicate((p) => true));
            });
            or.not((n) => n.playerPredicate((p) => true));
        })
        .not((n) => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
        .addAlternativesLoot(
            LootEntry.of('emendatusenigmatica:sulfur_gem')
                .applyOreBonus('minecraft:fortune')
                .when((c) => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))),
            LootEntry.of('emendatusenigmatica:sulfur_gem').limitCount([2, 3])
        );

    // Buds
    let buds = ['fluorite', 'sulfur', 'dimensional'];
    let ratios = { small: 0.1, medium: 0.4, large: 0.7 };
    let ratios_keys = Object.keys(ratios);
    buds.forEach((bud) => {
        ratios_keys.forEach((size) => {
            event
                .addBlockLootModifier(`emendatusenigmatica:${size}_${bud}_bud`)
                .or((or) => {
                    or.matchMainHand(ItemFilter.PICKAXE);
                    or.and((a) => {
                        a.playerPredicate((p) => {
                            return p.getClass().isAssignableFrom(FakePlayer);
                        });
                        a.not((n) => n.playerPredicate((p) => true));
                    });
                    or.not((n) => n.playerPredicate((p) => true));
                })
                .not((n) => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
                .addLoot(LootEntry.of(`emendatusenigmatica:${bud}_dust`).when((c) => c.randomChance(ratios[size])));
        });
    });
});
