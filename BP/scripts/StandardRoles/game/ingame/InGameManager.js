import { KairoUtils } from "../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../constants/systems";
import { roles } from "../../data/roles";
import { InGameEventManager } from "./events/InGameEventManager";
import { SkillManager } from "./SkillManager";
export var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["Initializing"] = 0] = "Initializing";
    GamePhase[GamePhase["Preparing"] = 1] = "Preparing";
    GamePhase[GamePhase["InGame"] = 2] = "InGame";
    GamePhase[GamePhase["Result"] = 3] = "Result";
    GamePhase[GamePhase["Waiting"] = 4] = "Waiting";
})(GamePhase || (GamePhase = {}));
export class InGameManager {
    constructor(systemManager) {
        this.systemManager = systemManager;
        this.inGameEventManager = InGameEventManager.create(this);
        this.skillManager = SkillManager.create(this);
    }
    static create(systemManager) {
        return new InGameManager(systemManager);
    }
    getInGameEventManager() {
        return this.inGameEventManager;
    }
    handlePlayerSkillTrigger(playerId, eventType) {
        this.skillManager.emitPlayerEvent(playerId, eventType);
    }
    async getPlayerData(playerId) {
        const kairoResponse = await KairoUtils.sendKairoCommandAndWaitResponse(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, SCRIPT_EVENT_COMMAND_IDS.GET_PLAYER_WEREWOLF_DATA, {
            playerId,
        });
        return kairoResponse.data.playerData;
    }
    getRoleDefinition(roleId) {
        return roles.find((role) => role.id === roleId);
    }
}
