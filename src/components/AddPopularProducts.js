import React from "react"

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList, mode } = props
  const populars = ["sel", "sucre", "pain", "lait", "beurre", "huile"]
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark"
  return (
    <div className="mb-3 d-flex flex-wrap align-items-center">
      Avez vous besoin de ?
      {populars.map((el) => (
        <button
          type="button"
          key={el}
          className={`btn ${buttonClass} mx-1`}
          onClick={() => addToShoppingList(el)}
          disabled={shopping.includes(el)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

export default AddPopularProducts
