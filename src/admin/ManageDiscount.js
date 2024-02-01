import { Link } from "react-router-dom";

const ManageDiscount = ()=> {
    return(
        <>
         <nav class="n1 navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='/image/logo.png' alt="Logo" width="300" height="100" class="d-inline-block align-text-top" />

                    </a>
                    <p className='p1 text-center mx-auto'>A Haven for Book Lovers</p>


                    {/* <div class="row">
          
            <div class="col-auto">
              <img src="/image/sign.png" width="50" height="44" class="d-inline-block align-text-top " />
            </div>
            <div class="col-auto">
              <a href="#" class="d-inline-block me-2 zoom-in-out fw-bold">
                Sign in &<br /> Create Account
              </a>
            </div>
          </div> */}

                </div>
            </nav>


            <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5 sticky-top" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">Admin</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarNav" onClick={() => window.location.reload()}>
                        <ul class="navbar-nav me-3">
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to={"/admin"}> Home </Link>
                            </li>

                        </ul>
                        <ul class="navbar-nav">
                        <li class="nav-item mx-3">
                                <Link className="nav-link" to={"/admin/categories"} >Category</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to={"/admin/items"}> Items </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to={"/admin/order_details"}> Order Deatils </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to={"/admin/manage_discount"}> Manage Discount </Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to={"/"}> User Deatils </Link>
                            </li>
                        </ul>
                       

                    </div>
                </div>
            </nav>

            <div className="text-center my-4"> 
      <h2 className="k1">Order Details</h2>
    </div>
        </>
    )
}

export default ManageDiscount;