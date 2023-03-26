ServerEvents.tags('item', (event) => {
    event.get('enigmatica:cobbleworks/stone').add(cobbleworks.stones);
    event.get('enigmatica:cobbleworks/cobblestone').add(cobbleworks.cobblestones);
    event.get('enigmatica:cobbleworks/basalt').add(cobbleworks.basalts);
});
