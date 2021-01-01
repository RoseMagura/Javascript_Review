var count = 0;
function cc(card) {
  // Only change code below this line
  if (card <= 6){
    count++;
  }
  else if (card == 10 || card == 'J' || card == 'Q' 
    || card == 'K' || card == 'A'
) {
    count--;
  }
  
  if (count > 0) {
    return count + ' Bet';
  } else{
  return count + ' Hold';
  }
  // Only change code above this line
}

// cc(2); cc(3); cc(4); cc(5); console.log(cc(6)); // 5 Bet
// cc(7); cc(8); console.log(cc(9)); // 0 Hold
// cc(10); cc('J'); cc('Q'); cc('K'); console.log(cc('A')); // -5 Hold
// cc(3); cc(7); cc('Q'); cc(8); console.log(cc('A')); // -1 Hold
// cc(2); cc('J'); cc(9); cc(2); console.log(cc(7)); // 1 Bet 
// cc(2); cc(2); console.log(cc(10)); // 1 Bet
cc(3); cc(2); cc('A'); cc(10); console.log(cc('K')); // -1 Hold
