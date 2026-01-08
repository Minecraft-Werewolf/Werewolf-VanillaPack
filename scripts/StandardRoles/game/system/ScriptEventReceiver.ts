import type { KairoCommand } from "../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS, SCRIPT_EVENT_MESSAGES } from "../../constants/scriptevent";
import { GameWorldState, type SystemManager } from "../SystemManager";

export class ScriptEventReceiver {
    private constructor(private readonly systemManager: SystemManager) {}
    public static create(systemManager: SystemManager): ScriptEventReceiver {
        return new ScriptEventReceiver(systemManager);
    }

    public handleScriptEvent(data: KairoCommand): void {
        switch (data.commandId) {
            case SCRIPT_EVENT_COMMAND_IDS.WORLD_STATE_CHANGE:
                this.handleWorldStateChange(data.newState);
                break;
            case SCRIPT_EVENT_COMMAND_IDS.FACTION_RE_REGISTRATION_REQUEST:
                this.systemManager.requestFactionRegistration();
                break;
            case SCRIPT_EVENT_COMMAND_IDS.ROLE_RE_REGISTRATION_REQUEST:
                this.systemManager.requestRoleRegistration();
            default:
                break;
        }
    }

    private handleWorldStateChange(newState: string): void {
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
