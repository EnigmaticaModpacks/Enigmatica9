//priority: 900
StartupEvents.registry('fluid', (event) => {
    const fluids = [
        {
            type: 'thin',
            id: 'abyssal_seawater',
            color: 0x0b1c38,
            display: 'Abyssal Seawater'
        },
        {
            type: 'thin',
            id: 'magicite',
            color: 0xb8f5ce,
            display: 'Magicite'
        },
        {
            type: 'thick',
            id: 'mendosteen_mash',
            color: 0x389425,
            display: 'Mendosteen Mash'
        },
        {
            type: 'thin',
            id: 'ambrosia',
            color: 0xf0ddbb,
            display: 'Ambrosia'
        },
        {
            type: 'thin',
            id: 'blighted_ichor',
            color: 0x702a6e,
            display: 'Blighted Ichor'
        },
        {
            type: 'thick',
            id: 'elysium',
            color: 0x02523f,
            display: 'Elysium'
        }
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).thinTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        }
    });
});
