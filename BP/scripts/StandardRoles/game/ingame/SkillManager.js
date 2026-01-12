import { KairoUtils } from "../../../Kairo/utils/KairoUtils";
import { SCRIPT_EVENT_COMMAND_IDS } from "../../constants/scriptevent";
import { KAIRO_COMMAND_TARGET_ADDON_IDS } from "../../constants/systems";
export class SkillManager {
    constructor(inGameManager) {
        this.inGameManager = inGameManager;
    }
    static create(inGameManager) {
        return new SkillManager(inGameManager);
    }
    async handlePlayerSkillTrigger(playerId, eventType) {
        const kairoResponse = await KairoUtils.sendKairoCommandAndWaitResponse(KAIRO_COMMAND_TARGET_ADDON_IDS.WEREWOLF_GAMEMANAGER, SCRIPT_EVENT_COMMAND_IDS.GET_PLAYER_WEREWOLF_DATA, {
            playerId,
        });
        const playerData = kairoResponse.data.playerData;
        console.log(JSON.stringify(playerData.role?.name));
    }
}
