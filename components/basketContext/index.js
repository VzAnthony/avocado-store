import React, { useMemo, useState, createContext, useContext } from "react";

const CarContext = createContext();

export const BasketContext = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const value = useMemo(() => {
    return {
      basket,
      setBasket,
    };
  }, [basket]);

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};

export const useBasket = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("No se encuentra dentro del context");
  }
  return context;
};
