w=a.width,h=a.height;
M=Math,R=M.random;
V=function (x,y) {this.x=x;this.y=y;

this.a=function(v){this.x+=v.x;this.y+=v.y} // add 2 vectors
};
q=[];for(i=0;i<99;i++){q[i]={p:new V(R()*w,R()*h),v:new V(1,1),s:new V(0,0),a:0,d:10,r:5,g:1}};
// p = position, v = velocity, s = steering force, a = wanderangle, d = wanderdistance, r = wanderradius, g = wanderrange
function f(){
c.fillStyle='#bfbfbf';c.fillRect(0,0,w,h);c.fillStyle='#707070';
for(i in q){o=q[i];
// update
//o.s.a(new V(0,0.01));
o.v.a(o.s);
o.s = new V(0,0);
o.p.a(o.v);
// wrap
x=o.p.x;y=o.p.y;
x=(x>w)?0:(x<0)?w:x;
y=(y>h)?0:(y<0)?h:y;
c.fillRect(x,y,2,2);
o.p.x=x;o.p.y=y;

}requestAnimationFrame(f);}f();
