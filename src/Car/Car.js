import React from 'react'
import classes from './Car.module.css'


export default props => (
  <div className={classes.carBlock}>
    <h3>Car name: { props.name }</h3>
    <p>Car Year: <strong>{props.year}</strong></p>
    <button className={classes.btn} onClick={props.onClickTitle}>Change Title</button>

  </div>
)
