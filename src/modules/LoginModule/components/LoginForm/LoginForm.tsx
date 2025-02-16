import toast from "react-hot-toast";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  LoginFormDataTypes,
  LoginFormValidationSchema,
} from "../../validations";
import { loginFormStyles } from "./styles";

export const LoginForm = () => {
  const methods = useForm<LoginFormDataTypes>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: { login: "", password: "" },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

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
        <Box>
          <Controller
            name="login"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Введите логин"
                label="Логин"
                sx={{ width: 1 }}
              />
            )}
          />
          <FormHelperText error>{errors.login?.message}</FormHelperText>
        </Box>
        <Box>
          <Controller
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Введите пароль"
                type="password"
                label="Пароль"
                sx={{ width: 1 }}
              />
            )}
          />

          <FormHelperText error>{errors.password?.message}</FormHelperText>
        </Box>
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
