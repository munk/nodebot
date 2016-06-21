// Compiled by ClojureScript 1.9.76 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163__i = 0, G__163__a = new Array(arguments.length -  0);
while (G__163__i < G__163__a.length) {G__163__a[G__163__i] = arguments[G__163__i + 0]; ++G__163__i;}
  args = new cljs.core.IndexedSeq(G__163__a,0);
} 
return G__162__delegate.call(this,args);};
G__162.cljs$lang$maxFixedArity = 0;
G__162.cljs$lang$applyTo = (function (arglist__164){
var args = cljs.core.seq(arglist__164);
return G__162__delegate(args);
});
G__162.cljs$core$IFn$_invoke$arity$variadic = G__162__delegate;
return G__162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166__i = 0, G__166__a = new Array(arguments.length -  0);
while (G__166__i < G__166__a.length) {G__166__a[G__166__i] = arguments[G__166__i + 0]; ++G__166__i;}
  args = new cljs.core.IndexedSeq(G__166__a,0);
} 
return G__165__delegate.call(this,args);};
G__165.cljs$lang$maxFixedArity = 0;
G__165.cljs$lang$applyTo = (function (arglist__167){
var args = cljs.core.seq(arglist__167);
return G__165__delegate(args);
});
G__165.cljs$core$IFn$_invoke$arity$variadic = G__165__delegate;
return G__165;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map