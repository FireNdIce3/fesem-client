import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const handleDelete = async (id) => {
    fetch("https://api.subhadipmandal.engineer/fesem/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const arr = [
    "9:30 A.M - 11:00A.M",
    "11:30 A.M - 1:00P.M",
    "2:00 P.M - 3:30P.M",
    "4:00 P.M - 5:30P.M",
  ];
  const fetchdata = async () => {
    fetch("https://api.subhadipmandal.engineer/fesem/admin/fetch")
      .then(async (res) => {
        var body = await res.json();
        var arr2 = [];
        console.log(body);
        body.map((items) => {
          arr2.push(items);
          console.log(items);
        });
        setDetails(arr2);
        console.log(arr2);
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
  return (
    <>
      <Header />

      <div className="buttons">
        <button
          className="table-button"
          style={{ backgroundColor: "red", width: "80px" }}
          value="logout"
          onClick={logout}
        >
          LogOut
        </button>
        <button
          className="table-button"
          style={{ backgroundColor: "green", width: "80px" }}
          value="block"
          onClick={() => {
            navigate("/abook");
          }}
        >
          Block Slots
        </button>
      </div>

      <div className="admin-wrapper">
        <p className="admindescp">Welcome Admin</p>
        <LoadingSpinner loading={loading} />
        {details.length !== 0 && (
          <>
            <div
              className="table"
              style={loading ? { display: "none" } : { display: "block" }}
            >
              <table className="admin-details">
                <tr>
                  <th className="tth">Name</th>
                  <th className="tth">Email</th>
                  <th className="tth">Booking Date</th>
                  <th className="tth">Slot</th>
                  <th className="tth">Department</th>
                  <th className="tth">Service</th>
                  <th className="tth"></th>
                </tr>

                {details.map((items, i) => {
                  return (
                    <tr key={items._id}>
                      <td className="ttd">{items.userName}</td>
                      <td className="ttd">{items.userEmail}</td>
                      <td className="ttd">{items.bookingDate}</td>
                      <td className="ttd">{arr[items.slot]}</td>
                      <td className="ttd">{items.userDept}</td>
                      <td className="ttd">{items.service}</td>
                      <td className="ttd">
                        <button
                          className="table-button"
                          onClick={() => {
                            handleDelete(items._id);
                          }}
                          style={{ backgroundColor: "red" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </>
        )}
        {details.length === 0 && (
          <div
            className="error"
            style={loading ? { display: "none" } : { display: "block" }}
          >
            No data to show
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
