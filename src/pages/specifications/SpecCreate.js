import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SpecCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        name: "",
        san: "",
        usn: "",
        details: "",
        // city: "",
        // state: "",
        // country: ""
      },
      // Validating Forms while entering the data
      validate: (values) => {
        let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

        if (!values.name) {
          errors.name = "Please enter spec name";
        }
        // } else if (values.name.length < 5) {
        //   errors.name = "Name shouldn't be less than 3 letters";
        // } else if (values.name.length > 20) {
        //   errors.name = "Name shouldn't be more than 20 letters";
        // }

        if (!values.san) {
          errors.san = "Please enter email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.san)) {
          errors.san = 'Invalid SAN';
        }

        if (!values.usn) {
          errors.san = "Please enter email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usn)) {
          errors.san = 'Invalid USN';
        }

        if (!values.details) {
          errors.san = "Please enter email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.details)) {
          errors.san = 'Invalid Details';
        }

        // if (!values.city) {
        //   errors.city = "Please select any one city";
        // }

        // if (!values.state) {
        //   errors.state = "Please select any one state";
        // }

        // if (!values.country) {
        //   errors.country = "Please select any one state";
        // }

        return errors;
      },
      //one can be able to submit once the validates returns empty value (validation successful) else can't be submitted
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/specifications", values);
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
            <input name='name' value={myFormik.values.name} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.name ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>SAN</label>
            <input name='san' value={myFormik.values.san} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.san ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.san}</span>
          </div>

          <div className="col-lg-6">
            <label>USN</label>
            <input name='usn' value={myFormik.values.usn} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.usn ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.usn}</span>
          </div>

          <div className="col-lg-6">
            <label>Details</label>
            <input name='details' value={myFormik.values.details} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.details ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.details}</span>
          </div>

          {/* <div className='col-lg-4'>
            <label>City</label>
            <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="CN">Chennai</option>
              <option value="KN">Kochin</option>
              <option value="MU">Mumbai</option>
              <option value="SA">Seattle</option>
              <option value="MI">Miami</option>
              <option value="VB">Virginia Beach</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>

          <div className='col-lg-4'>
            <label>State</label>
            <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.state ? "is-invalid" : ""} `} >
              <option value="">----Select----</option>
              <option value="TN">TamilNadu</option>
              <option value="KL">Kerala</option>
              <option value="MH">Maharashtra</option>
              <option value="WA">Washington</option>
              <option value="FL">Florida</option>
              <option value="VA">Virginia</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>

          <div className='col-lg-4'>
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

export default SpecCreate