if (global.isExpertMode == true) {
    EntityEvents.spawned((event) => {
        const entity = event.entity;
        if (!entity.isLiving()) {
            return;
        }

        // Switch to entity.nbt with KubeJS 6.1
        // if (entity.nbt.hasOwnProperty('Corrupted')) {
        if (entity.fullNBT.hasOwnProperty('Corrupted')) {
            let bBox = entity.getBoundingBox();
            let volume = (bBox.maxX - bBox.minX) * (bBox.maxY - bBox.minY) * (bBox.maxZ - bBox.minZ);
            let aura_cost = Math.floor(volume * 5000);
            let mob_dimension = String(event.level.getDimension());

            let command = `/execute in ${mob_dimension} positioned ${entity.x} ${entity.y} ${entity.z} run naaura remove ${aura_cost}`;
            event.server.runCommandSilent(command);

            // let mob_type = String(entity.entityType).split('.')[2];
            // console.log(`${mob_type} has size of ${volume}`);
            // console.log(`Aura Cost: ${aura_cost}`);
        }
    });
}
