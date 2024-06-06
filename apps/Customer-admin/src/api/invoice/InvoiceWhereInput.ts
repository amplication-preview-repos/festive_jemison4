import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceItems?: JsonFilter;
  issueDate?: DateTimeNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  userId?: StringNullableFilter;
};
