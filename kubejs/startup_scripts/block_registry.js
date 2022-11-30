//priority: 900
StartupEvents.registry('block', (event) => {
    const blocks = [
        {
            name: 'disabled_structure_indicator',
            material: 'rock',
            hardness: 2.0
        }
    ];

    blocks.forEach((block) => {
        const block_event = event
            .create(block.name)
            .material(block.material)
            .hardness(block.hardness)
            .textureAll(`kubejs:block/${block.name}`)
            .model(`kubejs:block/${block.name}`);

        if (block.leaves) {
            block_event
                .renderType('cutout')
                .notSolid()
                .noValidSpawns(true)
                .suffocating(false)
                .viewBlocking(false)
                .redstoneConductor(false)
                .transparent(false);
        }
    });
});
