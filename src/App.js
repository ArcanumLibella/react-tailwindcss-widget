import Accordion from "./components/Accordion";

const items = [
  {
    title: 'Titre 1',
    description: 'Description 1'
  },
  {
    title: 'Titre 2',
    description: 'Description 2'
  },
  {
    title: 'Titre 3',
    description: 'Description 3'
  }
]

function App() {
  return (
    <div className="App container mx-auto px-4">
      <Accordion items={items}/>
    </div>
  );
}

export default App;
