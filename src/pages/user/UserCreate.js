import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        username: "",
        email: "",
        city: "",
        state: "",
        country: ""
      },
      // Validating Forms while entering the data
      validate: (values) => {
        let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

        if (!values.username) {
          errors.username = "Please enter username";
        } else if (values.username.length < 5) {
          errors.username = "Name shouldn't be less than 3 letters";
        } else if (values.username.length > 20) {
          errors.username = "Name shouldn't be more than 20 letters";
        }

        if (!values.email) {
          errors.email = "Please enter email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.city) {
          errors.city = "Please select any one city";
        }

        if (!values.state) {
          errors.state = "Please select any one state";
        }

        // if (!values.country) {
        //   errors.country = "Please select any one state";
        // }

        return errors;
      },
      //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", values);
          navigate("/portal/user-list");
        } catch (error) {
          console.log(error);
          alert("Validation failed");
          setLoading(false);
        }

        console.log(values);
      }

    });
  return (
    <div className='container'>

      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Name</label>
            <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.username ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>

          <div className="col-lg-6">
            <label>E-Mail</label>
            <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"mail"}
              className={`form-control ${myFormik.errors.email ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>

          <div className='col-lg-6'>
            <label>Department</label>
            <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="SW">SW</option>
              <option value="Mech">Mech</option>
              <option value="Prod">Prod</option>
              <option value="Elec">Elec</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>
          <div className='col-lg-6'>
            <label>Role</label>
            <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.state ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="User">User</option>
              <option value="Product Owner">Product Owner</option>
              {/* <option value="FL">Florida</option>
              <option value="VA">Virginia</option> */}
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>

          {/* <div className='col-lg-4'>
            <label>Country</label>
            <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.country ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="IN">India</option>
              <option value="US">USA</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div> */}

          <div className='col-lg-4 mt-3'>
            <input disabled={isLoading} type="submit" value={isLoading ? "Submitting..." : "Create"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
      {/* {JSON.stringify(myFormik.values)} */}
    </div>
  );
}

export default UserCreate