ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_shovel$/, /_aiot/, /_paxel/, /_excavator/, 'immersiveengineering:shovel_steel']);
    event
        .get('forge:tools/shovels')
        .add([/_shovel$/, /_aiot/, /_paxel/, /_excavator/, 'immersiveengineering:shovel_steel']);
    event.get('forge:shovels').add([/_shovel$/, /_aiot/, /_paxel/, /_excavator/, 'immersiveengineering:shovel_steel']);
});
