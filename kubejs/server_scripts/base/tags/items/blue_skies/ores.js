ServerEvents.tags('item', (event) => {
    event.get('forge:ores/falsite').add('blue_skies:falsite_ore');
    event.get('forge:ores/horizonite').add('blue_skies:horizonite_ore');
    event.get('forge:ores/ventium').add('blue_skies:ventium_ore');
    event.get('forge:ores/diopside').add(['blue_skies:everbright_diopside_ore', 'blue_skies:everdawn_diopside_ore']);
    event.get('forge:ores/pyrope').add(['blue_skies:everbright_pyrope_ore', 'blue_skies:everdawn_pyrope_ore']);
    event.get('forge:ores/aquite').add(['blue_skies:everbright_aquite_ore', 'blue_skies:everdawn_aquite_ore']);
    event.get('forge:ores/charoite').add(['blue_skies:everbright_charoite_ore', 'blue_skies:everdawn_charoite_ore']);
    event.get('forge:ores/moonstone').add(['blue_skies:everbright_moonstone_ore', 'blue_skies:everdawn_moonstone_ore']);
    event.get('blue_skies:ores/falsite').removeAll();
    event.get('blue_skies:ores/horizonite').removeAll();
    event.get('blue_skies:ores/ventium').removeAll();
    event.get('blue_skies:ores/diopside').removeAll();
    event.get('blue_skies:ores/pyrope').removeAll();
    event.get('blue_skies:ores/aquite').removeAll();
    event.get('blue_skies:ores/charoite').removeAll();
    event.get('blue_skies:ores/moonstone').removeAll();
});
