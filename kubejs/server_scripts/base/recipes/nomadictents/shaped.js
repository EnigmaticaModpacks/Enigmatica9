ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/nomadictents/shaped/';

    const recipes = [];

    const tent_sizes = ['tiny', 'small', 'medium', 'large', 'giant', 'mega'];
    const tent_types = ['yurt', 'tepee', 'bedouin', 'indlu', 'shamiyana'];

    tent_types.forEach((type) => {
        tent_sizes.forEach((size, index) => {
            let previous_size = `nomadictents:${tent_sizes[index - 1]}_${type}`;
            if (size == 'tiny') {
                previous_size = 'nomadictents:tent_canvas';
            }

            recipes.push({
                output: `nomadictents:${size}_${type}`,
                pattern: ['CBC', 'BPB', 'BBB'],
                key: {
                    P: previous_size,
                    B: `nomadictents:${type}_section`,
                    C: '#forge:rods/wooden'
                },
                layers: index,
                id: `nomadictents:${size}_${type}`
            });

            if (size == 'mega') {
                recipes.push({
                    output: `nomadictents:${size}_${type}`,
                    pattern: ['P', 'C'],
                    key: {
                        P: `nomadictents:${size}_${type}`,
                        C: 'minecraft:wooden_shovel'
                    },
                    layers: index,
                    id: `${id_prefix}${size}_${type}_upgrade`
                });
            }
        });
    });

    recipes.forEach((recipe) => {
        event
            .shaped(recipe.output, recipe.pattern, recipe.key)
            .modifyResult((inventory, itemstack) => {
                let item = inventory.find(Item.of(recipe.key.P));
                let nbt = {};
                if (item.nbt) {
                    nbt = item.nbt;
                }
                nbt.layers = recipe.layers;
                return itemstack.withNBT(nbt);
            })
            .id(recipe.id);
    });
});
