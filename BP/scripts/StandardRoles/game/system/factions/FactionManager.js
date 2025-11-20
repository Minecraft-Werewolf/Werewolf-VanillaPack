import { FactionRegistrationRequester } from "./FactionRegistrationRequester";
export class FactionManager {
    constructor(systemManager) {
        this.systemManager = systemManager;
        this.factionRegistrationRequester = FactionRegistrationRequester.create(this);
    }
    static create(systemManager) {
        return new FactionManager(systemManager);
    }
    requestFactionRegistration() {
        this.factionRegistrationRequester.request();
    }
}
