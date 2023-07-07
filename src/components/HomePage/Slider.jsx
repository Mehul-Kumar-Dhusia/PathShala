import { styled } from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 57vh;
    position: relative;
    margin-bottom: 100px;
    margin-top: 10px;
    /* border: 1px solid black; */
    /* background-color: rgb(247,249,250); */
`
const ImgContainer = styled.div`
    text-align: center;
    width: 100%;
    position: absolute;
`
const Image = styled.img`
    width: 85%;
`
const InfoContainer = styled.div`
    position: absolute;
    width: 25%;
    height: 130px ;
    border: 1px solid white;
    background-color: white;
    padding: 15px 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    top: 30px;
    left: 145px;
`

const Slider = () => {
  return (
    <Container>
        <ImgContainer>
        <Image src='https://img-c.udemycdn.com/notices/featured_carousel_slide/image/949f46a1-2aa5-48d6-88e8-fcc9bc5a49f1.png'></Image>
        </ImgContainer>
        <InfoContainer>
            <h1 style={{marginBottom : "10px" , fontWeight:"500"}}>Skills for your future</h1>
            <p style={{fontSize:"16px" , fontWeight:"400"}}>Expand your potential with a course. Log in for your special savings through tomorrow.</p>
        </InfoContainer>
    </Container>
  )
}

export default Slider
