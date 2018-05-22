import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  //convert ingredients object held in state to an array
  let transformedIngredients = Object.keys(props.ingredients)

  //We use map to build the appropriate number of elements in our array
  //dynamically
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  
  console.log(transformedIngredients);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
