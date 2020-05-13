function cl(cl) {
   console.log(cl);
}

setInterval(() => {
   let i = new Date().getSeconds();
   if (i == 360) {
      i = 0;
   } else {
      i = i*6;
   }
   let clock = document.querySelector('.second');
   let root = clock.style.transform = 'rotate(' + i + 'deg)';
}, 1000);

setInterval(() => {
   let i = new Date().getMinutes();
   if (i == 360) {
      i = 0;
   } else {
      i = i*6;
   }
   let clock = document.querySelector('.minute');
   let root = clock.style.transform = 'rotate(' + i + 'deg)';
}, 1000);

setInterval(() => {
   let im = new Date().getMinutes();
   let ih = new Date().getHours();
   if (ih > 12){
      ih = ih -12;
   }
   if (im > 60){
      im = 0;
   }
   ih = ih*30;
   im = im*0.5;
   i = ih+im;
   let clock = document.querySelector('.hour');
   let root = clock.style.transform = 'rotate(' + i + 'deg)';
}, 1000);