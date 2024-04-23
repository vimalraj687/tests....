import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./InputField";
import SelectField from "./SelectField";

const NewForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    full_address: "",
    city: "",
    pin_code: "",
    landmark: "",
    country: "",
    state: "",
    isDefault: false,
  });
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    first_name: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),
    last_name: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),
    phone_number: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only digits")
      .max(10, "Phone number must be exactly 10 digits")
      .required("Phone Number is required"),
    full_address: Yup.string().required("Full Address is required"),
    city: Yup.string().required("City is required"),
    pin_code: Yup.string()
      .required("Pin Code is required")
      .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const validate = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const formattedErrors = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      console.log("Form data:", formData);
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        full_address: "",
        city: "",
        pin_code: "",
        landmark: "",
        country: "",
        state: "",
        isDefault: false,
      });
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please correct the errors before submitting.");
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="border-b  w-full mb-6 pb-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-700">
              Add a new address
            </h2>
            <button className="text-xl font-bold text-gray-700">×</button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            id="first_name"
            label="First name"
            value={formData.first_name}
            onChange={handleInputChange}
            error={errors.first_name}
            placeholder=" "
          />
          <InputField
            id="last_name"
            label="Last name"
            value={formData.last_name}
            onChange={handleInputChange}
            error={errors.last_name}
            placeholder=" "
          />
          <InputField
            id="phone_number"
            label="Phone Number"
            value={formData.phone_number}
            onChange={handleInputChange}
            error={errors.phone_number}
            placeholder=" "
          />
          <InputField
            id="full_address"
            label="Full Address"
            value={formData.full_address}
            onChange={handleInputChange}
            error={errors.full_address}
            placeholder=" "
          />
          <InputField
            id="landmark"
            label="Landmark (Optional)"
            value={formData.landmark}
            onChange={handleInputChange}
            placeholder=" "
          />
          <div className="mb-4 grid grid-cols-2 gap-2 relative">
            <InputField
              id="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
              error={errors.city}
              placeholder=" "
            />
            <InputField
              id="pin_code"
              label="PIN Code"
              value={formData.pin_code}
              onChange={handleInputChange}
              error={errors.pin_code}
              placeholder=" "
            />
          </div>
          <SelectField
            id="country"
            label="Country"
            value={formData.country}
            onChange={handleInputChange}
            error={errors.country}
          >
            <option value="">Select a country...</option>
            <option value="India">India</option>
          </SelectField>
          <SelectField
            id="state"
            label="State"
            value={formData.state}
            onChange={handleInputChange}
            error={errors.state}
          >
            <option value="">Select a state...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </SelectField>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isDefault"
              checked={formData.isDefault}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="isDefault">Set as default</label>
          </div>

          <button
            className="bg-yellow-500 text-black w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ADD A NEW ADDRESS
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewForm;
