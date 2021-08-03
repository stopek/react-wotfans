import { wn8Ranges } from "app/settings";
import { valueFormat } from "helpers/priceFormat";
import { SearchTankFormInterface } from "interfaces/form/SearchTankFormInterface";
import { WithTankRelationInterface } from "interfaces/WithTankRelationInterface";

export const getTranslationByTankType = (type: string) => {
  switch (type) {
    case 'mediumTank':
      return 'type.mediumTank';
    case 'heavyTank':
      return 'type.heavyTank';
    case 'lightTank':
      return 'type.lightTank';
    case 'AT-SPG':
      return 'type.td';
    case 'SPG':
      return 'type.artillery';
    default:
      return type;
  }
}

export const getDataToChar = <T>(data: T[], y_maps: string[]) => {
  type TempDataType = Array<{ x: string, y: number }>;

  let output: Array<{
    id: string,
    key: string,
    data: TempDataType
  }> = [];

  y_maps.forEach((y_map) => {
    let temp_data: TempDataType = [];
    let exists: string[] = [];

    data.forEach((item: T) => {
      if (!exists.includes(item?.update_owner?.version)) {
        temp_data.push({ x: item?.update_owner?.version, y: valueFormat(item[y_map]) });
        exists.push(item?.update_owner?.version);
      }
    });

    output.push({ id: y_map, key: y_map, data: temp_data });
  });

  return output;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const getTiersFromTanksStats = (tanks_stats = []) => {
  tanks_stats = Object.values(tanks_stats);
  if (!tanks_stats?.length) {
    return [];
  }

  let tiers = [];
  tanks_stats.forEach((tank_stat) => {
    tiers.push(tank_stat.tank.tier);
  });

  tiers = tiers.filter(onlyUnique).sort(function (a, b) {
    return a - b;
  });

  const key_value = [];
  tiers.forEach((tier) => {
    key_value.push({ label: tier, value: tier });
  });

  return key_value;
}

export const tanksFilters = (tanks: WithTankRelationInterface[], filters: SearchTankFormInterface) => {
  tanks = Object.values(tanks);

  if (!!filters?.tank_name) {
    tanks = tanks.filter(
      (tank) => !filters?.tank_name && tank?.tank?.name.toLowerCase().includes(filters?.tank_name?.toLowerCase())
    );
  }

  type FilteredType = keyof SearchTankFormInterface

  tanks = tanks.filter((tank) => {
    let can_be = true;
    const filterBy: FilteredType = ['tier', 'nation', 'type'];

    filterBy.forEach((v) => {
      if (filters[v]?.length > 0) {
        if (!filters[v].includes(tank?.tank[v])) {
          can_be = false;
        }
      }
    });

    return can_be;
  });

  if (!!filters?.tier) {
    tanks = tanks.filter((tank) => filters?.tier && filters?.tier.includes(tank?.tank?.tier));
  }

  if (!!filters?.premium) {
    tanks = tanks.filter((tank) => (
      (filters?.premium === 'only_premium' && tank?.tank?.is_premium) ||
      (filters?.premium === 'without_premium' && !tank?.tank?.is_premium)
    ))
  }

  if (!!filters?.battles) {
    tanks = tanks.filter((tank) => (tank.battles >= filters?.battles[0] && tank.battles <= filters?.battles[1]));
  }

  if (!!filters?.wn8) {
    const all_wn8 = wn8Ranges;
    const filter_wn8 = filters?.wn8;

    tanks = tanks.filter((tank) => {
      let result = false;
      all_wn8.forEach((wn, key) => {
        const next = all_wn8[key + 1]?.value ?? 999999;

        if (filter_wn8.includes(wn.value) && tank.wn8 >= wn.value && tank.wn8 < next) {
          result = true;
        }
      });

      return result;
    });
  }

  return tanks;
}
