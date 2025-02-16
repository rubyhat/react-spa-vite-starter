import { Controller, useFormContext } from "react-hook-form";
import { Box, FormHelperText, TextField } from "@mui/material";
import { LoginFormDataTypes } from "../../validations";

interface LoginFormTextFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

export const LoginFormTextField = ({
  name,
  label,
  placeholder,
  type,
}: LoginFormTextFieldProps) => {
  const {
    formState: { errors },
  } = useFormContext<LoginFormDataTypes>();

  return (
    <Box>
      <Controller
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            sx={{ width: 1 }}
            placeholder={placeholder}
          />
        )}
      />
      <FormHelperText error>{errors.login?.message}</FormHelperText>
    </Box>
  );
};
