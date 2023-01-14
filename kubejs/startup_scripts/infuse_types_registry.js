// WARNING: This file is only temporary! It is here mostly for testing purposes of Recipe creation, and will be replaced when EEv2.1 is out!
// Load Java class Mekanism uses to register their own Infuse Types
const MekanismInfuseTypes = Java.loadClass('mekanism.common.registries.MekanismInfuseTypes')

// Functions
global.infuse_types = []
let newInfuseType = (name, color, item) => {
    MekanismInfuseTypes.INFUSE_TYPES.register(name, color)
    global.infuse_types.push([name, item])
}

// Use the same instace of InfuseTypeDeferredRegister for creating our custom Infuse Types!
// Usage: newInfuseType('name', color) // color -> 0x121212 (0x"Hex")
// Note: This creates new Infuse Type under MEKANISM ID! Use with caution! (Duplicate Registry Entries can result in crash!)

newInfuseType('zinc', 0x404040, '#forge:dusts/zinc')
newInfuseType('nickel', 0x404040, '#forge:dusts/nickel')
newInfuseType('silver', 0x404040, '#forge:dusts/silver')
newInfuseType('glowstone', 0x404040, '#forge:dusts/glowstone')