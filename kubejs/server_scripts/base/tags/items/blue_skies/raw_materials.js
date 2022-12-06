ServerEvents.tags('item', (event) => {
    event.removeAll(`blue_skies:raw_materials`);
    event.removeAll(`blue_skies:raw_materials/falsite`);
    event.removeAll(`blue_skies:raw_materials/ventium`);
    event.removeAll(`blue_skies:raw_materials/horizonite`);

    event.removeAll(`blue_skies:raw_materials/aquite`);
    event.removeAll(`blue_skies:raw_materials/charoite`);
});
