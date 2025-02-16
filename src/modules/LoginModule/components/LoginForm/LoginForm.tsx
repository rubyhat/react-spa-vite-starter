import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  LoginFormDataTypes,
  LoginFormValidationSchema,
} from "../../validations";
import { loginFormStyles } from "./styles";
import { LoginFormTextField } from "../LoginFormTextField";

export const LoginForm = () => {
  const methods = useForm<LoginFormDataTypes>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: { login: "", password: "" },
  });
  const { handleSubmit } = methods;

  const handleFormSubmit = (data: LoginFormDataTypes) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit, (errors) => {
          console.error("Ошибки валидации:", errors);
          toast.error("Проверьте введенные данные");
        })}
        sx={loginFormStyles}
      >
        <Typography component="h1" variant="h4">
          Аутентификация
        </Typography>
        <LoginFormTextField
          name="login"
          label="Логин"
          placeholder="Введите логин"
        />
        <LoginFormTextField
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Войти в систему
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
