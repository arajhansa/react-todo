import {createContext, useContext} from "react";
import useLocalStorageState from "../persistence/LocalStorage";

const DateContext = createContext();

export function useDateTaskListContext() {
  const context = useContext(DateContext);
  if (!context) throw new Error("useDateContext must be used within <DateProviderContext></DateProviderContext>")
  return [context[2], context[3], context[4]]
}

export function useDateContext() {
  const context = useContext(DateContext);
  if (!context) throw new Error("useDateContext must be used within <DateProviderContext></DateProviderContext>")
  return [context[0], context[1]]
}

export function DateProviderContext(props) {
  const currentDate = new Date();

  const [date, setDate] = useLocalStorageState("selectedDate", currentDate, {deserialize: (date) => new Date(JSON.parse(date))})
  const [dateListMap, setDateListMap] = useLocalStorageState("dateListMap", {})

  return <DateContext.Provider value={[date, setDate, getFullDate(date), dateListMap, setDateListMap]} {...props} />
}

function getFullDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return mm + '-' + dd + '-' + yyyy;
}
