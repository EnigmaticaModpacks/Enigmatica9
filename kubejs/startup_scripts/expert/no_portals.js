ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.canceled = true;
});
