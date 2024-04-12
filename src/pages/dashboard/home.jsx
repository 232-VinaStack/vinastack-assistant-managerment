import React from "react";
import { StatisticsCard } from "@/widgets/cards";
import {
  statisticsCardsData,
} from "@/data";
import Tables from "./../dashboard/tables"

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            
          />
        ))}
      </div>
      
     <Tables/>
    </div>
  );
}

export default Home;
