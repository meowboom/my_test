export const changeTitleForLink = (title: string) =>
  title
    .toLowerCase()
    .split("")
    .map((sym) => {
      if (sym === " ") return "-";
      return sym;
    })
    .join("");
