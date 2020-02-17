import React, { useState, useEffect } from "react";
import axios from "axios";

axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
  )
  .then(res => console.log(res.data.hdurl));

function CallPicture() {
  const [picture, setPicture] = useState("");
  useEffect(() => {
    const getPicture = () => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
        )
        .then(res => setPicture(res.data.hdurl));
    };
    getPicture();
  }, []);
  return picture;
}

function CallContent() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const getContent = () => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
        )
        .then(res => setContent(res.data.explanation));
    };
    getContent();
  }, []);
  return content;
}

function Main() {
  /* const [picture, setPicture] = useState("");
  const getPicture = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
      )
      .then(res => setPicture(res.data.hdurl));
  };
  getPicture(); */
  const picture = CallPicture();
  const content = CallContent();
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="main">
      <div className="date-con">
        <p>{year + "-" + month + "-" + day}</p>
      </div>
      <img src={picture} alt="astrology daily" />
      <div className="contents">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Main;
