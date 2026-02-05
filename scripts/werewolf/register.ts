import {
    registerDefinitions,
    registerPlayerData as registerPlayerDataInternal,
    registerUpdateHandlers,
    registerRoleSkillHandlers as registerRoleSkillHandlersInternal,
} from "../@modules/game-manager/game/registry";
import type {
    FactionDefinition,
    RoleDefinition,
    RoleGroupDefinition,
    SettingDefinition,
} from "../@modules/game-manager/constants/types";
import type { GameEventHandlerMap } from "../@modules/game-manager/game/ingame/game/SkillManager";
import type { GameEventContext } from "../@modules/game-manager/game/ingame/game/GameManager";
import type { SelfPlayerData } from "../@modules/game-manager/game/ingame/PlayerData";

export const registerWerewolfModules = async (): Promise<void> => {
    await Promise.all([
        import("./roles").catch(() => undefined),
        import("./factions").catch(() => undefined),
        import("./settings").catch(() => undefined),
        import("./update").catch(() => undefined),
        import("./player").catch(() => undefined),
        import("./skills/skillHandlers").catch(() => undefined),
    ]);
    registerUpdateHandlers({});
};

export const registerRoles = (roles: RoleDefinition[]): void => {
    registerDefinitions({
        roles,
    });
};

export const registerFactions = (factions: FactionDefinition[]): void => {
    registerDefinitions({
        factions,
    });
};

export const registerRoleGroups = (roleGroups: RoleGroupDefinition[]): void => {
    registerDefinitions({
        roleGroups,
    });
};

export const registerSettings = (settings: SettingDefinition[]): void => {
    registerDefinitions({
        settings,
    });
};

export const registerPlayerData = (data: SelfPlayerData): void => {
    registerPlayerDataInternal(data);
};

export const registerOnTickUpdate = (handler: (ev: GameEventContext) => void): void => {
    registerUpdateHandlers({
        onTickUpdate: handler,
    });
};

export const registerOnSecondUpdate = (handler: (ev: GameEventContext) => void): void => {
    registerUpdateHandlers({
        onSecondUpdate: handler,
    });
};

export const registerRoleSkillHandlers = (handlers: Record<string, GameEventHandlerMap>): void => {
    registerRoleSkillHandlersInternal(handlers);
};
