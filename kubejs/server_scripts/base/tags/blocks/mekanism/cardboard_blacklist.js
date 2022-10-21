ServerEvents.tags('block', (event) => {
    let cardboard_whitelist = [/(chest|drawer|cooler|crate|cabinet|barrel|basket)$/];
    var exceptions = [/sophisticated.*:/, /mekanism:/, /functionalstorage:/];

    event.get('mekanism:cardboard_blacklist').add(/.*/).remove(cardboard_whitelist).add(exceptions);
    event.get('mekanism:cardboard_whitelist').add(cardboard_whitelist).remove(exceptions);
});
