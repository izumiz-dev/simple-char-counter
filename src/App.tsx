import { TextField } from "@material-ui/core";
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
  const inputText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );
  return (
    <div style={style}>
      <div style={{ fontWeight: "bold", fontSize: "4rem", padding: "1vh" }}>
        {text.length || 0} chars
      </div>
      <TextField
        style={{ width: "75vw" }}
        id="outlined-basic"
        label="Text"
        variant="outlined"
        multiline
        onChange={inputText}
      />
    </div>
  );
};
