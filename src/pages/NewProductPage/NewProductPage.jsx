import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewProductPage({addProduct}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categories: "t-shirts",
  });

  function handleChange(evt) {
    const data = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(data);
  }
  function handleSubmit(){
    addProduct(formData)
    setFormData({
      name: "",
      description: "",
      price: "",
      categories: "t-shirts",
    });
    navigate("/")
  }
  return (
    <div>
      <h1>New Product Page</h1>
      <label>
        Name:
        <input
          type="text"
          name = "name"
          value = {formData.name}
          onChange = {handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name = "description"
          value = {formData.description}
          onChange = {handleChange}
        />

      </label>
      <label>
        Price:
        <input
          type="number"
          name = "price"
          value = {formData.price}
          onChange = {handleChange}
        />

      </label>
      <label>
        Categories:
        <select
          name = "categories"
          value = {formData.categories}
          onChange = {handleChange}
        >
          <option value="t-shirts">T-Shirts</option>
          <option value="pants">Pants</option>
          <option value="activewear">Active-Wear</option>
          <option value="jackets">Jackets</option>
          <option value="dresses">Dresses</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>

      </label>
      <button onClick={handleSubmit}>ADD Product</button>
    </div>

  );
}
