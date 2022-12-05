ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_sword$/, 'immersiveengineering:sword_steel']);
    event.get('forge:tools/swords').add([/_sword$/, 'immersiveengineering:sword_steel']);
    event.get('forge:swords').add([/_sword$/, 'immersiveengineering:sword_steel']);
});
