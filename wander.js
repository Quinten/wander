w=a.width,h=a.height;
m=Math,r=m.random;q=[];
for(i=0;i<99;i++){q[i]={x:r()*w,y:r()*h}}
function f(){
c.fillStyle='#ccc';c.fillRect(0,0,w,h);c.fillStyle='#fff';
for(i in q){p=q[i];x=p.x;y=p.y;
x+=1;y+=1;
x=(x>w)?0:(x<0)?w:x;
y=(y>h)?0:(y<0)?h:y;
c.fillRect(x,y,2,2);
p.x=x;p.y=y;
}requestAnimationFrame(f);}f();
