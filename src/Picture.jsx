import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainImg } from "../src/style/MainStyles";

function NewPicture(props) {
  const [newPicture, setNewPicture] = useState("");
  useEffect(() => {
    const getPicture = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3&date=${props.calanderDate}`
        )
        .then(res => setNewPicture(res.data.hdurl));
    };
    getPicture();
  }, [props.calanderDate]);
  return newPicture;
}

function Picture(props) {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
      )
      .then(res => setPicture(res.data.hdurl));
  }, []);
  return <MainImg onLoad={props.handleLoad} src={picture} alt="" />;
}

export default Picture;
export { NewPicture };
