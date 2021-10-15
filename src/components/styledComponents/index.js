import styled from "styled-components";
// import "../App.css";

export const LogButton = styled.button`
width: 300px;
height: 5vh;
margin: 5px;
background: var(--secondary);
font-weight: 700;
font-size: 16px;
color: var(--primary);
border: none;
border-radius: 5px;

&:hover { background-color: var(--tertiary); color: var(--white) }
`;

export const LogForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 100%;
`;

export const LogInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 5px;
`;


export const PageContainer = styled.div`
  width: 100vw;
  height: 85vh;
`;

export const LandingContainer = styled.div`
  font-family: sans-serif;
  background-color: var(--primary);
  background-image: url(/src/images/HealthyFood_07.svg);
  color: var(--white);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SiteLogo = styled.div`
  font-weight: 700;
  font-size: 50px;
  margin: 10px;
  
`;

export const FormContainer = styled.div`
  width: 350px;
  /* background-color: var(--white); */
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;


export const SettingsContainer = styled.div`
  color: var(--primary);
  width: 100vw;
  height: 85vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const FeaturedContainer = styled.div`
  width: 100vw;
  height: 85vh;
`;