ServerEvents.highPriorityData((event) => {
    event.addJson(`immersiveengineering:recipes/arc_recycling_list.json`, {
        type: 'immersiveengineering:generated_list',
        conditions: [{ type: 'forge:false' }]
    });
});
