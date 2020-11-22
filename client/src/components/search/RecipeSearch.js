import React from "react";
import "./search.css";

export const RecipeSearch = ({
  setNameSearch,
}) => {
  return (
    <div className="search">
      <div>
        <form action="" autoComplete="on">
          <input
            className="input-search"
            name="search"
            type="text"
            placeholder="What're we looking for ?"
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
