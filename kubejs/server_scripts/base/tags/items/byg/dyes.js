ServerEvents.tags('item', (event) => {
    colors.forEach((color) => {
        event.removeAll(`byg:${color}_dye`);
        event.removeAll(`byg:double_${color}_dye`);
    });
});
