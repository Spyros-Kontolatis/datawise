import { Flex, Title } from "@mantine/core";
import type { Temperature, WeatherDescription } from "../../types/types";
interface WeatherInformationProps {
  city: string;
  currentTemperature: Temperature;
  date: string;
  weatherDescription: WeatherDescription;
}

export const WeatherInformation = ({
  city,
  currentTemperature,
  date,
  weatherDescription,
}: WeatherInformationProps) => {
  return (
    <Flex
      mih={400}
      bg="cyan"
      align="center"
      direction="row"
      className="px-14 justify-between h-1/2"
    >
      <Flex bg="red" direction="column" className="h-full justify-around">
        <div className="w-full text-start">
          <Title order={5} c="white" fw={500}>
            {city}
          </Title>
          <Title order={3} c="white" fw={500}>
            {weatherDescription}
          </Title>
        </div>
        <div className="w-full text-start">
          <Title order={1} c="white" fw={500} className="flex">
            {currentTemperature.degrees}
            <span className="flex flex-col justify-start text-4xl">o</span>
            {currentTemperature.unit}
          </Title>
          <Title order={6} c="white" fw={400}>
            {date}
          </Title>
        </div>
      </Flex>
      <div>here the icon</div>
    </Flex>
  );
};
