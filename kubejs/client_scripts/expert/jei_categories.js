JEIEvents.removeCategories((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    //console.log(event.getCategoryIds()); //log a list of all category ids to logs/kubejs/client.txt

    event.remove(jei.expert.categories.hidden);
});
