ServerEvents.tags('block', (event) => {
    event.add('create:passive_boiler_heaters', [
        /campfire/,
        /magma/,
        'decorative_blocks:brazier',
        'decorative_blocks:soul_brazier',
        'powah:blazing_crystal_block',
        'powah:nitro_crystal_block'
    ]);
});
