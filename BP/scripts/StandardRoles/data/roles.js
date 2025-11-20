import { WEREWOLF_STANDARDROLES_TRANSLATE_IDS } from "../constants/translate";
export const GameEventTypeValues = [
    "AfterGameStart",
    "BeforeMeetingStart",
    "AfterMeetingStart",
    "SkillUse",
    "SkillUseInMeeting",
    "Death",
];
export const roles = [
    {
        id: "villager",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_VILLAGER },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_VILLAGER },
        faction: "villager",
        count: { max: 40 },
        sortIndex: 0,
    },
    {
        id: "seer",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_SEER },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_SEER },
        faction: "villager",
        sortIndex: 1,
    },
    {
        id: "medium",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_MEDIUM },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_MEDIUM },
        faction: "villager",
        sortIndex: 2,
    },
    {
        id: "knight",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_KNIGHT },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_KNIGHT },
        faction: "villager",
        sortIndex: 3,
    },
    {
        id: "werewolf",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_WEREWOLF },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_WEREWOLF },
        faction: "werewolf",
        sortIndex: 4,
    },
    {
        id: "great-wolf",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_GREATWOLF },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_GREATWOLF },
        faction: "werewolf",
        sortIndex: 5,
    },
    {
        id: "madman",
        name: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_NAME_MADMAN },
        description: { translate: WEREWOLF_STANDARDROLES_TRANSLATE_IDS.ROLE_DESCRIPTION_MADMAN },
        faction: "werewolf",
        isExcludedFromSurvivalCheck: true,
        sortIndex: 6,
    },
];
