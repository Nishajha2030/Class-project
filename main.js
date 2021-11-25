var canvas=new fabric.Canvas("myCanvas")
var playerX=10
var playerY=10

var block_image_width=30
var block_image_height=30

var player_object=""
var block_player_object=""

function player_update(){
    fabric.Image.fromUrl("player.png",function (img){
        player_object=img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
           top:playerY,left:playerX
        })
        canvas.add(player_object)
    })
}

function object_update(get_image){
    fabric.Image.fromUrl(get_image,function (img){
        block_player_object=img
        block_player_object.scaleToWidth(block_image_width)
        block_player_object.scaleToHeight(block_image_height)
        block_player_object.set({
           top:playerY,left:playerX
        })
        canvas.add(block_player_object)
    })
}

  window.addEventListener("keydown",my_keydown)
   function my_keydown(e){
       keypressed=e.keyCode
       if(e.shiftKey==true && keypressed=="80"){
           block_image_height=block_image_height+10
           block_image_width=block_image_width+10
           document.getElementById("current_width").innerHTML=block_image_width
           document.getElementById("current_height").innerHTML=block_image_height
           
       }
       if(e.shiftKey==true && keypressed=="77"){
        block_image_height=block_image_height-10
        block_image_width=block_image_width-10
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
        
    }
    if (keypressed=="67"){
        object_update("cloud.jpg")
    }
    if (keypressed=="68"){
        object_update("dark_green.png")
    }
    if (keypressed=="71"){
        object_update("ground.png")
    }
    if (keypressed=="76"){
        object_update("light_green.png")
    }
    if (keypressed=="82"){
        object_update("roof.jpg")
    }  
    if (keypressed=="84"){
        object_update("trunk.jpg")
    } 
    if (keypressed=="85"){
        object_update("unique.png")
    } 
    if (keypressed=="87"){
        object_update("wall.jpg")
    } 
    if (keypressed=="89"){
        object_update("yellow_wall.png")
    } 
    if (keypressed=="37"){
      left()
    } 
    if (keypressed=="38"){
        up()
      } 
      if (keypressed=="39"){
        right()
      } 
      if (keypressed=="40"){
        down()
      }                     

   }
   
   function up(){
       if(playerY>=0){
           playerY=playerY-10
           canvas.remove(player_object)
           player_update()
       }
   }
   function down(){
    if(playerY<=500){
        playerY=playerY+10
        canvas.remove(player_object)
        player_update()
    }
}
function left(){
    if(playerX>=0){
        playerX=playerX-10
        canvas.remove(player_object)
        player_update()
    }
}
function right(){
    if(playerX<=900){
        playerX=playerX+10
        canvas.remove(player_object)
        player_update()
    }
}
 
