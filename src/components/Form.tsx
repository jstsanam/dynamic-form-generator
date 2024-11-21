import React from "react";

export const Form: React.FC<{ schema: any }> = ({ schema }) => {
  if (!schema || !schema.fields || schema.fields.length === 0) {
    return <p className="text-red-500">Invalid Schema</p>;
  }

  return (
    <form>
      <h2>{schema.formTitle || "Untitled Form"}</h2>
      <p>{schema.formDescription || "No description available."}</p>
      {schema.fields.map((field: any, index: number) => (
        <div key={field.id || index}>
          <label>{field.label || "Unnamed Field"}</label>
          <input
            type={field.type || "text"}
            id={field.id || `field-${index}`}
            required={field.required || false}
            placeholder={field.placeholder || ""}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
