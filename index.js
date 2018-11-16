function takeANumber(currentLine, name){
var temp = currentLine.length +1;
  return `Welcome, ${name}. You are number ${temp} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else{
    var temp = katzDeliLine[0];
    katzDeliLine.shift();
    return temp;
    
  }
  }
}