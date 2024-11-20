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
  name: string;
  category: string;
  price: number;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [listItem, setListItem] = useState<DataStruction[] | null>([]);

  useEffect(() => {
    setListItem(LocalData);
  }, []);



  return (
    <DataContext.Provider value={{ listItem, setListItem }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
