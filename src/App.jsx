import './App.css';
import TodosList from './components/todosList';
import TodosForm from './components/TodosForm';
import TodoBackAnimated from './components/TodoBackAnimated';
import TodoBanner from './components/todoBanner';
import TodoHero from './components/TodoHero';
import TodoNavBar from './components/TodoNavBar';

function App() {
  return (
    <main className='app-container'>
      <TodoBackAnimated/>
      <TodoBanner/>
      <TodoNavBar/>
      <TodoHero/>
      <TodosList/>
      <TodosForm/>
    </main>
  )
};

export default App;
