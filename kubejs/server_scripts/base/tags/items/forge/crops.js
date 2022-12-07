ServerEvents.tags('item', (event) => {
    Object.keys(crop_properties).forEach((category) => {
        if (category == 'fiber_crops') {
            return;
        }
        if (category.includes('_crops')) {
            crop_properties[category].crops.forEach((crop) => {
                event.get('forge:crops').add(crop.plant);
            });
        }
    });
});
