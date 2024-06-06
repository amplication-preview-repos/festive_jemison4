import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  invoices?: InputJsonValue;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
