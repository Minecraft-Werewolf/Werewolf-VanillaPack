import type { SystemManager } from "../../SystemManager";

export class RoleManager {
    private constructor(private readonly systemManager: SystemManager) {}
    public static create(systemManager: SystemManager): RoleManager {
        return new RoleManager(systemManager);
    }
}
