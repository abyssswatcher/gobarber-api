import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import truncate from '../util/truncate';
import User from '../../src/app/models/User';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app).post('/users').send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.create();

    const response = await request(app).post('/users').send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual(
      'Email already exists, try another one.'
    );
  });

  it('should encrypt user password when new user is created', async () => {
    const user = await factory.create({
      password: 'strongPassword!@#$ pindamonhagaba',
    });

    const isEncrypted = user.compareHash('strongPassword!@#$ pindamonhagaba');

    expect(isEncrypted).toBeTruthy();
  });
});
