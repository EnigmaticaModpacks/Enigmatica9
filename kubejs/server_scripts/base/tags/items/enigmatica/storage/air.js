ServerEvents.tags('item', (event) => {
    event
        .get('enigmatica:containers/air')
        .add([
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
        ]);
});
