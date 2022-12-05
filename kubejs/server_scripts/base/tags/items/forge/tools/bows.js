ServerEvents.tags('item', (event) => {
    event.get('forge:tools').add([/_bow$/]);
    event.get('forge:tools/bows').add([/_bow$/]);
    event.get('forge:bows').add([/_bow$/]);
});
