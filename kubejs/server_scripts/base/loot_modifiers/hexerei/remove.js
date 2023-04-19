// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    event.removeGlobalModifier([
        'hexerei:sage_seeds_from_grass',
        'hexerei:sage_seeds_from_tall_grass' // This is not printed out by LootJS as global Loot Modifier because Hexerei doesn't actually list it themselves, but its a thing so its better to leave it here for future
        // This can't be removed due to Hexerei structure.
        // "hexerei:animal_fat_from_cow",
        // "hexerei:animal_fat_from_pig",
        // "hexerei:animal_fat_from_sheep",
    ]);

    event.addEntityLootModifier(['minecraft:cow', 'minecraft:pig', 'minecraft:sheep']).removeLoot('hexerei:animal_fat');
});
