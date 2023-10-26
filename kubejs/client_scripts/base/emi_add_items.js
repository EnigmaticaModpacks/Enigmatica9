ClientEvents.highPriorityAssets((event) => {
    // https://github.com/emilyploszaj/emi/wiki/Hiding-and-Adding-Index-Stacks

    const payload = {added: []};
    added_items.base.forEach((item) => {
        if (item.nbt == null) item.nbt = '';
        if (item.after == null) {
            payload.added.push({ stack: `item:${item.id}${item.nbt}`})
        } else {
            payload.added.push({ stack: `item:${item.id}${item.nbt}`, after: `item:${item.after}`})
        }
    });

    JsonIO.write(`kubejs/assets/emi/index/stacks/emi_added_items.json`, payload);
});
