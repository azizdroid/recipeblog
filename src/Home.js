import React, { useState, useEffect, useContext } from "react";
import Comp from "./Comp";
import axios from "axios";
import { userContext } from "./Usercontext";
function Home() {
  const APP_ID = "5a5814c6";
  const APP_KEY = "8468077aa5f8fa3731456039593cb068";
  const exampleRef = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const message = useContext(userContext);
  useEffect(() => {
    axios.get(exampleRef).then((response) => {
      console.log(response.data.hits[0].recipe.calories);
    });
  }, []);
  return <div></div>;
}

export default Home;
