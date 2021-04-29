import React from "react";
import { Row, Col, Card } from "antd";

function Recipe({ title, Calories, image, ingredients, Totaltime }) {
  return (
    <div>
      <img alt="image" src={image} />
      <br />
      <div>
        <br />
        <Card title={title} bordered={true}>
          {" "}
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p> CALORIES : {Calories}</p>
          <p> Totaltime : {Totaltime}</p>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default Recipe;
