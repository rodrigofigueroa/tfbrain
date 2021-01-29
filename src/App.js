import React from 'react';
import logo from './logo.svg';
import './App.sass';
//TF
import * as tf from '@tensorflow/tfjs';

function App() {
  const model = tf.sequential();
      model.add(tf.layers.dense( {units: 1, inputShape: [1] } ))
      model.compile( {loss: 'meanSquaredError', optimizer: 'sgd'} )
      const xs = tf.tensor2d([1,2,3,4],[4,1])
      const ys = tf.tensor2d([1,3,5,7],[4,1])

      model.fit(xs, ys, {epochs: 10}).then(() =>{
        model.predict(tf.tensor2d([5],[1,1])).print();
      })
  console.log(model);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
