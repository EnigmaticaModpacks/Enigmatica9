ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks

    const payload = { added: [] };

    added_items.forEach((stack) => {
        if (typeof stack === 'object') {
            stack = JSON.parse(stack.toJson());
            payload.added.push({ stack: `item:${stack.item + stack.nbt}` });
        } else {
            payload.added.push({ stack: `item:${stack}` });
        }
    });
    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_added_items.json`, payload);
});
