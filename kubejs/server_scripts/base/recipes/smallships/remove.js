ServerEvents.highPriorityData((event) => {
    // Small ships (has recipes for types not yet in 1.19, keep an eye out for new types)
    let ships = ['dhow', 'galley', 'rowboat', 'war_galley', 'drakkar'];
    let woods = ['acacia', 'oak', 'dark_oak', 'jungle', 'spruce', 'birch'];

    ships.forEach((ship) => {
        woods.forEach((wood) => {
            event.addJson(`smallships:recipes/${wood}_${ship}`, {
                type: 'minecraft:crafting_shaped',
                conditions: [{ type: 'forge:false' }]
            });
        });
    });
});
