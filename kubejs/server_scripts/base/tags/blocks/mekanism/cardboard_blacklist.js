ServerEvents.tags('block', (event) => {
    event
        .get('mekanism:cardboard_blacklist')
        .add(/.*/)
        .remove([/chest$/, /drawer$/, /crate$/, /cabinet$/, /barrel$/, /basket$/, /repository$/])
        .add([/sophisticated.*:/, /mekanism:/, /functionalstorage:/]);
    event
        .get('mekanism:cardboard_whitelist')
        .add([/chest$/, /drawer$/, /crate$/, /cabinet$/, /barrel$/, /basket$/, /repository$/])
        .remove([/sophisticated.*:/, /mekanism:/, /functionalstorage:/]);
});
