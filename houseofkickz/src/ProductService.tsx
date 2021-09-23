
import axios from "axios";
import { SetStateAction, useContext, useState } from "react";
import SearchContext from "./Context/SearchContext";
import { Shoe } from "./Types/TypeShoe";

export function getAllProducts(url: String) {
    //create axios
  const client = axios.create({
      //set the base url
    baseURL: "http://localhost:3004/posts",
    //set the method
    method: "get",
  });
  //return the axios object with the url which from you want the data
  //add the url to choose between all products and only 1 product
  return client.get("http://localhost:3004" + url);
}