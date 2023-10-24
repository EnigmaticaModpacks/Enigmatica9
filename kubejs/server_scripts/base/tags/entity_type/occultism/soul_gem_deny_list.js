ServerEvents.tags('entity_type', (event) => {
    event
        .get('occultism:soul_gem_deny_list')
        .remove('minecraft:wither')
        .add([
            'ars_nouveau:familiar_amethyst_golem',
            'ars_nouveau:familiar_bookwyrm',
            'ars_nouveau:familiar_drygmy',
            'ars_nouveau:familiar_starbuncle',
            'ars_nouveau:familiar_whirlisprig',
            'ars_nouveau:familiar_wixie',
            'ars_elemental:firenando_familiar',
            'ars_elemental:siren_familiar'
        ]);
});
