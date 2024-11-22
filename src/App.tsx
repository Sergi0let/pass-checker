import Header from "./components/layout/header";
import MainCard from "./components/layout/MainCard";
import { ThemeProvider } from "./components/layout/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto container p-4">
        <Header />
        <h1 className="text-3xl font-bold text-center mb-4">Iron Pass</h1>
        <MainCard className="max-w-[800px] mx-auto" />
      </div>
    </ThemeProvider>
  );
}

export default App;
