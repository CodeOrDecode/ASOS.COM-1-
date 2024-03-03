import React from "react";
import "../Css/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [come, setCome] = useState(false);

  function showit() {
    setCome(true);
  }

  function hideit() {
    setCome(false);
  }

  function handlehome(){
    navigate("/")
  }

  function handlewomen(){
    navigate("/women");
  }

  function handlemen(){
    navigate("/men");
  }

  function handlelogin(){
    navigate("/login");
  }

  function handlesignup(){
    navigate("/signup");
  }

  function handlebag(){
    navigate("/bag")
  }



  return (
    <>
      <div className="navbar">
        <div className="firstnav">
          <div className="firstnavone" onClick={handlehome}>
            <img
              style={{ cursor: "pointer" }}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDBabTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjAzM0wxMS41NjQgMEM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZaIi8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NFptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDBabS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwIDAtMS4xMDItMS4wNzZaTS4xOTQgOS41NDhhNS43MzMgNS43MzMgMCAwIDAgMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAgMCAyLjEyNCAyLjkxM2MxLjEzNCAxLjE2IDIuNDAyIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N3YuMDAxaC4wOTljMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY4LS44NzEgMS4zNjUtLjU3OCAyLjYzMy0xLjQ2IDMuNzY2LTIuNjJhMTIuMDc4IDEyLjA3OCAwIDAgMCAyLjIwNy0zLjA3NWMuMzM3IDEuODcyIDEuMzcgMy42MTIgMi44NTggNC43NTMgMi4xNSAxLjY0NyA1LjAwOCAxLjk4IDcuNjgzIDEuNzY1IDIuMDc4LS4xNjggMy4yNi0uNDMgNC43NDYtMS4zMTggMy42Mi0yLjE2MyA0LjIyLTcuOTc1LjY2Ni0xMC42MS0yLjQ5NS0xLjgzMi01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjE5LTEuNzA1LTEuMTg2LS43MDItLjk0Ny0uNTkyLTIuNDI3LjI0Mi0zLjI1NCAxLjAxNS0xLjAwNiAzLjQ5Mi0xLjQwOCA1LjI4Mi0uMjUyIDEuMDYuNjg1IDEuODAxIDEuOTE0IDEuNzk4IDMuMTk4bDUuMTMuMDAzYy0uMDg1LTIuMjU4LTEuMjA4LTQuNDUyLTIuOTczLTUuODA1QzUyLjA0LjIgNDkuMTgyLS4xMzMgNDYuNTA4LjA4MiA0NC44Ni4yMTUgNDMuMTkuNTQ3IDQxLjc2MiAxLjRjLTEuNzc4IDEuMDYyLTIuODE1IDIuOTgtMy4wMSA0Ljk3LS42MjUtMS4xODgtMS40NzMtMi4yOC0yLjUzMy0zLjI2QzMzLjg5OC45ODcgMzEuMzM0LjAxNSAyOC41MSAwaC0uMDY2Yy0yLjgyMi4wMTYtNS4zODYuOTg4LTcuNzA3IDMuMTEtMS4xNDYgMS4wNi0yLjA0NCAyLjI0OS0yLjY4MSAzLjU1LS4zMjctMS44OTMtMS4zNjUtMy42NTYtMi44NjgtNC44MDhDMTMuMDQuMjA1IDEwLjE4MS0uMTI4IDcuNTA2LjA4NyA1Ljg1OC4yMiA0LjE5LjU1IDIuNzYgMS40MDUgMS41NTIgMi4xMjcuNjg2IDMuMjQ0LjE5NCA0LjUxIi8+PC9zeW1ib2w+PHVzZSBocmVmPSIjYSIgd2lkdGg9IjIzIi8+PHVzZSBocmVmPSIjYiIgeD0iMjIuOCIgd2lkdGg9IjU3Ii8+PC9zdmc+"
              alt=""
            />
          </div>
          <div className="firstnavtwo" onClick={handlewomen}>WOMEN</div>
          <div className="firstnavthree" onClick={handlemen}>MEN</div>
        </div>
        <div className="secondnav">
          <input
            id="secondinput"
            type="text"
            placeholder="Search for items and brands"
          />
          <FaSearch id="serarchicon" />
        </div>

        <div className="thirdnav">
          <div
            className="thirdnavinside"
            onMouseOver={showit}
            onMouseLeave={hideit}
            style={{ cursor: "pointer" }}
          >
            <img
              onMouseOver={showit}
              onMouseLeave={hideit}
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23fff' d='M14 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm2 0A6 6 0 1 1 4 6a6 6 0 0 1 12 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z'/%3E%3C/svg%3E"
              alt=""
            />
          </div>

          <div
            className="hardonetran"
            style={{ top: come && "50px" }}
            onMouseOver={showit}
            onMouseLeave={hideit}
          >
            <div className="signinorjoin">
              <p className="navsign1" onClick={handlelogin}>Sign In</p>
              <p className="navsign2" onClick={handlesignup}>Join</p>
            </div>

            <div className="signinorjoin2">
              <RiAccountCircleLine className="reactaccount" />

              <p className="navsign4">My Account</p>
            </div>

            <div className="signinorjoin2">
              <img
                className="navsign3"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='%232D2D2D' fill-rule='evenodd'%3E%3Cpath fill-rule='nonzero' d='M18 4.667 16 2H4L2 4.667V18h16V4.667zM0 4l3-4h14l3 4v16H0V4z'/%3E%3Cpath d='M0 4h20v2H0z'/%3E%3Cpath d='M9 1.111h2v4H9z'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="navsign4">My Orders</p>
            </div>
            <div className="signinorjoin2">
              <img
                className="navsign3"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%232D2D2D' fill-rule='evenodd' d='M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.348 10.308c.528 0 .936.408.936.936a.922.922 0 0 1-.936.936.922.922 0 0 1-.936-.936c0-.528.408-.936.936-.936ZM10 5.816c.624 0 1.248.12 1.752.612.336.324.624.852.624 1.656 0 .648-.204 1.14-.612 1.548-.3.3-.756.588-1.368.672v1.26H8.908V9.212c.144.036.3.048.468.048.468 0 .876-.156 1.128-.408.18-.192.312-.48.312-.804 0-.324-.108-.552-.252-.696-.132-.132-.324-.24-.624-.24-.348 0-.54.144-.612.216-.132.12-.264.36-.264.78h-1.56c0-.624.264-1.26.6-1.62.324-.336.888-.672 1.896-.672Z'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="navsign4">Returns Information</p>
            </div>
            <div className="signinorjoin2">
              <img
                className="navsign3"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='%232D2D2D' fill-rule='evenodd'%3E%3Cpath fill-rule='nonzero' d='M4.667 14h11.339c1.1 0 1.994-.9 1.994-2.009V4.01A2.003 2.003 0 0 0 16.006 2H3.994C2.894 2 2 2.9 2 4.009V16l2.667-2zm.666 2L0 20V4.009A4.002 4.002 0 0 1 3.994 0h12.012C18.215 0 20 1.8 20 4.009v7.982A4.002 4.002 0 0 1 16.006 16H5.333z'/%3E%3Cpath d='M6 8.333c-.552 0-1-.373-1-.833 0-.46.448-.833 1-.833S7 7.04 7 7.5c0 .46-.448.833-1 .833zm4 0c-.552 0-1-.373-1-.833 0-.46.448-.833 1-.833s1 .373 1 .833c0 .46-.448.833-1 .833zm4 0c-.552 0-1-.373-1-.833 0-.46.448-.833 1-.833s1 .373 1 .833c0 .46-.448.833-1 .833z'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="navsign4">Contact Preferences</p>
            </div>
          </div>

          <div className="thirdnavinside">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 18'%3E%3Cpath fill='%23FFF' d='M10.618 15.474a21.327 21.327 0 0 0 3.137-2.076c2.697-2.166 4.249-4.619 4.245-7.299-.003-2.284-1.757-4.101-3.881-4.099-1.016 0-1.97.417-2.69 1.158l-1.43 1.467-1.432-1.463a3.748 3.748 0 0 0-2.695-1.151C3.749 2.013 1.998 3.837 2 6.12c.003 2.677 1.559 5.123 4.256 7.281a21.32 21.32 0 0 0 3.756 2.39c.191-.096.394-.202.606-.318zM9.996 1.763l.203-.2A5.726 5.726 0 0 1 14.116 0c3.246-.004 5.88 2.725 5.884 6.097C20.01 13.845 10.014 18 10.014 18S.01 13.87 0 6.124C-.003 2.752 2.624.014 5.87.01a5.733 5.733 0 0 1 3.92 1.554l.205.199z'/%3E%3C/svg%3E"
              alt=""
            />
          </div>
          <div className="thirdnavinside" onClick={handlebag}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFF' d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0 1 10 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z'/%3E%3C/svg%3E"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
