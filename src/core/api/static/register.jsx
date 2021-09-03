import BaseService from '../baseService/baseService';
import { CURRENT_ENV } from "../configs/env";

class RegisterService extends BaseService {
    postRegister = (params) =>{
        return this.post(CURRENT_ENV.API.REGISTER, params);
    }
}
export default new RegisterService().init("",false);