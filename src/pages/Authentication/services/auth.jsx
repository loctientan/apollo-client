import BaseService from '../../../core/api/baseService/baseService';

class AuthService extends BaseService {

  adminLogin = (body) => {
    return this.post("/user/login", body);
  }

}

export default new AuthService().init("/api", false);
