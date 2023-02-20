//priority: 800
const structures = [
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'arcfurnace',
        index: 7,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'assembler',
        index: 1,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'auto_workbench',
        index: 2,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'bottling_machine',
        index: 2,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'crusher',
        index: 3,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'diesel_generator',
        index: 4,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'lightning_rod',
        index: 8,
        block: {
            normal: 'immersiveengineering:capacitor_hv',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator',
        index: 5,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator_full',
        index: 6,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'fermenter',
        index: 4,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'metal_press',
        index: 2,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'mixer',
        index: 4,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'refinery',
        index: 5,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'sawmill',
        index: 5,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'squeezer',
        index: 4,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'minecraft:stone'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'blast_furnace',
        index: 0,
        block: {
            normal: 'kubejs:disabled_structure_indicator',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'alloy_smelter',
        index: 0,
        block: {
            normal: 'kubejs:disabled_structure_indicator',
            expert: 'kubejs:disabled_structure_indicator'
        }
    }
];

structures.forEach((structure) => {
    let structure_file = `kubejs/data/${structure.mod}/structures/${structure.type}/${structure.name}.nbt`;
    let structure_nbt = NBTIO.read(structure_file);
    structure_nbt.palette[structure.index].Name = structure.block[packMode];
    NBTIO.write(structure_file, structure_nbt);
});
