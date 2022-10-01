JEIEvents.removeCategories((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    //console.log(event.getCategoryIds()); //log a list of all category ids to logs/kubejs/client.txt

    event.remove(jei.normal.categories.hidden);
});
