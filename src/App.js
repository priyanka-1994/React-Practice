import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of cocoa covered almonds uncovered."
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
      ]);
  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items} 
        setItems={setItems}
      />
      <Footer />
    </div>
  );
}

export default App;
