import React, { useState } from "react";



function ItemForm(props) {
  // const [array, setArray] = useState([])
  // const [itemName, setItemName] = useState('');
  // const [itemCategory, setItemCategory] = useState("Produce");

  // function onItemFormSubmit(event) {
  //   event.preventDefault()
  //   let newItem = {
  //     id: uuid(),
  //     name: itemName,
  //     category: itemCategory,
  //   };
  //   let dataArray = [...array, newItem]
  //   setArray(dataArray)
  //   console.log(array)
  //   console.log(itemCategory)
  //   console.log(itemName)
  // }

  // function onCategorySubmit(event) {
  //   setItemCategory(event.target.value)
  //   console.log(itemCategory);
  // }

  // function onNameSubmit(event) {
  //   setItemName(event.target.value);
  //   console.log(itemName);
  // }


  return (
    <form onSubmit={props.onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={props.onNameSubmit} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={props.onCategorySubmit} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
