ServerEvents.tags('block', (event) => {
    let items = [
        /campfire/,
        /magma/,
        'decorative_blocks:brazier',
        'decorative_blocks:soul_brazier',
        'powah:blazing_crystal_block',
        'powah:nitro_crystal_block'
    ];
    event.get('create:passive_boiler_heaters').add(items);
});
