import React, { useEffect, useState } from "react";
import "./Abook.css";
import Header from "../Header/Header";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const nextDate = (index) => {
  var today = new Date();
  today.setDate(today.getDate() + ((index - 1 - today.getDay() + 7) % 7) + 1);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const string = `${days[index % 7]} (${("0" + today.getDate()).slice(-2)}/${(
    "0" +
    (today.getMonth() + 1)
  ).slice(-2)}/${today.getFullYear() % 100})`;
  return string;
};

function Abook() {
  const [detail, setDetail] = useState(new Map());
  var tempBook = null;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const arr = [0, 1, 2, 3, 4, 5];
  const slots = [0, 1, 2, 3];
  const details = new Map();

  const fetchdata = async () => {
    fetch("https://fesem-api.subhadipmandal.engineer/book/fetch")
      .then(async (res) => {
        var body = await res.json();
        console.log(body);
        body.array?.map((items) => {
          details.set(items.bookingCode, true);
        });
        setDetail(details);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        window.location.reload();
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSubmit = async (event) => {
    fetch("https://fesem-api.subhadipmandal.engineer/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingTime: tempBook,
        userName: "admin",
      }),
    })
      .then((data) => {
        data.json();
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    window.location.reload();
  };

  return (
    <>
      <Header />
      <>
        <LoadingSpinner loading={loading} />
        <div
          className="table"
          style={loading ? { display: "none" } : { display: "block" }}
        >
          <p className="title" style={{ fontWeight: "bold" }}>
            Welcome Admin, Block the slots by clicking the slot and clicking
            Block Slot
          </p>
          <table className="booking-details">
            <col />
            <colgroup span="4"></colgroup>
            <tr>
              <td rowSpan="2"></td>
              <th
                colSpan="4"
                className="time"
                style={{ textAlign: "center" }}
                scope="colgroup"
              >
                Time
              </th>
            </tr>
            <tr>
              <th scope="col">9:30 A.M - 11:00A.M</th>
              <th scope="col">11:30 A.M - 1:00P.M</th>
              <th scope="col">2:00 P.M - 3:30P.M</th>
              <th scope="col">4:00 P.M - 5:30P.M</th>
            </tr>
            {detail !== undefined &&
              arr.map(function (v, i) {
                return (
                  <tr key={i}>
                    <th scope="row">{`${nextDate(i + 1)}`}</th>

                    {slots.map(function (value) {
                      const string = `${nextDate(i + 1)}_${value}`;
                      console.log(detail.get(string));
                      const avail = !detail.get(`${nextDate(i + 1)}_${value}`);
                      return (
                        <td key={value}>
                          <button
                            onClick={() => {
                              tempBook = avail ? string : tempBook;
                            }}
                            className="table-button"
                            style={
                              avail
                                ? { backgroundColor: "#51CA26" }
                                : { backgroundColor: "red" }
                            }
                            disabled={!avail}
                          >
                            {avail ? "Available" : "Booked"}
                          </button>{" "}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </table>
          <div className="adminForm">
            <form onSubmit={handleSubmit}>
              <div className="button">
                <input type="submit" value="Block Slot" />
              </div>
            </form>
            <form
              onSubmit={() => {
                navigate("/");
              }}
            >
              <div className="button">
                <input type="submit" value="Go Back" />
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
}

export default Abook;
