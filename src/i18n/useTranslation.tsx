import { useTranslation as useTranslationBase } from "react-i18next";
import type { UseTranslationResponse } from "react-i18next";
import "./config";

export const useTranslation = (): UseTranslationResponse<string, string> => {
  return useTranslationBase();
};
