/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectUserName,
  selectUserPhoto,
  setLoginState,
  setLogOutState,
} from "./Redux/Reducers/userReducer";
import { auth, provider } from "../Firebase.js";

import logo from "../images/logo.svg";
import search from "../images/search-icon.svg";
import home from "../images/home-icon.svg";
import watchlist from "../images/watchlist-icon.svg";
import original from "../images/original-icon.svg";
import movies from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [Toggler, setToggler] = useState(false); // false -> notActive
  const ifPopupOpen = () => setToggler(!Toggler); // true -> activeState

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setLoginState({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, [dispatch, history]);

  const SignIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user;
      dispatch(
        setLoginState({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/home"); // user will navigate to home after login
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setLogOutState());
      history.push("/"); // this will navigate user to back login page
    });
  };

  return (
    <Nav>
      <NavLink to="/">
        <Logo src={logo} />
      </NavLink>

      {!userName ? (
        <LoginButton onClick={SignIn}>LOG IN</LoginButton>
      ) : (
        <>
          <NavMenu>
            <NavLink to="/home" className="nav-link">
              <a>
                <img src={home} />
                <span>HOME</span>
              </a>
            </NavLink>
            <NavLink to="" className="nav-link">
              <a>
                <img src={search} />
                <span>SEARCH</span>
              </a>
            </NavLink>
            <NavLink to="" className="nav-link">
              <a>
                <img src={watchlist} />
                <span>WATCHLIST</span>
              </a>
            </NavLink>
            <NavLink to="" className="nav-link">
              <a>
                <img src={original} />
                <span>ORIGINAL</span>
              </a>
            </NavLink>
            <NavLink to="" className="nav-link">
              <a>
                <img src={movies} />
                <span>MOVIES</span>
              </a>
            </NavLink>
            <NavLink to="" className="nav-link">
              <a>
                <img src={series} />
                <span>SERIES</span>
              </a>
            </NavLink>
          </NavMenu>
          <UserAuth>
            <img
              onClick={ifPopupOpen}
              src={userPhoto}
            />
          </UserAuth>

          <PopupMenu activeState={Toggler}>
            <NavLink to="/home" className="nav-link">
              <a>
                <span>HOME</span>
              </a>
            </NavLink>
            <NavLink onClick={SignOut} to="#" className="nav-link">
              <a>
                <span>SIGN OUT</span>
              </a>
            </NavLink>
          </PopupMenu>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  z-index: 2500;
  width: 100%;
  opacity: 1;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (min-width: 280px) and (max-width: 991px) {
    justify-content: space-between;
  }
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  @media screen and (min-width: 280px) and (max-width: 991px) {
    display: none;
  }

  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  color: white;

  > .nav-link {
    text-decoration: none;
    color: white;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserAuth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  top: 5vh;
  right: 2.45rem;
  z-index: 1;
  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 19px 0px;

  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  > .nav-link {
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-bottom: 1.3px solid rgba(151, 151, 151, 1);

    text-decoration: none;
    color: white;
    margin-bottom: 5px;
  }

  a {
    display: flex;
    align-items: center;
    /* padding: 0 12px; */
    cursor: pointer;

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      padding-bottom: 5px;
    }
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500 !important ;

  @media screen and (min-width: 280px) and (max-width: 550px) {
    font-size: 0.8rem;
    padding: 4px 13px;
  }
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
