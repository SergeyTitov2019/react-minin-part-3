import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: '2005'},
      {name: 'Audi', year: '2006'},
      {name: 'Mazda', year: '2007'},
      {name: 'Honda', year: '2008'}
      {name: 'BMW', year: '2018'}
    ],
    pageTitle: 'part - 3',
    showCars: false

  };

  changeShowCars = () => {
    console.log('tut');
    this.setState({
      showCars: !this.state.showCars
    });
  };

  render () {

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((current, index) => {
        return (
          <Car
            key={index}
            name={current.name}
            year={current.year}
            onClickTitle={()=>this.setState({pageTitle:current.name})}
          />
        );
      });
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>{this.state.pageTitle}</h1>
          <button onClick={this.changeShowCars}>Show cars</button>

          {cars}

          {/*{this.state.showCars*/}
          {/*  ? this.state.cars.map((current, index) => {*/}
          {/*    return(*/}
          {/*      <Car*/}
          {/*        key={index}*/}
          {/*        name={current.name}*/}
          {/*        year={current.year}*/}
          {/*      />*/}
          {/*      )*/}
          {/*  })*/}
          {/*  : null*/}
          {/*}*/}


        </div>
      </div>
    );

  }
}

export default App;
