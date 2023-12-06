ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks
    if (global.isNormalMode == false) {
        return;
    }
    const modes = ['base', 'normal'];
    const payload = { added: [], priority: 100 };

    modes.forEach((mode) => {
        jei[mode].items.added.forEach((item) => {
            if (item.nbt == null) item.nbt = '';
            if (item.after == null) {
                payload.added.push({ stack: `item:${item.id}${item.nbt}` });
            } else {
                payload.added.push({ stack: `item:${item.id}${item.nbt}`, after: `item:${item.after}` });
            }
        });
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_added_items.json`, payload);
});
