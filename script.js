const content=document.getElementById("content");
const button1=document.getElementById("choice1");
const button2=document.getElementById("choice2");
const images=document.getElementById("images_area");
let turns=1,t=2000;
let pistol=false,shotgun=false;
let animals=["lion","tiger","bear"];
let animal=animals[Math.floor(Math.random()*animals.length)];

function prnt(text,times){
    setTimeout(() => {
        content.textContent+=text+"\n";
    }, t*times);
}

function clear(){
    content.textContent="";
    button1.disabled=true;
    button2.disabled=true;
    button1.textContent="";
    button2.textContent="";
    images.replaceChildren();
}

function update_turn(){
    turns++;
    document.getElementById("turn").textContent="Turn: "+turns;
}

function set_choice1(text,func){
    button1.textContent=text;
    button1.onclick=func;
    button1.disabled=false;
}

function set_choice2(text,func){
    button2.textContent=text;
    button2.onclick=func;
    button2.disabled=false;
}

function play_again(){
    clear();
    prnt("Would you like to play again?",1);
    setTimeout(() => {
        set_choice1("Yes",start);
        set_choice2("No",thanks);
    }, t);
}

function thanks(){
    clear();
    prnt("Thank you for playing.",1);
}

function exceeding_num_of_turns(){
    prnt("You lost due to exceeding the maximum number of turns",0);
    setTimeout(() => {play_again();}, t*2);
}

function start(){
    turns=0;
    pistol=false,shotgun=false;
    animal=animals[Math.floor(Math.random()*animals.length)];
    
    update_turn();
    clear();
    prnt("You woke up in a crashed plane on an island in the Pacific Ocean.",1);
    
    const newimg=document.createElement('img');
    newimg.src="./images/start.jpg";
    setTimeout(() => {images.appendChild(newimg);}, t);
    
    prnt("You were going from America to your home in China.",2);
    prnt("But an engine failure occurred.",3);
    prnt("which caused the plane to crash and kill everyone on board except you.",4);
    prnt("You don't have any thing to protect yourself except an old knife.",5);
    prnt("How will you return home again?",6);
    setTimeout(() => {
        set_choice1("stay in the plane and find somthing that can help you.",plane);
        set_choice2("get off the plane and explore the island.",island);
    }, t*7);
}

function plane(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        prnt("Where will you look for something that might be useful to you?",1);
        prnt("You can look in the passengers' luggage or in the pilot's cabin.",2);

        const newimg=document.createElement('img');
        newimg.src="./images/luggage.jpg";
        setTimeout(() => {images.appendChild(newimg);}, t*2);

        const newimg2=document.createElement('img');
        newimg2.src="./images/door.jpg";
        setTimeout(() => {images.appendChild(newimg2);}, t*2);

        setTimeout(() => {
            set_choice1("Passengers' Luggage",luggage);
            set_choice2("Pilot's Cabin",cabin);
        }, t*3);
    }
}

function island(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        prnt("When you got off the plane,",1);
        
        const newimg=document.createElement('img');
        newimg.src="./images/island.jpg";
        setTimeout(() => {images.appendChild(newimg);}, t);

        prnt("you found trees full of beautiful, colorful fruits.",2);
        
        const newimg2=document.createElement('img');
        newimg2.src="./images/fruit.jpg";
        setTimeout(() => {images.appendChild(newimg2);}, t*2);
        
        prnt("And found a small village not far away,",3);
        prnt("But the path between you and it was blocked by a huge "+animal+".",4);
        
        if(animal=="lion"){
            const newimg3=document.createElement('img');
            newimg3.src="./images/lion.jpg";
            setTimeout(() => {images.appendChild(newimg3);}, t*4);
        }
        else if(animal=="bear"){
            const newimg3=document.createElement('img');
            newimg3.src="./images/bear.jpg";
            setTimeout(() => {images.appendChild(newimg3);}, t*4);
        }
        else{
            const newimg3=document.createElement('img');
            newimg3.src="./images/tiger.jpg";
            setTimeout(() => {images.appendChild(newimg3);}, t*4);
        }
        
        
        setTimeout(() => {
            set_choice1("eat the fruit",fruit);
            set_choice2("try to kill the "+animal,kill_the_animal);
        }, t*5);
    }
}

function luggage(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        const newimg1=document.createElement('img');
        newimg1.src="./images/luggage.jpg";
        images.appendChild(newimg1);

        if(pistol==false && shotgun==false){
            prnt("When you searched for something that could help you,",1);
            prnt("You found a pistol and a shotgun.",2);

            const newimg=document.createElement('img');
            newimg.src="./images/pistol.webp";
            setTimeout(() => {images.appendChild(newimg);}, t*2);

            const newimg2=document.createElement('img');
            newimg2.src="./images/shotgun.jpg";
            setTimeout(() => {images.appendChild(newimg2);}, t*2);

            prnt("Which one will you take?",3);
            setTimeout(() => {
                set_choice1("take the pistol",pstl);
                set_choice2("take the shotgun",shtgun);
            }, t*4);
        }
        else if(pistol==true){
            prnt("When you searched for something that could help you,",1);
            prnt("You found the shotgun that you left.",2);

            const newimg=document.createElement('img');
            newimg.src="./images/shotgun.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t*2);

            prnt("Would you like to take it and leave the pistol that you have?",3);
            setTimeout(() => {
                set_choice1("leave the shotgun",pstl);
                set_choice2("take the shotgun and leave the pistol",shtgun);
            }, t*4);
        }
        else if(shotgun==true){
            prnt("When you searched for something that could help you,",1);
            prnt("You found the pistol that you left.",2);
            
            const newimg=document.createElement('img');
            newimg.src="./images/pistol.webp";
            setTimeout(() => {images.appendChild(newimg);}, t*2);
            
            prnt("Would you like to take it and leave the shutgun that you have?",3);
            setTimeout(() => {
                set_choice1("leave the pistol",shtgun);
                set_choice2("take the pistol and leave the shotgun",pstl);
            }, t*4);
        }
    }
}

