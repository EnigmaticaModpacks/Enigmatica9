ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Blacklist of blocks used to teleport to the Bumblezone
    event.get('the_bumblezone:dimension_teleportation/disallowed_teleportable_beehive_blocks').add([]);

    // Whitelist of blocks used to teleport to the Bumblezone
    event.get('the_bumblezone:dimension_teleportation/forced_allowed_teleportable_blocks').add([]);

    // Blocks required under a hive to teleport to the Bumblezone
    event
        .get('the_bumblezone:dimension_teleportation/required_blocks_under_beehive_to_teleport')
        .add(['powah:blazing_crystal_block']);
});
