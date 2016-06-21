goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177__i = 0, G__177__a = new Array(arguments.length -  0);
while (G__177__i < G__177__a.length) {G__177__a[G__177__i] = arguments[G__177__i + 0]; ++G__177__i;}
  args = new cljs.core.IndexedSeq(G__177__a,0);
} 
return G__176__delegate.call(this,args);};
G__176.cljs$lang$maxFixedArity = 0;
G__176.cljs$lang$applyTo = (function (arglist__178){
var args = cljs.core.seq(arglist__178);
return G__176__delegate(args);
});
G__176.cljs$core$IFn$_invoke$arity$variadic = G__176__delegate;
return G__176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180__i = 0, G__180__a = new Array(arguments.length -  0);
while (G__180__i < G__180__a.length) {G__180__a[G__180__i] = arguments[G__180__i + 0]; ++G__180__i;}
  args = new cljs.core.IndexedSeq(G__180__a,0);
} 
return G__179__delegate.call(this,args);};
G__179.cljs$lang$maxFixedArity = 0;
G__179.cljs$lang$applyTo = (function (arglist__181){
var args = cljs.core.seq(arglist__181);
return G__179__delegate(args);
});
G__179.cljs$core$IFn$_invoke$arity$variadic = G__179__delegate;
return G__179;
})()
;

return null;
});
