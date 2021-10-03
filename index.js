exports.getNotes = (number) => {
  const notes = [5, 10, 20, 50, 100];
  const result = { 5: 0, 10: 0, 20: 0, 50: 0, 100: 0 };

  let remain = number;
  while (remain > 0) {
    notes
      .filter(note => note <= remain)
      .forEach(note => {
        if (remain >= note) {
          result[note] = result[note] + 1;
          remain = remain - note;
        }
      });
  }
  return result;
};
