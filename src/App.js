import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import Likes from './components/Likes';
import ParentComponent from './components/ParentComponent';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/Mystyle.css';

function App() {
  return (
    <div className="App">
      {/*<Counter/>
      <Message/>
      <Greet name="naveen"><p>Tharun is his 2nd elder brother</p><p>Pradeep is his 1st elder brother</p></Greet>
      <Greet name="deepak"><button>Action</button></Greet>
      <Greet name="nousith"></Greet>
      <Welcome/>
      <Hello/>
      <FunctionClick/>
      <ParentComponent/>
      <Likes/>
      <List/>
      <Stylesheet styling={true}/>*/}
      <Inline/>

    </div>
  );
}

export default App;
