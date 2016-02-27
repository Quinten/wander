w=a.width,h=a.height;
M=Math,R=M.random;
V=function(x,y){var T=this;T.x=x;T.y=y;
T.l=function(){return M.sqrt(T.x*T.x+T.y*T.y)};//getLength
T.e=function(){return M.atan2(T.y, T.x)};//getAngle
T.g=function(v){z=T.e();T.x=M.cos(z)*v;T.y=M.sin(z)*v};//setLength
T.s=function(v){z=T.l();T.x=M.cos(v)*z;T.y=M.sin(v)*z};//setAngle
T.c=function(){return new V(T.x,T.y)};//clone
T.a=function(v){return new V(T.x+v.x,T.y+v.y)};//add
T.m=function(v){return new V(T.x*v,T.y*v)};//multiply
T.d=function(v){return new V(T.x/v,T.y/v)};//divide
T.n=function(){l=T.l();if(l==0){T.x=1;return T}T.x/=l;T.y/=l;return T};//normalize
T.t=function(v){T.g(M.min(v,T.l()));return T};//truncate
};
q=[];for(i=0;i<42;i++){q[i]={p:new V(R()*w,R()*h),v:new V(0,0),s:new V(0,0),a:0,d:6,r:2,g:0.5,m:2,f:1,e:3}};
//p=position,v=velocity,s=steeringforce,a=wanderangle,d=wanderdistance,r=wanderradius,g=wanderrange,m=mass,f=maxforce,e=maxspeed
function f(){
c.fillStyle='#bfbfbf';c.fillRect(0,0,w,h);c.fillStyle='#707070';
for(i in q){o=q[i];
//wander
t=o.v.c().n().m(o.d);//t=center
s=new V(0,0);//s=offset
s.g(o.r);
s.s(o.a);
o.a+=R()*o.g-o.g*0.5;
t=t.a(s);
o.s=o.s.a(t);
//update
o.s.t(o.f);
o.s=o.s.d(o.m);
o.v=o.v.a(o.s);
o.s=new V(0,0);
o.v.t(o.e);
o.p=o.p.a(o.v);
//wrap
x=o.p.x;y=o.p.y;
x=(x>w)?0:(x<0)?w:x;
y=(y>h)?0:(y<0)?h:y;
c.fillRect(x,y,3,3);
o.p.x=x;o.p.y=y;
}requestAnimationFrame(f);}f();
