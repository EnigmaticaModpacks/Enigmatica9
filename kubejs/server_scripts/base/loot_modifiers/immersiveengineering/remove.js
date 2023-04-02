// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Currently doesn't work, for unknown reasons.
    // event.removeGlobalModifier([
    //     "immersiveengineering:hemp_from_grass",
    //     "immersiveengineering:hemp_from_tall_grass"
    // ])
    
    event
        .addBlockLootModifier([
            "minecraft:grass",
            "minecraft:tall_grass"
        ])
        .removeLoot("immersiveengineering:seed")
});