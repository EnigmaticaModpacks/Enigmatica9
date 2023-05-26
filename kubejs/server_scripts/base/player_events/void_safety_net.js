PlayerEvents.tick((event) => {
    const player = event.player;
    const server = event.server;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    let currentDimension = String(event.level.getDimension());
    let watchDimensions = ['compact_world', 'nomadictents', 'the_end'];

    if (player.y < 0 && watchDimensions.some((substring) => currentDimension.includes(substring))) {
        let playerString = player.getUsername();
        let spawn = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension().location();
        console.log(
            `${playerString} has fallen into the void in ${currentDimension}! Teleporting to their spawn point in ${spawnDimension} at X:${spawn.x} Y:${spawn.y} Z:${spawn.z} `
        );
        server.runCommandSilent(`execute in ${spawnDimension} run tp ${playerString} ${spawn.x} ${spawn.y} ${spawn.z}`);
        player.tell(Text.of('Oops! Looks like you slipped! Warping back to your spawn point.').green());
    }
});
