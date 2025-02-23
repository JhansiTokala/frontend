import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Full Background Image with Welcome Text on Right */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/j1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "50px",
          color: "#28a745",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "3px 3px 15px rgba(40, 167, 69, 0.8)",
        }}
      >
        Welcome to Recipe World
      </div>

      {/* Cards Section */}
      <div className="container mt-5">
        <div className="row g-4">
          {/* Veg Recipes */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              {/* Image Section */}
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src="/veg.jpg.jpg"
                  className="card-img-top"
                  alt="Veg Recipes"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Card Body */}
              <div className="card-body text-center p-3">
                <h5 className="card-title fw-bold text-success m-0">
                  Veg Recipes
                </h5>
                <p className="card-text mt-2">
                  Discover delicious vegetarian recipes with fresh ingredients.
                </p>
              </div>
            </div>
          </div>

          {/* Veg Soups */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              {/* Image Section */}
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src="/vegsoup.jpg"
                  className="card-img-top"
                  alt="Veg Soups Recipes"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Card Body */}
              <div className="card-body text-center p-3">
                <h5 className="card-title fw-bold text-dark m-0">
                  Veg Soups Recipes
                </h5>
                <p className="card-text mt-2">
                  Enjoy a variety of healthy and delicious vegetarian soups.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Veg Recipes */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              {/* Image Section */}
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src="/nonveg.jpg"
                  className="card-img-top"
                  alt="Non-Veg Recipes"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Card Body */}
              <div className="card-body text-center p-3">
                <h5 className="card-title fw-bold text-danger m-0">
                  Non-Veg Recipes
                </h5>
                <p className="card-text mt-2">
                  Enjoy a variety of delicious non-vegetarian dishes, from chicken to seafood.
                </p>
              </div>
            </div>
          </div>

          {/* Junk Food */}
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              {/* Image Section */}
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src="/junk.jpg"
                  className="card-img-top"
                  alt="Junk Food"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Card Body */}
              <div className="card-body text-center p-3">
                <h5 className="card-title fw-bold text-warning m-0">
                  Junk Food
                </h5>
                <p className="card-text mt-2">
                  Indulge in mouthwatering fast food and snacks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
