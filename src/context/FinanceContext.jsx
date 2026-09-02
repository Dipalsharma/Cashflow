import React, { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [currency, setCurrency] = useState("₹");

  return (
    <FinanceContext.Provider value={{ currency, setCurrency }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  return useContext(FinanceContext);
};

export default FinanceContext;