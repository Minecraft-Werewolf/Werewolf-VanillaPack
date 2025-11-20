import { KairoUtils } from "../../../../Kairo/utils/KairoUtils";
import { properties } from "../../../../properties";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../../constants/systems";
import { factions } from "../../../data/factions";
import { FactionManager } from "./FactionManager";
export class FactionRegistrationRequester {
    constructor(factionManager) {
        this.factionManager = factionManager;
    }
    static create(factionManager) {
        return new FactionRegistrationRequester(factionManager);
    }
    request() {
        const data = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.FACTION_REGISTRATION_REQUEST,
            addonId: properties.id,
            factions: factions,
        };
        KairoUtils.sendKairoCommand(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, data);
    }
}
