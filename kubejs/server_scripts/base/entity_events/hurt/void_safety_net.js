EntityEvents.hurt((event) => {
    const { entity, source, level, server } = event;
    if (!entity.isPlayer() || entity.isFake()) return;

    let currentTime = level.getDayTime();
    if (
        server.persistentData['lastVoidTime_' + entity.getUsername()] &&
        server.persistentData['lastVoidTime_' + entity.getUsername()] + 40 > currentTime
    )
        return;
    server.persistentData['lastVoidTime_' + entity.getUsername()] = currentTime;

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

        // Cost is in hunger. Clear food related buffs and apply massive hunger briefly.
        let effects = [
            'farmersdelight:comfort',
            'farmersdelight:nourishment',
            'sushigocrafting:acquired_taste',
            'sushigocrafting:small_bites',
            'sushigocrafting:steady_hands'
        ];
        effects.forEach((effect) => {
            server.runCommandSilent(`effect clear ${username} ${effect}`);
        });
        server.runCommandSilent(`effect give ${username} minecraft:hunger 8 255 true`);
        // Add slow fall effect to save players from fall damage after teleportation.
        server.runCommandSilent(`effect give ${username} minecraft:slow_falling 4 255 true`);
        event.cancel();
    }
});
