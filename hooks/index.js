import React, { createContext, useContext, useState } from 'react';
import { Pages } from '../constants/index';

export const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [page, setPage] = useState(Pages.home);

  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
