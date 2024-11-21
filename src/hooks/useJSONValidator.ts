import { useState } from "react";
import { validateJSON } from "../utils/schemaValidation";

export const useJSONValidator = (initialJSON: string) => {
  const [json, setJSON] = useState<string>(initialJSON);
  const [error, setError] = useState<string | null>(null);

  const validate = (): boolean => {
    try {
      const { valid, errors } = validateJSON(json);

      if (!valid) {
        setError(errors?.join(", ") || "Unknown error");
        return false;
      }

      setError(null);
      return true;
    } catch (err) {
      setError("Unexpected error during validation.");
      return false;
    }
  };

  return { json, setJSON, validate, error };
};
