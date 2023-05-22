import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import sunnyIcon from "../assets/icons/01d.png";
import moonIcon from "../assets/icons/02n.png";
import shallowCloudIcon from "../assets/icons/02d.png";
import thickCloudIcon from "../assets/icons/03d.png";
import nightCloudIcon from "../assets/icons/03n.png";
import cloudIcon from "../assets/icons/04d.png";
import rainyIcon from "../assets/icons/09d.png";
import rainIcon from "../assets/icons/10d.png";
import thunderstormIcon from "../assets/icons/11d.png";
import snowIcon from "../assets/icons/13d.png";
import windyIcon from "../assets/icons/50d.png";
import nightCloudIcon2 from "../assets/icons/04n.png";
import nightShallowCloudIcon from "../assets/icons/04n.png";

const cityList = [
  { name: "Seoul", backgroundColor: "#000000" },
  { name: "Daegu", backgroundColor: "#2C65B8" },
  { name: "Gwangju", backgroundColor: "#D52E35" },
  { name: "Daejeon", backgroundColor: "#D7623D" },
  { name: "Changwon", backgroundColor: "#294575" },
  { name: "Busan", backgroundColor: "#0C1D43" },
  { name: "Suwon", backgroundColor: "#020202" },
  { name: "Incheon", backgroundColor: "#AD282F" },
];

const WeatherBox = styled.div`
  border: 2px solid;
  margin: 5px;
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  border-bottom: 2px solid;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CurrentWeather = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  width: 250px;
  height: 150px;
`;

const CityListItem = styled.div`
  font-size: 25px;
  height: 40px;
  text-align: center;
  border-bottom: 3px solid;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const request = cityList.map(async (city) => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=9143ecd93a4dda0a18e7aaafd4c2676a`
        );
        return response.data;
      });

      const newData = await Promise.all(request);
      setWeatherData(newData);
    } catch (error) {
      console.log(error);
    }
  }

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return <img src={sunnyIcon} alt="맑은 하늘" width="80" />;
      case "01n":
        return <img src={moonIcon} alt="밤 사진" width="80" />;
      case "02d":
        return <img src={shallowCloudIcon} alt="옅은 구름 사진" width="80" />;
      case "02n":
        return (
          <img src={nightShallowCloudIcon} alt="옅은 구름 사진" width="80" />
        );
      case "03d":
        return <img src={thickCloudIcon} alt="짙은 구름 사진" width="80" />;
      case "03n":
        return <img src={nightCloudIcon} alt="밤 구름 사진" width="80" />;
      case "04d":
        return <img src={cloudIcon} alt="구름 사진" width="80" />;
      case "04n":
        return <img src={nightCloudIcon2} alt="구름 사진" width="80" />;
      case "09d":
        return <img src={rainyIcon} alt="비 사진" width="80" />;
      case "09n":
        return <img src={rainyIcon} alt="밤 비 사진" width="80" />;
      case "10d":
        return <img src={rainIcon} alt="비가 많이 오는 사진" width="80" />;
      case "11d":
        return <img src={thunderstormIcon} alt="번개치는 사진" width="80" />;
      case "11n":
        return (
          <img src={thunderstormIcon} alt="밤에 번개치는 사진" width="80" />
        );
      case "13d":
        return <img src={snowIcon} alt="눈오는 사진" width="80" />;
      case "13n":
        return <img src={snowIcon} alt="눈오는 사진" width="80" />;
      case "50d":
        return <img src={windyIcon} alt="바람이 부는 사진" width="80" />;
      case "50n":
        return <img src={windyIcon} alt="저녁에 바람이 부는 사진" width="80" />;
      default:
        return null;
    }
  };

  return (
    <WeatherContainer>
      <Title>현재날씨 🌫️</Title>
      {weatherData.map((data, index) => (
        <WeatherBox key={index}>
          <CityListItem backgroundColor={cityList[index].backgroundColor}>
            {cityList[index].name}
          </CityListItem>
          <CurrentWeather>
            {getWeatherIcon(data.weather[0].icon.slice(0, 3))}
            <p>온도: {(data.main.temp - 273.15).toFixed(2)}°C</p>
          </CurrentWeather>
        </WeatherBox>
      ))}
    </WeatherContainer>
  );
};

export default Weather;
