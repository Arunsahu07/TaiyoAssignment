import { FC } from "react";

type ShowCardProps = {
  title: string;
  count: number;
  isLoading: boolean;
};

const ShowCard: FC<ShowCardProps> = ({ title, count, isLoading }) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="bg-white shadow-md rounded px-5 pt-6 pb-8  ">
      <div className="text-center">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl md:text-2xl xl:text-3xl font-semibold overflow-hidden">
          {count.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
