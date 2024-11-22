function dirReduc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    currentDir = arr[i];
    nextDir = arr[i + 1];

    if (
      (currentDir === "NORTH" && nextDir === "SOUTH") ||
      (currentDir == "SOUTH" && nextDir == "NORTH") ||
      (currentDir === "EAST" && nextDir === "WEST") ||
      (currentDir == "WEST" && nextDir == "EAST")
    ) {
      arr.splice(i, 2);
      return dirReduc(arr);
    }
  }
  return arr;
}
