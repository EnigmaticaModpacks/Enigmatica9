const pneumaticcraft_structures = [
    {
        id: 'pneumaticcraft:villages/mechanic_house_desert',
        block: 'pneumaticcraft:flux_compressor',
        coordinates: [8, 1, 3],
        properties: { waterlogged: 'false', facing: 'south', on: 'false' },
        nbt: {
            id: 'pneumaticcraft:flux_compressor',
            UpgradeInventory: { Items: [], Size: 4 },
            HeatExchanger: { temperature: 303 },
            AirHandler: { Air: 0 },
            ForgeCaps: {},
            Energy: 0,
            redstoneMode: 0
        }
    },
    {
        id: 'pneumaticcraft:villages/mechanic_house_plains',
        block: 'pneumaticcraft:flux_compressor',
        coordinates: [8, 1, 3],
        properties: { waterlogged: 'false', facing: 'south', on: 'false' },
        nbt: {
            id: 'pneumaticcraft:flux_compressor',
            UpgradeInventory: { Items: [], Size: 4 },
            HeatExchanger: { temperature: 303 },
            AirHandler: { Air: 0 },
            ForgeCaps: {},
            Energy: 0,
            redstoneMode: 0
        }
    },
    {
        id: 'pneumaticcraft:villages/mechanic_house_savanna',
        block: 'pneumaticcraft:flux_compressor',
        coordinates: [8, 1, 3],
        properties: { waterlogged: 'false', facing: 'south', on: 'false' },
        nbt: {
            id: 'pneumaticcraft:flux_compressor',
            UpgradeInventory: { Items: [], Size: 4 },
            HeatExchanger: { temperature: 303 },
            AirHandler: { Air: 0 },
            ForgeCaps: {},
            Energy: 0,
            redstoneMode: 0
        }
    },
    {
        id: 'pneumaticcraft:villages/mechanic_house_snowy',
        block: 'pneumaticcraft:flux_compressor',
        coordinates: [8, 1, 4],
        properties: { waterlogged: 'false', facing: 'south', on: 'false' },
        nbt: {
            id: 'pneumaticcraft:flux_compressor',
            UpgradeInventory: { Items: [], Size: 4 },
            HeatExchanger: { temperature: 303 },
            AirHandler: { Air: 0 },
            ForgeCaps: {},
            Energy: 0,
            redstoneMode: 0
        }
    },
    {
        id: 'pneumaticcraft:villages/mechanic_house_taiga',
        block: 'pneumaticcraft:flux_compressor',
        coordinates: [8, 1, 3],
        properties: { waterlogged: 'false', facing: 'south', on: 'false' },
        nbt: {
            id: 'pneumaticcraft:flux_compressor',
            UpgradeInventory: { Items: [], Size: 4 },
            HeatExchanger: { temperature: 303 },
            AirHandler: { Air: 0 },
            ForgeCaps: {},
            Energy: 0,
            redstoneMode: 0
        }
    }
];

pneumaticcraft_structures.forEach((structure) => {
    MoreJSEvents.structureLoad((event) => {
        if (global.isExpertMode == false || !event.id.includes(structure.id)) {
            return;
        }

        let palette = event.getPalette(0);
        let blockData = palette.get(structure.coordinates);
        blockData.setBlock(structure.block, structure.properties);
        blockData.setNbt(structure.nbt);
    });
});
