ServerEvents.tags('entity_type', (event) => {
    event
        .get('friendlyfire:general_protection')
        .add([/occultism:.*familiar/, 'occultism:otherworld_bird', /pneumaticcraft:.*drone/, '#ars_nouveau:familiar']);
});
