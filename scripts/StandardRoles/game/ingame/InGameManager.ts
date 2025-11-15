import type { SystemManager } from "../SystemManager";
import { InGameEventManager } from "./events/InGameEventManager";

export enum GamePhase {
    Initializing,
    Preparing,
    InGame,
    Result,
    Waiting,
}

export class InGameManager {
    private readonly inGameEventManager: InGameEventManager;

    private constructor(private readonly systemManager: SystemManager) {
        this.inGameEventManager = InGameEventManager.create(this);
    }

    public static create(systemManager: SystemManager): InGameManager {
        return new InGameManager(systemManager);
    }

    public getInGameEventManager(): InGameEventManager {
        return this.inGameEventManager;
    }
}
