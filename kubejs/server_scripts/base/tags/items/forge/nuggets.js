ServerEvents.tags('item', (event) => {
    event.add('forge:nuggets', [`occultism:iesnium_nugget`]);
    event.add(`forge:nuggets/experience`, `create:experience_nugget`);
});
