ServerEvents.tags('item', (event) => {
    event.add('forge:salad_ingredients', ['thermal:spinach']);

    event.add('forge:salad_ingredients/spinach', 'thermal:spinach');
});
