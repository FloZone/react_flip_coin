import { Container, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { MAIN_THEME } from "../../constants/constants";
import "../../styles/App.css";
import headImg from "../../assets/head.png";
import tailImg from "../../assets/tail.png";

const App = () => {
  const [head, setHead] = useState(true);

  const flip = () => {
    document.getElementById("flip-inner")?.classList.add("flip");
    document.getElementById("flip-container")?.classList.remove("hide");
    document.getElementById("result")?.classList.add("hide");

    // Stop flipping after 2 seconds
    setTimeout(() => {
      document.getElementById("flip-inner")?.classList.remove("flip");
      document.getElementById("flip-container")?.classList.add("hide");
      document.getElementById("result")?.classList.remove("hide");
      setHead(Math.random() < 0.5);
    }, 2000);
  };

  return (
    <ThemeProvider theme={MAIN_THEME}>
      <CssBaseline />

      <Container maxWidth="xs" sx={{ mt: 20 }}>
        <Stack
          direction="column"
          justifyContent="center"
          sx={{ alignItems: "center" }}
          onClick={() => flip()}
        >
          <div id="flip-container">
            <div id="flip-inner">
              <div id="flip-front">
                <img id="head-img" src={headImg} alt="coin" width={200} />
              </div>
              <div id="flip-back">
                <img id="tail-img" src={tailImg} alt="coin" width={200} />
              </div>
            </div>
          </div>

          <div id="result" className="hide">
            <img src={head ? headImg : tailImg} alt="coin" width={200} />
            <p>{head ? "HEADS" : "TAILS"}</p>
          </div>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
