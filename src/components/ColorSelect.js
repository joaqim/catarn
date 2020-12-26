import React from "react";
import Select from "react-select";
import chroma from "chroma-js";

const colorOptions = [
  { value: "orange", label: "Orange" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
];

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.value);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.value
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.value,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.value : color.alpha(0.3).css()),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.value) }),
};

export default function ColorSelect(props) {
  return (
    <Select
      defaultValue={colorOptions[0]}
      label="Single select"
      options={colorOptions}
      styles={colorStyles}
      onChange={props.onChange}
    />
  );
}
