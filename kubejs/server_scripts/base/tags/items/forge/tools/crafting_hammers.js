ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add(['immersiveengineering:hammer']);
    event.get('forge:tools/crafting_hammers').add(['immersiveengineering:hammer']);
});
