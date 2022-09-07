ServerEvents.tags('item', (event) => {
    event.add('forge:gems', ['minecraft:ender_pearl', 'minecraft:coal']);
    event.add('forge:gems/ender', 'minecraft:ender_pearl');
    event.add('forge:gems/coal', 'minecraft:coal');
    event.add('forge:gems/charcoal', 'minecraft:charcoal');

    blueSkiesGems.forEach((material) => {
        let gem = material;

        if (material == 'diopside') {
            gem = 'diopside_gem';
        }

        if (material == 'pyrope') {
            gem = 'pyrope_gem';
        }

        event.add('forge:gems', `blue_skies:${gem}`);
        event.add(`forge:gems/${material}`, `blue_skies:${gem}`);
        event.removeAll(`blue_skies:gems/${material}`);
    });
});
