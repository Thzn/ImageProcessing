
/**
 *
 * rgbToGray is a method that convert p5.Image object to a
 * object that has properties of graysclae image
 * 
 * @method rgbToGray
 * @param  {p5.Image} 
 *                    
 * @return {Object {pixels: height: width:}}
 * 
 * @example
 * 
 * @alt
 * no display.
 *
 */

p5.prototype.rgbToGray= function (img) {
  
  if(!(img instanceof p5.Image)){
      throw "TypeError";
  }
  
  var gray=new Array();
  img.loadPixels();
  for (var x = 0; x < 4 * (img.width*img.height); x+=4) {
      gray.push((img.pixels[x]+img.pixels[x+1]+img.pixels[x+2])/3);      
  }
  
  console.log(gray.length);  
  return {pixels:gray, width:img.width, height: img.height};
}

/**
 *
 * displyGray is the function used to displatan image on a canvas.
 * canvas automatically get the size of the given gray image.
 * 
 * @method displayGray
 * @param  {Object {pixels: height: width:}} 
 *                    
 * @return {}
 * 
 * @example
 * 
 * @alt
 * no display.
 *
 */

p5.prototype.displayGray= function(gray){
    
    createCanvas(gray.width,gray.height);
    background(0);
    
    if (!gray.hasOwnProperty('pixels')  || !gray.hasOwnProperty('width') || !gray.hasOwnProperty('height')){
        throw "TypeError";
    }
     console.log(gray.pixels.length);
     
     for(var x=0; x<gray.width; x++){
      for(var y=0; y< gray.height; y++){
           stroke(gray.pixels[y*gray.width+x]);          
           point(x,y);
      }
     }
}

/**
 *
 *threshold function threshold a given image. The tvalue parameter 
 *should be in between 0 to 255
 * 
 * @method threshold
 * @param  {tvalue} //Threshold value
 * @param  {Object {pixels: height: width:}} //Object that contain gray image 
 *                    
 * @return {Object {pixels: height: width:}} //Return a gray image
 * 
 * @example
 * 
 * @alt
 * no display.
 *
 */


p5.prototype.threshold=function(tvalue, image){
    
  if(tvalue > 255 || tvalue < 0){
      throw "ValueError";
  }else if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  }    
  
  var threshold=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      if(image.pixels[x] > tvalue){
          threshold.push(255);
      }else{
          threshold.push(0);
      }
  }
  return {pixels:threshold, width:image.width, height: image.height};
}

/**
 *
 *threshold function threshold a given image. The tvalue parameter 
 *should be in between 0 to 255
 * 
 * @method invert
 * @param  {Object {pixels: height: width:}} //Object that contain gray image 
 *                    
 * @return {Object {pixels: height: width:}} //Return a gray image
 * 
 * @example
 * 
 * @alt
 * no display.
 *
 */

p5.prototype.invert=function(image){
    
  if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  }    
  var invert=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      invert.push(255-image.pixels[x]);
  }
  return {pixels:invert, width:image.width, height: image.height};
}

p5.prototype.invert=function(image){
    
  if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  }    
  var invert=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      invert.push(255-image.pixels[x]);
  }
  return {pixels:invert, width:image.width, height: image.height};
}

p5.prototype.logtransform=function(image,c){
    
  if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  }    
  var logtransform=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      logtransform.push(c*(Math.log(image.pixels[x]+1)));
  }
  return {pixels:logtransform, width:image.width, height: image.height};
}

p5.prototype.powerlawtransform=function(image,gamma,c){
    
  if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  }    
  var logtransform=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      logtransform.push(c*(Math.pow(image.pixels[x],gamma)));
  }
  return {pixels:logtransform, width:image.width, height: image.height};
}


p5.prototype.rotate=function(image,x0,y0,ang){
    
  if (!image.hasOwnProperty('pixels')  || ! image.hasOwnProperty('width') || !image.hasOwnProperty('height')){
      throw "TypeError";
  } 
  
  var rotate=new Array();
  for(var x=0 ; x < image.pixels.length; x++){
      rotate.push(0);
  }

  for(var x=0;x<image.height; x++){
      for(var y=0;y<image.width; y++){
          
          var xn=Math.round(Math.cos(ang)*(x-x0) - Math.sin(ang)*(y-y0) + x0);
          var yn=Math.round(Math.sin(ang)*(x-x0) + Math.cos(ang)*(y-y0) + y0);
          if (yn < image.width && yn > 0){
            rotate[xn*image.width+yn]=image.pixels[x*image.width+y];       
          }
      }
  }

  return {pixels:rotate, width:image.width, height: image.height};
}
