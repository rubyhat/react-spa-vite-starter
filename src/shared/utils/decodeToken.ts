import { jwtDecode } from "jwt-decode";
import { UserRole } from "../interfaces";

/**
 * Интерфейс декодированного JWT-токена.
 */
interface DecodedToken {
  /** Признак свежести токена (true - свежий, false - нет) */
  fresh: boolean;

  /** Время выдачи токена (Unix timestamp) */
  iat: number;

  /** Уникальный идентификатор токена */
  jti: string;

  /** Тип токена (например, "access" или "refresh") */
  type: TokenType;

  /** Идентификатор субъекта */
  sub: string;

  /** Время, с которого токен становится активным (Unix timestamp) */
  nbf: number;

  /** CSRF-токен для защиты от межсайтовых атак */
  csrf: string;

  /** Время истечения токена (Unix timestamp) */
  exp: number;

  /** Роль пользователя в системе */
  role_name: UserRole;

  /** Логин пользователя */
  username: string;
}

/** Тип токена */
type TokenType = "access" | "refresh";

/**
 * Декодирует JWT-токен и возвращает его содержимое.
 *
 * @param token JWT-токен, который необходимо декодировать
 * @returns Объект `DecodedToken`, если декодирование успешно, или `null`, если произошла ошибка
 */
export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Ошибка декодирования токена", error);
    return null;
  }
};
