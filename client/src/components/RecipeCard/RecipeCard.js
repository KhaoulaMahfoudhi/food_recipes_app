import React from "react";
import Card from "react-bootstrap/Card";

function RecipeCards({title, calories, image, ingredients}) {
  return (
    
      <Card style={{ width: "25rem", border: "solid 1px blue" }}>
        <Card.Body>
          <Card.Img variant="top" src={image} />
          <Card.Title style={{color: "blue"}}>{title}</Card.Title>
          <ol>
          {ingredients.map(ingredient =>(
            <li>{ingredient.text} </li>
          ))}
          </ol>
  <Card.Subtitle className="mb-2 text-muted">{calories}</Card.Subtitle>
  
        </Card.Body>

       </Card>
   
  );
}

export default RecipeCards;
