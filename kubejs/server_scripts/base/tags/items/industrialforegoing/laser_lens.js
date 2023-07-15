ServerEvents.tags('item', (event) => {
    const items = [/industrialforegoing:laser_lens0/, 'powah:lens_of_ender', /industrialforegoing:laser_lens/];

    event.get('industrialforegoing:laser_lens').add(items);

    colors.forEach((color) => {
        event.get(`industrialforegoing:laser_lens/${color}`).add(`industrialforegoing:laser_lens${lens_colors[color]}`);
    });

    event.get(`industrialforegoing:laser_lens/ender`).add('powah:lens_of_ender');
});
