/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

import playBlack from "../images/play-icon-black.png";
import playWhite from "../images/play-icon-white.png";
import groupIcon from "../images/group-icon.png";

function Detail() {
  return (
    // <Container>
    //   <Background>
    //     <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
    //   </Background>
    //   <ImageTitle>
    //     <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
    //   </ImageTitle>
    //   <Controls>
    //     <PlayButton>
    //       <img src={playBlack} />
    //       <span>PLAY</span>
    //     </PlayButton>
    //     <TrailerButton>
    //       <img src={playWhite} />
    //       <span>Trailer</span>
    //     </TrailerButton>
    //     <AddButton>
    //       <span>+</span>
    //     </AddButton>
    //     <GroupWatchButton>
    //       <img src={groupIcon} />
    //     </GroupWatchButton>
    //   </Controls>
    //   <SubTitle>2018 | 7m | Family, Fantasy, Kids, Animation</SubTitle>
    //   <Description>
    //     A Chinese-Canadian woman suffering from empty nest syndrome gets a
    //     second shot at motherhood when one of her handmade dumplings comes
    //     alive.
    //   </Description>
    // </Container>

    <>
      <Background>
        <Container>
          <Content>
            <ImageTitle>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <h2>2018 | 7m | Family, Fantasy, Kids, Animation</h2>
            <p>
              A Chinese-Canadian woman suffering from empty nest syndrome gets a
              second shot at motherhood when one of her handmade dumplings comes
              alive.
            </p>
            //{" "}
            <GroupButton>
              <PlayButton>
                <img src={playBlack} />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src={playWhite} />
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span></span>
                <span></span>
              </AddButton>
              <GroupWatchButton>
                <img src={groupIcon} />
              </GroupWatchButton>
            </GroupButton>
          </Content>
        </Container>
      </Background>
    </>
  );
}

export default Detail;

// const Container = styled.div`
//   min-height: calc(100vh - 70px);
//   padding: 0 calc(3.5vw + 5px);
//   position: relative;
// `;

// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: -1;
//   opacity: 0.8;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const ImageTitle = styled.div`
//   height: 30vh;
//   min-height: 170px;
//   width: 35vw;
//   min-width: 200px;
//   margin-top: 60px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PlayButton = styled.button`
//   border-radius: 4px;
//   font-size: 15px;
//   padding: 0px 24px;
//   margin-right: 22px;
//   display: flex;
//   align-items: center;
//   height: 56px;
//   background: rgb(249, 249, 249);
//   border: none;
//   letter-spacing: 1.8px;
//   cursor: pointer;

//   &:hover {
//     background: rgb(198, 198, 198);
//   }
// `;

// const TrailerButton = styled(PlayButton)`
//   background: rgba(0, 0, 0, 0.3);
//   border: 1px solid rgb(249, 249, 249);
//   color: rgb(249, 249, 249);
//   text-transform: uppercase;
// `;

// const AddButton = styled.button`
//   cursor: pointer;
//   margin-right: 16px;
//   width: 44px;
//   height: 44px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   border: 2px solid white;
//   background-color: rgba(0, 0, 0, 0.6);

//   span {
//     font-size: 30px;
//     color: white;
//   }
// `;

// const GroupWatchButton = styled(AddButton)`
//   background: rgb(0, 0, 0);
// `;

// const SubTitle = styled.div`
//   color: rgb(249, 249, 249);
//   font-size: 15px;
//   min-height: 20px;
//   margin-top: 26px;
// `;

// const Description = styled.div`
//   line-height: 1.4;
//   font-size: 20px;
//   margin-top: 16px;
//   color: rgb(249, 249, 249);
//   max-width: 700px;
// `;

const Background = styled.main`
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg")
      center/cover no-repeat;
  min-height: 95vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
`;
const ImageTitle = styled.div`
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    max-width: 325px;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: 150px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
const Content = styled.div`
  display: flex;
  min-height: 95vh;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }

  h2 {
    color: white;
    font-size: 1.2rem;
    font-weight: 500 !important;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.75rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      max-width: 250px;
    }
  }
  p {
    line-height: 1.4;
    font-size: 20px;
    color: #f9f9f9;
    max-width: 650px;
    width: 100%;
    height: auto;
    padding: 1rem 0;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
      max-width: 550px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.75rem;
      padding: 0.5rem 0;
      max-width: 400px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.75rem;
      padding: 0.3rem 0;
      max-width: 400px;
    }
  }
`;

const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PlayButton = styled.button`
  cursor: default;
  outline: none;
  border: 1px solid rgba(249, 249, 249, 1);
  background: rgba(249, 249, 249, 1);
  font-size: 1.2rem;
  border-radius: 0.345rem;
  padding: 0.5rem 1.5rem;
  margin-right: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.5rem 1.5rem;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding: 0.4rem 0.7rem;
    border-radius: 0.145rem;
    margin-right: 13px;
    background: #f9f9ff;
  }

  img {
    width: 32px;
    height: auto;
    opacity: 1;
    z-index: 1500;
    object-fit: contain;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 25px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      width: 19px;
    }
  }
  span {
    color: #000;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(249, 249, 249);
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;


const AddButton = styled.button`
  height: 41px;
  width: 41px;
  display: flex;
  cursor: pointer;
  margin-right: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    height: 35px;
    width: 35px;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 29px;
    width: 29px;
    margin-right: 13px;
  }

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        width: 15px;
      }
    }

    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        height: 13px;
      }
    }
  }
`;

const GroupWatchButton = styled.button`
  height: 41px;
  width: 41px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #fff;
  @media screen and (min-width: 280px) and (max-width: 1200px) {
    height: 35px;
    width: 35px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      height: 29px;
      width: 29px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      height: 23px;
      width: 23px;
    }
  }
`;
