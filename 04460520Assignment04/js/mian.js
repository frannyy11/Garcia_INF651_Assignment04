
// function named helloWorld()

function helloWorld() {

    //return Hello World!
    
    return "Hello World!";
    
    }
    
    //function named greeting
    
    function greeting(name) {
    
    return "Hello, "+name;
    
    }
    
    //function named divisibleByThree
    
    function divisibleByThree(number) {
    
    if(number%3==0)
    
    {
    
    //when number is divisible by 3 then
    
    return true;
    
    }
    
    else{
    
    return false;
    
    }
    
    }
    
    //function named averageAge
    
    function averageAge(num1, num2,num3) {
    
    //this variable store average
    
    var average=0;
    
    if(num3==null)
    
    {
    
    //when num3 is null then
    
    return Math.round((num1+num2)/2);
    
    }
    
    else if(num2==null)
    
    {
    
    //when num2 is null then
    
    return Math.round((num1+num3)/2);
    
    }
    
    else if(num1==null)
    
    {
    
    //when num1 is null then
    
    return Math.round((num1+num2)/2);
    
    }
    
    else{
    
    //return average of three numbers
    
    return Math.round((num1+num2+num3)/3);
    
    }
    
    }
    
    //a function named leetSpeak
    
    function leetSpeak(word) {
    
    //using for loop
    
    for(var x=0;x<word.length;x++)
    
    {
    
    //checking each character from word
    
    if(word[x]=="e")
    
    {
    
    //when character is e lowercase then replace with 3
    
    word=word.replace(word[x],"3");
    
    }
    
    else if(word[x]=="a")
    
    {
    
    //when character is e lowercase then replace with 4
    
    word=word.replace(word[x],"4");
    
    }
    
    }
    
    return word;
    
    }
    
    //function calls
    
    console.log("helloWorld() : "+helloWorld());//call function helloWorld()
    
    console.log("greeting('')):"+greeting(""));//call function greeting()
    
    console.log("divisibleByThree(5) : "+divisibleByThree(5));//call function divisibleByThree()
    
    console.log("averageAge(12,15):"+averageAge(12,15));//call function averageAge()
    
    console.log("averageAge(10,12,15):"+averageAge(10,12,15));//call function averageAge()
    
    console.log("leetSpeak('leet') : "+leetSpeak("leet"));//call function leetSpeak()
    
    console.log("leetSpeak('speak') : "+leetSpeak("speak"));//call function leetSpeak()
    
    