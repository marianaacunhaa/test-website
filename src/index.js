import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import styled from "@emotion/styled";

const palette = {
  mode: "light",
};

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: "100px",
        },
        contained: {
          color: "red",
        },
        root: {
          color: "green",
        },
      },
    },
  },
});

const CustomButton = styled(Button)`
  color: ${(p) => p.theme.palette.text.primary};
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Card>
        {/* <App /> */}
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <CustomButton variant="outlined">Outlined</CustomButton>
      </Card>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
