PlayerEvents.tick((event) => {
    const player = event.player;
    const server = event.server;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (String(event.level.getDimension()).includes('compactmachines') && player.y < 0) {
        let playerString = player.getUsername();
        let spawn = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension().location();
        console.log(
            `${playerString} has fallen out of a machine! Teleporting to their spawn point in ${spawnDimension} at X:${spawn.x} Y:${spawn.y} Z:${spawn.z} `
        );
        server.runCommandSilent(`execute in ${spawnDimension} run tp ${playerString} ${spawn.x} ${spawn.y} ${spawn.z}`);
        player.tell(Text.of('Oops! Looks like you slipped! Warping back to your spawn point.').green());
    }
});
