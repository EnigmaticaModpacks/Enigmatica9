//priority: 1010

// Used for correcting tags for Blue Skies materials
const blueSkiesMetals = ['falsite', 'ventium', 'horizonite'];

// Properties for Metal processing
const metal_properties = {
    iron: {
        meltingPoint: 800,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'nickel'
            },
            create: {
                processingTime: 400
            }
        }
    },
    nickel: {
        meltingPoint: 950,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'iron'
            },
            create: {
                processingTime: 350
            }
        }
    },
    gold: {
        meltingPoint: 700,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'zinc'
            },
            create: {
                processingTime: 300
            }
        }
    },
    copper: {
        meltingPoint: 500,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'gold'
            },
            create: {
                processingTime: 350
            }
        }
    },
    aluminum: {
        meltingPoint: 425,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'iron'
            },
            create: {
                processingTime: 300
            }
        }
    },
    lead: {
        meltingPoint: 330,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'silver'
            },
            create: {
                processingTime: 300
            }
        }
    },
    silver: {
        meltingPoint: 790,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'lead'
            },
            create: {
                processingTime: 300
            }
        }
    },
    uranium: {
        meltingPoint: 830,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'lead'
            },
            create: {
                processingTime: 400
            }
        }
    },
    osmium: {
        meltingPoint: 975,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'tin'
            },
            create: {
                processingTime: 400
            }
        }
    },
    tin: {
        meltingPoint: 225,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'osmium'
            },
            create: {
                processingTime: 350
            }
        }
    },
    zinc: {
        meltingPoint: 420,
        oreProcessing: {
            output: {
                substrate: 'minecraft:gravel',
                secondary: 'gold'
            },
            create: {
                processingTime: 350
            }
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
    //         }
    //     }
    // },
    iesnium: {
        meltingPoint: 850,
        oreProcessing: {
            output: {
                substrate: 'occultism:burnt_otherstone',
                secondary: 'silver'
            },
            create: {
                processingTime: 500
            }
        }
    },
    // elementium: {
    //     meltingPoint: 875
    // },
    // enderium: {
    //     meltingPoint: 1450
    // },
    // signalum: {
    //     meltingPoint: 1272
    // },
    // lumium: {
    //     meltingPoint: 1354
    // },
    // manasteel: {
    //     meltingPoint: 900
    // },
    // terrasteel: {
    //     meltingPoint: 1350
    // },
    // gaia_spirit: {
    //     meltingPoint: 975
    // },
    infused_iron: {
        meltingPoint: 850
    },
    // sky_metal: {
    //     meltingPoint: 950
    // },
    energized_steel: {
        meltingPoint: 875
    }
};
