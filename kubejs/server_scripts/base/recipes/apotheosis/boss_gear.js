/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    let recipes = { overworld: [], the_end: [], the_nether: [], twilight: [] };

    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            event.addJson(`apotheosis:boss_gear/${dimension}/${recipe.entity.split(':')[1]}.json`, recipe);
        });
    });
});
