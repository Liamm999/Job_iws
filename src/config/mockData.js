import { ICONS } from "../assets/icons";
import { getCurrentDate } from "../utils/getCurrenDate";
import { IMAGES } from "../assets/images";

const mockData = {
  locations: [
    {
      name: "Hanoi",
      country: "Viet Nam",
      localTime: getCurrentDate(),
    },
    {
      name: "Ho Chi Minh",
      country: "Viet Nam",
      localTime: getCurrentDate(),
    },
    {
      name: "Da Nang",
      country: "Viet Nam",
      localTime: getCurrentDate(),
    },
  ],

  weatherByDays: [
    {
      time: "2024, 09 March",
      date: "Saturdays",
      hour: "Now",
      temperature: 21,
      humidity: 88,
      windSpeed: 5,
      visibility: 10,
      condition: {
        text: "Rainy",
        icon: ICONS.rainyIcon,
        image: IMAGES.rainyImage,
      },
    },
    {
      time: "2024, 10 March",
      date: "Sunday",
      hour: "1AM",
      temperature: 28,
      humidity: 47,
      windSpeed: 3,
      visibility: 9.5,
      condition: {
        text: "Sunny",
        icon: ICONS.sunnyIcon,
        image: IMAGES.sunnyImage,
      },
    },
    {
      time: "2024, 11 March",
      date: "Monday",
      hour: "12AM",
      temperature: 25,
      humidity: 67,
      windSpeed: 3,
      visibility: 9.9,
      condition: {
        text: "Blue cloud and sunny",
        icon: ICONS.cloudyIcon,
        image: IMAGES.cloudyImage,
      },
    },
    {
      time: "2024, 12 March",
      date: "Tuesday",
      hour: "8PM",
      temperature: 27,
      humidity: 80,
      windSpeed: 6,
      visibility: 8,
      condition: {
        text: "Sun and blue cloud",
        icon: ICONS.sunAndBlueCloudIcon,
        image: IMAGES.blueCloudSunnyImage,
      },
    },
    {
      time: "2024, 13 March",
      date: "Wednesday",
      hour: "10PM",
      temperature: 23,
      humidity: 88,
      windSpeed: 2,
      visibility: 5,
      condition: {
        text: "Rainbow",
        icon: ICONS.rainbowIcon,
        image: IMAGES.rainbowImage,
      },
    },
  ],

  hours: [
    { hour: "1 AM", icon: ICONS.sunnyIcon, temperature: 20 },
    { hour: "4 AM", icon: ICONS.rainyIcon, temperature: 21 },
    { hour: "8 AM", icon: ICONS.rainbowIcon, temperature: 22 },
    { hour: "10 AM", icon: ICONS.blueCloundSunIcon, temperature: 23 },
    { hour: "1 PM", icon: ICONS.cloudyIcon, temperature: 24 },
    { hour: "4 PM", icon: ICONS.sunAndBlueCloudIcon, temperature: 25 },
    { hour: "8 PM", icon: ICONS.sunriseUpIcon, temperature: 26 },
    { hour: "10 PM", icon: ICONS.sunsetDownIcon, temperature: 27 },
    { hour: "8 PM", icon: ICONS.blueCloundSunIcon, temperature: 28 },
    { hour: "10 PM", icon: ICONS.cloudyIcon, temperature: 29 },
    { hour: "8 PM", icon: ICONS.rainyIcon, temperature: 18 },
    { hour: "10 PM", icon: ICONS.cloudyIcon, temperature: 19 },
  ],
};

export default mockData;
