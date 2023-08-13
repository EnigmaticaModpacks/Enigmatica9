ServerEvents.tags('item', (event) => {
    event.get('quark:revertable_chests').add(/twilightforest:.*_chest$/);
});
