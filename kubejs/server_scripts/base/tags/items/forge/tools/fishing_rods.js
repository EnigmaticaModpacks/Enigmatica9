ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/fishing_rod$/]);
    event.get('forge:tools/fishing_rods').add([/fishing_rod$/]);
    event.get('forge:fishing_rods').add([/fishing_rod$/]);
});
