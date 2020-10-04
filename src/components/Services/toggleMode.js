import React from "react";

import { ThemeConsumer } from "styled-components";

const ToggleMode = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <label class="switch">
          <input
            type="checkbox"
            onChange={(e) =>
              theme.setTheme(
                theme.mode === "dark"
                  ? { ...theme, mode: "light" }
                  : { ...theme, mode: "dark" }
              )
            }
            checked={theme.mode==='dark'?true:false}
          />
          
          <span class="slider round"></span>
        </label>
      )}
    </ThemeConsumer>
  );
};

export default ToggleMode;
