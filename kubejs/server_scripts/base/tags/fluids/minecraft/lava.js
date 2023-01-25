ServerEvents.tags('fluid', (event) => {
    event.get('minecraft:lava').remove([/quicksilver/]);
});
