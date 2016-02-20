w=a.width,h=a.height;
M=Math,R=M.random;
V=function (x,y) {this.x=x;this.y=y;
this.a=function(v){this.x+=v.x;this.y+=v.y}};
q=[];for(i=0;i<99;i++){q[i]={p:new V(R()*w,R()*h),v:new V(1,1)}};
function f(){
c.fillStyle='#ccc';c.fillRect(0,0,w,h);c.fillStyle='#fff';
for(i in q){o=q[i];
o.p.a(o.v);
x=o.p.x;y=o.p.y;
x=(x>w)?0:(x<0)?w:x;
y=(y>h)?0:(y<0)?h:y;
c.fillRect(x,y,2,2);
o.p.x=x;o.p.y=y;
}requestAnimationFrame(f);}f();
