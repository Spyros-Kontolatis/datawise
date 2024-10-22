export type Temperature = {
  degrees: number;
  unit: "C" | "F";
};

export type WeatherDescription = "Rainy" | "Stormy" | "Sunny" | "Cloudy";

type Distance = {
  measurement: number;
  unit: "km" | "mile" | "m";
};

export type Activity = {
  image: string;
  distance: Distance;
};
