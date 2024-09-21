import { createContext, useState } from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
    const [cartNums, setCartNums] = useState(0)
  return (
    <>
      <ProductsContext.Provider value={{cartNums,setCartNums }}>{children}</ProductsContext.Provider>;
    </>
  );
};
