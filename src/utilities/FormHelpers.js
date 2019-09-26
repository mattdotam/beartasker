import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";

export function generateTextField(props) {
  let width = {};
  if (typeof props.width === "string" && props.width.includes("%")) {
    width = { width: `${props.width}` };
  } else if (typeof props.width === "number") {
    width = { width: `${props.width * 8}px` };
  }
  return (
    <TextField
      name={props.stateField}
      id={props.id ? props.id : props.stateField}
      disabled={props.disabled ? props.disabled : false}
      value={props.value}
      label={props.label}
      type={props.type ? props.type : "text"}
      margin={props.margin ? props.margin : "normal"}
      variant="outlined"
      onChange={props.onChange}
      style={width}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {props.prefix ? props.prefix : ""}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {props.suffix ? props.suffix : ""}
          </InputAdornment>
        ),
        inputRef: props.inputRef,
        classes: props.inputClasses,
      }}
      placeholder={
        props.placeholder ? props.placeholder : props.label
      }
      {...props.other}
    />
  );
}

export function generateTextArea(props) {
  let width = {};
  if (typeof props.width === "string" && props.width.includes("%")) {
    width = { width: `${props.width}` };
  } else if (typeof props.width === "number") {
    width = { width: `${props.width * 8}px` };
  }
  return (
    <TextField
      name={props.stateField}
      id={props.stateField}
      value={props.value}
      label={props.label}
      margin="normal"
      variant="outlined"
      multiline
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      onClick={props.onClick}
      style={width}
      placeholder={
        props.placeholder ? props.placeholder : props.label
      }
    />
  );
}

export function generateDateTimeField(props) {
  let width = {};
  if (typeof props.width === "string" && props.width.includes("%")) {
    width = { width: `${props.width}` };
  } else if (typeof props.width === "number") {
    width = { width: `${props.width * 8}px` };
  }
  return (
    <TextField
      name={props.stateField}
      id={props.stateField}
      value={props.value.substring(0, props.value.length - 8)}
      label={props.label}
      type="datetime-local"
      margin={props.margin ? props.margin : "normal"}
      variant="outlined"
      style={width}
      onChange={props.onChange}
    />
  );
}

export function generateSelect(props) {
  let width = {};
  if (typeof props.width === "string" && props.width.includes("%")) {
    width = { width: `${props.width}` };
  } else if (typeof props.width === "number") {
    width = { width: `${props.width * 8}px` };
  }
  return (
    <FormControl
      margin={props.margin ? props.margin : "normal"}
      variant="outlined">
      <InputLabel
        htmlFor={props.stateField}
        style={{
          backgroundColor: "white",
        }}>{` ${props.label} `}</InputLabel>
      <Select
        value={props.value}
        width={width}
        onChange={props.handleChange}
        inputProps={{
          name: `${props.stateField}`,
          id: `${props.stateField}`,
        }}>
        {props.items.map((item, idx) => {
          return (
            <MenuItem
              style={{
                "&:before": {
                  display: "none",
                },
              }}
              key={`${props.stateField}-menuItem-${idx}`}
              value={item[0]}>{`${item[1]}`}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
