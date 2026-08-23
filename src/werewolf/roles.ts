import { werewolf } from "@mc-werewolf/module";

werewolf.defineRoles([
    { id: "villager",   name: "werewolf-vanillapack.role.name.villager",   faction: "village",  sortIndex: 0, index: 0, max: 40 },
    { id: "seer",       name: "werewolf-vanillapack.role.name.seer",       faction: "village",  sortIndex: 1, index: 1 },
    { id: "medium",     name: "werewolf-vanillapack.role.name.medium",     faction: "village",  sortIndex: 2, index: 2 },
    { id: "knight",     name: "werewolf-vanillapack.role.name.knight",     faction: "village",  sortIndex: 3, index: 3 },
    { id: "werewolf",   name: "werewolf-vanillapack.role.name.werewolf",   faction: "werewolf", sortIndex: 0, index: 4, max: 10 },
    { id: "great-wolf", name: "werewolf-vanillapack.role.name.greatwolf",  faction: "werewolf", sortIndex: 1, index: 5, divinationResult: "village" },
    { id: "madman",     name: "werewolf-vanillapack.role.name.madman",     faction: "werewolf", sortIndex: 2, index: 6, divinationResult: "village" },
]);
