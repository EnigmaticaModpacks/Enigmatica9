ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/dye_crushing/';

    dye_sources.forEach((dye_source) => {
        let base_count = 3;
        let count = dye_source.type == 'large' ? base_count * 2 : base_count;
        let outputs = dye_source.primary;
        let input = dye_source.input;
        let duration = 20;
        let id_suffix = `${dye_source.primary.split(':')[1]}_from_${dye_source.input.split(':')[1]}`;

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
    });
});
