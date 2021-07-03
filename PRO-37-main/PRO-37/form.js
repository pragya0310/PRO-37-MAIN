class Form{
constructor(){

    this.A=createButton("A")
    this.A.position(170,370)

    this.B=createButton("B")
    this.B.position(170,420)

    this.C=createButton("C")
    this.C.position(530,370)

    this.D=createButton("D")
    this.D.position(530,420)


   this.input=createInput("ENTER NAME")
    this.button=createButton("play")
    this.msg=createElement("h2")
    this.button2=createButton("CHECK ANSWER")
    //QUESTIONS
    this.ques=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    this.ques2=createElement("h2")
    //OPTIONS 1 
    this.a=createElement("h2")
    this.b=createElement("h2")
    this.c=createElement("h2")
    this.d=createElement("h2")
    //OPTION 2
      this.a=createElement("h2")
      this.b=createElement("h2")
      this.c=createElement("h2")
      this.d=createElement("h2")
        //OPTIONS 3
    this.a=createElement("h2")
    this.b=createElement("h2")
    this.c=createElement("h2")
    this.d=createElement("h2")
      //OPTIONS 4
      this.a=createElement("h2")
      this.b=createElement("h2")
      this.c=createElement("h2")
      this.d=createElement("h2")
        //OPTIONS 5
    this.a=createElement("h2")
    this.b=createElement("h2")
    this.c=createElement("h2")
    this.d=createElement("h2")
      //OPTIONS 6
      this.a=createElement("h2")
      this.b=createElement("h2")
      this.c=createElement("h2")
      this.d=createElement("h2")
        //OPTIONS 7
    this.a=createElement("h2")
    this.b=createElement("h2")
    this.c=createElement("h2")
    this.d=createElement("h2")
      //OPTIONS 8 
      this.a=createElement("h2")
      this.b=createElement("h2")
      this.c=createElement("h2")
      this.d=createElement("h2")
        //OPTIONS 9 
    this.a=createElement("h2")
    this.b=createElement("h2")
    this.c=createElement("h2")
    this.d=createElement("h2")
      //OPTIONS 10
      this.a=createElement("h2")
      this.b=createElement("h2")
      this.c=createElement("h2")
      this.d=createElement("h2")
}
display(){
    var title=createElement("h1")
    title.html("MY QUIZ APP")
    title.position(200,30)


    this.msg.html("WELCOME ",200,30)
        this.msg.position(200,150)

//QUESTION 1
    this.ques.html("1. NAME ONE WORD STARTING AND ENDING WITH 'W'",200,10)
    this.ques.position(160,300)
//OPTIONS
    this.a.html(" WEAR",20,20)
    this.a.position(200,350)
    
    this.b.html(" WOW ",20,20)
    this.b.position(200,400)
    
    this.c.html("WEAVER",20,20)
    this.c.position(560,350)
    
    this.d.html(" WORST",20,20)
    this.d.position(560,400)

   
//QUESTION 2
this.ques2.html("2. WHAT IS THE FAVOURITE FOOD OF DORAEMON?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" NOODLES",20,20)
this.a.position(200,350)

this.b.html(" PIES",20,20)
this.b.position(200,400)

this.c.html("LEMON PIE",20,20)
this.c.position(560,350)

this.d.html(" DORACAKE",20,20)
this.d.position(560,400)

//QUESTION 3
this.ques2.html("3.WHO IS NOBITA'S BEST FRIEND?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" SHIZUKA",20,20)
this.a.position(200,350)

this.b.html(" GYAN",20,20)
this.b.position(200,400)

this.c.html("SUNIO",20,20)
this.c.position(560,350)

this.d.html(" ALL OF THE ABOVE ",20,20)
this.d.position(560,400)

//QUESTION 4
this.ques2.html("4. THE GADGET THAT HELPS ALL DORAEMONS FRIEND TO FLY IS CALLED?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" ANYWHERE DOOR",20,20)
this.a.position(200,350)

this.b.html(" BAMBOO COPTER",20,20)
this.b.position(200,400)

this.c.html("SMALL LIGHT",20,20)
this.c.position(560,350)

this.d.html(" RESERVATION TUNNEL",20,20)
this.d.position(560,400)

//QUESTION 5
this.ques2.html("5.WHAT KIND OF BOY NOBITA IS?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" INTELLIGENT",20,20)
this.a.position(200,350)

this.b.html(" SMART",20,20)
this.b.position(200,400)

this.c.html("HELPING HAND ",20,20)
this.c.position(560,350)

this.d.html(" NONE OF THE ABOVE",20,20)
this.d.position(560,400)

//QUESTION 6
this.ques2.html("6.WHO IS THE MOST INTELLIGENT FRIEND OF NOBITA ?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" DACKYSUGI",20,20)
this.a.position(200,350)

this.b.html(" KOTAMA",20,20)
this.b.position(200,400)

this.c.html("GYAN",20,20)
this.c.position(560,350)

this.d.html(" SUNIO",20,20)
this.d.position(560,400)

//QUESTION 7 
this.ques2.html("7. WHAT NOBITA LIKES TO EAT MOST ?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html(" GINGER BREAD",20,20)
this.a.position(200,350)

this.b.html(" FISH CURRY ",20,20)
this.b.position(200,400)

this.c.html("CABBAGE",20,20)
this.c.position(560,350)

this.d.html(" NONE OF THE ABOVE",20,20)
this.d.position(560,400)

//QUESTION 8 
this.ques2.html("8. WHAT SHIZUKA LOVE TO DO?",200,10)
this.ques2.position(160,300)
//OPTIONS
this.a.html("STUDY",20,20)
this.a.position(200,350)

this.b.html(" COOKING",20,20)
this.b.position(200,400)

this.c.html("PLAYING VOILEN",20,20)
this.c.position(560,350)

this.d.html("ALL OF THE ABOVE",20,20)
this.d.position(560,400)

//QUESTION 9 
this.ques2.html("9. NOBITA IS AFRAID OF WHOM?",200,10)
this.ques2.position(160,300)
//OPTION
this.a.html(" HIS MOM",20,20)
this.a.position(200,350)

this.b.html(" GYAN ",20,20)
this.b.position(200,400)

this.c.html("NONE OF THE ABOVE",20,20)
this.c.position(560,350)

this.d.html("ALL OF THE ABOVE",20,20)
this.d.position(560,400)

//QUESTION 10
this.ques2.html("10. DO YOU LOVE WATCHING DORAEMON?",200,10)
this.ques2.position(160,300)
//OPTION
this.a.html(" ALOT",20,20)
this.a.position(200,350)

this.b.html(" I USED TO LOVE",20,20)
this.b.position(200,400)

this.c.html("NO WAY",20,20)
this.c.position(560,350)

this.d.html(" A LITTLE ",20,20)
this.d.position(560,400)

//QUESTIONS DONE

this.button2.position(200,300)
    this.input.position(200,100)
    this.button.position(200,130)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
       
    })
    fill("white")
        circle(200,250,20)
      text(1,200,250)
      
     drawSprites();

}
hide(){
    this.input.hide()
    this.button.hide()
    this.msg.hide()

}
}
   
