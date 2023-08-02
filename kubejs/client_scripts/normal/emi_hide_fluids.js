ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const modes = ['base', 'normal'];
    const payload = { filters: [], disable: true };

    modes.forEach((mode) => {
        jei[mode].fluids.hidden.forEach((stack) => {
            payload.filters.push(`${stack}`);
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hidden_fluids.json`, payload);
});
