let MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI');
JEIEvents.hideCustom((event) => {
    jei.base.gases.hidden.forEach((hiddenGas) => {
        event.get(MekanismJEI.TYPE_GAS).hide(hiddenGas);
    });
});
