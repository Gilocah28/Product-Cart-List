import { FC, useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const ListComponent: FC = () => {
  const { listItem } = useContext(DataContext);

  return (
    <div className="list">
      <h2>Desserts</h2>
    </div>
  );
};

export default ListComponent;
