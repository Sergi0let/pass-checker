import { MainCard, Navbar, ThemeProvider } from "@/components";
import "./i18n";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto p-4">
        <Navbar />
        <h1 className="mb-4 text-center text-3xl font-bold">Iron Pass🦾</h1>
        <MainCard className="mx-auto max-w-[800px]" />
      </div>
    </ThemeProvider>
  );
}

export default App;
