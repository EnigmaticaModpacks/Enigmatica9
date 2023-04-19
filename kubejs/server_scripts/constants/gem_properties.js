//priority: 1010

// Properties for Gem processing
// Template:
// test_gem: {
//     meltingPoint: 1000,
//     oreProcessing: {                                     // Ore Processing properties
//         output: {                                        // Basic Information for processing
//             type: 'dust',                                // Type of the output, can be: 'dust' / 'gem' (Required for ore procesing)
//             substrate: 'minecraft:gravel',               // Stone output for the gem ore
//             secondary: 'emendatusengimatica:test_gem'    // Secondary output for the processing
//             // secondary: getItemFromTag('forge:gems/test') // This can be used to get unified output for secondary (Requires more testing!)
//         },
//         // Additional Properties for each type of processing, to disable one of the types, just remove the main field!
//         // If Secondary is not present, anything secondary related is not used, if secondaryCount is not present, it will disable secondary output for that type of processing.
//         create: {
//             primaryCount: 8,
//             secondaryCount: 6,
//             secondaryChance: 0.25,
//             processingTime: 300
//         },
//         thermal: {
//             primaryCount: 8,
//             secondaryCount: 6,
//             secondaryChance: 0.25
//         },
//         immersiveengineering: {
//             primaryCount: 6,
//             secondaryCount: 6,
//             secondaryChance: 0.25
//         },
//         ars_nouveau: {
//             primaryCount: 6,
//             secondaryCount: 6,
//             secondaryChance: 0.25
//         }
//         occultism: {
//             primaryCount: 6,
//             oreWeight: 500 // For Djini Miners
//         },
//         mekanism: {
//             enrichmentCount: 6,                          // Output for Enriching
//             purificationCount: 9,                        // Output for Purification
//             injectionCount: 12,                          // Output for Chemical Injecting
//             // Gasses required for Purification and Injection Process
//             purificationGas: {
//                 gas: 'mekanism:oxygen',
//                 amount: 1
//             },
//             injectionGas: {
//                 gas: 'mekanism:hydrofluoric_acid',
//                 amount: 1
//             }
//             // Note: If you want to disable one of the mek processing types, just remove the field!
//         }
//     }
// },

function getItemFromTag(tag) {
    return AlmostUnified.getPreferredItemForTag(tag).getId();
}

