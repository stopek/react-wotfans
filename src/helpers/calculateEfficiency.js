export default function calculateEfficiency(
  tier = '',
  battles = '',
  damage = '',
  frags = '',
  spotted = '',
  capture_points = '',
  dropped_points = ''
) {
  tier = parseFloat(tier);
  battles = parseFloat(battles);

  const avg = (from, total) => {
    return parseFloat(from) / parseFloat(total);
  }

  const avg_damage = avg(damage, battles);
  const avg_frags = avg(frags, battles);
  const avg_capture_points = avg(capture_points, battles);
  const avg_dropped_points = avg(dropped_points, battles);
  const avg_spotted = avg(spotted, battles);

  return (
    (avg_damage * (10 / (tier + 2)) * (0.23 + 2 * tier / 100)) +
    (avg_frags * 250) +
    (avg_spotted * 150) +
    (Math.log(avg_capture_points + 1) / Math.log(1.732) * 150) +
    (avg_dropped_points * 150)
  ).toFixed(2);
}
