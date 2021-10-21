canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

orangeCar_width = 75;
orangeCar_height = 125;
orangeCar_x = 5;
orangeCar_y = 225;

background_image = "parkingLot.jpg";
orangeCar_image = "OrangeCar.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    orangeCar_imgTag = new Image();
    orangeCar_imgTag.onload = uploadOrangeCar;
    orangeCar_imgTag.src = orangeCar_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadOrangeCar(){
    ctx.drawImage(orangeCar_imgTag, orangeCar_x, orangeCar_y, orangeCar_width, orangeCar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(key_pressed=='38'){
        up();
        console.log("Up");
    }
    if(key_pressed=='40'){
        down();
        console.log("Down");
    }
    if(key_pressed=='37'){
        left();
        console.log("Left");
    }
    if(key_pressed=='39'){
        right();
        console.log("Right");
    }
}

function up(){
    if(orangeCar_y>=0){
        orangeCar_y = orangeCar_y-10;
        console.log("When up arrow is pressed, X = " + orangeCar_x + ", Y = " + orangeCar_y);
        uploadBackground();
        uploadOrangeCar();
    }
}

function down(){
    if(orangeCar_y<=500){
        orangeCar_y = orangeCar_y+10;
        console.log("When down arrow is pressed, X = " + orangeCar_x + ", Y = " + orangeCar_y);
        uploadBackground();
        uploadOrangeCar();
    }
}

function left(){
    if(orangeCar_x>=0){
        orangeCar_x = orangeCar_x-10;
        console.log("When down arrow is pressed, X = " + orangeCar_x + ", Y = " + orangeCar_y);
        uploadBackground();
        uploadOrangeCar();
    }
}

function right(){
    if(orangeCar_x<=700){
        orangeCar_x = orangeCar_x+10;
        console.log("When down arrow is pressed, X = " + orangeCar_x + ", Y = " + orangeCar_y);
        uploadBackground();
        uploadOrangeCar();
    }
}