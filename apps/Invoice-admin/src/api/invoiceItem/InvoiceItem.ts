export type InvoiceItem = {
  createdAt: Date;
  description: string | null;
  id: string;
  invoiceId: string | null;
  quantity: number | null;
  totalPrice: number | null;
  unitPrice: number | null;
  updatedAt: Date;
};
