ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const hidden_payload = { filters: [] };
    const disabled_payload = { filters: [], disable: true };
    const modes = ['base', 'normal'];

    modes.forEach((mode) => {
        jei[mode].items.hidden.forEach((stack) => {
            hidden_payload.filters.push(stack.toString());
        });

        jei[mode].items.disabled.forEach((stack) => {
            disabled_payload.filters.push(stack.toString());
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_hide_items.json`, hidden_payload);
    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_disable_items.json`, disabled_payload);
});
