// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3431__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3431__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3431__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__13259 = (i + class$.length);
start_from = G__13259;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___13284 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13284))
{var class_list_13285 = temp__4090__auto___13284;var seq__13272_13286 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13273_13287 = null;var count__13274_13288 = 0;var i__13275_13289 = 0;while(true){
if((i__13275_13289 < count__13274_13288))
{var class_13290 = cljs.core._nth.call(null,chunk__13273_13287,i__13275_13289);class_list_13285.add(class_13290);
{
var G__13291 = seq__13272_13286;
var G__13292 = chunk__13273_13287;
var G__13293 = count__13274_13288;
var G__13294 = (i__13275_13289 + 1);
seq__13272_13286 = G__13291;
chunk__13273_13287 = G__13292;
count__13274_13288 = G__13293;
i__13275_13289 = G__13294;
continue;
}
} else
{var temp__4092__auto___13295 = cljs.core.seq.call(null,seq__13272_13286);if(temp__4092__auto___13295)
{var seq__13272_13296__$1 = temp__4092__auto___13295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13272_13296__$1))
{var c__4191__auto___13297 = cljs.core.chunk_first.call(null,seq__13272_13296__$1);{
var G__13298 = cljs.core.chunk_rest.call(null,seq__13272_13296__$1);
var G__13299 = c__4191__auto___13297;
var G__13300 = cljs.core.count.call(null,c__4191__auto___13297);
var G__13301 = 0;
seq__13272_13286 = G__13298;
chunk__13273_13287 = G__13299;
count__13274_13288 = G__13300;
i__13275_13289 = G__13301;
continue;
}
} else
{var class_13302 = cljs.core.first.call(null,seq__13272_13296__$1);class_list_13285.add(class_13302);
{
var G__13303 = cljs.core.next.call(null,seq__13272_13296__$1);
var G__13304 = null;
var G__13305 = 0;
var G__13306 = 0;
seq__13272_13286 = G__13303;
chunk__13273_13287 = G__13304;
count__13274_13288 = G__13305;
i__13275_13289 = G__13306;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_13307 = elem__$1.className;var seq__13276_13308 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13277_13309 = null;var count__13278_13310 = 0;var i__13279_13311 = 0;while(true){
if((i__13279_13311 < count__13278_13310))
{var class_13312 = cljs.core._nth.call(null,chunk__13277_13309,i__13279_13311);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13307,class_13312)))
{} else
{elem__$1.className = (((class_name_13307 === ""))?class_13312:[cljs.core.str(class_name_13307),cljs.core.str(" "),cljs.core.str(class_13312)].join(''));
}
{
var G__13313 = seq__13276_13308;
var G__13314 = chunk__13277_13309;
var G__13315 = count__13278_13310;
var G__13316 = (i__13279_13311 + 1);
seq__13276_13308 = G__13313;
chunk__13277_13309 = G__13314;
count__13278_13310 = G__13315;
i__13279_13311 = G__13316;
continue;
}
} else
{var temp__4092__auto___13317 = cljs.core.seq.call(null,seq__13276_13308);if(temp__4092__auto___13317)
{var seq__13276_13318__$1 = temp__4092__auto___13317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13276_13318__$1))
{var c__4191__auto___13319 = cljs.core.chunk_first.call(null,seq__13276_13318__$1);{
var G__13320 = cljs.core.chunk_rest.call(null,seq__13276_13318__$1);
var G__13321 = c__4191__auto___13319;
var G__13322 = cljs.core.count.call(null,c__4191__auto___13319);
var G__13323 = 0;
seq__13276_13308 = G__13320;
chunk__13277_13309 = G__13321;
count__13278_13310 = G__13322;
i__13279_13311 = G__13323;
continue;
}
} else
{var class_13324 = cljs.core.first.call(null,seq__13276_13318__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13307,class_13324)))
{} else
{elem__$1.className = (((class_name_13307 === ""))?class_13324:[cljs.core.str(class_name_13307),cljs.core.str(" "),cljs.core.str(class_13324)].join(''));
}
{
var G__13325 = cljs.core.next.call(null,seq__13276_13318__$1);
var G__13326 = null;
var G__13327 = 0;
var G__13328 = 0;
seq__13276_13308 = G__13325;
chunk__13277_13309 = G__13326;
count__13278_13310 = G__13327;
i__13279_13311 = G__13328;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__13329__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13280_13330 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__13281_13331 = null;var count__13282_13332 = 0;var i__13283_13333 = 0;while(true){
if((i__13283_13333 < count__13282_13332))
{var c_13334 = cljs.core._nth.call(null,chunk__13281_13331,i__13283_13333);add_class_BANG_.call(null,elem__$1,c_13334);
{
var G__13335 = seq__13280_13330;
var G__13336 = chunk__13281_13331;
var G__13337 = count__13282_13332;
var G__13338 = (i__13283_13333 + 1);
seq__13280_13330 = G__13335;
chunk__13281_13331 = G__13336;
count__13282_13332 = G__13337;
i__13283_13333 = G__13338;
continue;
}
} else
{var temp__4092__auto___13339 = cljs.core.seq.call(null,seq__13280_13330);if(temp__4092__auto___13339)
{var seq__13280_13340__$1 = temp__4092__auto___13339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13280_13340__$1))
{var c__4191__auto___13341 = cljs.core.chunk_first.call(null,seq__13280_13340__$1);{
var G__13342 = cljs.core.chunk_rest.call(null,seq__13280_13340__$1);
var G__13343 = c__4191__auto___13341;
var G__13344 = cljs.core.count.call(null,c__4191__auto___13341);
var G__13345 = 0;
seq__13280_13330 = G__13342;
chunk__13281_13331 = G__13343;
count__13282_13332 = G__13344;
i__13283_13333 = G__13345;
continue;
}
} else
{var c_13346 = cljs.core.first.call(null,seq__13280_13340__$1);add_class_BANG_.call(null,elem__$1,c_13346);
{
var G__13347 = cljs.core.next.call(null,seq__13280_13340__$1);
var G__13348 = null;
var G__13349 = 0;
var G__13350 = 0;
seq__13280_13330 = G__13347;
chunk__13281_13331 = G__13348;
count__13282_13332 = G__13349;
i__13283_13333 = G__13350;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__13329 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13329__delegate.call(this,elem,classes,more_classes);};
G__13329.cljs$lang$maxFixedArity = 2;
G__13329.cljs$lang$applyTo = (function (arglist__13351){
var elem = cljs.core.first(arglist__13351);
arglist__13351 = cljs.core.next(arglist__13351);
var classes = cljs.core.first(arglist__13351);
var more_classes = cljs.core.rest(arglist__13351);
return G__13329__delegate(elem,classes,more_classes);
});
G__13329.cljs$core$IFn$_invoke$arity$variadic = G__13329__delegate;
return G__13329;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__13352 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__13352;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13361 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13361))
{var class_list_13362 = temp__4090__auto___13361;class_list_13362.remove(class$__$1);
} else
{var class_name_13363 = elem__$1.className;var new_class_name_13364 = dommy.attrs.remove_class_str.call(null,class_name_13363,class$__$1);if((class_name_13363 === new_class_name_13364))
{} else
{elem__$1.className = new_class_name_13364;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__13365__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13357 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13358 = null;var count__13359 = 0;var i__13360 = 0;while(true){
if((i__13360 < count__13359))
{var c = cljs.core._nth.call(null,chunk__13358,i__13360);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13366 = seq__13357;
var G__13367 = chunk__13358;
var G__13368 = count__13359;
var G__13369 = (i__13360 + 1);
seq__13357 = G__13366;
chunk__13358 = G__13367;
count__13359 = G__13368;
i__13360 = G__13369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13357);if(temp__4092__auto__)
{var seq__13357__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13357__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13357__$1);{
var G__13370 = cljs.core.chunk_rest.call(null,seq__13357__$1);
var G__13371 = c__4191__auto__;
var G__13372 = cljs.core.count.call(null,c__4191__auto__);
var G__13373 = 0;
seq__13357 = G__13370;
chunk__13358 = G__13371;
count__13359 = G__13372;
i__13360 = G__13373;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13357__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13374 = cljs.core.next.call(null,seq__13357__$1);
var G__13375 = null;
var G__13376 = 0;
var G__13377 = 0;
seq__13357 = G__13374;
chunk__13358 = G__13375;
count__13359 = G__13376;
i__13360 = G__13377;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__13365 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13365__delegate.call(this,elem,class$,classes);};
G__13365.cljs$lang$maxFixedArity = 2;
G__13365.cljs$lang$applyTo = (function (arglist__13378){
var elem = cljs.core.first(arglist__13378);
arglist__13378 = cljs.core.next(arglist__13378);
var class$ = cljs.core.first(arglist__13378);
var classes = cljs.core.rest(arglist__13378);
return G__13365__delegate(elem,class$,classes);
});
G__13365.cljs$core$IFn$_invoke$arity$variadic = G__13365__delegate;
return G__13365;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13379 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13379))
{var class_list_13380 = temp__4090__auto___13379;class_list_13380.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__13383){var vec__13384 = p__13383;var k = cljs.core.nth.call(null,vec__13384,0,null);var v = cljs.core.nth.call(null,vec__13384,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__13391_13397 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13392_13398 = null;var count__13393_13399 = 0;var i__13394_13400 = 0;while(true){
if((i__13394_13400 < count__13393_13399))
{var vec__13395_13401 = cljs.core._nth.call(null,chunk__13392_13398,i__13394_13400);var k_13402 = cljs.core.nth.call(null,vec__13395_13401,0,null);var v_13403 = cljs.core.nth.call(null,vec__13395_13401,1,null);(style[cljs.core.name.call(null,k_13402)] = v_13403);
{
var G__13404 = seq__13391_13397;
var G__13405 = chunk__13392_13398;
var G__13406 = count__13393_13399;
var G__13407 = (i__13394_13400 + 1);
seq__13391_13397 = G__13404;
chunk__13392_13398 = G__13405;
count__13393_13399 = G__13406;
i__13394_13400 = G__13407;
continue;
}
} else
{var temp__4092__auto___13408 = cljs.core.seq.call(null,seq__13391_13397);if(temp__4092__auto___13408)
{var seq__13391_13409__$1 = temp__4092__auto___13408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13391_13409__$1))
{var c__4191__auto___13410 = cljs.core.chunk_first.call(null,seq__13391_13409__$1);{
var G__13411 = cljs.core.chunk_rest.call(null,seq__13391_13409__$1);
var G__13412 = c__4191__auto___13410;
var G__13413 = cljs.core.count.call(null,c__4191__auto___13410);
var G__13414 = 0;
seq__13391_13397 = G__13411;
chunk__13392_13398 = G__13412;
count__13393_13399 = G__13413;
i__13394_13400 = G__13414;
continue;
}
} else
{var vec__13396_13415 = cljs.core.first.call(null,seq__13391_13409__$1);var k_13416 = cljs.core.nth.call(null,vec__13396_13415,0,null);var v_13417 = cljs.core.nth.call(null,vec__13396_13415,1,null);(style[cljs.core.name.call(null,k_13416)] = v_13417);
{
var G__13418 = cljs.core.next.call(null,seq__13391_13409__$1);
var G__13419 = null;
var G__13420 = 0;
var G__13421 = 0;
seq__13391_13397 = G__13418;
chunk__13392_13398 = G__13419;
count__13393_13399 = G__13420;
i__13394_13400 = G__13421;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13422){
var elem = cljs.core.first(arglist__13422);
var kvs = cljs.core.rest(arglist__13422);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13429_13435 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13430_13436 = null;var count__13431_13437 = 0;var i__13432_13438 = 0;while(true){
if((i__13432_13438 < count__13431_13437))
{var vec__13433_13439 = cljs.core._nth.call(null,chunk__13430_13436,i__13432_13438);var k_13440 = cljs.core.nth.call(null,vec__13433_13439,0,null);var v_13441 = cljs.core.nth.call(null,vec__13433_13439,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13440,[cljs.core.str(v_13441),cljs.core.str("px")].join(''));
{
var G__13442 = seq__13429_13435;
var G__13443 = chunk__13430_13436;
var G__13444 = count__13431_13437;
var G__13445 = (i__13432_13438 + 1);
seq__13429_13435 = G__13442;
chunk__13430_13436 = G__13443;
count__13431_13437 = G__13444;
i__13432_13438 = G__13445;
continue;
}
} else
{var temp__4092__auto___13446 = cljs.core.seq.call(null,seq__13429_13435);if(temp__4092__auto___13446)
{var seq__13429_13447__$1 = temp__4092__auto___13446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13429_13447__$1))
{var c__4191__auto___13448 = cljs.core.chunk_first.call(null,seq__13429_13447__$1);{
var G__13449 = cljs.core.chunk_rest.call(null,seq__13429_13447__$1);
var G__13450 = c__4191__auto___13448;
var G__13451 = cljs.core.count.call(null,c__4191__auto___13448);
var G__13452 = 0;
seq__13429_13435 = G__13449;
chunk__13430_13436 = G__13450;
count__13431_13437 = G__13451;
i__13432_13438 = G__13452;
continue;
}
} else
{var vec__13434_13453 = cljs.core.first.call(null,seq__13429_13447__$1);var k_13454 = cljs.core.nth.call(null,vec__13434_13453,0,null);var v_13455 = cljs.core.nth.call(null,vec__13434_13453,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13454,[cljs.core.str(v_13455),cljs.core.str("px")].join(''));
{
var G__13456 = cljs.core.next.call(null,seq__13429_13447__$1);
var G__13457 = null;
var G__13458 = 0;
var G__13459 = 0;
seq__13429_13435 = G__13456;
chunk__13430_13436 = G__13457;
count__13431_13437 = G__13458;
i__13432_13438 = G__13459;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13460){
var elem = cljs.core.first(arglist__13460);
var kvs = cljs.core.rest(arglist__13460);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__13469 = dommy.template.__GT_node_like.call(null,elem);(G__13469[cljs.core.name.call(null,k)] = v);
return G__13469;
} else
{var G__13470 = dommy.template.__GT_node_like.call(null,elem);G__13470.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__13470;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13477__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13471_13478 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__13472_13479 = null;var count__13473_13480 = 0;var i__13474_13481 = 0;while(true){
if((i__13474_13481 < count__13473_13480))
{var vec__13475_13482 = cljs.core._nth.call(null,chunk__13472_13479,i__13474_13481);var k_13483__$1 = cljs.core.nth.call(null,vec__13475_13482,0,null);var v_13484__$1 = cljs.core.nth.call(null,vec__13475_13482,1,null);set_attr_BANG_.call(null,elem__$1,k_13483__$1,v_13484__$1);
{
var G__13485 = seq__13471_13478;
var G__13486 = chunk__13472_13479;
var G__13487 = count__13473_13480;
var G__13488 = (i__13474_13481 + 1);
seq__13471_13478 = G__13485;
chunk__13472_13479 = G__13486;
count__13473_13480 = G__13487;
i__13474_13481 = G__13488;
continue;
}
} else
{var temp__4092__auto___13489 = cljs.core.seq.call(null,seq__13471_13478);if(temp__4092__auto___13489)
{var seq__13471_13490__$1 = temp__4092__auto___13489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13471_13490__$1))
{var c__4191__auto___13491 = cljs.core.chunk_first.call(null,seq__13471_13490__$1);{
var G__13492 = cljs.core.chunk_rest.call(null,seq__13471_13490__$1);
var G__13493 = c__4191__auto___13491;
var G__13494 = cljs.core.count.call(null,c__4191__auto___13491);
var G__13495 = 0;
seq__13471_13478 = G__13492;
chunk__13472_13479 = G__13493;
count__13473_13480 = G__13494;
i__13474_13481 = G__13495;
continue;
}
} else
{var vec__13476_13496 = cljs.core.first.call(null,seq__13471_13490__$1);var k_13497__$1 = cljs.core.nth.call(null,vec__13476_13496,0,null);var v_13498__$1 = cljs.core.nth.call(null,vec__13476_13496,1,null);set_attr_BANG_.call(null,elem__$1,k_13497__$1,v_13498__$1);
{
var G__13499 = cljs.core.next.call(null,seq__13471_13490__$1);
var G__13500 = null;
var G__13501 = 0;
var G__13502 = 0;
seq__13471_13478 = G__13499;
chunk__13472_13479 = G__13500;
count__13473_13480 = G__13501;
i__13474_13481 = G__13502;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__13477 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13477__delegate.call(this,elem,k,v,kvs);};
G__13477.cljs$lang$maxFixedArity = 3;
G__13477.cljs$lang$applyTo = (function (arglist__13503){
var elem = cljs.core.first(arglist__13503);
arglist__13503 = cljs.core.next(arglist__13503);
var k = cljs.core.first(arglist__13503);
arglist__13503 = cljs.core.next(arglist__13503);
var v = cljs.core.first(arglist__13503);
var kvs = cljs.core.rest(arglist__13503);
return G__13477__delegate(elem,k,v,kvs);
});
G__13477.cljs$core$IFn$_invoke$arity$variadic = G__13477__delegate;
return G__13477;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__13512__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13508_13513 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13509_13514 = null;var count__13510_13515 = 0;var i__13511_13516 = 0;while(true){
if((i__13511_13516 < count__13510_13515))
{var k_13517__$1 = cljs.core._nth.call(null,chunk__13509_13514,i__13511_13516);remove_attr_BANG_.call(null,elem__$1,k_13517__$1);
{
var G__13518 = seq__13508_13513;
var G__13519 = chunk__13509_13514;
var G__13520 = count__13510_13515;
var G__13521 = (i__13511_13516 + 1);
seq__13508_13513 = G__13518;
chunk__13509_13514 = G__13519;
count__13510_13515 = G__13520;
i__13511_13516 = G__13521;
continue;
}
} else
{var temp__4092__auto___13522 = cljs.core.seq.call(null,seq__13508_13513);if(temp__4092__auto___13522)
{var seq__13508_13523__$1 = temp__4092__auto___13522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13508_13523__$1))
{var c__4191__auto___13524 = cljs.core.chunk_first.call(null,seq__13508_13523__$1);{
var G__13525 = cljs.core.chunk_rest.call(null,seq__13508_13523__$1);
var G__13526 = c__4191__auto___13524;
var G__13527 = cljs.core.count.call(null,c__4191__auto___13524);
var G__13528 = 0;
seq__13508_13513 = G__13525;
chunk__13509_13514 = G__13526;
count__13510_13515 = G__13527;
i__13511_13516 = G__13528;
continue;
}
} else
{var k_13529__$1 = cljs.core.first.call(null,seq__13508_13523__$1);remove_attr_BANG_.call(null,elem__$1,k_13529__$1);
{
var G__13530 = cljs.core.next.call(null,seq__13508_13523__$1);
var G__13531 = null;
var G__13532 = 0;
var G__13533 = 0;
seq__13508_13513 = G__13530;
chunk__13509_13514 = G__13531;
count__13510_13515 = G__13532;
i__13511_13516 = G__13533;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__13512 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13512__delegate.call(this,elem,k,ks);};
G__13512.cljs$lang$maxFixedArity = 2;
G__13512.cljs$lang$applyTo = (function (arglist__13534){
var elem = cljs.core.first(arglist__13534);
arglist__13534 = cljs.core.next(arglist__13534);
var k = cljs.core.first(arglist__13534);
var ks = cljs.core.rest(arglist__13534);
return G__13512__delegate(elem,k,ks);
});
G__13512.cljs$core$IFn$_invoke$arity$variadic = G__13512__delegate;
return G__13512;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__13536 = dommy.template.__GT_node_like.call(null,elem);G__13536.style.display = ((show_QMARK_)?"":"none");
return G__13536;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__13538 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13538,false);
return G__13538;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__13540 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13540,true);
return G__13540;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__13542 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__13542["constructor"] = Object);
return G__13542;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