const gem_properties = {
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
                primaryCount: 8,
                secondaryCount: 6,
                secondaryChance: 0.25
            },
            ars_nouveau: {
                primaryCount: 8,
                secondaryCount: 6,
                secondaryChance: 0.25
            },
            occultism: {
                primaryCount: 6,
                oreWeight: 520
            },
            mekanism: {
                enrichmentCount: 8,
                purificationCount: 12,
                injectionCount: 16,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                },
                injectionGas: {
                    gas: 'mekanism:hydrofluoric_acid',
                    amount: 1
                }
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
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            ars_nouveau: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            occultism: {
                primaryCount: 4,
                oreWeight: 1000
            },
            mekanism: {
                enrichmentCount: 3,
                purificationCount: 5,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
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
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            ars_nouveau: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            occultism: {
                primaryCount: 2,
                oreWeight: 220
            },
            mekanism: {
                enrichmentCount: 2,
                purificationCount: 3,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
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
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            ars_nouveau: {
                primaryCount: 2,
                secondaryCount: 2,
                secondaryChance: 0.5
            },
            occultism: {
                primaryCount: 2,
                oreWeight: 160
            },
            mekanism: {
                enrichmentCount: 2,
                purificationCount: 3,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
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
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            ars_nouveau: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            occultism: {
                primaryCount: 9,
                oreWeight: 350
            },
            mekanism: {
                enrichmentCount: 9,
                purificationCount: 12,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
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
                primaryCount: 2,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            ars_nouveau: {
                primaryCount: 2,
                secondaryCount: 4,
                secondaryChance: 0.5
            },
            occultism: {
                primaryCount: 3
            },
            mekanism: {
                enrichmentCount: 4
            }
        }
    },
    sulfur: {
        meltingPoint: 115
        // oreProcessing: {
        //     output: {
        //         type: 'gem',
        //         substrate: 'minecraft:netherrack',
        //         secondary: 'emendatusenigmatica:sulfur_dust'
        //     },
        //     create: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     immersiveengineering: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     ars_nouveau: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     occultism: {
        //         primaryCount: 12,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         enrichmentCount: 8,
        //         purificationCount: 12,
        //         injectionCount: 16,
        //         purificationGas: {
        //             gas: 'mekanism:oxygen',
        //             amount: 1
        //         },
        //         injectionGas: {
        //             gas: 'mekanism:hydrofluoric_acid',
        //             amount: 1
        //         }
        //     }
        // }
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
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.25
            },
            ars_nouveau: {
                primaryCount: 8,
                secondaryCount: 4,
                secondaryChance: 0.25
            },
            occultism: {
                primaryCount: 10,
                oreWeight: 1500
            },
            mekanism: {
                enrichmentCount: 8,
                purificationCount: 12,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
            }
        }
    },
    fluorite: {
        meltingPoint: 1418
        // oreProcessing: {
        //     output: {
        //         type: 'gem',
        //         substrate: 'minecraft:gravel',
        //         secondary: 'minecraft:quartz'
        //     },
        //     create: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     immersiveengineering: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     ars_nouveau: {
        //         primaryCount: 8,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     occultism: {
        //         primaryCount: 10,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         enrichmentCount: 8,
        //         purificationCount: 12,
        //         injectionCount: 16,
        //         purificationGas: {
        //             gas: 'mekanism:oxygen',
        //             amount: 1
        //         },
        //         injectionGas: {
        //             gas: 'mekanism:hydrofluoric_acid',
        //             amount: 1
        //         }
        //     }
        // }
    },
    dimensional: {
        meltingPoint: 1450
        // oreProcessing: {
        //     output: {
        //         type: 'dust',
        //         substrate: 'minecraft:gravel',
        //         secondary: 'rftoolsbase:dimensionalshard'
        //     },
        //     create: {
        //         primaryCount: 6,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 6,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     immersiveengineering: {
        //         primaryCount: 6,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     ars_nouveau: {
        //         primaryCount: 6,
        //         secondaryCount: 3,
        //         secondaryChance: 0.25
        //     },
        //     occultism: {
        //         primaryCount: 8,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         enrichmentCount: 8
        //     }
        // }
    },
    niter: {
        meltingPoint: 334
        // oreProcessing: {
        //     output: {
        //         type: 'gem',
        //         substrate: 'minecraft:gravel',
        //         secondary: 'emendatusenigmatica:sulfur_dust'
        //     },
        //     create: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.25,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.25
        //     },
        //     immersiveengineering: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.25
        //     },
        //     ars_nouveau: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.25
        //     },
        //     occultism: {
        //         primaryCount: 3,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         enrichmentCount: 3
        //     }
        // }
    },
    cinnabar: {
        meltingPoint: 580 //,
        // oreProcessing: {
        //     output: {
        //         type: 'gem',
        //         substrate: 'minecraft:gravel',
        //         secondary: 'emendatusenigmatica:sulfur_dust'
        //     },
        //     create: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5
        //     },
        //     immersiveengineering: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5
        //     },
        //     ars_nouveau: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5
        //     },
        //     occultism: {
        //         primaryCount: 4,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         enrichmentCount: 4
        //     }
        // }
    },
    aquite: {
        // meltingPoint: 0,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:diopside_gem'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4,
                processingTime: 250
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            immersiveengineering: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            ars_nouveau: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            occultism: {
                primaryCount: 5
            },
            mekanism: {
                enrichmentCount: 6,
                purificationCount: 8,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
            }
        }
    },
    diopside: {
        // meltingPoint: 0,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:pyrope_gem'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4,
                processingTime: 250
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            immersiveengineering: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            ars_nouveau: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            occultism: {
                primaryCount: 5
            },
            mekanism: {
                enrichmentCount: 6,
                purificationCount: 8,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
            }
        }
    },
    pyrope: {
        // meltingPoint: 0,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:charoite_gem'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4,
                processingTime: 250
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            immersiveengineering: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            ars_nouveau: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            occultism: {
                primaryCount: 5
            },
            mekanism: {
                enrichmentCount: 6,
                purificationCount: 8,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
            }
        }
    },
    charoite: {
        // meltingPoint: 0,
        oreProcessing: {
            output: {
                type: 'gem',
                substrate: 'minecraft:gravel',
                secondary: 'emendatusenigmatica:aquite_gem'
            },
            create: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4,
                processingTime: 250
            },
            thermal: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            immersiveengineering: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            ars_nouveau: {
                primaryCount: 6,
                secondaryCount: 2,
                secondaryChance: 0.4
            },
            occultism: {
                primaryCount: 5
            },
            mekanism: {
                enrichmentCount: 6,
                purificationCount: 8,
                purificationGas: {
                    gas: 'mekanism:oxygen',
                    amount: 1
                }
            }
        }
    },
    bitumen: {
        meltingPoint: 115
        // oreProcessing: {
        //     output: {
        //         type: 'gem',
        //         substrate: 'minecraft:gravel',
        //         secondary: 'emendatusenigmatica:sulfur_dust'
        //     },
        //     create: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5,
        //         processingTime: 300
        //     },
        //     thermal: {
        //         primaryCount: 2,
        //         secondaryCount: 2,
        //         secondaryChance: 0.5
        //     },
        //     immersiveengineering: {
        //         primaryCount: 4
        //     },
        //     occultism: {
        //         primaryCount: 4,
        //         oreWeight:
        //     },
        //     mekanism: {
        //         primaryCount: 4
        //     }
        // }
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
