ServerEvents.tags('block', (event) => {
    let foliage = ['byg:weeping_milkcap_mushroom_block', 'byg_green_mushroom_block'];
    let stems = ['byg:white_mushroom_stem'];
    //event.add('ars_nouveau:harvest/fellable', ['twilightforest:mazestone']);

    event.add('ars_nouveau:harvest/foliage', foliage);
    event.add('ars_nouveau:harvest/stems', stems);
});
