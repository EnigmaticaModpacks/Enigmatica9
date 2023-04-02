// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    // Currently doesn't work, for unknown reasons.
    // event.removeGlobalModifier([
    //     "hexerei:animal_fat_from_cow",
    //     "hexerei:animal_fat_from_pig",
    //     "hexerei:animal_fat_from_sheep",
    //     "hexerei:sage_seeds_from_grass",
    //     "hexerei:sage_seeds_from_tall_grass" // This is not printed out by LootJS as global loot modifier for some reason?
    // ])

    event
        .addBlockLootModifier([
            "minecraft:grass",
            "minecraft:tall_grass"
        ])
        .removeLoot("hexerei:sage_seed")

    event
        .addEntityLootModifier([
            "minecraft:cow",
            "minecraft:pig",
            "minecraft:sheep"
        ])
        .removeLoot("hexerei:animal_fat")
});