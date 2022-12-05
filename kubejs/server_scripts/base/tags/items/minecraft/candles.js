ServerEvents.tags('item', (event) => {
    event.get('minecraft:candles').add([/candle/]);
});
