ServerEvents.tags('item', (event) => {
    event.add('forge:raw_materials', [
        `blue_skies:raw_falsite`,
        `blue_skies:raw_ventium`,
        `blue_skies:raw_horizonite`,
        `blue_skies:raw_aquite`,
        `blue_skies:raw_charoite`
    ]);
    event.add(`forge:raw_materials/falsite`, `blue_skies:raw_falsite`);
    event.add(`forge:raw_materials/ventium`, `blue_skies:raw_ventium`);
    event.add(`forge:raw_materials/horizonite`, `blue_skies:raw_horizonite`);

    event.add(`forge:raw_materials/aquite`, `blue_skies:raw_aquite`);
    event.add(`forge:raw_materials/charoite`, `blue_skies:raw_charoite`);
});
