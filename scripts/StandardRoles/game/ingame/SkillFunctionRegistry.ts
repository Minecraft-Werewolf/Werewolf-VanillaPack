export type SkillFunction = (ctx: SkillContext, args?: unknown) => Promise<void>;

export class SkillFunctionRegistry {
    private readonly functions = new Map<string, SkillFunction>();

    public register(id: string, fn: SkillFunction): void {
        if (this.functions.has(id)) {
            throw new Error(`SkillFunction already registered: ${id}`);
        }
        this.functions.set(id, fn);
    }

    public get(id: string): SkillFunction | undefined {
        return this.functions.get(id);
    }

    public has(id: string): boolean {
        return this.functions.has(id);
    }

    public list(): string[] {
        return [...this.functions.keys()];
    }
}
