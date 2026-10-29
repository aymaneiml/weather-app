import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import { use } from "react";

const theme = createTheme({});

function App() {

  const [ville,setVille]=useState();

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?lat=34.020882&lon=-6.84165&appid=a0d2f72bba30defc7eb7e7e711460615")
      .then((response) => {
        setVille(response.data.name)
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm" style={{}}>
        {/* === CONTENT CONTAINER ==== */}
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* CARD */}
          <div
            style={{
              width: "100%",
              background: "rgb(28 52 91 / 36%",
              color: "white",
              padding: "10px",
              borderRadius: "15px",
              boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
            }}
          >
            {/* CONTENT */}
            <div>
              {/* CITY AND TIME */}
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="h3"
                  style={{ marginRight: "20px", fontWeight: "600" }}
                >
                  {ville}
                </Typography>

                <Typography variant="h5" style={{ marginRight: "20px" }}>
                  Lundi 26-10-2026
                </Typography>
              </div>
              {/*==== CITY AND TIME ====*/}

              <hr />
              {/* CONTAINER OF DEGRY + CLOUD ICON */}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* DEGRY AND DESCRIPTION */}
                <div>
                  {/* TEMP */}
                  <div>
                    <Typography variant="h1" style={{ textAlign: "left" }}>
                      36
                    </Typography>

                    {/* TODO : TEMP IMAGE */}
                    {/* =======TODO : TEMP IMAGE===== */}
                  </div>
                  {/* ==== TEMP === */}

                  <Typography variant="h6" style={{}}>
                    Brocken clouds
                  </Typography>

                  {/* MIN AND MAX */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center'",
                    }}
                  >
                    <h5>min : 34</h5>
                    <h5>|</h5>
                    <h5>max : 39</h5>
                  </div>
                  {/* ====MIN AND MAX=== */}
                </div>
                {/*==== DEGRY AND DESCRIPTION ====*/}

                <CloudIcon
                  style={{ fontSize: "200px", color: "white" }}
                ></CloudIcon>
              </div>

              {/* ===== CONTAINER OF DEGRY + CLOUD ICON ==== */}
            </div>
            {/*===== CONTENT ====*/}
          </div>
          {/* ===== CARD ==== */}

          {/* TRANSLATION CONTAINER */}
          <div
            style={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button variant="text" style={{ color: "white" }}>
              Arabe
            </Button>
          </div>
          {/* ==== TRANSLATION CONTAINER === */}
        </div>
        {/* === CONTENT CONTAINER ==== */}
      </Container>
    </div>
  );
}

export default App;
