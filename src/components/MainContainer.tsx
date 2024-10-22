import { Activities } from "./general/activities/Activities";
import { Navigation } from "./general/Navigation";
import { WeatherInformation } from "./general/WeatherInformation";

export const MainContainer = () => {
  return (
    <div className="h-full pb-8 mx-10">
      <WeatherInformation
        currentTemperature={{ degrees: 14, unit: "C" }}
        city="New York"
        weatherDescription="Rainy"
        date="Sunday | 12 Dec 2023"
      />
      <div className="flex gap-x-5 h-1/2">
        <div className="border border-white w-[100px] rounded-[40px] backdrop-blur-xl">
          <Navigation userAvatar="/assets/img/UserLogo.png" />
        </div>
        <div className="flex flex-col gap-y-8  grow">
          <Activities
            activities={[
              {
                image: "/assets/img/activity-1.jpeg",
                distance: {
                  measurement: 2,
                  unit: "km",
                },
              },
              {
                image: "/assets/img/activity-2.jpeg",
                distance: {
                  measurement: 1.5,
                  unit: "km",
                },
              },
              {
                image: "/assets/img/activity-3.jpeg",
                distance: {
                  measurement: 3,
                  unit: "km",
                },
              },
              {
                image: "/assets/img/activity-4.jpeg",
                distance: {
                  measurement: 500,
                  unit: "m",
                },
              },
            ]}
          />
          <div className="bg-gray-400 h-1/2 rounded-[40px]">NO 2.2</div>
        </div>
        <div className="bg-gray-400 w-[324px] rounded-[40px]">NO 3</div>
      </div>
    </div>
  );
};
