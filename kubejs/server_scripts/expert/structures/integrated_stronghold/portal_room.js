MoreJSEvents.structureLoad((event) => {
    if (global.isExpertMode == false || !event.id.includes('integrated_stronghold:portal_room/portal_room')) {
        return;
    }

    let palette = event.getPalette(0);

    let i = 0;
    let runes = 'enigmaticaexpert';
    palette.forEach((blockData) => {
        if (blockData.id == 'minecraft:end_portal_frame') {
            let rune = runes.charAt(i);
            blockData.setBlock('supplementaries:end_stone_lamp', { rune: rune });
            i > runes.length ? (i = 0) : i++;
        }
    });
});
