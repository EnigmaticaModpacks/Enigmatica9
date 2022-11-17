ServerEvents.tags('fluid', (event) => {
    const fluids = ['minecraft:lava', 'minecraft:water', 'pneumaticcraft:oil'];
    event.get('create:bottomless/allow').add(fluids);
});
