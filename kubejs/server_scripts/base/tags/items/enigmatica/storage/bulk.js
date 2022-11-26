ServerEvents.tags('item', (event) => {
    const items = [
        /black_hole_unit/,
        /black_hole_controller/,
        /qio_drive/,
        /mekanism:.*_bin/,
        /ae2:cell_component_/,
        /ae2:item_storage_cell_/,
        /ae2things:disk_drive_/,
        '#functionalstorage:drawer'
        //'botania:black_hole_talisman'
    ];

    const tagGroups = ['enigmatica:containers', 'enigmatica:containers/bulk'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items);
    });
});
