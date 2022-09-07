ServerEvents.tags('item', (event) => {
    blueSkiesMetals.forEach((material) => {
        event.add('forge:raw_materials', `blue_skies:raw_${material}`);
        event.add(`forge:raw_materials/${material}`, `blue_skies:raw_${material}`);
        event.removeAll(`blue_skies:raw_materials/${material}`);
    });

    blueSkiesGems.forEach((material) => {
        if (material == 'pyrope' || material == 'diopside') {
            return;
        }
        event.add('forge:raw_materials', `blue_skies:raw_${material}`);
        event.add(`forge:raw_materials/${material}`, `blue_skies:raw_${material}`);
        event.removeAll(`blue_skies:raw_materials/${material}`);
    });
});
