import type {
    FactionDefinition,
    RoleDefinition,
    RoleGroupDefinition,
    SettingDefinition,
} from "../../@modules/game-manager/constants/types";
import type { GameEventContext } from "../../@modules/game-manager/game/ingame/game/GameManager";
import type { GameEventHandlerMap } from "../../@modules/game-manager/game/ingame/game/SkillManager";
import {
    registerDefinitions,
    registerPlayerData as registerPlayerDataInRegistry,
    registerRoleSkillHandlers as registerRoleSkillHandlersInRegistry,
    registerUpdateHandlers,
} from "../../@modules/game-manager/game/registry";
import type { SelfPlayerData } from "../player";

export const loadWerewolfDefinitionModules = async (): Promise<void> => {
    await Promise.all([
        import("../roles").catch(() => undefined),
        import("../factions").catch(() => undefined),
        import("../settings").catch(() => undefined),
        import("../update").catch(() => undefined),
        import("../player").catch(() => undefined),
        import("../skills/skillHandlers").catch(() => undefined),
    ]);
    registerUpdateHandlers({});
};

export const registerRoleDefinitions = (roles: RoleDefinition[]): void => {
    registerDefinitions({
        roles,
    });
};

export const registerFactionDefinitions = (factions: FactionDefinition[]): void => {
    registerDefinitions({
        factions,
    });
};

export const registerRoleGroupDefinitions = (roleGroups: RoleGroupDefinition[]): void => {
    registerDefinitions({
        roleGroups,
    });
};

export const registerSettingDefinitions = (settings: SettingDefinition[]): void => {
    registerDefinitions({
        settings,
    });
};

export const registerPlayerDefaults = (data: SelfPlayerData): void => {
    registerPlayerDataInRegistry(data);
};

export const registerTickUpdateHandler = (handler: (ev: GameEventContext) => void): void => {
    registerUpdateHandlers({
        onTickUpdate: handler,
    });
};

export const registerSecondUpdateHandler = (handler: (ev: GameEventContext) => void): void => {
    registerUpdateHandlers({
        onSecondUpdate: handler,
    });
};

export const registerRoleSkillHandlerMap = (
    handlers: Record<string, GameEventHandlerMap>,
): void => {
    registerRoleSkillHandlersInRegistry(handlers);
};
