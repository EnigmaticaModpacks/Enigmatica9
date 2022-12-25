ServerEvents.tags('item', (event) => {
    event
        .get('forge:tools')
        .add([/_spear$/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
    event
        .get('forge:tools/tridents')
        .add([/_spear$/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
    event
        .get('forge:tridents')
        .add([/_spear$/])
        .remove(['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer']);
});
