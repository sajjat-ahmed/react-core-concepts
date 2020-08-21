import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const persons = ['sajjat', 'sakin', 'shishir', 'siam', 'alvi', 'aysha']
  const products = [
    {name: "Photoshop", price: "$90.99"},
    {name: "illestrator", price: "$60.99"},
    {name: "pdf reader", price: "$6.99"},
    {name: "premium pro", price: "249.99"}
  ];
  const productNames = products.map(product => product.name)
  console.log(productNames);
  const personNames = persons.map(person => person)
  console.log(personNames);
  for (let i = 0; i < persons.length; i++) {
    const element = persons[i];
    console.log(element)
  }
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react persion</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          persons.map(person => <li>{person}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(product => <Product product={product.name}></Product>)
      }
      </header>
    </div>
  );
}

function Counter(props){
  const [count, setCount] = useState(10)

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsersd] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsersd(data))
  }, [])
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    weight:'200px',
    float:'left',
    padding:'5px 10px'
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border: '1px solid aqua',
    borderRadius: '20px',
    margin: '10px',
    padding: '50px'
  }
  console.log(props)
  return (
    <div style = {personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>-----------------</h3>
    </div>
  )
}

export default App;
