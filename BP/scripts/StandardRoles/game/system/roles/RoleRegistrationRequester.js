import { KairoUtils } from "../../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../../constants/systems";
import { roles } from "../../../data/roles";
import { RoleManager } from "./RoleManager";
export class RoleRegistrationRequester {
    constructor(roleManager) {
        this.roleManager = roleManager;
    }
    static create(roleManager) {
        return new RoleRegistrationRequester(roleManager);
    }
    request() {
        KairoUtils.sendKairoCommand(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_REQUEST, {
            roles: roles,
        });
    }
}
