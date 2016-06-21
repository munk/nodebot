goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169__i = 0, G__169__a = new Array(arguments.length -  0);
while (G__169__i < G__169__a.length) {G__169__a[G__169__i] = arguments[G__169__i + 0]; ++G__169__i;}
  args = new cljs.core.IndexedSeq(G__169__a,0);
} 
return G__168__delegate.call(this,args);};
G__168.cljs$lang$maxFixedArity = 0;
G__168.cljs$lang$applyTo = (function (arglist__170){
var args = cljs.core.seq(arglist__170);
return G__168__delegate(args);
});
G__168.cljs$core$IFn$_invoke$arity$variadic = G__168__delegate;
return G__168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172__i = 0, G__172__a = new Array(arguments.length -  0);
while (G__172__i < G__172__a.length) {G__172__a[G__172__i] = arguments[G__172__i + 0]; ++G__172__i;}
  args = new cljs.core.IndexedSeq(G__172__a,0);
} 
return G__171__delegate.call(this,args);};
G__171.cljs$lang$maxFixedArity = 0;
G__171.cljs$lang$applyTo = (function (arglist__173){
var args = cljs.core.seq(arglist__173);
return G__171__delegate(args);
});
G__171.cljs$core$IFn$_invoke$arity$variadic = G__171__delegate;
return G__171;
})()
;

return null;
});
