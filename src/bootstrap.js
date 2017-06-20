import React from 'react';

export function Form({ children }) {
  return (
    <div className="form-inline">
      { children }
    </div>
  );
}

export function Input({ label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input className="form-control" name={label} value={value} onChange={onChange} />
    </div>
  );
}

export function Grid({ children }) {
  return (
    <div className="row">
      { children }
    </div>
  );
}

export function Thumbnail({ src, name }) {
  return (
    <div className="col-md-2">
      <div className="thumbnail">
        <img src={src} alt={name} />
        <div className="caption">
          {name}
        </div>
      </div>
    </div>
  );
}
