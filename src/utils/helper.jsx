export const compareName = (next, prev) => {
  const name1 = next.title.split(" ").join("").toLowerCase();
  const name2 = prev.title.split(" ").join("").toLowerCase();
  let comp = 0;
  if (name1 > name2) comp = 1;
  if (name1 < name2) comp = -1;
  return comp;
};
