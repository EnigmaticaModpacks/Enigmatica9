ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Predicate builder: https://misode.github.io/predicate/

    const id_prefix = 'enigmatica:expert/lychee/random_block_ticking/';
    const recipes = [
        // Sample recipe for uranium filtering. Adjust chance to speed up or slow down.
        {
            block_in: { blocks: ['thermal:white_rockwool'] },
            post: [
                {
                    type: 'place',
                    block: 'thermal:lime_rockwool',
                    contextual: isOceanHasWaterWithChance(0.1)
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.water.ambient ambient @p ~ ~ ~',
                    hide: true,
                    contextual: isOceanHasWaterWithChance(0.1)
                },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.wool.place block @p ~ ~ ~ 0.3 0.1',
                    hide: true,
                    contextual: isOceanHasWaterWithChance(0.1)
                }
            ],
            id: `${id_prefix}filter_filling`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:random_block_ticking';
        event.custom(recipe).id(recipe.id);
    });
});

function isOceanHasWaterWithChance(chance) {
    let condition = [
        {
            type: 'and',
            contextual: [
                { type: 'location', predicate: { 'lychee:biome_tag': 'is_ocean' } },
                { type: 'location', predicate: { position: { y: { min: 0, max: 63 } } } },
                { type: 'chance', chance: chance },
                {
                    type: 'location',
                    offsetX: -1,
                    predicate: { block: { blocks: ['minecraft:water'] } }
                },
                {
                    type: 'location',
                    offsetX: 1,
                    predicate: { block: { blocks: ['minecraft:water'] } }
                },
                {
                    type: 'location',
                    offsetZ: -1,
                    predicate: { block: { blocks: ['minecraft:water'] } }
                },
                {
                    type: 'location',
                    offsetZ: 1,
                    predicate: { block: { blocks: ['minecraft:water'] } }
                }
            ]
        }
    ];
    return condition;
}
