import { ReactNode, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { LocalData } from "../Hooks/LocalDataSource";

interface DataProviderProps {
  children: ReactNode;
}

export interface DataStruction {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: number;
  name: string;
  category: string;
  price: number;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [listItem, setListItem] = useState<DataStruction[] | null>([]);
  const [cartItem, setCartItem] = useState<DataStruction[] | null>([]);

  useEffect(() => {
    setListItem(LocalData);
  }, []);

  const handleCheckCartItem = (id: number) => {
    if (!listItem) return;
    setCartItem((prev: DataStruction[] | null) => {
      if (prev === null) {
        return [listItem[id]];
      } else {
        return prev.map((item: any) => {
          return { ...item, price: item.price * 2 };
        });
      }
    });
  };

  return (
    <DataContext.Provider
      value={{ listItem, setListItem, handleCheckCartItem }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
