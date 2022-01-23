// import React from 'react';

// const  LoginPage = () => {
// 	return ( <div className="myContainer">
//     <h3>Login</h3>
//     <input type="text" placeholder="email" className="form-control"></input>
//     <input type="text" placeholder="password" className="form-control"></input>
//     <button className="btn btn-primary">login</button>
//   </div>)
// };

// export default LoginPage;

import React from 'react';

const LoginPage = () => {
  return (
  <div>
    <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
  </div>
  )
};

export default LoginPage;

