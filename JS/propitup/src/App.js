import './App.css';
import PersonCard from './components/personCard';

const personCards =[
  {firstName: "Joe", lastName: "Shmo", age: 77, hairColor: 'grey'},
  {firstName: "Craig", lastName: "Francis", age: 60, hairColor: 'brown'},
  {firstName: "Harry", lastName: "Guy", age: 20, hairColor: 'blonde'},
  {firstName: "Ligma", lastName: "Sky", age: 69, hairColor: 'red'}
]



function App() {
  return (
    <div className="App">
    {personCards.map(person =>
    <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={[person.hairColor]}/>
    )}
    </div>
  );
}

export default App;
