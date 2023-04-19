ServerEvents.tags('item', (event) => {
    event.get('forge:gems/coal_coke').add('immersiveengineering:coal_coke');
    event.get('minecraft:coals').remove('immersiveengineering:coal_coke');
});
