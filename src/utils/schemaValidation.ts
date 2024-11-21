export const validateJSON = (json: string): { valid: boolean; errors?: string[] } => {
    try {
      const parsedJSON = JSON.parse(json);
  
      const errors: string[] = [];
      if (!parsedJSON.formTitle) errors.push("Missing 'formTitle'.");
      if (!parsedJSON.formDescription) errors.push("Missing 'formDescription'.");
      if (!Array.isArray(parsedJSON.fields)) errors.push("'fields' must be an array.");
  
      if (parsedJSON.fields) {
        parsedJSON.fields.forEach((field: any, index: number) => {
          if (!field.id) errors.push(`Field at index ${index} is missing 'id'.`);
          if (!field.type) errors.push(`Field at index ${index} is missing 'type'.`);
          if (!field.label) errors.push(`Field at index ${index} is missing 'label'.`);
        });
      }
  
      return errors.length > 0 ? { valid: false, errors } : { valid: true };
    } catch {
      return { valid: false, errors: ["Invalid JSON format."] };
    }
  };
  