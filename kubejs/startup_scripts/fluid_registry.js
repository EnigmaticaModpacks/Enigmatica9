//priority: 900
StartupEvents.registry('fluid', (event) => {
    const fluids = [
        {
            type: 'thin',
            id: 'abyssal_seawater',
            texture: 0x0b1c38,
            display: 'Abyssal Seawater'
        },
        {
            type: 'thin',
            id: 'magicite',
            texture: 0x05f549,
            display: 'Magicite'
        }
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).thickTexture(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).thinTexture(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        }
    });
});
