//priority: 1010

// Properties for Metal processing
const metal_properties = {
    copper: {
        meltingPoint: 500,
        crushing_tier: 1,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'gold' },
            create: { processingTime: 350 },
            occultism: { oreWeight: 600 }
        }
    },
    iron: {
        meltingPoint: 800,
        crushing_tier: 3,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'nickel' },
            create: { processingTime: 400 },
            occultism: { oreWeight: 750 }
        }
    },
    gold: {
        meltingPoint: 700,
        crushing_tier: 1,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'zinc' },
            create: { processingTime: 300 },
            occultism: { oreWeight: 320 }
        }
    },
    tin: {
        meltingPoint: 225,
        crushing_tier: 1,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'osmium' },
            create: { processingTime: 350 },
            occultism: { oreWeight: 610 }
        }
    },
    osmium: {
        meltingPoint: 975,
        crushing_tier: 3,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'tin' },
            create: { processingTime: 400 },
            occultism: { oreWeight: 210 }
        }
    },
    uranium: {
        meltingPoint: 830,
        crushing_tier: 4,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'lead' },
            create: { processingTime: 400 },
            occultism: { oreWeight: 200 }
        }
    },
    lead: {
        meltingPoint: 330,
        crushing_tier: 2,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'silver' },
            create: { processingTime: 300 },
            occultism: { oreWeight: 500 }
        }
    },
    silver: {
        meltingPoint: 790,
        crushing_tier: 1,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'lead' },
            create: { processingTime: 300 },
            occultism: { oreWeight: 400 }
        }
    },
    nickel: {
        meltingPoint: 950,
        crushing_tier: 2,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'iron' },
            create: { processingTime: 350 },
            occultism: { oreWeight: 232 }
        }
    },
    aluminum: {
        meltingPoint: 425,
        crushing_tier: 3,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'iron' },
            create: { processingTime: 300 },
            occultism: { oreWeight: 430 }
        }
    },
    zinc: {
        crushing_tier: 2,
        meltingPoint: 420,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'gold' },
            create: { processingTime: 350 },
            occultism: { oreWeight: 190 }
        }
    },
    // cobalt: {
    //     meltingPoint: 950,
    //     oreProcessing: {
    //         output: {
    //             substrate: 'minecraft:netherrack',
    //             secondary: 'iron'
    //         },
    //         create: {
    //             processingTime: 400
    //         },
    //        occultism: {
    //            oreWeight: 170
    //        }
    //     }
    // },
    iesnium: {
        meltingPoint: 850,
        crushing_tier: 4,
        oreProcessing: {
            output: { substrate: 'occultism:burnt_otherstone', secondary: 'silver' },
            create: { processingTime: 500 }
        }
    },
    horizonite: {
        // meltingPoint: 0,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'ventium' },
            create: { processingTime: 450 }
        }
    },
    ventium: {
        // meltingPoint: 0,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'falsite' },
            create: { processingTime: 450 }
        }
    },
    falsite: {
        // meltingPoint: 0,
        oreProcessing: {
            output: { substrate: 'minecraft:gravel', secondary: 'horizonite' },
            create: { processingTime: 450 }
        }
    },
    enderium: {
        meltingPoint: 1450
    },
    signalum: {
        meltingPoint: 1272
    },
    lumium: {
        meltingPoint: 1354
    },
    infused_iron: {
        meltingPoint: 850
    },
    sky_metal: {
        meltingPoint: 950
    },
    energized_steel: {
        meltingPoint: 875
    },
    // TODO, Add  melting Points for those metals:
    brass: {
        // meltingPoint: 1000
    },
    bronze: {
        // meltingPoint: 1000
    },
    constantan: {
        // meltingPoint: 1000
    },
    electrum: {
        // meltingPoint: 1000
    },
    infused_iron: {
        // meltingPoint: 1000
    },
    invar: {
        // meltingPoint: 1000
    },
    refined_glowstone: {
        // meltingPoint: 1000
    },
    refined_obsidian: {
        // meltingPoint: 1000
    },
    rose_gold: {
        // meltingPoint: 1000
    },
    sky_ingot: {
        // meltingPoint: 1000
    },
    soul_steel: {
        // meltingPoint: 1000
    },
    steel: {
        // meltingPoint: 1000
    },
    tainted_gold: {
        // meltingPoint: 1000
    },
    andesite: {
        // meltingPoint: 1000
    }
};
