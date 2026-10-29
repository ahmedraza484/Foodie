import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Reservation.css";

const Reservation = () => {
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div>
                <input type="date" placeholder="Date" required />
                <input type="time" placeholder="Time" required />
              </div>
              <div>
                <input type="email" placeholder="Email" className="email_tag" />
                <input type="number" placeholder="Phone" />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
