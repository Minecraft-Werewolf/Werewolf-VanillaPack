import { RoleRegistrationRequester } from "./RoleRegistrationRequester";
export class RoleManager {
    constructor(systemManager) {
        this.systemManager = systemManager;
        this.roleRegistrationRequester = RoleRegistrationRequester.create(this);
    }
    static create(systemManager) {
        return new RoleManager(systemManager);
    }
    requestRoleRegistration() {
        this.roleRegistrationRequester.request();
    }
}
