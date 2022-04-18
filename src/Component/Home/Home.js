import React from "react";
import slide01 from "../../images/slide01.png";
import pic from "../../images/pic.png";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="info">
      <section className="cont-container">
        <div
          id="carouselDarkVariant"
          class="carousel slide carousel-fade carousel-dark relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src={slide01} class="block w-full" alt="Motorbike Smoke" />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-3xl text-black font-bold pb-4">
                  Dr. Mark Hoffman
                </h5>
                <p className="text-xl font-semibold text-black pb-8">
                  Welcomes you ! Dr. Mark Hoffman dental clinic.
                </p>
                <button className="btn">HIRE ME</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 cart-info">
        <h1 className="text-center font-bold text-5xl">Services</h1>
        <div className="container">
          <div className="card">
            <Services></Services>
          </div>
        </div>
      </section>
      <section className="service-container">
        <div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 p-8 home-container">
          <div>
              <img className="rounded-xl" src={pic} alt="" />
            </div>
            <div>
              <h1 className="text-3xl text-center font-bold m-8">
                get services
              </h1>
              <p className="text-xl text-semi-bold p-4">
                Start Consultations And Write Prescriptions.Shaheed Suhrawardy
                Medical College and Hospital, Anwar Khan Modern Hospital
                Dhanmondi, Dhaka
              </p>
              <button className="text-md font-bold rounded-full h-12 w-32 bg-slate-700 text-white">
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
