/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

export const user_data = {
    user_name: faker.person.firstName() + " " + faker.person.lastName(),
    user_email: faker.internet.email(),
    user_password_valid: faker.internet.password(8, false, /[a-zA-Z0-9]/),
    user_password_invalid: faker.internet.password(5, false, /[a-zA-Z0-9]/)
}


