import { useContext, createContext, PropsWithChildren } from "react";

export type TDeviceType = "desktop" | "mobile";

export type DeviceContextProps = {
  type: TDeviceType;
  isMobile: boolean;
};

const DeviceContext = createContext<DeviceContextProps | null>(null);

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDeviceContext must be used within a DeviceContextProvider");
  }
  return context;
};

export const DeviceContextProvider = ({
  type,
  children,
}: PropsWithChildren<{ type: TDeviceType }>) => {
  return (
    <DeviceContext.Provider value={{ type, isMobile: type === "mobile" }}>
      {children}
    </DeviceContext.Provider>
  );
};
