import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Home = () => {
  const [Category,setCategory] = useState(null);
  const[item,setItems] = useState(null);

  useEffect(()=>{
    getAllCategory();
    getAllItems();
  },[])

  const getAllCategory = async() =>{
    const response = await axios.get("http://localhost:8080/category");
    setCategory(response.data);
  }

  const getAllItems = async()=>{
    const response = await axios.get("http://localhost:8080/item");
    setItems(response.data);
  }
  return (
    <div>
      <title>Home</title>

      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src='/image/logo.png' alt="Logo" width="300" height="100" class="d-inline-block align-text-top" />

          </a>
          <p className='p1'>A Haven for Book Lovers</p>


          <div class="row">
            <div class="col-auto">
              <img src="/image/sign.png" width="50" height="44" class="d-inline-block align-text-top " />
            </div>
            <div class="col-auto">
              <a href="#" class="d-inline-block me-2 zoom-in-out fw-bold">
                Sign in &<br /> Create Account
              </a>
            </div>
          </div>


        </div>
      </nav>

      <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5"data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Category</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {Category && Category.map((cat) =>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">{cat.name}</a>
                    </li>
                )}
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <img src="/image/cart.png" width="30" height="25" class="d-inline-block align-text-top me-2" />
                        My Cart
                    </a>
                </li>
                
            </ul>
            
        </div>
    </div>
</nav>

<div className="row">
  {item && item.map((ite) => (
    <div className="card ms-5 me-5 col-lg-4 col-sm-3 col-md-2 col-12 col-xl-4 mb-4  border-dark" style={{ width: '18rem' }} key={ite.id}>
      <img src="/image/book.jpg" width="100" height="125" className="mx-auto d-block mt-2" />
      <div className="card-body">
        <h5 className="card-title mb-1">{ite.name}</h5>
        <p className="card-text mb-2">({ite.itemCategoryEntity.name})</p>
        <h6 className="card-title mb-1">Discount: {(((ite.originalPrice - ite.sellingPrice) / ite.originalPrice) * 100).toFixed(2)}%</h6>
        <p className="card-text mb-1">Qty: {ite.qty}</p>
        <div className="d-flex justify-content-between mb-2">
          <h6 className="card-title">RS.{ite.sellingPrice}</h6>
          <p className="card-text text-decoration-line-through">RS.{ite.originalPrice}</p>
        </div>
        <a href="#" className="btn btn-primary me-5">Details</a>
        <button type='button' class = "btn btn-outline-success">Add Cart</button>
      </div>
    </div>
  ))}
</div>













    </div>
  )
  
}


export default Home;