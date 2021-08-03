import { BrowserRouter, Route } from "react-router-dom";
import { HomePage, AccordionPage, SearchPage, DropdownPage, TranslatePage } from "./pages";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Header/>

        <main className="container mx-auto max-w-xl p-4">
          <Route path="/" exact component={HomePage} />
          <Route path="/accordion" component={AccordionPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/dropdown" component={DropdownPage} />
          <Route path="/translator" component={TranslatePage} />
        </main>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
