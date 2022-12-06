ServerEvents.recipes((event) => {
    const sands = ['white_sand', 'blue_sand', 'pink_sand', 'purple_sand', 'black_sand'];

    sands.forEach((sand) => {
        event
            .shaped(
                `byg:${sand}stone`, // Output
                [
                    // Pattern
                    'AA',
                    'AA'
                ],
                {
                    // Keys
                    A: `#forge:${sand}`
                }
            )
            .id(`byg:${sand}stone`);
    });
});
