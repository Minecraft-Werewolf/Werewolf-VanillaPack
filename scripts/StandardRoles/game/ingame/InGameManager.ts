import { KairoUtils } from "../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../constants/systems";
import { roles, type GameEventType, type RoleDefinition } from "../../data/roles";
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

export interface PlayerDataDTO {
    playerId: string;
    name: string;
    isAlive: boolean;
    isVictory: boolean;
    role: RoleDefinition | null;
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
        this.skillManager.emitPlayerEvent(playerId, eventType);
    }

    public async getPlayerData(playerId: string): Promise<PlayerDataDTO> {
        const kairoResponse = await KairoUtils.sendKairoCommandAndWaitResponse(
            KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER,
            SCRIPT_EVENT_COMMAND_IDS.GET_PLAYER_WEREWOLF_DATA,
            {
                playerId,
            },
        );
        return kairoResponse.data.playerData as PlayerDataDTO;
    }

    public getRoleDefinition(roleId: string): RoleDefinition | undefined {
        return roles.find((role) => role.id === roleId);
    }
}
