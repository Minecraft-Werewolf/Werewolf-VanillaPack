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
        this.skillManager.handlePlayerSkillTrigger(playerId, eventType);
    }
}
