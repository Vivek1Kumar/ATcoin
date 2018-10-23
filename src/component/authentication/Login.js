import React from 'react';

class Login extends React.Component  {
  render() {
    return(
      <div className="login">
      <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Login your registered credentials account
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    
                  />
                </div>
                <input type="submit" className="btn btn-info mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;