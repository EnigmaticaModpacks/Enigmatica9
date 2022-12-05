ServerEvents.tags('item', (event) => {
    colors.forEach((color) => {
        event.get('forge:concrete_powder').add(`minecraft:${color}_concrete_powder`);
    });
});
