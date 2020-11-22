import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Section from './components/Section';
import Section2 from './components/Section_2';


function App() {
  console.log(Math.random());
  return (
  <main>  
    <p style={{color: "#333"}}>
      {Math.random() > .5 ? "Die Zahl ist größer" : "Die Zahl ist kleiner"}
    </p>
    {/* <Navigation></Navigation> */}

    <Navigation />
    <Section />
    <Section2 />
    <img src={logo} alt=""/>

    {/* <h2>Hallo {user}</h2>
    <section id="hello" className="meine-Klasse" style={{color: "lime", fontSize: "30px"}}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam quod aliquid fuga dolorum sunt perferendis mollitia reiciendis quos dolor!
    </section>
    <article className="test">
      <p style={myStyle}>Lorem ipsum dolor sit amet.</p>
    </article> */}
  </main>
  );
}

export default App;
