function whatCentury(year)
{
  const numYear = parseInt(year, 10);

  const century = Math.ceil(numYear / 100);

  let suffix = 'th';
  
  if (century % 100 !== 11 && century % 10 === 1) 
  {
    suffix = 'st';
  } 
  else if (century % 100 !== 12 && century % 10 === 2) 
  {
    suffix = 'nd';
  } 
  else if (century % 100 !== 13 && century % 10 === 3) 
  {
    suffix = 'rd';
  }
  
  return century + suffix;
}