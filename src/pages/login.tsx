import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "../services/service";
import { messages, IRequestBody, Paths, IUser } from "../naming";
import {
  StyledHeaderRadius,
  StyledInput,
  StyledContainer,
  StyledErrorMessage,
  StyledButton,
  StyledContentContainer,
} from "../styles/styledComponents";

interface IFormValues extends IUser {
  apiError: {
    message?: string;
    ref?: Element;
  };
  errors: {
    username?: {
      message: string;
    };
    password?: string;
  };
}

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (userService.userValue) {
      router.push(Paths.HOME);
    }
  }, []);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(messages.USERNAME_REQUIRED),
    password: Yup.string().required(messages.PASSWORD_REQUIRED),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setError, formState } =
    useForm<IFormValues>(formOptions);
  const errors = formState.errors;

  function onSubmit({ username, password }: IRequestBody) {
    return userService
      .login(username, password)
      .then(() => {
        const returnUrl = (router.query.returnUrl as string) || Paths.HOME;
        router.push(returnUrl);
      })
      .catch((error) => {
        setError("apiError", { message: error });
      });
  }

  return (
    <StyledContentContainer>
      <div className="card">
        <StyledHeaderRadius marginTop="0px">Login</StyledHeaderRadius>
        <StyledContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              marginTop="0"
              type="text"
              placeholder="User Name"
              {...register("username")}
              className={`${errors.username ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
            <StyledInput
              type="password"
              placeholder="Password"
              {...register("password")}
              className={`${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
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
