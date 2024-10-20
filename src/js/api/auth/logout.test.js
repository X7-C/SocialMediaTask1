import { logout } from './logout';
import { remove } from '../../storage/index';

jest.mock('../../storage/index', () => ({
  remove: jest.fn(),
}));

test('logout function clears token and profile', () => {
  logout();
  expect(remove).toHaveBeenCalledWith('token');
  expect(remove).toHaveBeenCalledWith('profile');
});
