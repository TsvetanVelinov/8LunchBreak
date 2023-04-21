function lunchBreak (input){

    let movieName = input[0];
    let epTime = Number (input[1]);
    let breakTime = Number (input[2]);

    let lunchTime = breakTime * 1/8 ;
    let restTime = breakTime * 1/4 ;

    let leftTime = breakTime - lunchTime - restTime ;
    let difference = Math.abs(epTime - leftTime);



    if (leftTime >= epTime){

    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(difference)} minutes free time.`)

} else { 
    
    console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(difference)} more minutes.`);

}
}

lunchBreak (["Game of Thrones","60","96"])

lunchBreak (["Teen Wolf","48","60"])



