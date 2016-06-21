// Compiled by ClojureScript 1.9.76 {:target :nodejs}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
hello_world.core.five = require("johnny-five");
hello_world.core.board = hello_world.core.five.Board();
hello_world.core._main = (function hello_world$core$_main(var_args){
var args__3500__auto__ = [];
var len__3497__auto___163 = arguments.length;
var i__3498__auto___164 = (0);
while(true){
if((i__3498__auto___164 < len__3497__auto___163)){
args__3500__auto__.push((arguments[i__3498__auto___164]));

var G__165 = (i__3498__auto___164 + (1));
i__3498__auto___164 = G__165;
continue;
} else {
}
break;
}

var argseq__3501__auto__ = ((((0) < args__3500__auto__.length))?(new cljs.core.IndexedSeq(args__3500__auto__.slice((0)),(0),null)):null);
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3501__auto__);
});

hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
hello_world.core.board.on("ready",(function (){
var this$ = this;
var led = hello_world.core.five.Led((11));
return this$.repl.inject(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"led","led",-936879528),led], null)));
}));

return cljs.core.println.call(null,"Hello world!");
});

hello_world.core._main.cljs$lang$maxFixedArity = (0);

hello_world.core._main.cljs$lang$applyTo = (function (seq162){
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq162));
});

cljs.core._STAR_main_cli_fn_STAR_ = hello_world.core._main;

//# sourceMappingURL=core.js.map