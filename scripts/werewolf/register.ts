import {
    registerDefinitions,
    registerPlayerData,
    registerUpdateHandlers,
} from "../@modules/game-manager/game/registry";
import { factions } from "./factions";
import { playerData } from "./player";
import { roleGroups, roles } from "./roles";
import { settings } from "./settings";
import { onSecondUpdate, onTickUpdate } from "./update";

export const registerWerewolfModules = (): void => {
    registerDefinitions({
        roles,
        factions,
        roleGroups,
        settings,
    });
    registerPlayerData(playerData);
    registerUpdateHandlers({
        onTickUpdate,
        onSecondUpdate,
    });
};
