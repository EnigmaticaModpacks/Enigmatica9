ServerEvents.tags('block', (event) => {
    const items = ['minecraft:crafting_table'];

    event.add('forge:workbenches', items);
});
