//priority: 1000
// This must run before starting_items.js, so the initial starting_items tag isn't present, only existing ones
PlayerEvents.loggedIn((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const twilight_portal = Java.loadClass('twilightforest.block.TFPortalBlock');
    const { player, server } = event;

    if (player.stages.has('starting_errors') && !player.stages.has('starting_errors_corrected')) {
        // Second load detected, Twilight should be available so send them there.
        twilight_portal.attemptSendEntity(player, true, false);
        player.stages.add('starting_errors_corrected');
    }

    if (!server.getLevel('twilightforest:twilight_forest')) {
        // First load, error detected, kick the player with a message to rejoin.
        if (!player.stages.has('starting_items') && !player.stages.has('starting_errors')) {
            console.log(
                'Enigmatica: Issues were detected with the world start. Rejoining the world is required to fix it.'
            );
            player.stages.add('starting_errors');

            let username = player.getUsername();
            let command = `/kick ${username} An issue was detected with your world start! Please join the world again to correct it.`;
            server.runCommandSilent(command);
        }
    }
});
