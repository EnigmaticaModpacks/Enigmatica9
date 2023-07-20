ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const payload = { filters: [] };
    const modes = ['base', 'normal'];

    modes.forEach((mode) => {
        jei[mode].items.hidden.forEach((stack) => {
            payload.filters.push(stack.toString());
        });

        jei[mode].items.disabled.forEach((stack) => {
            payload.filters.push(stack.toString());
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hide_items.json`, payload);
});
