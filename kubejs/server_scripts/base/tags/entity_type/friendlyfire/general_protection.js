ServerEvents.tags('entity_type', (event) => {
    event
        .get('friendlyfire:general_protection')
        .add([
            /occultism:.*familiar/,
            'occultism:otherworld_bird',
            /pneumaticcraft:.*drone/,
            '#ars_nouveau:familiar',
            'ars_nouveau:starbuncle',
            'ars_nouveau:amethyst_golem',
            'ars_nouveau:drygmy',
            'ars_nouveau:whirlisprig',
            'ars_nouveau:wixie',
            'ars_nouveau:bookwyrm',
            'ars_elemental:firenando_entity',
            'ars_elemental:siren_entity'
        ]);
});
