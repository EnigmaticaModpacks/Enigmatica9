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
        let username = player.getUsername();
        let spawn = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension().location();

        console.log(`${username} has fallen into the void in ${currentDimension}!`);
        console.log(`Teleporting to their spawn point in ${spawnDimension} at X:${spawn.x} Y:${spawn.y} Z:${spawn.z}`);

        player.tell(Text.of('Oops! Looks like you slipped! Warping back to your spawn point.').green());

        server.runCommandSilent(`execute in ${spawnDimension} run tp ${username} ${spawn.x} ${spawn.y} ${spawn.z}`);

        event.cancel();
    }
});
