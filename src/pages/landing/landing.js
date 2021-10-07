import React, { useState } from "react";
import { LandingContainer, FormContainer, SiteLogo, LogButton, LogForm, LogInput } from "../../styledComponents";
import { fetchUsers } from "../../utils";
import "../../App.css";

export const Landing = ({ setUser }) => {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();

  return (
    <LandingContainer>
      <SiteLogo>
      <i className="fas fa-video"></i> MYMDb
      </SiteLogo>
      <FormContainer>
        <LogForm
          onSubmit={(e) => fetchUsers(e, email, userName, pass, setUser)}
        >
          {newUser && (
            <LogInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          )}
          <LogInput
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <LogInput type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"></LogInput>
          <LogButton type="submit">{newUser ? "Sign Up" : "Log In"}</LogButton>
          <LogButton
          type="button"
          onClick={() => setNewUser(!newUser)}
        >
          {newUser ? "Log In" : "Sign Up"}
        </LogButton>
        </LogForm>
      </FormContainer>
    </LandingContainer>
  );
};