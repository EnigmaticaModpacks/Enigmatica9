ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/apotheosis/potion_charm/';

    event.custom({
        type: 'apotheosis:potion_charm',
        recipe: [
            [
                { item: 'hexerei:mandrake_root' },
                { item: 'hexerei:mindful_trance_blend' },
                { item: 'hexerei:mandrake_root' }
            ],
            [{ item: 'hexerei:dried_yellow_dock_flowers' }, 'potion', { item: 'hexerei:dried_yellow_dock_flowers' }],
            [
                { item: 'hexerei:mandrake_root' },
                { item: 'occultism:otherstone_slab' },
                { item: 'hexerei:mandrake_root' }
            ]
        ]
    });
});
