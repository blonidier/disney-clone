import styled from "styled-components";
import {} from "../features/movie/movieSlice"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import movieSlice from "../features/movie/movieSlice";
import db from "../firebase"
const Detail = () => {

    const {id } = useParams()
    const [detailData, setDetailData] = useState({});

    useEffect(()=>{
        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
                setDetailData(doc.data());
                console.log(doc.data().subTitle);
            }
            else{
                console.log("no such document in firebase");
            }
        }).catch((error)=>{
            alert(error.message)
        })
    }, [id])

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg}
                alt="" />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg}
                alt="" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/images/play-icon-black.png" alt="play" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/images/play-icon-white.png" alt="play" />
                        <span>Trailer</span> 
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/images/group-icon.png" alt="Group Watch" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitles>
                   {detailData.subTitle}
                </SubTitles>
                <Description>
                   {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    );
}


const Container = styled.div`
  position: relative;
  display: block;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
   
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
  top: 0;
  left: 0;
   
  right: 0;
  opacity: 0.8;
  z-index: -1;
  position: fixed;
  
  img{
      width: 100vw;
      height: 100vh;

      @media (max-width: 768px){
        width: 100vw;
      height: 100vh;
      }
  }
`
const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
}
`
const ContentMeta = styled.div`
max-width: 874px;
`

const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0;
min-height: 56px;
`

const Player = styled.button`
display: flex;
font-size: 15px;
margin: 0 22px 0 0;
padding: 0 30px;
height: 56px;
border-radius: 4px;
align-items: center;
cursor: pointer;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249,249,249);
border: none;
color: rgb(0 0 0);
font-weight: 700;

img{
    width: 32px;

}
&:hover{
    background: rgb(178,178,178);
}

@media (max-width: 768px){
        height: 45px;
        padding: 0px 42px;
        font-size: 12px;
        margin: 0 10px 0 0;

        img{
            width: 25px;
        }
      }
`
const Trailer = styled(Player)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
padding: 0 17px;

&:hover{
    color: black;
    background: rgb(158,158,158);
}
`
const AddList = styled.div`
margin-right: 16px;
height: 44px;
display: flex;
width: 44px;
justify-content: center;
align-items: center;
background-color: #090b13;
border-radius: 50%;
border: 2px solid white;
 
cursor: pointer;

&:hover{
        background-color: rgba(0,0,0,0);
    }

span{
    background-color: rgb(249,249,249);
    display: inline-block;

    &:first-child{
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2){
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
    }
}
`

const GroupWatch = styled(AddList)`
div{
    background-color: #090b13;
    border-radius: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &:hover{
        background-color: rgba(0,0,0,0);
    }
}
` 
const SubTitles =styled.div`
color: rgb(249,249,249);
font-size: 15px;
 
min-height: 20px;

@media (max-width: 768px){
    font-size: 12px;
}
`

const Description = styled.div`
line-height: 1.2;
font-weight: 500;
font-size: 20px;
 
padding: 16px 0px;
color: rgb(249,249,249);

@media (max-width: 768px){
    font-size: 14px;
}
`
export default Detail;