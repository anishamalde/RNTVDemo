import React, { useContext, useState, useEffect } from "react";
import {useIAP} from 'react-native-iap';

interface IProps {
  children: React.ReactNode;
}

export const IAPContext = React.createContext();

export const useIAPData = () => useContext(IAPContext);


export const IAPProvider = (props: IProps) => {

// const {connected, availablePurchases } = useIAP();


  const { children } = props;

  return (
    <IAPContext.Provider value={{}}>
      {children}
    </IAPContext.Provider>
  );
};
