ServerEvents.tags('item', (event) => {
    const items = [/industrialforegoing:laser_lens0/];

    event.get('industrialforegoing:laser_lens').add(items);

    colors.forEach((color) => {
        event.get(`industrialforegoing:laser_lens/${color}`).add(`industrialforegoing:laser_lens${lens_colors[color]}`);
    });
});
