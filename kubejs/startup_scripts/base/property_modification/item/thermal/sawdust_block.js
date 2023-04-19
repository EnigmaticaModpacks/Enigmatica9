ItemEvents.modification((event) => {
    event.modify('thermal:sawdust_block', (item) => {
        item.burnTime = 1000;
    });
});
