import faker from 'faker';
import { factory } from 'factory-girl';

import { User, Appoitment, File } from '../src/app/models';

faker.setLocale('pt_BR');
factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
