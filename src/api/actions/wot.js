import { WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import fillRoute from "helpers/fillRoute";

export class Wot {
  static async post(action, params = {}) {
    const path = fillRoute(WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, {
      data: params
    });
    return response.data;
  }

  static async upload(action, params) {
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

  static async search_player(params) {
    return Wot.post('player/search', params);
  }

  static async tanks(params) {
    return Wot.post('tanks', params);
  }

  static async search_player_by_id(params) {
    return Wot.post('player/profile', params);
  }

  static async search_clan(params) {
    return Wot.post('clan/search', params);
  }

  static async search_tank(params) {
    return Wot.post('tank', params);
  }

  static async user_tanks(params) {
    return Wot.post('user_tanks', params);
  }

  static async user_tanks_achievements(params) {
    return Wot.post('user_tanks_achievements', params);
  }

  static async clans(params) {
    return Wot.post('clans/list', params);
  }

  static async exp_wn8(params) {
    return Wot.post('expected', params);
  }

  static async moe(params) {
    return Wot.post('moe', params);
  }

  static async load_players(params) {
    return Wot.post('load_players', params);
  }

  static async load_maps(params) {
    return Wot.post('maps', params);
  }

  static async map_generator(params) {
    return Wot.post('maps/generator', params);
  }
}
