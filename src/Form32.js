import { useEffect, useState } from "react";

const Form32 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    comments: "",
    password: "",
  });

  const [name, setName] = useState();

  useEffect(() => {
    console.log("Initial FormData", formData);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Home"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Home"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="Nick Name"
          onChange={handleChange}
          name="nickName"
          value={formData.nickName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        <input type="Submit" />
      </form>
    </>
  );
};

export default Form32;
