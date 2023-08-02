ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isExpertMode == false) {
        return;
    }
    const payload = { filters: [], disable: true };
    const modes = ['base', 'expert'];

    modes.forEach((mode) => {
        jei[mode].fluids.hidden.forEach((stack) => {
            payload.filters.push(`${stack}`);
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hide_fluids.json`, payload);
});
