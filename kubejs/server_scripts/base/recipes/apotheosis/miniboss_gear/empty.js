ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';

    // Used for mobs that should have no armor, like the Hexerei Crow.
    // If a valid gear set tag isn't supplied in the miniboss definition, it will fall back to a random global set instead.
    const recipes = [
        {
            name: 'empty',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [],
            tags: ['miniboss/empty']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
