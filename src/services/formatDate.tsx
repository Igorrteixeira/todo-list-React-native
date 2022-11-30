export const FormatDateBr = (date:string) => {
  console.log(date)
  let newDate = new Date(date);
  const day = (`00${newDate.getDate()}`).slice(-2)
  const month = (`00${(newDate.getMonth() + 1)}`).slice(-2)
  // const year = newDate.getFullYear(); 
  const hour = (`00${(newDate.getHours())}`).slice(-2)
  const min = (`00${(newDate.getMinutes())}`).slice(-2)
  return `${hour}:${min} - ${day}/${month}`
};