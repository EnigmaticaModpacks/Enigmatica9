ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isExpertMode == false) {
        return;
    }
    const modes = ['base', 'expert'];
    const payload = { filters: [], disable: true };

    modes.forEach((mode) => {
        jei[mode].fluids.hidden.forEach((stack) => {
            payload.filters.push(stack.toString());
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hidden_fluids.json`, payload);
});
