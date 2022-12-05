ServerEvents.tags('fluid', (event) => {
    event.get('create:bottomless/allow').add(['minecraft:lava', 'minecraft:water', 'pneumaticcraft:oil']);
});
