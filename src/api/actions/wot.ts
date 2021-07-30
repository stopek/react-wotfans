import { WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import fillRoute from "helpers/fillRoute";

export class Wot {
  static async post(action: string, params: any = {}) {
    const path = fillRoute(WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, {
      data: params
    });
    return response.data;
  }

  static async upload(action: string, params: any = {}) {
    const path = fillRoute(WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, params, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    });

    return response.data;
  }

  static async search_player(params: any) {
    return Wot.post('player/search', params);
  }

  static async tanks(params: any) {
    return Wot.post('tanks', params);
  }

  static async search_player_by_id(params: any) {
    return Wot.post('player/profile', params);
  }

  static async search_clan(params: any) {
    return Wot.post('clan/search', params);
  }

  static async search_tank(params: any) {
    return Wot.post('tank', params);
  }

  static async user_tanks(params: any) {
    return Wot.post('user_tanks', params);
  }

  static async user_tanks_achievements(params: any) {
    return Wot.post('user_tanks_achievements', params);
  }

  static async clans(params: any) {
    return Wot.post('clans/list', params);
  }

  static async exp_wn8(params: any) {
    return Wot.post('expected', params);
  }

  static async moe(params: any) {
    return Wot.post('moe', params);
  }

  static async load_players(params: any) {
    return Wot.post('load_players', params);
  }

  static async load_maps(params: any) {
    return Wot.post('maps', params);
  }

  static async map_generator(params: any) {
    return Wot.post('maps/generator', params);
  }
}
