// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Currently doesn't work, for unknown reasons.
    // event.removeGlobalModifier([
    //     "occultism:datura_seed_from_grass",
    //     "occultism:datura_seed_from_tall_grass"
    // ])
    
    event
        .addBlockLootModifier([
            "minecraft:grass",
            "minecraft:tall_grass"
        ])
        .removeLoot("occultism:datura_seeds")
});