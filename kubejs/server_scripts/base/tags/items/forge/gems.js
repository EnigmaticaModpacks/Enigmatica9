ServerEvents.tags('item', (event) => {
    event.add('forge:gems', [
        'minecraft:ender_pearl',
        'minecraft:coal',
        `blue_skies:pyrope_gem`,
        `blue_skies:aquite`,
        `blue_skies:diopside_gem`,
        `blue_skies:charoite`,
        `blue_skies:moonstone`
    ]);
    event.add('forge:gems/ender', 'minecraft:ender_pearl');
    event.add('forge:gems/coal', 'minecraft:coal');
    event.add('forge:gems/charcoal', 'minecraft:charcoal');

    event.add(`forge:gems/pyrope`, `blue_skies:pyrope_gem`);
    event.add(`forge:gems/aquite`, `blue_skies:aquite`);
    event.add(`forge:gems/diopside`, `blue_skies:diopside_gem`);
    event.add(`forge:gems/charoite`, `blue_skies:charoite`);
    event.add(`forge:gems/moonstone`, `blue_skies:moonstone`);
});
