ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add(['immersiveengineering:hoe_steel']);
    event.get('forge:tools/hoes').add(['immersiveengineering:hoe_steel']);
    event.get('forge:hoes').add(['immersiveengineering:hoe_steel']);
});
