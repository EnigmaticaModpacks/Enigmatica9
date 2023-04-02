// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Currently doesn't work, for unknown reasons.
    // event.removeGlobalModifier([
    //     "sushigocrafting:grass_seeds"
    // ])
    
    event
        .addBlockLootModifier([
            "minecraft:grass",
            "minecraft:tall_grass"
        ])
        .removeLoot([
            "sushigocrafting:rice_seeds",
            "sushigocrafting:soy_seeds",
            "sushigocrafting:cucumber_seeds",
            "sushigocrafting:sesame_seeds",
            "sushigocrafting:wasabi_seeds",
        ])
});