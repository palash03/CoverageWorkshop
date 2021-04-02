
function demo(a,b,c) {
    if( c && b ) { c = b * b; }
    else if( a )
    {
       if( b )
       {
          if( c )
          {
             console.log( a + b + c );
          }
       }
    }
 
    if( a || b || c )
    {
       return 0;
    }
    return 1;
 }
/*function inc(p, q) {
    if(q == undefined) q=1;
    if( p < 0 )
    {
        p = -p;
    }
    return p + q/q;
}*/


module.exports.demo = demo;