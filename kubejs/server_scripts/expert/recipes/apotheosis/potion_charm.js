ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/apotheosis/potion_charm/';

    event.custom({
        type: 'apotheosis:potion_charm',
        recipe: [[{ item: 'hexerei:mindful_trance_blend' }], ['potion'], [{ item: 'occultism:otherstone_slab' }]]
    });
});
