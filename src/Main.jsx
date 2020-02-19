import React, { useState, useEffect } from "react";
import axios from "axios";
import MainDiv, { MainImg, ContentPara } from "../src/style/MainStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  let handleDateChange = date => {
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
  const picture = CallPicture();
  const content = CallContent();
  return (
    <MainDiv>
      <div className="date-con">
        <p>{calanderDate}</p>
      </div>
      <MainImg src={useCalendar ? picture : newPicture} alt="astrology daily" />
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
