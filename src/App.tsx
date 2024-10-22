import "@mantine/core/styles.css";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  fontFamily: "Inter, sans-serif",
  headings: {
    sizes: {
      h1: { fontSize: "64px", lineHeight: "78px" },
      h2: { fontSize: "56px" },
      h3: { fontSize: "48px", lineHeight: "58px" },
      h4: { fontSize: "32px" },
      h5: { fontSize: "24px", lineHeight: "30px" },
      h6: { fontSize: "16px", lineHeight: "21px" },
    },
  },
});

const App = () => {
  return (
    <div className="App bg-black  text-white">
      <MantineProvider theme={theme}>
        <MainContainer />
      </MantineProvider>
    </div>
  );
};

export default App;
