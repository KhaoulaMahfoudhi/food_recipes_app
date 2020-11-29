import React from 'react';
import './search.css';

export const RecipeSearch = ({ setNameSearch }) => {
  return (
    <div className="cover">
      <form className="form">
        <div class="tb">
          <div class="td">
            <input
              className="input"
              name="search"
              type="text"
              required
              placeholder="crepe, pancakes, cookies ... ?"
              onChange={(event) => {
                setNameSearch(event.target.value);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
