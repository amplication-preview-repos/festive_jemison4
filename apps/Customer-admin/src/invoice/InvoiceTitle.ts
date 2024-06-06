import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "userId";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.userId?.toString() || String(record.id);
};
