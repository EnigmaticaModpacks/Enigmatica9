ServerEvents.tags('entity_type', (event) => {
    event.get('occultism:familiars').add(/occultism:.*_familiar/);
});
