// https://github.com/AlmostReliable/lootjs/wiki
LootJS.modifiers((event) => {
    event.removeGlobalModifier([
        'hexerei:sage_seeds_from_grass',
        'hexerei:sage_seeds_from_tall_grass' // This is not printed out by LootJS as global Loot Modifier because Hexerei doesn't actually list it themselves, but its a thing so its better to leave it here for future
    ]);
});
