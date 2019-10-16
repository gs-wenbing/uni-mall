var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'city-item-box'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[6],[[7],[3,'cityList']],[[7],[3,'showRank']]],[3,'showList']])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'city-item pad-left flex-row']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'value']],[[6],[[6],[[7],[3,'valueObj']],[[6],[[6],[[7],[3,'cityList']],[[7],[3,'showRank']]],[3,'identify']]],[3,'value']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onChooseClick']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[2,'+'],[[2,'+'],[1,'cityList.'],[[7],[3,'showRank']]],[1,'.showList']]],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'value']],[[6],[[6],[[7],[3,'valueObj']],[[6],[[6],[[7],[3,'cityList']],[[7],[3,'showRank']]],[3,'identify']]],[3,'value']]])
Z([[2,'>'],[[7],[3,'showRank']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z([3,'list b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'AddressID']],[[6],[[7],[3,'item']],[3,'AddressID']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'IsDefault']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[1,'mask']],[[2,'?:'],[[2,'==='],[[7],[3,'maskState']],[1,0]],[1,'none'],[[2,'?:'],[[2,'==='],[[7],[3,'maskState']],[1,1]],[1,'show'],[1,'']]]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'togglePopup']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([3,'mask-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onCityClick']]]]]]]]])
Z([3,'jd'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'price-box'])
Z([[2,'>'],[[6],[[7],[3,'TransGoods']],[3,'OldPrice']],[[6],[[7],[3,'TransGoods']],[3,'Price']]])
Z([[6],[[7],[3,'TransGoods']],[3,'SaleDiscount']])
Z([3,'__l'])
Z([3,'step'])
Z([3,'1'])
Z([[7],[3,'cartNum']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/city-selector.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box.wxml','./pages/address/address.wxml','./pages/address/addressEdit.wxml','./pages/login/login.wxml','./pages/notice/notice.wxml','./pages/order/placeOrder.wxml','./pages/pay/pay.wxml','./pages/pay/paySuccess.wxml','./pages/product/detail.wxml','./pages/product/list.wxml','./pages/search/search.wxml','./pages/setting/setting.wxml','./pages/tabBar/home.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'scroll-view',['class',0,'scrollY',1],[],e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,9,hG,cF,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'item','index','index')
var xC=_v()
_(oB,xC)
if(_oz(z,10,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var bO=_v()
_(r,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],oR,xQ,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,7,oR,xQ,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,8,oR,xQ,gg)){cW.wxVkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,2,oP,e,s,gg,bO,'item','index','index')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lY=_mz(z,'view',['bindtap',0,'catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var aZ=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var t1=_mz(z,'city-selector',['bind:__l',7,'bind:confirm',1,'data-event-opts',2,'platform',3,'vueId',4],[],e,s,gg)
_(aZ,t1)
_(lY,aZ)
_(r,lY)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var o0=_n('view')
_rz(z,o0,'class',1,e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,2,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,3,e,s,gg)){oBB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(c8,o0)
var lCB=_mz(z,'uni-number-box',['bind:__l',4,'class',1,'vueId',2],[],e,s,gg)
_(c8,lCB)
var h9=_v()
_(c8,h9)
if(_oz(z,7,e,s,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
_(r,c8)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tEB=_mz(z,'uni-load-more',['bind:__l',0,'status',1,'vueId',1],[],e,s,gg)
_(r,tEB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/home","pages/search/search","pages/product/list","pages/product/detail","pages/login/login","pages/order/placeOrder","pages/pay/pay","pages/pay/paySuccess","pages/notice/notice","pages/address/address","pages/address/addressEdit","pages/setting/setting"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#E60012","backgroundColor":"#E60012"},"tabBar":{"color":"#343434","selectedColor":"#E60012","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabBar/home","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/tabBar/category","iconPath":"static/tab-cate.png","selectedIconPath":"static/tab-cate-current.png","text":"分类"},{"pagePath":"pages/tabBar/cart","iconPath":"static/tab-cart.png","selectedIconPath":"static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/tabBar/user","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"nvue":{"pages":{"pages/tabBar/user.html":{"window":{"usingComponents":{},"navigationBarTitleText":"我的","bounce":"none","titleNView":{"buttons":[{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"24","color":"#ffffff","width":"46px","background":"rgba(0,0,0,0)"}]}}},"pages/tabBar/cart.html":{"window":{"usingComponents":{},"navigationBarTitleText":"购物车"}},"pages/tabBar/category.html":{"window":{"usingComponents":{},"navigationBarTitleText":"分类","bounce":"none","titleNView":{"buttons":[{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"28","color":"#ffffff","background":"rgba(0,0,0,0)","redDot":true}]}}}}},"nvueCompiler":"uni-app","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniMall","compilerVersion":"2.1.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/city-selector.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/city-selector.wxml']=$gwx('./components/city-selector.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"收货地址管理","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/addressEdit.json']={"navigationBarTitleText":"编辑收货地址","usingComponents":{"city-selector":"/components/city-selector"}};
__wxAppCode__['pages/address/addressEdit.wxml']=$gwx('./pages/address/addressEdit.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/notice/notice.json']={"navigationBarTitleText":"通知","usingComponents":{}};
__wxAppCode__['pages/notice/notice.wxml']=$gwx('./pages/notice/notice.wxml');

__wxAppCode__['pages/order/placeOrder.json']={"navigationBarTitleText":"提交订单","usingComponents":{}};
__wxAppCode__['pages/order/placeOrder.wxml']=$gwx('./pages/order/placeOrder.wxml');

__wxAppCode__['pages/pay/pay.json']={"navigationBarTitleText":"支付","usingComponents":{}};
__wxAppCode__['pages/pay/pay.wxml']=$gwx('./pages/pay/pay.wxml');

__wxAppCode__['pages/pay/paySuccess.json']={"navigationBarTitleText":"支付成功","usingComponents":{}};
__wxAppCode__['pages/pay/paySuccess.wxml']=$gwx('./pages/pay/paySuccess.wxml');

__wxAppCode__['pages/product/detail.json']={"navigationBarTitleText":"详情展示","titleNView":{"type":"transparent"},"usingComponents":{"uni-number-box":"/components/uni-number-box"}};
__wxAppCode__['pages/product/detail.wxml']=$gwx('./pages/product/detail.wxml');

__wxAppCode__['pages/product/list.json']={"pullToRefresh":{"support":true,"style":"circle"},"titleNView":{"searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品名称，商品型号","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"28","width":"50px","color":"#ffffff","background":"rgba(0,0,0,0)","redDot":true}]},"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/product/list.wxml']=$gwx('./pages/product/list.wxml');

__wxAppCode__['pages/search/search.json']={"titleNView":{"searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品","disabled":false,"placeholderColor":"#606266"},"buttons":[{"text":"搜索","fontSize":"16","width":"50px"}]},"usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/setting/setting.json']={"navigationBarTitleText":"设置","usingComponents":{}};
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

__wxAppCode__['pages/tabBar/home.json']={"pullToRefresh":{"support":true,"style":"circle","offset":"64px"},"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(245, 245, 245)","borderRadius":"16px","placeholder":"点击搜索商品","disabled":true,"placeholderColor":"#606266"},"buttons":[{"text":"北京市","fontSize":"14","select":true,"float":"left","width":"75px","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/mallicon.ttf","text":"","fontSize":"26","color":"#ffffff","background":"rgba(0,0,0,0)"}]},"usingComponents":{}};
__wxAppCode__['pages/tabBar/home.wxml']=$gwx('./pages/tabBar/home.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"007a":function(n,t,e){"use strict";var o=e("b2d8"),r=e.n(o);r.a},6632:function(n,t,e){"use strict";e.r(t);var o=e("c086");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("007a");var u,a,c=e("2877"),i=Object(c["a"])(o["default"],u,a,!1,null,null,null);t["default"]=i.exports},b2d8:function(n,t,e){},c086:function(n,t,e){"use strict";e.r(t);var o=e("e579"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=r.a},e579:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var a={globalData:{text:"text"},methods:r({},(0,o.mapMutations)(["login"])),onLaunch:function(){var t=this;plus.screen.lockOrientation("portrait-primary");var e=n.getStorageSync("userInfo")||"";e.UserAccountID&&n.getStorage({key:"userInfo",success:function(n){t.login(n.data)}})},onShow:function(){console.log("App Show"," at App.vue:31")},onHide:function(){console.log("App Hide"," at App.vue:34")}};t.default=a}).call(this,e("6e42")["default"])}},[["b261","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], l = t[1], c = t[2], s = 0, f = []; s < a.length; s++) {
      o = a[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, c || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function (e) {
    var t = [],
        n = {
      "components/uni-load-more/uni-load-more": 1,
      "components/uni-number-box": 1,
      "components/city-selector": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/uni-number-box": "components/uni-number-box",
        "components/city-selector": "components/city-selector"
      }[e] || e) + ".wxss", u = l.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var c = i[a],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === r || s === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        c = f[a], s = c.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), n(i);
      }, p.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = a(e), c = function c(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        c({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      l.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var f = 0; f < c.length; f++) {
    t(c[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"158f":function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("6210"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},1678:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("70ff"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},"26a9":function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("4462"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},2877:function(l,e,a){"use strict";function n(l,e,a,n,r,i,s,c){var u,t="function"===typeof l?l.options:l;if(e&&(t.render=e,t.staticRenderFns=a,t._compiled=!0),n&&(t.functional=!0),i&&(t._scopeId="data-v-"+i),s?(u=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,l||"undefined"===typeof __VUE_SSR_CONTEXT__||(l=__VUE_SSR_CONTEXT__),r&&r.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(s)},t._ssrRegister=u):r&&(u=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(t.functional){t._injectStyles=u;var h=t.render;t.render=function(l,e){return u.call(e),h(l,e)}}else{var d=t.beforeCreate;t.beforeCreate=d?[].concat(d,u):[u]}return{exports:l,options:t}}a.d(e,"a",function(){return n})},"2f62":function(l,e,a){"use strict";a.r(e),a.d(e,"Store",function(){return o}),a.d(e,"install",function(){return E}),a.d(e,"mapState",function(){return P}),a.d(e,"mapMutations",function(){return S}),a.d(e,"mapGetters",function(){return C}),a.d(e,"mapActions",function(){return M}),a.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var n=function(l){var e=Number(l.version.split(".")[0]);if(e>=2)l.mixin({beforeCreate:n});else{var a=l.prototype._init;l.prototype._init=function(l){void 0===l&&(l={}),l.init=l.init?[n].concat(l.init):n,a.call(this,l)}}function n(){var l=this.$options;l.store?this.$store="function"===typeof l.store?l.store():l.store:l.parent&&l.parent.$store&&(this.$store=l.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(l){r&&(l._devtoolHook=r,r.emit("vuex:init",l),r.on("vuex:travel-to-state",function(e){l.replaceState(e)}),l.subscribe(function(l,e){r.emit("vuex:mutation",l,e)}))}function s(l,e){Object.keys(l).forEach(function(a){return e(l[a],a)})}function c(l){return null!==l&&"object"===typeof l}function u(l){return l&&"function"===typeof l.then}var t=function(l,e){this.runtime=e,this._children=Object.create(null),this._rawModule=l;var a=l.state;this.state=("function"===typeof a?a():a)||{}},h={namespaced:{configurable:!0}};h.namespaced.get=function(){return!!this._rawModule.namespaced},t.prototype.addChild=function(l,e){this._children[l]=e},t.prototype.removeChild=function(l){delete this._children[l]},t.prototype.getChild=function(l){return this._children[l]},t.prototype.update=function(l){this._rawModule.namespaced=l.namespaced,l.actions&&(this._rawModule.actions=l.actions),l.mutations&&(this._rawModule.mutations=l.mutations),l.getters&&(this._rawModule.getters=l.getters)},t.prototype.forEachChild=function(l){s(this._children,l)},t.prototype.forEachGetter=function(l){this._rawModule.getters&&s(this._rawModule.getters,l)},t.prototype.forEachAction=function(l){this._rawModule.actions&&s(this._rawModule.actions,l)},t.prototype.forEachMutation=function(l){this._rawModule.mutations&&s(this._rawModule.mutations,l)},Object.defineProperties(t.prototype,h);var d=function(l){this.register([],l,!1)};function v(l,e,a){if(e.update(a),a.modules)for(var n in a.modules){if(!e.getChild(n))return void 0;v(l.concat(n),e.getChild(n),a.modules[n])}}d.prototype.get=function(l){return l.reduce(function(l,e){return l.getChild(e)},this.root)},d.prototype.getNamespace=function(l){var e=this.root;return l.reduce(function(l,a){return e=e.getChild(a),l+(e.namespaced?a+"/":"")},"")},d.prototype.update=function(l){v([],this.root,l)},d.prototype.register=function(l,e,a){var n=this;void 0===a&&(a=!0);var r=new t(e,a);if(0===l.length)this.root=r;else{var i=this.get(l.slice(0,-1));i.addChild(l[l.length-1],r)}e.modules&&s(e.modules,function(e,r){n.register(l.concat(r),e,a)})},d.prototype.unregister=function(l){var e=this.get(l.slice(0,-1)),a=l[l.length-1];e.getChild(a).runtime&&e.removeChild(a)};var b;var o=function(l){var e=this;void 0===l&&(l={}),!b&&"undefined"!==typeof window&&window.Vue&&E(window.Vue);var a=l.plugins;void 0===a&&(a=[]);var n=l.strict;void 0===n&&(n=!1);var r=l.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new d(l),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new b;var s=this,c=this,u=c.dispatch,t=c.commit;this.dispatch=function(l,e){return u.call(s,l,e)},this.commit=function(l,e,a){return t.call(s,l,e,a)},this.strict=n,g(this,r,[],this._modules.root),_(this,r),a.forEach(function(l){return l(e)}),b.config.devtools&&i(this)},f={state:{configurable:!0}};function p(l,e){return e.indexOf(l)<0&&e.push(l),function(){var a=e.indexOf(l);a>-1&&e.splice(a,1)}}function y(l,e){l._actions=Object.create(null),l._mutations=Object.create(null),l._wrappedGetters=Object.create(null),l._modulesNamespaceMap=Object.create(null);var a=l.state;g(l,a,[],l._modules.root,!0),_(l,a,e)}function _(l,e,a){var n=l._vm;l.getters={};var r=l._wrappedGetters,i={};s(r,function(e,a){i[a]=function(){return e(l)},Object.defineProperty(l.getters,a,{get:function(){return l._vm[a]},enumerable:!0})});var c=b.config.silent;b.config.silent=!0,l._vm=new b({data:{$$state:e},computed:i}),b.config.silent=c,l.strict&&A(l),n&&(a&&l._withCommit(function(){n._data.$$state=null}),b.nextTick(function(){return n.$destroy()}))}function g(l,e,a,n,r){var i=!a.length,s=l._modules.getNamespace(a);if(n.namespaced&&(l._modulesNamespaceMap[s]=n),!i&&!r){var c=k(e,a.slice(0,-1)),u=a[a.length-1];l._withCommit(function(){b.set(c,u,n.state)})}var t=n.context=m(l,s,a);n.forEachMutation(function(e,a){var n=s+a;$(l,n,e,t)}),n.forEachAction(function(e,a){var n=e.root?a:s+a,r=e.handler||e;O(l,n,r,t)}),n.forEachGetter(function(e,a){var n=s+a;x(l,n,e,t)}),n.forEachChild(function(n,i){g(l,e,a.concat(i),n,r)})}function m(l,e,a){var n=""===e,r={dispatch:n?l.dispatch:function(a,n,r){var i=j(a,n,r),s=i.payload,c=i.options,u=i.type;return c&&c.root||(u=e+u),l.dispatch(u,s)},commit:n?l.commit:function(a,n,r){var i=j(a,n,r),s=i.payload,c=i.options,u=i.type;c&&c.root||(u=e+u),l.commit(u,s,c)}};return Object.defineProperties(r,{getters:{get:n?function(){return l.getters}:function(){return w(l,e)}},state:{get:function(){return k(l.state,a)}}}),r}function w(l,e){var a={},n=e.length;return Object.keys(l.getters).forEach(function(r){if(r.slice(0,n)===e){var i=r.slice(n);Object.defineProperty(a,i,{get:function(){return l.getters[r]},enumerable:!0})}}),a}function $(l,e,a,n){var r=l._mutations[e]||(l._mutations[e]=[]);r.push(function(e){a.call(l,n.state,e)})}function O(l,e,a,n){var r=l._actions[e]||(l._actions[e]=[]);r.push(function(e,r){var i=a.call(l,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:l.getters,rootState:l.state},e,r);return u(i)||(i=Promise.resolve(i)),l._devtoolHook?i.catch(function(e){throw l._devtoolHook.emit("vuex:error",e),e}):i})}function x(l,e,a,n){l._wrappedGetters[e]||(l._wrappedGetters[e]=function(l){return a(n.state,n.getters,l.state,l.getters)})}function A(l){l._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(l,e){return e.length?e.reduce(function(l,e){return l[e]},l):l}function j(l,e,a){return c(l)&&l.type&&(a=e,e=l,l=l.type),{type:l,payload:e,options:a}}function E(l){b&&l===b||(b=l,n(b))}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(l){0},o.prototype.commit=function(l,e,a){var n=this,r=j(l,e,a),i=r.type,s=r.payload,c=(r.options,{type:i,payload:s}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(l){l(s)})}),this._subscribers.forEach(function(l){return l(c,n.state)}))},o.prototype.dispatch=function(l,e){var a=this,n=j(l,e),r=n.type,i=n.payload,s={type:r,payload:i},c=this._actions[r];if(c)return this._actionSubscribers.forEach(function(l){return l(s,a.state)}),c.length>1?Promise.all(c.map(function(l){return l(i)})):c[0](i)},o.prototype.subscribe=function(l){return p(l,this._subscribers)},o.prototype.subscribeAction=function(l){return p(l,this._actionSubscribers)},o.prototype.watch=function(l,e,a){var n=this;return this._watcherVM.$watch(function(){return l(n.state,n.getters)},e,a)},o.prototype.replaceState=function(l){var e=this;this._withCommit(function(){e._vm._data.$$state=l})},o.prototype.registerModule=function(l,e,a){void 0===a&&(a={}),"string"===typeof l&&(l=[l]),this._modules.register(l,e),g(this,this.state,l,this._modules.get(l),a.preserveState),_(this,this.state)},o.prototype.unregisterModule=function(l){var e=this;"string"===typeof l&&(l=[l]),this._modules.unregister(l),this._withCommit(function(){var a=k(e.state,l.slice(0,-1));b.delete(a,l[l.length-1])}),y(this)},o.prototype.hotUpdate=function(l){this._modules.update(l),y(this,!0)},o.prototype._withCommit=function(l){var e=this._committing;this._committing=!0,l(),this._committing=e},Object.defineProperties(o.prototype,f);var P=D(function(l,e){var a={};return I(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){var e=this.$store.state,a=this.$store.getters;if(l){var n=N(this.$store,"mapState",l);if(!n)return;e=n.context.state,a=n.context.getters}return"function"===typeof r?r.call(this,e,a):e[r]},a[n].vuex=!0}),a}),S=D(function(l,e){var a={};return I(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){var e=[],a=arguments.length;while(a--)e[a]=arguments[a];var n=this.$store.commit;if(l){var i=N(this.$store,"mapMutations",l);if(!i)return;n=i.context.commit}return"function"===typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}}),a}),C=D(function(l,e){var a={};return I(e).forEach(function(e){var n=e.key,r=e.val;r=l+r,a[n]=function(){if(!l||N(this.$store,"mapGetters",l))return this.$store.getters[r]},a[n].vuex=!0}),a}),M=D(function(l,e){var a={};return I(e).forEach(function(e){var n=e.key,r=e.val;a[n]=function(){var e=[],a=arguments.length;while(a--)e[a]=arguments[a];var n=this.$store.dispatch;if(l){var i=N(this.$store,"mapActions",l);if(!i)return;n=i.context.dispatch}return"function"===typeof r?r.apply(this,[n].concat(e)):n.apply(this.$store,[r].concat(e))}}),a}),T=function(l){return{mapState:P.bind(null,l),mapGetters:C.bind(null,l),mapMutations:S.bind(null,l),mapActions:M.bind(null,l)}};function I(l){return Array.isArray(l)?l.map(function(l){return{key:l,val:l}}):Object.keys(l).map(function(e){return{key:e,val:l[e]}})}function D(l){return function(e,a){return"string"!==typeof e?(a=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),l(e,a)}}function N(l,e,a){var n=l._modulesNamespaceMap[a];return n}var L={Store:o,install:E,version:"3.0.1",mapState:P,mapMutations:S,mapGetters:C,mapActions:M,createNamespacedHelpers:T};e["default"]=L},3408:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("a6a6"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},"36b5":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("66fd")),r=i(a("2f62"));function i(l){return l&&l.__esModule?l:{default:l}}n.default.use(r.default);var s=new r.default.Store({state:{hasLogin:!1,userInfo:{}},mutations:{login:function(e,a){e.hasLogin=!0,e.userInfo=a,l.setStorage({key:"userInfo",data:a}),console.log(JSON.stringify(e.userInfo)," at store\\index.js:20")},logout:function(e){e.hasLogin=!1,e.userInfo={},l.removeStorage({key:"userInfo"})}},actions:{}}),c=s;e.default=c}).call(this,a("6e42")["default"])},"39dd":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{label:"北京",value:"2",childrens:[{label:"北京市",value:"52",childrens:[{label:"东城区",value:"500",childrens:[]},{label:"西城区",value:"501",childrens:[]},{label:"海淀区",value:"502",childrens:[]},{label:"朝阳区",value:"503",childrens:[]},{label:"崇文区",value:"504",childrens:[]},{label:"宣武区",value:"505",childrens:[]},{label:"丰台区",value:"506",childrens:[]},{label:"石景山区",value:"507",childrens:[]},{label:"房山区",value:"508",childrens:[]},{label:"门头沟区",value:"509",childrens:[]},{label:"通州区",value:"510",childrens:[]},{label:"顺义区",value:"511",childrens:[]},{label:"昌平区",value:"512",childrens:[]},{label:"怀柔区",value:"513",childrens:[]},{label:"平谷区",value:"514",childrens:[]},{label:"大兴区",value:"515",childrens:[]},{label:"密云县",value:"516",childrens:[]},{label:"延庆县",value:"517",childrens:[]}]}]},{label:"安徽省",value:"3",childrens:[{label:"安庆市",value:"36",childrens:[{label:"迎江区",value:"398",childrens:[]},{label:"大观区",value:"399",childrens:[]},{label:"宜秀区",value:"400",childrens:[]},{label:"桐城市",value:"401",childrens:[]},{label:"怀宁县",value:"402",childrens:[]},{label:"枞阳县",value:"403",childrens:[]},{label:"潜山县",value:"404",childrens:[]},{label:"太湖县",value:"405",childrens:[]},{label:"宿松县",value:"406",childrens:[]},{label:"望江县",value:"407",childrens:[]},{label:"岳西县",value:"408",childrens:[]}]},{label:"蚌埠市",value:"37",childrens:[{label:"中市区",value:"409",childrens:[]},{label:"东市区",value:"410",childrens:[]},{label:"西市区",value:"411",childrens:[]},{label:"郊区",value:"412",childrens:[]},{label:"怀远县",value:"413",childrens:[]},{label:"五河县",value:"414",childrens:[]},{label:"固镇县",value:"415",childrens:[]}]},{label:"巢湖市",value:"38",childrens:[{label:"居巢区",value:"416",childrens:[]},{label:"庐江县",value:"417",childrens:[]},{label:"无为县",value:"418",childrens:[]},{label:"含山县",value:"419",childrens:[]},{label:"和县",value:"420",childrens:[]}]},{label:"池州市",value:"39",childrens:[{label:"贵池区",value:"421",childrens:[]},{label:"东至县",value:"422",childrens:[]},{label:"石台县",value:"423",childrens:[]},{label:"青阳县",value:"424",childrens:[]}]},{label:"滁州市",value:"40",childrens:[{label:"琅琊区",value:"425",childrens:[]},{label:"南谯区",value:"426",childrens:[]},{label:"天长市",value:"427",childrens:[]},{label:"明光市",value:"428",childrens:[]},{label:"来安县",value:"429",childrens:[]},{label:"全椒县",value:"430",childrens:[]},{label:"定远县",value:"431",childrens:[]},{label:"凤阳县",value:"432",childrens:[]}]},{label:"阜阳市",value:"41",childrens:[{label:"蚌山区",value:"433",childrens:[]},{label:"龙子湖区",value:"434",childrens:[]},{label:"禹会区",value:"435",childrens:[]},{label:"淮上区",value:"436",childrens:[]},{label:"颍州区",value:"437",childrens:[]},{label:"颍东区",value:"438",childrens:[]},{label:"颍泉区",value:"439",childrens:[]},{label:"界首市",value:"440",childrens:[]},{label:"临泉县",value:"441",childrens:[]},{label:"太和县",value:"442",childrens:[]},{label:"阜南县",value:"443",childrens:[]},{label:"颖上县",value:"444",childrens:[]}]},{label:"淮北市",value:"42",childrens:[{label:"相山区",value:"445",childrens:[]},{label:"杜集区",value:"446",childrens:[]},{label:"烈山区",value:"447",childrens:[]},{label:"濉溪县",value:"448",childrens:[]}]},{label:"淮南市",value:"43",childrens:[{label:"田家庵区",value:"449",childrens:[]},{label:"大通区",value:"450",childrens:[]},{label:"谢家集区",value:"451",childrens:[]},{label:"八公山区",value:"452",childrens:[]},{label:"潘集区",value:"453",childrens:[]},{label:"凤台县",value:"454",childrens:[]}]},{label:"黄山市",value:"44",childrens:[{label:"屯溪区",value:"455",childrens:[]},{label:"黄山区",value:"456",childrens:[]},{label:"徽州区",value:"457",childrens:[]},{label:"歙县",value:"458",childrens:[]},{label:"休宁县",value:"459",childrens:[]},{label:"黟县",value:"460",childrens:[]},{label:"祁门县",value:"461",childrens:[]}]},{label:"六安市",value:"45",childrens:[{label:"金安区",value:"462",childrens:[]},{label:"裕安区",value:"463",childrens:[]},{label:"寿县",value:"464",childrens:[]},{label:"霍邱县",value:"465",childrens:[]},{label:"舒城县",value:"466",childrens:[]},{label:"金寨县",value:"467",childrens:[]},{label:"霍山县",value:"468",childrens:[]}]},{label:"马鞍山市",value:"46",childrens:[{label:"雨山区",value:"469",childrens:[]},{label:"花山区",value:"470",childrens:[]},{label:"金家庄区",value:"471",childrens:[]},{label:"当涂县",value:"472",childrens:[]}]},{label:"宿州市",value:"47",childrens:[{label:"埇桥区",value:"473",childrens:[]},{label:"砀山县",value:"474",childrens:[]},{label:"萧县",value:"475",childrens:[]},{label:"灵璧县",value:"476",childrens:[]},{label:"泗县",value:"477",childrens:[]}]},{label:"铜陵市",value:"48",childrens:[{label:"铜官山区",value:"478",childrens:[]},{label:"狮子山区",value:"479",childrens:[]},{label:"郊区",value:"480",childrens:[]},{label:"铜陵县",value:"481",childrens:[]}]},{label:"芜湖市",value:"49",childrens:[{label:"镜湖区",value:"482",childrens:[]},{label:"弋江区",value:"483",childrens:[]},{label:"鸠江区",value:"484",childrens:[]},{label:"三山区",value:"485",childrens:[]},{label:"芜湖县",value:"486",childrens:[]},{label:"繁昌县",value:"487",childrens:[]},{label:"南陵县",value:"488",childrens:[]}]},{label:"宣城市",value:"50",childrens:[{label:"宣州区",value:"489",childrens:[]},{label:"宁国市",value:"490",childrens:[]},{label:"郎溪县",value:"491",childrens:[]},{label:"广德县",value:"492",childrens:[]},{label:"泾县",value:"493",childrens:[]},{label:"绩溪县",value:"494",childrens:[]},{label:"旌德县",value:"495",childrens:[]}]},{label:"亳州市",value:"51",childrens:[{label:"涡阳县",value:"496",childrens:[]},{label:"蒙城县",value:"497",childrens:[]},{label:"利辛县",value:"498",childrens:[]},{label:"谯城区",value:"499",childrens:[]}]},{label:"合肥市",value:"3401",childrens:[{label:"庐阳区",value:"3402",childrens:[]},{label:"瑶海区",value:"3403",childrens:[]},{label:"蜀山区",value:"3404",childrens:[]},{label:"包河区",value:"3405",childrens:[]},{label:"长丰县",value:"3406",childrens:[]},{label:"肥东县",value:"3407",childrens:[]},{label:"肥西县",value:"3408",childrens:[]}]}]},{label:"福建省",value:"4",childrens:[{label:"福州市",value:"53",childrens:[{label:"鼓楼区",value:"518",childrens:[]},{label:"台江区",value:"519",childrens:[]},{label:"仓山区",value:"520",childrens:[]},{label:"马尾区",value:"521",childrens:[]},{label:"晋安区",value:"522",childrens:[]},{label:"福清市",value:"523",childrens:[]},{label:"长乐市",value:"524",childrens:[]},{label:"闽侯县",value:"525",childrens:[]},{label:"连江县",value:"526",childrens:[]},{label:"罗源县",value:"527",childrens:[]},{label:"闽清县",value:"528",childrens:[]},{label:"永泰县",value:"529",childrens:[]},{label:"平潭县",value:"530",childrens:[]}]},{label:"龙岩市",value:"54",childrens:[{label:"新罗区",value:"531",childrens:[]},{label:"漳平市",value:"532",childrens:[]},{label:"长汀县",value:"533",childrens:[]},{label:"永定县",value:"534",childrens:[]},{label:"上杭县",value:"535",childrens:[]},{label:"武平县",value:"536",childrens:[]},{label:"连城县",value:"537",childrens:[]}]},{label:"南平市",value:"55",childrens:[{label:"延平区",value:"538",childrens:[]},{label:"邵武市",value:"539",childrens:[]},{label:"武夷山市",value:"540",childrens:[]},{label:"建瓯市",value:"541",childrens:[]},{label:"建阳市",value:"542",childrens:[]},{label:"顺昌县",value:"543",childrens:[]},{label:"浦城县",value:"544",childrens:[]},{label:"光泽县",value:"545",childrens:[]},{label:"松溪县",value:"546",childrens:[]},{label:"政和县",value:"547",childrens:[]}]},{label:"宁德市",value:"56",childrens:[{label:"蕉城区",value:"548",childrens:[]},{label:"福安市",value:"549",childrens:[]},{label:"福鼎市",value:"550",childrens:[]},{label:"霞浦县",value:"551",childrens:[]},{label:"古田县",value:"552",childrens:[]},{label:"屏南县",value:"553",childrens:[]},{label:"寿宁县",value:"554",childrens:[]},{label:"周宁县",value:"555",childrens:[]},{label:"柘荣县",value:"556",childrens:[]}]},{label:"莆田市",value:"57",childrens:[{label:"城厢区",value:"557",childrens:[]},{label:"涵江区",value:"558",childrens:[]},{label:"荔城区",value:"559",childrens:[]},{label:"秀屿区",value:"560",childrens:[]},{label:"仙游县",value:"561",childrens:[]}]},{label:"泉州市",value:"58",childrens:[{label:"鲤城区",value:"562",childrens:[]},{label:"丰泽区",value:"563",childrens:[]},{label:"洛江区",value:"564",childrens:[]},{label:"清濛开发区",value:"565",childrens:[]},{label:"泉港区",value:"566",childrens:[]},{label:"石狮市",value:"567",childrens:[]},{label:"晋江市",value:"568",childrens:[]},{label:"南安市",value:"569",childrens:[]},{label:"惠安县",value:"570",childrens:[]},{label:"安溪县",value:"571",childrens:[]},{label:"永春县",value:"572",childrens:[]},{label:"德化县",value:"573",childrens:[]},{label:"金门县",value:"574",childrens:[]}]},{label:"三明市",value:"59",childrens:[{label:"梅列区",value:"575",childrens:[]},{label:"三元区",value:"576",childrens:[]},{label:"永安市",value:"577",childrens:[]},{label:"明溪县",value:"578",childrens:[]},{label:"清流县",value:"579",childrens:[]},{label:"宁化县",value:"580",childrens:[]},{label:"大田县",value:"581",childrens:[]},{label:"尤溪县",value:"582",childrens:[]},{label:"沙县",value:"583",childrens:[]},{label:"将乐县",value:"584",childrens:[]},{label:"泰宁县",value:"585",childrens:[]},{label:"建宁县",value:"586",childrens:[]}]},{label:"厦门市",value:"60",childrens:[{label:"思明区",value:"587",childrens:[]},{label:"海沧区",value:"588",childrens:[]},{label:"湖里区",value:"589",childrens:[]},{label:"集美区",value:"590",childrens:[]},{label:"同安区",value:"591",childrens:[]},{label:"翔安区",value:"592",childrens:[]}]},{label:"漳州市",value:"61",childrens:[{label:"芗城区",value:"593",childrens:[]},{label:"龙文区",value:"594",childrens:[]},{label:"龙海市",value:"595",childrens:[]},{label:"云霄县",value:"596",childrens:[]},{label:"漳浦县",value:"597",childrens:[]},{label:"诏安县",value:"598",childrens:[]},{label:"长泰县",value:"599",childrens:[]},{label:"东山县",value:"600",childrens:[]},{label:"南靖县",value:"601",childrens:[]},{label:"平和县",value:"602",childrens:[]},{label:"华安县",value:"603",childrens:[]}]}]},{label:"甘肃省",value:"5",childrens:[{label:"兰州市",value:"62",childrens:[{label:"皋兰县",value:"604",childrens:[]},{label:"城关区",value:"605",childrens:[]},{label:"七里河区",value:"606",childrens:[]},{label:"西固区",value:"607",childrens:[]},{label:"安宁区",value:"608",childrens:[]},{label:"红古区",value:"609",childrens:[]},{label:"永登县",value:"610",childrens:[]},{label:"榆中县",value:"611",childrens:[]}]},{label:"白银市",value:"63",childrens:[{label:"白银区",value:"612",childrens:[]},{label:"平川区",value:"613",childrens:[]},{label:"会宁县",value:"614",childrens:[]},{label:"景泰县",value:"615",childrens:[]},{label:"靖远县",value:"616",childrens:[]}]},{label:"定西市",value:"64",childrens:[{label:"临洮县",value:"617",childrens:[]},{label:"陇西县",value:"618",childrens:[]},{label:"通渭县",value:"619",childrens:[]},{label:"渭源县",value:"620",childrens:[]},{label:"漳县",value:"621",childrens:[]},{label:"岷县",value:"622",childrens:[]},{label:"安定区",value:"623",childrens:[]},{label:"安定区",value:"624",childrens:[]}]},{label:"甘南市",value:"65",childrens:[{label:"合作市",value:"625",childrens:[]},{label:"临潭县",value:"626",childrens:[]},{label:"卓尼县",value:"627",childrens:[]},{label:"舟曲县",value:"628",childrens:[]},{label:"迭部县",value:"629",childrens:[]},{label:"玛曲县",value:"630",childrens:[]},{label:"碌曲县",value:"631",childrens:[]},{label:"夏河县",value:"632",childrens:[]}]},{label:"嘉峪关市",value:"66",childrens:[{label:"嘉峪关市",value:"633",childrens:[]}]},{label:"金昌市",value:"67",childrens:[{label:"金川区",value:"634",childrens:[]},{label:"永昌县",value:"635",childrens:[]}]},{label:"酒泉市",value:"68",childrens:[{label:"肃州区",value:"636",childrens:[]},{label:"玉门市",value:"637",childrens:[]},{label:"敦煌市",value:"638",childrens:[]},{label:"金塔县",value:"639",childrens:[]},{label:"瓜州县",value:"640",childrens:[]},{label:"肃北",value:"641",childrens:[]},{label:"阿克塞",value:"642",childrens:[]}]},{label:"临夏市",value:"69",childrens:[{label:"临夏市",value:"643",childrens:[]},{label:"临夏县",value:"644",childrens:[]},{label:"康乐县",value:"645",childrens:[]},{label:"永靖县",value:"646",childrens:[]},{label:"广河县",value:"647",childrens:[]},{label:"和政县",value:"648",childrens:[]},{label:"东乡族自治县",value:"649",childrens:[]},{label:"积石山",value:"650",childrens:[]}]},{label:"陇南市",value:"70",childrens:[{label:"成县",value:"651",childrens:[]},{label:"徽县",value:"652",childrens:[]},{label:"康县",value:"653",childrens:[]},{label:"礼县",value:"654",childrens:[]},{label:"两当县",value:"655",childrens:[]},{label:"文县",value:"656",childrens:[]},{label:"西和县",value:"657",childrens:[]},{label:"宕昌县",value:"658",childrens:[]},{label:"武都区",value:"659",childrens:[]}]},{label:"平凉市",value:"71",childrens:[{label:"崇信县",value:"660",childrens:[]},{label:"华亭县",value:"661",childrens:[]},{label:"静宁县",value:"662",childrens:[]},{label:"灵台县",value:"663",childrens:[]},{label:"崆峒区",value:"664",childrens:[]},{label:"庄浪县",value:"665",childrens:[]},{label:"泾川县",value:"666",childrens:[]}]},{label:"庆阳市",value:"72",childrens:[{label:"合水县",value:"667",childrens:[]},{label:"华池县",value:"668",childrens:[]},{label:"环县",value:"669",childrens:[]},{label:"宁县",value:"670",childrens:[]},{label:"庆城县",value:"671",childrens:[]},{label:"西峰区",value:"672",childrens:[]},{label:"镇原县",value:"673",childrens:[]},{label:"正宁县",value:"674",childrens:[]}]},{label:"天水市",value:"73",childrens:[{label:"甘谷县",value:"675",childrens:[]},{label:"秦安县",value:"676",childrens:[]},{label:"清水县",value:"677",childrens:[]},{label:"秦州区",value:"678",childrens:[]},{label:"麦积区",value:"679",childrens:[]},{label:"武山县",value:"680",childrens:[]},{label:"张家川",value:"681",childrens:[]}]},{label:"武威市",value:"74",childrens:[{label:"古浪县",value:"682",childrens:[]},{label:"民勤县",value:"683",childrens:[]},{label:"天祝",value:"684",childrens:[]},{label:"凉州区",value:"685",childrens:[]}]},{label:"张掖市",value:"75",childrens:[{label:"高台县",value:"686",childrens:[]},{label:"临泽县",value:"687",childrens:[]},{label:"民乐县",value:"688",childrens:[]},{label:"山丹县",value:"689",childrens:[]},{label:"肃南",value:"690",childrens:[]},{label:"甘州区",value:"691",childrens:[]}]}]},{label:"广东省",value:"6",childrens:[{label:"广州市",value:"76",childrens:[{label:"从化市",value:"692",childrens:[]},{label:"天河区",value:"693",childrens:[]},{label:"东山区",value:"694",childrens:[]},{label:"白云区",value:"695",childrens:[]},{label:"海珠区",value:"696",childrens:[]},{label:"荔湾区",value:"697",childrens:[]},{label:"越秀区",value:"698",childrens:[]},{label:"黄埔区",value:"699",childrens:[]},{label:"番禺区",value:"700",childrens:[]},{label:"花都区",value:"701",childrens:[]},{label:"增城区",value:"702",childrens:[]},{label:"从化区",value:"703",childrens:[]},{label:"市郊",value:"704",childrens:[]}]},{label:"深圳市",value:"77",childrens:[{label:"福田区",value:"705",childrens:[]},{label:"罗湖区",value:"706",childrens:[]},{label:"南山区",value:"707",childrens:[]},{label:"宝安区",value:"708",childrens:[]},{label:"龙岗区",value:"709",childrens:[]},{label:"盐田区",value:"710",childrens:[]}]},{label:"潮州市",value:"78",childrens:[{label:"湘桥区",value:"711",childrens:[]},{label:"潮安县",value:"712",childrens:[]},{label:"饶平县",value:"713",childrens:[]}]},{label:"东莞市",value:"79",childrens:[{label:"南城区",value:"714",childrens:[]},{label:"东城区",value:"715",childrens:[]},{label:"万江区",value:"716",childrens:[]},{label:"莞城区",value:"717",childrens:[]},{label:"石龙镇",value:"718",childrens:[]},{label:"虎门镇",value:"719",childrens:[]},{label:"麻涌镇",value:"720",childrens:[]},{label:"道滘镇",value:"721",childrens:[]},{label:"石碣镇",value:"722",childrens:[]},{label:"沙田镇",value:"723",childrens:[]},{label:"望牛墩镇",value:"724",childrens:[]},{label:"洪梅镇",value:"725",childrens:[]},{label:"茶山镇",value:"726",childrens:[]},{label:"寮步镇",value:"727",childrens:[]},{label:"大岭山镇",value:"728",childrens:[]},{label:"大朗镇",value:"729",childrens:[]},{label:"黄江镇",value:"730",childrens:[]},{label:"樟木头",value:"731",childrens:[]},{label:"凤岗镇",value:"732",childrens:[]},{label:"塘厦镇",value:"733",childrens:[]},{label:"谢岗镇",value:"734",childrens:[]},{label:"厚街镇",value:"735",childrens:[]},{label:"清溪镇",value:"736",childrens:[]},{label:"常平镇",value:"737",childrens:[]},{label:"桥头镇",value:"738",childrens:[]},{label:"横沥镇",value:"739",childrens:[]},{label:"东坑镇",value:"740",childrens:[]},{label:"企石镇",value:"741",childrens:[]},{label:"石排镇",value:"742",childrens:[]},{label:"长安镇",value:"743",childrens:[]},{label:"中堂镇",value:"744",childrens:[]},{label:"高埗镇",value:"745",childrens:[]}]},{label:"佛山市",value:"80",childrens:[{label:"禅城区",value:"746",childrens:[]},{label:"南海区",value:"747",childrens:[]},{label:"顺德区",value:"748",childrens:[]},{label:"三水区",value:"749",childrens:[]},{label:"高明区",value:"750",childrens:[]}]},{label:"河源市",value:"81",childrens:[{label:"东源县",value:"751",childrens:[]},{label:"和平县",value:"752",childrens:[]},{label:"源城区",value:"753",childrens:[]},{label:"连平县",value:"754",childrens:[]},{label:"龙川县",value:"755",childrens:[]},{label:"紫金县",value:"756",childrens:[]}]},{label:"惠州市",value:"82",childrens:[{label:"惠阳区",value:"757",childrens:[]},{label:"惠城区",value:"758",childrens:[]},{label:"大亚湾",value:"759",childrens:[]},{label:"博罗县",value:"760",childrens:[]},{label:"惠东县",value:"761",childrens:[]},{label:"龙门县",value:"762",childrens:[]}]},{label:"江门市",value:"83",childrens:[{label:"江海区",value:"763",childrens:[]},{label:"蓬江区",value:"764",childrens:[]},{label:"新会区",value:"765",childrens:[]},{label:"台山市",value:"766",childrens:[]},{label:"开平市",value:"767",childrens:[]},{label:"鹤山市",value:"768",childrens:[]},{label:"恩平市",value:"769",childrens:[]}]},{label:"揭阳市",value:"84",childrens:[{label:"榕城区",value:"770",childrens:[]},{label:"普宁市",value:"771",childrens:[]},{label:"揭东县",value:"772",childrens:[]},{label:"揭西县",value:"773",childrens:[]},{label:"惠来县",value:"774",childrens:[]}]},{label:"茂名市",value:"85",childrens:[{label:"茂南区",value:"775",childrens:[]},{label:"茂港区",value:"776",childrens:[]},{label:"高州市",value:"777",childrens:[]},{label:"化州市",value:"778",childrens:[]},{label:"信宜市",value:"779",childrens:[]},{label:"电白县",value:"780",childrens:[]}]},{label:"梅州市",value:"86",childrens:[{label:"梅县",value:"781",childrens:[]},{label:"梅江区",value:"782",childrens:[]},{label:"兴宁市",value:"783",childrens:[]},{label:"大埔县",value:"784",childrens:[]},{label:"丰顺县",value:"785",childrens:[]},{label:"五华县",value:"786",childrens:[]},{label:"平远县",value:"787",childrens:[]},{label:"蕉岭县",value:"788",childrens:[]}]},{label:"清远市",value:"87",childrens:[{label:"清城区",value:"789",childrens:[]},{label:"英德市",value:"790",childrens:[]},{label:"连州市",value:"791",childrens:[]},{label:"佛冈县",value:"792",childrens:[]},{label:"阳山县",value:"793",childrens:[]},{label:"清新县",value:"794",childrens:[]},{label:"连山",value:"795",childrens:[]},{label:"连南",value:"796",childrens:[]}]},{label:"汕头市",value:"88",childrens:[{label:"南澳县",value:"797",childrens:[]},{label:"潮阳区",value:"798",childrens:[]},{label:"澄海区",value:"799",childrens:[]},{label:"龙湖区",value:"800",childrens:[]},{label:"金平区",value:"801",childrens:[]},{label:"濠江区",value:"802",childrens:[]},{label:"潮南区",value:"803",childrens:[]}]},{label:"汕尾市",value:"89",childrens:[{label:"城区",value:"804",childrens:[]},{label:"陆丰市",value:"805",childrens:[]},{label:"海丰县",value:"806",childrens:[]},{label:"陆河县",value:"807",childrens:[]}]},{label:"韶关市",value:"90",childrens:[{label:"曲江县",value:"808",childrens:[]},{label:"浈江区",value:"809",childrens:[]},{label:"武江区",value:"810",childrens:[]},{label:"曲江区",value:"811",childrens:[]},{label:"乐昌市",value:"812",childrens:[]},{label:"南雄市",value:"813",childrens:[]},{label:"始兴县",value:"814",childrens:[]},{label:"仁化县",value:"815",childrens:[]},{label:"翁源县",value:"816",childrens:[]},{label:"新丰县",value:"817",childrens:[]},{label:"乳源",value:"818",childrens:[]}]},{label:"阳江市",value:"91",childrens:[{label:"江城区",value:"819",childrens:[]},{label:"阳春市",value:"820",childrens:[]},{label:"阳西县",value:"821",childrens:[]},{label:"阳东县",value:"822",childrens:[]}]},{label:"云浮市",value:"92",childrens:[{label:"云城区",value:"823",childrens:[]},{label:"罗定市",value:"824",childrens:[]},{label:"新兴县",value:"825",childrens:[]},{label:"郁南县",value:"826",childrens:[]},{label:"云安县",value:"827",childrens:[]}]},{label:"湛江市",value:"93",childrens:[{label:"赤坎区",value:"828",childrens:[]},{label:"霞山区",value:"829",childrens:[]},{label:"坡头区",value:"830",childrens:[]},{label:"麻章区",value:"831",childrens:[]},{label:"廉江市",value:"832",childrens:[]},{label:"雷州市",value:"833",childrens:[]},{label:"吴川市",value:"834",childrens:[]},{label:"遂溪县",value:"835",childrens:[]},{label:"徐闻县",value:"836",childrens:[]}]},{label:"肇庆市",value:"94",childrens:[{label:"肇庆市",value:"837",childrens:[]},{label:"高要市",value:"838",childrens:[]},{label:"四会市",value:"839",childrens:[]},{label:"广宁县",value:"840",childrens:[]},{label:"怀集县",value:"841",childrens:[]},{label:"封开县",value:"842",childrens:[]},{label:"德庆县",value:"843",childrens:[]}]},{label:"中山市",value:"95",childrens:[{label:"石岐街道",value:"844",childrens:[]},{label:"东区街道",value:"845",childrens:[]},{label:"西区街道",value:"846",childrens:[]},{label:"环城街道",value:"847",childrens:[]},{label:"中山港街道",value:"848",childrens:[]},{label:"五桂山街道",value:"849",childrens:[]}]},{label:"珠海市",value:"96",childrens:[{label:"香洲区",value:"850",childrens:[]},{label:"斗门区",value:"851",childrens:[]},{label:"金湾区",value:"852",childrens:[]}]}]},{label:"广西壮族自治区",value:"7",childrens:[{label:"南宁市",value:"97",childrens:[{label:"邕宁区",value:"853",childrens:[]},{label:"青秀区",value:"854",childrens:[]},{label:"兴宁区",value:"855",childrens:[]},{label:"良庆区",value:"856",childrens:[]},{label:"西乡塘区",value:"857",childrens:[]},{label:"江南区",value:"858",childrens:[]},{label:"武鸣县",value:"859",childrens:[]},{label:"隆安县",value:"860",childrens:[]},{label:"马山县",value:"861",childrens:[]},{label:"上林县",value:"862",childrens:[]},{label:"宾阳县",value:"863",childrens:[]},{label:"横县",value:"864",childrens:[]}]},{label:"桂林市",value:"98",childrens:[{label:"秀峰区",value:"865",childrens:[]},{label:"叠彩区",value:"866",childrens:[]},{label:"象山区",value:"867",childrens:[]},{label:"七星区",value:"868",childrens:[]},{label:"雁山区",value:"869",childrens:[]},{label:"阳朔县",value:"870",childrens:[]},{label:"临桂县",value:"871",childrens:[]},{label:"灵川县",value:"872",childrens:[]},{label:"全州县",value:"873",childrens:[]},{label:"平乐县",value:"874",childrens:[]},{label:"兴安县",value:"875",childrens:[]},{label:"灌阳县",value:"876",childrens:[]},{label:"荔浦县",value:"877",childrens:[]},{label:"资源县",value:"878",childrens:[]},{label:"永福县",value:"879",childrens:[]},{label:"龙胜",value:"880",childrens:[]},{label:"恭城",value:"881",childrens:[]}]},{label:"百色市",value:"99",childrens:[{label:"右江区",value:"882",childrens:[]},{label:"凌云县",value:"883",childrens:[]},{label:"平果县",value:"884",childrens:[]},{label:"西林县",value:"885",childrens:[]},{label:"乐业县",value:"886",childrens:[]},{label:"德保县",value:"887",childrens:[]},{label:"田林县",value:"888",childrens:[]},{label:"田阳县",value:"889",childrens:[]},{label:"靖西县",value:"890",childrens:[]},{label:"田东县",value:"891",childrens:[]},{label:"那坡县",value:"892",childrens:[]},{label:"隆林",value:"893",childrens:[]}]},{label:"北海市",value:"100",childrens:[{label:"海城区",value:"894",childrens:[]},{label:"银海区",value:"895",childrens:[]},{label:"铁山港区",value:"896",childrens:[]},{label:"合浦县",value:"897",childrens:[]}]},{label:"崇左市",value:"101",childrens:[{label:"江州区",value:"898",childrens:[]},{label:"凭祥市",value:"899",childrens:[]},{label:"宁明县",value:"900",childrens:[]},{label:"扶绥县",value:"901",childrens:[]},{label:"龙州县",value:"902",childrens:[]},{label:"大新县",value:"903",childrens:[]},{label:"天等县",value:"904",childrens:[]}]},{label:"防城港市",value:"102",childrens:[{label:"港口区",value:"905",childrens:[]},{label:"防城区",value:"906",childrens:[]},{label:"东兴市",value:"907",childrens:[]},{label:"上思县",value:"908",childrens:[]}]},{label:"贵港市",value:"103",childrens:[{label:"港北区",value:"909",childrens:[]},{label:"港南区",value:"910",childrens:[]},{label:"覃塘区",value:"911",childrens:[]},{label:"桂平市",value:"912",childrens:[]},{label:"平南县",value:"913",childrens:[]}]},{label:"河池市",value:"104",childrens:[{label:"金城江区",value:"914",childrens:[]},{label:"宜州市",value:"915",childrens:[]},{label:"天峨县",value:"916",childrens:[]},{label:"凤山县",value:"917",childrens:[]},{label:"南丹县",value:"918",childrens:[]},{label:"东兰县",value:"919",childrens:[]},{label:"都安",value:"920",childrens:[]},{label:"罗城",value:"921",childrens:[]},{label:"巴马",value:"922",childrens:[]},{label:"环江",value:"923",childrens:[]},{label:"大化",value:"924",childrens:[]}]},{label:"贺州市",value:"105",childrens:[{label:"八步区",value:"925",childrens:[]},{label:"钟山县",value:"926",childrens:[]},{label:"昭平县",value:"927",childrens:[]},{label:"富川",value:"928",childrens:[]}]},{label:"来宾市",value:"106",childrens:[{label:"兴宾区",value:"929",childrens:[]},{label:"合山市",value:"930",childrens:[]},{label:"象州县",value:"931",childrens:[]},{label:"武宣县",value:"932",childrens:[]},{label:"忻城县",value:"933",childrens:[]},{label:"金秀",value:"934",childrens:[]}]},{label:"柳州市",value:"107",childrens:[{label:"城中区",value:"935",childrens:[]},{label:"鱼峰区",value:"936",childrens:[]},{label:"柳北区",value:"937",childrens:[]},{label:"柳南区",value:"938",childrens:[]},{label:"柳江县",value:"939",childrens:[]},{label:"柳城县",value:"940",childrens:[]},{label:"鹿寨县",value:"941",childrens:[]},{label:"融安县",value:"942",childrens:[]},{label:"融水",value:"943",childrens:[]},{label:"三江",value:"944",childrens:[]}]},{label:"钦州市",value:"108",childrens:[{label:"钦南区",value:"945",childrens:[]},{label:"钦北区",value:"946",childrens:[]},{label:"灵山县",value:"947",childrens:[]},{label:"浦北县",value:"948",childrens:[]}]},{label:"梧州市",value:"109",childrens:[{label:"万秀区",value:"949",childrens:[]},{label:"蝶山区",value:"950",childrens:[]},{label:"长洲区",value:"951",childrens:[]},{label:"岑溪市",value:"952",childrens:[]},{label:"苍梧县",value:"953",childrens:[]},{label:"藤县",value:"954",childrens:[]},{label:"蒙山县",value:"955",childrens:[]}]},{label:"玉林市",value:"110",childrens:[{label:"玉州区",value:"956",childrens:[]},{label:"北流市",value:"957",childrens:[]},{label:"容县",value:"958",childrens:[]},{label:"陆川县",value:"959",childrens:[]},{label:"博白县",value:"960",childrens:[]},{label:"兴业县",value:"961",childrens:[]}]}]},{label:"贵州省",value:"8",childrens:[{label:"贵阳市",value:"111",childrens:[{label:"南明区",value:"962",childrens:[]},{label:"云岩区",value:"963",childrens:[]},{label:"花溪区",value:"964",childrens:[]},{label:"乌当区",value:"965",childrens:[]},{label:"白云区",value:"966",childrens:[]},{label:"小河区",value:"967",childrens:[]},{label:"金阳新区",value:"968",childrens:[]},{label:"新天园区",value:"969",childrens:[]},{label:"清镇市",value:"970",childrens:[]},{label:"开阳县",value:"971",childrens:[]},{label:"修文县",value:"972",childrens:[]},{label:"息烽县",value:"973",childrens:[]}]},{label:"安顺市",value:"112",childrens:[{label:"西秀区",value:"974",childrens:[]},{label:"关岭",value:"975",childrens:[]},{label:"镇宁",value:"976",childrens:[]},{label:"紫云",value:"977",childrens:[]},{label:"平坝县",value:"978",childrens:[]},{label:"普定县",value:"979",childrens:[]}]},{label:"毕节市",value:"113",childrens:[{label:"毕节市",value:"980",childrens:[]},{label:"大方县",value:"981",childrens:[]},{label:"黔西县",value:"982",childrens:[]},{label:"金沙县",value:"983",childrens:[]},{label:"织金县",value:"984",childrens:[]},{label:"纳雍县",value:"985",childrens:[]},{label:"赫章县",value:"986",childrens:[]},{label:"威宁",value:"987",childrens:[]}]},{label:"六盘水市",value:"114",childrens:[{label:"钟山区",value:"988",childrens:[]},{label:"六枝特区",value:"989",childrens:[]},{label:"水城县",value:"990",childrens:[]},{label:"盘县",value:"991",childrens:[]}]},{label:"黔东南苗族侗族自治州",value:"115",childrens:[{label:"凯里市",value:"992",childrens:[]},{label:"黄平县",value:"993",childrens:[]},{label:"施秉县",value:"994",childrens:[]},{label:"三穗县",value:"995",childrens:[]},{label:"镇远县",value:"996",childrens:[]},{label:"岑巩县",value:"997",childrens:[]},{label:"天柱县",value:"998",childrens:[]},{label:"锦屏县",value:"999",childrens:[]},{label:"剑河县",value:"1000",childrens:[]},{label:"台江县",value:"1001",childrens:[]},{label:"黎平县",value:"1002",childrens:[]},{label:"榕江县",value:"1003",childrens:[]},{label:"从江县",value:"1004",childrens:[]},{label:"雷山县",value:"1005",childrens:[]},{label:"麻江县",value:"1006",childrens:[]},{label:"丹寨县",value:"1007",childrens:[]}]},{label:"黔南布依族苗族自治州",value:"116",childrens:[{label:"都匀市",value:"1008",childrens:[]},{label:"福泉市",value:"1009",childrens:[]},{label:"荔波县",value:"1010",childrens:[]},{label:"贵定县",value:"1011",childrens:[]},{label:"瓮安县",value:"1012",childrens:[]},{label:"独山县",value:"1013",childrens:[]},{label:"平塘县",value:"1014",childrens:[]},{label:"罗甸县",value:"1015",childrens:[]},{label:"长顺县",value:"1016",childrens:[]},{label:"龙里县",value:"1017",childrens:[]},{label:"惠水县",value:"1018",childrens:[]},{label:"三都",value:"1019",childrens:[]}]},{label:"黔西南布依族苗族自治州",value:"117",childrens:[{label:"兴义市",value:"1020",childrens:[]},{label:"兴仁县",value:"1021",childrens:[]},{label:"普安县",value:"1022",childrens:[]},{label:"晴隆县",value:"1023",childrens:[]},{label:"贞丰县",value:"1024",childrens:[]},{label:"望谟县",value:"1025",childrens:[]},{label:"册亨县",value:"1026",childrens:[]},{label:"安龙县",value:"1027",childrens:[]}]},{label:"铜仁市",value:"118",childrens:[{label:"铜仁市",value:"1028",childrens:[]},{label:"江口县",value:"1029",childrens:[]},{label:"石阡县",value:"1030",childrens:[]},{label:"思南县",value:"1031",childrens:[]},{label:"德江县",value:"1032",childrens:[]},{label:"玉屏",value:"1033",childrens:[]},{label:"印江",value:"1034",childrens:[]},{label:"沿河",value:"1035",childrens:[]},{label:"松桃",value:"1036",childrens:[]},{label:"万山特区",value:"1037",childrens:[]}]},{label:"遵义市",value:"119",childrens:[{label:"红花岗区",value:"1038",childrens:[]},{label:"务川县",value:"1039",childrens:[]},{label:"道真县",value:"1040",childrens:[]},{label:"汇川区",value:"1041",childrens:[]},{label:"赤水市",value:"1042",childrens:[]},{label:"仁怀市",value:"1043",childrens:[]},{label:"遵义县",value:"1044",childrens:[]},{label:"桐梓县",value:"1045",childrens:[]},{label:"绥阳县",value:"1046",childrens:[]},{label:"正安县",value:"1047",childrens:[]},{label:"凤冈县",value:"1048",childrens:[]},{label:"湄潭县",value:"1049",childrens:[]},{label:"余庆县",value:"1050",childrens:[]},{label:"习水县",value:"1051",childrens:[]},{label:"道真",value:"1052",childrens:[]},{label:"务川",value:"1053",childrens:[]}]}]},{label:"海南省",value:"9",childrens:[{label:"海口市",value:"120",childrens:[{label:"秀英区",value:"1054",childrens:[]},{label:"龙华区",value:"1055",childrens:[]},{label:"琼山区",value:"1056",childrens:[]},{label:"美兰区",value:"1057",childrens:[]}]},{label:"三亚市",value:"121",childrens:[]},{label:"白沙黎族自治县",value:"122",childrens:[]},{label:"保亭黎族苗族自治县",value:"123",childrens:[]},{label:"昌江黎族自治县",value:"124",childrens:[]},{label:"澄迈县市",value:"125",childrens:[]},{label:"定安县市",value:"126",childrens:[]},{label:"东方市",value:"127",childrens:[]},{label:"乐东黎族自治县",value:"128",childrens:[]},{label:"临高县市",value:"129",childrens:[]},{label:"陵水黎族自治县",value:"130",childrens:[]},{label:"琼海市",value:"131",childrens:[]},{label:"琼中黎族苗族自治县",value:"132",childrens:[]},{label:"屯昌县市",value:"133",childrens:[]},{label:"万宁市",value:"134",childrens:[]},{label:"文昌市",value:"135",childrens:[]},{label:"五指山市",value:"136",childrens:[]},{label:"儋州市",value:"137",childrens:[{label:"市区",value:"1058",childrens:[]},{label:"洋浦开发区",value:"1059",childrens:[]},{label:"那大镇",value:"1060",childrens:[]},{label:"王五镇",value:"1061",childrens:[]},{label:"雅星镇",value:"1062",childrens:[]},{label:"大成镇",value:"1063",childrens:[]},{label:"中和镇",value:"1064",childrens:[]},{label:"峨蔓镇",value:"1065",childrens:[]},{label:"南丰镇",value:"1066",childrens:[]},{label:"白马井镇",value:"1067",childrens:[]},{label:"兰洋镇",value:"1068",childrens:[]},{label:"和庆镇",value:"1069",childrens:[]},{label:"海头镇",value:"1070",childrens:[]},{label:"排浦镇",value:"1071",childrens:[]},{label:"东成镇",value:"1072",childrens:[]},{label:"光村镇",value:"1073",childrens:[]},{label:"木棠镇",value:"1074",childrens:[]},{label:"新州镇",value:"1075",childrens:[]},{label:"三都镇",value:"1076",childrens:[]},{label:"其他",value:"1077",childrens:[]}]}]},{label:"河北省",value:"10",childrens:[{label:"石家庄市",value:"138",childrens:[{label:"长安区",value:"1078",childrens:[]},{label:"桥东区",value:"1079",childrens:[]},{label:"桥西区",value:"1080",childrens:[]},{label:"新华区",value:"1081",childrens:[]},{label:"裕华区",value:"1082",childrens:[]},{label:"井陉矿区",value:"1083",childrens:[]},{label:"高新区",value:"1084",childrens:[]},{label:"辛集市",value:"1085",childrens:[]},{label:"藁城市",value:"1086",childrens:[]},{label:"晋州市",value:"1087",childrens:[]},{label:"新乐市",value:"1088",childrens:[]},{label:"鹿泉市",value:"1089",childrens:[]},{label:"井陉县",value:"1090",childrens:[]},{label:"正定县",value:"1091",childrens:[]},{label:"栾城县",value:"1092",childrens:[]},{label:"行唐县",value:"1093",childrens:[]},{label:"灵寿县",value:"1094",childrens:[]},{label:"高邑县",value:"1095",childrens:[]},{label:"深泽县",value:"1096",childrens:[]},{label:"赞皇县",value:"1097",childrens:[]},{label:"无极县",value:"1098",childrens:[]},{label:"平山县",value:"1099",childrens:[]},{label:"元氏县",value:"1100",childrens:[]},{label:"赵县",value:"1101",childrens:[]}]},{label:"保定市",value:"139",childrens:[{label:"新市区",value:"1102",childrens:[]},{label:"南市区",value:"1103",childrens:[]},{label:"北市区",value:"1104",childrens:[]},{label:"涿州市",value:"1105",childrens:[]},{label:"定州市",value:"1106",childrens:[]},{label:"安国市",value:"1107",childrens:[]},{label:"高碑店市",value:"1108",childrens:[]},{label:"满城县",value:"1109",childrens:[]},{label:"清苑县",value:"1110",childrens:[]},{label:"涞水县",value:"1111",childrens:[]},{label:"阜平县",value:"1112",childrens:[]},{label:"徐水县",value:"1113",childrens:[]},{label:"定兴县",value:"1114",childrens:[]},{label:"唐县",value:"1115",childrens:[]},{label:"高阳县",value:"1116",childrens:[]},{label:"容城县",value:"1117",childrens:[]},{label:"涞源县",value:"1118",childrens:[]},{label:"望都县",value:"1119",childrens:[]},{label:"安新县",value:"1120",childrens:[]},{label:"易县",value:"1121",childrens:[]},{label:"曲阳县",value:"1122",childrens:[]},{label:"蠡县",value:"1123",childrens:[]},{label:"顺平县",value:"1124",childrens:[]},{label:"博野县",value:"1125",childrens:[]},{label:"雄县",value:"1126",childrens:[]}]},{label:"沧州市",value:"140",childrens:[{label:"运河区",value:"1127",childrens:[]},{label:"新华区",value:"1128",childrens:[]},{label:"泊头市",value:"1129",childrens:[]},{label:"任丘市",value:"1130",childrens:[]},{label:"黄骅市",value:"1131",childrens:[]},{label:"河间市",value:"1132",childrens:[]},{label:"沧县",value:"1133",childrens:[]},{label:"青县",value:"1134",childrens:[]},{label:"东光县",value:"1135",childrens:[]},{label:"海兴县",value:"1136",childrens:[]},{label:"盐山县",value:"1137",childrens:[]},{label:"肃宁县",value:"1138",childrens:[]},{label:"南皮县",value:"1139",childrens:[]},{label:"吴桥县",value:"1140",childrens:[]},{label:"献县",value:"1141",childrens:[]},{label:"孟村",value:"1142",childrens:[]}]},{label:"承德市",value:"141",childrens:[{label:"双桥区",value:"1143",childrens:[]},{label:"双滦区",value:"1144",childrens:[]},{label:"鹰手营子矿区",value:"1145",childrens:[]},{label:"承德县",value:"1146",childrens:[]},{label:"兴隆县",value:"1147",childrens:[]},{label:"平泉县",value:"1148",childrens:[]},{label:"滦平县",value:"1149",childrens:[]},{label:"隆化县",value:"1150",childrens:[]},{label:"丰宁",value:"1151",childrens:[]},{label:"宽城",value:"1152",childrens:[]},{label:"围场",value:"1153",childrens:[]}]},{label:"邯郸市",value:"142",childrens:[{label:"从台区",value:"1154",childrens:[]},{label:"复兴区",value:"1155",childrens:[]},{label:"邯山区",value:"1156",childrens:[]},{label:"峰峰矿区",value:"1157",childrens:[]},{label:"武安市",value:"1158",childrens:[]},{label:"邯郸县",value:"1159",childrens:[]},{label:"临漳县",value:"1160",childrens:[]},{label:"成安县",value:"1161",childrens:[]},{label:"大名县",value:"1162",childrens:[]},{label:"涉县",value:"1163",childrens:[]},{label:"磁县",value:"1164",childrens:[]},{label:"肥乡县",value:"1165",childrens:[]},{label:"永年县",value:"1166",childrens:[]},{label:"邱县",value:"1167",childrens:[]},{label:"鸡泽县",value:"1168",childrens:[]},{label:"广平县",value:"1169",childrens:[]},{label:"馆陶县",value:"1170",childrens:[]},{label:"魏县",value:"1171",childrens:[]},{label:"曲周县",value:"1172",childrens:[]}]},{label:"衡水市",value:"143",childrens:[{label:"桃城区",value:"1173",childrens:[]},{label:"冀州市",value:"1174",childrens:[]},{label:"深州市",value:"1175",childrens:[]},{label:"枣强县",value:"1176",childrens:[]},{label:"武邑县",value:"1177",childrens:[]},{label:"武强县",value:"1178",childrens:[]},{label:"饶阳县",value:"1179",childrens:[]},{label:"安平县",value:"1180",childrens:[]},{label:"故城县",value:"1181",childrens:[]},{label:"景县",value:"1182",childrens:[]},{label:"阜城县",value:"1183",childrens:[]}]},{label:"廊坊市",value:"144",childrens:[{label:"安次区",value:"1184",childrens:[]},{label:"广阳区",value:"1185",childrens:[]},{label:"霸州市",value:"1186",childrens:[]},{label:"三河市",value:"1187",childrens:[]},{label:"固安县",value:"1188",childrens:[]},{label:"永清县",value:"1189",childrens:[]},{label:"香河县",value:"1190",childrens:[]},{label:"大城县",value:"1191",childrens:[]},{label:"文安县",value:"1192",childrens:[]},{label:"大厂",value:"1193",childrens:[]}]},{label:"秦皇岛市",value:"145",childrens:[{label:"海港区",value:"1194",childrens:[]},{label:"山海关区",value:"1195",childrens:[]},{label:"北戴河区",value:"1196",childrens:[]},{label:"昌黎县",value:"1197",childrens:[]},{label:"抚宁县",value:"1198",childrens:[]},{label:"卢龙县",value:"1199",childrens:[]},{label:"青龙",value:"1200",childrens:[]}]},{label:"唐山市",value:"146",childrens:[{label:"路北区",value:"1201",childrens:[]},{label:"路南区",value:"1202",childrens:[]},{label:"古冶区",value:"1203",childrens:[]},{label:"开平区",value:"1204",childrens:[]},{label:"丰南区",value:"1205",childrens:[]},{label:"丰润区",value:"1206",childrens:[]},{label:"遵化市",value:"1207",childrens:[]},{label:"迁安市",value:"1208",childrens:[]},{label:"滦县",value:"1209",childrens:[]},{label:"滦南县",value:"1210",childrens:[]},{label:"乐亭县",value:"1211",childrens:[]},{label:"迁西县",value:"1212",childrens:[]},{label:"玉田县",value:"1213",childrens:[]},{label:"唐海县",value:"1214",childrens:[]}]},{label:"邢台市",value:"147",childrens:[{label:"桥东区",value:"1215",childrens:[]},{label:"桥西区",value:"1216",childrens:[]},{label:"南宫市",value:"1217",childrens:[]},{label:"沙河市",value:"1218",childrens:[]},{label:"邢台县",value:"1219",childrens:[]},{label:"临城县",value:"1220",childrens:[]},{label:"内丘县",value:"1221",childrens:[]},{label:"柏乡县",value:"1222",childrens:[]},{label:"隆尧县",value:"1223",childrens:[]},{label:"任县",value:"1224",childrens:[]},{label:"南和县",value:"1225",childrens:[]},{label:"宁晋县",value:"1226",childrens:[]},{label:"巨鹿县",value:"1227",childrens:[]},{label:"新河县",value:"1228",childrens:[]},{label:"广宗县",value:"1229",childrens:[]},{label:"平乡县",value:"1230",childrens:[]},{label:"威县",value:"1231",childrens:[]},{label:"清河县",value:"1232",childrens:[]},{label:"临西县",value:"1233",childrens:[]}]},{label:"张家口市",value:"148",childrens:[{label:"桥西区",value:"1234",childrens:[]},{label:"桥东区",value:"1235",childrens:[]},{label:"宣化区",value:"1236",childrens:[]},{label:"下花园区",value:"1237",childrens:[]},{label:"宣化县",value:"1238",childrens:[]},{label:"张北县",value:"1239",childrens:[]},{label:"康保县",value:"1240",childrens:[]},{label:"沽源县",value:"1241",childrens:[]},{label:"尚义县",value:"1242",childrens:[]},{label:"蔚县",value:"1243",childrens:[]},{label:"阳原县",value:"1244",childrens:[]},{label:"怀安县",value:"1245",childrens:[]},{label:"万全县",value:"1246",childrens:[]},{label:"怀来县",value:"1247",childrens:[]},{label:"涿鹿县",value:"1248",childrens:[]},{label:"赤城县",value:"1249",childrens:[]},{label:"崇礼县",value:"1250",childrens:[]}]}]},{label:"河南省",value:"11",childrens:[{label:"郑州市",value:"149",childrens:[{label:"金水区",value:"1251",childrens:[]},{label:"邙山区",value:"1252",childrens:[]},{label:"二七区",value:"1253",childrens:[]},{label:"管城区",value:"1254",childrens:[]},{label:"中原区",value:"1255",childrens:[]},{label:"上街区",value:"1256",childrens:[]},{label:"惠济区",value:"1257",childrens:[]},{label:"郑东新区",value:"1258",childrens:[]},{label:"经济技术开发区",value:"1259",childrens:[]},{label:"高新开发区",value:"1260",childrens:[]},{label:"出口加工区",value:"1261",childrens:[]},{label:"巩义市",value:"1262",childrens:[]},{label:"荥阳市",value:"1263",childrens:[]},{label:"新密市",value:"1264",childrens:[]},{label:"新郑市",value:"1265",childrens:[]},{label:"登封市",value:"1266",childrens:[]},{label:"中牟县",value:"1267",childrens:[]}]},{label:"洛阳市",value:"150",childrens:[{label:"西工区",value:"1268",childrens:[]},{label:"老城区",value:"1269",childrens:[]},{label:"涧西区",value:"1270",childrens:[]},{label:"瀍河回族区",value:"1271",childrens:[]},{label:"洛龙区",value:"1272",childrens:[]},{label:"吉利区",value:"1273",childrens:[]},{label:"偃师市",value:"1274",childrens:[]},{label:"孟津县",value:"1275",childrens:[]},{label:"新安县",value:"1276",childrens:[]},{label:"栾川县",value:"1277",childrens:[]},{label:"嵩县",value:"1278",childrens:[]},{label:"汝阳县",value:"1279",childrens:[]},{label:"宜阳县",value:"1280",childrens:[]},{label:"洛宁县",value:"1281",childrens:[]},{label:"伊川县",value:"1282",childrens:[]}]},{label:"开封市",value:"151",childrens:[{label:"鼓楼区",value:"1283",childrens:[]},{label:"龙亭区",value:"1284",childrens:[]},{label:"顺河回族区",value:"1285",childrens:[]},{label:"金明区",value:"1286",childrens:[]},{label:"禹王台区",value:"1287",childrens:[]},{label:"杞县",value:"1288",childrens:[]},{label:"通许县",value:"1289",childrens:[]},{label:"尉氏县",value:"1290",childrens:[]},{label:"开封县",value:"1291",childrens:[]},{label:"兰考县",value:"1292",childrens:[]}]},{label:"安阳市",value:"152",childrens:[{label:"北关区",value:"1293",childrens:[]},{label:"文峰区",value:"1294",childrens:[]},{label:"殷都区",value:"1295",childrens:[]},{label:"龙安区",value:"1296",childrens:[]},{label:"林州市",value:"1297",childrens:[]},{label:"安阳县",value:"1298",childrens:[]},{label:"汤阴县",value:"1299",childrens:[]},{label:"滑县",value:"1300",childrens:[]},{label:"内黄县",value:"1301",childrens:[]}]},{label:"鹤壁市",value:"153",childrens:[{label:"淇滨区",value:"1302",childrens:[]},{label:"山城区",value:"1303",childrens:[]},{label:"鹤山区",value:"1304",childrens:[]},{label:"浚县",value:"1305",childrens:[]},{label:"淇县",value:"1306",childrens:[]}]},{label:"济源市",value:"154",childrens:[{label:"济源市",value:"1307",childrens:[]}]},{label:"焦作市",value:"155",childrens:[{label:"解放区",value:"1308",childrens:[]},{label:"中站区",value:"1309",childrens:[]},{label:"马村区",value:"1310",childrens:[]},{label:"山阳区",value:"1311",childrens:[]},{label:"沁阳市",value:"1312",childrens:[]},{label:"孟州市",value:"1313",childrens:[]},{label:"修武县",value:"1314",childrens:[]},{label:"博爱县",value:"1315",childrens:[]},{label:"武陟县",value:"1316",childrens:[]},{label:"温县",value:"1317",childrens:[]}]},{label:"南阳市",value:"156",childrens:[{label:"卧龙区",value:"1318",childrens:[]},{label:"宛城区",value:"1319",childrens:[]},{label:"邓州市",value:"1320",childrens:[]},{label:"南召县",value:"1321",childrens:[]},{label:"方城县",value:"1322",childrens:[]},{label:"西峡县",value:"1323",childrens:[]},{label:"镇平县",value:"1324",childrens:[]},{label:"内乡县",value:"1325",childrens:[]},{label:"淅川县",value:"1326",childrens:[]},{label:"社旗县",value:"1327",childrens:[]},{label:"唐河县",value:"1328",childrens:[]},{label:"新野县",value:"1329",childrens:[]},{label:"桐柏县",value:"1330",childrens:[]}]},{label:"平顶山市",value:"157",childrens:[{label:"新华区",value:"1331",childrens:[]},{label:"卫东区",value:"1332",childrens:[]},{label:"湛河区",value:"1333",childrens:[]},{label:"石龙区",value:"1334",childrens:[]},{label:"舞钢市",value:"1335",childrens:[]},{label:"汝州市",value:"1336",childrens:[]},{label:"宝丰县",value:"1337",childrens:[]},{label:"叶县",value:"1338",childrens:[]},{label:"鲁山县",value:"1339",childrens:[]},{label:"郏县",value:"1340",childrens:[]}]},{label:"三门峡市",value:"158",childrens:[{label:"湖滨区",value:"1341",childrens:[]},{label:"义马市",value:"1342",childrens:[]},{label:"灵宝市",value:"1343",childrens:[]},{label:"渑池县",value:"1344",childrens:[]},{label:"陕县",value:"1345",childrens:[]},{label:"卢氏县",value:"1346",childrens:[]}]},{label:"商丘市",value:"159",childrens:[{label:"梁园区",value:"1347",childrens:[]},{label:"睢阳区",value:"1348",childrens:[]},{label:"永城市",value:"1349",childrens:[]},{label:"民权县",value:"1350",childrens:[]},{label:"睢县",value:"1351",childrens:[]},{label:"宁陵县",value:"1352",childrens:[]},{label:"虞城县",value:"1353",childrens:[]},{label:"柘城县",value:"1354",childrens:[]},{label:"夏邑县",value:"1355",childrens:[]}]},{label:"新乡市",value:"160",childrens:[{label:"卫滨区",value:"1356",childrens:[]},{label:"红旗区",value:"1357",childrens:[]},{label:"凤泉区",value:"1358",childrens:[]},{label:"牧野区",value:"1359",childrens:[]},{label:"卫辉市",value:"1360",childrens:[]},{label:"辉县市",value:"1361",childrens:[]},{label:"新乡县",value:"1362",childrens:[]},{label:"获嘉县",value:"1363",childrens:[]},{label:"原阳县",value:"1364",childrens:[]},{label:"延津县",value:"1365",childrens:[]},{label:"封丘县",value:"1366",childrens:[]},{label:"长垣县",value:"1367",childrens:[]}]},{label:"信阳市",value:"161",childrens:[{label:"浉河区",value:"1368",childrens:[]},{label:"平桥区",value:"1369",childrens:[]},{label:"罗山县",value:"1370",childrens:[]},{label:"光山县",value:"1371",childrens:[]},{label:"新县",value:"1372",childrens:[]},{label:"商城县",value:"1373",childrens:[]},{label:"固始县",value:"1374",childrens:[]},{label:"潢川县",value:"1375",childrens:[]},{label:"淮滨县",value:"1376",childrens:[]},{label:"息县",value:"1377",childrens:[]}]},{label:"许昌市",value:"162",childrens:[{label:"魏都区",value:"1378",childrens:[]},{label:"禹州市",value:"1379",childrens:[]},{label:"长葛市",value:"1380",childrens:[]},{label:"许昌县",value:"1381",childrens:[]},{label:"鄢陵县",value:"1382",childrens:[]},{label:"襄城县",value:"1383",childrens:[]}]},{label:"周口市",value:"163",childrens:[{label:"川汇区",value:"1384",childrens:[]},{label:"项城市",value:"1385",childrens:[]},{label:"扶沟县",value:"1386",childrens:[]},{label:"西华县",value:"1387",childrens:[]},{label:"商水县",value:"1388",childrens:[]},{label:"沈丘县",value:"1389",childrens:[]},{label:"郸城县",value:"1390",childrens:[]},{label:"淮阳县",value:"1391",childrens:[]},{label:"太康县",value:"1392",childrens:[]},{label:"鹿邑县",value:"1393",childrens:[]}]},{label:"驻马店市",value:"164",childrens:[{label:"驿城区",value:"1394",childrens:[]},{label:"西平县",value:"1395",childrens:[]},{label:"上蔡县",value:"1396",childrens:[]},{label:"平舆县",value:"1397",childrens:[]},{label:"正阳县",value:"1398",childrens:[]},{label:"确山县",value:"1399",childrens:[]},{label:"泌阳县",value:"1400",childrens:[]},{label:"汝南县",value:"1401",childrens:[]},{label:"遂平县",value:"1402",childrens:[]},{label:"新蔡县",value:"1403",childrens:[]}]},{label:"漯河市",value:"165",childrens:[{label:"郾城区",value:"1404",childrens:[]},{label:"源汇区",value:"1405",childrens:[]},{label:"召陵区",value:"1406",childrens:[]},{label:"舞阳县",value:"1407",childrens:[]},{label:"临颍县",value:"1408",childrens:[]}]},{label:"濮阳市",value:"166",childrens:[{label:"华龙区",value:"1409",childrens:[]},{label:"清丰县",value:"1410",childrens:[]},{label:"南乐县",value:"1411",childrens:[]},{label:"范县",value:"1412",childrens:[]},{label:"台前县",value:"1413",childrens:[]},{label:"濮阳县",value:"1414",childrens:[]}]}]},{label:"黑龙江省",value:"12",childrens:[{label:"哈尔滨市",value:"167",childrens:[{label:"道里区",value:"1415",childrens:[]},{label:"南岗区",value:"1416",childrens:[]},{label:"动力区",value:"1417",childrens:[]},{label:"平房区",value:"1418",childrens:[]},{label:"香坊区",value:"1419",childrens:[]},{label:"太平区",value:"1420",childrens:[]},{label:"道外区",value:"1421",childrens:[]},{label:"阿城区",value:"1422",childrens:[]},{label:"呼兰区",value:"1423",childrens:[]},{label:"松北区",value:"1424",childrens:[]},{label:"尚志市",value:"1425",childrens:[]},{label:"双城市",value:"1426",childrens:[]},{label:"五常市",value:"1427",childrens:[]},{label:"方正县",value:"1428",childrens:[]},{label:"宾县",value:"1429",childrens:[]},{label:"依兰县",value:"1430",childrens:[]},{label:"巴彦县",value:"1431",childrens:[]},{label:"通河县",value:"1432",childrens:[]},{label:"木兰县",value:"1433",childrens:[]},{label:"延寿县",value:"1434",childrens:[]}]},{label:"大庆市",value:"168",childrens:[{label:"萨尔图区",value:"1435",childrens:[]},{label:"红岗区",value:"1436",childrens:[]},{label:"龙凤区",value:"1437",childrens:[]},{label:"让胡路区",value:"1438",childrens:[]},{label:"大同区",value:"1439",childrens:[]},{label:"肇州县",value:"1440",childrens:[]},{label:"肇源县",value:"1441",childrens:[]},{label:"林甸县",value:"1442",childrens:[]},{label:"杜尔伯特",value:"1443",childrens:[]}]},{label:"大兴安岭市",value:"169",childrens:[{label:"呼玛县",value:"1444",childrens:[]},{label:"漠河县",value:"1445",childrens:[]},{label:"塔河县",value:"1446",childrens:[]}]},{label:"鹤岗市",value:"170",childrens:[{label:"兴山区",value:"1447",childrens:[]},{label:"工农区",value:"1448",childrens:[]},{label:"南山区",value:"1449",childrens:[]},{label:"兴安区",value:"1450",childrens:[]},{label:"向阳区",value:"1451",childrens:[]},{label:"东山区",value:"1452",childrens:[]},{label:"萝北县",value:"1453",childrens:[]},{label:"绥滨县",value:"1454",childrens:[]}]},{label:"黑河市",value:"171",childrens:[{label:"爱辉区",value:"1455",childrens:[]},{label:"五大连池市",value:"1456",childrens:[]},{label:"北安市",value:"1457",childrens:[]},{label:"嫩江县",value:"1458",childrens:[]},{label:"逊克县",value:"1459",childrens:[]},{label:"孙吴县",value:"1460",childrens:[]}]},{label:"鸡西市",value:"172",childrens:[{label:"鸡冠区",value:"1461",childrens:[]},{label:"恒山区",value:"1462",childrens:[]},{label:"城子河区",value:"1463",childrens:[]},{label:"滴道区",value:"1464",childrens:[]},{label:"梨树区",value:"1465",childrens:[]},{label:"虎林市",value:"1466",childrens:[]},{label:"密山市",value:"1467",childrens:[]},{label:"鸡东县",value:"1468",childrens:[]}]},{label:"佳木斯市",value:"173",childrens:[{label:"前进区",value:"1469",childrens:[]},{label:"郊区",value:"1470",childrens:[]},{label:"向阳区",value:"1471",childrens:[]},{label:"东风区",value:"1472",childrens:[]},{label:"同江市",value:"1473",childrens:[]},{label:"富锦市",value:"1474",childrens:[]},{label:"桦南县",value:"1475",childrens:[]},{label:"桦川县",value:"1476",childrens:[]},{label:"汤原县",value:"1477",childrens:[]},{label:"抚远县",value:"1478",childrens:[]}]},{label:"牡丹江市",value:"174",childrens:[{label:"爱民区",value:"1479",childrens:[]},{label:"东安区",value:"1480",childrens:[]},{label:"阳明区",value:"1481",childrens:[]},{label:"西安区",value:"1482",childrens:[]},{label:"绥芬河市",value:"1483",childrens:[]},{label:"海林市",value:"1484",childrens:[]},{label:"宁安市",value:"1485",childrens:[]},{label:"穆棱市",value:"1486",childrens:[]},{label:"东宁县",value:"1487",childrens:[]},{label:"林口县",value:"1488",childrens:[]}]},{label:"七台河市",value:"175",childrens:[{label:"桃山区",value:"1489",childrens:[]},{label:"新兴区",value:"1490",childrens:[]},{label:"茄子河区",value:"1491",childrens:[]},{label:"勃利县",value:"1492",childrens:[]}]},{label:"齐齐哈尔市",value:"176",childrens:[{label:"龙沙区",value:"1493",childrens:[]},{label:"昂昂溪区",value:"1494",childrens:[]},{label:"铁峰区",value:"1495",childrens:[]},{label:"建华区",value:"1496",childrens:[]},{label:"富拉尔基区",value:"1497",childrens:[]},{label:"碾子山区",value:"1498",childrens:[]},{label:"梅里斯达斡尔区",value:"1499",childrens:[]},{label:"讷河市",value:"1500",childrens:[]},{label:"龙江县",value:"1501",childrens:[]},{label:"依安县",value:"1502",childrens:[]},{label:"泰来县",value:"1503",childrens:[]},{label:"甘南县",value:"1504",childrens:[]},{label:"富裕县",value:"1505",childrens:[]},{label:"克山县",value:"1506",childrens:[]},{label:"克东县",value:"1507",childrens:[]},{label:"拜泉县",value:"1508",childrens:[]}]},{label:"双鸭山市",value:"177",childrens:[{label:"尖山区",value:"1509",childrens:[]},{label:"岭东区",value:"1510",childrens:[]},{label:"四方台区",value:"1511",childrens:[]},{label:"宝山区",value:"1512",childrens:[]},{label:"集贤县",value:"1513",childrens:[]},{label:"友谊县",value:"1514",childrens:[]},{label:"宝清县",value:"1515",childrens:[]},{label:"饶河县",value:"1516",childrens:[]}]},{label:"绥化市",value:"178",childrens:[{label:"北林区",value:"1517",childrens:[]},{label:"安达市",value:"1518",childrens:[]},{label:"肇东市",value:"1519",childrens:[]},{label:"海伦市",value:"1520",childrens:[]},{label:"望奎县",value:"1521",childrens:[]},{label:"兰西县",value:"1522",childrens:[]},{label:"青冈县",value:"1523",childrens:[]},{label:"庆安县",value:"1524",childrens:[]},{label:"明水县",value:"1525",childrens:[]},{label:"绥棱县",value:"1526",childrens:[]}]},{label:"伊春市",value:"179",childrens:[{label:"伊春区",value:"1527",childrens:[]},{label:"带岭区",value:"1528",childrens:[]},{label:"南岔区",value:"1529",childrens:[]},{label:"金山屯区",value:"1530",childrens:[]},{label:"西林区",value:"1531",childrens:[]},{label:"美溪区",value:"1532",childrens:[]},{label:"乌马河区",value:"1533",childrens:[]},{label:"翠峦区",value:"1534",childrens:[]},{label:"友好区",value:"1535",childrens:[]},{label:"上甘岭区",value:"1536",childrens:[]},{label:"五营区",value:"1537",childrens:[]},{label:"红星区",value:"1538",childrens:[]},{label:"新青区",value:"1539",childrens:[]},{label:"汤旺河区",value:"1540",childrens:[]},{label:"乌伊岭区",value:"1541",childrens:[]},{label:"铁力市",value:"1542",childrens:[]},{label:"嘉荫县",value:"1543",childrens:[]}]}]},{label:"湖北省",value:"13",childrens:[{label:"武汉市",value:"180",childrens:[{label:"江岸区",value:"1544",childrens:[]},{label:"武昌区",value:"1545",childrens:[]},{label:"江汉区",value:"1546",childrens:[]},{label:"硚口区",value:"1547",childrens:[]},{label:"汉阳区",value:"1548",childrens:[]},{label:"青山区",value:"1549",childrens:[]},{label:"洪山区",value:"1550",childrens:[]},{label:"东西湖区",value:"1551",childrens:[]},{label:"汉南区",value:"1552",childrens:[]},{label:"蔡甸区",value:"1553",childrens:[]},{label:"江夏区",value:"1554",childrens:[]},{label:"黄陂区",value:"1555",childrens:[]},{label:"新洲区",value:"1556",childrens:[]},{label:"经济开发区",value:"1557",childrens:[]}]},{label:"仙桃市",value:"181",childrens:[{label:"仙桃市",value:"1558",childrens:[]}]},{label:"鄂州市",value:"182",childrens:[{label:"鄂城区",value:"1559",childrens:[]},{label:"华容区",value:"1560",childrens:[]},{label:"梁子湖区",value:"1561",childrens:[]}]},{label:"黄冈市",value:"183",childrens:[{label:"黄州区",value:"1562",childrens:[]},{label:"麻城市",value:"1563",childrens:[]},{label:"武穴市",value:"1564",childrens:[]},{label:"团风县",value:"1565",childrens:[]},{label:"红安县",value:"1566",childrens:[]},{label:"罗田县",value:"1567",childrens:[]},{label:"英山县",value:"1568",childrens:[]},{label:"浠水县",value:"1569",childrens:[]},{label:"蕲春县",value:"1570",childrens:[]},{label:"黄梅县",value:"1571",childrens:[]}]},{label:"黄石市",value:"184",childrens:[{label:"黄石港区",value:"1572",childrens:[]},{label:"西塞山区",value:"1573",childrens:[]},{label:"下陆区",value:"1574",childrens:[]},{label:"铁山区",value:"1575",childrens:[]},{label:"大冶市",value:"1576",childrens:[]},{label:"阳新县",value:"1577",childrens:[]}]},{label:"荆门市",value:"185",childrens:[{label:"东宝区",value:"1578",childrens:[]},{label:"掇刀区",value:"1579",childrens:[]},{label:"钟祥市",value:"1580",childrens:[]},{label:"京山县",value:"1581",childrens:[]},{label:"沙洋县",value:"1582",childrens:[]}]},{label:"荆州市",value:"186",childrens:[{label:"沙市区",value:"1583",childrens:[]},{label:"荆州区",value:"1584",childrens:[]},{label:"石首市",value:"1585",childrens:[]},{label:"洪湖市",value:"1586",childrens:[]},{label:"松滋市",value:"1587",childrens:[]},{label:"公安县",value:"1588",childrens:[]},{label:"监利县",value:"1589",childrens:[]},{label:"江陵县",value:"1590",childrens:[]}]},{label:"潜江市",value:"187",childrens:[{label:"潜江市",value:"1591",childrens:[]}]},{label:"神农架林区",value:"188",childrens:[{label:"神农架林区",value:"1592",childrens:[]}]},{label:"十堰市",value:"189",childrens:[{label:"张湾区",value:"1593",childrens:[]},{label:"茅箭区",value:"1594",childrens:[]},{label:"丹江口市",value:"1595",childrens:[]},{label:"郧县",value:"1596",childrens:[]},{label:"郧西县",value:"1597",childrens:[]},{label:"竹山县",value:"1598",childrens:[]},{label:"竹溪县",value:"1599",childrens:[]},{label:"房县",value:"1600",childrens:[]}]},{label:"随州市",value:"190",childrens:[{label:"曾都区",value:"1601",childrens:[]},{label:"广水市",value:"1602",childrens:[]}]},{label:"天门市",value:"191",childrens:[{label:"天门市",value:"1603",childrens:[]}]},{label:"咸宁市",value:"192",childrens:[{label:"咸安区",value:"1604",childrens:[]},{label:"赤壁市",value:"1605",childrens:[]},{label:"嘉鱼县",value:"1606",childrens:[]},{label:"通城县",value:"1607",childrens:[]},{label:"崇阳县",value:"1608",childrens:[]},{label:"通山县",value:"1609",childrens:[]}]},{label:"襄樊市",value:"193",childrens:[{label:"襄城区",value:"1610",childrens:[]},{label:"樊城区",value:"1611",childrens:[]},{label:"襄阳区",value:"1612",childrens:[]},{label:"老河口市",value:"1613",childrens:[]},{label:"枣阳市",value:"1614",childrens:[]},{label:"宜城市",value:"1615",childrens:[]},{label:"南漳县",value:"1616",childrens:[]},{label:"谷城县",value:"1617",childrens:[]},{label:"保康县",value:"1618",childrens:[]}]},{label:"孝感市",value:"194",childrens:[{label:"孝南区",value:"1619",childrens:[]},{label:"应城市",value:"1620",childrens:[]},{label:"安陆市",value:"1621",childrens:[]},{label:"汉川市",value:"1622",childrens:[]},{label:"孝昌县",value:"1623",childrens:[]},{label:"大悟县",value:"1624",childrens:[]},{label:"云梦县",value:"1625",childrens:[]}]},{label:"宜昌市",value:"195",childrens:[{label:"长阳",value:"1626",childrens:[]},{label:"五峰",value:"1627",childrens:[]},{label:"西陵区",value:"1628",childrens:[]},{label:"伍家岗区",value:"1629",childrens:[]},{label:"点军区",value:"1630",childrens:[]},{label:"猇亭区",value:"1631",childrens:[]},{label:"夷陵区",value:"1632",childrens:[]},{label:"宜都市",value:"1633",childrens:[]},{label:"当阳市",value:"1634",childrens:[]},{label:"枝江市",value:"1635",childrens:[]},{label:"远安县",value:"1636",childrens:[]},{label:"兴山县",value:"1637",childrens:[]},{label:"秭归县",value:"1638",childrens:[]}]},{label:"恩施土家族苗族自治州",value:"196",childrens:[{label:"恩施市",value:"1639",childrens:[]},{label:"利川市",value:"1640",childrens:[]},{label:"建始县",value:"1641",childrens:[]},{label:"巴东县",value:"1642",childrens:[]},{label:"宣恩县",value:"1643",childrens:[]},{label:"咸丰县",value:"1644",childrens:[]},{label:"来凤县",value:"1645",childrens:[]},{label:"鹤峰县",value:"1646",childrens:[]}]}]},{label:"湖南省",value:"14",childrens:[{label:"长沙市",value:"197",childrens:[{label:"岳麓区",value:"1647",childrens:[]},{label:"芙蓉区",value:"1648",childrens:[]},{label:"天心区",value:"1649",childrens:[]},{label:"开福区",value:"1650",childrens:[]},{label:"雨花区",value:"1651",childrens:[]},{label:"开发区",value:"1652",childrens:[]},{label:"浏阳市",value:"1653",childrens:[]},{label:"长沙县",value:"1654",childrens:[]},{label:"望城县",value:"1655",childrens:[]},{label:"宁乡县",value:"1656",childrens:[]}]},{label:"张家界市",value:"198",childrens:[{label:"永定区",value:"1657",childrens:[]},{label:"武陵源区",value:"1658",childrens:[]},{label:"慈利县",value:"1659",childrens:[]},{label:"桑植县",value:"1660",childrens:[]}]},{label:"常德市",value:"199",childrens:[{label:"武陵区",value:"1661",childrens:[]},{label:"鼎城区",value:"1662",childrens:[]},{label:"津市市",value:"1663",childrens:[]},{label:"安乡县",value:"1664",childrens:[]},{label:"汉寿县",value:"1665",childrens:[]},{label:"澧县",value:"1666",childrens:[]},{label:"临澧县",value:"1667",childrens:[]},{label:"桃源县",value:"1668",childrens:[]},{label:"石门县",value:"1669",childrens:[]}]},{label:"郴州市",value:"200",childrens:[{label:"北湖区",value:"1670",childrens:[]},{label:"苏仙区",value:"1671",childrens:[]},{label:"资兴市",value:"1672",childrens:[]},{label:"桂阳县",value:"1673",childrens:[]},{label:"宜章县",value:"1674",childrens:[]},{label:"永兴县",value:"1675",childrens:[]},{label:"嘉禾县",value:"1676",childrens:[]},{label:"临武县",value:"1677",childrens:[]},{label:"汝城县",value:"1678",childrens:[]},{label:"桂东县",value:"1679",childrens:[]},{label:"安仁县",value:"1680",childrens:[]}]},{label:"衡阳市",value:"201",childrens:[{label:"雁峰区",value:"1681",childrens:[]},{label:"珠晖区",value:"1682",childrens:[]},{label:"石鼓区",value:"1683",childrens:[]},{label:"蒸湘区",value:"1684",childrens:[]},{label:"南岳区",value:"1685",childrens:[]},{label:"耒阳市",value:"1686",childrens:[]},{label:"常宁市",value:"1687",childrens:[]},{label:"衡阳县",value:"1688",childrens:[]},{label:"衡南县",value:"1689",childrens:[]},{label:"衡山县",value:"1690",childrens:[]},{label:"衡东县",value:"1691",childrens:[]},{label:"祁东县",value:"1692",childrens:[]}]},{label:"怀化市",value:"202",childrens:[{label:"鹤城区",value:"1693",childrens:[]},{label:"靖州",value:"1694",childrens:[]},{label:"麻阳",value:"1695",childrens:[]},{label:"通道",value:"1696",childrens:[]},{label:"新晃",value:"1697",childrens:[]},{label:"芷江",value:"1698",childrens:[]},{label:"沅陵县",value:"1699",childrens:[]},{label:"辰溪县",value:"1700",childrens:[]},{label:"溆浦县",value:"1701",childrens:[]},{label:"中方县",value:"1702",childrens:[]},{label:"会同县",value:"1703",childrens:[]},{label:"洪江市",value:"1704",childrens:[]}]},{label:"娄底市",value:"203",childrens:[{label:"娄星区",value:"1705",childrens:[]},{label:"冷水江市",value:"1706",childrens:[]},{label:"涟源市",value:"1707",childrens:[]},{label:"双峰县",value:"1708",childrens:[]},{label:"新化县",value:"1709",childrens:[]}]},{label:"邵阳市",value:"204",childrens:[{label:"城步",value:"1710",childrens:[]},{label:"双清区",value:"1711",childrens:[]},{label:"大祥区",value:"1712",childrens:[]},{label:"北塔区",value:"1713",childrens:[]},{label:"武冈市",value:"1714",childrens:[]},{label:"邵东县",value:"1715",childrens:[]},{label:"新邵县",value:"1716",childrens:[]},{label:"邵阳县",value:"1717",childrens:[]},{label:"隆回县",value:"1718",childrens:[]},{label:"洞口县",value:"1719",childrens:[]},{label:"绥宁县",value:"1720",childrens:[]},{label:"新宁县",value:"1721",childrens:[]}]},{label:"湘潭市",value:"205",childrens:[{label:"岳塘区",value:"1722",childrens:[]},{label:"雨湖区",value:"1723",childrens:[]},{label:"湘乡市",value:"1724",childrens:[]},{label:"韶山市",value:"1725",childrens:[]},{label:"湘潭县",value:"1726",childrens:[]}]},{label:"湘西土家族苗族自治州",value:"206",childrens:[{label:"吉首市",value:"1727",childrens:[]},{label:"泸溪县",value:"1728",childrens:[]},{label:"凤凰县",value:"1729",childrens:[]},{label:"花垣县",value:"1730",childrens:[]},{label:"保靖县",value:"1731",childrens:[]},{label:"古丈县",value:"1732",childrens:[]},{label:"永顺县",value:"1733",childrens:[]},{label:"龙山县",value:"1734",childrens:[]}]},{label:"益阳市",value:"207",childrens:[{label:"赫山区",value:"1735",childrens:[]},{label:"资阳区",value:"1736",childrens:[]},{label:"沅江市",value:"1737",childrens:[]},{label:"南县",value:"1738",childrens:[]},{label:"桃江县",value:"1739",childrens:[]},{label:"安化县",value:"1740",childrens:[]}]},{label:"永州市",value:"208",childrens:[{label:"江华",value:"1741",childrens:[]},{label:"冷水滩区",value:"1742",childrens:[]},{label:"零陵区",value:"1743",childrens:[]},{label:"祁阳县",value:"1744",childrens:[]},{label:"东安县",value:"1745",childrens:[]},{label:"双牌县",value:"1746",childrens:[]},{label:"道县",value:"1747",childrens:[]},{label:"江永县",value:"1748",childrens:[]},{label:"宁远县",value:"1749",childrens:[]},{label:"蓝山县",value:"1750",childrens:[]},{label:"新田县",value:"1751",childrens:[]}]},{label:"岳阳市",value:"209",childrens:[{label:"岳阳楼区",value:"1752",childrens:[]},{label:"君山区",value:"1753",childrens:[]},{label:"云溪区",value:"1754",childrens:[]},{label:"汨罗市",value:"1755",childrens:[]},{label:"临湘市",value:"1756",childrens:[]},{label:"岳阳县",value:"1757",childrens:[]},{label:"华容县",value:"1758",childrens:[]},{label:"湘阴县",value:"1759",childrens:[]},{label:"平江县",value:"1760",childrens:[]}]},{label:"株洲市",value:"210",childrens:[{label:"天元区",value:"1761",childrens:[]},{label:"荷塘区",value:"1762",childrens:[]},{label:"芦淞区",value:"1763",childrens:[]},{label:"石峰区",value:"1764",childrens:[]},{label:"醴陵市",value:"1765",childrens:[]},{label:"株洲县",value:"1766",childrens:[]},{label:"攸县",value:"1767",childrens:[]},{label:"茶陵县",value:"1768",childrens:[]},{label:"炎陵县",value:"1769",childrens:[]}]}]},{label:"吉林省",value:"15",childrens:[{label:"长春市",value:"211",childrens:[{label:"朝阳区",value:"1770",childrens:[]},{label:"宽城区",value:"1771",childrens:[]},{label:"二道区",value:"1772",childrens:[]},{label:"南关区",value:"1773",childrens:[]},{label:"绿园区",value:"1774",childrens:[]},{label:"双阳区",value:"1775",childrens:[]},{label:"净月潭开发区",value:"1776",childrens:[]},{label:"高新技术开发区",value:"1777",childrens:[]},{label:"经济技术开发区",value:"1778",childrens:[]},{label:"汽车产业开发区",value:"1779",childrens:[]},{label:"德惠市",value:"1780",childrens:[]},{label:"九台市",value:"1781",childrens:[]},{label:"榆树市",value:"1782",childrens:[]},{label:"农安县",value:"1783",childrens:[]}]},{label:"吉林市",value:"212",childrens:[{label:"船营区",value:"1784",childrens:[]},{label:"昌邑区",value:"1785",childrens:[]},{label:"龙潭区",value:"1786",childrens:[]},{label:"丰满区",value:"1787",childrens:[]},{label:"蛟河市",value:"1788",childrens:[]},{label:"桦甸市",value:"1789",childrens:[]},{label:"舒兰市",value:"1790",childrens:[]},{label:"磐石市",value:"1791",childrens:[]},{label:"永吉县",value:"1792",childrens:[]}]},{label:"白城市",value:"213",childrens:[{label:"洮北区",value:"1793",childrens:[]},{label:"洮南市",value:"1794",childrens:[]},{label:"大安市",value:"1795",childrens:[]},{label:"镇赉县",value:"1796",childrens:[]},{label:"通榆县",value:"1797",childrens:[]}]},{label:"白山市",value:"214",childrens:[{label:"江源区",value:"1798",childrens:[]},{label:"八道江区",value:"1799",childrens:[]},{label:"长白",value:"1800",childrens:[]},{label:"临江市",value:"1801",childrens:[]},{label:"抚松县",value:"1802",childrens:[]},{label:"靖宇县",value:"1803",childrens:[]}]},{label:"辽源市",value:"215",childrens:[{label:"龙山区",value:"1804",childrens:[]},{label:"西安区",value:"1805",childrens:[]},{label:"东丰县",value:"1806",childrens:[]},{label:"东辽县",value:"1807",childrens:[]}]},{label:"四平市",value:"216",childrens:[{label:"铁西区",value:"1808",childrens:[]},{label:"铁东区",value:"1809",childrens:[]},{label:"伊通",value:"1810",childrens:[]},{label:"公主岭市",value:"1811",childrens:[]},{label:"双辽市",value:"1812",childrens:[]},{label:"梨树县",value:"1813",childrens:[]}]},{label:"松原市",value:"217",childrens:[{label:"前郭尔罗斯",value:"1814",childrens:[]},{label:"宁江区",value:"1815",childrens:[]},{label:"长岭县",value:"1816",childrens:[]},{label:"乾安县",value:"1817",childrens:[]},{label:"扶余县",value:"1818",childrens:[]}]},{label:"通化市",value:"218",childrens:[{label:"东昌区",value:"1819",childrens:[]},{label:"二道江区",value:"1820",childrens:[]},{label:"梅河口市",value:"1821",childrens:[]},{label:"集安市",value:"1822",childrens:[]},{label:"通化县",value:"1823",childrens:[]},{label:"辉南县",value:"1824",childrens:[]},{label:"柳河县",value:"1825",childrens:[]}]},{label:"延边朝鲜族自治州",value:"219",childrens:[{label:"延吉市",value:"1826",childrens:[]},{label:"图们市",value:"1827",childrens:[]},{label:"敦化市",value:"1828",childrens:[]},{label:"珲春市",value:"1829",childrens:[]},{label:"龙井市",value:"1830",childrens:[]},{label:"和龙市",value:"1831",childrens:[]},{label:"安图县",value:"1832",childrens:[]},{label:"汪清县",value:"1833",childrens:[]}]}]},{label:"江苏省",value:"16",childrens:[{label:"南京市",value:"220",childrens:[{label:"玄武区",value:"1834",childrens:[]},{label:"鼓楼区",value:"1835",childrens:[]},{label:"白下区",value:"1836",childrens:[]},{label:"建邺区",value:"1837",childrens:[]},{label:"秦淮区",value:"1838",childrens:[]},{label:"雨花台区",value:"1839",childrens:[]},{label:"下关区",value:"1840",childrens:[]},{label:"栖霞区",value:"1841",childrens:[]},{label:"浦口区",value:"1842",childrens:[]},{label:"江宁区",value:"1843",childrens:[]},{label:"六合区",value:"1844",childrens:[]},{label:"溧水县",value:"1845",childrens:[]},{label:"高淳县",value:"1846",childrens:[]}]},{label:"苏州市",value:"221",childrens:[{label:"沧浪区",value:"1847",childrens:[]},{label:"金阊区",value:"1848",childrens:[]},{label:"平江区",value:"1849",childrens:[]},{label:"虎丘区",value:"1850",childrens:[]},{label:"吴中区",value:"1851",childrens:[]},{label:"相城区",value:"1852",childrens:[]},{label:"园区",value:"1853",childrens:[]},{label:"新区",value:"1854",childrens:[]},{label:"常熟市",value:"1855",childrens:[]},{label:"张家港市",value:"1856",childrens:[]},{label:"玉山镇",value:"1857",childrens:[]},{label:"巴城镇",value:"1858",childrens:[]},{label:"周市镇",value:"1859",childrens:[]},{label:"陆家镇",value:"1860",childrens:[]},{label:"花桥镇",value:"1861",childrens:[]},{label:"淀山湖镇",value:"1862",childrens:[]},{label:"张浦镇",value:"1863",childrens:[]},{label:"周庄镇",value:"1864",childrens:[]},{label:"千灯镇",value:"1865",childrens:[]},{label:"锦溪镇",value:"1866",childrens:[]},{label:"开发区",value:"1867",childrens:[]},{label:"吴江市",value:"1868",childrens:[]},{label:"太仓市",value:"1869",childrens:[]}]},{label:"无锡市",value:"222",childrens:[{label:"崇安区",value:"1870",childrens:[]},{label:"北塘区",value:"1871",childrens:[]},{label:"南长区",value:"1872",childrens:[]},{label:"锡山区",value:"1873",childrens:[]},{label:"惠山区",value:"1874",childrens:[]},{label:"滨湖区",value:"1875",childrens:[]},{label:"新区",value:"1876",childrens:[]},{label:"江阴市",value:"1877",childrens:[]},{label:"宜兴市",value:"1878",childrens:[]}]},{label:"常州市",value:"223",childrens:[{label:"天宁区",value:"1879",childrens:[]},{label:"钟楼区",value:"1880",childrens:[]},{label:"戚墅堰区",value:"1881",childrens:[]},{label:"郊区",value:"1882",childrens:[]},{label:"新北区",value:"1883",childrens:[]},{label:"武进区",value:"1884",childrens:[]},{label:"溧阳市",value:"1885",childrens:[]},{label:"金坛市",value:"1886",childrens:[]}]},{label:"淮安市",value:"224",childrens:[{label:"清河区",value:"1887",childrens:[]},{label:"清浦区",value:"1888",childrens:[]},{label:"楚州区",value:"1889",childrens:[]},{label:"淮阴区",value:"1890",childrens:[]},{label:"涟水县",value:"1891",childrens:[]},{label:"洪泽县",value:"1892",childrens:[]},{label:"盱眙县",value:"1893",childrens:[]},{label:"金湖县",value:"1894",childrens:[]}]},{label:"连云港市",value:"225",childrens:[{label:"新浦区",value:"1895",childrens:[]},{label:"连云区",value:"1896",childrens:[]},{label:"海州区",value:"1897",childrens:[]},{label:"赣榆县",value:"1898",childrens:[]},{label:"东海县",value:"1899",childrens:[]},{label:"灌云县",value:"1900",childrens:[]},{label:"灌南县",value:"1901",childrens:[]}]},{label:"南通市",value:"226",childrens:[{label:"崇川区",value:"1902",childrens:[]},{label:"港闸区",value:"1903",childrens:[]},{label:"经济开发区",value:"1904",childrens:[]},{label:"启东市",value:"1905",childrens:[]},{label:"如皋市",value:"1906",childrens:[]},{label:"通州市",value:"1907",childrens:[]},{label:"海门市",value:"1908",childrens:[]},{label:"海安县",value:"1909",childrens:[]},{label:"如东县",value:"1910",childrens:[]}]},{label:"宿迁市",value:"227",childrens:[{label:"宿城区",value:"1911",childrens:[]},{label:"宿豫区",value:"1912",childrens:[]},{label:"宿豫县",value:"1913",childrens:[]},{label:"沭阳县",value:"1914",childrens:[]},{label:"泗阳县",value:"1915",childrens:[]},{label:"泗洪县",value:"1916",childrens:[]}]},{label:"泰州市",value:"228",childrens:[{label:"海陵区",value:"1917",childrens:[]},{label:"高港区",value:"1918",childrens:[]},{label:"兴化市",value:"1919",childrens:[]},{label:"靖江市",value:"1920",childrens:[]},{label:"泰兴市",value:"1921",childrens:[]},{label:"姜堰市",value:"1922",childrens:[]}]},{label:"徐州市",value:"229",childrens:[{label:"云龙区",value:"1923",childrens:[]},{label:"鼓楼区",value:"1924",childrens:[]},{label:"九里区",value:"1925",childrens:[]},{label:"贾汪区",value:"1926",childrens:[]},{label:"泉山区",value:"1927",childrens:[]},{label:"新沂市",value:"1928",childrens:[]},{label:"邳州市",value:"1929",childrens:[]},{label:"丰县",value:"1930",childrens:[]},{label:"沛县",value:"1931",childrens:[]},{label:"铜山县",value:"1932",childrens:[]},{label:"睢宁县",value:"1933",childrens:[]}]},{label:"盐城市",value:"230",childrens:[{label:"城区",value:"1934",childrens:[]},{label:"亭湖区",value:"1935",childrens:[]},{label:"盐都区",value:"1936",childrens:[]},{label:"盐都县",value:"1937",childrens:[]},{label:"东台市",value:"1938",childrens:[]},{label:"大丰市",value:"1939",childrens:[]},{label:"响水县",value:"1940",childrens:[]},{label:"滨海县",value:"1941",childrens:[]},{label:"阜宁县",value:"1942",childrens:[]},{label:"射阳县",value:"1943",childrens:[]},{label:"建湖县",value:"1944",childrens:[]}]},{label:"扬州市",value:"231",childrens:[{label:"广陵区",value:"1945",childrens:[]},{label:"维扬区",value:"1946",childrens:[]},{label:"邗江区",value:"1947",childrens:[]},{label:"仪征市",value:"1948",childrens:[]},{label:"高邮市",value:"1949",childrens:[]},{label:"江都市",value:"1950",childrens:[]},{label:"宝应县",value:"1951",childrens:[]}]},{label:"镇江市",value:"232",childrens:[{label:"京口区",value:"1952",childrens:[]},{label:"润州区",value:"1953",childrens:[]},{label:"丹徒区",value:"1954",childrens:[]},{label:"丹阳市",value:"1955",childrens:[]},{label:"扬中市",value:"1956",childrens:[]},{label:"句容市",value:"1957",childrens:[]}]}]},{label:"江西省",value:"17",childrens:[{label:"南昌市",value:"233",childrens:[{label:"东湖区",value:"1958",childrens:[]},{label:"西湖区",value:"1959",childrens:[]},{label:"青云谱区",value:"1960",childrens:[]},{label:"湾里区",value:"1961",childrens:[]},{label:"青山湖区",value:"1962",childrens:[]},{label:"红谷滩新区",value:"1963",childrens:[]},{label:"昌北区",value:"1964",childrens:[]},{label:"高新区",value:"1965",childrens:[]},{label:"南昌县",value:"1966",childrens:[]},{label:"新建县",value:"1967",childrens:[]},{label:"安义县",value:"1968",childrens:[]},{label:"进贤县",value:"1969",childrens:[]}]},{label:"抚州市",value:"234",childrens:[{label:"临川区",value:"1970",childrens:[]},{label:"南城县",value:"1971",childrens:[]},{label:"黎川县",value:"1972",childrens:[]},{label:"南丰县",value:"1973",childrens:[]},{label:"崇仁县",value:"1974",childrens:[]},{label:"乐安县",value:"1975",childrens:[]},{label:"宜黄县",value:"1976",childrens:[]},{label:"金溪县",value:"1977",childrens:[]},{label:"资溪县",value:"1978",childrens:[]},{label:"东乡县",value:"1979",childrens:[]},{label:"广昌县",value:"1980",childrens:[]}]},{label:"赣州市",value:"235",childrens:[{label:"章贡区",value:"1981",childrens:[]},{label:"于都县",value:"1982",childrens:[]},{label:"瑞金市",value:"1983",childrens:[]},{label:"南康市",value:"1984",childrens:[]},{label:"赣县",value:"1985",childrens:[]},{label:"信丰县",value:"1986",childrens:[]},{label:"大余县",value:"1987",childrens:[]},{label:"上犹县",value:"1988",childrens:[]},{label:"崇义县",value:"1989",childrens:[]},{label:"安远县",value:"1990",childrens:[]},{label:"龙南县",value:"1991",childrens:[]},{label:"定南县",value:"1992",childrens:[]},{label:"全南县",value:"1993",childrens:[]},{label:"宁都县",value:"1994",childrens:[]},{label:"兴国县",value:"1995",childrens:[]},{label:"会昌县",value:"1996",childrens:[]},{label:"寻乌县",value:"1997",childrens:[]},{label:"石城县",value:"1998",childrens:[]}]},{label:"吉安市",value:"236",childrens:[{label:"安福县",value:"1999",childrens:[]},{label:"吉州区",value:"2000",childrens:[]},{label:"青原区",value:"2001",childrens:[]},{label:"井冈山市",value:"2002",childrens:[]},{label:"吉安县",value:"2003",childrens:[]},{label:"吉水县",value:"2004",childrens:[]},{label:"峡江县",value:"2005",childrens:[]},{label:"新干县",value:"2006",childrens:[]},{label:"永丰县",value:"2007",childrens:[]},{label:"泰和县",value:"2008",childrens:[]},{label:"遂川县",value:"2009",childrens:[]},{label:"万安县",value:"2010",childrens:[]},{label:"永新县",value:"2011",childrens:[]}]},{label:"景德镇市",value:"237",childrens:[{label:"珠山区",value:"2012",childrens:[]},{label:"昌江区",value:"2013",childrens:[]},{label:"乐平市",value:"2014",childrens:[]},{label:"浮梁县",value:"2015",childrens:[]}]},{label:"九江市",value:"238",childrens:[{label:"浔阳区",value:"2016",childrens:[]},{label:"庐山区",value:"2017",childrens:[]},{label:"瑞昌市",value:"2018",childrens:[]},{label:"九江县",value:"2019",childrens:[]},{label:"武宁县",value:"2020",childrens:[]},{label:"修水县",value:"2021",childrens:[]},{label:"永修县",value:"2022",childrens:[]},{label:"德安县",value:"2023",childrens:[]},{label:"星子县",value:"2024",childrens:[]},{label:"都昌县",value:"2025",childrens:[]},{label:"湖口县",value:"2026",childrens:[]},{label:"彭泽县",value:"2027",childrens:[]}]},{label:"萍乡市",value:"239",childrens:[{label:"安源区",value:"2028",childrens:[]},{label:"湘东区",value:"2029",childrens:[]},{label:"莲花县",value:"2030",childrens:[]},{label:"芦溪县",value:"2031",childrens:[]},{label:"上栗县",value:"2032",childrens:[]}]},{label:"上饶市",value:"240",childrens:[{label:"信州区",value:"2033",childrens:[]},{label:"德兴市",value:"2034",childrens:[]},{label:"上饶县",value:"2035",childrens:[]},{label:"广丰县",value:"2036",childrens:[]},{label:"玉山县",value:"2037",childrens:[]},{label:"铅山县",value:"2038",childrens:[]},{label:"横峰县",value:"2039",childrens:[]},{label:"弋阳县",value:"2040",childrens:[]},{label:"余干县",value:"2041",childrens:[]},{label:"波阳县",value:"2042",childrens:[]},{label:"万年县",value:"2043",childrens:[]},{label:"婺源县",value:"2044",childrens:[]}]},{label:"新余市",value:"241",childrens:[{label:"渝水区",value:"2045",childrens:[]},{label:"分宜县",value:"2046",childrens:[]}]},{label:"宜春市",value:"242",childrens:[{label:"袁州区",value:"2047",childrens:[]},{label:"丰城市",value:"2048",childrens:[]},{label:"樟树市",value:"2049",childrens:[]},{label:"高安市",value:"2050",childrens:[]},{label:"奉新县",value:"2051",childrens:[]},{label:"万载县",value:"2052",childrens:[]},{label:"上高县",value:"2053",childrens:[]},{label:"宜丰县",value:"2054",childrens:[]},{label:"靖安县",value:"2055",childrens:[]},{label:"铜鼓县",value:"2056",childrens:[]}]},{label:"鹰潭市",value:"243",childrens:[{label:"月湖区",value:"2057",childrens:[]},{label:"贵溪市",value:"2058",childrens:[]},{label:"余江县",value:"2059",childrens:[]}]}]},{label:"辽宁省",value:"18",childrens:[{label:"沈阳市",value:"244",childrens:[{label:"沈河区",value:"2060",childrens:[]},{label:"皇姑区",value:"2061",childrens:[]},{label:"和平区",value:"2062",childrens:[]},{label:"大东区",value:"2063",childrens:[]},{label:"铁西区",value:"2064",childrens:[]},{label:"苏家屯区",value:"2065",childrens:[]},{label:"东陵区",value:"2066",childrens:[]},{label:"沈北新区",value:"2067",childrens:[]},{label:"于洪区",value:"2068",childrens:[]},{label:"浑南新区",value:"2069",childrens:[]},{label:"新民市",value:"2070",childrens:[]},{label:"辽中县",value:"2071",childrens:[]},{label:"康平县",value:"2072",childrens:[]},{label:"法库县",value:"2073",childrens:[]}]},{label:"大连市",value:"245",childrens:[{label:"西岗区",value:"2074",childrens:[]},{label:"中山区",value:"2075",childrens:[]},{label:"沙河口区",value:"2076",childrens:[]},{label:"甘井子区",value:"2077",childrens:[]},{label:"旅顺口区",value:"2078",childrens:[]},{label:"金州区",value:"2079",childrens:[]},{label:"开发区",value:"2080",childrens:[]},{label:"瓦房店市",value:"2081",childrens:[]},{label:"普兰店市",value:"2082",childrens:[]},{label:"庄河市",value:"2083",childrens:[]},{label:"长海县",value:"2084",childrens:[]}]},{label:"鞍山市",value:"246",childrens:[{label:"铁东区",value:"2085",childrens:[]},{label:"铁西区",value:"2086",childrens:[]},{label:"立山区",value:"2087",childrens:[]},{label:"千山区",value:"2088",childrens:[]},{label:"岫岩",value:"2089",childrens:[]},{label:"海城市",value:"2090",childrens:[]},{label:"台安县",value:"2091",childrens:[]}]},{label:"本溪市",value:"247",childrens:[{label:"本溪",value:"2092",childrens:[]},{label:"平山区",value:"2093",childrens:[]},{label:"明山区",value:"2094",childrens:[]},{label:"溪湖区",value:"2095",childrens:[]},{label:"南芬区",value:"2096",childrens:[]},{label:"桓仁",value:"2097",childrens:[]}]},{label:"朝阳市",value:"248",childrens:[{label:"双塔区",value:"2098",childrens:[]},{label:"龙城区",value:"2099",childrens:[]},{label:"喀喇沁左翼蒙古族自治县",value:"2100",childrens:[]},{label:"北票市",value:"2101",childrens:[]},{label:"凌源市",value:"2102",childrens:[]},{label:"朝阳县",value:"2103",childrens:[]},{label:"建平县",value:"2104",childrens:[]}]},{label:"丹东市",value:"249",childrens:[{label:"振兴区",value:"2105",childrens:[]},{label:"元宝区",value:"2106",childrens:[]},{label:"振安区",value:"2107",childrens:[]},{label:"宽甸",value:"2108",childrens:[]},{label:"东港市",value:"2109",childrens:[]},{label:"凤城市",value:"2110",childrens:[]}]},{label:"抚顺市",value:"250",childrens:[{label:"顺城区",value:"2111",childrens:[]},{label:"新抚区",value:"2112",childrens:[]},{label:"东洲区",value:"2113",childrens:[]},{label:"望花区",value:"2114",childrens:[]},{label:"清原",value:"2115",childrens:[]},{label:"新宾",value:"2116",childrens:[]},{label:"抚顺县",value:"2117",childrens:[]}]},{label:"阜新市",value:"251",childrens:[{label:"阜新",value:"2118",childrens:[]},{label:"海州区",value:"2119",childrens:[]},{label:"新邱区",value:"2120",childrens:[]},{label:"太平区",value:"2121",childrens:[]},{label:"清河门区",value:"2122",childrens:[]},{label:"细河区",value:"2123",childrens:[]},{label:"彰武县",value:"2124",childrens:[]}]},{label:"葫芦岛市",value:"252",childrens:[{label:"龙港区",value:"2125",childrens:[]},{label:"南票区",value:"2126",childrens:[]},{label:"连山区",value:"2127",childrens:[]},{label:"兴城市",value:"2128",childrens:[]},{label:"绥中县",value:"2129",childrens:[]},{label:"建昌县",value:"2130",childrens:[]}]},{label:"锦州市",value:"253",childrens:[{label:"太和区",value:"2131",childrens:[]},{label:"古塔区",value:"2132",childrens:[]},{label:"凌河区",value:"2133",childrens:[]},{label:"凌海市",value:"2134",childrens:[]},{label:"北镇市",value:"2135",childrens:[]},{label:"黑山县",value:"2136",childrens:[]},{label:"义县",value:"2137",childrens:[]}]},{label:"辽阳市",value:"254",childrens:[{label:"白塔区",value:"2138",childrens:[]},{label:"文圣区",value:"2139",childrens:[]},{label:"宏伟区",value:"2140",childrens:[]},{label:"太子河区",value:"2141",childrens:[]},{label:"弓长岭区",value:"2142",childrens:[]},{label:"灯塔市",value:"2143",childrens:[]},{label:"辽阳县",value:"2144",childrens:[]}]},{label:"盘锦市",value:"255",childrens:[{label:"双台子区",value:"2145",childrens:[]},{label:"兴隆台区",value:"2146",childrens:[]},{label:"大洼县",value:"2147",childrens:[]},{label:"盘山县",value:"2148",childrens:[]}]},{label:"铁岭市",value:"256",childrens:[{label:"银州区",value:"2149",childrens:[]},{label:"清河区",value:"2150",childrens:[]},{label:"调兵山市",value:"2151",childrens:[]},{label:"开原市",value:"2152",childrens:[]},{label:"铁岭县",value:"2153",childrens:[]},{label:"西丰县",value:"2154",childrens:[]},{label:"昌图县",value:"2155",childrens:[]}]},{label:"营口市",value:"257",childrens:[{label:"站前区",value:"2156",childrens:[]},{label:"西市区",value:"2157",childrens:[]},{label:"鲅鱼圈区",value:"2158",childrens:[]},{label:"老边区",value:"2159",childrens:[]},{label:"盖州市",value:"2160",childrens:[]},{label:"大石桥市",value:"2161",childrens:[]}]}]},{label:"内蒙古自治区",value:"19",childrens:[{label:"呼和浩特市",value:"258",childrens:[{label:"回民区",value:"2162",childrens:[]},{label:"玉泉区",value:"2163",childrens:[]},{label:"新城区",value:"2164",childrens:[]},{label:"赛罕区",value:"2165",childrens:[]},{label:"清水河县",value:"2166",childrens:[]},{label:"土默特左旗",value:"2167",childrens:[]},{label:"托克托县",value:"2168",childrens:[]},{label:"和林格尔县",value:"2169",childrens:[]},{label:"武川县",value:"2170",childrens:[]}]},{label:"阿拉善盟",value:"259",childrens:[{label:"阿拉善左旗",value:"2171",childrens:[]},{label:"阿拉善右旗",value:"2172",childrens:[]},{label:"额济纳旗",value:"2173",childrens:[]}]},{label:"巴彦淖尔市",value:"260",childrens:[{label:"临河区",value:"2174",childrens:[]},{label:"五原县",value:"2175",childrens:[]},{label:"磴口县",value:"2176",childrens:[]},{label:"乌拉特前旗",value:"2177",childrens:[]},{label:"乌拉特中旗",value:"2178",childrens:[]},{label:"乌拉特后旗",value:"2179",childrens:[]},{label:"杭锦后旗",value:"2180",childrens:[]}]},{label:"包头市",value:"261",childrens:[{label:"昆都仑区",value:"2181",childrens:[]},{label:"青山区",value:"2182",childrens:[]},{label:"东河区",value:"2183",childrens:[]},{label:"九原区",value:"2184",childrens:[]},{label:"石拐区",value:"2185",childrens:[]},{label:"白云矿区",value:"2186",childrens:[]},{label:"土默特右旗",value:"2187",childrens:[]},{label:"固阳县",value:"2188",childrens:[]},{label:"达尔罕茂明安联合旗",value:"2189",childrens:[]}]},{label:"赤峰市",value:"262",childrens:[{label:"红山区",value:"2190",childrens:[]},{label:"元宝山区",value:"2191",childrens:[]},{label:"松山区",value:"2192",childrens:[]},{label:"阿鲁科尔沁旗",value:"2193",childrens:[]},{label:"巴林左旗",value:"2194",childrens:[]},{label:"巴林右旗",value:"2195",childrens:[]},{label:"林西县",value:"2196",childrens:[]},{label:"克什克腾旗",value:"2197",childrens:[]},{label:"翁牛特旗",value:"2198",childrens:[]},{label:"喀喇沁旗",value:"2199",childrens:[]},{label:"宁城县",value:"2200",childrens:[]},{label:"敖汉旗",value:"2201",childrens:[]}]},{label:"鄂尔多斯市",value:"263",childrens:[{label:"东胜区",value:"2202",childrens:[]},{label:"达拉特旗",value:"2203",childrens:[]},{label:"准格尔旗",value:"2204",childrens:[]},{label:"鄂托克前旗",value:"2205",childrens:[]},{label:"鄂托克旗",value:"2206",childrens:[]},{label:"杭锦旗",value:"2207",childrens:[]},{label:"乌审旗",value:"2208",childrens:[]},{label:"伊金霍洛旗",value:"2209",childrens:[]}]},{label:"呼伦贝尔市",value:"264",childrens:[{label:"海拉尔区",value:"2210",childrens:[]},{label:"莫力达瓦",value:"2211",childrens:[]},{label:"满洲里市",value:"2212",childrens:[]},{label:"牙克石市",value:"2213",childrens:[]},{label:"扎兰屯市",value:"2214",childrens:[]},{label:"额尔古纳市",value:"2215",childrens:[]},{label:"根河市",value:"2216",childrens:[]},{label:"阿荣旗",value:"2217",childrens:[]},{label:"鄂伦春自治旗",value:"2218",childrens:[]},{label:"鄂温克族自治旗",value:"2219",childrens:[]},{label:"陈巴尔虎旗",value:"2220",childrens:[]},{label:"新巴尔虎左旗",value:"2221",childrens:[]},{label:"新巴尔虎右旗",value:"2222",childrens:[]}]},{label:"通辽市",value:"265",childrens:[{label:"科尔沁区",value:"2223",childrens:[]},{label:"霍林郭勒市",value:"2224",childrens:[]},{label:"科尔沁左翼中旗",value:"2225",childrens:[]},{label:"科尔沁左翼后旗",value:"2226",childrens:[]},{label:"开鲁县",value:"2227",childrens:[]},{label:"库伦旗",value:"2228",childrens:[]},{label:"奈曼旗",value:"2229",childrens:[]},{label:"扎鲁特旗",value:"2230",childrens:[]}]},{label:"乌海市",value:"266",childrens:[{label:"海勃湾区",value:"2231",childrens:[]},{label:"乌达区",value:"2232",childrens:[]},{label:"海南区",value:"2233",childrens:[]}]},{label:"乌兰察布市市",value:"267",childrens:[{label:"化德县",value:"2234",childrens:[]},{label:"集宁区",value:"2235",childrens:[]},{label:"丰镇市",value:"2236",childrens:[]},{label:"卓资县",value:"2237",childrens:[]},{label:"商都县",value:"2238",childrens:[]},{label:"兴和县",value:"2239",childrens:[]},{label:"凉城县",value:"2240",childrens:[]},{label:"察哈尔右翼前旗",value:"2241",childrens:[]},{label:"察哈尔右翼中旗",value:"2242",childrens:[]},{label:"察哈尔右翼后旗",value:"2243",childrens:[]},{label:"四子王旗",value:"2244",childrens:[]}]},{label:"锡林郭勒盟",value:"268",childrens:[{label:"二连浩特市",value:"2245",childrens:[]},{label:"锡林浩特市",value:"2246",childrens:[]},{label:"阿巴嘎旗",value:"2247",childrens:[]},{label:"苏尼特左旗",value:"2248",childrens:[]},{label:"苏尼特右旗",value:"2249",childrens:[]},{label:"东乌珠穆沁旗",value:"2250",childrens:[]},{label:"西乌珠穆沁旗",value:"2251",childrens:[]},{label:"太仆寺旗",value:"2252",childrens:[]},{label:"镶黄旗",value:"2253",childrens:[]},{label:"正镶白旗",value:"2254",childrens:[]},{label:"正蓝旗",value:"2255",childrens:[]},{label:"多伦县",value:"2256",childrens:[]}]},{label:"兴安盟",value:"269",childrens:[{label:"乌兰浩特市",value:"2257",childrens:[]},{label:"阿尔山市",value:"2258",childrens:[]},{label:"科尔沁右翼前旗",value:"2259",childrens:[]},{label:"科尔沁右翼中旗",value:"2260",childrens:[]},{label:"扎赉特旗",value:"2261",childrens:[]},{label:"突泉县",value:"2262",childrens:[]}]}]},{label:"宁夏回族自治区",value:"20",childrens:[{label:"银川市",value:"270",childrens:[{label:"西夏区",value:"2263",childrens:[]},{label:"金凤区",value:"2264",childrens:[]},{label:"兴庆区",value:"2265",childrens:[]},{label:"灵武市",value:"2266",childrens:[]},{label:"永宁县",value:"2267",childrens:[]},{label:"贺兰县",value:"2268",childrens:[]}]},{label:"固原市",value:"271",childrens:[{label:"原州区",value:"2269",childrens:[]},{label:"海原县",value:"2270",childrens:[]},{label:"西吉县",value:"2271",childrens:[]},{label:"隆德县",value:"2272",childrens:[]},{label:"泾源县",value:"2273",childrens:[]},{label:"彭阳县",value:"2274",childrens:[]}]},{label:"石嘴山市",value:"272",childrens:[{label:"惠农县",value:"2275",childrens:[]},{label:"大武口区",value:"2276",childrens:[]},{label:"惠农区",value:"2277",childrens:[]},{label:"陶乐县",value:"2278",childrens:[]},{label:"平罗县",value:"2279",childrens:[]}]},{label:"吴忠市",value:"273",childrens:[{label:"利通区",value:"2280",childrens:[]},{label:"中卫县",value:"2281",childrens:[]},{label:"青铜峡市",value:"2282",childrens:[]},{label:"中宁县",value:"2283",childrens:[]},{label:"盐池县",value:"2284",childrens:[]},{label:"同心县",value:"2285",childrens:[]}]},{label:"中卫市",value:"274",childrens:[{label:"沙坡头区",value:"2286",childrens:[]},{label:"海原县",value:"2287",childrens:[]},{label:"中宁县",value:"2288",childrens:[]}]}]},{label:"青海省",value:"21",childrens:[{label:"西宁市",value:"275",childrens:[{label:"城中区",value:"2289",childrens:[]},{label:"城东区",value:"2290",childrens:[]},{label:"城西区",value:"2291",childrens:[]},{label:"城北区",value:"2292",childrens:[]},{label:"湟中县",value:"2293",childrens:[]},{label:"湟源县",value:"2294",childrens:[]},{label:"大通",value:"2295",childrens:[]}]},{label:"果洛藏族自治州",value:"276",childrens:[{label:"玛沁县",value:"2296",childrens:[]},{label:"班玛县",value:"2297",childrens:[]},{label:"甘德县",value:"2298",childrens:[]},{label:"达日县",value:"2299",childrens:[]},{label:"久治县",value:"2300",childrens:[]},{label:"玛多县",value:"2301",childrens:[]}]},{label:"海北藏族自治州",value:"277",childrens:[{label:"海晏县",value:"2302",childrens:[]},{label:"祁连县",value:"2303",childrens:[]},{label:"刚察县",value:"2304",childrens:[]},{label:"门源",value:"2305",childrens:[]}]},{label:"海东市",value:"278",childrens:[{label:"平安县",value:"2306",childrens:[]},{label:"乐都县",value:"2307",childrens:[]},{label:"民和",value:"2308",childrens:[]},{label:"互助",value:"2309",childrens:[]},{label:"化隆",value:"2310",childrens:[]},{label:"循化",value:"2311",childrens:[]}]},{label:"海南藏族自治州",value:"279",childrens:[{label:"共和县",value:"2312",childrens:[]},{label:"同德县",value:"2313",childrens:[]},{label:"贵德县",value:"2314",childrens:[]},{label:"兴海县",value:"2315",childrens:[]},{label:"贵南县",value:"2316",childrens:[]}]},{label:"海西蒙古族藏族自治州",value:"280",childrens:[{label:"德令哈市",value:"2317",childrens:[]},{label:"格尔木市",value:"2318",childrens:[]},{label:"乌兰县",value:"2319",childrens:[]},{label:"都兰县",value:"2320",childrens:[]},{label:"天峻县",value:"2321",childrens:[]}]},{label:"黄南藏族自治州",value:"281",childrens:[{label:"同仁县",value:"2322",childrens:[]},{label:"尖扎县",value:"2323",childrens:[]},{label:"泽库县",value:"2324",childrens:[]},{label:"河南蒙古族自治县",value:"2325",childrens:[]}]},{label:"玉树藏族自治州",value:"282",childrens:[{label:"玉树县",value:"2326",childrens:[]},{label:"杂多县",value:"2327",childrens:[]},{label:"称多县",value:"2328",childrens:[]},{label:"治多县",value:"2329",childrens:[]},{label:"囊谦县",value:"2330",childrens:[]},{label:"曲麻莱县",value:"2331",childrens:[]}]}]},{label:"山东省",value:"22",childrens:[{label:"济南市",value:"283",childrens:[{label:"市中区",value:"2332",childrens:[]},{label:"历下区",value:"2333",childrens:[]},{label:"天桥区",value:"2334",childrens:[]},{label:"槐荫区",value:"2335",childrens:[]},{label:"历城区",value:"2336",childrens:[]},{label:"长清区",value:"2337",childrens:[]},{label:"章丘市",value:"2338",childrens:[]},{label:"平阴县",value:"2339",childrens:[]},{label:"济阳县",value:"2340",childrens:[]},{label:"商河县",value:"2341",childrens:[]}]},{label:"青岛市",value:"284",childrens:[{label:"市南区",value:"2342",childrens:[]},{label:"市北区",value:"2343",childrens:[]},{label:"城阳区",value:"2344",childrens:[]},{label:"四方区",value:"2345",childrens:[]},{label:"李沧区",value:"2346",childrens:[]},{label:"黄岛区",value:"2347",childrens:[]},{label:"崂山区",value:"2348",childrens:[]},{label:"胶州市",value:"2349",childrens:[]},{label:"即墨市",value:"2350",childrens:[]},{label:"平度市",value:"2351",childrens:[]},{label:"胶南市",value:"2352",childrens:[]},{label:"莱西市",value:"2353",childrens:[]}]},{label:"滨州市",value:"285",childrens:[{label:"滨城区",value:"2354",childrens:[]},{label:"惠民县",value:"2355",childrens:[]},{label:"阳信县",value:"2356",childrens:[]},{label:"无棣县",value:"2357",childrens:[]},{label:"沾化县",value:"2358",childrens:[]},{label:"博兴县",value:"2359",childrens:[]},{label:"邹平县",value:"2360",childrens:[]}]},{label:"德州市",value:"286",childrens:[{label:"德城区",value:"2361",childrens:[]},{label:"陵县",value:"2362",childrens:[]},{label:"乐陵市",value:"2363",childrens:[]},{label:"禹城市",value:"2364",childrens:[]},{label:"宁津县",value:"2365",childrens:[]},{label:"庆云县",value:"2366",childrens:[]},{label:"临邑县",value:"2367",childrens:[]},{label:"齐河县",value:"2368",childrens:[]},{label:"平原县",value:"2369",childrens:[]},{label:"夏津县",value:"2370",childrens:[]},{label:"武城县",value:"2371",childrens:[]}]},{label:"东营市",value:"287",childrens:[{label:"东营区",value:"2372",childrens:[]},{label:"河口区",value:"2373",childrens:[]},{label:"垦利县",value:"2374",childrens:[]},{label:"利津县",value:"2375",childrens:[]},{label:"广饶县",value:"2376",childrens:[]}]},{label:"菏泽市",value:"288",childrens:[{label:"牡丹区",value:"2377",childrens:[]},{label:"曹县",value:"2378",childrens:[]},{label:"单县",value:"2379",childrens:[]},{label:"成武县",value:"2380",childrens:[]},{label:"巨野县",value:"2381",childrens:[]},{label:"郓城县",value:"2382",childrens:[]},{label:"鄄城县",value:"2383",childrens:[]},{label:"定陶县",value:"2384",childrens:[]},{label:"东明县",value:"2385",childrens:[]}]},{label:"济宁市",value:"289",childrens:[{label:"市中区",value:"2386",childrens:[]},{label:"任城区",value:"2387",childrens:[]},{label:"曲阜市",value:"2388",childrens:[]},{label:"兖州市",value:"2389",childrens:[]},{label:"邹城市",value:"2390",childrens:[]},{label:"微山县",value:"2391",childrens:[]},{label:"鱼台县",value:"2392",childrens:[]},{label:"金乡县",value:"2393",childrens:[]},{label:"嘉祥县",value:"2394",childrens:[]},{label:"汶上县",value:"2395",childrens:[]},{label:"泗水县",value:"2396",childrens:[]},{label:"梁山县",value:"2397",childrens:[]}]},{label:"莱芜市",value:"290",childrens:[{label:"莱城区",value:"2398",childrens:[]},{label:"钢城区",value:"2399",childrens:[]}]},{label:"聊城市",value:"291",childrens:[{label:"东昌府区",value:"2400",childrens:[]},{label:"临清市",value:"2401",childrens:[]},{label:"阳谷县",value:"2402",childrens:[]},{label:"莘县",value:"2403",childrens:[]},{label:"茌平县",value:"2404",childrens:[]},{label:"东阿县",value:"2405",childrens:[]},{label:"冠县",value:"2406",childrens:[]},{label:"高唐县",value:"2407",childrens:[]}]},{label:"临沂市",value:"292",childrens:[{label:"兰山区",value:"2408",childrens:[]},{label:"罗庄区",value:"2409",childrens:[]},{label:"河东区",value:"2410",childrens:[]},{label:"沂南县",value:"2411",childrens:[]},{label:"郯城县",value:"2412",childrens:[]},{label:"沂水县",value:"2413",childrens:[]},{label:"苍山县",value:"2414",childrens:[]},{label:"费县",value:"2415",childrens:[]},{label:"平邑县",value:"2416",childrens:[]},{label:"莒南县",value:"2417",childrens:[]},{label:"蒙阴县",value:"2418",childrens:[]},{label:"临沭县",value:"2419",childrens:[]}]},{label:"日照市",value:"293",childrens:[{label:"东港区",value:"2420",childrens:[]},{label:"岚山区",value:"2421",childrens:[]},{label:"五莲县",value:"2422",childrens:[]},{label:"莒县",value:"2423",childrens:[]}]},{label:"泰安市",value:"294",childrens:[{label:"泰山区",value:"2424",childrens:[]},{label:"岱岳区",value:"2425",childrens:[]},{label:"新泰市",value:"2426",childrens:[]},{label:"肥城市",value:"2427",childrens:[]},{label:"宁阳县",value:"2428",childrens:[]},{label:"东平县",value:"2429",childrens:[]}]},{label:"威海市",value:"295",childrens:[{label:"荣成市",value:"2430",childrens:[]},{label:"乳山市",value:"2431",childrens:[]},{label:"环翠区",value:"2432",childrens:[]},{label:"文登市",value:"2433",childrens:[]}]},{label:"潍坊市",value:"296",childrens:[{label:"潍城区",value:"2434",childrens:[]},{label:"寒亭区",value:"2435",childrens:[]},{label:"坊子区",value:"2436",childrens:[]},{label:"奎文区",value:"2437",childrens:[]},{label:"青州市",value:"2438",childrens:[]},{label:"诸城市",value:"2439",childrens:[]},{label:"寿光市",value:"2440",childrens:[]},{label:"安丘市",value:"2441",childrens:[]},{label:"高密市",value:"2442",childrens:[]},{label:"昌邑市",value:"2443",childrens:[]},{label:"临朐县",value:"2444",childrens:[]},{label:"昌乐县",value:"2445",childrens:[]}]},{label:"烟台市",value:"297",childrens:[{label:"芝罘区",value:"2446",childrens:[]},{label:"福山区",value:"2447",childrens:[]},{label:"牟平区",value:"2448",childrens:[]},{label:"莱山区",value:"2449",childrens:[]},{label:"开发区",value:"2450",childrens:[]},{label:"龙口市",value:"2451",childrens:[]},{label:"莱阳市",value:"2452",childrens:[]},{label:"莱州市",value:"2453",childrens:[]},{label:"蓬莱市",value:"2454",childrens:[]},{label:"招远市",value:"2455",childrens:[]},{label:"栖霞市",value:"2456",childrens:[]},{label:"海阳市",value:"2457",childrens:[]},{label:"长岛县",value:"2458",childrens:[]}]},{label:"枣庄市",value:"298",childrens:[{label:"市中区",value:"2459",childrens:[]},{label:"山亭区",value:"2460",childrens:[]},{label:"峄城区",value:"2461",childrens:[]},{label:"台儿庄区",value:"2462",childrens:[]},{label:"薛城区",value:"2463",childrens:[]},{label:"滕州市",value:"2464",childrens:[]}]},{label:"淄博市",value:"299",childrens:[{label:"张店区",value:"2465",childrens:[]},{label:"临淄区",value:"2466",childrens:[]},{label:"淄川区",value:"2467",childrens:[]},{label:"博山区",value:"2468",childrens:[]},{label:"周村区",value:"2469",childrens:[]},{label:"桓台县",value:"2470",childrens:[]},{label:"高青县",value:"2471",childrens:[]},{label:"沂源县",value:"2472",childrens:[]}]}]},{label:"山西省",value:"23",childrens:[{label:"太原市",value:"300",childrens:[{label:"杏花岭区",value:"2473",childrens:[]},{label:"小店区",value:"2474",childrens:[]},{label:"迎泽区",value:"2475",childrens:[]},{label:"尖草坪区",value:"2476",childrens:[]},{label:"万柏林区",value:"2477",childrens:[]},{label:"晋源区",value:"2478",childrens:[]},{label:"高新开发区",value:"2479",childrens:[]},{label:"民营经济开发区",value:"2480",childrens:[]},{label:"经济技术开发区",value:"2481",childrens:[]},{label:"清徐县",value:"2482",childrens:[]},{label:"阳曲县",value:"2483",childrens:[]},{label:"娄烦县",value:"2484",childrens:[]},{label:"古交市",value:"2485",childrens:[]}]},{label:"长治市",value:"301",childrens:[{label:"城区",value:"2486",childrens:[]},{label:"郊区",value:"2487",childrens:[]},{label:"沁县",value:"2488",childrens:[]},{label:"潞城市",value:"2489",childrens:[]},{label:"长治县",value:"2490",childrens:[]},{label:"襄垣县",value:"2491",childrens:[]},{label:"屯留县",value:"2492",childrens:[]},{label:"平顺县",value:"2493",childrens:[]},{label:"黎城县",value:"2494",childrens:[]},{label:"壶关县",value:"2495",childrens:[]},{label:"长子县",value:"2496",childrens:[]},{label:"武乡县",value:"2497",childrens:[]},{label:"沁源县",value:"2498",childrens:[]}]},{label:"大同市",value:"302",childrens:[{label:"城区",value:"2499",childrens:[]},{label:"矿区",value:"2500",childrens:[]},{label:"南郊区",value:"2501",childrens:[]},{label:"新荣区",value:"2502",childrens:[]},{label:"阳高县",value:"2503",childrens:[]},{label:"天镇县",value:"2504",childrens:[]},{label:"广灵县",value:"2505",childrens:[]},{label:"灵丘县",value:"2506",childrens:[]},{label:"浑源县",value:"2507",childrens:[]},{label:"左云县",value:"2508",childrens:[]},{label:"大同县",value:"2509",childrens:[]}]},{label:"晋城市",value:"303",childrens:[{label:"城区",value:"2510",childrens:[]},{label:"高平市",value:"2511",childrens:[]},{label:"沁水县",value:"2512",childrens:[]},{label:"阳城县",value:"2513",childrens:[]},{label:"陵川县",value:"2514",childrens:[]},{label:"泽州县",value:"2515",childrens:[]}]},{label:"晋中市",value:"304",childrens:[{label:"榆次区",value:"2516",childrens:[]},{label:"介休市",value:"2517",childrens:[]},{label:"榆社县",value:"2518",childrens:[]},{label:"左权县",value:"2519",childrens:[]},{label:"和顺县",value:"2520",childrens:[]},{label:"昔阳县",value:"2521",childrens:[]},{label:"寿阳县",value:"2522",childrens:[]},{label:"太谷县",value:"2523",childrens:[]},{label:"祁县",value:"2524",childrens:[]},{label:"平遥县",value:"2525",childrens:[]},{label:"灵石县",value:"2526",childrens:[]}]},{label:"临汾市",value:"305",childrens:[{label:"尧都区",value:"2527",childrens:[]},{label:"侯马市",value:"2528",childrens:[]},{label:"霍州市",value:"2529",childrens:[]},{label:"曲沃县",value:"2530",childrens:[]},{label:"翼城县",value:"2531",childrens:[]},{label:"襄汾县",value:"2532",childrens:[]},{label:"洪洞县",value:"2533",childrens:[]},{label:"吉县",value:"2534",childrens:[]},{label:"安泽县",value:"2535",childrens:[]},{label:"浮山县",value:"2536",childrens:[]},{label:"古县",value:"2537",childrens:[]},{label:"乡宁县",value:"2538",childrens:[]},{label:"大宁县",value:"2539",childrens:[]},{label:"隰县",value:"2540",childrens:[]},{label:"永和县",value:"2541",childrens:[]},{label:"蒲县",value:"2542",childrens:[]},{label:"汾西县",value:"2543",childrens:[]}]},{label:"吕梁市",value:"306",childrens:[{label:"离石市",value:"2544",childrens:[]},{label:"离石区",value:"2545",childrens:[]},{label:"孝义市",value:"2546",childrens:[]},{label:"汾阳市",value:"2547",childrens:[]},{label:"文水县",value:"2548",childrens:[]},{label:"交城县",value:"2549",childrens:[]},{label:"兴县",value:"2550",childrens:[]},{label:"临县",value:"2551",childrens:[]},{label:"柳林县",value:"2552",childrens:[]},{label:"石楼县",value:"2553",childrens:[]},{label:"岚县",value:"2554",childrens:[]},{label:"方山县",value:"2555",childrens:[]},{label:"中阳县",value:"2556",childrens:[]},{label:"交口县",value:"2557",childrens:[]}]},{label:"朔州市",value:"307",childrens:[{label:"朔城区",value:"2558",childrens:[]},{label:"平鲁区",value:"2559",childrens:[]},{label:"山阴县",value:"2560",childrens:[]},{label:"应县",value:"2561",childrens:[]},{label:"右玉县",value:"2562",childrens:[]},{label:"怀仁县",value:"2563",childrens:[]}]},{label:"忻州市",value:"308",childrens:[{label:"忻府区",value:"2564",childrens:[]},{label:"原平市",value:"2565",childrens:[]},{label:"定襄县",value:"2566",childrens:[]},{label:"五台县",value:"2567",childrens:[]},{label:"代县",value:"2568",childrens:[]},{label:"繁峙县",value:"2569",childrens:[]},{label:"宁武县",value:"2570",childrens:[]},{label:"静乐县",value:"2571",childrens:[]},{label:"神池县",value:"2572",childrens:[]},{label:"五寨县",value:"2573",childrens:[]},{label:"岢岚县",value:"2574",childrens:[]},{label:"河曲县",value:"2575",childrens:[]},{label:"保德县",value:"2576",childrens:[]},{label:"偏关县",value:"2577",childrens:[]}]},{label:"阳泉市",value:"309",childrens:[{label:"城区",value:"2578",childrens:[]},{label:"矿区",value:"2579",childrens:[]},{label:"郊区",value:"2580",childrens:[]},{label:"平定县",value:"2581",childrens:[]},{label:"盂县",value:"2582",childrens:[]}]},{label:"运城市",value:"310",childrens:[{label:"盐湖区",value:"2583",childrens:[]},{label:"永济市",value:"2584",childrens:[]},{label:"河津市",value:"2585",childrens:[]},{label:"临猗县",value:"2586",childrens:[]},{label:"万荣县",value:"2587",childrens:[]},{label:"闻喜县",value:"2588",childrens:[]},{label:"稷山县",value:"2589",childrens:[]},{label:"新绛县",value:"2590",childrens:[]},{label:"绛县",value:"2591",childrens:[]},{label:"垣曲县",value:"2592",childrens:[]},{label:"夏县",value:"2593",childrens:[]},{label:"平陆县",value:"2594",childrens:[]},{label:"芮城县",value:"2595",childrens:[]}]}]},{label:"陕西省",value:"24",childrens:[{label:"西安市",value:"311",childrens:[{label:"莲湖区",value:"2596",childrens:[]},{label:"新城区",value:"2597",childrens:[]},{label:"碑林区",value:"2598",childrens:[]},{label:"雁塔区",value:"2599",childrens:[]},{label:"灞桥区",value:"2600",childrens:[]},{label:"未央区",value:"2601",childrens:[]},{label:"阎良区",value:"2602",childrens:[]},{label:"临潼区",value:"2603",childrens:[]},{label:"长安区",value:"2604",childrens:[]},{label:"蓝田县",value:"2605",childrens:[]},{label:"周至县",value:"2606",childrens:[]},{label:"户县",value:"2607",childrens:[]},{label:"高陵县",value:"2608",childrens:[]}]},{label:"安康市",value:"312",childrens:[{label:"汉滨区",value:"2609",childrens:[]},{label:"汉阴县",value:"2610",childrens:[]},{label:"石泉县",value:"2611",childrens:[]},{label:"宁陕县",value:"2612",childrens:[]},{label:"紫阳县",value:"2613",childrens:[]},{label:"岚皋县",value:"2614",childrens:[]},{label:"平利县",value:"2615",childrens:[]},{label:"镇坪县",value:"2616",childrens:[]},{label:"旬阳县",value:"2617",childrens:[]},{label:"白河县",value:"2618",childrens:[]}]},{label:"宝鸡市",value:"313",childrens:[{label:"陈仓区",value:"2619",childrens:[]},{label:"渭滨区",value:"2620",childrens:[]},{label:"金台区",value:"2621",childrens:[]},{label:"凤翔县",value:"2622",childrens:[]},{label:"岐山县",value:"2623",childrens:[]},{label:"扶风县",value:"2624",childrens:[]},{label:"眉县",value:"2625",childrens:[]},{label:"陇县",value:"2626",childrens:[]},{label:"千阳县",value:"2627",childrens:[]},{label:"麟游县",value:"2628",childrens:[]},{label:"凤县",value:"2629",childrens:[]},{label:"太白县",value:"2630",childrens:[]}]},{label:"汉中市",value:"314",childrens:[{label:"汉台区",value:"2631",childrens:[]},{label:"南郑县",value:"2632",childrens:[]},{label:"城固县",value:"2633",childrens:[]},{label:"洋县",value:"2634",childrens:[]},{label:"西乡县",value:"2635",childrens:[]},{label:"勉县",value:"2636",childrens:[]},{label:"宁强县",value:"2637",childrens:[]},{label:"略阳县",value:"2638",childrens:[]},{label:"镇巴县",value:"2639",childrens:[]},{label:"留坝县",value:"2640",childrens:[]},{label:"佛坪县",value:"2641",childrens:[]}]},{label:"商洛市",value:"315",childrens:[{label:"商州区",value:"2642",childrens:[]},{label:"洛南县",value:"2643",childrens:[]},{label:"丹凤县",value:"2644",childrens:[]},{label:"商南县",value:"2645",childrens:[]},{label:"山阳县",value:"2646",childrens:[]},{label:"镇安县",value:"2647",childrens:[]},{label:"柞水县",value:"2648",childrens:[]}]},{label:"铜川市",value:"316",childrens:[{label:"耀州区",value:"2649",childrens:[]},{label:"王益区",value:"2650",childrens:[]},{label:"印台区",value:"2651",childrens:[]},{label:"宜君县",value:"2652",childrens:[]}]},{label:"渭南市",value:"317",childrens:[{label:"临渭区",value:"2653",childrens:[]},{label:"韩城市",value:"2654",childrens:[]},{label:"华阴市",value:"2655",childrens:[]},{label:"华县",value:"2656",childrens:[]},{label:"潼关县",value:"2657",childrens:[]},{label:"大荔县",value:"2658",childrens:[]},{label:"合阳县",value:"2659",childrens:[]},{label:"澄城县",value:"2660",childrens:[]},{label:"蒲城县",value:"2661",childrens:[]},{label:"白水县",value:"2662",childrens:[]},{label:"富平县",value:"2663",childrens:[]}]},{label:"咸阳市",value:"318",childrens:[{label:"秦都区",value:"2664",childrens:[]},{label:"渭城区",value:"2665",childrens:[]},{label:"杨陵区",value:"2666",childrens:[]},{label:"兴平市",value:"2667",childrens:[]},{label:"三原县",value:"2668",childrens:[]},{label:"泾阳县",value:"2669",childrens:[]},{label:"乾县",value:"2670",childrens:[]},{label:"礼泉县",value:"2671",childrens:[]},{label:"永寿县",value:"2672",childrens:[]},{label:"彬县",value:"2673",childrens:[]},{label:"长武县",value:"2674",childrens:[]},{label:"旬邑县",value:"2675",childrens:[]},{label:"淳化县",value:"2676",childrens:[]},{label:"武功县",value:"2677",childrens:[]}]},{label:"延安市",value:"319",childrens:[{label:"吴起县",value:"2678",childrens:[]},{label:"宝塔区",value:"2679",childrens:[]},{label:"延长县",value:"2680",childrens:[]},{label:"延川县",value:"2681",childrens:[]},{label:"子长县",value:"2682",childrens:[]},{label:"安塞县",value:"2683",childrens:[]},{label:"志丹县",value:"2684",childrens:[]},{label:"甘泉县",value:"2685",childrens:[]},{label:"富县",value:"2686",childrens:[]},{label:"洛川县",value:"2687",childrens:[]},{label:"宜川县",value:"2688",childrens:[]},{label:"黄龙县",value:"2689",childrens:[]},{label:"黄陵县",value:"2690",childrens:[]}]},{label:"榆林市",value:"320",childrens:[{label:"榆阳区",value:"2691",childrens:[]},{label:"神木县",value:"2692",childrens:[]},{label:"府谷县",value:"2693",childrens:[]},{label:"横山县",value:"2694",childrens:[]},{label:"靖边县",value:"2695",childrens:[]},{label:"定边县",value:"2696",childrens:[]},{label:"绥德县",value:"2697",childrens:[]},{label:"米脂县",value:"2698",childrens:[]},{label:"佳县",value:"2699",childrens:[]},{label:"吴堡县",value:"2700",childrens:[]},{label:"清涧县",value:"2701",childrens:[]},{label:"子洲县",value:"2702",childrens:[]}]}]},{label:"上海",value:"25",childrens:[{label:"上海市",value:"321",childrens:[{label:"长宁区",value:"2703",childrens:[]},{label:"闸北区",value:"2704",childrens:[]},{label:"闵行区",value:"2705",childrens:[]},{label:"徐汇区",value:"2706",childrens:[]},{label:"浦东新区",value:"2707",childrens:[]},{label:"杨浦区",value:"2708",childrens:[]},{label:"普陀区",value:"2709",childrens:[]},{label:"静安区",value:"2710",childrens:[]},{label:"卢湾区",value:"2711",childrens:[]},{label:"虹口区",value:"2712",childrens:[]},{label:"黄浦区",value:"2713",childrens:[]},{label:"南汇区",value:"2714",childrens:[]},{label:"松江区",value:"2715",childrens:[]},{label:"嘉定区",value:"2716",childrens:[]},{label:"宝山区",value:"2717",childrens:[]},{label:"青浦区",value:"2718",childrens:[]},{label:"金山区",value:"2719",childrens:[]},{label:"奉贤区",value:"2720",childrens:[]},{label:"崇明县",value:"2721",childrens:[]}]}]},{label:"四川省",value:"26",childrens:[{label:"成都市",value:"322",childrens:[{label:"青羊区",value:"2722",childrens:[]},{label:"锦江区",value:"2723",childrens:[]},{label:"金牛区",value:"2724",childrens:[]},{label:"武侯区",value:"2725",childrens:[]},{label:"成华区",value:"2726",childrens:[]},{label:"龙泉驿区",value:"2727",childrens:[]},{label:"青白江区",value:"2728",childrens:[]},{label:"新都区",value:"2729",childrens:[]},{label:"温江区",value:"2730",childrens:[]},{label:"高新区",value:"2731",childrens:[]},{label:"高新西区",value:"2732",childrens:[]},{label:"都江堰市",value:"2733",childrens:[]},{label:"彭州市",value:"2734",childrens:[]},{label:"邛崃市",value:"2735",childrens:[]},{label:"崇州市",value:"2736",childrens:[]},{label:"金堂县",value:"2737",childrens:[]},{label:"双流县",value:"2738",childrens:[]},{label:"郫县",value:"2739",childrens:[]},{label:"大邑县",value:"2740",childrens:[]},{label:"蒲江县",value:"2741",childrens:[]},{label:"新津县",value:"2742",childrens:[]},{label:"都江堰市",value:"2743",childrens:[]},{label:"彭州市",value:"2744",childrens:[]},{label:"邛崃市",value:"2745",childrens:[]},{label:"崇州市",value:"2746",childrens:[]},{label:"金堂县",value:"2747",childrens:[]},{label:"双流县",value:"2748",childrens:[]},{label:"郫县",value:"2749",childrens:[]},{label:"大邑县",value:"2750",childrens:[]},{label:"蒲江县",value:"2751",childrens:[]},{label:"新津县",value:"2752",childrens:[]}]},{label:"绵阳市",value:"323",childrens:[{label:"涪城区",value:"2753",childrens:[]},{label:"游仙区",value:"2754",childrens:[]},{label:"江油市",value:"2755",childrens:[]},{label:"盐亭县",value:"2756",childrens:[]},{label:"三台县",value:"2757",childrens:[]},{label:"平武县",value:"2758",childrens:[]},{label:"安县",value:"2759",childrens:[]},{label:"梓潼县",value:"2760",childrens:[]},{label:"北川县",value:"2761",childrens:[]}]},{label:"阿坝藏族羌族自治州",value:"324",childrens:[{label:"马尔康县",value:"2762",childrens:[]},{label:"汶川县",value:"2763",childrens:[]},{label:"理县",value:"2764",childrens:[]},{label:"茂县",value:"2765",childrens:[]},{label:"松潘县",value:"2766",childrens:[]},{label:"九寨沟县",value:"2767",childrens:[]},{label:"金川县",value:"2768",childrens:[]},{label:"小金县",value:"2769",childrens:[]},{label:"黑水县",value:"2770",childrens:[]},{label:"壤塘县",value:"2771",childrens:[]},{label:"阿坝县",value:"2772",childrens:[]},{label:"若尔盖县",value:"2773",childrens:[]},{label:"红原县",value:"2774",childrens:[]}]},{label:"巴中市",value:"325",childrens:[{label:"巴州区",value:"2775",childrens:[]},{label:"通江县",value:"2776",childrens:[]},{label:"南江县",value:"2777",childrens:[]},{label:"平昌县",value:"2778",childrens:[]}]},{label:"达州市",value:"326",childrens:[{label:"通川区",value:"2779",childrens:[]},{label:"万源市",value:"2780",childrens:[]},{label:"达县",value:"2781",childrens:[]},{label:"宣汉县",value:"2782",childrens:[]},{label:"开江县",value:"2783",childrens:[]},{label:"大竹县",value:"2784",childrens:[]},{label:"渠县",value:"2785",childrens:[]}]},{label:"德阳市",value:"327",childrens:[{label:"旌阳区",value:"2786",childrens:[]},{label:"广汉市",value:"2787",childrens:[]},{label:"什邡市",value:"2788",childrens:[]},{label:"绵竹市",value:"2789",childrens:[]},{label:"罗江县",value:"2790",childrens:[]},{label:"中江县",value:"2791",childrens:[]}]},{label:"甘孜藏族自治州",value:"328",childrens:[{label:"康定县",value:"2792",childrens:[]},{label:"丹巴县",value:"2793",childrens:[]},{label:"泸定县",value:"2794",childrens:[]},{label:"炉霍县",value:"2795",childrens:[]},{label:"九龙县",value:"2796",childrens:[]},{label:"甘孜县",value:"2797",childrens:[]},{label:"雅江县",value:"2798",childrens:[]},{label:"新龙县",value:"2799",childrens:[]},{label:"道孚县",value:"2800",childrens:[]},{label:"白玉县",value:"2801",childrens:[]},{label:"理塘县",value:"2802",childrens:[]},{label:"德格县",value:"2803",childrens:[]},{label:"乡城县",value:"2804",childrens:[]},{label:"石渠县",value:"2805",childrens:[]},{label:"稻城县",value:"2806",childrens:[]},{label:"色达县",value:"2807",childrens:[]},{label:"巴塘县",value:"2808",childrens:[]},{label:"得荣县",value:"2809",childrens:[]}]},{label:"广安市",value:"329",childrens:[{label:"广安区",value:"2810",childrens:[]},{label:"华蓥市",value:"2811",childrens:[]},{label:"岳池县",value:"2812",childrens:[]},{label:"武胜县",value:"2813",childrens:[]},{label:"邻水县",value:"2814",childrens:[]}]},{label:"广元市",value:"330",childrens:[{label:"利州区",value:"2815",childrens:[]},{label:"元坝区",value:"2816",childrens:[]},{label:"朝天区",value:"2817",childrens:[]},{label:"旺苍县",value:"2818",childrens:[]},{label:"青川县",value:"2819",childrens:[]},{label:"剑阁县",value:"2820",childrens:[]},{label:"苍溪县",value:"2821",childrens:[]}]},{label:"乐山市",value:"331",childrens:[{label:"峨眉山市",value:"2822",childrens:[]},{label:"乐山市",value:"2823",childrens:[]},{label:"犍为县",value:"2824",childrens:[]},{label:"井研县",value:"2825",childrens:[]},{label:"夹江县",value:"2826",childrens:[]},{label:"沐川县",value:"2827",childrens:[]},{label:"峨边",value:"2828",childrens:[]},{label:"马边",value:"2829",childrens:[]}]},{label:"凉山市",value:"332",childrens:[{label:"西昌市",value:"2830",childrens:[]},{label:"盐源县",value:"2831",childrens:[]},{label:"德昌县",value:"2832",childrens:[]},{label:"会理县",value:"2833",childrens:[]},{label:"会东县",value:"2834",childrens:[]},{label:"宁南县",value:"2835",childrens:[]},{label:"普格县",value:"2836",childrens:[]},{label:"布拖县",value:"2837",childrens:[]},{label:"金阳县",value:"2838",childrens:[]},{label:"昭觉县",value:"2839",childrens:[]},{label:"喜德县",value:"2840",childrens:[]},{label:"冕宁县",value:"2841",childrens:[]},{label:"越西县",value:"2842",childrens:[]},{label:"甘洛县",value:"2843",childrens:[]},{label:"美姑县",value:"2844",childrens:[]},{label:"雷波县",value:"2845",childrens:[]},{label:"木里",value:"2846",childrens:[]}]},{label:"眉山市",value:"333",childrens:[{label:"东坡区",value:"2847",childrens:[]},{label:"仁寿县",value:"2848",childrens:[]},{label:"彭山县",value:"2849",childrens:[]},{label:"洪雅县",value:"2850",childrens:[]},{label:"丹棱县",value:"2851",childrens:[]},{label:"青神县",value:"2852",childrens:[]}]},{label:"南充市",value:"334",childrens:[{label:"阆中市",value:"2853",childrens:[]},{label:"南部县",value:"2854",childrens:[]},{label:"营山县",value:"2855",childrens:[]},{label:"蓬安县",value:"2856",childrens:[]},{label:"仪陇县",value:"2857",childrens:[]},{label:"顺庆区",value:"2858",childrens:[]},{label:"高坪区",value:"2859",childrens:[]},{label:"嘉陵区",value:"2860",childrens:[]},{label:"西充县",value:"2861",childrens:[]}]},{label:"内江市",value:"335",childrens:[{label:"市中区",value:"2862",childrens:[]},{label:"东兴区",value:"2863",childrens:[]},{label:"威远县",value:"2864",childrens:[]},{label:"资中县",value:"2865",childrens:[]},{label:"隆昌县",value:"2866",childrens:[]}]},{label:"攀枝花市",value:"336",childrens:[{label:"东  区",value:"2867",childrens:[]},{label:"西  区",value:"2868",childrens:[]},{label:"仁和区",value:"2869",childrens:[]},{label:"米易县",value:"2870",childrens:[]},{label:"盐边县",value:"2871",childrens:[]}]},{label:"遂宁市",value:"337",childrens:[{label:"船山区",value:"2872",childrens:[]},{label:"安居区",value:"2873",childrens:[]},{label:"蓬溪县",value:"2874",childrens:[]},{label:"射洪县",value:"2875",childrens:[]},{label:"大英县",value:"2876",childrens:[]}]},{label:"雅安市",value:"338",childrens:[{label:"雨城区",value:"2877",childrens:[]},{label:"名山县",value:"2878",childrens:[]},{label:"荥经县",value:"2879",childrens:[]},{label:"汉源县",value:"2880",childrens:[]},{label:"石棉县",value:"2881",childrens:[]},{label:"天全县",value:"2882",childrens:[]},{label:"芦山县",value:"2883",childrens:[]},{label:"宝兴县",value:"2884",childrens:[]}]},{label:"宜宾市",value:"339",childrens:[{label:"翠屏区",value:"2885",childrens:[]},{label:"宜宾县",value:"2886",childrens:[]},{label:"南溪县",value:"2887",childrens:[]},{label:"江安县",value:"2888",childrens:[]},{label:"长宁县",value:"2889",childrens:[]},{label:"高县",value:"2890",childrens:[]},{label:"珙县",value:"2891",childrens:[]},{label:"筠连县",value:"2892",childrens:[]},{label:"兴文县",value:"2893",childrens:[]},{label:"屏山县",value:"2894",childrens:[]}]},{label:"资阳市",value:"340",childrens:[{label:"雁江区",value:"2895",childrens:[]},{label:"简阳市",value:"2896",childrens:[]},{label:"安岳县",value:"2897",childrens:[]},{label:"乐至县",value:"2898",childrens:[]}]},{label:"自贡市",value:"341",childrens:[{label:"大安区",value:"2899",childrens:[]},{label:"自流井区",value:"2900",childrens:[]},{label:"贡井区",value:"2901",childrens:[]},{label:"沿滩区",value:"2902",childrens:[]},{label:"荣县",value:"2903",childrens:[]},{label:"富顺县",value:"2904",childrens:[]}]},{label:"泸州市",value:"342",childrens:[{label:"江阳区",value:"2905",childrens:[]},{label:"纳溪区",value:"2906",childrens:[]},{label:"龙马潭区",value:"2907",childrens:[]},{label:"泸县",value:"2908",childrens:[]},{label:"合江县",value:"2909",childrens:[]},{label:"叙永县",value:"2910",childrens:[]},{label:"古蔺县",value:"2911",childrens:[]}]}]},{label:"天津",value:"27",childrens:[{label:"天津市",value:"343",childrens:[{label:"和平区",value:"2912",childrens:[]},{label:"河西区",value:"2913",childrens:[]},{label:"南开区",value:"2914",childrens:[]},{label:"河北区",value:"2915",childrens:[]},{label:"河东区",value:"2916",childrens:[]},{label:"红桥区",value:"2917",childrens:[]},{label:"东丽区",value:"2918",childrens:[]},{label:"津南区",value:"2919",childrens:[]},{label:"西青区",value:"2920",childrens:[]},{label:"北辰区",value:"2921",childrens:[]},{label:"塘沽区",value:"2922",childrens:[]},{label:"汉沽区",value:"2923",childrens:[]},{label:"大港区",value:"2924",childrens:[]},{label:"武清区",value:"2925",childrens:[]},{label:"宝坻区",value:"2926",childrens:[]},{label:"经济开发区",value:"2927",childrens:[]},{label:"宁河县",value:"2928",childrens:[]},{label:"静海县",value:"2929",childrens:[]},{label:"蓟县",value:"2930",childrens:[]}]}]},{label:"西藏自治区",value:"28",childrens:[{label:"拉萨市",value:"344",childrens:[{label:"城关区",value:"2931",childrens:[]},{label:"林周县",value:"2932",childrens:[]},{label:"当雄县",value:"2933",childrens:[]},{label:"尼木县",value:"2934",childrens:[]},{label:"曲水县",value:"2935",childrens:[]},{label:"堆龙德庆县",value:"2936",childrens:[]},{label:"达孜县",value:"2937",childrens:[]},{label:"墨竹工卡县",value:"2938",childrens:[]}]},{label:"阿里市",value:"345",childrens:[{label:"噶尔县",value:"2939",childrens:[]},{label:"普兰县",value:"2940",childrens:[]},{label:"札达县",value:"2941",childrens:[]},{label:"日土县",value:"2942",childrens:[]},{label:"革吉县",value:"2943",childrens:[]},{label:"改则县",value:"2944",childrens:[]},{label:"措勤县",value:"2945",childrens:[]}]},{label:"昌都市",value:"346",childrens:[{label:"昌都县",value:"2946",childrens:[]},{label:"江达县",value:"2947",childrens:[]},{label:"贡觉县",value:"2948",childrens:[]},{label:"类乌齐县",value:"2949",childrens:[]},{label:"丁青县",value:"2950",childrens:[]},{label:"察雅县",value:"2951",childrens:[]},{label:"八宿县",value:"2952",childrens:[]},{label:"左贡县",value:"2953",childrens:[]},{label:"芒康县",value:"2954",childrens:[]},{label:"洛隆县",value:"2955",childrens:[]},{label:"边坝县",value:"2956",childrens:[]}]},{label:"林芝市",value:"347",childrens:[{label:"林芝县",value:"2957",childrens:[]},{label:"工布江达县",value:"2958",childrens:[]},{label:"米林县",value:"2959",childrens:[]},{label:"墨脱县",value:"2960",childrens:[]},{label:"波密县",value:"2961",childrens:[]},{label:"察隅县",value:"2962",childrens:[]},{label:"朗县",value:"2963",childrens:[]}]},{label:"那曲市",value:"348",childrens:[{label:"那曲县",value:"2964",childrens:[]},{label:"嘉黎县",value:"2965",childrens:[]},{label:"比如县",value:"2966",childrens:[]},{label:"聂荣县",value:"2967",childrens:[]},{label:"安多县",value:"2968",childrens:[]},{label:"申扎县",value:"2969",childrens:[]},{label:"索县",value:"2970",childrens:[]},{label:"班戈县",value:"2971",childrens:[]},{label:"巴青县",value:"2972",childrens:[]},{label:"尼玛县",value:"2973",childrens:[]}]},{label:"日喀则市",value:"349",childrens:[{label:"日喀则市",value:"2974",childrens:[]},{label:"南木林县",value:"2975",childrens:[]},{label:"江孜县",value:"2976",childrens:[]},{label:"定日县",value:"2977",childrens:[]},{label:"萨迦县",value:"2978",childrens:[]},{label:"拉孜县",value:"2979",childrens:[]},{label:"昂仁县",value:"2980",childrens:[]},{label:"谢通门县",value:"2981",childrens:[]},{label:"白朗县",value:"2982",childrens:[]},{label:"仁布县",value:"2983",childrens:[]},{label:"康马县",value:"2984",childrens:[]},{label:"定结县",value:"2985",childrens:[]},{label:"仲巴县",value:"2986",childrens:[]},{label:"亚东县",value:"2987",childrens:[]},{label:"吉隆县",value:"2988",childrens:[]},{label:"聂拉木县",value:"2989",childrens:[]},{label:"萨嘎县",value:"2990",childrens:[]},{label:"岗巴县",value:"2991",childrens:[]}]},{label:"山南市",value:"350",childrens:[{label:"乃东县",value:"2992",childrens:[]},{label:"扎囊县",value:"2993",childrens:[]},{label:"贡嘎县",value:"2994",childrens:[]},{label:"桑日县",value:"2995",childrens:[]},{label:"琼结县",value:"2996",childrens:[]},{label:"曲松县",value:"2997",childrens:[]},{label:"措美县",value:"2998",childrens:[]},{label:"洛扎县",value:"2999",childrens:[]},{label:"加查县",value:"3000",childrens:[]},{label:"隆子县",value:"3001",childrens:[]},{label:"错那县",value:"3002",childrens:[]},{label:"浪卡子县",value:"3003",childrens:[]}]}]},{label:"新疆维吾尔自治区",value:"29",childrens:[{label:"乌鲁木齐市",value:"351",childrens:[{label:"天山区",value:"3004",childrens:[]},{label:"沙依巴克区",value:"3005",childrens:[]},{label:"新市区",value:"3006",childrens:[]},{label:"水磨沟区",value:"3007",childrens:[]},{label:"头屯河区",value:"3008",childrens:[]},{label:"达坂城区",value:"3009",childrens:[]},{label:"米东区",value:"3010",childrens:[]},{label:"乌鲁木齐县",value:"3011",childrens:[]}]},{label:"阿克苏地区",value:"352",childrens:[{label:"阿克苏市",value:"3012",childrens:[]},{label:"温宿县",value:"3013",childrens:[]},{label:"库车县",value:"3014",childrens:[]},{label:"沙雅县",value:"3015",childrens:[]},{label:"新和县",value:"3016",childrens:[]},{label:"拜城县",value:"3017",childrens:[]},{label:"乌什县",value:"3018",childrens:[]},{label:"阿瓦提县",value:"3019",childrens:[]},{label:"柯坪县",value:"3020",childrens:[]}]},{label:"阿拉尔市",value:"353",childrens:[{label:"阿拉尔市",value:"3021",childrens:[]}]},{label:"巴音郭楞蒙古自治州",value:"354",childrens:[{label:"库尔勒市",value:"3022",childrens:[]},{label:"轮台县",value:"3023",childrens:[]},{label:"尉犁县",value:"3024",childrens:[]},{label:"若羌县",value:"3025",childrens:[]},{label:"且末县",value:"3026",childrens:[]},{label:"焉耆",value:"3027",childrens:[]},{label:"和静县",value:"3028",childrens:[]},{label:"和硕县",value:"3029",childrens:[]},{label:"博湖县",value:"3030",childrens:[]}]},{label:"博尔塔拉蒙古自治州",value:"355",childrens:[{label:"博乐市",value:"3031",childrens:[]},{label:"精河县",value:"3032",childrens:[]},{label:"温泉县",value:"3033",childrens:[]}]},{label:"昌吉回族自治州",value:"356",childrens:[{label:"呼图壁县",value:"3034",childrens:[]},{label:"米泉市",value:"3035",childrens:[]},{label:"昌吉市",value:"3036",childrens:[]},{label:"阜康市",value:"3037",childrens:[]},{label:"玛纳斯县",value:"3038",childrens:[]},{label:"奇台县",value:"3039",childrens:[]},{label:"吉木萨尔县",value:"3040",childrens:[]},{label:"木垒",value:"3041",childrens:[]}]},{label:"哈密市",value:"357",childrens:[{label:"哈密市",value:"3042",childrens:[]},{label:"伊吾县",value:"3043",childrens:[]},{label:"巴里坤",value:"3044",childrens:[]}]},{label:"和田地区",value:"358",childrens:[{label:"和田市",value:"3045",childrens:[]},{label:"和田县",value:"3046",childrens:[]},{label:"墨玉县",value:"3047",childrens:[]},{label:"皮山县",value:"3048",childrens:[]},{label:"洛浦县",value:"3049",childrens:[]},{label:"策勒县",value:"3050",childrens:[]},{label:"于田县",value:"3051",childrens:[]},{label:"民丰县",value:"3052",childrens:[]}]},{label:"喀什地区",value:"359",childrens:[{label:"喀什市",value:"3053",childrens:[]},{label:"疏附县",value:"3054",childrens:[]},{label:"疏勒县",value:"3055",childrens:[]},{label:"英吉沙县",value:"3056",childrens:[]},{label:"泽普县",value:"3057",childrens:[]},{label:"莎车县",value:"3058",childrens:[]},{label:"叶城县",value:"3059",childrens:[]},{label:"麦盖提县",value:"3060",childrens:[]},{label:"岳普湖县",value:"3061",childrens:[]},{label:"伽师县",value:"3062",childrens:[]},{label:"巴楚县",value:"3063",childrens:[]},{label:"塔什库尔干",value:"3064",childrens:[]}]},{label:"克拉玛依市",value:"360",childrens:[{label:"克拉玛依市",value:"3065",childrens:[]}]},{label:"克孜勒苏柯尔克孜自治州",value:"361",childrens:[{label:"阿图什市",value:"3066",childrens:[]},{label:"阿克陶县",value:"3067",childrens:[]},{label:"阿合奇县",value:"3068",childrens:[]},{label:"乌恰县",value:"3069",childrens:[]}]},{label:"石河子市",value:"362",childrens:[{label:"石河子市",value:"3070",childrens:[]}]},{label:"图木舒克市",value:"363",childrens:[{label:"图木舒克市",value:"3071",childrens:[]}]},{label:"吐鲁番市",value:"364",childrens:[{label:"吐鲁番市",value:"3072",childrens:[]},{label:"鄯善县",value:"3073",childrens:[]},{label:"托克逊县",value:"3074",childrens:[]}]},{label:"五家渠市",value:"365",childrens:[{label:"五家渠市",value:"3075",childrens:[]}]},{label:"伊犁哈萨克自治州",value:"366",childrens:[{label:"阿勒泰市",value:"3076",childrens:[]},{label:"布克赛尔",value:"3077",childrens:[]},{label:"伊宁市",value:"3078",childrens:[]},{label:"布尔津县",value:"3079",childrens:[]},{label:"奎屯市",value:"3080",childrens:[]},{label:"乌苏市",value:"3081",childrens:[]},{label:"额敏县",value:"3082",childrens:[]},{label:"富蕴县",value:"3083",childrens:[]},{label:"伊宁县",value:"3084",childrens:[]},{label:"福海县",value:"3085",childrens:[]},{label:"霍城县",value:"3086",childrens:[]},{label:"沙湾县",value:"3087",childrens:[]},{label:"巩留县",value:"3088",childrens:[]},{label:"哈巴河县",value:"3089",childrens:[]},{label:"托里县",value:"3090",childrens:[]},{label:"青河县",value:"3091",childrens:[]},{label:"新源县",value:"3092",childrens:[]},{label:"裕民县",value:"3093",childrens:[]},{label:"和布克赛尔",value:"3094",childrens:[]},{label:"吉木乃县",value:"3095",childrens:[]},{label:"昭苏县",value:"3096",childrens:[]},{label:"特克斯县",value:"3097",childrens:[]},{label:"尼勒克县",value:"3098",childrens:[]},{label:"察布查尔",value:"3099",childrens:[]}]}]},{label:"云南省",value:"30",childrens:[{label:"昆明市",value:"367",childrens:[{label:"盘龙区",value:"3100",childrens:[]},{label:"五华区",value:"3101",childrens:[]},{label:"官渡区",value:"3102",childrens:[]},{label:"西山区",value:"3103",childrens:[]},{label:"东川区",value:"3104",childrens:[]},{label:"安宁市",value:"3105",childrens:[]},{label:"呈贡县",value:"3106",childrens:[]},{label:"晋宁县",value:"3107",childrens:[]},{label:"富民县",value:"3108",childrens:[]},{label:"宜良县",value:"3109",childrens:[]},{label:"嵩明县",value:"3110",childrens:[]},{label:"石林县",value:"3111",childrens:[]},{label:"禄劝",value:"3112",childrens:[]},{label:"寻甸",value:"3113",childrens:[]}]},{label:"怒江傈傈族自治州",value:"368",childrens:[{label:"兰坪",value:"3114",childrens:[]},{label:"泸水县",value:"3115",childrens:[]},{label:"福贡县",value:"3116",childrens:[]},{label:"贡山",value:"3117",childrens:[]}]},{label:"普洱市",value:"369",childrens:[{label:"宁洱",value:"3118",childrens:[]},{label:"思茅区",value:"3119",childrens:[]},{label:"墨江",value:"3120",childrens:[]},{label:"景东",value:"3121",childrens:[]},{label:"景谷",value:"3122",childrens:[]},{label:"镇沅",value:"3123",childrens:[]},{label:"江城",value:"3124",childrens:[]},{label:"孟连",value:"3125",childrens:[]},{label:"澜沧",value:"3126",childrens:[]},{label:"西盟",value:"3127",childrens:[]}]},{label:"丽江市",value:"370",childrens:[{label:"古城区",value:"3128",childrens:[]},{label:"宁蒗",value:"3129",childrens:[]},{label:"玉龙",value:"3130",childrens:[]},{label:"永胜县",value:"3131",childrens:[]},{label:"华坪县",value:"3132",childrens:[]}]},{label:"保山市",value:"371",childrens:[{label:"隆阳区",value:"3133",childrens:[]},{label:"施甸县",value:"3134",childrens:[]},{label:"腾冲县",value:"3135",childrens:[]},{label:"龙陵县",value:"3136",childrens:[]},{label:"昌宁县",value:"3137",childrens:[]}]},{label:"楚雄彝族自治州",value:"372",childrens:[{label:"楚雄市",value:"3138",childrens:[]},{label:"双柏县",value:"3139",childrens:[]},{label:"牟定县",value:"3140",childrens:[]},{label:"南华县",value:"3141",childrens:[]},{label:"姚安县",value:"3142",childrens:[]},{label:"大姚县",value:"3143",childrens:[]},{label:"永仁县",value:"3144",childrens:[]},{label:"元谋县",value:"3145",childrens:[]},{label:"武定县",value:"3146",childrens:[]},{label:"禄丰县",value:"3147",childrens:[]}]},{label:"大理白簇自治州",value:"373",childrens:[{label:"大理市",value:"3148",childrens:[]},{label:"祥云县",value:"3149",childrens:[]},{label:"宾川县",value:"3150",childrens:[]},{label:"弥渡县",value:"3151",childrens:[]},{label:"永平县",value:"3152",childrens:[]},{label:"云龙县",value:"3153",childrens:[]},{label:"洱源县",value:"3154",childrens:[]},{label:"剑川县",value:"3155",childrens:[]},{label:"鹤庆县",value:"3156",childrens:[]},{label:"漾濞",value:"3157",childrens:[]},{label:"南涧",value:"3158",childrens:[]},{label:"巍山",value:"3159",childrens:[]}]},{label:"德宏傣族景颇族自治州",value:"374",childrens:[{label:"潞西市",value:"3160",childrens:[]},{label:"瑞丽市",value:"3161",childrens:[]},{label:"梁河县",value:"3162",childrens:[]},{label:"盈江县",value:"3163",childrens:[]},{label:"陇川县",value:"3164",childrens:[]}]},{label:"迪庆藏族自治州",value:"375",childrens:[{label:"香格里拉县",value:"3165",childrens:[]},{label:"德钦县",value:"3166",childrens:[]},{label:"维西",value:"3167",childrens:[]}]},{label:"红河哈尼族彝族自治州",value:"376",childrens:[{label:"泸西县",value:"3168",childrens:[]},{label:"蒙自县",value:"3169",childrens:[]},{label:"个旧市",value:"3170",childrens:[]},{label:"开远市",value:"3171",childrens:[]},{label:"绿春县",value:"3172",childrens:[]},{label:"建水县",value:"3173",childrens:[]},{label:"石屏县",value:"3174",childrens:[]},{label:"弥勒县",value:"3175",childrens:[]},{label:"元阳县",value:"3176",childrens:[]},{label:"红河县",value:"3177",childrens:[]},{label:"金平",value:"3178",childrens:[]},{label:"河口",value:"3179",childrens:[]},{label:"屏边",value:"3180",childrens:[]}]},{label:"临沧市",value:"377",childrens:[{label:"临翔区",value:"3181",childrens:[]},{label:"凤庆县",value:"3182",childrens:[]},{label:"云县",value:"3183",childrens:[]},{label:"永德县",value:"3184",childrens:[]},{label:"镇康县",value:"3185",childrens:[]},{label:"双江",value:"3186",childrens:[]},{label:"耿马",value:"3187",childrens:[]},{label:"沧源",value:"3188",childrens:[]}]},{label:"曲靖市",value:"378",childrens:[{label:"麒麟区",value:"3189",childrens:[]},{label:"宣威市",value:"3190",childrens:[]},{label:"马龙县",value:"3191",childrens:[]},{label:"陆良县",value:"3192",childrens:[]},{label:"师宗县",value:"3193",childrens:[]},{label:"罗平县",value:"3194",childrens:[]},{label:"富源县",value:"3195",childrens:[]},{label:"会泽县",value:"3196",childrens:[]},{label:"沾益县",value:"3197",childrens:[]}]},{label:"文山壮族苗族自治州",value:"379",childrens:[{label:"文山县",value:"3198",childrens:[]},{label:"砚山县",value:"3199",childrens:[]},{label:"西畴县",value:"3200",childrens:[]},{label:"麻栗坡县",value:"3201",childrens:[]},{label:"马关县",value:"3202",childrens:[]},{label:"丘北县",value:"3203",childrens:[]},{label:"广南县",value:"3204",childrens:[]},{label:"富宁县",value:"3205",childrens:[]}]},{label:"西双版纳傣族自治州",value:"380",childrens:[{label:"景洪市",value:"3206",childrens:[]},{label:"勐海县",value:"3207",childrens:[]},{label:"勐腊县",value:"3208",childrens:[]}]},{label:"玉溪市",value:"381",childrens:[{label:"红塔区",value:"3209",childrens:[]},{label:"江川县",value:"3210",childrens:[]},{label:"澄江县",value:"3211",childrens:[]},{label:"通海县",value:"3212",childrens:[]},{label:"华宁县",value:"3213",childrens:[]},{label:"易门县",value:"3214",childrens:[]},{label:"峨山",value:"3215",childrens:[]},{label:"新平",value:"3216",childrens:[]},{label:"元江",value:"3217",childrens:[]}]},{label:"昭通市",value:"382",childrens:[{label:"昭阳区",value:"3218",childrens:[]},{label:"鲁甸县",value:"3219",childrens:[]},{label:"巧家县",value:"3220",childrens:[]},{label:"盐津县",value:"3221",childrens:[]},{label:"大关县",value:"3222",childrens:[]},{label:"永善县",value:"3223",childrens:[]},{label:"绥江县",value:"3224",childrens:[]},{label:"镇雄县",value:"3225",childrens:[]},{label:"彝良县",value:"3226",childrens:[]},{label:"威信县",value:"3227",childrens:[]},{label:"水富县",value:"3228",childrens:[]}]}]},{label:"浙江省",value:"31",childrens:[{label:"杭州市",value:"383",childrens:[{label:"西湖区",value:"3229",childrens:[]},{label:"上城区",value:"3230",childrens:[]},{label:"下城区",value:"3231",childrens:[]},{label:"拱墅区",value:"3232",childrens:[]},{label:"滨江区",value:"3233",childrens:[]},{label:"江干区",value:"3234",childrens:[]},{label:"萧山区",value:"3235",childrens:[]},{label:"余杭区",value:"3236",childrens:[]},{label:"市郊",value:"3237",childrens:[]},{label:"建德市",value:"3238",childrens:[]},{label:"富阳市",value:"3239",childrens:[]},{label:"临安市",value:"3240",childrens:[]},{label:"桐庐县",value:"3241",childrens:[]},{label:"淳安县",value:"3242",childrens:[]}]},{label:"湖州市",value:"384",childrens:[{label:"吴兴区",value:"3243",childrens:[]},{label:"南浔区",value:"3244",childrens:[]},{label:"德清县",value:"3245",childrens:[]},{label:"长兴县",value:"3246",childrens:[]},{label:"安吉县",value:"3247",childrens:[]}]},{label:"嘉兴市",value:"385",childrens:[{label:"南湖区",value:"3248",childrens:[]},{label:"秀洲区",value:"3249",childrens:[]},{label:"海宁市",value:"3250",childrens:[]},{label:"嘉善县",value:"3251",childrens:[]},{label:"平湖市",value:"3252",childrens:[]},{label:"桐乡市",value:"3253",childrens:[]},{label:"海盐县",value:"3254",childrens:[]}]},{label:"金华市",value:"386",childrens:[{label:"婺城区",value:"3255",childrens:[]},{label:"金东区",value:"3256",childrens:[]},{label:"兰溪市",value:"3257",childrens:[]},{label:"市区",value:"3258",childrens:[]},{label:"佛堂镇",value:"3259",childrens:[]},{label:"上溪镇",value:"3260",childrens:[]},{label:"义亭镇",value:"3261",childrens:[]},{label:"大陈镇",value:"3262",childrens:[]},{label:"苏溪镇",value:"3263",childrens:[]},{label:"赤岸镇",value:"3264",childrens:[]},{label:"东阳市",value:"3265",childrens:[]},{label:"永康市",value:"3266",childrens:[]},{label:"武义县",value:"3267",childrens:[]},{label:"浦江县",value:"3268",childrens:[]},{label:"磐安县",value:"3269",childrens:[]}]},{label:"丽水市",value:"387",childrens:[{label:"莲都区",value:"3270",childrens:[]},{label:"龙泉市",value:"3271",childrens:[]},{label:"青田县",value:"3272",childrens:[]},{label:"缙云县",value:"3273",childrens:[]},{label:"遂昌县",value:"3274",childrens:[]},{label:"松阳县",value:"3275",childrens:[]},{label:"云和县",value:"3276",childrens:[]},{label:"庆元县",value:"3277",childrens:[]},{label:"景宁",value:"3278",childrens:[]}]},{label:"宁波市",value:"388",childrens:[{label:"海曙区",value:"3279",childrens:[]},{label:"江东区",value:"3280",childrens:[]},{label:"江北区",value:"3281",childrens:[]},{label:"镇海区",value:"3282",childrens:[]},{label:"北仑区",value:"3283",childrens:[]},{label:"鄞州区",value:"3284",childrens:[]},{label:"余姚市",value:"3285",childrens:[]},{label:"慈溪市",value:"3286",childrens:[]},{label:"奉化市",value:"3287",childrens:[]},{label:"象山县",value:"3288",childrens:[]},{label:"宁海县",value:"3289",childrens:[]}]},{label:"绍兴市",value:"389",childrens:[{label:"越城区",value:"3290",childrens:[]},{label:"上虞市",value:"3291",childrens:[]},{label:"嵊州市",value:"3292",childrens:[]},{label:"绍兴县",value:"3293",childrens:[]},{label:"新昌县",value:"3294",childrens:[]},{label:"诸暨市",value:"3295",childrens:[]}]},{label:"台州市",value:"390",childrens:[{label:"椒江区",value:"3296",childrens:[]},{label:"黄岩区",value:"3297",childrens:[]},{label:"路桥区",value:"3298",childrens:[]},{label:"温岭市",value:"3299",childrens:[]},{label:"临海市",value:"3300",childrens:[]},{label:"玉环县",value:"3301",childrens:[]},{label:"三门县",value:"3302",childrens:[]},{label:"天台县",value:"3303",childrens:[]},{label:"仙居县",value:"3304",childrens:[]}]},{label:"温州市",value:"391",childrens:[{label:"鹿城区",value:"3305",childrens:[]},{label:"龙湾区",value:"3306",childrens:[]},{label:"瓯海区",value:"3307",childrens:[]},{label:"瑞安市",value:"3308",childrens:[]},{label:"乐清市",value:"3309",childrens:[]},{label:"洞头县",value:"3310",childrens:[]},{label:"永嘉县",value:"3311",childrens:[]},{label:"平阳县",value:"3312",childrens:[]},{label:"苍南县",value:"3313",childrens:[]},{label:"文成县",value:"3314",childrens:[]},{label:"泰顺县",value:"3315",childrens:[]}]},{label:"舟山市",value:"392",childrens:[{label:"定海区",value:"3316",childrens:[]},{label:"普陀区",value:"3317",childrens:[]},{label:"岱山县",value:"3318",childrens:[]},{label:"嵊泗县",value:"3319",childrens:[]}]},{label:"衢州市",value:"393",childrens:[{label:"衢州市",value:"3320",childrens:[]},{label:"江山市",value:"3321",childrens:[]},{label:"常山县",value:"3322",childrens:[]},{label:"开化县",value:"3323",childrens:[]},{label:"龙游县",value:"3324",childrens:[]}]}]},{label:"重庆",value:"32",childrens:[{label:"重庆市",value:"394",childrens:[{label:"合川区",value:"3325",childrens:[]},{label:"江津区",value:"3326",childrens:[]},{label:"南川区",value:"3327",childrens:[]},{label:"永川区",value:"3328",childrens:[]},{label:"南岸区",value:"3329",childrens:[]},{label:"渝北区",value:"3330",childrens:[]},{label:"万盛区",value:"3331",childrens:[]},{label:"大渡口区",value:"3332",childrens:[]},{label:"万州区",value:"3333",childrens:[]},{label:"北碚区",value:"3334",childrens:[]},{label:"沙坪坝区",value:"3335",childrens:[]},{label:"巴南区",value:"3336",childrens:[]},{label:"涪陵区",value:"3337",childrens:[]},{label:"江北区",value:"3338",childrens:[]},{label:"九龙坡区",value:"3339",childrens:[]},{label:"渝中区",value:"3340",childrens:[]},{label:"黔江开发区",value:"3341",childrens:[]},{label:"长寿区",value:"3342",childrens:[]},{label:"双桥区",value:"3343",childrens:[]},{label:"綦江县",value:"3344",childrens:[]},{label:"潼南县",value:"3345",childrens:[]},{label:"铜梁县",value:"3346",childrens:[]},{label:"大足县",value:"3347",childrens:[]},{label:"荣昌县",value:"3348",childrens:[]},{label:"璧山县",value:"3349",childrens:[]},{label:"垫江县",value:"3350",childrens:[]},{label:"武隆县",value:"3351",childrens:[]},{label:"丰都县",value:"3352",childrens:[]},{label:"城口县",value:"3353",childrens:[]},{label:"梁平县",value:"3354",childrens:[]},{label:"开县",value:"3355",childrens:[]},{label:"巫溪县",value:"3356",childrens:[]},{label:"巫山县",value:"3357",childrens:[]},{label:"奉节县",value:"3358",childrens:[]},{label:"云阳县",value:"3359",childrens:[]},{label:"忠县",value:"3360",childrens:[]},{label:"石柱",value:"3361",childrens:[]},{label:"彭水",value:"3362",childrens:[]},{label:"酉阳",value:"3363",childrens:[]},{label:"秀山",value:"3364",childrens:[]}]}]},{label:"香港",value:"33",childrens:[{label:"香港",value:"395",childrens:[{label:"沙田区",value:"3365",childrens:[]},{label:"东区",value:"3366",childrens:[]},{label:"观塘区",value:"3367",childrens:[]},{label:"黄大仙区",value:"3368",childrens:[]},{label:"九龙城区",value:"3369",childrens:[]},{label:"屯门区",value:"3370",childrens:[]},{label:"葵青区",value:"3371",childrens:[]},{label:"元朗区",value:"3372",childrens:[]},{label:"深水埗区",value:"3373",childrens:[]},{label:"西贡区",value:"3374",childrens:[]},{label:"大埔区",value:"3375",childrens:[]},{label:"湾仔区",value:"3376",childrens:[]},{label:"油尖旺区",value:"3377",childrens:[]},{label:"北区",value:"3378",childrens:[]},{label:"南区",value:"3379",childrens:[]},{label:"荃湾区",value:"3380",childrens:[]},{label:"中西区",value:"3381",childrens:[]},{label:"离岛区",value:"3382",childrens:[]}]}]},{label:"澳门",value:"34",childrens:[{label:"澳门",value:"396",childrens:[{label:"澳门",value:"3383",childrens:[]}]}]},{label:"台湾",value:"35",childrens:[{label:"台湾",value:"397",childrens:[{label:"台北",value:"3384",childrens:[]},{label:"高雄",value:"3385",childrens:[]},{label:"基隆",value:"3386",childrens:[]},{label:"台中",value:"3387",childrens:[]},{label:"台南",value:"3388",childrens:[]},{label:"新竹",value:"3389",childrens:[]},{label:"嘉义",value:"3390",childrens:[]},{label:"宜兰县",value:"3391",childrens:[]},{label:"桃园县",value:"3392",childrens:[]},{label:"苗栗县",value:"3393",childrens:[]},{label:"彰化县",value:"3394",childrens:[]},{label:"南投县",value:"3395",childrens:[]},{label:"云林县",value:"3396",childrens:[]},{label:"屏东县",value:"3397",childrens:[]},{label:"台东县",value:"3398",childrens:[]},{label:"花莲县",value:"3399",childrens:[]},{label:"澎湖县",value:"3400",childrens:[]}]}]}],r={jd:n};e.default=r},"509c":function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("f5b3"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},5143:function(l,e,a){},"5fbd":function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("d1c9"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},"66fd":function(l,e,a){"use strict";a.r(e),function(l){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function n(l){return void 0===l||null===l}function r(l){return void 0!==l&&null!==l}function i(l){return!0===l}function s(l){return!1===l}function c(l){return"string"===typeof l||"number"===typeof l||"symbol"===typeof l||"boolean"===typeof l}function u(l){return null!==l&&"object"===typeof l}var t=Object.prototype.toString;function h(l){return"[object Object]"===t.call(l)}function d(l){return"[object RegExp]"===t.call(l)}function v(l){var e=parseFloat(String(l));return e>=0&&Math.floor(e)===e&&isFinite(l)}function b(l){return r(l)&&"function"===typeof l.then&&"function"===typeof l.catch}function o(l){return null==l?"":Array.isArray(l)||h(l)&&l.toString===t?JSON.stringify(l,null,2):String(l)}function f(l){var e=parseFloat(l);return isNaN(e)?l:e}function p(l,e){for(var a=Object.create(null),n=l.split(","),r=0;r<n.length;r++)a[n[r]]=!0;return e?function(l){return a[l.toLowerCase()]}:function(l){return a[l]}}p("slot,component",!0);var y=p("key,ref,slot,slot-scope,is");function _(l,e){if(l.length){var a=l.indexOf(e);if(a>-1)return l.splice(a,1)}}var g=Object.prototype.hasOwnProperty;function m(l,e){return g.call(l,e)}function w(l){var e=Object.create(null);return function(a){var n=e[a];return n||(e[a]=l(a))}}var $=/-(\w)/g,O=w(function(l){return l.replace($,function(l,e){return e?e.toUpperCase():""})}),x=w(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}),A=/\B([A-Z])/g,k=w(function(l){return l.replace(A,"-$1").toLowerCase()});function j(l,e){function a(a){var n=arguments.length;return n?n>1?l.apply(e,arguments):l.call(e,a):l.call(e)}return a._length=l.length,a}function E(l,e){return l.bind(e)}var P=Function.prototype.bind?E:j;function S(l,e){e=e||0;var a=l.length-e,n=new Array(a);while(a--)n[a]=l[a+e];return n}function C(l,e){for(var a in e)l[a]=e[a];return l}function M(l){for(var e={},a=0;a<l.length;a++)l[a]&&C(e,l[a]);return e}function T(l,e,a){}var I=function(l,e,a){return!1},D=function(l){return l};function N(l,e){if(l===e)return!0;var a=u(l),n=u(e);if(!a||!n)return!a&&!n&&String(l)===String(e);try{var r=Array.isArray(l),i=Array.isArray(e);if(r&&i)return l.length===e.length&&l.every(function(l,a){return N(l,e[a])});if(l instanceof Date&&e instanceof Date)return l.getTime()===e.getTime();if(r||i)return!1;var s=Object.keys(l),c=Object.keys(e);return s.length===c.length&&s.every(function(a){return N(l[a],e[a])})}catch(t){return!1}}function L(l,e){for(var a=0;a<l.length;a++)if(N(l[a],e))return a;return-1}function R(l){var e=!1;return function(){e||(e=!0,l.apply(this,arguments))}}var V=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:D,mustUseProp:I,async:!0,_lifecycleHooks:F},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(l){var e=(l+"").charCodeAt(0);return 36===e||95===e}function H(l,e,a,n){Object.defineProperty(l,e,{value:a,enumerable:!!n,writable:!0,configurable:!0})}var z=new RegExp("[^"+U.source+".$_\\d]");function W(l){if(!z.test(l)){var e=l.split(".");return function(l){for(var a=0;a<e.length;a++){if(!l)return;l=l[e[a]]}return l}}}var q,J="__proto__"in{},X="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),Y=X&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),ll=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),el=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),al=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(X)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){}}),window.addEventListener("test-passive",null,nl)}catch(ar){}var rl=function(){return void 0===q&&(q=!X&&!K&&"undefined"!==typeof l&&(l["process"]&&"server"===l["process"].env.VUE_ENV)),q},il=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function sl(l){return"function"===typeof l&&/native code/.test(l.toString())}var cl,ul="undefined"!==typeof Symbol&&sl(Symbol)&&"undefined"!==typeof Reflect&&sl(Reflect.ownKeys);cl="undefined"!==typeof Set&&sl(Set)?Set:function(){function l(){this.set=Object.create(null)}return l.prototype.has=function(l){return!0===this.set[l]},l.prototype.add=function(l){this.set[l]=!0},l.prototype.clear=function(){this.set=Object.create(null)},l}();var tl=T,hl=0,dl=function(){this.id=hl++,this.subs=[]};dl.prototype.addSub=function(l){this.subs.push(l)},dl.prototype.removeSub=function(l){_(this.subs,l)},dl.prototype.depend=function(){dl.target&&dl.target.addDep(this)},dl.prototype.notify=function(){var l=this.subs.slice();for(var e=0,a=l.length;e<a;e++)l[e].update()},dl.target=null;var vl=[];function bl(l){vl.push(l),dl.target=l}function ol(){vl.pop(),dl.target=vl[vl.length-1]}var fl=function(l,e,a,n,r,i,s,c){this.tag=l,this.data=e,this.children=a,this.text=n,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},pl={child:{configurable:!0}};pl.child.get=function(){return this.componentInstance},Object.defineProperties(fl.prototype,pl);var yl=function(l){void 0===l&&(l="");var e=new fl;return e.text=l,e.isComment=!0,e};function _l(l){return new fl(void 0,void 0,void 0,String(l))}function gl(l){var e=new fl(l.tag,l.data,l.children&&l.children.slice(),l.text,l.elm,l.context,l.componentOptions,l.asyncFactory);return e.ns=l.ns,e.isStatic=l.isStatic,e.key=l.key,e.isComment=l.isComment,e.fnContext=l.fnContext,e.fnOptions=l.fnOptions,e.fnScopeId=l.fnScopeId,e.asyncMeta=l.asyncMeta,e.isCloned=!0,e}var ml=Array.prototype,wl=Object.create(ml),$l=["push","pop","shift","unshift","splice","sort","reverse"];$l.forEach(function(l){var e=ml[l];H(wl,l,function(){var a=[],n=arguments.length;while(n--)a[n]=arguments[n];var r,i=e.apply(this,a),s=this.__ob__;switch(l){case"push":case"unshift":r=a;break;case"splice":r=a.slice(2);break}return r&&s.observeArray(r),s.dep.notify(),i})});var Ol=Object.getOwnPropertyNames(wl),xl=!0;function Al(l){xl=l}var kl=function(l){this.value=l,this.dep=new dl,this.vmCount=0,H(l,"__ob__",this),Array.isArray(l)?(J?jl(l,wl):El(l,wl,Ol),this.observeArray(l)):this.walk(l)};function jl(l,e){l.__proto__=e}function El(l,e,a){for(var n=0,r=a.length;n<r;n++){var i=a[n];H(l,i,e[i])}}function Pl(l,e){var a;if(u(l)&&!(l instanceof fl))return m(l,"__ob__")&&l.__ob__ instanceof kl?a=l.__ob__:xl&&!rl()&&(Array.isArray(l)||h(l))&&Object.isExtensible(l)&&!l._isVue&&(a=new kl(l)),e&&a&&a.vmCount++,a}function Sl(l,e,a,n,r){var i=new dl,s=Object.getOwnPropertyDescriptor(l,e);if(!s||!1!==s.configurable){var c=s&&s.get,u=s&&s.set;c&&!u||2!==arguments.length||(a=l[e]);var t=!r&&Pl(a);Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:function(){var e=c?c.call(l):a;return dl.target&&(i.depend(),t&&(t.dep.depend(),Array.isArray(e)&&Tl(e))),e},set:function(e){var n=c?c.call(l):a;e===n||e!==e&&n!==n||c&&!u||(u?u.call(l,e):a=e,t=!r&&Pl(e),i.notify())}})}}function Cl(l,e,a){if(Array.isArray(l)&&v(e))return l.length=Math.max(l.length,e),l.splice(e,1,a),a;if(e in l&&!(e in Object.prototype))return l[e]=a,a;var n=l.__ob__;return l._isVue||n&&n.vmCount?a:n?(Sl(n.value,e,a),n.dep.notify(),a):(l[e]=a,a)}function Ml(l,e){if(Array.isArray(l)&&v(e))l.splice(e,1);else{var a=l.__ob__;l._isVue||a&&a.vmCount||m(l,e)&&(delete l[e],a&&a.dep.notify())}}function Tl(l){for(var e=void 0,a=0,n=l.length;a<n;a++)e=l[a],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tl(e)}kl.prototype.walk=function(l){for(var e=Object.keys(l),a=0;a<e.length;a++)Sl(l,e[a])},kl.prototype.observeArray=function(l){for(var e=0,a=l.length;e<a;e++)Pl(l[e])};var Il=B.optionMergeStrategies;function Dl(l,e){if(!e)return l;for(var a,n,r,i=ul?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)a=i[s],"__ob__"!==a&&(n=l[a],r=e[a],m(l,a)?n!==r&&h(n)&&h(r)&&Dl(n,r):Cl(l,a,r));return l}function Nl(l,e,a){return a?function(){var n="function"===typeof e?e.call(a,a):e,r="function"===typeof l?l.call(a,a):l;return n?Dl(n,r):r}:e?l?function(){return Dl("function"===typeof e?e.call(this,this):e,"function"===typeof l?l.call(this,this):l)}:e:l}function Ll(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?Rl(a):a}function Rl(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function Vl(l,e,a,n){var r=Object.create(l||null);return e?C(r,e):r}Il.data=function(l,e,a){return a?Nl(l,e,a):e&&"function"!==typeof e?l:Nl(l,e)},F.forEach(function(l){Il[l]=Ll}),V.forEach(function(l){Il[l+"s"]=Vl}),Il.watch=function(l,e,a,n){if(l===al&&(l=void 0),e===al&&(e=void 0),!e)return Object.create(l||null);if(!l)return e;var r={};for(var i in C(r,l),e){var s=r[i],c=e[i];s&&!Array.isArray(s)&&(s=[s]),r[i]=s?s.concat(c):Array.isArray(c)?c:[c]}return r},Il.props=Il.methods=Il.inject=Il.computed=function(l,e,a,n){if(!l)return e;var r=Object.create(null);return C(r,l),e&&C(r,e),r},Il.provide=Nl;var Fl=function(l,e){return void 0===e?l:e};function Bl(l,e){var a=l.props;if(a){var n,r,i,s={};if(Array.isArray(a)){n=a.length;while(n--)r=a[n],"string"===typeof r&&(i=O(r),s[i]={type:null})}else if(h(a))for(var c in a)r=a[c],i=O(c),s[i]=h(r)?r:{type:r};else 0;l.props=s}}function Ul(l,e){var a=l.inject;if(a){var n=l.inject={};if(Array.isArray(a))for(var r=0;r<a.length;r++)n[a[r]]={from:a[r]};else if(h(a))for(var i in a){var s=a[i];n[i]=h(s)?C({from:i},s):{from:s}}else 0}}function Gl(l){var e=l.directives;if(e)for(var a in e){var n=e[a];"function"===typeof n&&(e[a]={bind:n,update:n})}}function Hl(l,e,a){if("function"===typeof e&&(e=e.options),Bl(e,a),Ul(e,a),Gl(e),!e._base&&(e.extends&&(l=Hl(l,e.extends,a)),e.mixins))for(var n=0,r=e.mixins.length;n<r;n++)l=Hl(l,e.mixins[n],a);var i,s={};for(i in l)c(i);for(i in e)m(l,i)||c(i);function c(n){var r=Il[n]||Fl;s[n]=r(l[n],e[n],a,n)}return s}function zl(l,e,a,n){if("string"===typeof a){var r=l[e];if(m(r,a))return r[a];var i=O(a);if(m(r,i))return r[i];var s=x(i);if(m(r,s))return r[s];var c=r[a]||r[i]||r[s];return c}}function Wl(l,e,a,n){var r=e[l],i=!m(a,l),s=a[l],c=Kl(Boolean,r.type);if(c>-1)if(i&&!m(r,"default"))s=!1;else if(""===s||s===k(l)){var u=Kl(String,r.type);(u<0||c<u)&&(s=!0)}if(void 0===s){s=ql(n,r,l);var t=xl;Al(!0),Pl(s),Al(t)}return s}function ql(l,e,a){if(m(e,"default")){var n=e.default;return l&&l.$options.propsData&&void 0===l.$options.propsData[a]&&void 0!==l._props[a]?l._props[a]:"function"===typeof n&&"Function"!==Jl(e.type)?n.call(l):n}}function Jl(l){var e=l&&l.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xl(l,e){return Jl(l)===Jl(e)}function Kl(l,e){if(!Array.isArray(e))return Xl(e,l)?0:-1;for(var a=0,n=e.length;a<n;a++)if(Xl(e[a],l))return a;return-1}function Ql(l,e,a){bl();try{if(e){var n=e;while(n=n.$parent){var r=n.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var s=!1===r[i].call(n,l,e,a);if(s)return}catch(ar){Zl(ar,n,"errorCaptured hook")}}}Zl(l,e,a)}finally{ol()}}function Yl(l,e,a,n,r){var i;try{i=a?l.apply(e,a):l.call(e),i&&!i._isVue&&b(i)&&!i._handled&&(i.catch(function(l){return Ql(l,n,r+" (Promise/async)")}),i._handled=!0)}catch(ar){Ql(ar,n,r)}return i}function Zl(l,e,a){if(B.errorHandler)try{return B.errorHandler.call(null,l,e,a)}catch(ar){ar!==l&&le(ar,null,"config.errorHandler")}le(l,e,a)}function le(l,e,a){if(!X&&!K||"undefined"===typeof console)throw l;console.error(l)}var ee,ae=[],ne=!1;function re(){ne=!1;var l=ae.slice(0);ae.length=0;for(var e=0;e<l.length;e++)l[e]()}if("undefined"!==typeof Promise&&sl(Promise)){var ie=Promise.resolve();ee=function(){ie.then(re),el&&setTimeout(T)}}else if(Z||"undefined"===typeof MutationObserver||!sl(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&sl(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var se=1,ce=new MutationObserver(re),ue=document.createTextNode(String(se));ce.observe(ue,{characterData:!0}),ee=function(){se=(se+1)%2,ue.data=String(se)}}function te(l,e){var a;if(ae.push(function(){if(l)try{l.call(e)}catch(ar){Ql(ar,e,"nextTick")}else a&&a(e)}),ne||(ne=!0,ee()),!l&&"undefined"!==typeof Promise)return new Promise(function(l){a=l})}var he=new cl;function de(l){ve(l,he),he.clear()}function ve(l,e){var a,n,r=Array.isArray(l);if(!(!r&&!u(l)||Object.isFrozen(l)||l instanceof fl)){if(l.__ob__){var i=l.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(r){a=l.length;while(a--)ve(l[a],e)}else{n=Object.keys(l),a=n.length;while(a--)ve(l[n[a]],e)}}}var be=w(function(l){var e="&"===l.charAt(0);l=e?l.slice(1):l;var a="~"===l.charAt(0);l=a?l.slice(1):l;var n="!"===l.charAt(0);return l=n?l.slice(1):l,{name:l,once:a,capture:n,passive:e}});function oe(l,e){function a(){var l=arguments,n=a.fns;if(!Array.isArray(n))return Yl(n,null,arguments,e,"v-on handler");for(var r=n.slice(),i=0;i<r.length;i++)Yl(r[i],null,l,e,"v-on handler")}return a.fns=l,a}function fe(l,e,a,r,s,c){var u,t,h,d;for(u in l)t=l[u],h=e[u],d=be(u),n(t)||(n(h)?(n(t.fns)&&(t=l[u]=oe(t,c)),i(d.once)&&(t=l[u]=s(d.name,t,d.capture)),a(d.name,t,d.capture,d.passive,d.params)):t!==h&&(h.fns=t,l[u]=h));for(u in e)n(l[u])&&(d=be(u),r(d.name,e[u],d.capture))}function pe(l,e,a){var i=e.options.props;if(!n(i)){var s={},c=l.attrs,u=l.props;if(r(c)||r(u))for(var t in i){var h=k(t);ye(s,u,t,h,!0)||ye(s,c,t,h,!1)}return s}}function ye(l,e,a,n,i){if(r(e)){if(m(e,a))return l[a]=e[a],i||delete e[a],!0;if(m(e,n))return l[a]=e[n],i||delete e[n],!0}return!1}function _e(l){for(var e=0;e<l.length;e++)if(Array.isArray(l[e]))return Array.prototype.concat.apply([],l);return l}function ge(l){return c(l)?[_l(l)]:Array.isArray(l)?we(l):void 0}function me(l){return r(l)&&r(l.text)&&s(l.isComment)}function we(l,e){var a,s,u,t,h=[];for(a=0;a<l.length;a++)s=l[a],n(s)||"boolean"===typeof s||(u=h.length-1,t=h[u],Array.isArray(s)?s.length>0&&(s=we(s,(e||"")+"_"+a),me(s[0])&&me(t)&&(h[u]=_l(t.text+s[0].text),s.shift()),h.push.apply(h,s)):c(s)?me(t)?h[u]=_l(t.text+s):""!==s&&h.push(_l(s)):me(s)&&me(t)?h[u]=_l(t.text+s.text):(i(l._isVList)&&r(s.tag)&&n(s.key)&&r(e)&&(s.key="__vlist"+e+"_"+a+"__"),h.push(s)));return h}function $e(l){var e=l.$options.provide;e&&(l._provided="function"===typeof e?e.call(l):e)}function Oe(l){var e=xe(l.$options.inject,l);e&&(Al(!1),Object.keys(e).forEach(function(a){Sl(l,a,e[a])}),Al(!0))}function xe(l,e){if(l){for(var a=Object.create(null),n=ul?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++){var i=n[r];if("__ob__"!==i){var s=l[i].from,c=e;while(c){if(c._provided&&m(c._provided,s)){a[i]=c._provided[s];break}c=c.$parent}if(!c)if("default"in l[i]){var u=l[i].default;a[i]="function"===typeof u?u.call(e):u}else 0}}return a}}function Ae(l,e){if(!l||!l.length)return{};for(var a={},n=0,r=l.length;n<r;n++){var i=l[n],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==e&&i.fnContext!==e||!s||null==s.slot)(a.default||(a.default=[])).push(i);else{var c=s.slot,u=a[c]||(a[c]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var t in a)a[t].every(ke)&&delete a[t];return a}function ke(l){return l.isComment&&!l.asyncFactory||" "===l.text}function je(l,e,n){var r,i=Object.keys(e).length>0,s=l?!!l.$stable:!i,c=l&&l.$key;if(l){if(l._normalized)return l._normalized;if(s&&n&&n!==a&&c===n.$key&&!i&&!n.$hasNormal)return n;for(var u in r={},l)l[u]&&"$"!==u[0]&&(r[u]=Ee(e,u,l[u]))}else r={};for(var t in e)t in r||(r[t]=Pe(e,t));return l&&Object.isExtensible(l)&&(l._normalized=r),H(r,"$stable",s),H(r,"$key",c),H(r,"$hasNormal",i),r}function Ee(l,e,a){var n=function(){var l=arguments.length?a.apply(null,arguments):a({});return l=l&&"object"===typeof l&&!Array.isArray(l)?[l]:ge(l),l&&(0===l.length||1===l.length&&l[0].isComment)?void 0:l};return a.proxy&&Object.defineProperty(l,e,{get:n,enumerable:!0,configurable:!0}),n}function Pe(l,e){return function(){return l[e]}}function Se(l,e){var a,n,i,s,c;if(Array.isArray(l)||"string"===typeof l)for(a=new Array(l.length),n=0,i=l.length;n<i;n++)a[n]=e(l[n],n);else if("number"===typeof l)for(a=new Array(l),n=0;n<l;n++)a[n]=e(n+1,n);else if(u(l))if(ul&&l[Symbol.iterator]){a=[];var t=l[Symbol.iterator](),h=t.next();while(!h.done)a.push(e(h.value,a.length)),h=t.next()}else for(s=Object.keys(l),a=new Array(s.length),n=0,i=s.length;n<i;n++)c=s[n],a[n]=e(l[c],c,n);return r(a)||(a=[]),a._isVList=!0,a}function Ce(l,e,a,n){var r,i=this.$scopedSlots[l];i?(a=a||{},n&&(a=C(C({},n),a)),r=i(a)||e):r=this.$slots[l]||e;var s=a&&a.slot;return s?this.$createElement("template",{slot:s},r):r}function Me(l){return zl(this.$options,"filters",l,!0)||D}function Te(l,e){return Array.isArray(l)?-1===l.indexOf(e):l!==e}function Ie(l,e,a,n,r){var i=B.keyCodes[e]||a;return r&&n&&!B.keyCodes[e]?Te(r,n):i?Te(i,l):n?k(n)!==e:void 0}function De(l,e,a,n,r){if(a)if(u(a)){var i;Array.isArray(a)&&(a=M(a));var s=function(s){if("class"===s||"style"===s||y(s))i=l;else{var c=l.attrs&&l.attrs.type;i=n||B.mustUseProp(e,c,s)?l.domProps||(l.domProps={}):l.attrs||(l.attrs={})}var u=O(s),t=k(s);if(!(u in i)&&!(t in i)&&(i[s]=a[s],r)){var h=l.on||(l.on={});h["update:"+s]=function(l){a[s]=l}}};for(var c in a)s(c)}else;return l}function Ne(l,e){var a=this._staticTrees||(this._staticTrees=[]),n=a[l];return n&&!e?n:(n=a[l]=this.$options.staticRenderFns[l].call(this._renderProxy,null,this),Re(n,"__static__"+l,!1),n)}function Le(l,e,a){return Re(l,"__once__"+e+(a?"_"+a:""),!0),l}function Re(l,e,a){if(Array.isArray(l))for(var n=0;n<l.length;n++)l[n]&&"string"!==typeof l[n]&&Ve(l[n],e+"_"+n,a);else Ve(l,e,a)}function Ve(l,e,a){l.isStatic=!0,l.key=e,l.isOnce=a}function Fe(l,e){if(e)if(h(e)){var a=l.on=l.on?C({},l.on):{};for(var n in e){var r=a[n],i=e[n];a[n]=r?[].concat(r,i):i}}else;return l}function Be(l,e,a,n){e=e||{$stable:!a};for(var r=0;r<l.length;r++){var i=l[r];Array.isArray(i)?Be(i,e,a):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return n&&(e.$key=n),e}function Ue(l,e){for(var a=0;a<e.length;a+=2){var n=e[a];"string"===typeof n&&n&&(l[e[a]]=e[a+1])}return l}function Ge(l,e){return"string"===typeof l?e+l:l}function He(l){l._o=Le,l._n=f,l._s=o,l._l=Se,l._t=Ce,l._q=N,l._i=L,l._m=Ne,l._f=Me,l._k=Ie,l._b=De,l._v=_l,l._e=yl,l._u=Be,l._g=Fe,l._d=Ue,l._p=Ge}function ze(l,e,n,r,s){var c,u=this,t=s.options;m(r,"_uid")?(c=Object.create(r),c._original=r):(c=r,r=r._original);var h=i(t._compiled),d=!h;this.data=l,this.props=e,this.children=n,this.parent=r,this.listeners=l.on||a,this.injections=xe(t.inject,r),this.slots=function(){return u.$slots||je(l.scopedSlots,u.$slots=Ae(n,r)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return je(l.scopedSlots,this.slots())}}),h&&(this.$options=t,this.$slots=this.slots(),this.$scopedSlots=je(l.scopedSlots,this.$slots)),t._scopeId?this._c=function(l,e,a,n){var i=ra(c,l,e,a,n,d);return i&&!Array.isArray(i)&&(i.fnScopeId=t._scopeId,i.fnContext=r),i}:this._c=function(l,e,a,n){return ra(c,l,e,a,n,d)}}function We(l,e,n,i,s){var c=l.options,u={},t=c.props;if(r(t))for(var h in t)u[h]=Wl(h,t,e||a);else r(n.attrs)&&Je(u,n.attrs),r(n.props)&&Je(u,n.props);var d=new ze(n,u,s,i,l),v=c.render.call(null,d._c,d);if(v instanceof fl)return qe(v,n,d.parent,c,d);if(Array.isArray(v)){for(var b=ge(v)||[],o=new Array(b.length),f=0;f<b.length;f++)o[f]=qe(b[f],n,d.parent,c,d);return o}}function qe(l,e,a,n,r){var i=gl(l);return i.fnContext=a,i.fnOptions=n,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(l,e){for(var a in e)l[O(a)]=e[a]}He(ze.prototype);var Xe={init:function(l,e){if(l.componentInstance&&!l.componentInstance._isDestroyed&&l.data.keepAlive){var a=l;Xe.prepatch(a,a)}else{var n=l.componentInstance=Ye(l,Oa);n.$mount(e?l.elm:void 0,e)}},prepatch:function(l,e){var a=e.componentOptions,n=e.componentInstance=l.componentInstance;ja(n,a.propsData,a.listeners,e,a.children)},insert:function(l){var e=l.context,a=l.componentInstance;a._isMounted||(a._isMounted=!0,Ca(a,"mounted")),l.data.keepAlive&&(e._isMounted?Ga(a):Pa(a,!0))},destroy:function(l){var e=l.componentInstance;e._isDestroyed||(l.data.keepAlive?Sa(e,!0):e.$destroy())}},Ke=Object.keys(Xe);function Qe(l,e,a,s,c){if(!n(l)){var t=a.$options._base;if(u(l)&&(l=t.extend(l)),"function"===typeof l){var h;if(n(l.cid)&&(h=l,l=oa(h,t),void 0===l))return ba(h,e,a,s,c);e=e||{},bn(l),r(e.model)&&ea(l.options,e);var d=pe(e,l,c);if(i(l.options.functional))return We(l,d,e,a,s);var v=e.on;if(e.on=e.nativeOn,i(l.options.abstract)){var b=e.slot;e={},b&&(e.slot=b)}Ze(e);var o=l.options.name||c,f=new fl("vue-component-"+l.cid+(o?"-"+o:""),e,void 0,void 0,void 0,a,{Ctor:l,propsData:d,listeners:v,tag:c,children:s},h);return f}}}function Ye(l,e){var a={_isComponent:!0,_parentVnode:l,parent:e},n=l.data.inlineTemplate;return r(n)&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),new l.componentOptions.Ctor(a)}function Ze(l){for(var e=l.hook||(l.hook={}),a=0;a<Ke.length;a++){var n=Ke[a],r=e[n],i=Xe[n];r===i||r&&r._merged||(e[n]=r?la(i,r):i)}}function la(l,e){var a=function(a,n){l(a,n),e(a,n)};return a._merged=!0,a}function ea(l,e){var a=l.model&&l.model.prop||"value",n=l.model&&l.model.event||"input";(e.attrs||(e.attrs={}))[a]=e.model.value;var i=e.on||(e.on={}),s=i[n],c=e.model.callback;r(s)?(Array.isArray(s)?-1===s.indexOf(c):s!==c)&&(i[n]=[c].concat(s)):i[n]=c}var aa=1,na=2;function ra(l,e,a,n,r,s){return(Array.isArray(a)||c(a))&&(r=n,n=a,a=void 0),i(s)&&(r=na),ia(l,e,a,n,r)}function ia(l,e,a,n,i){if(r(a)&&r(a.__ob__))return yl();if(r(a)&&r(a.is)&&(e=a.is),!e)return yl();var s,c,u;(Array.isArray(n)&&"function"===typeof n[0]&&(a=a||{},a.scopedSlots={default:n[0]},n.length=0),i===na?n=ge(n):i===aa&&(n=_e(n)),"string"===typeof e)?(c=l.$vnode&&l.$vnode.ns||B.getTagNamespace(e),s=B.isReservedTag(e)?new fl(B.parsePlatformTagName(e),a,n,void 0,void 0,l):a&&a.pre||!r(u=zl(l.$options,"components",e))?new fl(e,a,n,void 0,void 0,l):Qe(u,a,l,n,e)):s=Qe(e,a,l,n);return Array.isArray(s)?s:r(s)?(r(c)&&sa(s,c),r(a)&&ca(a),s):yl()}function sa(l,e,a){if(l.ns=e,"foreignObject"===l.tag&&(e=void 0,a=!0),r(l.children))for(var s=0,c=l.children.length;s<c;s++){var u=l.children[s];r(u.tag)&&(n(u.ns)||i(a)&&"svg"!==u.tag)&&sa(u,e,a)}}function ca(l){u(l.style)&&de(l.style),u(l.class)&&de(l.class)}function ua(l){l._vnode=null,l._staticTrees=null;var e=l.$options,n=l.$vnode=e._parentVnode,r=n&&n.context;l.$slots=Ae(e._renderChildren,r),l.$scopedSlots=a,l._c=function(e,a,n,r){return ra(l,e,a,n,r,!1)},l.$createElement=function(e,a,n,r){return ra(l,e,a,n,r,!0)};var i=n&&n.data;Sl(l,"$attrs",i&&i.attrs||a,null,!0),Sl(l,"$listeners",e._parentListeners||a,null,!0)}var ta,ha=null;function da(l){He(l.prototype),l.prototype.$nextTick=function(l){return te(l,this)},l.prototype._render=function(){var l,e=this,a=e.$options,n=a.render,r=a._parentVnode;r&&(e.$scopedSlots=je(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{ha=e,l=n.call(e._renderProxy,e.$createElement)}catch(ar){Ql(ar,e,"render"),l=e._vnode}finally{ha=null}return Array.isArray(l)&&1===l.length&&(l=l[0]),l instanceof fl||(l=yl()),l.parent=r,l}}function va(l,e){return(l.__esModule||ul&&"Module"===l[Symbol.toStringTag])&&(l=l.default),u(l)?e.extend(l):l}function ba(l,e,a,n,r){var i=yl();return i.asyncFactory=l,i.asyncMeta={data:e,context:a,children:n,tag:r},i}function oa(l,e){if(i(l.error)&&r(l.errorComp))return l.errorComp;if(r(l.resolved))return l.resolved;var a=ha;if(a&&r(l.owners)&&-1===l.owners.indexOf(a)&&l.owners.push(a),i(l.loading)&&r(l.loadingComp))return l.loadingComp;if(a&&!r(l.owners)){var s=l.owners=[a],c=!0,t=null,h=null;a.$on("hook:destroyed",function(){return _(s,a)});var d=function(l){for(var e=0,a=s.length;e<a;e++)s[e].$forceUpdate();l&&(s.length=0,null!==t&&(clearTimeout(t),t=null),null!==h&&(clearTimeout(h),h=null))},v=R(function(a){l.resolved=va(a,e),c?s.length=0:d(!0)}),o=R(function(e){r(l.errorComp)&&(l.error=!0,d(!0))}),f=l(v,o);return u(f)&&(b(f)?n(l.resolved)&&f.then(v,o):b(f.component)&&(f.component.then(v,o),r(f.error)&&(l.errorComp=va(f.error,e)),r(f.loading)&&(l.loadingComp=va(f.loading,e),0===f.delay?l.loading=!0:t=setTimeout(function(){t=null,n(l.resolved)&&n(l.error)&&(l.loading=!0,d(!1))},f.delay||200)),r(f.timeout)&&(h=setTimeout(function(){h=null,n(l.resolved)&&o(null)},f.timeout)))),c=!1,l.loading?l.loadingComp:l.resolved}}function fa(l){return l.isComment&&l.asyncFactory}function pa(l){if(Array.isArray(l))for(var e=0;e<l.length;e++){var a=l[e];if(r(a)&&(r(a.componentOptions)||fa(a)))return a}}function ya(l){l._events=Object.create(null),l._hasHookEvent=!1;var e=l.$options._parentListeners;e&&wa(l,e)}function _a(l,e){ta.$on(l,e)}function ga(l,e){ta.$off(l,e)}function ma(l,e){var a=ta;return function n(){var r=e.apply(null,arguments);null!==r&&a.$off(l,n)}}function wa(l,e,a){ta=l,fe(e,a||{},_a,ga,ma,l),ta=void 0}function $a(l){var e=/^hook:/;l.prototype.$on=function(l,a){var n=this;if(Array.isArray(l))for(var r=0,i=l.length;r<i;r++)n.$on(l[r],a);else(n._events[l]||(n._events[l]=[])).push(a),e.test(l)&&(n._hasHookEvent=!0);return n},l.prototype.$once=function(l,e){var a=this;function n(){a.$off(l,n),e.apply(a,arguments)}return n.fn=e,a.$on(l,n),a},l.prototype.$off=function(l,e){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(l)){for(var n=0,r=l.length;n<r;n++)a.$off(l[n],e);return a}var i,s=a._events[l];if(!s)return a;if(!e)return a._events[l]=null,a;var c=s.length;while(c--)if(i=s[c],i===e||i.fn===e){s.splice(c,1);break}return a},l.prototype.$emit=function(l){var e=this,a=e._events[l];if(a){a=a.length>1?S(a):a;for(var n=S(arguments,1),r='event handler for "'+l+'"',i=0,s=a.length;i<s;i++)Yl(a[i],e,n,e,r)}return e}}var Oa=null;function xa(l){var e=Oa;return Oa=l,function(){Oa=e}}function Aa(l){var e=l.$options,a=e.parent;if(a&&!e.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(l)}l.$parent=a,l.$root=a?a.$root:l,l.$children=[],l.$refs={},l._watcher=null,l._inactive=null,l._directInactive=!1,l._isMounted=!1,l._isDestroyed=!1,l._isBeingDestroyed=!1}function ka(l){l.prototype._update=function(l,e){var a=this,n=a.$el,r=a._vnode,i=xa(a);a._vnode=l,a.$el=r?a.__patch__(r,l):a.__patch__(a.$el,l,e,!1),i(),n&&(n.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},l.prototype.$forceUpdate=function(){var l=this;l._watcher&&l._watcher.update()},l.prototype.$destroy=function(){var l=this;if(!l._isBeingDestroyed){Ca(l,"beforeDestroy"),l._isBeingDestroyed=!0;var e=l.$parent;!e||e._isBeingDestroyed||l.$options.abstract||_(e.$children,l),l._watcher&&l._watcher.teardown();var a=l._watchers.length;while(a--)l._watchers[a].teardown();l._data.__ob__&&l._data.__ob__.vmCount--,l._isDestroyed=!0,l.__patch__(l._vnode,null),Ca(l,"destroyed"),l.$off(),l.$el&&(l.$el.__vue__=null),l.$vnode&&(l.$vnode.parent=null)}}}function ja(l,e,n,r,i){var s=r.data.scopedSlots,c=l.$scopedSlots,u=!!(s&&!s.$stable||c!==a&&!c.$stable||s&&l.$scopedSlots.$key!==s.$key),t=!!(i||l.$options._renderChildren||u);if(l.$options._parentVnode=r,l.$vnode=r,l._vnode&&(l._vnode.parent=r),l.$options._renderChildren=i,l.$attrs=r.data.attrs||a,l.$listeners=n||a,e&&l.$options.props){Al(!1);for(var h=l._props,d=l.$options._propKeys||[],v=0;v<d.length;v++){var b=d[v],o=l.$options.props;h[b]=Wl(b,o,e,l)}Al(!0),l.$options.propsData=e}n=n||a;var f=l.$options._parentListeners;l.$options._parentListeners=n,wa(l,n,f),t&&(l.$slots=Ae(i,r.context),l.$forceUpdate())}function Ea(l){while(l&&(l=l.$parent))if(l._inactive)return!0;return!1}function Pa(l,e){if(e){if(l._directInactive=!1,Ea(l))return}else if(l._directInactive)return;if(l._inactive||null===l._inactive){l._inactive=!1;for(var a=0;a<l.$children.length;a++)Pa(l.$children[a]);Ca(l,"activated")}}function Sa(l,e){if((!e||(l._directInactive=!0,!Ea(l)))&&!l._inactive){l._inactive=!0;for(var a=0;a<l.$children.length;a++)Sa(l.$children[a]);Ca(l,"deactivated")}}function Ca(l,e){bl();var a=l.$options[e],n=e+" hook";if(a)for(var r=0,i=a.length;r<i;r++)Yl(a[r],l,null,l,n);l._hasHookEvent&&l.$emit("hook:"+e),ol()}var Ma=[],Ta=[],Ia={},Da=!1,Na=!1,La=0;function Ra(){La=Ma.length=Ta.length=0,Ia={},Da=Na=!1}var Va=Date.now;if(X&&!Z){var Fa=window.performance;Fa&&"function"===typeof Fa.now&&Va()>document.createEvent("Event").timeStamp&&(Va=function(){return Fa.now()})}function Ba(){var l,e;for(Va(),Na=!0,Ma.sort(function(l,e){return l.id-e.id}),La=0;La<Ma.length;La++)l=Ma[La],l.before&&l.before(),e=l.id,Ia[e]=null,l.run();var a=Ta.slice(),n=Ma.slice();Ra(),Ha(a),Ua(n),il&&B.devtools&&il.emit("flush")}function Ua(l){var e=l.length;while(e--){var a=l[e],n=a.vm;n._watcher===a&&n._isMounted&&!n._isDestroyed&&Ca(n,"updated")}}function Ga(l){l._inactive=!1,Ta.push(l)}function Ha(l){for(var e=0;e<l.length;e++)l[e]._inactive=!0,Pa(l[e],!0)}function za(l){var e=l.id;if(null==Ia[e]){if(Ia[e]=!0,Na){var a=Ma.length-1;while(a>La&&Ma[a].id>l.id)a--;Ma.splice(a+1,0,l)}else Ma.push(l);Da||(Da=!0,te(Ba))}}var Wa=0,qa=function(l,e,a,n,r){this.vm=l,r&&(l._watcher=this),l._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Wa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new cl,this.newDepIds=new cl,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};qa.prototype.get=function(){var l;bl(this);var e=this.vm;try{l=this.getter.call(e,e)}catch(ar){if(!this.user)throw ar;Ql(ar,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&de(l),ol(),this.cleanupDeps()}return l},qa.prototype.addDep=function(l){var e=l.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(l),this.depIds.has(e)||l.addSub(this))},qa.prototype.cleanupDeps=function(){var l=this.deps.length;while(l--){var e=this.deps[l];this.newDepIds.has(e.id)||e.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},qa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():za(this)},qa.prototype.run=function(){if(this.active){var l=this.get();if(l!==this.value||u(l)||this.deep){var e=this.value;if(this.value=l,this.user)try{this.cb.call(this.vm,l,e)}catch(ar){Ql(ar,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,l,e)}}},qa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},qa.prototype.depend=function(){var l=this.deps.length;while(l--)this.deps[l].depend()},qa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var l=this.deps.length;while(l--)this.deps[l].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:T,set:T};function Xa(l,e,a){Ja.get=function(){return this[e][a]},Ja.set=function(l){this[e][a]=l},Object.defineProperty(l,a,Ja)}function Ka(l){l._watchers=[];var e=l.$options;e.props&&Qa(l,e.props),e.methods&&sn(l,e.methods),e.data?Ya(l):Pl(l._data={},!0),e.computed&&en(l,e.computed),e.watch&&e.watch!==al&&cn(l,e.watch)}function Qa(l,e){var a=l.$options.propsData||{},n=l._props={},r=l.$options._propKeys=[],i=!l.$parent;i||Al(!1);var s=function(i){r.push(i);var s=Wl(i,e,a,l);Sl(n,i,s),i in l||Xa(l,"_props",i)};for(var c in e)s(c);Al(!0)}function Ya(l){var e=l.$options.data;e=l._data="function"===typeof e?Za(e,l):e||{},h(e)||(e={});var a=Object.keys(e),n=l.$options.props,r=(l.$options.methods,a.length);while(r--){var i=a[r];0,n&&m(n,i)||G(i)||Xa(l,"_data",i)}Pl(e,!0)}function Za(l,e){bl();try{return l.call(e,e)}catch(ar){return Ql(ar,e,"data()"),{}}finally{ol()}}var ln={lazy:!0};function en(l,e){var a=l._computedWatchers=Object.create(null),n=rl();for(var r in e){var i=e[r],s="function"===typeof i?i:i.get;0,n||(a[r]=new qa(l,s||T,T,ln)),r in l||an(l,r,i)}}function an(l,e,a){var n=!rl();"function"===typeof a?(Ja.get=n?nn(e):rn(a),Ja.set=T):(Ja.get=a.get?n&&!1!==a.cache?nn(e):rn(a.get):T,Ja.set=a.set||T),Object.defineProperty(l,e,Ja)}function nn(l){return function(){var e=this._computedWatchers&&this._computedWatchers[l];if(e)return e.dirty&&e.evaluate(),dl.target&&e.depend(),e.value}}function rn(l){return function(){return l.call(this,this)}}function sn(l,e){l.$options.props;for(var a in e)l[a]="function"!==typeof e[a]?T:P(e[a],l)}function cn(l,e){for(var a in e){var n=e[a];if(Array.isArray(n))for(var r=0;r<n.length;r++)un(l,a,n[r]);else un(l,a,n)}}function un(l,e,a,n){return h(a)&&(n=a,a=a.handler),"string"===typeof a&&(a=l[a]),l.$watch(e,a,n)}function tn(l){var e={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(l.prototype,"$data",e),Object.defineProperty(l.prototype,"$props",a),l.prototype.$set=Cl,l.prototype.$delete=Ml,l.prototype.$watch=function(l,e,a){var n=this;if(h(e))return un(n,l,e,a);a=a||{},a.user=!0;var r=new qa(n,l,e,a);if(a.immediate)try{e.call(n,r.value)}catch(i){Ql(i,n,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var hn=0;function dn(l){l.prototype._init=function(l){var e=this;e._uid=hn++,e._isVue=!0,l&&l._isComponent?vn(e,l):e.$options=Hl(bn(e.constructor),l||{},e),e._renderProxy=e,e._self=e,Aa(e),ya(e),ua(e),Ca(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Ka(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Ca(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function vn(l,e){var a=l.$options=Object.create(l.constructor.options),n=e._parentVnode;a.parent=e.parent,a._parentVnode=n;var r=n.componentOptions;a.propsData=r.propsData,a._parentListeners=r.listeners,a._renderChildren=r.children,a._componentTag=r.tag,e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns)}function bn(l){var e=l.options;if(l.super){var a=bn(l.super),n=l.superOptions;if(a!==n){l.superOptions=a;var r=on(l);r&&C(l.extendOptions,r),e=l.options=Hl(a,l.extendOptions),e.name&&(e.components[e.name]=l)}}return e}function on(l){var e,a=l.options,n=l.sealedOptions;for(var r in a)a[r]!==n[r]&&(e||(e={}),e[r]=a[r]);return e}function fn(l){this._init(l)}function pn(l){l.use=function(l){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(l)>-1)return this;var a=S(arguments,1);return a.unshift(this),"function"===typeof l.install?l.install.apply(l,a):"function"===typeof l&&l.apply(null,a),e.push(l),this}}function yn(l){l.mixin=function(l){return this.options=Hl(this.options,l),this}}function _n(l){l.cid=0;var e=1;l.extend=function(l){l=l||{};var a=this,n=a.cid,r=l._Ctor||(l._Ctor={});if(r[n])return r[n];var i=l.name||a.options.name;var s=function(l){this._init(l)};return s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Hl(a.options,l),s["super"]=a,s.options.props&&gn(s),s.options.computed&&mn(s),s.extend=a.extend,s.mixin=a.mixin,s.use=a.use,V.forEach(function(l){s[l]=a[l]}),i&&(s.options.components[i]=s),s.superOptions=a.options,s.extendOptions=l,s.sealedOptions=C({},s.options),r[n]=s,s}}function gn(l){var e=l.options.props;for(var a in e)Xa(l.prototype,"_props",a)}function mn(l){var e=l.options.computed;for(var a in e)an(l.prototype,a,e[a])}function wn(l){V.forEach(function(e){l[e]=function(l,a){return a?("component"===e&&h(a)&&(a.name=a.name||l,a=this.options._base.extend(a)),"directive"===e&&"function"===typeof a&&(a={bind:a,update:a}),this.options[e+"s"][l]=a,a):this.options[e+"s"][l]}})}function $n(l){return l&&(l.Ctor.options.name||l.tag)}function On(l,e){return Array.isArray(l)?l.indexOf(e)>-1:"string"===typeof l?l.split(",").indexOf(e)>-1:!!d(l)&&l.test(e)}function xn(l,e){var a=l.cache,n=l.keys,r=l._vnode;for(var i in a){var s=a[i];if(s){var c=$n(s.componentOptions);c&&!e(c)&&An(a,i,n,r)}}}function An(l,e,a,n){var r=l[e];!r||n&&r.tag===n.tag||r.componentInstance.$destroy(),l[e]=null,_(a,e)}dn(fn),tn(fn),$a(fn),ka(fn),da(fn);var kn=[String,RegExp,Array],jn={name:"keep-alive",abstract:!0,props:{include:kn,exclude:kn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var l in this.cache)An(this.cache,l,this.keys)},mounted:function(){var l=this;this.$watch("include",function(e){xn(l,function(l){return On(e,l)})}),this.$watch("exclude",function(e){xn(l,function(l){return!On(e,l)})})},render:function(){var l=this.$slots.default,e=pa(l),a=e&&e.componentOptions;if(a){var n=$n(a),r=this,i=r.include,s=r.exclude;if(i&&(!n||!On(i,n))||s&&n&&On(s,n))return e;var c=this,u=c.cache,t=c.keys,h=null==e.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):e.key;u[h]?(e.componentInstance=u[h].componentInstance,_(t,h),t.push(h)):(u[h]=e,t.push(h),this.max&&t.length>parseInt(this.max)&&An(u,t[0],t,this._vnode)),e.data.keepAlive=!0}return e||l&&l[0]}},En={KeepAlive:jn};function Pn(l){var e={get:function(){return B}};Object.defineProperty(l,"config",e),l.util={warn:tl,extend:C,mergeOptions:Hl,defineReactive:Sl},l.set=Cl,l.delete=Ml,l.nextTick=te,l.observable=function(l){return Pl(l),l},l.options=Object.create(null),V.forEach(function(e){l.options[e+"s"]=Object.create(null)}),l.options._base=l,C(l.options.components,En),pn(l),yn(l),_n(l),wn(l)}Pn(fn),Object.defineProperty(fn.prototype,"$isServer",{get:rl}),Object.defineProperty(fn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(fn,"FunctionalRenderContext",{value:ze}),fn.version="2.6.10";var Sn="[object Array]",Cn="[object Object]";function Mn(l,e){var a={};return Tn(l,e),In(l,e,"",a),a}function Tn(l,e){if(l!==e){var a=Nn(l),n=Nn(e);if(a==Cn&&n==Cn){if(Object.keys(l).length>=Object.keys(e).length)for(var r in e){var i=l[r];void 0===i?l[r]=null:Tn(i,e[r])}}else a==Sn&&n==Sn&&l.length>=e.length&&e.forEach(function(e,a){Tn(l[a],e)})}}function In(l,e,a,n){if(l!==e){var r=Nn(l),i=Nn(e);if(r==Cn)if(i!=Cn||Object.keys(l).length<Object.keys(e).length)Dn(n,a,l);else{var s=function(r){var i=l[r],s=e[r],c=Nn(i),u=Nn(s);if(c!=Sn&&c!=Cn)i!=e[r]&&Dn(n,(""==a?"":a+".")+r,i);else if(c==Sn)u!=Sn?Dn(n,(""==a?"":a+".")+r,i):i.length<s.length?Dn(n,(""==a?"":a+".")+r,i):i.forEach(function(l,e){In(l,s[e],(""==a?"":a+".")+r+"["+e+"]",n)});else if(c==Cn)if(u!=Cn||Object.keys(i).length<Object.keys(s).length)Dn(n,(""==a?"":a+".")+r,i);else for(var t in i)In(i[t],s[t],(""==a?"":a+".")+r+"."+t,n)};for(var c in l)s(c)}else r==Sn?i!=Sn?Dn(n,a,l):l.length<e.length?Dn(n,a,l):l.forEach(function(l,r){In(l,e[r],a+"["+r+"]",n)}):Dn(n,a,l)}}function Dn(l,e,a){l[e]=a}function Nn(l){return Object.prototype.toString.call(l)}function Ln(l){if(l.__next_tick_callbacks&&l.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=l.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+l._uid+"]:flushCallbacks["+l.__next_tick_callbacks.length+"]")}var a=l.__next_tick_callbacks.slice(0);l.__next_tick_callbacks.length=0;for(var n=0;n<a.length;n++)a[n]()}}function Rn(l){return Ma.find(function(e){return l._watcher===e})}function Vn(l,e){if(!l.__next_tick_pending&&!Rn(l)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=l.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+l._uid+"]:nextVueTick")}return te(e,l)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=l.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+l._uid+"]:nextMPTick")}var r;if(l.__next_tick_callbacks||(l.__next_tick_callbacks=[]),l.__next_tick_callbacks.push(function(){if(e)try{e.call(l)}catch(ar){Ql(ar,l,"nextTick")}else r&&r(l)}),!e&&"undefined"!==typeof Promise)return new Promise(function(l){r=l})}function Fn(l){var e=Object.create(null),a=[].concat(Object.keys(l._data||{}),Object.keys(l._computedWatchers||{}));return a.reduce(function(e,a){return e[a]=l[a],e},e),Object.assign(e,l.$mp.data||{}),Array.isArray(l.$options.behaviors)&&-1!==l.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=l.name,e["value"]=l.value),JSON.parse(JSON.stringify(e))}var Bn=function(l,e){var a=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var n=this.$scope,r=Object.create(null);try{r=Fn(this)}catch(c){console.error(c)}r.__webviewId__=n.data.__webviewId__;var i=Object.create(null);Object.keys(r).forEach(function(l){i[l]=n.data[l]});var s=Mn(r,i);Object.keys(s).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,n.setData(s,function(){a.__next_tick_pending=!1,Ln(a)})):Ln(this)}};function Un(){}function Gn(l,e,a){if(!l.mpType)return l;"app"===l.mpType&&(l.$options.render=Un),l.$options.render||(l.$options.render=Un),"mp-toutiao"!==l.mpHost&&Ca(l,"beforeMount");var n=function(){l._update(l._render(),a)};return new qa(l,n,T,{before:function(){l._isMounted&&!l._isDestroyed&&Ca(l,"beforeUpdate")}},!0),a=!1,l}function Hn(l,e){return r(l)||r(e)?zn(l,Wn(e)):""}function zn(l,e){return l?e?l+" "+e:l:e||""}function Wn(l){return Array.isArray(l)?qn(l):u(l)?Jn(l):"string"===typeof l?l:""}function qn(l){for(var e,a="",n=0,i=l.length;n<i;n++)r(e=Wn(l[n]))&&""!==e&&(a&&(a+=" "),a+=e);return a}function Jn(l){var e="";for(var a in l)l[a]&&(e&&(e+=" "),e+=a);return e}var Xn=w(function(l){var e={},a=/;(?![^(]*\))/g,n=/:(.+)/;return l.split(a).forEach(function(l){if(l){var a=l.split(n);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e});function Kn(l){return Array.isArray(l)?M(l):"string"===typeof l?Xn(l):l}var Qn=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yn(l,e){var a=e.split("."),n=a[0];return 0===n.indexOf("__$n")&&(n=parseInt(n.replace("__$n",""))),1===a.length?l[n]:Yn(l[n],a.slice(1).join("."))}function Zn(l){l.config.errorHandler=function(l){console.error(l)};var e=l.prototype.$emit;l.prototype.$emit=function(l){return this.$scope&&l&&this.$scope["triggerEvent"](l,{__args__:S(arguments,1)}),e.apply(this,arguments)},l.prototype.$nextTick=function(l){return Vn(this,l)},Qn.forEach(function(e){l.prototype[e]=function(l){if(this.$scope)return this.$scope[e](l)}}),l.prototype.__init_provide=$e,l.prototype.__init_injections=Oe,l.prototype.__call_hook=function(l,e){var a=this;bl();var n,r=a.$options[l],i=l+" hook";if(r)for(var s=0,c=r.length;s<c;s++)n=Yl(r[s],a,e?[e]:null,a,i);return a._hasHookEvent&&a.$emit("hook:"+l),ol(),n},l.prototype.__set_model=function(l,e,a,n){Array.isArray(n)&&(-1!==n.indexOf("trim")&&(a=a.trim()),-1!==n.indexOf("number")&&(a=this._n(a))),l||(l=this),l[e]=a},l.prototype.__set_sync=function(l,e,a){l||(l=this),l[e]=a},l.prototype.__get_orig=function(l){return h(l)&&l["$orig"]||l},l.prototype.__get_value=function(l,e){return Yn(e||this,l)},l.prototype.__get_class=function(l,e){return Hn(e,l)},l.prototype.__get_style=function(l,e){if(!l&&!e)return"";var a=Kn(l),n=e?C(e,a):a;return Object.keys(n).map(function(l){return k(l)+":"+n[l]}).join(";")},l.prototype.__map=function(l,e){var a,n,r,i,s;if(Array.isArray(l)){for(a=new Array(l.length),n=0,r=l.length;n<r;n++)a[n]=e(l[n],n);return a}if(u(l)){for(i=Object.keys(l),a=Object.create(null),n=0,r=i.length;n<r;n++)s=i[n],a[s]=e(l[s],s,n);return a}return[]}}var lr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(l){var e=l.extend;l.extend=function(l){l=l||{};var a=l.methods;return a&&Object.keys(a).forEach(function(e){-1!==lr.indexOf(e)&&(l[e]=a[e],delete a[e])}),e.call(this,l)};var a=l.config.optionMergeStrategies,n=a.created;lr.forEach(function(l){a[l]=n}),l.prototype.__lifecycle_hooks__=lr}fn.prototype.__patch__=Bn,fn.prototype.$mount=function(l,e){return Gn(this,l,e)},er(fn),Zn(fn),e["default"]=fn}.call(this,a("c8ba"))},"6e42":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=oe,e.createPage=Oe,e.createComponent=xe,e.default=void 0;var n=r(a("66fd"));function r(l){return l&&l.__esModule?l:{default:l}}function i(l,e){return u(l)||c(l,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(l,e){var a=[],n=!0,r=!1,i=void 0;try{for(var s,c=l[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)if(a.push(s.value),e&&a.length===e)break}catch(u){r=!0,i=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(r)throw i}}return a}function u(l){if(Array.isArray(l))return l}function t(l,e,a){return e in l?Object.defineProperty(l,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[e]=a,l}function h(l){return b(l)||v(l)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function b(l){if(Array.isArray(l)){for(var e=0,a=new Array(l.length);e<l.length;e++)a[e]=l[e];return a}}var o=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function p(l){return"function"===typeof l}function y(l){return"string"===typeof l}function _(l){return"[object Object]"===o.call(l)}function g(l,e){return f.call(l,e)}function m(){}function w(l){var e=Object.create(null);return function(a){var n=e[a];return n||(e[a]=l(a))}}var $=/-(\w)/g,O=w(function(l){return l.replace($,function(l,e){return e?e.toUpperCase():""})}),x=["invoke","success","fail","complete","returnValue"],A={},k={};function j(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?E(a):a}function E(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function P(l,e){var a=l.indexOf(e);-1!==a&&l.splice(a,1)}function S(l,e){Object.keys(e).forEach(function(a){-1!==x.indexOf(a)&&p(e[a])&&(l[a]=j(l[a],e[a]))})}function C(l,e){l&&e&&Object.keys(e).forEach(function(a){-1!==x.indexOf(a)&&p(e[a])&&P(l[a],e[a])})}function M(l,e){"string"===typeof l&&_(e)?S(k[l]||(k[l]={}),e):_(l)&&S(A,l)}function T(l,e){"string"===typeof l?_(e)?C(k[l],e):delete k[l]:_(l)&&C(A,l)}function I(l){return function(e){return l(e)||e}}function D(l){return!!l&&("object"===typeof l||"function"===typeof l)&&"function"===typeof l.then}function N(l,e){for(var a=!1,n=0;n<l.length;n++){var r=l[n];if(a)a=Promise.then(I(r));else{var i=r(e);if(D(i)&&(a=Promise.resolve(i)),!1===i)return{then:function(){}}}}return a||{then:function(l){return l(e)}}}function L(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(l[a])){var n=e[a];e[a]=function(e){N(l[a],e).then(function(l){return p(n)&&n(l)||l})}}}),e}function R(l,e){var a=[];Array.isArray(A.returnValue)&&a.push.apply(a,h(A.returnValue));var n=k[l];return n&&Array.isArray(n.returnValue)&&a.push.apply(a,h(n.returnValue)),a.forEach(function(l){e=l(e)||e}),e}function V(l){var e=Object.create(null);Object.keys(A).forEach(function(l){"returnValue"!==l&&(e[l]=A[l].slice())});var a=k[l];return a&&Object.keys(a).forEach(function(l){"returnValue"!==l&&(e[l]=(e[l]||[]).concat(a[l]))}),e}function F(l,e,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];var s=V(l);if(s&&Object.keys(s).length){if(Array.isArray(s.invoke)){var c=N(s.invoke,a);return c.then(function(l){return e.apply(void 0,[L(s,l)].concat(r))})}return e.apply(void 0,[L(s,a)].concat(r))}return e.apply(void 0,[a].concat(r))}var B={returnValue:function(l){return D(l)?l.then(function(l){return l[1]}).catch(function(l){return l[0]}):l}},U=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,G=/^create|Manager$/,H=/^on/;function z(l){return G.test(l)}function W(l){return U.test(l)}function q(l){return H.test(l)}function J(l){return l.then(function(l){return[null,l]}).catch(function(l){return[l]})}function X(l){return!(z(l)||W(l)||q(l))}function K(l,e){return X(l)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return p(a.success)||p(a.fail)||p(a.complete)?R(l,F.apply(void 0,[l,e,a].concat(r))):R(l,J(new Promise(function(n,i){F.apply(void 0,[l,e,Object.assign({},a,{success:n,fail:i})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(l){var e=this.constructor;return this.then(function(a){return e.resolve(l()).then(function(){return a})},function(a){return e.resolve(l()).then(function(){throw a})})})})))}:e}var Q=1e-4,Y=750,Z=!1,ll=0,el=0;function al(){var l=wx.getSystemInfoSync(),e=l.platform,a=l.pixelRatio,n=l.windowWidth;ll=n,el=a,Z="ios"===e}function nl(l,e){if(0===ll&&al(),l=Number(l),0===l)return 0;var a=l/Y*(e||ll);return a<0&&(a=-a),a=Math.floor(a+Q),0===a?1!==el&&Z?.5:1:l<0?-a:a}var rl={promiseInterceptor:B},il=Object.freeze({upx2px:nl,interceptors:rl,addInterceptor:M,removeInterceptor:T}),sl={},cl=[],ul=[],tl=["success","fail","cancel","complete"];function hl(l,e,a){return function(n){return e(vl(l,n,a))}}function dl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var i=!0===r?e:{};for(var s in p(a)&&(a=a(e,i)||{}),e)if(g(a,s)){var c=a[s];p(c)&&(c=c(e[s],e,i)),c?y(c)?i[c]=e[s]:_(c)&&(i[c.name?c.name:s]=c.value):console.warn("app-plus ".concat(l,"暂不支持").concat(s))}else-1!==tl.indexOf(s)?i[s]=hl(l,e[s],n):r||(i[s]=e[s]);return i}return p(e)&&(e=hl(l,e,n)),e}function vl(l,e,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(sl.returnValue)&&(e=sl.returnValue(l,e)),dl(l,e,a,{},n)}function bl(l,e){if(g(sl,l)){var a=sl[l];return a?function(e,n){var r=a;p(a)&&(r=a(e)),e=dl(l,e,r.args,r.returnValue);var i=[e];"undefined"!==typeof n&&i.push(n);var s=wx[r.name||l].apply(wx,i);return W(l)?vl(l,s,r.returnValue,z(l)):s}:function(){console.error("app-plus 暂不支持".concat(l))}}return e}var ol=Object.create(null),fl=["subscribePush","unsubscribePush","onPush","offPush","share"];function pl(l){return function(e){var a=e.fail,n=e.complete,r={errMsg:"".concat(l,":fail:暂不支持 ").concat(l," 方法")};p(a)&&a(r),p(n)&&n(r)}}fl.forEach(function(l){ol[l]=pl(l)});var yl=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return l||(l=new n.default),l};var l}();function _l(l,e,a){return l[e].apply(l,a)}function gl(){return _l(yl(),"$on",Array.prototype.slice.call(arguments))}function ml(){return _l(yl(),"$off",Array.prototype.slice.call(arguments))}function wl(){return _l(yl(),"$once",Array.prototype.slice.call(arguments))}function $l(){return _l(yl(),"$emit",Array.prototype.slice.call(arguments))}var Ol=Object.freeze({$on:gl,$off:ml,$once:wl,$emit:$l});function xl(l){l.$processed=!0,l.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},l.id)};var e=[];if(l.onMessage=function(l){e.push(l)},l.$consumeMessage=function(l){e.forEach(function(e){return e(l)})},l.__uniapp_mask_id){var a=l.__uniapp_mask,n=plus.webview.getWebviewById(l.__uniapp_mask_id);n=n.parent()||n;var r=l.show,i=l.hide,s=l.close,c=function(){n.setStyle({mask:a})},u=function(){n.setStyle({mask:"none"})};l.show=function(){c();for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return r.apply(l,a)},l.hide=function(){u();for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return i.apply(l,a)},l.close=function(){u(),e=[];for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return s.apply(l,n)}}}function Al(l){var e=plus.webview.getWebviewById(l);return e&&!e.$processed&&xl(e),e}function kl(l){return"undefined"!==typeof weex?weex.requireModule(l):__requireNativePlugin__(l)}var jl=Object.freeze({requireNativePlugin:kl,getSubNVueById:Al}),El=Page,Pl=Component,Sl=/:/g,Cl=w(function(l){return O(l.replace(Sl,"-"))});function Ml(l){if(wx.canIUse("nextTick")){var e=l.triggerEvent;l.triggerEvent=function(a){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.apply(l,[Cl(a)].concat(r))}}}function Tl(l,e){var a=e[l];e[l]=a?function(){Ml(this);for(var l=arguments.length,e=new Array(l),n=0;n<l;n++)e[n]=arguments[n];return a.apply(this,e)}:function(){Ml(this)}}Page=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tl("onLoad",l),El(l)},Component=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tl("created",l),Pl(l)};var Il=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Dl(l,e){var a=l.$mp[l.mpType];e.forEach(function(e){g(a,e)&&(l[e]=a[e])})}function Nl(l,e){if(!e)return!0;if(n.default.options&&Array.isArray(n.default.options[l]))return!0;if(e=e.default||e,p(e))return!!p(e.extendOptions[l])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[l]));if(p(e[l]))return!0;var a=e.mixins;return Array.isArray(a)?!!a.find(function(e){return Nl(l,e)}):void 0}function Ll(l,e,a){e.forEach(function(e){Nl(e,a)&&(l[e]=function(l){return this.$vm&&this.$vm.__call_hook(e,l)})})}function Rl(l,e){var a;return e=e.default||e,p(e)?(a=e,e=a.extendOptions):a=l.extend(e),[a,e]}function Vl(l,e){if(Array.isArray(e)&&e.length){var a=Object.create(null);e.forEach(function(l){a[l]=!0}),l.$scopedSlots=l.$slots=a}}function Fl(l,e){l=(l||"").split(",");var a=l.length;1===a?e._$vueId=l[0]:2===a&&(e._$vueId=l[0],e._$vuePid=l[1])}function Bl(l,e){var a=l.data||{},n=l.methods||{};if("function"===typeof a)try{a=a.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(r){}return _(a)||(a={}),Object.keys(n).forEach(function(l){-1!==e.__lifecycle_hooks__.indexOf(l)||g(a,l)||(a[l]=n[l])}),a}var Ul=[String,Number,Boolean,Object,Array,null];function Gl(l){return function(e,a){this.$vm&&(this.$vm[l]=e)}}function Hl(l,e){var a=l["behaviors"],n=l["extends"],r=l["mixins"],i=l["props"];i||(l["props"]=i=[]);var s=[];return Array.isArray(a)&&a.forEach(function(l){s.push(l.replace("uni://","wx".concat("://"))),"uni://form-field"===l&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(n)&&n.props&&s.push(e({properties:Wl(n.props,!0)})),Array.isArray(r)&&r.forEach(function(l){_(l)&&l.props&&s.push(e({properties:Wl(l.props,!0)}))}),s}function zl(l,e,a,n){return Array.isArray(e)&&1===e.length?e[0]:e}function Wl(l){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n={};return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(l,e){var a=Object.create(null);l.forEach(function(l){a[l]=!0}),this.setData({$slots:a})}}),Array.isArray(l)?l.forEach(function(l){n[l]={type:null,observer:Gl(l)}}):_(l)&&Object.keys(l).forEach(function(e){var r=l[e];if(_(r)){var i=r["default"];p(i)&&(i=i()),r.type=zl(e,r.type,i,a),n[e]={type:-1!==Ul.indexOf(r.type)?r.type:null,value:i,observer:Gl(e)}}else{var s=zl(e,r,null,a);n[e]={type:-1!==Ul.indexOf(s)?s:null,observer:Gl(e)}}}),n}function ql(l){try{l.mp=JSON.parse(JSON.stringify(l))}catch(e){}return l.stopPropagation=m,l.preventDefault=m,l.target=l.target||{},g(l,"detail")||(l.detail={}),_(l.detail)&&(l.target=Object.assign({},l.target,l.detail)),l}function Jl(l,e){var a=l;return e.forEach(function(e){var n=e[0],r=e[2];if(n||"undefined"!==typeof r){var i=e[1],s=e[3],c=n?l.__get_value(n,a):a;Number.isInteger(c)?a=r:i?Array.isArray(c)?a=c.find(function(e){return l.__get_value(i,e)===r}):_(c)?a=Object.keys(c).find(function(e){return l.__get_value(i,c[e])===r}):console.error("v-for 暂不支持循环数据：",c):a=c[r],s&&(a=l.__get_value(s,a))}}),a}function Xl(l,e,a){var n={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?n["$"+r]=a:0===e.indexOf("$event.")?n["$"+r]=l.__get_value(e.replace("$event.",""),a):n["$"+r]=l.__get_value(e):n["$"+r]=l:n["$"+r]=Jl(l,e)}),n}function Kl(l){for(var e={},a=1;a<l.length;a++){var n=l[a];e[n[0]]=n[1]}return e}function Ql(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(r&&(s=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!a.length))return s?[e]:e.detail.__args__||e.detail;var c=Xl(l,n,e),u=[];return a.forEach(function(l){"$event"===l?"__set_model"!==i||r?r&&!s?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(l)&&"o"===l[0]?u.push(Kl(l)):"string"===typeof l&&g(c,l)?u.push(c[l]):u.push(l)}),u}var Yl="~",Zl="^";function le(l,e){return l===e||"regionchange"===e&&("begin"===l||"end"===l)}function ee(l){var e=this;l=ql(l);var a=(l.currentTarget||l.target).dataset;if(!a)return console.warn("事件信息不存在");var n=a.eventOpts||a["event-opts"];if(!n)return console.warn("事件信息不存在");var r=l.type;n.forEach(function(a){var n=a[0],i=a[1],s=n.charAt(0)===Zl;n=s?n.slice(1):n;var c=n.charAt(0)===Yl;n=c?n.slice(1):n,i&&le(r,n)&&i.forEach(function(a){var n=a[0];if(n){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var i=r[n];if(!p(i))throw new Error(" _vm.".concat(n," is not a function"));if(c){if(i.once)return;i.once=!0}i.apply(r,Ql(e.$vm,l,a[1],a[2],s,n))}})})}var ae=["onShow","onHide","onError","onPageNotFound"];function ne(l,e){var a=e.mocks,r=e.initRefs;n.default.prototype.mpHost="app-plus",n.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=t({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Dl(this,a)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=l,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=l.$options.globalData||{},Ll(i,ae),i}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(l,e){var a=l.$children,n=a.find(function(l){return l.$scope._$vueId===e});if(n)return n;for(var r=a.length-1;r>=0;r--)if(n=ie(a[r],e),n)return n}function se(l){return Behavior(l)}function ce(){return!!this.route}function ue(l){this.triggerEvent("__l",l)}function te(l){var e=l.$scope;Object.defineProperty(l,"$refs",{get:function(){var l={},a=e.selectAllComponents(".vue-ref");a.forEach(function(e){var a=e.dataset.ref;l[a]=e.$vm||e});var n=e.selectAllComponents(".vue-ref-in-for");return n.forEach(function(e){var a=e.dataset.ref;l[a]||(l[a]=[]),l[a].push(e.$vm||e)}),l}})}function he(l){var e,a=l.detail||l.value,n=a.vuePid,r=a.vueOptions;n&&(e=ie(this.$vm,n)),e||(e=this.$vm),r.parent=e}function de(l){return ne(l,{mocks:re,initRefs:te})}var ve=["onUniNViewMessage"];function be(l){var e=de(l);return Ll(e,ve),e}function oe(l){return App(be(l)),l}function fe(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.isPage,r=e.initRelation,s=Rl(n.default,l),c=i(s,2),u=c[0],t=c[1],h={options:{multipleSlots:!0,addGlobalClass:!0},data:Bl(t,n.default.prototype),behaviors:Hl(t,se),properties:Wl(t.props,!1,t.__file),lifetimes:{attached:function(){var l=this.properties,e={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:l};Fl(l.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Vl(this.$vm,l.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(l){this.$vm&&this.$vm.__call_hook("onPageShow",l)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(l){this.$vm&&this.$vm.__call_hook("onPageResize",l)}},methods:{__l:he,__e:ee}};return a?h:[h,u]}function pe(l){return fe(l,{isPage:ce,initRelation:ue})}function ye(l){var e=pe(l);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function ge(l,e){var a=e.isPage,n=e.initRelation,r=ye(l,{isPage:a,initRelation:n});return Ll(r.methods,_e,l),r.methods.onLoad=function(l){this.$vm.$mp.query=l,this.$vm.__call_hook("onLoad",l)},r}function me(l){return ge(l,{isPage:ce,initRelation:ue})}_e.push.apply(_e,Il);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(l){var e=me(l);return Ll(e.methods,we),e}function Oe(l){return Component($e(l))}function xe(l){return Component(ye(l))}cl.forEach(function(l){sl[l]=!1}),ul.forEach(function(l){var e=sl[l]&&sl[l].name?sl[l].name:l;wx.canIUse(e)||(sl[l]=!1)});var Ae={};Object.keys(il).forEach(function(l){Ae[l]=il[l]}),Object.keys(Ol).forEach(function(l){Ae[l]=Ol[l]}),Object.keys(jl).forEach(function(l){Ae[l]=K(l,jl[l])}),Object.keys(wx).forEach(function(l){(g(wx,l)||g(sl,l))&&(Ae[l]=K(l,bl(l,wx[l])))}),"undefined"!==typeof l&&(l.uni=Ae,l.UniEmitter=Ol),wx.createApp=oe,wx.createPage=Oe,wx.createComponent=xe;var ke=Ae,je=ke;e.default=je}).call(this,a("c8ba"))},8446:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("b088"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},"91fc":function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("b660"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},9489:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("a2b3"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},"96cf":function(l,e){!function(e){"use strict";var a,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",t="object"===typeof l,h=e.regeneratorRuntime;if(h)t&&(l.exports=h);else{h=e.regeneratorRuntime=t?l.exports:{},h.wrap=m;var d="suspendedStart",v="suspendedYield",b="executing",o="completed",f={},p={};p[s]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(M([])));_&&_!==n&&r.call(_,s)&&(p=_);var g=x.prototype=$.prototype=Object.create(p);O.prototype=g.constructor=x,x.constructor=O,x[u]=O.displayName="GeneratorFunction",h.isGeneratorFunction=function(l){var e="function"===typeof l&&l.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,x):(l.__proto__=x,u in l||(l[u]="GeneratorFunction")),l.prototype=Object.create(g),l},h.awrap=function(l){return{__await:l}},A(k.prototype),k.prototype[c]=function(){return this},h.AsyncIterator=k,h.async=function(l,e,a,n){var r=new k(m(l,e,a,n));return h.isGeneratorFunction(e)?r:r.next().then(function(l){return l.done?l.value:r.next()})},A(g),g[u]="Generator",g[s]=function(){return this},g.toString=function(){return"[object Generator]"},h.keys=function(l){var e=[];for(var a in l)e.push(a);return e.reverse(),function a(){while(e.length){var n=e.pop();if(n in l)return a.value=n,a.done=!1,a}return a.done=!0,a}},h.values=M,C.prototype={constructor:C,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(S),!l)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var l=this.tryEntries[0],e=l.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var e=this;function n(n,r){return c.type="throw",c.arg=l,e.next=n,r&&(e.method="next",e.arg=a),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],c=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=r.call(s,"catchLoc"),t=r.call(s,"finallyLoc");if(u&&t){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!t)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(l,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===l||"continue"===l)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=l,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(s)},complete:function(l,e){if("throw"===l.type)throw l.arg;return"break"===l.type||"continue"===l.type?this.next=l.arg:"return"===l.type?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):"normal"===l.type&&e&&(this.next=e),f},finish:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===l)return this.complete(a.completion,a.afterLoc),S(a),f}},catch:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===l){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(l,e,n){return this.delegate={iterator:M(l),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=a),f}}}function m(l,e,a,n){var r=e&&e.prototype instanceof $?e:$,i=Object.create(r.prototype),s=new C(n||[]);return i._invoke=j(l,a,s),i}function w(l,e,a){try{return{type:"normal",arg:l.call(e,a)}}catch(n){return{type:"throw",arg:n}}}function $(){}function O(){}function x(){}function A(l){["next","throw","return"].forEach(function(e){l[e]=function(l){return this._invoke(e,l)}})}function k(l){function e(a,n,i,s){var c=w(l[a],l,n);if("throw"!==c.type){var u=c.arg,t=u.value;return t&&"object"===typeof t&&r.call(t,"__await")?Promise.resolve(t.__await).then(function(l){e("next",l,i,s)},function(l){e("throw",l,i,s)}):Promise.resolve(t).then(function(l){u.value=l,i(u)},function(l){return e("throw",l,i,s)})}s(c.arg)}var a;function n(l,n){function r(){return new Promise(function(a,r){e(l,n,a,r)})}return a=a?a.then(r,r):r()}this._invoke=n}function j(l,e,a){var n=d;return function(r,i){if(n===b)throw new Error("Generator is already running");if(n===o){if("throw"===r)throw i;return T()}a.method=r,a.arg=i;while(1){var s=a.delegate;if(s){var c=E(s,a);if(c){if(c===f)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===d)throw n=o,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=b;var u=w(l,e,a);if("normal"===u.type){if(n=a.done?o:v,u.arg===f)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(n=o,a.method="throw",a.arg=u.arg)}}}function E(l,e){var n=l.iterator[e.method];if(n===a){if(e.delegate=null,"throw"===e.method){if(l.iterator.return&&(e.method="return",e.arg=a,E(l,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=w(n,l.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[l.resultName]=i.value,e.next=l.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(l){var e={tryLoc:l[0]};1 in l&&(e.catchLoc=l[1]),2 in l&&(e.finallyLoc=l[2],e.afterLoc=l[3]),this.tryEntries.push(e)}function S(l){var e=l.completion||{};e.type="normal",delete e.arg,l.completion=e}function C(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(P,this),this.reset(!0)}function M(l){if(l){var e=l[s];if(e)return e.call(l);if("function"===typeof l.next)return l;if(!isNaN(l.length)){var n=-1,i=function e(){while(++n<l.length)if(r.call(l,n))return e.value=l[n],e.done=!1,e;return e.value=a,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(l,e,a){l.exports=a("bbdd")},b17e:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("96fe"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},b261:function(l,e,a){"use strict";(function(l,e){a("5143");var n=s(a("66fd")),r=s(a("36b5")),i=s(a("6632"));function s(l){return l&&l.__esModule?l:{default:l}}function c(l){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(e){u(l,e,a[e])})}return l}function u(l,e,a){return e in l?Object.defineProperty(l,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[e]=a,l}var t="T2okmwOeQg5GvbXOpqiiG3PmDBpmTCG3",h="https://mockapi.eolinker.com/p6QCAEw5a26610182ff15ddc6f4f212776fdfbb3ce18328/",d=function(e,a){e.notLoading||l.showNavigationBarLoading();var n={},r=h+e.action;console.log(r," at main.js:17");l.request({url:r,data:e.param,timeout:1e4,method:"GET",header:{"Content-Type":"application/json"},success:function(r){e.notLoading||l.hideNavigationBarLoading(),200==r.statusCode?0==r.data.result?(n.IsSuccess=!0,n.data=r.data.data,a(n)):(n.IsSuccess=!1,n.msg=r.data.data,a(n)):(n.IsSuccess=!1,n.msg=r.statusCode,a(n))},fail:function(r,i){e.notLoading||l.hideNavigationBarLoading(),n.IsSuccess=!1,n.msg=JSON.stringify(r),a(n)}})},v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(e)&&l.showToast({title:e,duration:a,mask:n,icon:r})},b=function(l){return encodeURIComponent(JSON.stringify(l))},o=function(l){return JSON.parse(decodeURIComponent(l))},f=function(l){return new Promise(function(e){d(l,e)})},p=function(){var l=getCurrentPages(),e=l[l.length-2];return e.$vm};n.default.config.productionTip=!1,n.default.prototype.$fire=new n.default,n.default.prototype.$store=r.default,n.default.prototype.$api={msg:v,prePage:p,callApix:f,putExtra:b,getExtra:o,MAP_KEY:t},i.default.mpType="app";var y=new n.default(c({},i.default));e(y).$mount()}).call(this,a("6e42")["default"],a("6e42")["createApp"])},bbdd:function(l,e,a){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=r&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,l.exports=a("96cf"),r)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(s){n.regeneratorRuntime=void 0}},c101:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("e005"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},c8ba:function(l,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"===typeof window&&(a=window)}l.exports=a},cb24:function(l,e,a){"use strict";(function(l){a("5143");n(a("66fd"));var e=n(a("b512"));function n(l){return l&&l.__esModule?l:{default:l}}l(e.default)}).call(this,a("6e42")["createPage"])},d65c:function(l,e,a){"use strict";function n(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function r(l,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(l,n.key,n)}}function i(l,e,a){return e&&r(l.prototype,e),a&&r(l,a),l}var s=function(){function l(e){n(this,l),this.ak=e["ak"]}return i(l,[{key:"getWXLocation",value:function(l,e,a,n){l=l||"gcj02",e=e||function(){},a=a||function(){},n=n||function(){},wx.getLocation({type:l,success:e,fail:a,complete:n})}},{key:"search",value:function(l){var e=this;l=l||{};var a={query:l["query"]||"生活服务$美食&酒店",scope:l["scope"]||1,filter:l["filter"]||"",coord_type:l["coord_type"]||2,page_size:l["page_size"]||10,page_num:l["page_num"]||0,output:l["output"]||"json",ak:e.ak,sn:l["sn"]||"",timestamp:l["timestamp"]||"",radius:l["radius"]||2e3,ret_coordtype:"gcj02ll"},n={iconPath:l["iconPath"],iconTapPath:l["iconTapPath"],width:l["width"],height:l["height"],alpha:l["alpha"]||1,success:l["success"]||function(){},fail:l["fail"]||function(){}},r="gcj02",i=function(l){a["location"]=l["latitude"]+","+l["longitude"],wx.request({url:"https://api.map.baidu.com/place/v2/search",data:a,header:{"content-type":"application/json"},method:"GET",success:function(l){var e=l["data"];if(0===e["status"]){var a=e["results"],r={};r["originalData"]=e,r["wxMarkerData"]=[];for(var i=0;i<a.length;i++)r["wxMarkerData"][i]={id:i,latitude:a[i]["location"]["lat"],longitude:a[i]["location"]["lng"],title:a[i]["name"],iconPath:n["iconPath"],iconTapPath:n["iconTapPath"],address:a[i]["address"],telephone:a[i]["telephone"],alpha:n["alpha"],width:n["width"],height:n["height"]};n.success(r)}else n.fail({errMsg:e["message"],statusCode:e["status"]})},fail:function(l){n.fail(l)}})},s=function(l){n.fail(l)},c=function(l){};if(l["location"]){var u=l.location.split(",")[1],t=l.location.split(",")[0],h="input location",d={errMsg:h,latitude:t,longitude:u};i(d)}else e.getWXLocation(r,i,s,c)}},{key:"suggestion",value:function(l){var e=this;l=l||{};var a={query:l["query"]||"",region:l["region"]||"全国",city_limit:l["city_limit"]||!1,output:l["output"]||"json",ak:e.ak,sn:l["sn"]||"",timestamp:l["timestamp"]||"",ret_coordtype:"gcj02ll"},n={success:l["success"]||function(){},fail:l["fail"]||function(){}};wx.request({url:"https://api.map.baidu.com/place/v2/suggestion",data:a,header:{"content-type":"application/json"},method:"GET",success:function(l){var e=l["data"];0===e["status"]?n.success(e):n.fail({errMsg:e["message"],statusCode:e["status"]})},fail:function(l){n.fail(l)}})}},{key:"regeocoding",value:function(l){var e=this;l=l||{};var a={coordtype:l["coordtype"]||"gcj02ll",ret_coordtype:"gcj02ll",radius:l["radius"]||1e3,ak:e.ak,sn:l["sn"]||"",output:l["output"]||"json",callback:l["callback"]||function(){},extensions_poi:l["extensions_poi"]||0,extensions_road:l["extensions_road"]||!1,extensions_town:l["extensions_town"]||!1,language:l["language"]||"zh-CN",language_auto:l["language_auto"]||0},n={iconPath:l["iconPath"],iconTapPath:l["iconTapPath"],width:l["width"],height:l["height"],alpha:l["alpha"]||1,success:l["success"]||function(){},fail:l["fail"]||function(){}},r="gcj02",i=function(l){a["location"]=l["latitude"]+","+l["longitude"],wx.request({url:"https://api.map.baidu.com/reverse_geocoding/v3",data:a,header:{"content-type":"application/json"},method:"GET",success:function(e){var a=e["data"];if(0===a["status"]){var r=a["result"],i={};i["originalData"]=a,i["wxMarkerData"]=[],i["wxMarkerData"][0]={id:0,latitude:l["latitude"],longitude:l["longitude"],address:r["formatted_address"],iconPath:n["iconPath"],iconTapPath:n["iconTapPath"],desc:r["sematic_description"],business:r["business"],alpha:n["alpha"],width:n["width"],height:n["height"]},n.success(i)}else n.fail({errMsg:a["message"],statusCode:a["status"]})},fail:function(l){n.fail(l)}})},s=function(l){n.fail(l)},c=function(l){};if(l["location"]){var u=l.location.split(",")[1],t=l.location.split(",")[0],h="input location",d={errMsg:h,latitude:t,longitude:u};i(d)}else e.getWXLocation(r,i,s,c)}},{key:"geocoding",value:function(l){var e=this;l=l||{};var a={address:l["address"]||"",city:l["city"]||"",ret_coordtype:l["coordtype"]||"gcj02ll",ak:e.ak,sn:l["sn"]||"",output:l["output"]||"json",callback:l["callback"]||function(){}},n={iconPath:l["iconPath"],iconTapPath:l["iconTapPath"],width:l["width"],height:l["height"],alpha:l["alpha"]||1,success:l["success"]||function(){},fail:l["fail"]||function(){}};if(l["address"])wx.request({url:"https://api.map.baidu.com/geocoding/v3",data:a,header:{"content-type":"application/json"},method:"GET",success:function(l){var e=l["data"];if(0===e["status"]){var a=e["result"],r=e;r["originalData"]=e,r["wxMarkerData"]=[],r["wxMarkerData"][0]={id:0,latitude:a["location"]["lat"],longitude:a["location"]["lng"],iconPath:n["iconPath"],iconTapPath:n["iconTapPath"],alpha:n["alpha"],width:n["width"],height:n["height"]},n.success(r)}else n.fail({errMsg:e["message"],statusCode:e["status"]})},fail:function(l){n.fail(l)}});else{var r="input address!",i={errMsg:r};n.fail(i)}}},{key:"weather",value:function(l){var e=this;l=l||{};var a={coord_type:l["coord_type"]||"gcj02",output:l["output"]||"json",ak:e.ak,sn:l["sn"]||"",timestamp:l["timestamp"]||""},n={success:l["success"]||function(){},fail:l["fail"]||function(){}},r="gcj02",i=function(l){a["location"]=l["longitude"]+","+l["latitude"],wx.request({url:"https://api.map.baidu.com/telematics/v3/weather",data:a,header:{"content-type":"application/json"},method:"GET",success:function(l){var e=l["data"];if(0===e["error"]&&"success"===e["status"]){var a=e["results"],r={};r["originalData"]=e,r["currentWeather"]=[],r["currentWeather"][0]={currentCity:a[0]["currentCity"],pm25:a[0]["pm25"],date:a[0]["weather_data"][0]["date"],temperature:a[0]["weather_data"][0]["temperature"],weatherDesc:a[0]["weather_data"][0]["weather"],wind:a[0]["weather_data"][0]["wind"]},n.success(r)}else n.fail({errMsg:e["message"],statusCode:e["status"]})},fail:function(l){n.fail(l)}})},s=function(l){n.fail(l)},c=function(l){};if(l["location"]){var u=l.location.split(",")[0],t=l.location.split(",")[1],h="input location",d={errMsg:h,latitude:t,longitude:u};i(d)}else e.getWXLocation(r,i,s,c)}}]),l}();l.exports.BMapWX=s}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/city-selector';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/city-selector.js';

define('components/city-selector.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/city-selector"], {
  "2c1b": function c1b(t, i, e) {
    "use strict";

    var n = function n() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(i, "a", function () {
      return n;
    }), e.d(i, "b", function () {
      return a;
    });
  },
  "4b6f": function b6f(t, i, e) {},
  7505: function _(t, i, e) {
    "use strict";

    e.r(i);
    var n = e("938d"),
        a = e.n(n);

    for (var s in n) {
      "default" !== s && function (t) {
        e.d(i, t, function () {
          return n[t];
        });
      }(s);
    }

    i["default"] = a.a;
  },
  "807a": function a(t, i, e) {
    "use strict";

    var n = e("4b6f"),
        a = e.n(n);
    a.a;
  },
  "938d": function d(t, i, e) {
    "use strict";

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var n = a(e("39dd"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var s = {
      name: "city-selector",
      data: function data() {
        return {
          other: {
            label: "",
            value: "0"
          },
          showRank: 0,
          cityList: [{
            identify: "province",
            name: "0",
            showList: n.default[this.platform]
          }, {
            identify: "city",
            name: "0",
            showList: []
          }, {
            identify: "county",
            name: "0",
            showList: []
          }, {
            identify: "town",
            name: "0",
            showList: []
          }],
          valueObj: {
            province: {
              label: "",
              value: "0"
            },
            city: {
              label: "",
              value: "0"
            },
            county: {
              label: "",
              value: "0"
            },
            town: {
              label: "",
              value: "0"
            }
          }
        };
      },
      props: {
        platform: String,
        default: "jd"
      },
      methods: {
        onChooseClick: function onChooseClick(t) {
          "" != t.childrens && t.childrens ? (this.valueObj[this.cityList[this.showRank].identify].label = t.label, this.valueObj[this.cityList[this.showRank].identify].value = t.value, this.cityList[this.showRank].name = t.label, this.showRank++, this.cityList[this.showRank].showList = t.childrens) : (this.valueObj.town.label = "", this.valueObj.town.value = "0", this.valueObj[this.cityList[this.showRank].identify].label = t.label, this.valueObj[this.cityList[this.showRank].identify].value = t.value, this.$emit("confirm", this.valueObj));
        },
        onRankClick: function onRankClick(t) {
          this.showRank = t;
        }
      },
      computed: {}
    };
    i.default = s;
  },
  dcbd: function dcbd(t, i, e) {
    "use strict";

    e.r(i);
    var n = e("2c1b"),
        a = e("7505");

    for (var s in a) {
      "default" !== s && function (t) {
        e.d(i, t, function () {
          return a[t];
        });
      }(s);
    }

    e("807a");
    var l = e("2877"),
        u = Object(l["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
    i["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/city-selector-create-component', {
  'components/city-selector-create-component': function componentsCitySelectorCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dcbd"));
  }
}, [['components/city-selector-create-component']]]);
});
require('components/city-selector.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "1e13": function e13(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("a723"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "78f7": function f7(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("d045"),
        u = e("1e13");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("f32f");
    var a = e("2877"),
        f = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "7fb2": function fb2(t, n, e) {},
  a723: function a723(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-load-more",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  d045: function d045(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  f32f: function f32f(t, n, e) {
    "use strict";

    var o = e("7fb2"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("78f7"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box.js';

define('components/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box"], {
  1318: function _(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("e380"),
        n = i("24a4");

    for (var u in n) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(u);
    }

    i("864a");
    var s = i("2877"),
        l = Object(s["a"])(n["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  "1b35": function b35(t, e, i) {},
  "24a4": function a4(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("7bcd"),
        n = i.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    e["default"] = n.a;
  },
  "7bcd": function bcd(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "uni-number-box",
      props: {
        isMax: {
          type: Boolean,
          default: !1
        },
        isMin: {
          type: Boolean,
          default: !1
        },
        index: {
          type: Number,
          default: 0
        },
        value: {
          type: Number,
          default: 0
        },
        min: {
          type: Number,
          default: -1 / 0
        },
        max: {
          type: Number,
          default: 1 / 0
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: this.value,
          minDisabled: !1,
          maxDisabled: !1
        };
      },
      created: function created() {
        this.maxDisabled = this.isMax, this.minDisabled = this.isMin;
      },
      computed: {},
      watch: {
        inputValue: function inputValue(t) {
          var e = {
            number: t,
            index: this.index
          };
          this.$emit("eventChange", e);
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          var e = this._getDecimalScale(),
              i = this.inputValue * e,
              a = 0,
              n = this.step * e;

          "subtract" === t ? (a = i - n, a <= this.min && (this.minDisabled = !0), a < this.min && (a = this.min), a < this.max && !0 === this.maxDisabled && (this.maxDisabled = !1)) : "add" === t && (a = i + n, a >= this.max && (this.maxDisabled = !0), a > this.max && (a = this.max), a > this.min && !0 === this.minDisabled && (this.minDisabled = !1)), a !== i && (this.inputValue = a / e);
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      }
    };
    e.default = a;
  },
  "864a": function a(t, e, i) {
    "use strict";

    var a = i("1b35"),
        n = i.n(a);
    n.a;
  },
  e380: function e380(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return n;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box-create-component', {
  'components/uni-number-box-create-component': function componentsUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1318"));
  }
}, [['components/uni-number-box-create-component']]]);
});
require('components/uni-number-box.js');

__wxRoute = 'pages/tabBar/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/home.js';

define('pages/tabBar/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home"],{"4f30":function(t,e,n){"use strict";var a=n("d18f"),o=n.n(a);o.a},b3af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),o=i(n("d65c"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,i,r){try{var s=t[i](r),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(a,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,c,"next",t)}function c(t){r(i,a,o,s,c,"throw",t)}s(void 0)})}}var c={data:function(){return{titleNViewBackground:"rgb(245,95,113)",swiperCurrent:0,swiperLength:3,carouselList:[{src:"/static/banner-1.png",background:"rgb(245,95,113)"},{src:"/static/banner-2.png",background:"rgb(250,103,95)"},{src:"/static/banner-3.png",background:"rgb(250,123,49)"}],mallGoodsList:[],seckillGoodsList:[]}},onLoad:function(){var t=new o.default.BMapWX({ak:"i0BXsy4TnbXQ51USDMHdlhoOb2kgEmrz"}),e=this.$mp.page.$getAppWebview(),n=function(t){console.log(JSON.stringify(t)," at pages\\tabBar\\home.vue:131")},a=function(t){console.log(JSON.stringify(t)," at pages\\tabBar\\home.vue:134"),e.setTitleNViewButtonStyle(0,{text:t.originalData.result.addressComponent.city})};t.regeocoding({address:"北京市海淀区上地十街10号",fail:n,success:a}),this.getSeckillGoodsList(),this.loadData()},onPullDownRefresh:function(){this.seckillGoodsList=[],this.mallGoodsList=[],this.getSeckillGoodsList("refrash"),this.loadData("refrash")},methods:{getSeckillGoodsList:function(){var e=s(a.default.mark(function e(n){var o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.callApix({param:"",action:"home/getSeckillGoodsList",notLoading:!0});case 2:o=e.sent,o.IsSuccess&&(this.seckillGoodsList=o.data),"refrash"==n&&t.stopPullDownRefresh();case 5:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),loadData:function(){var e=s(a.default.mark(function e(n){var o,i;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=!1,"refrash"==n&&(o=!0),e.next=4,this.$api.callApix({param:"",action:"home/getMallGoodsByClass",notLoading:o});case 4:i=e.sent,i.IsSuccess&&(this.mallGoodsList=i.data),"refrash"==n&&t.stopPullDownRefresh();case 7:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].DefaultPicURL="/static/errorImage.jpg"},onFloorImageLoad:function(t,e,n){this.$set(this[t][e].MallGoodsList[n],"loaded","loaded")},onFloorImageError:function(t,e,n){this[t][e].MallGoodsList[n].DefaultPicURL="/static/errorImage.jpg"},swiperChange:function(t){var e=t.detail.current;this.swiperCurrent=e,this.titleNViewBackground=this.carouselList[e].background},navToList:function(e){t.navigateTo({url:"/pages/product/list?key=".concat(e)})},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/detail?goods=".concat(this.$api.putExtra(e))})}},onNavigationBarSearchInputClicked:function(){var e=s(a.default.mark(function e(n){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.navigateTo({url:"/pages/search/search"});case 1:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(e){var n=e.index;if(0===n)this.$api.msg("点击位置");else if(1===n){var a=getCurrentPages(),o=a[a.length-1],i=o.$getAppWebview();i.hideTitleNViewButtonRedDot({index:n}),t.navigateTo({url:"/pages/notice/notice"})}}};e.default=c}).call(this,n("6e42")["default"])},c41c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},d18f:function(t,e,n){},d1c9:function(t,e,n){"use strict";n.r(e);var a=n("c41c"),o=n("e5dd");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("4f30");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},e5dd:function(t,e,n){"use strict";n.r(e);var a=n("b3af"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["5fbd","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/home.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"13d2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},2166:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,r,u,i){try{var c=t[u](i),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function c(t){u(i,a,r,c,o,"next",t)}function o(t){u(i,a,r,c,o,"throw",t)}c(void 0)})}}var c={data:function(){return{tagList:[],searchKey:""}},onLoad:function(t){if(this.searchKey=t.key,this.searchKey){var e=this.$mp.page.$getAppWebview();e.setTitleNViewSearchInputText(this.searchKey),e.setTitleNViewSearchInputFocus(!0)}this.loadData()},methods:{loadData:function(){var t=i(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({params:"",action:"search/getSearchTags"});case 2:e=t.sent,e.IsSuccess&&(this.tagList=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),navTo:function(e){t.redirectTo({url:"../product/list?key="+e})}},onNavigationBarButtonTap:function(e){var n=this.searchKey?"?key="+this.searchKey:"";t.redirectTo({url:"../product/list"+n}),plus.key.hideSoftKeybord()}};e.default=c}).call(this,n("6e42")["default"])},"4e17":function(t,e,n){"use strict";n.r(e);var a=n("2166"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},"70ca":function(t,e,n){},"77db":function(t,e,n){"use strict";var a=n("70ca"),r=n.n(a);r.a},"96fe":function(t,e,n){"use strict";n.r(e);var a=n("13d2"),r=n("4e17");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("77db");var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["b17e","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/product/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/list.js';

define('pages/product/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"150a":function(t,e,a){"use strict";a.r(e);var n=a("7bdb"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"7bdb":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("a34a"));a("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e,a,n,s,i,r){try{var o=t[i](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,s)}function r(t){return function(){var e=this,a=arguments;return new Promise(function(n,s){var r=t.apply(e,a);function o(t){i(r,n,s,o,c,"next",t)}function c(t){i(r,n,s,o,c,"throw",t)}o(void 0)})}}var o=function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"78f7"))},c={components:{uniLoadMore:o},data:function(){return{cateMaskState:0,BrandMaskState:0,ClassMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,searchKey:"",priceOrder:0,cateList:[],goodsList:[],isPullDownRefresh:!0,MallGoodsList:[],BrandList:[],ClassList:[],keyWords:""}},onLoad:function(t){if(this.searchKey=t.key,this.searchKey){var e=this.$mp.page.$getAppWebview();e.setTitleNViewSearchInputText(this.searchKey)}this.loadCateList()},onNavigationBarSearchInputClicked:function(e){var a=this.searchKey?"?key="+this.searchKey:"";t.redirectTo({url:"../search/search"+a})},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.MallGoodsList=[],this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(){var t=r(n.default.mark(function t(){var e;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({params:"",action:"filter/getFilterList"});case 2:e=t.sent,e.IsSuccess&&(this.MallGoodsList=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadData:function(){var e=r(n.default.mark(function e(){var a,s,i,r,o=arguments;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=o.length>0&&void 0!==o[0]?o[0]:"add",s=o.length>1?o[1]:void 0,"add"!==a){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return e.next=11,this.$api.callApix({params:"",action:"filter/getFilterList",notLoading:!0});case 11:i=e.sent,r=[],i.IsSuccess&&(r=i.data),this.MallGoodsList="refresh"===a?r:this.MallGoodsList.concat(r),this.loadingType=this.MallGoodsList<500?"nomore":"more","refresh"===a&&(1==s||t.stopPullDownRefresh());case 17:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].DefaultPicURL="/static/errorImage.jpg"},tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1))},isOpenRefrash:function(){var t=getCurrentPages(),e=t[t.length-1],a=e.$getAppWebview();a.setStyle({pullToRefresh:{support:!this.isPullDownRefresh,style:"circle"}})},toggleCateMask:function(t,e){var a=this,n=-1!=e.indexOf("show")?10:300,s=-1!=e.indexOf("show")?1:0;this.isPullDownRefresh=-1!=e.indexOf("show"),"Cate"==t?this.cateMaskState=2:"Brand"==t?this.BrandMaskState=2:"Classy"==t&&(this.ClassMaskState=2),setTimeout(function(){"Cate"==t?a.cateMaskState=s:"Brand"==t?a.BrandMaskState=s:"Classy"==t&&(a.ClassMaskState=s)},n),this.isOpenRefrash()},changeBrand:function(t){this.SearchParam.CBID=t.CompanyBrandID,this.toggleCateMask("Brand","none")},changeClassy:function(t){this.SearchParam.GCIDS+=t.GoodsClassID+","},closeCate:function(t){0==t?this.cateMaskState=0:1==t?this.BrandMaskState=0:2==t&&(this.ClassMaskState=0)},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/detail?goods=".concat(this.$api.putExtra(e))})},stopPrevent:function(){}}};e.default=c}).call(this,a("6e42")["default"])},9127:function(t,e,a){"use strict";var n=a("aabc"),s=a.n(n);s.a},aabc:function(t,e,a){},e005:function(t,e,a){"use strict";a.r(e);var n=a("f4c4"),s=a("150a");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("9127");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},f4c4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.ClassList,function(e,a){var n=t.__map(e.children,function(e,a){var n=t.SearchParam.GCIDS.indexOf(e.GoodsClassID);return{$orig:t.__get_orig(e),g0:n}});return{$orig:t.__get_orig(e),l0:n}}));t.$mp.data=Object.assign({},{$root:{l1:a}})},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})}},[["c101","common/runtime","common/vendor"]]]);
});
require('pages/product/list.js');
__wxRoute = 'pages/product/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/detail.js';

define('pages/product/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/detail"],{"5ef2":function(t,e,o){"use strict";o.r(e);var n=o("73f0"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"70ff":function(t,e,o){"use strict";o.r(e);var n=o("e3ca"),a=o("5ef2");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("d56f");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"73f0":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,o,n,a,i,s){try{var r=t[i](s),c=r.value}catch(u){return void o(u)}r.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,o=arguments;return new Promise(function(n,a){var s=t.apply(e,o);function r(t){i(s,n,a,r,c,"next",t)}function c(t){i(s,n,a,r,c,"throw",t)}r(void 0)})}}var r=function(){return o.e("components/uni-number-box").then(o.bind(null,"1318"))},c={components:{uniNumberBox:r},data:function(){return{specSelected:[],favorite:!0,cartNum:0,TransGoods:{},GoodsDetail:{},GoodsPicURLList:[],GoodsSkuList:[],GoodsUnitTemplateList:[]}},onLoad:function(){var t=s(n.default.mark(function t(e){var o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=e.goods,this.TransGoods=this.$api.getExtra(o),this.loadData();case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{loadData:function(){var t=s(n.default.mark(function t(){var e,o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({param:"",action:"goods/getGoodsDetail"});case 2:e=t.sent,e.IsSuccess&&(o=decodeURIComponent(e.data.GoodsDetail.GoodsDesc),o=o.replace(new RegExp("{IMGIP}","g"),"res.genvana.cn").replace(new RegExp("<img ","g"),'<img style="width:100%;display:block;" '),e.data.GoodsDetail.GoodsDesc=o,this.GoodsDetail=e.data.GoodsDetail,this.GoodsPicURLList=e.data.GoodsPicURLList,this.GoodsPicURLList.unshift({PicURL:this.TransGoods.DefaultPicURL}),this.GoodsSkuList=e.data.GoodsSkuList,this.GoodsUnitTemplateList=e.data.GoodsUnitTemplateList);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].PicURL="/static/errorImage.jpg"},previewImage:function(){var e=[];this.GoodsPicURLList.forEach(function(t){e.push(t.PicURL)}),t.previewImage({urls:e,longPressActions:{itemList:["保存图片","收藏"],success:function(o){0==o.tapIndex&&(t.showNavigationBarLoading(),t.downloadFile({url:e[o.index],success:function(e){console.log(JSON.stringify(e)," at pages\\product\\detail.vue:206"),200===e.statusCode&&t.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){console.log("save success"," at pages\\product\\detail.vue:212"),t.hideNavigationBarLoading()}})}})),console.log("选中了第"+(o.tapIndex+1)+"个按钮,第"+(o.index+1)+"张图片"," at pages\\product\\detail.vue:221")},fail:function(t){console.log(t.errMsg," at pages\\product\\detail.vue:224")}}})},selectSpec:function(t,e){var o=this,n=this.GoodsUnitTemplateList;n.forEach(function(t){t.pid===e&&o.$set(t,"selected",!1)}),this.$set(n[t],"selected",!0),this.specSelected=[],n.forEach(function(t){!0===t.selected&&o.specSelected.push(t)})},toFavorite:function(){this.favorite=!this.favorite},buy:function(){var e=[];this.TransGoods.CartNum=1,e.push(this.TransGoods),t.navigateTo({url:"/pages/order/placeOrder?data=".concat(this.$api.putExtra(e))})},addCart:function(){this.cartNum++,this.$api.msg("添加成功！在购物车等亲")},stopPrevent:function(){}}};e.default=c}).call(this,o("6e42")["default"])},d56f:function(t,e,o){"use strict";var n=o("df22"),a=o.n(n);a.a},df22:function(t,e,o){},e3ca:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})}},[["1678","common/runtime","common/vendor"]]]);
});
require('pages/product/detail.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"5f44":function(n,t,e){},a6a6:function(n,t,e){"use strict";e.r(t);var r=e("a89b"),a=e("c01a");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("c2c5");var o=e("2877"),u=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports},a89b:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a})},c01a:function(n,t,e){"use strict";e.r(t);var r=e("c3d7"),a=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);t["default"]=a.a},c2c5:function(n,t,e){"use strict";var r=e("5f44"),a=e.n(r);a.a},c3d7:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e("a34a")),a=e("2f62");function i(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,r,a,i,o){try{var u=n[i](o),c=u.value}catch(f){return void e(f)}u.done?t(c):Promise.resolve(c).then(r,a)}function u(n){return function(){var t=this,e=arguments;return new Promise(function(r,a){var i=n.apply(t,e);function u(n){o(i,r,a,u,c,"next",n)}function c(n){o(i,r,a,u,c,"throw",n)}u(void 0)})}}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l={data:function(){return{mobile:"",password:"",logining:!1}},onLoad:function(){},methods:c({},(0,a.mapMutations)(["login"]),{inputChange:function(n){var t=n.currentTarget.dataset.key;this[t]=n.detail.value},navBack:function(){n.navigateBack()},toRegist:function(){this.$api.msg("去注册")},toLogin:function(){var t=u(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.logining=!0,t.next=3,this.$api.callApix({param:"",action:"login/login"});case 3:e=t.sent,e.IsSuccess?(this.login(e.data),n.navigateBack()):(this.$api.msg(e.msg),this.logining=!1);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})};t.default=l}).call(this,e("6e42")["default"])}},[["3408","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/order/placeOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/placeOrder.js';

define('pages/order/placeOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/placeOrder"],{"4a11":function(t,a,n){},"8c57":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=(t._self._c,(t.totalMoney-t.couponMoney).toFixed(2));t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o})},af04:function(t,a,n){"use strict";var e=n("4a11"),o=n.n(e);o.a},b512:function(t,a,n){"use strict";n.r(a);var e=n("8c57"),o=n("e04b");for(var s in o)"default"!==s&&function(t){n.d(a,t,function(){return o[t]})}(s);n("af04");var r=n("2877"),i=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,null,null);a["default"]=i.exports},d141:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,a,n,e,o,s,r){try{var i=t[s](r),u=i.value}catch(c){return void n(c)}i.done?a(u):Promise.resolve(u).then(e,o)}function r(t){return function(){var a=this,n=arguments;return new Promise(function(e,o){var r=t.apply(a,n);function i(t){s(r,e,o,i,u,"next",t)}function u(t){s(r,e,o,i,u,"throw",t)}i(void 0)})}}var i={data:function(){return{maskState:0,totalMoney:"",couponMoney:"",desc:"",couponList:[],addressData:{},transGoodsList:[]}},onLoad:function(t){this.transGoodsList=this.$api.getExtra(t.data);var a=0;this.transGoodsList.forEach(function(t){t.loaded="",a+=Number(t.Price)*Number(t.CartNum)}),this.totalMoney=Number(a.toFixed(2)),this.couponMoney=(.1*this.totalMoney).toFixed(2),this.loadData()},methods:{loadData:function(){var t=r(e.default.mark(function t(){var a,n,o=this;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({param:"",action:"address/getAddressList",notLoading:!0});case 2:return a=t.sent,a.IsSuccess&&(this.addressData=a.data[0],a.data.forEach(function(t){1==t.IsDefault&&(o.addressData=t)})),t.next=6,this.$api.callApix({param:"",action:"coupon/getCouponList",notLoading:!0});case 6:n=t.sent,n.IsSuccess&&(this.couponList=n.data);case 8:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),toggleMask:function(t){var a=this,n="show"===t?10:300,e="show"===t?1:0;this.maskState=2,setTimeout(function(){a.maskState=e},n)},onImageLoad:function(t,a){this.$set(this[t][a],"loaded","loaded")},onImageError:function(t,a){this[t][a].DefaultPicURL="/static/errorImage.jpg"},selectAddress:function(){t.navigateTo({url:"/pages/address/address?AddressID="+this.addressData.AddressID})},submit:function(){t.redirectTo({url:"/pages/pay/pay"})},stopPrevent:function(){}}};a.default=i}).call(this,n("6e42")["default"])},e04b:function(t,a,n){"use strict";n.r(a);var e=n("d141"),o=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=o.a}},[["cb24","common/runtime","common/vendor"]]]);
});
require('pages/order/placeOrder.js');
__wxRoute = 'pages/pay/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/pay.js';

define('pages/pay/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/pay"],{a4af:function(n,t,e){"use strict";e.r(t);var a=e("f531"),r=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);t["default"]=r.a},b5ba:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return r})},c6af:function(n,t,e){},de30:function(n,t,e){"use strict";var a=e("c6af"),r=e.n(a);r.a},f531:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,r,u,o){try{var c=n[u](o),f=c.value}catch(i){return void e(i)}c.done?t(f):Promise.resolve(f).then(a,r)}function o(n){return function(){var t=this,e=arguments;return new Promise(function(a,r){var o=n.apply(t,e);function c(n){u(o,a,r,c,f,"next",n)}function f(n){u(o,a,r,c,f,"throw",n)}c(void 0)})}}var c={data:function(){return{payType:1,orderInfo:{}}},computed:{},onLoad:function(n){},methods:{changePayType:function(n){this.payType=n},confirm:function(){var t=o(a.default.mark(function t(){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.redirectTo({url:"/pages/pay/paySuccess"});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=c}).call(this,e("6e42")["default"])},f5b3:function(n,t,e){"use strict";e.r(t);var a=e("b5ba"),r=e("a4af");for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);e("de30");var o=e("2877"),c=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["509c","common/runtime","common/vendor"]]]);
});
require('pages/pay/pay.js');
__wxRoute = 'pages/pay/paySuccess';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/paySuccess.js';

define('pages/pay/paySuccess.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/paySuccess"],{1713:function(n,t,e){},8792:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{stopPrevent:function(){}}};t.default=u},"972c":function(n,t,e){"use strict";e.r(t);var u=e("8792"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},b660:function(n,t,e){"use strict";e.r(t);var u=e("f596"),c=e("972c");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("eca9");var a=e("2877"),o=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},eca9:function(n,t,e){"use strict";var u=e("1713"),c=e.n(u);c.a},f596:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})}},[["91fc","common/runtime","common/vendor"]]]);
});
require('pages/pay/paySuccess.js');
__wxRoute = 'pages/notice/notice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/notice/notice.js';

define('pages/notice/notice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/notice"],{"10f7":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"36a1":function(n,t,e){},"3c4d":function(n,t,e){"use strict";var u=e("36a1"),r=e.n(u);r.a},9279:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},b088:function(n,t,e){"use strict";e.r(t);var u=e("9279"),r=e("c30d");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("3c4d");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},c30d:function(n,t,e){"use strict";e.r(t);var u=e("10f7"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a}},[["8446","common/runtime","common/vendor"]]]);
});
require('pages/notice/notice.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"10d6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"1c8d":function(t,e,a){"use strict";var n=a("b0d7"),s=a.n(n);s.a},6210:function(t,e,a){"use strict";a.r(e);var n=a("10d6"),s=a("6302");for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);a("1c8d");var d=a("2877"),i=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},6302:function(t,e,a){"use strict";a.r(e);var n=a("efdf"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=s.a},b0d7:function(t,e,a){},efdf:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,n,s,r,d){try{var i=t[r](d),u=i.value}catch(c){return void a(c)}i.done?e(u):Promise.resolve(u).then(n,s)}function d(t){return function(){var e=this,a=arguments;return new Promise(function(n,s){var d=t.apply(e,a);function i(t){r(d,n,s,i,u,"next",t)}function u(t){r(d,n,s,i,u,"throw",t)}i(void 0)})}}var i={data:function(){return{AddressID:0,addressList:[]}},onLoad:function(t){console.log(t.AddressID," at pages\\address\\address.vue:31"),this.AddressID=t.AddressID,this.loadData()},methods:{loadData:function(){var t=d(n.default.mark(function t(){var e,a,s,r;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({param:"",action:"address/getAddressList"});case 2:if(e=t.sent,!e.IsSuccess){t.next=18;break}if(this.AddressID||0==this.AddressID){t.next=17;break}a=e.data[0],s=0;case 7:if(!(s<e.data.length)){t.next=16;break}if(r=e.data[s],r.AddressID!=this.AddressID){t.next=13;break}return a=r,e.data.splice(s,1),t.abrupt("break",16);case 13:s++,t.next=7;break;case 16:e.data.unshift(a);case 17:this.addressList=e.data;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),checkAddress:function(e){this.AddressID||0==this.addressID||(this.$api.prePage().addressData=e,t.navigateBack())},addAddress:function(e,a){t.navigateTo({url:"/pages/address/addressEdit?type=".concat(e,"&data=").concat(this.$api.putExtra(a))})},refreshList:function(){this.loadData()}}};e.default=i}).call(this,a("6e42")["default"])}},[["158f","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/address/addressEdit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressEdit.js';

define('pages/address/addressEdit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressEdit"],{"58dc":function(t,e,a){},6214:function(t,e,a){"use strict";a.r(e);var s=a("9c49"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=n.a},"9c49":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return Promise.all([a.e("common/vendor"),a.e("components/city-selector")]).then(a.bind(null,"dcbd"))},n={components:{citySelector:s},data:function(){return{maskState:0,manageType:"",addressData:{AddressID:"",RecieveName:"",MobilePhone:"",Address:"",AddressDetail:"",IsDefault:0}}},onLoad:function(e){var a="新增收货地址";"edit"===e.type&&(a="编辑收货地址",this.addressData=this.$api.getExtra(e.data)),this.manageType=e.type,t.setNavigationBarTitle({title:a})},methods:{switchChange:function(t){this.addressData.IsDefault=t.detail.value?1:0},onCityClick:function(t){console.log(JSON.stringify(t)," at pages\\address\\addressEdit.vue:81"),this.addressData.Address=t.province.label+t.city.label+t.county.label,this.togglePopup()},togglePopup:function(t){var e=this,a="show"===t?10:300,s="show"===t?1:0;this.maskState=2,setTimeout(function(){e.maskState=s},a)},chooseLocation:function(){var e=this;t.chooseLocation({success:function(t){e.addressData.Address=t.name}})},confirm:function(){var e=this.addressData;e.RecieveName?/(^1[3|4|5|7|8][0-9]{9}$)/.test(e.MobilePhone)?e.Address?e.AddressDetail?(this.$api.prePage().refreshList(),this.$api.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),setTimeout(function(){t.navigateBack()},800)):this.$api.msg("请填写门牌号信息"):this.$api.msg("请在地图选择所在位置"):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")},stopPrevent:function(){}}};e.default=n}).call(this,a("6e42")["default"])},a2b3:function(t,e,a){"use strict";a.r(e);var s=a("c871"),n=a("6214");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("c672");var o=a("2877"),c=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},c672:function(t,e,a){"use strict";var s=a("58dc"),n=a.n(s);n.a},c871:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})}},[["9489","common/runtime","common/vendor"]]]);
});
require('pages/address/addressEdit.js');
__wxRoute = 'pages/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/setting.js';

define('pages/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"3b8a":function(t,n,e){"use strict";e.r(n);var o=e("d12b"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},4462:function(t,n,e){"use strict";e.r(n);var o=e("f12d"),r=e("3b8a");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("adbb");var a=e("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},ad9d:function(t,n,e){},adbb:function(t,n,e){"use strict";var o=e("ad9d"),r=e.n(o);r.a},d12b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={data:function(){return{}},methods:r({},(0,o.mapMutations)(["logout"]),{navTo:function(n){t.navigateTo({url:n})},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),n.$api.prePage().refrashUserInfo(),setTimeout(function(){t.navigateBack()},200))}})}})};n.default=a}).call(this,e("6e42")["default"])},f12d:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})}},[["26a9","common/runtime","common/vendor"]]]);
});
require('pages/setting/setting.js');
__wxRoute = 'pages/tabBar/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user.js';

define('pages/tabBar/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabBar/user.js');
__wxRoute = 'pages/tabBar/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart.js';

define('pages/tabBar/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabBar/cart.js');
__wxRoute = 'pages/tabBar/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category.js';

define('pages/tabBar/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabBar/category.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

