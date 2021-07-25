import { FunctionComponent } from "react";
import SpendingCard from ".";

const SpendingCardList: FunctionComponent<{ spendingData: any[] }> = ({
  spendingData,
}) => {
  return (
    <div>
      {spendingData.map((e) => {
        //console.log(e.id);
        return <SpendingCard key={e.id} data={e} />;
      })}
    </div>
  );
};

export default SpendingCardList;
