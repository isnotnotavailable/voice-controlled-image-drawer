x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition

function start()
{
    document.getElementById("status").innerHTML = "system is listenng please speak"
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

var content = event.results[0][0].transcript;
      
     document.getElementById("status").innerHTML = "the speech has been reconized as:" + content;
          if(content =="Circle")
          {
              x = Math.floor(Math.random() * 900);
              y = Math.floor(Math.random() * 600);
              document.getElementById("status").innerHTML = "Started drawing circle";
              draw_circle = "set";
          }
          if(content =="rectangle")
          {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Started drawing rectangle";
            draw_rectangle = "set"; 
          }
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("Status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }
    if(draw_rectangle == "set")
    {
        rectangle(x,y,70,50)
        document.getElementById("Status").innerHTML = "Rectangle is drawn. ";
        draw_rectangle = "";
    }
}