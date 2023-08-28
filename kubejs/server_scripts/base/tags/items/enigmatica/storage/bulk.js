ServerEvents.tags('item', (event) => {
    event
        .get('enigmatica:containers/bulk')
        .add([
            /black_hole_unit/,
            /black_hole_controller/,
            /qio_drive/,
            /mekanism:.*_bin/,
            /ae2:cell_component_/,
            /ae2:item_storage_cell_/,
            '#functionalstorage:drawer',
            'functionalstorage:armory_cabinet',
            'immersiveengineering:silo'
        ]);
});
