import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/productApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    if (res.ok) {
      router.push("/products");
    } else {
      const err = await res.json();
      alert("Error: " + err.error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border w-full p-2 rounded"
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          required
        />
        <input
          className="border w-full p-2 rounded"
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <textarea
          className="border w-full p-2 rounded"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          className="border w-full p-2 rounded"
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
        />
        <Button type="submit">Create Product</Button>
      </form>
    </div>
  );
};

export default Create;
