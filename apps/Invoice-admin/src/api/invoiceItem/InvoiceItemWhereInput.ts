import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvoiceItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  invoiceId?: StringNullableFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
  unitPrice?: FloatNullableFilter;
};
