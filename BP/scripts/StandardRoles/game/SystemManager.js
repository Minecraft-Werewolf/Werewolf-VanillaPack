import { InGameManager } from "./ingame/InGameManager";
import { OutGameManager } from "./outgame/OutGameManager";
import { SystemEventManager } from "./system/events/SystemEventManager";
import { FactionManager } from "./system/factions/FactionManager";
import { RoleManager } from "./system/roles/RoleManager";
import { ScriptEventReceiver } from "./system/ScriptEventReceiver";
import { WorldStateChanger } from "./system/WorldStateChanger";
export var GameWorldState;
(function (GameWorldState) {
    GameWorldState[GameWorldState["OutGame"] = 0] = "OutGame";
    GameWorldState[GameWorldState["InGame"] = 1] = "InGame";
})(GameWorldState || (GameWorldState = {}));
export class SystemManager {
    constructor() {
        this.inGameManager = null;
        this.outGameManager = null;
        this.currentWorldState = null;
        this.scriptEventReceiver = ScriptEventReceiver.create(this);
        this.systemEventManager = SystemEventManager.create(this);
        this.worldStateChanger = WorldStateChanger.create(this);
        this.factionManager = FactionManager.create(this);
        this.roleManager = RoleManager.create(this);
    }
    init() {
        this.requestFactionRegistration();
        this.requestRoleRegistration();
        // WorldState について GameManager に尋ねることと、
        // requestがちゃんと通ったかを GameManager から返してもらいたい。
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new SystemManager();
        }
        return this.instance;
    }
    handleScriptEvent(data) {
        this.scriptEventReceiver.handleScriptEvent(data);
    }
    subscribeEvents() {
        this.systemEventManager.subscribeAll();
    }
    unsubscribeEvents() {
        this.systemEventManager.unsubscribeAll();
    }
    changeWorldState(nextState) {
        this.worldStateChanger.change(nextState);
    }
    getWorldState() {
        return this.currentWorldState;
    }
    setWorldState(state) {
        this.currentWorldState = state;
    }
    getInGameManager() {
        return this.inGameManager;
    }
    setInGameManager(v) {
        this.inGameManager = v;
    }
    getOutGameManager() {
        return this.outGameManager;
    }
    setOutGameManager(v) {
        this.outGameManager = v;
    }
    createInGameManager() {
        return InGameManager.create(this);
    }
    createOutGameManager() {
        return OutGameManager.create(this);
    }
    requestFactionRegistration() {
        this.factionManager.requestFactionRegistration();
    }
    requestRoleRegistration() {
        this.roleManager.requestRoleRegistration();
    }
}
SystemManager.instance = null;
