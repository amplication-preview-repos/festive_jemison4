/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InvoiceItemService } from "../invoiceItem.service";
import { InvoiceItemCreateInput } from "./InvoiceItemCreateInput";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceItemFindManyArgs } from "./InvoiceItemFindManyArgs";
import { InvoiceItemWhereUniqueInput } from "./InvoiceItemWhereUniqueInput";
import { InvoiceItemUpdateInput } from "./InvoiceItemUpdateInput";

export class InvoiceItemControllerBase {
  constructor(protected readonly service: InvoiceItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InvoiceItem })
  async createInvoiceItem(
    @common.Body() data: InvoiceItemCreateInput
  ): Promise<InvoiceItem> {
    return await this.service.createInvoiceItem({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        invoiceId: true,
        quantity: true,
        totalPrice: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InvoiceItem] })
  @ApiNestedQuery(InvoiceItemFindManyArgs)
  async invoiceItems(@common.Req() request: Request): Promise<InvoiceItem[]> {
    const args = plainToClass(InvoiceItemFindManyArgs, request.query);
    return this.service.invoiceItems({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        invoiceId: true,
        quantity: true,
        totalPrice: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async invoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    const result = await this.service.invoiceItem({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        invoiceId: true,
        quantity: true,
        totalPrice: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInvoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput,
    @common.Body() data: InvoiceItemUpdateInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.updateInvoiceItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          invoiceId: true,
          quantity: true,
          totalPrice: true,
          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInvoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.deleteInvoiceItem({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          invoiceId: true,
          quantity: true,
          totalPrice: true,
          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
