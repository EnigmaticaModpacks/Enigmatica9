ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const payload = { removed: [] };
    const modes = ['base', 'normal'];

    modes.forEach((mode) => {
        jei[mode].fluids.hidden.forEach((stack) => {
            payload.removed.push(`fluid:${stack}`);
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hide_fluids.json`, payload);
});
