/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

export default {
    user_data() {
      const user_name = faker.person.firstName() + " " + faker.person.lastName();
      const user_email_valid = faker.internet.email()
      const user_email_invalid = faker.person.firstName().toLowerCase() + 'gmail.com'
      const user_password_valid = faker.internet.password(8, false, /[a-zA-Z0-9]/);
      const user_password_invalid = 123;
  
      return {
        user_name,
        user_email_valid,
        user_email_invalid,
        user_password_valid,
        user_password_invalid
      };
    }
  }
