import type { KairoCommand } from "../../Kairo/utils/KairoUtils";
import type { GameEventType } from "../data/roles";
import { InGameManager } from "./ingame/InGameManager";
import { OutGameManager } from "./outgame/OutGameManager";
import { SystemEventManager } from "./system/events/SystemEventManager";
import { FactionManager } from "./system/factions/FactionManager";
import { RoleManager } from "./system/roles/RoleManager";
import { ScriptEventReceiver } from "./system/ScriptEventReceiver";
import { WorldStateChanger } from "./system/WorldStateChanger";

export enum GameWorldState {
    OutGame,
    InGame,
}

export class SystemManager {
    private readonly scriptEventReceiver: ScriptEventReceiver;
    private readonly systemEventManager: SystemEventManager;
    private readonly worldStateChanger: WorldStateChanger;
    private readonly factionManager: FactionManager;
    private readonly roleManager: RoleManager;
    private inGameManager: InGameManager | null = null;
    private outGameManager: OutGameManager | null = null;
    private currentWorldState: GameWorldState | null = null;

    private constructor() {
        this.scriptEventReceiver = ScriptEventReceiver.create(this);
        this.systemEventManager = SystemEventManager.create(this);
        this.worldStateChanger = WorldStateChanger.create(this);
        this.factionManager = FactionManager.create(this);
        this.roleManager = RoleManager.create(this);
    }

    public init(): void {
        this.requestFactionRegistration();
        this.requestRoleRegistration();

        // WorldState について GameManager に尋ねることと、
        // requestがちゃんと通ったかを GameManager から返してもらいたい。
    }

    private static instance: SystemManager | null = null;

    public static getInstance(): SystemManager {
        if (this.instance === null) {
            this.instance = new SystemManager();
        }
        return this.instance;
    }

    public handleScriptEvent(data: KairoCommand): void {
        this.scriptEventReceiver.handleScriptEvent(data);
    }

    public subscribeEvents(): void {
        this.systemEventManager.subscribeAll();
    }

    public unsubscribeEvents(): void {
        this.systemEventManager.unsubscribeAll();
    }
    public changeWorldState(nextState: GameWorldState): void {
        this.worldStateChanger.change(nextState);
    }

    public getWorldState(): GameWorldState | null {
        return this.currentWorldState;
    }
    public setWorldState(state: GameWorldState): void {
        this.currentWorldState = state;
    }

    public getInGameManager() {
        return this.inGameManager;
    }
    public setInGameManager(v: InGameManager | null) {
        this.inGameManager = v;
    }

    public getOutGameManager() {
        return this.outGameManager;
    }
    public setOutGameManager(v: OutGameManager | null) {
        this.outGameManager = v;
    }

    public createInGameManager(): InGameManager {
        return InGameManager.create(this);
    }
    public createOutGameManager(): OutGameManager {
        return OutGameManager.create(this);
    }

    public requestFactionRegistration(): void {
        this.factionManager.requestFactionRegistration();
    }

    public requestRoleRegistration(): void {
        this.roleManager.requestRoleRegistration();
    }

    public handlePlayerSkillTrigger(playerId: string, eventType: GameEventType): void {
        this.inGameManager?.handlePlayerSkillTrigger(playerId, eventType);
    }
}
