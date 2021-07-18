import { WOT_ENDPOINT } from "api/endpoints";
import instance from "api/service";
import fillRoute from "helpers/fillRoute";

export class Wot {
  static async action(action, params = {}) {
    const path = fillRoute(WOT_ENDPOINT, {
      action: action
    });

    const response = await instance.post(path, {
      data: params
    });
    return response.data;
  }

  static async search_player(params) {
    return Wot.action('player/search', params);
  }

  static async tanks(params) {
    return Wot.action('tanks', params);
  }

  static async search_player_by_id(params) {
    return Wot.action('player/profile', params);
  }

  static async search_clan(params) {
    return Wot.action('clan/search', params);
  }

  static async search_tank(params) {
    return Wot.action('tank', params);
  }

  static async user_tanks(params) {
    return Wot.action('user_tanks', params);
  }

  static async user_tanks_achievements(params) {
    return Wot.action('user_tanks_achievements', params);
  }

  static async upload(params) {
    const path = fillRoute(WOT_ENDPOINT, {
      action: 'upload'
    });

    const response = await instance.post(path, params, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    });

    return response.data;
  }

  static async clans(params) {
    return Wot.action('clans/list', params);
  }

  static async exp_wn8(params) {
    return Wot.action('expected', params);
  }

  static async moe(params) {
    return Wot.action('moe', params);
  }

  static async load_players(params) {
    return Wot.action('load_players', params);
  }

  static async load_maps(params) {
    return Wot.action('maps', params);
  }

  static async map_generator(params) {
    return Wot.action('maps/generator', params);
  }
}
