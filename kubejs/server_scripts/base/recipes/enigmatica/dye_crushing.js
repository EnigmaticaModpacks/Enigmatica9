ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/dye_crushing/';
    /*
    colors.forEach((color) => {
        ['large', 'small'].forEach((input_size) => {
            let input = `#enigmatica:${input_size}_dye_sources/${color}`;

            console.log(String(getItemsInTag(input)));
            if (getItemsInTag(input).includes('minecraft:barrier')) {
                console.log('yeet');
                return;
            }

            let output = `minecraft:${color}_dye`;
            let duration = 20;
            let id_suffix = `${input_size}_${color}_dye`;

            // Shapeless
            let base_count = 1;
            let count = input_size == 'large' ? base_count * 2 : base_count;
            event.shapeless(Item.of(output, count), [input]).id(`${id_prefix}shapeless/${id_suffix}`);

            // Hexerei Mortar and Pestle
            // base_count = 15;
            // count = input_size == 'large' ? base_count * 2 : base_count;
            // event
            //     .custom({
            //         type: 'hexerei:pestle_and_mortar',
            //         ingredients: [
            //             Ingredient.of(input).toJson(),
            //             Ingredient.of(input).toJson(),
            //             Ingredient.of(input).toJson(),
            //             Ingredient.of(input).toJson(),
            //             Ingredient.of(input).toJson()
            //         ],
            //         output: Item.of(output, count).toJson(),
            //         grindingTime: duration * 5
            //     })
            //     .id(`${id_prefix}hexerei/pestle_and_mortar/${id_suffix}`);

            // Occultism Crushing
            base_count = 3;
            count = input_size == 'large' ? base_count * 2 : base_count;
            event
                .custom({
                    type: 'occultism:crushing',
                    ingredient: Ingredient.of(input).toJson(),
                    result: Item.of(output, count).toJson(),
                    crushing_time: duration,
                    ignore_crushing_multiplier: false
                })
                .id(`${id_prefix}occultism_crushing/${id_suffix}`);

            // Mekanism Enriching
            event
                .custom({
                    type: 'mekanism:enriching',
                    input: { ingredient: Ingredient.of(input).toJson() },
                    output: Item.of(output, count).toJson()
                })
                .id(`${id_prefix}mekanism_enriching/${id_suffix}`);
        });
    });
*/
    dye_sources.forEach((dye_source) => {
        let base_count = 3;
        let count = dye_source.type == 'large' ? base_count * 2 : base_count;
        let secondary_chance = dye_source.type == 'large' ? (base_count / 9) * 2 : base_count / 9;
        let tertiary_chance = dye_source.type == 'large' ? (base_count / 18) * 2 : base_count / 18;

        let outputs = {
            primary: { item: dye_source.primary, count: count, chance: 1.0 },
            secondary: { item: dye_source.secondary, count: Math.ceil(count / 2), chance: secondary_chance },
            tertiary: { item: dye_source.tertiary, count: Math.ceil(count / 3), chance: tertiary_chance }
        };

        let input = dye_source.input;
        let duration = 20;
        let energy = 256;
        let id_suffix = `${dye_source.primary.split(':')[1]}_from_${dye_source.input.split(':')[1]}`;

        // Create
        event
            .custom({
                type: 'create:milling',
                ingredients: [Item.of(input).toJson()],
                results: [outputs.primary, outputs.secondary, outputs.tertiary],
                processingTime: duration
            })
            .id(`${id_prefix}create_milling/${id_suffix}`);

        // Ars Nouveau
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Item.of(input).toJson(),
                output: [outputs.primary, outputs.secondary, outputs.tertiary]
            })
            .id(`${id_prefix}ars_nouveau_crushing/${id_suffix}`);

        // Thermal
        event
            .custom({
                type: 'thermal:centrifuge',
                ingredient: Item.of(input).toJson(),
                result: [outputs.primary, outputs.secondary, outputs.tertiary],
                energy: energy
            })
            .id(`${id_prefix}thermal_centrifuge/${id_suffix}`);

        // Immersive Engineering
        event
            .custom({
                type: 'immersiveengineering:crusher',
                energy: energy,
                input: Item.of(input).toJson(),
                result: { base_ingredient: { item: outputs.primary.item }, count: outputs.primary.count },
                secondaries: [
                    {
                        output: Item.of(outputs.secondary.item, outputs.secondary.count).toJson(),
                        chance: outputs.secondary.chance
                    },
                    {
                        output: Item.of(outputs.tertiary.item, outputs.tertiary.count).toJson(),
                        chance: outputs.tertiary.chance
                    }
                ]
            })
            .id(`${id_prefix}immersiveengineering_crusher/${id_suffix}`);

        outputs = dye_source.primary;
        // Occultism Crushing
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: Ingredient.of(input).toJson(),
                result: Item.of(outputs, count).toJson(),
                crushing_time: duration,
                ignore_crushing_multiplier: false
            })
            .id(`${id_prefix}occultism_crushing/${id_suffix}`);

        // Mekanism Enriching
        event
            .custom({
                type: 'mekanism:enriching',
                input: { ingredient: Ingredient.of(input).toJson() },
                output: Item.of(outputs, count).toJson()
            })
            .id(`${id_prefix}mekanism_enriching/${id_suffix}`);

        // Shapeless
        base_count = 1;
        count = dye_source.type == 'large' ? base_count * 2 : base_count;
        event.shapeless(Item.of(outputs, count), [input]).id(`${id_prefix}shapeless/${id_suffix}`);

        // Hexerei Mortar and Pestle
        base_count = 15;
        count = dye_source.type == 'large' ? base_count * 2 : base_count;
        event
            .custom({
                type: 'hexerei:pestle_and_mortar',
                ingredients: [
                    Ingredient.of(input).toJson(),
                    Ingredient.of(input).toJson(),
                    Ingredient.of(input).toJson(),
                    Ingredient.of(input).toJson(),
                    Ingredient.of(input).toJson()
                ],
                output: Item.of(outputs, count).toJson(),
                grindingTime: duration * 5
            })
            .id(`${id_prefix}hexerei/pestle_and_mortar/${id_suffix}`);
    });
});
