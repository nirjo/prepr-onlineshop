const RegisterPage = () => {
  return (
    <div className="myContainer">
      <h3>Register</h3>
      <table>
        <tr>
          <td>E-mail</td>
          <td>:</td>
          <td>
            <input
              type="text"
              placeholder="email"
              className="form-control"
            ></input>
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>:</td>
          <td>
            <input
              type="text"
              placeholder="password"
              className="form-control"
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <button className="btn btn-primary">Register</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default RegisterPage;
