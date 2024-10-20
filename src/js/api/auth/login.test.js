import { login } from './login';
import { save, load } from '../../storage/index';

jest.mock('../../storage/index', () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'fakeToken', name: 'Mak Bat' }),
  })
);

test('login function saves token and profile', async () => {
  load.mockReturnValue('fakeToken');

  const email = 'makbat00180@stud.noroff.no';
  const password = 'Tester1234';

  await login(email, password);

  expect(save).toHaveBeenCalledWith('token', 'fakeToken');
  expect(save).toHaveBeenCalledWith('profile', { name: 'Mak Bat' });
});
