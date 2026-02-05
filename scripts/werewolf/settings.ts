import type { SettingDefinition } from "../@modules/game-manager/constants/types";
import { registerSettings } from "./register";

export const settings: SettingDefinition[] = [];

registerSettings(settings);
