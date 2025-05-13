import { AxiosError } from "axios";

import { Alert } from "@mui/material";
import { ApiErrorResponse } from "../../interfaces";

/**
 * Пропсы для компонента `AxiosErrorAlertMessage`.
 */
interface AxiosErrorAlertMessageProps {
  /** Ошибка, полученная от Axios */
  error: AxiosError<ApiErrorResponse>;
}

/**
 * Компонент отображения ошибки, возникшей при запросе Axios.
 *
 * - Показывает сообщение об ошибке и код ошибки, если он есть.
 * - Логирует ошибку в консоль (в будущем может быть добавлен клиентский трекер, например, Sentry).
 *
 * @param {AxiosErrorAlertMessageProps} props Пропсы компонента.
 * @returns React-компонент алерта с сообщением об ошибке.
 */
export const AxiosErrorAlertMessage = ({
  error,
}: AxiosErrorAlertMessageProps) => {
  const message = error.response?.data?.error?.message || error.message;
  const code = error.response?.data?.error?.code || 500;

  // todo: в будущем добавить какой-нибудь трекер ошибок на стороне клиента, например Sentry
  // eslint-disable-next-line no-console
  console.error(message, "Code: ", code);

  return (
    <Alert severity="error">
      Ошибка получения данных с сервера.{" "}
      <strong>
        {message} | Code: {code}
      </strong>
    </Alert>
  );
};
