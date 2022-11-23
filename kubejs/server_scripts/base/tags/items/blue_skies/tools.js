ServerEvents.tags('item', (event) => {
    const types = ['swords', 'pickaxes', 'axes', 'hoes', 'shovels'];

    event.removeAll('blue_skies:tools');

    types.forEach((type) => {
        event.removeAll(`blue_skies:tools/${type}`);
    });
});
