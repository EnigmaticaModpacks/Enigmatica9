ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_hoe/, /_aiot/, 'immersiveengineering:hoe_steel']);
    event.get('forge:tools/hoes').add([/_hoe/, /_aiot/, 'immersiveengineering:hoe_steel']);
    event.get('forge:hoes').add([/_hoe/, /_aiot/, 'immersiveengineering:hoe_steel']);
});
