var canvas = new fabric.Canvas("myCanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var playerobject = " ";
var block_image_object = " ";

function playerUpdate()
{
  fabric.Image.fromURL("player.png", function(img){
    playerobject = img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
      top:player_y,
      left:player_x
    });
    canvas.add(playerobject);
  });
}

function newImage(getImage)
{
  fabric.Image.fromURL(getImage, function(img){
    block_image_object = img;
    block_image_object.scaleToWidth(block_img_width);
    block_image_object.scaleToHeight(block_img_height);
    block_image_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(block_image_object);
  });
}