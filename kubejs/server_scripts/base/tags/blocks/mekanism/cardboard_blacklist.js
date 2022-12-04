ServerEvents.tags('block', (event) => {
    const cardboard_whitelist = [/chest$/, /drawer$/, /cooler$/, /crate$/, /cabinet$/, /barrel$/, /basket$/];
    const exceptions = [/sophisticated.*:/, /mekanism:/, /functionalstorage:/];

    event.get('mekanism:cardboard_blacklist').add(/.*/).remove(cardboard_whitelist).add(exceptions);
    event.get('mekanism:cardboard_whitelist').add(cardboard_whitelist).remove(exceptions);
});
