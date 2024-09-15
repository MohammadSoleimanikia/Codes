//**codes in app.test.js

// import { render, screen } from '@testing-library/react';
// import App from './App';

//**first argument is a text description and second is the step of tests 
// test('renders a link that points to little lemon webpage', () => {

//**render the app component in the artificial DOM environment
//   render(<App />);

//** If the search is successful, getByText will return the found element.
//   const linkElement = screen.getByText('little lemon restaurant');
//   expect(linkElement).toBeInTheDocument();
// });



import React, { useState, useEffect } from "react";
import "./App.css";

//HOC
function App() {
  return (
    <div className="App">
      <p>little lemon restaurant</p>
    </div>
  );
}

export default App;