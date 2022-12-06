ServerEvents.tags('block', (event) => {
    event.get('minecraft:candles').add([/candle/]);
});
