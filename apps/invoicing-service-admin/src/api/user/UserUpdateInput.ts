import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  invoices?: InputJsonValue;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
