ServerEvents.tags('item', (event) => {
    let items = ['minecraft:crafting_table'];

    event.add('forge:workbenches', items);
});
