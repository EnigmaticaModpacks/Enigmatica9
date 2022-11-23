ServerEvents.tags('item', (event) => {
    const items = [
        /_tank/,
        /fluid_storage/,
        /extrastorage:.*_fluid/,
        /ae2:fluid_storage_cell_/,
        //'chiselsandbits:bit_storage',
        //'rftoolsutility:tank',
        //'thermal:fluid_cell',
        //'industrialforegoing:black_hole_controller',
        'mekanism:dynamic_valve'
    ];
    const exceptions = [
        'pneumaticcraft:etching_tank',
        'mekanism:scuba_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_chemical_tank',
        'mekanism:creative_chemical_tank'
    ];
    const tagGroups = ['enigmatica:containers', 'enigmatica:containers/liquid', 'enigmatica:containers/fluid'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
