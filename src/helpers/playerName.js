export default function playerName(name) {
  const pattern = /(.*)([- ])([^- ]*$)/;

  return name.replace(pattern, "$1");
}
