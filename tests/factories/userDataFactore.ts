import { faker } from "@faker-js/faker";
import { CreateUserData } from "../../src/services/userService.js";

export default function userDataFactory(): CreateUserData {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}