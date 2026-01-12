import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_MESSAGES } from "../../constants/scriptevent";
import { GameWorldState } from "../SystemManager";
export class ScriptEventReceiver {
    constructor(systemManager) {
        this.systemManager = systemManager;
    }
    static create(systemManager) {
        return new ScriptEventReceiver(systemManager);
    }
    async handleScriptEvent(command) {
        switch (command.commandType) {
            case SCRIPT_EVENT_COMMAND_IDS.WORLD_STATE_CHANGE:
                this.handleWorldStateChange(command.data.newState);
                return;
            case SCRIPT_EVENT_COMMAND_IDS.FACTION_RE_REGISTRATION_REQUEST:
                this.systemManager.requestFactionRegistration();
                return;
            case SCRIPT_EVENT_COMMAND_IDS.ROLE_RE_REGISTRATION_REQUEST:
                this.systemManager.requestRoleRegistration();
            case SCRIPT_EVENT_COMMAND_IDS.WEREWOLF_INGAME_PLAYER_SKILL_TRIGGER:
                this.systemManager.handlePlayerSkillTrigger(command.data.playerId, command.data.eventType);
                return;
            default:
                return;
        }
    }
    handleWorldStateChange(newState) {
        switch (newState) {
            case SCRIPT_EVENT_MESSAGES.IN_GAME:
                this.systemManager.changeWorldState(GameWorldState.InGame);
                break;
            case SCRIPT_EVENT_MESSAGES.OUT_GAME:
                this.systemManager.changeWorldState(GameWorldState.OutGame);
                break;
        }
    }
}
