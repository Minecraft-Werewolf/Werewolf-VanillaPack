import type { SystemManager } from "../SystemManager";

export class ScriptEventReceiver {
    private constructor(private readonly systemManager: SystemManager) {}
    public static create(systemManager: SystemManager): ScriptEventReceiver {
        return new ScriptEventReceiver(systemManager);
    }

    public handleScriptEvent(message: string): void {}
}
