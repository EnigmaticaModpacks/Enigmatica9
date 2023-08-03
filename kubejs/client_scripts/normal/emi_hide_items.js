ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const modes = ['base', 'normal'];
    const payload = { hidden: { filters: [] }, disabled: { filters: [], disable: true } };

    Object.keys(payload).forEach((type) => {
        modes.forEach((mode) => {
            jei[mode].items[type].forEach((stack) => {
                payload[type].filters.push(stack.toString());
            });
        });

        JsonIO.write(`kubejs/assets/emi/index/stacks/emi_${type}_items.json`, payload[type]);
    });
});
