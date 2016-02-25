w=a.width,h=a.height;
M=Math,R=M.random;
V=function(x,y){var T=this;T.x=x;T.y=y;
T.c=function(){return new V(T.x,T.y)};//clone
T.a=function(v){T.x+=v.x;T.y+=v.y};//add 2 vectors
T.l=function(){return M.sqrt(T.x*T.x+T.y*T.y)};//length
T.n=function(){l=T.l();if(l==0){T.x=1;return T}T.x/=l;T.y/=l;return T}//normalize
};
q=[];for(i=0;i<99;i++){q[i]={p:new V(R()*w,R()*h),v:new V(1,1),s:new V(0,0),a:0,d:10,r:5,g:1}};
//p=position,v=velocity,s=steeringforce,a=wanderangle,d=wanderdistance,r=wanderradius,g=wanderrange
function f(){
c.fillStyle='#bfbfbf';c.fillRect(0,0,w,h);c.fillStyle='#707070';
for(i in q){o=q[i];
//wander
t=o.v.c().n();//t=center
//update
o.v.a(o.s);
o.s = new V(0,0);
o.p.a(o.v);
//wrap
x=o.p.x;y=o.p.y;
x=(x>w)?0:(x<0)?w:x;
y=(y>h)?0:(y<0)?h:y;
c.fillRect(x,y,2,2);
o.p.x=x;o.p.y=y;
}requestAnimationFrame(f);}f();
