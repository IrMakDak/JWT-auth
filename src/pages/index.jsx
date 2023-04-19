import { useState, useEffect } from "react";
import { userService } from "../services/service";
import {
  StyledHeader,
  StyledContainer,
  StyledContentContainer,
  StyledHeader6,
} from "../styles/styledComponents";

export default function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  return (
    <StyledContentContainer>
      <StyledHeader marginTop="0px">You&apos;re logged in</StyledHeader>
      <StyledContainer>
        <StyledHeader6>Available Users</StyledHeader6>
        {users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        )}
        {!users && <div className="spinner-border spinner-border-sm"></div>}
      </StyledContainer>
    </StyledContentContainer>
  );
}
