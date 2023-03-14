//priority: 1010

let fuel_multiplier = 1;

// Properties for Liquid Fuels
// Use Fluid Tags only
const fuelProperties = [
    { fuel: 'forge:ethene', energy: 1800000 * fuel_multiplier, rate: 1.25 },
    { fuel: 'forge:lpg', energy: 1800000 * fuel_multiplier, rate: 1.25 },
    { fuel: 'forge:gasoline', energy: 1500000 * fuel_multiplier, rate: 1.5 },
    { fuel: 'forge:kerosene', energy: 1100000 * fuel_multiplier, rate: 1.0, superheated: true },
    { fuel: 'forge:biodiesel', energy: 1000000 * fuel_multiplier, rate: 0.8 },
    { fuel: 'forge:diesel', energy: 1000000 * fuel_multiplier, rate: 0.8 },
    { fuel: 'forge:bioethanol', energy: 140000 * fuel_multiplier, rate: 1.0 },
    { fuel: 'forge:ethanol', energy: 140000 * fuel_multiplier, rate: 1.0 },
    { fuel: 'forge:biofuel', energy: 640000 * fuel_multiplier, rate: 0.8 },
    { fuel: 'forge:creosote', energy: 50000 * fuel_multiplier, rate: 0.25 },
    { fuel: 'forge:refined_fuel', energy: 1500000 * fuel_multiplier, rate: 1.5 },
    { fuel: 'forge:tree_oil', energy: 100000 * fuel_multiplier, rate: 1.0 },
    { fuel: 'forge:source', energy: 1100000 * fuel_multiplier, rate: 1.0, superheated: true }
];
