export function compare(o1, o2, level = 0) {
  if (o1 === o2) return true;
  //   if ((o1 == null || o1 === "") && (o2 == null || o2 === "")) return true;

  if (level < 0) return false;
  if (level === 0) return Object.is(o1, o2);

  const type1 = typeof o1;
  const type2 = typeof o2;

  if (type1 !== type2) return false;
  if (type1 === "function") return true;
  if (type1 !== "object") return Object.is(o1, o2);
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;
    else
      for (let i = 0; i < o1.length; i++)
        if (!compare(o1[i], o2[i], level - 1)) return false;
  } else {
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;
    var p;
    for (p in o1) {
      if (!o2.hasOwnProperty(p)) return false;
      if (!compare(o1[p], o2[p], level - 1)) return false;
    }
  }

  return true;
}
