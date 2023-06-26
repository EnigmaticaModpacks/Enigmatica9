ServerEvents.tags('fluid', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    event.get('create:bottomless/allow').add(['minecraft:lava', 'minecraft:water', 'pneumaticcraft:oil']);
});
