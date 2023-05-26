EntityEvents.hurt((event) => {
    const { entity, source, level, server } = event;
    if (!entity.isPlayer() || entity.isFake()) {
        return;
    }

    let player = entity;

    let currentDimension = String(level.getDimension());
    let watchDimensions = ['compact_world', 'nomadictents', 'the_end'];

    if (
        source.type == 'outOfWorld' &&
        player.y < 0 &&
        watchDimensions.some((substring) => currentDimension.includes(substring))
    ) {
        let playerString = player.getUsername();
        let spawn = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension().location();

        console.log(`${playerString} has fallen into the void in ${currentDimension}!`);
        console.log(`Teleporting to their spawn point in ${spawnDimension} at X:${spawn.x} Y:${spawn.y} Z:${spawn.z}`);

        server.runCommandSilent(`execute in ${spawnDimension} run tp ${playerString} ${spawn.x} ${spawn.y} ${spawn.z}`);
        player.tell(Text.of('Oops! Looks like you slipped! Warping back to your spawn point.').green());

        event.cancel();
    }
});
