import { roles } from "../../../data/roles";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_ID_SUFFIX } from "../../../constants/scriptevent";
import { properties } from "../../../../properties";
import { KairoUtils } from "../../../../Kairo/utils/KairoUtils";
export class RoleRegistrationSender {
    constructor(roleManager) {
        this.roleManager = roleManager;
    }
    static create(roleManager) {
        return new RoleRegistrationSender(roleManager);
    }
    send() {
        const data = {
            commandId: SCRIPT_EVENT_COMMAND_IDS.ROLE_REGISTRATION_RESPONSE,
            addonId: properties.id,
            roles: roles,
        };
        KairoUtils.sendKairoCommand(SCRIPT_EVENT_ID_SUFFIX.WEREWOLF_GAMEMANAGER, data);
    }
}
