import { createContext, useContext, useState, type ReactNode } from 'react';

interface LightingContextType {
  lightingEnabled: boolean;
  setLightingEnabled: (v: boolean) => void;
}

const LightingContext = createContext<LightingContextType>({
  lightingEnabled: true,
  setLightingEnabled: () => {},
});

export const useLighting = () => useContext(LightingContext);

export const LightingProvider = ({ children }: { children: ReactNode }) => {
  const [lightingEnabled, setLightingEnabled] = useState(true);
  return (
    <LightingContext.Provider value={{ lightingEnabled, setLightingEnabled }}>
      {children}
    </LightingContext.Provider>
  );
};
