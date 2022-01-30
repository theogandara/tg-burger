import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../style/theme";
import { AuthProvider } from "./Auth";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <AuthProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;