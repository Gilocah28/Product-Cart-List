import { createContext } from "react";
import { DataStruction } from "../Hooks/LocalDataSource";

export const DataContext = createContext<DataStruction | null>(null);
