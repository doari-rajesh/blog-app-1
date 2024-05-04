import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    date: "",
    description: "",
    heading: "",
    sub_heading: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setBlog } = useContext(AppContext);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    // Validation
    if (formData.name.length < 2 || formData.name.length > 50) {
      errors.name = "Name length should be between 2 and 50 characters";
    }
    if (formData.heading.length < 10 || formData.heading.length > 100) {
      errors.heading = "Heading length should be between 10 and 100 characters";
    }
    if (formData.sub_heading.length < 10 || formData.sub_heading.length > 100) {
      errors.sub_heading =
        "Sub-heading length should be between 10 and 100 characters";
    }
    if (formData.title.length < 6 || formData.title.length > 25) {
      errors.title = "Title length should be between 6 and 25 characters";
    }

    if (formData.description.length < 10 || formData.description.length > 100) {
      errors.description =
        "Description length should be between 10 and 100 characters";
    }
    // Today's date
    // const today = new Date().toISOString().slice(0, 10);

    console.log(formData.date);
    if (!formData.date) {
      errors.date = "Date should be filled";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      // Add logic to handle form submission

      console.log(formData);

      setBlog((prev) => {
        return [...prev, formData];
      });

      setFormData({
        name: "",
        title: "",
        date: "",
        description: "",
        heading: "",
        sub_heading: "",
      });

      navigate("/");
    }
  };

  return (
    <div className="w-full max-w-[1024px] mx-auto my-[3rem] pb-[2rem] flex justify-center items-center h-fit">
      <form
        className="w-full max-w-md p-6 bg-white rounded-md shadow-md"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleOnChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.name && "border-red-500"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleOnChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.title && "border-red-500"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-semibold">
            Date
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.date && "border-red-500"
            }`}
            id="date"
            type="date"
            name="date"
            min={"2024-01-01"}
            value={formData.date}
            onChange={handleOnChange}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleOnChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.description && "border-red-500"
            }`}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 font-semibold"
          >
            Heading
          </label>
          <textarea
            id="heading"
            placeholder="Enter heading"
            name="heading"
            value={formData.heading}
            onChange={handleOnChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.heading && "border-red-500"
            }`}
          ></textarea>
          {errors.heading && (
            <p className="text-red-500 text-sm mt-1">{errors.heading}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="sub_heading"
            className="block text-gray-700 font-semibold"
          >
            Sub-Heading
          </label>
          <textarea
            id="sub_heading"
            name="sub_heading"
            placeholder="Enter sub-heading"
            value={formData.sub_heading}
            onChange={handleOnChange}
            className={`w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.sub_heading && "border-red-500"
            }`}
          ></textarea>
          {errors.sub_heading && (
            <p className="text-red-500 text-sm mt-1">{errors.sub_heading}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
