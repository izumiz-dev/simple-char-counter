import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { ChangeEvent, useCallback, useState } from "react";
import CSS from "csstype";

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const App = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("char");
  const inputText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );

  const handleChangeMode = (e: ChangeEvent<{}>, newMode: string | null) => {
    setMode(newMode as string);
  };

  return (
    <div style={style}>
      <div style={{ margin: "1vh", display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "3rem", color: "#767676" }}>
          {mode === "char"
            ? text.length || 0
            : text === ""
            ? 0
            : text.split(" ").length || 0}
        </span>
        <ToggleButtonGroup
          style={{ margin: "1vh" }}
          value={mode}
          exclusive
          onChange={handleChangeMode}
          aria-label="text alignment"
        >
          <ToggleButton value="char" aria-label="char">
            Char
          </ToggleButton>
          <ToggleButton value="word" aria-label="word">
            Word (en)
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <TextField
        style={{ width: "75vw", margin: "1vh" }}
        id="outlined-basic"
        label="Text"
        variant="outlined"
        multiline
        onChange={inputText}
      />
    </div>
  );
};
