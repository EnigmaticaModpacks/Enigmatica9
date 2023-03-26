ServerEvents.tags('item', (event) => {
    event.add('forge:nuggets', [
        `blue_skies:falsite_nugget`,
        `blue_skies:ventium_nugget`,
        `blue_skies:horizonite_nugget`,
        `occultism:iesnium_nugget`
    ]);
    event.add(`forge:nuggets/falsite`, `blue_skies:falsite_nugget`);
    event.add(`forge:nuggets/ventium`, `blue_skies:ventium_nugget`);
    event.add(`forge:nuggets/horizonite`, `blue_skies:horizonite_nugget`);
    event.add(`forge:nuggets/experience`, `create:experience_nugget`);
});
