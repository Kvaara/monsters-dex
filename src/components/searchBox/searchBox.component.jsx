import React from "react";

import "./searchBox.styles.css";

export const SearchBox = (props) => (
  <input
    type="search"
    class="search"
    placeholder={props.placeholder}
    onChange={props.handleChange}
  ></input>
);
