ServerEvents.tags('item', (event) => {
    const items = ['twilightforest:canopy_bookshelf'];
    event.get('forge:bookshelves').add(items);
});
