import { useEffect, useState } from "react";
import "./StyleForm.css";

const Form32 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    shippingAdress: "",
    email: "",
    comments: "",
    password: "",
  });

  useEffect(() => {
    console.log("Initial FormData", formData);
  }, []);

  const handleChange = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    //console.log("Updated FormData", formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="form-box">
        <div className="field1">
          <h1> Customer Info </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
            <textarea
              cols="30"
              rows="10"
              className="form-input"
              placeholder="Shipping Adress"
              onChange={handleChange}
              name="shippingAdress"
              value={formData.shippingAdress}
            />

            <input
              type="email"
              className="form-input"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <textarea
              className="form-input"
              placeholder="Comments"
              onChange={handleChange}
              name="comments"
              value={formData.comments}
            />
            <input type="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form32;
