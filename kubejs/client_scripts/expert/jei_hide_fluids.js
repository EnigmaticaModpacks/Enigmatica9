JEIEvents.hideFluids((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    jei.expert.fluids.hidden.forEach((hiddenFluid) => {
        event.hide(hiddenFluid);
    });
});
