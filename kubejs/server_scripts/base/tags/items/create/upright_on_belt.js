ServerEvents.tags('item', (event) => {
    event
        .get('create:upright_on_belt')
        .add([
            'hexerei:blood_bottle',
            'hexerei:blood_bucket',
            'hexerei:quicksilver_bucket',
            'hexerei:quicksilver_bottle'
        ]);
});
