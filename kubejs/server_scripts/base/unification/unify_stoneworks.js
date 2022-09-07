//priority: 900
ServerEvents.recipes((event) => {
    const id_prefex = 'enigmatica:base/unification/stoneworks/';

    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        //pedestals_stoneworks(event, material, type);
        //industrialforegoing_stoneworks(event, material, type);
        //thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        //pedestals_stoneworks(event, material, type);
        //industrialforegoing_stoneworks(event, material, type);
        //thermal_stoneworks(event, material);
    });
});

//stoneworks functions
function pedestals_stoneworks(event, material, type) {
    if (excludeDuplicatesCobbleGen.includes(material)) {
        return;
    }

    var recipeType = 'pedestals:pedestal_cobblegen';

    if (type == 'stone') {
        recipeType = 'pedestals:pedestal_cobblegensilk';
    }
    //console.log(`Pedestals Recipe for Material: ${material}, Type: ${type}`);

    event
        .custom({
            type: recipeType,
            ingredient: {
                item: material
            },
            result: {
                item: material,
                count: 1
            }
        })
        .id(`${id_prefix}${recipeType.replace(':', '/')}${material}`);
}

function industrialforegoing_stoneworks(event, material, type) {
    if (excludeDuplicatesCobbleGen.includes(material)) {
        return;
    }

    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    event
        .custom({
            type: 'industrialforegoing:stonework_generate',
            output: { item: material, count: 1 },
            waterNeed: 1000,
            lavaNeed: 1000,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume
        })
        .id(`${id_prefix}industrialforegoing/stonework_generate${material}`);
}

function thermal_stoneworks(event, material) {
    if (excludeDuplicatesCobbleGen.includes(material)) {
        return;
    }

    event
        .custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: material,
            result: {
                item: material
            }
        })
        .id(`${id_prefix}thermal/rock_gen${material}`);
}
