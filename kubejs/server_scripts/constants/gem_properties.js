//priority: 1010

// Used for correcting tags for Blue Skies materials
const blueSkiesGems = ['pyrope', 'aquite', 'diopside', 'charoite', 'moonstone'];

// Properties for Gem processing
const gemProperties = {
    redstone: {
        meltingPoint: 660,
        oreProcessing: {
            output: {
                type: 'dust',
                substrate: 'minecraft:gravel',
                secondary: 'minecraft:redstone'
            },
            create: {
                primaryCount: 8,
                secondaryCount: 6,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 8,
                secondaryCount: 6,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 6
            },
            occultism: {
                primaryCount: 6
            },
            mekanism: {
                primaryCount: 6
            }
        }
    },
    coal: {
        meltingPoint: 1149,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5,
                processingTime: 300
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            immersiveengineering: {
                primaryCount: 4,
                secondaryChance: 0.15
            },
            occultism: {
                primaryCount: 4
            },
            mekanism: {
                primaryCount: 2
            }
        }
    },
    diamond: {
        meltingPoint: 1450,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'minecraft:emerald'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25,
                processingTime: 500
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 2
            },
            occultism: {
                primaryCount: 2
            },
            mekanism: {
                primaryCount: 2
            }
        }
    },
    emerald: {
        meltingPoint: 934,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'minecraft:diamond'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25,
                processingTime: 500
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 4
            },
            occultism: {
                primaryCount: 4
            },
            mekanism: {
                primaryCount: 2
            }
        }
    },
    lapis: {
        meltingPoint: 115,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.5,
                processingTime: 300
            },
            thermal: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            immersiveengineering: {
                primaryCount: 9,
                secondaryChance: 0.2
            },
            occultism: {
                primaryCount: 9
            },
            mekanism: {
                primaryCount: 9
            }
        }
    },
    quartz: {
        meltingPoint: 637,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:netherrack',
                secondary: 'minecraft:amethyst_shard'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 4,
                secondaryChance: 0.5,
                processingTime: 350
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            immersiveengineering: {
                primaryCount: 3,
                secondaryChance: 0.25
            },
            occultism: {
                primaryCount: 3
            },
            mekanism: {
                primaryCount: 3
            }
        }
    },
    sulfur: {
        meltingPoint: 115,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:netherrack',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 6
            },
            occultism: {
                primaryCount: 6
            },
            mekanism: {
                primaryCount: 6
            }
        }
    },
    apatite: {
        meltingPoint: 450,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 12
            },
            occultism: {
                primaryCount: 12
            },
            mekanism: {
                primaryCount: 12
            }
        }
    },
    fluorite: {
        meltingPoint: 1418,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'minecraft:quartz'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 3,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 3,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 6
            },
            occultism: {
                primaryCount: 6
            },
            mekanism: {
                primaryCount: 6
            }
        }
    },
    dimensional: {
        meltingPoint: 1450,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'rftoolsbase:dimensionalshard'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 3,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 3,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 8
            },
            occultism: {
                primaryCount: 8
            },
            mekanism: {
                primaryCount: 8
            }
        }
    },
    potassium_nitrate: {
        meltingPoint: 334,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25,
                processingTime: 300
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.25
            },
            immersiveengineering: {
                primaryCount: 3
            },
            occultism: {
                primaryCount: 3
            },
            mekanism: {
                primaryCount: 3
            }
        }
    },
    bitumen: {
        meltingPoint: 115,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5,
                processingTime: 300
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            immersiveengineering: {
                primaryCount: 4
            },
            occultism: {
                primaryCount: 4
            },
            mekanism: {
                primaryCount: 4
            }
        }
    },
    cinnabar: {
        meltingPoint: 580,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:sulfur_dust'
            },
            create: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5,
                processingTime: 300
            },
            thermal: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            immersiveengineering: {
                primaryCount: 4
            },
            occultism: {
                primaryCount: 4
            },

            mekanism: {
                primaryCount: 4
            }
        }
    },
    blazing: {
        meltingPoint: 950
    },
    niotic: {
        meltingPoint: 1250
    },
    spirited: {
        meltingPoint: 1350
    },
    nitro: {
        meltingPoint: 1450
    }
};
