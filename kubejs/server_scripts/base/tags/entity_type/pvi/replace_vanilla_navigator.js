ServerEvents.tags('entity_type', (event) => {
    event.get('per_viam_invenire:replace_vanilla_navigator').remove([/minecraft/]);
});
