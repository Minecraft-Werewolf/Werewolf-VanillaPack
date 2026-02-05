import type {
    FactionDefinition,
    RoleDefinition,
    RoleGroupDefinition,
    SettingDefinition,
} from "../../@modules/game-manager/constants/types";
import type { GameEventContext } from "../../@modules/game-manager/game/ingame/game/GameManager";
import type { GameEventHandlerMap } from "../../@modules/game-manager/game/ingame/game/SkillManager";
import { SystemManager } from "../../@modules/game-manager/game/SystemManager";
import type { SelfPlayerData } from "../player";

export const registerWerewolfModules = (): void => {
    SystemManager.getInstance().getRegistry().init({});
};

export const registerRoles = (roles: RoleDefinition[]): void => {
    SystemManager.getInstance().getRegistry().registerDefinitions({
        roles,
    });
};

export const registerFactions = (factions: FactionDefinition[]): void => {
    SystemManager.getInstance().getRegistry().registerDefinitions({
        factions,
    });
};

export const registerRoleGroups = (roleGroups: RoleGroupDefinition[]): void => {
    SystemManager.getInstance().getRegistry().registerDefinitions({
        roleGroups,
    });
};

export const registerSettings = (settings: SettingDefinition[]): void => {
    SystemManager.getInstance().getRegistry().registerDefinitions({
        settings,
    });
};

export const registerPlayerData = (data: SelfPlayerData): void => {
    SystemManager.getInstance().getRegistry().registerPlayerData(data);
};

export const registerOnTickUpdate = (handler: (ev: GameEventContext) => void): void => {
    const registry = SystemManager.getInstance().getRegistry();
    const currentHandlers = registry.getUpdateHandlers() ?? {};
    registry.registerUpdateHandlers({
        ...currentHandlers,
        onTickUpdate: handler,
    });
};

export const registerOnSecondUpdate = (handler: (ev: GameEventContext) => void): void => {
    const registry = SystemManager.getInstance().getRegistry();
    const currentHandlers = registry.getUpdateHandlers() ?? {};
    registry.registerUpdateHandlers({
        ...currentHandlers,
        onSecondUpdate: handler,
    });
};

export const registerRoleSkillHandlers = (handlers: Record<string, GameEventHandlerMap>): void => {
    SystemManager.getInstance().getRegistry().registerRoleSkillHandlers(handlers);
};
