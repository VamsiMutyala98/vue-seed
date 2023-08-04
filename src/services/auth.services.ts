import { ILoginPayload, IUserDetails } from '@/types/service.type';
import API from '../api/axios';

class AuthService {
  async login(details: ILoginPayload): Promise<IUserDetails> {
    try {
      const { data } = await API.post<IUserDetails>('auth/login', { ...details });
      if (data) {
        return data;
      }
      return {} as IUserDetails;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default AuthService;
