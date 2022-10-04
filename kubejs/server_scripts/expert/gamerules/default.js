ServerEvents.loaded((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.server.runCommandSilent(`/gamerule tfEnforcedProgression false`);
});
