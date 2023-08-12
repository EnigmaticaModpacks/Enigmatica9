PlayerEvents.loggedIn((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const { player, level, server } = event;
    const twilight_portal = Java.loadClass('twilightforest.block.TFPortalBlock');

    if (player.stages.has('starting_errors') && !player.stages.has('starting_errors_corrected')) {
        // Second load detected, Twilight should be available so send them there.
        twilight_portal.attemptSendEntity(player, true, false);
        player.stages.add('starting_errors_corrected');
    }

    if (!player.stages.has('starting_errors')) {
        // First load detected, kick the player with a message to rejoin.
        player.stages.add('starting_errors');

        if (String(level.getDimension()) == 'minecraft:overworld') {
            server.runCommandSilent(
                `/kick ${player.getUsername()} An issue was detected with your world start! Please join the world again to correct it.`
            );
        }
    }
});
