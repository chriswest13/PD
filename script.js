const RPGlocation = [ 
    "who is from Hogwarts School of Witchcraft and Wizardry",
    "who lives in Willy Wonkas Factory",
    "who is from the Emerald City",
    "who is from a distant Galaxy",
    "who lives in Gotham City",
    "who lives in Xaviers Academy for gifted children",
    "who is from Asgard",
    "who is from Neverland"
    ]
    
    const RPGcharacter = [
    "THe Absent-Minded Professor who is a clueless absent-minded scientific genius",
    "THe all Loving Hero who loves everyone and will suffer for the sins of their loved ones",
    "Anti-Hero who is driven by pursuit for power, sex, money, control, or particular vices",
    "THe Bad Boy who is a macho loner that doesnt care that hes bad",
    "The Black Knight who is an evil fighter or antagonist",
    "The boss of everyone who is controlling, competitive, stubborn, aggressive, and always call the shots",
    "The Boy Next Door who is the average nice guy that does everything in the right",
    "The Career Criminal who commits high stakes crime and is often smart and highly skilled",
    ]
    
    
    
    const RPGimage = [
      "http://www.heromachine.com/wp-content/uploads/2017/06/fa724f241796b06b26de0c6f1bcb1bc6.jpg",
      "http://www.heromachine.com/wp-content/uploads/2017/06/1a3b784f009047d3213235de843607ae.jpg",
      "https://www.drivethrurpg.com/images/6251/160895.jpg",
      "https://i.pinimg.com/564x/64/c5/fb/64c5fbf1b2e970c2de1005ab540a3cf8.jpg" 
     
    ]
    
     
     
      
    
    function GEN(){
        var x = Math.floor(Math.random()*RPGlocation.length);
        document.getElementById("displayLocation").innerHTML = RPGlocation[x];
        var y = Math.floor(Math.random()*RPGcharacter.length);
        document.getElementById("displayCharacter").innerHTML = RPGcharacter[y];
        var z = Math.floor(Math.random()*RPGimage.length);
        document.getElementById("displayImage").setAttribute("src", RPGimage[z]);
    }
    
    
    function motivate(){
      var x = Math.floor(Math.random()*quotes.length);
      document.getElementById("displayQuote").innerHTML = quotes[x];
    }
    
    
    
    
    
