ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/hexerei/add_to_candle/';

    const recipes = [
        {
            input: 'ae2:certus_quartz_crystal',
            output: {
                item: 'hexerei:candle',
                nbt: { base: { layer: 'hexerei:textures/block/selenite_block.png', layerFromBlockLocation: false } }
            },
            id: 'hexerei:candles/add_selenite_base_to_candle'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:add_to_candle';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        event.custom(recipe).id(recipe.id);
    });
});
