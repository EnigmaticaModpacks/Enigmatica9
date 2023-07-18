ServerEvents.loaded((event) => {
    // TODO: Remove when KubeJS 6.1 releases
    event.server.runCommandSilent('reload');
});
