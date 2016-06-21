goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1120__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1121__i = 0, G__1121__a = new Array(arguments.length -  0);
while (G__1121__i < G__1121__a.length) {G__1121__a[G__1121__i] = arguments[G__1121__i + 0]; ++G__1121__i;}
  args = new cljs.core.IndexedSeq(G__1121__a,0);
} 
return G__1120__delegate.call(this,args);};
G__1120.cljs$lang$maxFixedArity = 0;
G__1120.cljs$lang$applyTo = (function (arglist__1122){
var args = cljs.core.seq(arglist__1122);
return G__1120__delegate(args);
});
G__1120.cljs$core$IFn$_invoke$arity$variadic = G__1120__delegate;
return G__1120;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1123__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1124__i = 0, G__1124__a = new Array(arguments.length -  0);
while (G__1124__i < G__1124__a.length) {G__1124__a[G__1124__i] = arguments[G__1124__i + 0]; ++G__1124__i;}
  args = new cljs.core.IndexedSeq(G__1124__a,0);
} 
return G__1123__delegate.call(this,args);};
G__1123.cljs$lang$maxFixedArity = 0;
G__1123.cljs$lang$applyTo = (function (arglist__1125){
var args = cljs.core.seq(arglist__1125);
return G__1123__delegate(args);
});
G__1123.cljs$core$IFn$_invoke$arity$variadic = G__1123__delegate;
return G__1123;
})()
;

return null;
});
