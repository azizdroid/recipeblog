import "./App.css";
import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Recipe from "./Recipe";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cusinie from "./Cusinie";
import Home from "./Home";
import Login from "./Login";
import { userContext } from "./Usercontext";
const App = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "black",
      }}
    />
  );

  const onSearch = (value) => console.log(value);
  const APP_ID = "5a5814c6";
  const APP_KEY = "8468077aa5f8fa3731456039593cb068";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const exampleRef = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    axios.get(exampleRef).then((response) => {
      const data = response.data.hits;
      console.log(data);
      setRecipes(data);
    });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearch = () => {
    setQuery(search);
  };
  const names = ["James", "John", "Paul", "Ringo", "George"];

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/cuisine"></Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <userContext.Provider value="sdfghhjbjn,">
          {" "}
          <Route exact path="/">
            {" "}
            <Header />
            <Home />
          </Route>
        </userContext.Provider>
      </BrowserRouter>

      <Row justify="space-around">
        <Col lg={12} xs={14}>
          {" "}
          <br />
          <Search
            value={search}
            placeholder="Search your favorite food item"
            onChange={updateSearch}
            suffix={suffix}
            // onClick={getSearch}
            enterButton="Search"
            size="large"
            onSearch={getSearch}
          />
        </Col>
      </Row>
      <h1
        style={{
          fontFamily: "fantasy",
          fontSize: "40px",
          color: "blue",
          fontStyle: "oblique",
          padding: "20px",
        }}
      >
        {" "}
        Check out our {query} Recipes
      </h1>

      <Row justify="space-around">
        {recipes
          .filter((recipe) => {
            return recipe.recipe.cuisineType == "italian";
          })
          .map((recipe) => (
            <Col md={7} xs={23}>
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                Calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                Totaltime={recipe.recipe.TotalTime}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default App;
