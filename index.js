function theBeatlesPlay(musicians, instruments) {
  var arr1 = []
  for(var i = 0; i > musicians.length ; i++) {
    arr1.push(`${musicians[i]} +" plays " + ${instruments[i]}`)
  }
  return arr1
}

