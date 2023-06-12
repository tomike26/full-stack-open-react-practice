import Hello from "./Components/Hello";

const App = ()  =>{
   const name = 'Peter'
  const age = 10
//  const now = new Date();
//  const a =  20;
//  const b= 30;
  return (
    <div className="App">
      <Hello name='Maya' age={26 + 10}/>
       <Hello name={name} age={age} />
      {/* <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a+b}</p>
      <h1>Hello</h1> */}
    </div>
  );
}

export default App;
