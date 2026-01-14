export class SkillFunctionRegistry {
    constructor() {
        this.functions = new Map();
    }
    register(id, fn) {
        if (this.functions.has(id)) {
            throw new Error(`SkillFunction already registered: ${id}`);
        }
        this.functions.set(id, fn);
    }
    get(id) {
        return this.functions.get(id);
    }
    has(id) {
        return this.functions.has(id);
    }
    list() {
        return [...this.functions.keys()];
    }
}
