//priority: 800
const structures = [
    {
        mod: 'immersiveengineering',
        type: 'multiblocks',
        name: 'arcfurnace',
        index: 4,
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
    }
];

structures.forEach((structure) => {
    let structure_file = `kubejs/data/${structure.mod}/structures/${structure.type}/${structure.name}.nbt`;
    let structure_nbt = NBTIO.read(structure_file);
    structure_nbt.palette[structure.index].Name = structure.block[packMode];
    NBTIO.write(structure_file, structure_nbt);
});
