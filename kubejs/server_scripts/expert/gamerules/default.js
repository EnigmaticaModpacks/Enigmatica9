ServerEvents.loaded((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let gamerules = [{ rule: 'tfEnforcedProgression', value: 'false' }];

    gamerules.forEach((gamerule) => {
        if (!event.server.persistentData[gamerule.rule]) {
            event.server.runCommandSilent(`/gamerule ${gamerule.rule} ${gamerule.value}`);
            console.log(`Default Gamerule Applied: ${gamerule.rule} = ${gamerule.value}`);
            event.server.persistentData[gamerule.rule] = gamerule.value;
        }
    });
});
