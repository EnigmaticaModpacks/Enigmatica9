let MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI');
JEIEvents.hideCustom((event) => {
    const slurries = [/mekanism:clean_/, /mekanism:dirty_/];

    slurries.forEach((hiddenSlurry) => {
        event.get(MekanismJEI.TYPE_SLURRY).hide(hiddenSlurry);
    });
});
