import React, { useState } from "react";
import { randomNumber } from "../utils";

function Numbers() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber];
    setNumbers(newNumberArray);  }

    // function handleLiClick(numberToRemove) {
    //   const newNumberArray = numbers.filter((number) => number !== numberToRemove)
    //   setNumbers(newNumberArray)
    // }

    function handleLiClick(numberToUpdate) {
      const newNumberArray = numbers.map((number) => number === numberToUpdate ? numberToUpdate + 100 : number);
      setNumbers(newNumberArray)
    }

    const [filterBy, setFilterBy] = useState("All");

    let numbersToDisplay = numbers;
    if (filterBy === "Even") {
      numbersToDisplay = numbers.filter((num) => num % 2 === 0);
    } else if (filterBy === "Odd") {
      numbersToDisplay = numbers.filter((num) => num % 2 !== 0);
    }
    const numberList = numbersToDisplay.map((num) => <li key={num}>{num}</li>); 


    function handleFilterChange(event) {
      setFilterBy(event.target.value)

    }
    

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="Even">Even</option>
  <option value="Odd">Odd</option>
</select>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
