import { werewolf } from "@mc-werewolf/module";
import { WEREWOLF_VANILLAPACK_TRANSLATE_IDS as T } from "./constants/translate";

type FactionWithResultPresentation = Parameters<typeof werewolf.defineFactions>[0][number] & {
    readonly victoryTitle: string;
    readonly victoryMessage: string;
};

const factions: readonly FactionWithResultPresentation[] = [
    {
        id: "village",
        name: T.FACTION_NAME_VILLAGER,
        color: "§a",
        sortIndex: 0,
        victoryTitle: T.WEREWOLF_GAME_RESULT_VILLAGER_FACTION_VICTORY_TITLE,
        victoryMessage: T.WEREWOLF_GAME_RESULT_VILLAGER_FACTION_VICTORY_MESSAGE,
        winCondition: {
            expr: "alive.village > 0 && alive.werewolf == 0",
            priority: 10,
        },
    },
    {
        id: "werewolf",
        name: T.FACTION_NAME_WEREWOLF,
        color: "§4",
        sortIndex: 1,
        victoryTitle: T.WEREWOLF_GAME_RESULT_WEREWOLF_FACTION_VICTORY_TITLE,
        victoryMessage: T.WEREWOLF_GAME_RESULT_WEREWOLF_FACTION_VICTORY_MESSAGE,
        winCondition: {
            expr: "alive.werewolf > 0 && alive.village == 0",
            priority: 10,
        },
    },
];

werewolf.defineFactions(factions);
