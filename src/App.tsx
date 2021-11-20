import TextField from "@material-ui/core/TextField/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import SendIcon from "@material-ui/icons/Send";
import CheckIcon from "@material-ui/icons/Check";
import { ChangeEvent, useCallback, useState } from "react";
import Button from "@material-ui/core/Button";
import { Pomodoro } from "./Pomodoro";

export const App = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("char");
  const [limit, setLimit] = useState("");
  const [isLimiterOn, setIsLimiterOn] = useState(false);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const inputText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );

  const inputLimit = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLimit(e.target.value),
    []
  );

  const inputTask = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value),
    []
  );

  const handleChangeMode = (e: ChangeEvent<{}>, newMode: string | null) => {
    setMode(newMode as string);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        background: limiter(text, parseInt(limit), isLimiterOn, mode)
          ? "red"
          : "#FFF",
      }}
    >
      <div style={{ margin: "1vh", display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontSize: "3rem",
            color: limiter(text, parseInt(limit), isLimiterOn, mode)
              ? "white"
              : "#767676",
          }}
        >
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
            Char(s)
          </ToggleButton>
          <ToggleButton value="word" aria-label="word">
            Word(s) (en)
          </ToggleButton>
        </ToggleButtonGroup>
        <div
          style={{
            margin: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            type="number"
            placeholder="limit"
            style={{ width: "100px", marginRight: "4px" }}
            value={limit}
            onChange={inputLimit}
          />
          <ToggleButton
            size="small"
            selected={isLimiterOn}
            onChange={() => {
              setIsLimiterOn(!isLimiterOn);
            }}
          >
            <CheckIcon />
          </ToggleButton>
        </div>
      </div>
      <TextField
        style={{ width: "75vw", margin: "1vh" }}
        id="outlined-basic"
        label="Text"
        variant="outlined"
        multiline
        onChange={inputText}
        value={text}
        maxRows={16}
        minRows={16}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            // startIcon={<AssignmentOutlinedIcon />}
            onClick={() => {
              setText("お世話になっております。\n" + text);
            }}
          >
            お世話になっております
          </Button>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            // startIcon={<AssignmentOutlinedIcon />}
            onClick={() => {
              setText("ありがとうございます。\n" + text);
            }}
          >
            ありがとうございます
          </Button>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            href={`https://www.google.com/search?hl=ja&q=%E8%AC%9D%E7%BD%AA%E3%81%AE%E4%BB%95%E6%96%B9`}
            target="_blank"
            startIcon={<OpenInNewIcon />}
          >
            謝罪の仕方をググる
          </Button>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            href={`https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(
              text
            )}&op=translate`}
            target="_blank"
            startIcon={<OpenInNewIcon />}
          >
            Google翻訳で英語に
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              const newStr = text.replaceAll("。", "．").replaceAll("、", "，");
              setText(newStr);
            }}
          >
            句読点変換 （。、→．，）
          </Button>
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              const newStr = text.replaceAll("．", "。").replaceAll("，", "、");
              setText(newStr);
            }}
          >
            句読点変換 （．，→。、）
          </Button>
        </div>
        <Button
          style={{ margin: "4px" }}
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<AssignmentOutlinedIcon />}
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        >
          クリップボードへコピー
        </Button>
        {text.length <= 140 && (
          <Button
            style={{ margin: "4px" }}
            variant="outlined"
            color="primary"
            size="small"
            href={`https://twitter.com/compose/tweet?text=${encodeURIComponent(
              text
            )} via https://izumiz-dev.github.io/simple-char-counter/`}
            target="_blank"
            startIcon={<SendIcon />}
          >
            ツイートする
          </Button>
        )}
      </div>
      <Pomodoro timer={25} />
      <div>
        <h3 style={{ color: "GrayText" }}>Temporary Task List Tool</h3>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Task"
          style={{ width: "40vw", marginRight: "4px" }}
          value={task}
          onChange={inputTask}
        />
        <Button
          size="medium"
          variant="contained"
          onClick={() => {
            if (task !== "") {
              setTaskList([...taskList, task]);
              setTask("");
            }
          }}
        >
          Add
        </Button>
        {taskList.map((task, i) => {
          return (
            <p>
              <input type="checkbox" id={`${i}`} />
              <label>{task}</label>
            </p>
          );
        })}
      </div>
    </div>
  );
};

const limiter = (
  text: string,
  limit: number,
  isLimiterOn: boolean,
  mode: string
) => {
  if (isLimiterOn && mode === "char") {
    if (text.length > limit) {
      return true;
    }
  }
  if (isLimiterOn && mode === "word") {
    if (text.split(" ").length > limit) {
      return true;
    }
  }
  return false;
};
