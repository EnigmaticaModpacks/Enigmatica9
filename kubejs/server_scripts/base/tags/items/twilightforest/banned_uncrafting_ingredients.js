ServerEvents.tags('item', (event) => {
    event.get('twilightforest:banned_uncrafting_ingredients').remove(/.*/);
});
