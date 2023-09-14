ServerEvents.tags('item', (event) => {
    event
        .get('the_bumblezone:bee_queen/disallowed_random_bonus_trade_items')
        .add(['naturesaura:decayed_leaves', 'naturesaura:golden_leaves']);
});
