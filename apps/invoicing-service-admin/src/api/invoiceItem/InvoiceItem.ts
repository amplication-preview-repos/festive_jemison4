import { Invoice } from "../invoice/Invoice";

export type InvoiceItem = {
  createdAt: Date;
  description: string | null;
  id: string;
  invoice?: Invoice | null;
  quantity: number | null;
  totalPrice: number | null;
  unitPrice: number | null;
  updatedAt: Date;
};
