import React from "react";

interface JSONEditorProps {
  json: string;
  setJSON: (value: string) => void;
  error: string | null;
}

export const JSONEditor: React.FC<JSONEditorProps> = ({ json, setJSON, error }) => (
  <div className="h-full p-4 border-r">
    <textarea
      className="w-full h-full border p-2 text-sm font-mono"
      value={json}
      onChange={(e) => setJSON(e.target.value)}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
