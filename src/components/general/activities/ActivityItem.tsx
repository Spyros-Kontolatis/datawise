import { Activity } from "../../../types/types";
interface ActivityProps {
  activity: Activity;
}

export const ActivityItem = ({ activity }: ActivityProps) => {
  return (
    <div className="flex flex-col gap-1">
      <img
        src={activity.image}
        alt={activity.image}
        className="rounded-lg w-44 h-24 object-cover"
      />
      <div className="text-xs">
        {activity.distance.measurement}
        {activity.distance.unit} away
      </div>
    </div>
  );
};
