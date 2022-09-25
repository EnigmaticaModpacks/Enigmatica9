JEIEvents.information((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const descriptions = [];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.expert.items.disabled.forEach((item) => {
        event.addItem(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues"
        );
    });
});
