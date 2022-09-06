import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  getHello(): string {
    return "Hello World!";
  }
}
