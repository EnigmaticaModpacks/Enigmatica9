BlockEvents.rightClicked((event) => {
    const { entity, block, level, server } = event;
    if (!entity.isPlayer() || entity.isFake()) {
        return;
    }

    const dimension = String(level.getDimension());

    if (
        (level.isRaining || level.isThundering) &&
        dimension == 'twilightforest:twilight_forest' &&
        block.getId().match(/(minecraft:|comforts:).*(_bed|sleeping_bag|hammock_)/)
    ) {
        // clear weather after 100 ticks
        server.scheduleInTicks(100, (schedule) => {
            let interval = randomInt(3, 7) * 24000;
            console.log(`Halting Rain for ${interval} ticks!`);
            let command = `/execute in minecraft:overworld run weather clear ${interval}`;
            schedule.server.runCommandSilent(command);
        });
    }
});
