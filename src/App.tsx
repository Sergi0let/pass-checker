import MainCard from "./components/layout/MainCard";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import "./i18n";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto container p-4">
        <Navbar />
        <h1 className="text-3xl font-bold text-center mb-4">Iron Pass🦾</h1>
        <MainCard className="max-w-[800px] mx-auto" />
      </div>
    </ThemeProvider>
  );
}

export default App;
