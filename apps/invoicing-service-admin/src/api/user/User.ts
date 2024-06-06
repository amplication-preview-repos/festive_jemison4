import { Invoice } from "../invoice/Invoice";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invoices?: Array<Invoice>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
