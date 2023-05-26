PlayerEvents.tick((event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (String(event.level.getDimension()).includes('nomadictents') && player.y < 30) {
        let playerString = player.getUsername();
        let spawn = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension().location();
        console.log(
            `${playerString} has fallen out of their tent! Teleporting to their spawn point in ${spawnDimension} at X:${spawn.x} Y:${spawn.y} Z:${spawn.z} `
        );
        event.server.runCommandSilent(
            `execute in ${spawnDimension} run tp ${playerString} ${spawn.x} ${spawn.y} ${spawn.z}`
        );
    }
});
