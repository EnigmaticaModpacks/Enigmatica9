JEIEvents.hideFluids((event) => {
    jei.base.fluids.hidden.forEach((hiddenFluid) => {
        event.hide(hiddenFluid);
    });
});
