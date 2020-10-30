import React from "react";
import PropType from "prop-types";

import styles from "./Input.module.css";

export const Input = ({ onChange, placeholder, type, value }) => {
  return (
    <input
      className={styles.container}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  placeholder: PropType.string,
  type: PropType.string,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};
