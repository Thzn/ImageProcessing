p5.prototype.rgb2gray = function (img) {
  
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

p5.prototype.displaygray= function(gray){
        
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




