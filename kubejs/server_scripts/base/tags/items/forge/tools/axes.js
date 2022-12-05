ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_axe$/, /_paxel/, /_aiot/, 'immersiveengineering:axe_steel']);
    event.get('forge:tools/axes').add([/_axe$/, /_paxel/, /_aiot/, 'immersiveengineering:axe_steel']);
    event.get('forge:axes').add([/_axe$/, /_paxel/, /_aiot/, 'immersiveengineering:axe_steel']);
});
