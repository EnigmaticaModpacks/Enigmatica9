ServerEvents.tags('item', (event) => {
    dye_sources.forEach((dye_source) => {
        if (colors.includes(dye_source.primary.split(':')[1].replace('_dye', ''))) {
            event
                .get(
                    `enigmatica:${dye_source.type}_dye_sources/${dye_source.primary.split(':')[1].replace('_dye', '')}`
                )
                .add(dye_source.input);
        }
    });
});
