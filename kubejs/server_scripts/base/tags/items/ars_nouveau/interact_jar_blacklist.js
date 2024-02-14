ServerEvents.tags('item', (event) => {
    event.get('ars_nouveau:interact_jar_blacklist').add([/ars_nouveau:.*_spell_book/]);
});
