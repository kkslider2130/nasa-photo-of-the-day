import React, { useState, useEffect } from "react";
import axios from "axios";
import MainDiv, { MainImg, ContentPara } from "../src/style/MainStyles";
import Picture from "./Picture";
import DatePicker from "react-datepicker";
import Loader from "react-loader-spinner";

import "react-datepicker/dist/react-datepicker.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3"
  )
  .then(res => console.log(res.data.hdurl));

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

function CallNewPicture(calendarDate) {
  const [newPicture, setNewPicture] = useState("");
  useEffect(() => {
    const getPicture = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3&date=${calendarDate}`
        )
        .then(res => setNewPicture(res.data.hdurl));
    };
    getPicture();
  }, [calendarDate]);
  return newPicture;
}

function CallNewContent(calendarDate) {
  const [newContent, setNewContent] = useState("");
  useEffect(() => {
    const getContent = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3&date=${calendarDate}`
        )
        .then(res => setNewContent(res.data.explanation));
    };
    getContent();
  }, [calendarDate]);
  return newContent;
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

  const [startDate, setStartDate] = useState(new Date());
  const [useCalendar, setUseCalander] = useState(true);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    setVisible(false);
  };

  let handleDateChange = date => {
    setLoading(true);
    setStartDate(date);
    setUseCalander(false);
  };

  let calanderDate =
    startDate.getFullYear() +
    "-" +
    (startDate.getMonth() + 1) +
    "-" +
    startDate.getDate();

  const newPicture = CallNewPicture(calanderDate);
  const newContent = CallNewContent(calanderDate);
  const content = CallContent();
  return (
    <MainDiv>
      <div className="date-con">
        <p>{calanderDate}</p>
      </div>

      {loading ? (
        <>
          <Picture handleLoad={handleLoad} setVisible={setVisible} />
          <Loader type="Rings" color="#00BFFF" height={100} width={100} />
        </>
      ) : (
        !visible && <MainImg onLoad={handleLoad} src={newPicture} />
      )}

      <div>
        <ContentPara>
          <div>{useCalendar ? content : newContent}</div>
          <div className="calendarDiv">
            <i class="fas fa-calendar-alt"></i>
            <DatePicker
              className="calendar"
              selected={startDate}
              onChange={handleDateChange}
              placeholderText="check our photo archives"
            />
          </div>
        </ContentPara>
      </div>
    </MainDiv>
  );
}

export default Main;
