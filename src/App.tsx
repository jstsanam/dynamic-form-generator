import React, { useState } from "react";
import { JSONEditor } from "./components/JSONEditor";
import { Form } from "./components/Form";
import { useJSONValidator } from "./hooks/useJSONValidator";
import { validateJSON } from "./utils/schemaValidation";

const initialJSON = `
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    }
  ]
}`;

const App: React.FC = () => {
  const { json, setJSON, validate, error } = useJSONValidator(initialJSON);
  const [schema, setSchema] = useState<any | null>(null);

  const handleUpdate = () => {
    console.log("Input JSON:", json);
    const validationResult = validateJSON(json);
    console.log("Validation Result:", validationResult);
  
    if (validationResult.valid) {
      const parsed = JSON.parse(json);
      console.log("Parsed JSON:", parsed);
      setSchema(parsed);
      // setErrors(null);
    } else {
      console.error("Validation Errors:", validationResult.errors);
      setSchema(null);
      // setErrors(validationResult.errors);
    }
  };
  

  const parsedInitialJSON = JSON.parse(initialJSON);
  console.log(parsedInitialJSON);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        <JSONEditor json={json} setJSON={setJSON} error={error} />
        <button
          onClick={handleUpdate}
          className="w-full bg-blue-500 text-white py-2 mt-2"
        >
          Update Form
        </button>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100">
        {schema ? (
          <Form schema={schema} />
        ) : (
          <p className="p-4 text-red-500">Invalid Schema</p>
        )}
      </div>
    </div>
  );
};

export default App;
