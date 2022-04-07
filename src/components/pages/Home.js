import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
        <br/><br/>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Webiste</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  
                  <Link
                    class="btn btn-outline-primary mr-2"
                    
                  >
                    Editar
                  </Link>
                  
                </td>
              </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
