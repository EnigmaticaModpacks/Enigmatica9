ServerEvents.tags('item', (event) => {
    dye_sources.forEach((dye_source) => {
        const primary_color = dye_source.primary.split(':')[1].replace('_dye', '');

        if (colors.includes(primary_color)) {
            event.get(`enigmatica:${dye_source.type}_dye_sources/${primary_color}`).add(dye_source.input);
        }
    });
});
