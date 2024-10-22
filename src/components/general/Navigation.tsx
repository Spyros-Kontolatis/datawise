interface NavigationProps {
  userAvatar: string;
}
export const Navigation = ({ userAvatar }: NavigationProps) => {
  return (
    <div className="flex flex-col justify-between items-center p-5 h-full">
      <img className="rounded-full w-16" src={userAvatar} />
      <div>
        <div>weather</div>
        <div>explore</div>
        <div>cities</div>
        <div>settings</div>
      </div>
    </div>
  );
};
