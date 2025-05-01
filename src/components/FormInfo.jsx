import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function FormInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!email || !password) {
      navigate("/SignUp");
    }
  }, [email, password, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!inputs.studentID) {
      newErrors.studentID = "Student ID is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const finalData = { email, password, ...inputs };

    try {
      const res = await axios.post("http://localhost:8888/api/users/save", finalData);

      if (res.data.status === 1) {
        navigate("/SignIn"); 
      } else {
        if (res.data.message.includes("Student ID")) {
          setErrors((prev) => ({ ...prev, studentID: res.data.message }));
        } else if (res.data.message.includes("Email")) {
          setErrors((prev) => ({ ...prev, email: res.data.message }));
        } else {
          setErrors((prev) => ({ ...prev, server: res.data.message }));
        }
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        server: "Something went wrong. Please try again later.",
      }));
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-30 w-auto" src="/logo.png" alt="CTU Logo" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Fill in Your Information
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="firstName"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
                placeholder="Enter Your First Name"
              />
              {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
                placeholder="Enter Your Last Name"
              />
              {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Student ID */}
          <div>
            <label htmlFor="studentID" className="block text-sm font-medium text-gray-900">
              Student ID
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="studentID"
                id="studentID"
                autoComplete="off"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
                placeholder="Enter Your Student ID"
              />
              {(errors.studentID || (errors.server && errors.server.includes("Student ID"))) && (
                <p className="text-sm text-red-600">
                  {errors.studentID || errors.server}
                </p>
              )}
            </div>
          </div>

          {/* Birthdate */}
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-900">
              Birthdate
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
                placeholder="Enter Your Birthdate"
              />
              {errors.birthdate && <p className="text-sm text-red-600">{errors.birthdate}</p>}
            </div>
          </div>

          {/* Street Address */}
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-900">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              id="street"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-blue-600 sm:text-sm"
              placeholder="123 Main St"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-900">
              City Address
            </label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-blue-600 sm:text-sm"
              placeholder="City Address"
            />
          </div>

          {/* ZIP Code */}
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-900">
              ZIP Code
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              onChange={handleChange}
              maxLength={4}
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-blue-600 sm:text-sm"
              placeholder="Enter Your ZIP Code"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/" className="font-semibold text-blue-600 hover:text-blue-500">
            {" "}Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormInfo;
