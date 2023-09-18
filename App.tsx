import { Groups } from "@screens/Groups";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoader] = useFont({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoader ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
