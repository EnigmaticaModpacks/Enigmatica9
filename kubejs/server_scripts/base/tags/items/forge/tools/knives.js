ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_knife$/]);
    event.get('forge:knives').add([/_knife$/]);
    event.get('farmersdelight:tools/knives').add([/_knife$/]);
    event.get('farmersdelight:straw_harvesters').add([/_knife$/]);
});
