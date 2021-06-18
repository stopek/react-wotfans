import store from "app/store";
import "assets/styles/default.css";
import "assets/styles/fonts.css";
import "assets/styles/scrollbar.css";

import "normalize.css";
import React from "react";
import { Provider } from "react-redux";
import RouterComponent from "router";

var json_data = {
  "vehicle": {
    "info": {
      "id": 32289,
      "nation": "usa",
      "name": "A93_T7_Combat_Car_Fox",
      "user_string": "Fox T7 Combat Car",
      "description": "A light wheeled caterpillar vehicle with machine guns was developed for the U.S. cavalry. Trials of the first prototype started in April 1937 and continued until 1939. However, the T7 was later discontinued in favor of track-type vehicles.<br>This Premium vehicle has a 70% bonus XP earn and a 30% bonus Silver earn.",
      "type_slug": "lightTank",
      "kinds": "wotx_limited,retiredTank,premium",
      "level": 2,
      "price": 1,
      "is_premium": true,
      "in_shop": false,
      "xp_cost": 0,
      "alliance": null,
      "era": "wwii",
      "url": "/en/encyclopedia/vehicles/usa/A93_T7_Combat_Car_Fox/",
      "image_url": "https://wxpcdn-cbprodretail.gcdn.co/dcont/tankopedia/usa/A93_T7_Combat_Car_Fox.png",
      "image_contour_url": "https://wxpcdn-cbprodretail.gcdn.co/static/71efdfd/tankopedia/img/common_vehicle_contour.svg",
      "image_preview_url": "https://wxpcdn-cbprodretail.gcdn.co/dcont/tankopedia/usa/A93_T7_Combat_Car_Fox_preview.png",
      "image_profile_url": "https://wxpcdn-cbprodretail.gcdn.co/dcont/tankopedia/usa/A93_T7_Combat_Car_Fox_profile.png",
      "image_techtree_url": "https://wxpcdn-cbprodretail.gcdn.co/dcont/tankopedia/usa/tech_tree/A93_T7_Combat_Car_Fox.png"
    },
    "data": {
      "crew": ["gunner", "driver", "radioman", "loader"],
      "speed": { "forward": 56, "backward": 20 },
      "armory": [16, 16, 13, 6, 10, 16, 0, 16, 16, 6, 16, 10],
      "radios": {
        "SCR_210A": {
          "index": 0,
          "level": 4,
          "price": 1980,
          "weight": 80,
          "distance": 325,
          "is_premium": false,
          "max_health": 110,
          "user_string": "SCR 210",
          "stock": true
        }
      },
      "weight": 5085,
      "chassis": {
        "Chassis_T7_Combat_Car_Fox": {
          "index": 0,
          "level": 2,
          "price": 600,
          "armory": [6, 6],
          "weight": 3500,
          "max_load": 12500,
          "is_premium": false,
          "max_health": 60,
          "user_string": "T7 Combat Car",
          "rotation_speed": 49,
          "terrain_resistance": [1.2, 1.5, 3.4],
          "stock": true
        }
      },
      "engines": {
        "Continental_W-670-9A": {
          "index": 0,
          "level": 3,
          "power": 262,
          "price": 8100,
          "weight": 256,
          "is_premium": false,
          "max_health": 100,
          "fire_chance": 0.2,
          "user_string": "Continental W-670-9A",
          "stock": true
        }
      },
      "turrets": {
        "Turret_1_T7_Combat_Car_Fox": {
          "guns": {
            "_12.7mm_MG_HB_M2_A": {
              "index": 0,
              "level": 1,
              "price": 2000,
              "shots": {
                "_12.7mm_AP_M2": {
                  "index": 0,
                  "price": 1,
                  "damage": 8,
                  "caliber": 12.7,
                  "is_premium": false,
                  "user_string": "AP M2",
                  "piercing_power": 27
                }
              },
              "armory": [],
              "weight": 38,
              "gun_rate": 103.51,
              "max_ammo": 1350,
              "elevation": 40,
              "depression": 15,
              "is_premium": false,
              "max_health": 30,
              "aiming_time": 1.7,
              "reload_time": 2.5,
              "user_string": ".50 caliber MG HB M2",
              "gun_rate_mod": 20.7,
              "rotation_speed": 44,
              "shots_per_clip": 50,
              "shot_dispersion_radius": 0.53,
              "turrets": ["Turret_1_T7_Combat_Car_Fox"],
              "stock": true
            }
          },
          "index": 0,
          "level": 2,
          "price": 600,
          "armory": [13, 13, 13],
          "weight": 800,
          "is_premium": false,
          "max_health": 30,
          "user_string": "T7 Combat Car",
          "vision_radius": 280,
          "rotation_speed": 31,
          "stock": true
        }
      },
      "xp_bonus": 0.7,
      "fuelTanks": { "Small": { "index": 0, "price": 100, "weight": 200, "is_premium": false, "max_health": 100 } },
      "max_health": 120,
      "invisibility": { "still": 0.267, "moving": 0.207 },
      "silver_bonus": 0.3,
      "free_xp_bonus": "0.05",
      "primary_armory": [16, 13, 6],
      "is_fake_turrets": false,
      "battle_level_max": 2,
      "unlockPointsData": {}
    },
    "tree": [],
    "unlock_progression": {
      "engines": [{ "level": 0, "name": "Continental_W-670-9A", "index": 0 }],
      "chassis": [{ "level": 0, "name": "Chassis_T7_Combat_Car_Fox", "index": 0 }],
      "radios": [{ "level": 0, "name": "SCR_210A", "index": 0 }],
      "guns": [{
        "level": 0,
        "name": "_12.7mm_MG_HB_M2_A",
        "index": 0,
        "turret_names": ["Turret_1_T7_Combat_Car_Fox"]
      }],
      "turrets": [{ "level": 0, "name": "Turret_1_T7_Combat_Car_Fox", "index": 0, "gun_names": ["_12.7mm_MG_HB_M2_A"] }]
    },
    "guns": {
      "_12.7mm_MG_HB_M2_A": {
        "index": 0,
        "level": 1,
        "price": 2000,
        "shots": {
          "_12.7mm_AP_M2": {
            "index": 0,
            "price": 1,
            "damage": 8,
            "caliber": 12.7,
            "is_premium": false,
            "user_string": "AP M2",
            "piercing_power": 27
          }
        },
        "armory": [],
        "weight": 38,
        "gun_rate": 103.51,
        "max_ammo": 1350,
        "elevation": 40,
        "depression": 15,
        "is_premium": false,
        "max_health": 30,
        "aiming_time": 1.7,
        "reload_time": 2.5,
        "user_string": ".50 caliber MG HB M2",
        "gun_rate_mod": 20.7,
        "rotation_speed": 44,
        "shots_per_clip": 50,
        "shot_dispersion_radius": 0.53,
        "turrets": ["Turret_1_T7_Combat_Car_Fox"],
        "stock": true
      }
    }
  },
  "nations": {
    "ussr": "U.S.S.R.",
    "usa": "U.S.A.",
    "france": "France",
    "germany": "Germany",
    "uk": "U.K.",
    "japan": "Japan",
    "china": "China",
    "czech": "Czechoslovakia",
    "sweden": "Sweden",
    "poland": "Poland",
    "merc": "Mercenaries",
    "italy": "Italy",
    "xn": "Miscellaneous"
  },
  "vehicle_types": {
    "lightTank": "Light Tank",
    "mediumTank": "Medium Tank",
    "heavyTank": "Heavy Tank",
    "AT-SPG": "Tank Destroyer",
    "SPG": "Artillery"
  },
  "vehicle_limits": {
    "damage": [8, 2250],
    "enginePower": [38.0, 1750.0],
    "shotDispersionRadius": [0.24, 1.2],
    "aimingTime": [1.14285714285714, 8.8],
    "armorPenetration": [10.0, 999.0],
    "turretTraverseSpeed": [8.0, 125.0],
    "rateOfFire": [1.17, 199.45],
    "gun": [7.92, 240.0],
    "speedLimit": [12.0, 80.0],
    "viewRange": [240, 420],
    "traverseSpeed": [12.0, 1350.0],
    "ammunition": [12, 1800]
  }
};


function Root() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  )
}

export default Root;