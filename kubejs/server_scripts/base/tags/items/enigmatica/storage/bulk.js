ServerEvents.tags('item', (event) => {
    var items = [
        //'botania:black_hole_talisman'
    ];

    var tags = ['enigmatica:containers', 'enigmatica:containers/bulk'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/black_hole_unit/)
            .add(/black_hole_controller/)
            .add('#functionalstorage:drawer')
            .add(/qio_drive/)
            .add(/mekanism:\w+_bin/)
            .add(/ae2:cell_component_/)
            .add(/ae2:item_storage_cell_/)
            .add(/ae2things:disk_drive_/);
    });
});
