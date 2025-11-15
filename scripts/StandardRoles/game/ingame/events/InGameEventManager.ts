import { BaseEventManager } from "../../events/BaseEventManager";
import type { InGameManager } from "../InGameManager";

export class InGameEventManager extends BaseEventManager {
    private constructor(private readonly inGameManager: InGameManager) {
        super();
    }

    public static create(inGameManager: InGameManager): InGameEventManager {
        return new InGameEventManager(inGameManager);
    }

    public override subscribeAll(): void {}

    public override unsubscribeAll(): void {}

    public getInGameManager(): InGameManager {
        return this.inGameManager;
    }
}
