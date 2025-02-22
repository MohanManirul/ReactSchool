import React from 'react';

const StudentLoginComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center">Student Login</h2>
    
              {/* Student ID  Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Student ID </span>
                </label>
                <input type="text" placeholder="Enter your Student ID " className="input input-bordered" required />
              </div>
    
              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input input-bordered" required />
              </div>
    
              {/* Login Button */}
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
    
              {/* Additional Links */}
              <p className="text-sm text-center mt-2">
                Don't have an account? <a href="#" className="text-primary">Register</a>
              </p>
            </div>
          </div>
        </div>
      );
    };
    
export default StudentLoginComponent;