import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SpecList() {

  const [userList, setUserList] = useState([]);
  const [specList, setSpecList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //On Load
    // getSpecs();
    console.log("welcome");
  }, []);

  let getSpecs = async () => {
    try {
      const specs = await axios.get("https://63a9bccb7d7edb3ae616b639.mockapi.io/specifications");
      setSpecList(specs.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/specifications/${id}`);
        getSpecs();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Specification-List</h1>
        <Link to="/portal/create-specification" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create Specifications
        </Link>
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Specifications</h6>
        </div>
        <div className="card-body">
          {
            isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' />
              : <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>SAN</th>
                      <th>USN</th>
                      <th>Details</th>
                      <th>Action</th>
                      {/* <th>Country</th>
                      <th>Action</th> */}
                    </tr>
                  </thead>
                  {/* <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </tfoot> */}
                  <tbody>
                    {/* {specList.map((spec) => {
                      return (
                        <tr>
                          <td>{spec.id}</td>
                          <td>{spec.name}</td>
                          <td>{spec.san}</td>
                          <td>{spec.usn}</td>
                          <td>{spec.details}</td>
                          
                          <th>
                            <Link to={`/portal/spec-view/${spec.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                            <Link to={`/portal/spec-edit/${spec.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                            <button onClick={() => handleDelete(spec.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                          </th>
                        </tr>
                      )
                    })} */}
                    <tr>
                      <td>1</td>
                      <td>Test</td>
                      <td>xxxxxx11223</td>
                      <td>xxxxxx11223</td>
                      <td>Max:
                        2.5kg;
                        Nominal:
                        1kg;
                        Min:
                        0.7kg;
                      </td>

                      <th>
                        <Link to={`/portal/spec-view/1`} className='btn btn-primary btn-sm mr-1'>View</Link>
                        <Link to={`/portal/spec-edit/1`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                        <button onClick={() => handleDelete(1)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                      </th>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Test2</td>
                      <td>xxxxxx11223</td>
                      <td>xxxxxx11223</td>
                      <td>Max:
                        2.5kg;
                        Nominal:
                        1kg;
                        Min:
                        0.7kg;
                      </td>

                      <th>
                        <Link to={`/portal/spec-view/1`} className='btn btn-primary btn-sm mr-1'>View</Link>
                        <Link to={`/portal/spec-edit/1`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                        <button onClick={() => handleDelete(1)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                      </th>
                    </tr>

                  </tbody>
                </table>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default SpecList;