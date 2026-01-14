import type { GameEventType } from "../../data/roles";
import type { InGameManager } from "./InGameManager";
import { SkillFunctionRegistry } from "./SkillFunctionRegistry";

export class SkillManager {
    private readonly skillFunctionRegistry: SkillFunctionRegistry;
    private constructor(private readonly inGameManager: InGameManager) {
        this.skillFunctionRegistry = SkillFunctionRegistry.create(this);
    }
    public static create(inGameManager: InGameManager): SkillManager {
        return new SkillManager(inGameManager);
    }

    public async emitPlayerEvent(
        playerId: string,
        eventType: GameEventType,
        ctxPayload?: unknown,
    ): Promise<void> {
        const playerData = await this.inGameManager.getPlayerData(playerId);
        if (!playerData) return;
        if (!playerData.role) return;

        const roleDefinition = this.inGameManager.getRoleDefinition(playerData.role.id);
        if (!roleDefinition) return;

        const script = roleDefinition.handleGameEvents?.[eventType];
        if (!script) return;

        const ctx = new SkillContext(this.inGameManager, playerId, eventType, ctxPayload);

        await this.executeScript(script, ctx);
    }

    // ------------------------

    private async executeScript(script: SkillScript, ctx: SkillContext): Promise<void> {
        if (script.actions) {
            for (const action of script.actions) {
                await this.executeAction(action, ctx);
            }
        }

        if (script.invoke) {
            const invokes = Array.isArray(script.invoke) ? script.invoke : [script.invoke];

            for (const ref of invokes) {
                const fn = this.functionRegistry.get(ref.id);
                if (!fn) {
                    throw new Error(`SkillFunction not registered: ${ref.id}`);
                }
                await fn(ctx, ref.args);
            }
        }
    }

    // ------------------------

    private async executeAction(action: SkillAction, ctx: SkillContext): Promise<void> {
        switch (action.type) {
            case "selectTarget":
                ctx.selectTarget(action.from);
                break;

            case "sendMessage":
                ctx.sendMessage(action.to, action.message);
                break;

            case "kill":
                ctx.kill(action.target);
                break;

            case "protect":
                ctx.protect(action.target, action.duration);
                break;

            default:
                throw new Error(`Unknown SkillAction: ${(action as any).type}`);
        }
    }
}
