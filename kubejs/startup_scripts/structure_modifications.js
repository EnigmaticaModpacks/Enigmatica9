//priority: 800
const structures = [
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'assembler',
        index: 3,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_white'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'assembler',
        index: 4,
        block: {
            normal: 'immersiveengineering:slab_sheetmetal_iron',
            expert: 'immersiveengineering:slab_sheetmetal_colored_white'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'bottling_machine',
        index: 0,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_black'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'fermenter',
        index: 5,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_black'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'mixer',
        index: 3,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_black'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'refinery',
        index: 3,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_black'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'sawmill',
        index: 2,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_black'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'sawmill',
        index: 3,
        block: {
            normal: 'immersiveengineering:heavy_engineering',
            expert: 'immersiveengineering:light_engineering'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'silo',
        index: 2,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_white'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'sheetmetal_tank',
        index: 2,
        block: {
            normal: 'immersiveengineering:sheetmetal_iron',
            expert: 'immersiveengineering:sheetmetal_colored_white'
        }
    },

    // Disabled Structures
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
        name: 'arcfurnace',
        index: 9,
        block: {
            normal: 'immersiveengineering:blastbrick_reinforced',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'auto_workbench',
        index: 2,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'auto_workbench',
        index: 1,
        block: {
            normal: 'immersiveengineering:light_engineering',
            expert: 'kubejs:disabled_structure_indicator'
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
        name: 'diesel_generator',
        index: 3,
        block: {
            normal: 'immersiveengineering:heavy_engineering',
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
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator',
        index: 1,
        block: {
            normal: 'immersiveengineering:sheetmetal_steel',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'bucket_wheel',
        index: 1,
        block: {
            normal: 'immersiveengineering:storage_steel',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator_full',
        index: 6,
        block: {
            normal: 'immersiveengineering:rs_engineering',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator_full',
        index: 1,
        block: {
            normal: 'immersiveengineering:storage_steel',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'excavator_full',
        index: 3,
        block: {
            normal: 'immersiveengineering:sheetmetal_steel',
            expert: 'kubejs:disabled_structure_indicator'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'metal_press',
        index: 4,
        block: {
            normal: 'immersiveengineering:heavy_engineering',
            expert: 'immersiveengineering:light_engineering'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'crusher',
        index: 1,
        block: {
            normal: 'immersiveengineering:light_engineering',
            expert: 'immersiveengineering:heavy_engineering'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'squeezer',
        index: 2,
        block: {
            normal: 'immersiveengineering:light_engineering',
            expert: 'immersiveengineering:heavy_engineering'
        }
    },
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'fermenter',
        index: 1,
        block: {
            normal: 'immersiveengineering:light_engineering',
            expert: 'immersiveengineering:heavy_engineering'
        }
    }
];

structures.forEach((structure) => {
    let structure_file = `kubejs/data/${structure.mod}/structures/${structure.type}/${structure.name}.nbt`;
    let structure_nbt = NBTIO.read(structure_file);
    // console.log(`Updating ${structure.name} for ${packMode}.`);
    structure_nbt.palette[structure.index].Name = structure.block[packMode];
    NBTIO.write(structure_file, structure_nbt);
});
