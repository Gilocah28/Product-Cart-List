import { FC, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import "./list.scss";
import ButtonList from "./ButtonList";
import NameItem from "./NameItem";

const ListComponent: FC = () => {
  const { listItem } = useContext(DataContext);

  return (
    <div className="list">
      <h2>Desserts</h2>
      <div className="list-data">
        {listItem.map((itemList: any) => {
          return (
            <div key={itemList.id} className="item">
              <div className="image-container">
                <img src={itemList.image.desktop} alt="Image" />
                <ButtonList id={itemList.id} />
              </div>
              <NameItem
                name={itemList.name}
                category={itemList.category}
                price={itemList.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComponent;
