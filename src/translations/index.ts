import cs from "./cs";
import de from "./de";
import type { Translation } from "./definition.ts";
import en from "./en";

export const LANGS = ["en", "cs", "de"] as const;

export type Lang = (typeof LANGS)[number];

export const translations: { [l in Lang]: Translation } = { en, cs, de };
