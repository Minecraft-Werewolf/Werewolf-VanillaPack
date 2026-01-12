import { KairoUtils } from "../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../constants/systems";
import type { GameEventType, RoleDefinition } from "../../data/roles";
import type { InGameManager } from "./InGameManager";

interface PlayerDataDTO {
    playerId: string;
    name: string;
    isAlive: boolean;
    isVictory: boolean;
    role: RoleDefinition | null;
}

export class SkillManager {
    private constructor(private readonly inGameManager: InGameManager) {}

    public static create(inGameManager: InGameManager): SkillManager {
        return new SkillManager(inGameManager);
    }

    public async handlePlayerSkillTrigger(
        playerId: string,
        eventType: GameEventType,
    ): Promise<void> {
        const kairoResponse = await KairoUtils.sendKairoCommandAndWaitResponse(
            KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER,
            SCRIPT_EVENT_COMMAND_IDS.GET_PLAYER_WEREWOLF_DATA,
            {
                playerId,
            },
        );
        const playerData = kairoResponse.data.playerData as PlayerDataDTO;

        console.log(JSON.stringify(playerData.role?.name));
    }
}
