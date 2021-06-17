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
    return Wot.action('search_player', params);
  }

  static async logout(params) {
    return Wot.action('logout', params);
  }

  static async tanks(params) {
    return Wot.action('tanks', params);
  }

  static async search_player_by_id(params) {
    return Wot.action('search_player_by_id', params);
  }

  static async search_clan(params) {
    return Wot.action('search_clan', params);
  }

  static async search_tank(params) {
    return Wot.action('search_tank', params);
  }

  static async user_tanks(params) {
    return Wot.action('user_tanks', params);
  }

  static async user_tanks_achievements(params) {
    return Wot.action('user_tanks_achievements', params);
  }

  static async clans(params) {
    return Wot.action('clans', params);
  }

  static async exp_wn8(params) {
    return Wot.action('expected', params);
  }

  static async load_players(params) {
    return Wot.action('load_players', params);
  }
}