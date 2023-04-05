ServerEvents.tags('item', (event) => {
    event
        .get('forge:fabrics')
        .add([
            'immersiveengineering:ersatz_leather',
            'hexerei:infused_fabric',
            'immersiveengineering:hemp_fabric',
            'thermal:hazmat_fabric',
            'thermal:diving_fabric',
            'thermal:beekeeper_fabric'
        ]);

    event.get('forge:fabrics/ersatz_leather').add(['immersiveengineering:ersatz_leather']);
    event.get('forge:fabrics/infused').add(['hexerei:infused_fabric']);
    event.get('forge:fabrics/tough').add(['immersiveengineering:hemp_fabric']);
    event.get('forge:fabrics/protective').add(['thermal:hazmat_fabric']);
    event.get('forge:fabrics/marine').add(['thermal:diving_fabric']);
    event.get('forge:fabrics/woven').add(['thermal:beekeeper_fabric']);
});
