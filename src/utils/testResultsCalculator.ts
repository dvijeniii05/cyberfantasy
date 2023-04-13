export const calculateSkinType = (answers: Array<string>) => {
  let a: number = 0;
  let b: number = 0;
  let c: number = 0;
  let d: number = 0;
  answers.forEach((ansType) => {
    ansType === 'A' ? a++ : null;
    ansType === 'B' ? b++ : null;
    ansType === 'C' ? c++ : null;
    ansType === 'D' ? d++ : null;
  });
  console.log('FUNCTION_HIT', a, b, c, d);

  //logic below needs a rework

  if (a > b + c + d) {
    console.log('YOUR TYPE IS:', a);
  } else if (b > a + c + d) {
    console.log('YOUR TYPE IS:', b);
  } else if (c > a + b + d) {
    console.log('YOUR TYPE IS:', c);
  } else if (d > a + b + c) {
    console.log('YOUR TYPE IS:', d);
  }
};
