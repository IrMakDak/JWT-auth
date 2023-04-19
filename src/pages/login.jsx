import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "../services/service";
import { messages } from "../naming";
import {
  StyledHeaderRadius,
  StyledInput,
  StyledContainer,
  StyledErrorMessage,
  StyledButton,
  StyledContentContainer,
} from "../styles/styledComponents";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(messages.USERNAME_REQUIRED),
    password: Yup.string().required(messages.PASSWORD_REQUIRED),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch((error) => {
        setError("apiError", { message: error });
      });
  }

  return (
    <StyledContentContainer>
      <StyledHeaderRadius marginBottom="0px">
        Username: User
        <br />
        Password: User
      </StyledHeaderRadius>
      <div className="card">
        <StyledHeaderRadius bg="bg-light">Login</StyledHeaderRadius>
        <StyledContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <StyledInput
                marginTop="0"
                name="username"
                type="text"
                placeholder="User Name"
                {...register("username")}
                className={`${errors.username ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>
            <div className="form-group">
              <StyledInput
                name="password"
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`${errors.password ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <StyledButton disabled={formState.isSubmitting}>
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Login
            </StyledButton>
            {errors.apiError && (
              <StyledErrorMessage>
                {errors.apiError?.message}
              </StyledErrorMessage>
            )}
          </form>
        </StyledContainer>
      </div>
    </StyledContentContainer>
  );
}
