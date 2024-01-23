import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [formDataHistory, setFormDataHistory] = useState([]);

  const [blogForm, setBlogForm] = useState({ title: "", content: "" });
  return (
    <UserContext.Provider
      value={{ blogForm, setBlogForm, formDataHistory, setFormDataHistory }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const userContext = () => useContext(UserContext);
// export const historyContext = () => useContext(HistoryContext);
