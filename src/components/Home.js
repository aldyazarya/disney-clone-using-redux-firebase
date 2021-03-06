/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import styled from "styled-components";
import dbConfig from "../Firebase";
import { useDispatch } from "react-redux";

import ImgSlider from "./Home/ImgSlider";
import Viewers from "./Home/Viewers";
import Original from "./Home/Original";
import NewtoDisney from "./Home/NewtoDisney";
import Trending from "./Home/Trending";
import Hollywood from "./Home/Hollywood";
import DisneyKids from "./Home/DisneyKids";
import Popular from "./Home/Popular";

import bgImg from "../images/home-background.png";
import { setDisneyMovies } from "./Redux/Reducers/MovieReducer";

function Home() {
  const dispatch = useDispatch();

  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) => {
      // console.log(snapshot);
      snapshot.docs.map((doc) => {
        // console.log(doc.data().type);

        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trending,
        })
      );
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Original />
      <NewtoDisney />
      <Trending />
      <Hollywood />
      <DisneyKids />
      <Popular />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: block;

  &:before {
    background: url(${bgImg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
`;
