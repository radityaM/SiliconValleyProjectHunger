class Menu{
    constructor(){
        imageTitle=createSprite(displayWidth/2,(displayHeight/2)-110);
        imageTitle.addImage(titleImg);
        imageTitle.scale=0.7;
    }
    display(){
        background(bg);

    }
}