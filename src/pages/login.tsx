import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "../services/service";
import { Link } from "../components/Link";
import { messages, IRequestBody, Paths, IUser, srcStore } from "../naming";
import { StyledErrorMessage, StyledButton } from "../styles/styledMain";
import { useDispatch } from "react-redux";
import { setUsername, signin } from "./appSlice";
import {
  StyledAuthorizationContainer,
  StyledAnalyticsContainer,
  StyledLoginPage,
  StyledTitle,
  StyledEntrance,
  StyledInput,
  StyledForm,
  StyledAdditionalProps,
  StyledCheckbox,
  StyledLabel,
  StyledLink,
  StyledLogo,
  StyledDashboard,
  StyledCalls,
  StyledAnalyticsLabel,
} from "../styles/styledLoginPage";

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (userService.userValue) {
      router.push(Paths.AUTH);
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
      .then((user) => {
        const userInfo = {
          firstName: user.firstName,
          secondName: user.lastName,
        };
        const returnUrl = (router.query.returnUrl as string) || Paths.HOME;
        router.push(returnUrl);
        dispatch(setUsername(userInfo));
        console.log("dispached");
        dispatch(signin());
      })
      .catch((error) => {
        setError("apiError", { message: error });
      });
  }

  return (
    <StyledLoginPage>
      <StyledAuthorizationContainer>
        <StyledEntrance>
          <Link href={Paths.HOME}>
            <StyledLogo src={`${srcStore}/Logo-expanded.svg`} alt="Logo" />
          </Link>
          <StyledTitle>Вход</StyledTitle>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            <StyledAdditionalProps>
              <StyledLabel>
                <StyledCheckbox type="checkbox" />
                Запомнить меня?
              </StyledLabel>

              <StyledLink href="#">Забыли пароль?</StyledLink>
            </StyledAdditionalProps>
            <StyledButton disabled={formState.isSubmitting}>
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Войти
            </StyledButton>
            {errors.apiError && (
              <StyledErrorMessage>
                {errors.apiError?.message}
              </StyledErrorMessage>
            )}
          </StyledForm>
        </StyledEntrance>
      </StyledAuthorizationContainer>

      <StyledAnalyticsContainer>
        <StyledCalls src={`${srcStore}/Calls.png`} alt="calls" />
        <StyledDashboard src={`${srcStore}/Dashboard.png`} alt="dashboard" />
        <StyledAnalyticsLabel>
          <h6>Вся аналитика в одном кабинете</h6>
          <p>
            Теперь просматривать аналитику и создавать отчёты можно без нашей
            помощи
          </p>
        </StyledAnalyticsLabel>
      </StyledAnalyticsContainer>
    </StyledLoginPage>
  );
}
