import type { GameEventType } from "../../data/roles";
import type { SystemManager } from "../SystemManager";
import { InGameEventManager } from "./events/InGameEventManager";
import { SkillManager } from "./SkillManager";

export enum GamePhase {
    Initializing,
    Preparing,
    InGame,
    Result,
    Waiting,
}

export class InGameManager {
    private readonly inGameEventManager: InGameEventManager;
    private readonly skillManager: SkillManager;

    private constructor(private readonly systemManager: SystemManager) {
        this.inGameEventManager = InGameEventManager.create(this);
        this.skillManager = SkillManager.create(this);
    }

    public static create(systemManager: SystemManager): InGameManager {
        return new InGameManager(systemManager);
    }

    public getInGameEventManager(): InGameEventManager {
        return this.inGameEventManager;
    }

    public handlePlayerSkillTrigger(playerId: string, eventType: GameEventType): void {
        this.skillManager.handlePlayerSkillTrigger(playerId, eventType);
    }
}
