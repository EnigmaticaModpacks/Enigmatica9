ServerEvents.tags('item', (event) => {
    const items = [
        /pneumaticcraft:(reinforced_)?air_canister/,
        /pneumaticcraft:.*drone$/,
        /pneumaticcraft:pneumatic_(wrench|helmet|chestplate|leggings|boots)/,

        'pneumaticcraft:vortex_cannon',
        'pneumaticcraft:manometer',
        'pneumaticcraft:logistics_configurator',
        'pneumaticcraft:amadron_tablet',
        'pneumaticcraft:minigun',
        'pneumaticcraft:camo_applicator',
        'pneumaticcraft:jackhammer'
    ];

    // const tagGroups = ['enigmatica:containers', 'enigmatica:containers/air'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items);
    // });

    event.get('enigmatica:containers').add(items);
    event.get('enigmatica:containers/air').add(items);
});
