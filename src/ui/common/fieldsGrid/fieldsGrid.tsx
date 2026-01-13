import React from "react";
import "./fieldsGrid.scss";

interface FieldsGridProps {
  fields: { label: string; value: string, statusColor?: string }[];
}

const FieldsGrid: React.FC<FieldsGridProps> = ({ fields }) => {
  return (
    <div className="fields-grid">
      {fields.map((field, index) => (
        <div key={index} className="field-item">
          <p className="field-label">{field.label}</p>
          <p className={`field-value strong ${field.statusColor}`}>{field.value}</p>
        </div>
      ))}
    </div>
  );
};

export default FieldsGrid;