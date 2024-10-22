import { Title } from "@mantine/core";
import type { Activity } from "../../../types/types";
import { ActivityItem } from "./ActivityItem";

interface ActivitiesProps {
  activities: Array<Activity>;
}

export const Activities = ({ activities }: ActivitiesProps) => {
  return (
    <div className="border border-white rounded-[40px] backdrop-blur-xl text-start px-8 py-5">
      <Title order={5} fw={500}>
        Activities in your area
      </Title>
      <div className="px-5 py-9 flex gap-5">
        {activities.map((ac) => {
          return <ActivityItem activity={ac} key={`activity-${ac.image}`} />;
        })}
      </div>
    </div>
  );
};
