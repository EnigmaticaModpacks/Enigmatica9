ServerEvents.tags('item', (event) => {
    event.get('forge:rods').add(['thermal:blizz_rod', 'thermal:blitz_rod', 'thermal:basalz_rod']);

    event.add(`forge:rods/blizz`, 'thermal:blizz_rod');
    event.add(`forge:rods/blitz`, 'thermal:blitz_rod');
    event.add(`forge:rods/basalz`, 'thermal:basalz_rod');
    event.add(`forge:rods/ancient`, 'naturesaura:ancient_stick');

    event.get(`forge:rods/wooden`).remove(['naturesaura:ancient_stick']);

    event
        .get('forge:rods/all_metal')
        .add([
            'emendatusenigmatica:iron_rod',
            'emendatusenigmatica:lead_rod',
            'emendatusenigmatica:constantan_rod',
            'emendatusenigmatica:osmium_rod',
            'emendatusenigmatica:electrum_rod',
            'emendatusenigmatica:nickel_rod',
            'emendatusenigmatica:copper_rod',
            'emendatusenigmatica:enderium_rod',
            'emendatusenigmatica:signalum_rod',
            'emendatusenigmatica:lumium_rod',
            'emendatusenigmatica:gold_rod',
            'emendatusenigmatica:aluminum_rod',
            'emendatusenigmatica:steel_rod',
            'emendatusenigmatica:uranium_rod',
            'emendatusenigmatica:silver_rod',
            'emendatusenigmatica:bronze_rod',
            'emendatusenigmatica:brass_rod',
            'emendatusenigmatica:rose_gold_rod',
            'emendatusenigmatica:zinc_rod',
            'emendatusenigmatica:invar_rod',
            'emendatusenigmatica:tin_rod'
        ]);
});
