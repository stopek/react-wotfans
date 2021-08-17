import { AUTH_WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import createUrlParams, { CreateUrlParamsType } from "helpers/createUrlParams";
import fillRoute from "helpers/fillRoute";

export class AuthWot {
  static async post(action: string, params: CreateUrlParamsType[]) {
    const path = fillRoute(AUTH_WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, {
      data: params
    });

    return response.data;
  }

  static async get(action: string, params: CreateUrlParamsType[]) {
    const path = fillRoute(AUTH_WOT_ENDPOINT, {
      action: action
    });

    const outputPath = createUrlParams(path, params);
    const response = await instance.get(outputPath);

    return response.data;
  }

  static async get_user(params: CreateUrlParamsType[]) {
    return AuthWot.get('get_user', params);
  }

  static async user_tanks(params: CreateUrlParamsType[]) {
    return AuthWot.post('user_tanks', params);
  }

  static async logout(params: CreateUrlParamsType[]) {
    return AuthWot.post('logout', params);
  }

  static async log_out_account(params: CreateUrlParamsType[]) {
    return AuthWot.post('log_out_account', params);
  }
}
