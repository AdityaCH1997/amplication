/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-empty-interface, @typescript-eslint/naming-convention */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  // @ts-ignore
  CREATE_ARGS,
  // @ts-ignore
  FIND_MANY_ARGS,
  // @ts-ignore
  FIND_ONE_ARGS,
  // @ts-ignore
  UPDATE_ARGS,
  // @ts-ignore
  DELETE_ARGS,
  // @ts-ignore
  Subset,
} from "@prisma/client";

declare interface CREATE_ARGS {}
declare interface FIND_MANY_ARGS {}
declare interface FIND_ONE_ARGS {}
declare interface UPDATE_ARGS {}
declare interface DELETE_ARGS {}

declare const CREATE_ARGS_MAPPING: CREATE_ARGS;
declare const UPDATE_ARGS_MAPPING: UPDATE_ARGS;

@Injectable()
export class SERVICE {
  constructor(private readonly prisma: PrismaService) {}
  async create<T extends CREATE_ARGS>(args: Subset<T, CREATE_ARGS>) {
    // @ts-ignore
    return await this.prisma.DELEGATE.create<T>(CREATE_ARGS_MAPPING);
  }
  async findMany<T extends FIND_MANY_ARGS>(args: Subset<T, FIND_MANY_ARGS>) {
    return await this.prisma.DELEGATE.findMany(args);
  }
  async findOne<T extends FIND_ONE_ARGS>(args: Subset<T, FIND_ONE_ARGS>) {
    return await this.prisma.DELEGATE.findOne(args);
  }
  async update<T extends UPDATE_ARGS>(args: Subset<T, UPDATE_ARGS>) {
    // @ts-ignore
    return await this.prisma.DELEGATE.update<T>(UPDATE_ARGS_MAPPING);
  }
  async delete<T extends DELETE_ARGS>(args: Subset<T, DELETE_ARGS>) {
    return await this.prisma.DELEGATE.delete(args);
  }
}
