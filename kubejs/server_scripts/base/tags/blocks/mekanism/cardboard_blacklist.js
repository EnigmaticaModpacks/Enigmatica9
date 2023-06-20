ServerEvents.tags('block', (event) => {
    event
        .get('mekanism:cardboard_blacklist')
        .add(/.*/)
        .remove([/chest$/, /drawer$/, /cooler$/, /crate$/, /cabinet$/, /barrel$/, /basket$/, /repository$/])
        .add([/sophisticated.*:/, /mekanism:/, /functionalstorage:/]);
    event
        .get('mekanism:cardboard_whitelist')
        .add([/chest$/, /drawer$/, /cooler$/, /crate$/, /cabinet$/, /barrel$/, /basket$/, /repository$/])
        .remove([/sophisticated.*:/, /mekanism:/, /functionalstorage:/]);
});
