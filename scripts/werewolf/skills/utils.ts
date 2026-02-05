import type { RoleDefinition } from "../../@modules/game-manager/constants/types";
import type { IngameConstants } from "../../@modules/game-manager/game/ingame/game/IngameConstants";

export function getRoleDefaultColor(c: IngameConstants, role: RoleDefinition): string {
    const faction = c.getFactionById(role.factionId);
    return faction?.defaultColor ?? "§f";
}
