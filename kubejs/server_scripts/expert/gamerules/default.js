ServerEvents.loaded((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    if (!event.server.persistentData.defaultGamerulesLoaded) {
        event.server.persistentData.defaultGamerulesLoaded = 1;
        let gamerules = ['tfEnforcedProgression false'];

        gamerules.forEach((gamerule) => {
            event.server.runCommandSilent(`/gamerule ${gamerule}`);
            console.log(`Default Gamerule Applied: ${gamerule}`);
        });
    }
});
