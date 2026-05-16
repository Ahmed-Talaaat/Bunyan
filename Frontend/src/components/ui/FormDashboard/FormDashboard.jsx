import { useContext, useState } from "react";
import { FormContext } from "../../../context/FormContext";

function FormDashboard() {
  const { setHasFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newFormData = {
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    };

    setFormData(newFormData);

    // Check if any field has data
    const hasData = Object.values(newFormData).some(
      (val) => val !== "" && val !== false
    );
    setHasFormData(hasData);
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            checked={formData.checkbox}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDashboard;
