import { AUTH_WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import fillRoute from "helpers/fillRoute";

export class AuthWot {
  static async action(action, params = {}) {
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

  static async logout(params) {
    return AuthWot.action('logout', params);
  }

  static async log_out_account(params) {
    return AuthWot.action('log_out_account', params);
  }
}
