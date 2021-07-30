import { BrowserRouter, Route } from "react-router-dom";
import { AccordionPage, SearchPage } from "./pages";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
      <Header/>
        <main className="container mx-auto max-w-xl p-4">
          <Route path="/" exact component={AccordionPage} />
          <Route path="/search" component={SearchPage} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
