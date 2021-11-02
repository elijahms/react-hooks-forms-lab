import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("Search...")
  const [array, setArray] = useState(items)
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState("Produce");

  function onCategorySubmit(event) {
    setItemCategory(event.target.value)
  }

  function onNameSubmit(event) {
    setItemName(event.target.value);
  }

/////////////////////////////////////

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onInputChange(event) {
    setSearchValue(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))
  }

  let itemsToDisplay = array.filter((item) => {
    if (selectedCategory === "All" && searchValue === "Search...") 
    return true;
    
      if (searchValue !="Search...") return item.name.startsWith(searchValue)

      return item.category === selectedCategory
  });

  function onItemFormSubmit(event) {
    event.preventDefault()
    let newItem = {id: uuid(), name: itemName, category: itemCategory};
    let dataArray = [...array, newItem]
    setArray(() => dataArray)
  }


  return (
    <div className="ShoppingList">
      <ItemForm onNameSubmit={onNameSubmit} onCategorySubmit={onCategorySubmit} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onInputChange={onInputChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;