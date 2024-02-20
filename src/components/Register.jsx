import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    password: "",
  });

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      password: "",
    });
  };

  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisteredUsers([...registeredUsers, formData]);
    setFormData({
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" name="create">
            Sign up
          </button>
          <button
            type="button"
            className="btn btn-warning btn-reset"
            onClick={resetForm}
          >
            Reset
          </button>
        </form>

        <div>
          <h2>Show Data</h2>
          <table className="table table-striped tab">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((user, index) => (
                <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.phoneno}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Register;
