import './App.css';
import BackgroundcolorChange from './Components/Question3/BackgroundcolorChange';
import ComponentA from './Components/Question2/ComponentA';
import QuestionOne from './../src/Components/Question1/questionOne';



function App() {
  return (
    <div className='conatiner' >
    <QuestionOne/>
     <ComponentA/>
     <BackgroundcolorChange/>
    </div>
  );
}

export default App;