function cabin(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        prnt("When you entered the pilot's cabin,",1);
        prnt("Everything was broken.",2);

        const newimg=document.createElement('img');
        newimg.src="./images/cabin.webp";
        setTimeout(() => {images.appendChild(newimg);}, t*2);

        prnt("There was no means of communication with the command center.",3);
        prnt("Would you like to go back and search the passengers' luggage?",4);
        prnt("Or get off the plane and explore the island?",5);
        setTimeout(() => {
            set_choice1("go back and search the passengers' luggage",luggage);
            set_choice2("get off the plane and explore the island",island);
        }, t*6); 
    }
}

function fruit(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        const newimg=document.createElement('img');
        newimg.src="./images/fruit.jpg";
        images.appendChild(newimg);

        prnt("The fruit's taste is bitter.",1);
        prnt("But its colorful look makes you eat a lot of it.",2);
        prnt("After a short time you feel a severe illness and your stomach hurts.",3);
        prnt("It turns out that the fruit is poisonous.",4);

        const newimg2=document.createElement('img');
        newimg2.src="./images/poison.png";
        setTimeout(() => {images.appendChild(newimg2);}, t*4);

        prnt("And you died from eating it.",5);
        prnt("You lost!",6);

        const newimg3=document.createElement('img');
        newimg3.src="./images/lose.jpg";
        setTimeout(() => {images.appendChild(newimg3);}, t*6);
        
        setTimeout(() => {play_again();}, t*10); 
    }
}

function kill_the_animal(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        if(animal=="lion"){
            const newimg=document.createElement('img');
            newimg.src="./images/lion.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t);
        }
        else if(animal=="bear"){
            const newimg=document.createElement('img');
            newimg.src="./images/bear.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t);
        }
        else{
            const newimg=document.createElement('img');
            newimg.src="./images/tiger.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t);
        }
        if(pistol == true){
            prnt("You aimed with the pistol at the huge "+ animal +".",1);
            prnt("You pulled the trigger and killed the huge "+ animal,2);
            prnt("When you entered the small village,",3);
            prnt("You found people talking in strange language.",4);
            prnt("You didn't know their language.",5);
            prnt("But you communicated with them by drawing and acting.",6);
            prnt("When you told them your story",7);
            prnt("They were very happy that you killed the huge "+ animal,8);

            const newimg=document.createElement('img');
            newimg.src="./images/people.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t*8);

            prnt("That was a big danger to them.",9);
            prnt("So they let you stay with them until...",10);
            prnt("A ship was sent by the command center.",11);

            const newimg2=document.createElement('img');
            newimg2.src="./images/ship.jpg";
            setTimeout(() => {images.appendChild(newimg2);}, t*11);

            prnt("To rescue anyone who is still alive from the accident.",12);
            prnt("You thanked the people of the village.",13);
            prnt("And went with the ship to your home again.",14);
            prnt("You won!",15);

            const newimg3=document.createElement('img');
            newimg3.src="./images/win.jpg";
            setTimeout(() => {images.appendChild(newimg3);}, t*15);

            setTimeout(() => {play_again();}, t*19);
        }
        else if(shotgun == true){
            prnt("You aimed with the shotgun at the huge "+ animal +".",1);
            prnt("But when you pulled the trigger,",2);
            prnt("There were no bullets inside the shotgun.",3);
            prnt("The huge "+ animal +" ate you!",4);
            prnt("You lost!",5);

            const newimg=document.createElement('img');
            newimg.src="./images/lose.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t*5);

            setTimeout(() => {play_again();}, t*9);
        }
        else if(shotgun == false && pistol == false){
            prnt("You hurt the huge "+ animal +" with the knife that you have.",1);
            prnt("But this wasn't enough to kill it.",2);
            prnt("The huge "+ animal +" ate you!",3);
            prnt("You lost!",4);

            const newimg=document.createElement('img');
            newimg.src="./images/lose.jpg";
            setTimeout(() => {images.appendChild(newimg);}, t*4);

            setTimeout(() => {play_again();}, t*8);
        }
    }
}

function pstl(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        pistol=true;
        shotgun=false;
        prnt("Now you have the pistol.",1);

        const newimg=document.createElement('img');
        newimg.src="./images/pistol.webp";
        setTimeout(() => {images.appendChild(newimg);}, t);

        prnt("What will you do?",2);
        setTimeout(() => {
            set_choice1("go to the pilot's cabin",cabin);
            set_choice2("get off the plane and explore the island",island);
        }, t*3); 
    }
}

function shtgun(){
    update_turn();
    clear();
    if(turns>15){
        exceeding_num_of_turns();
    }
    else{
        pistol=false;
        shotgun=true;
        prnt("Now you have the shotgun.",1);

        const newimg=document.createElement('img');
        newimg.src="./images/shotgun.jpg";
        setTimeout(() => {images.appendChild(newimg);}, t);

        prnt("What will you do?",2);
        setTimeout(() => {
            set_choice1("go to the pilot's cabin",cabin);
            set_choice2("get off the plane and explore the island",island);
        }, t*3);  
    }
}

start()