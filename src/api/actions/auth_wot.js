import { AUTH_WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import fillRoute from "helpers/fillRoute";

export class AuthWot {
  static async post(action, params = {}) {
    const path = fillRoute(AUTH_WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, {
      data: params
    });
    return response.data;
  }

  static async get(action, params = {}) {
    const path = fillRoute(AUTH_WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.get(path);
    return response.data;
  }

  static async get_user(params) {
    return AuthWot.get('get_user', params);
  }

  static async user_tanks(params) {
    return AuthWot.post('user_tanks', params);
  }

  static async logout(params) {
    return AuthWot.post('logout', params);
  }

  static async log_out_account(params) {
    return AuthWot.post('log_out_account', params);
  }
}
