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
var G__13282 = (i + class$.length);
start_from = G__13282;
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
{var temp__4090__auto___13307 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13307))
{var class_list_13308 = temp__4090__auto___13307;var seq__13295_13309 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13296_13310 = null;var count__13297_13311 = 0;var i__13298_13312 = 0;while(true){
if((i__13298_13312 < count__13297_13311))
{var class_13313 = cljs.core._nth.call(null,chunk__13296_13310,i__13298_13312);class_list_13308.add(class_13313);
{
var G__13314 = seq__13295_13309;
var G__13315 = chunk__13296_13310;
var G__13316 = count__13297_13311;
var G__13317 = (i__13298_13312 + 1);
seq__13295_13309 = G__13314;
chunk__13296_13310 = G__13315;
count__13297_13311 = G__13316;
i__13298_13312 = G__13317;
continue;
}
} else
{var temp__4092__auto___13318 = cljs.core.seq.call(null,seq__13295_13309);if(temp__4092__auto___13318)
{var seq__13295_13319__$1 = temp__4092__auto___13318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13295_13319__$1))
{var c__4191__auto___13320 = cljs.core.chunk_first.call(null,seq__13295_13319__$1);{
var G__13321 = cljs.core.chunk_rest.call(null,seq__13295_13319__$1);
var G__13322 = c__4191__auto___13320;
var G__13323 = cljs.core.count.call(null,c__4191__auto___13320);
var G__13324 = 0;
seq__13295_13309 = G__13321;
chunk__13296_13310 = G__13322;
count__13297_13311 = G__13323;
i__13298_13312 = G__13324;
continue;
}
} else
{var class_13325 = cljs.core.first.call(null,seq__13295_13319__$1);class_list_13308.add(class_13325);
{
var G__13326 = cljs.core.next.call(null,seq__13295_13319__$1);
var G__13327 = null;
var G__13328 = 0;
var G__13329 = 0;
seq__13295_13309 = G__13326;
chunk__13296_13310 = G__13327;
count__13297_13311 = G__13328;
i__13298_13312 = G__13329;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_13330 = elem__$1.className;var seq__13299_13331 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13300_13332 = null;var count__13301_13333 = 0;var i__13302_13334 = 0;while(true){
if((i__13302_13334 < count__13301_13333))
{var class_13335 = cljs.core._nth.call(null,chunk__13300_13332,i__13302_13334);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13330,class_13335)))
{} else
{elem__$1.className = (((class_name_13330 === ""))?class_13335:[cljs.core.str(class_name_13330),cljs.core.str(" "),cljs.core.str(class_13335)].join(''));
}
{
var G__13336 = seq__13299_13331;
var G__13337 = chunk__13300_13332;
var G__13338 = count__13301_13333;
var G__13339 = (i__13302_13334 + 1);
seq__13299_13331 = G__13336;
chunk__13300_13332 = G__13337;
count__13301_13333 = G__13338;
i__13302_13334 = G__13339;
continue;
}
} else
{var temp__4092__auto___13340 = cljs.core.seq.call(null,seq__13299_13331);if(temp__4092__auto___13340)
{var seq__13299_13341__$1 = temp__4092__auto___13340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13299_13341__$1))
{var c__4191__auto___13342 = cljs.core.chunk_first.call(null,seq__13299_13341__$1);{
var G__13343 = cljs.core.chunk_rest.call(null,seq__13299_13341__$1);
var G__13344 = c__4191__auto___13342;
var G__13345 = cljs.core.count.call(null,c__4191__auto___13342);
var G__13346 = 0;
seq__13299_13331 = G__13343;
chunk__13300_13332 = G__13344;
count__13301_13333 = G__13345;
i__13302_13334 = G__13346;
continue;
}
} else
{var class_13347 = cljs.core.first.call(null,seq__13299_13341__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13330,class_13347)))
{} else
{elem__$1.className = (((class_name_13330 === ""))?class_13347:[cljs.core.str(class_name_13330),cljs.core.str(" "),cljs.core.str(class_13347)].join(''));
}
{
var G__13348 = cljs.core.next.call(null,seq__13299_13341__$1);
var G__13349 = null;
var G__13350 = 0;
var G__13351 = 0;
seq__13299_13331 = G__13348;
chunk__13300_13332 = G__13349;
count__13301_13333 = G__13350;
i__13302_13334 = G__13351;
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
var G__13352__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13303_13353 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__13304_13354 = null;var count__13305_13355 = 0;var i__13306_13356 = 0;while(true){
if((i__13306_13356 < count__13305_13355))
{var c_13357 = cljs.core._nth.call(null,chunk__13304_13354,i__13306_13356);add_class_BANG_.call(null,elem__$1,c_13357);
{
var G__13358 = seq__13303_13353;
var G__13359 = chunk__13304_13354;
var G__13360 = count__13305_13355;
var G__13361 = (i__13306_13356 + 1);
seq__13303_13353 = G__13358;
chunk__13304_13354 = G__13359;
count__13305_13355 = G__13360;
i__13306_13356 = G__13361;
continue;
}
} else
{var temp__4092__auto___13362 = cljs.core.seq.call(null,seq__13303_13353);if(temp__4092__auto___13362)
{var seq__13303_13363__$1 = temp__4092__auto___13362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13303_13363__$1))
{var c__4191__auto___13364 = cljs.core.chunk_first.call(null,seq__13303_13363__$1);{
var G__13365 = cljs.core.chunk_rest.call(null,seq__13303_13363__$1);
var G__13366 = c__4191__auto___13364;
var G__13367 = cljs.core.count.call(null,c__4191__auto___13364);
var G__13368 = 0;
seq__13303_13353 = G__13365;
chunk__13304_13354 = G__13366;
count__13305_13355 = G__13367;
i__13306_13356 = G__13368;
continue;
}
} else
{var c_13369 = cljs.core.first.call(null,seq__13303_13363__$1);add_class_BANG_.call(null,elem__$1,c_13369);
{
var G__13370 = cljs.core.next.call(null,seq__13303_13363__$1);
var G__13371 = null;
var G__13372 = 0;
var G__13373 = 0;
seq__13303_13353 = G__13370;
chunk__13304_13354 = G__13371;
count__13305_13355 = G__13372;
i__13306_13356 = G__13373;
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
var G__13352 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13352__delegate.call(this,elem,classes,more_classes);};
G__13352.cljs$lang$maxFixedArity = 2;
G__13352.cljs$lang$applyTo = (function (arglist__13374){
var elem = cljs.core.first(arglist__13374);
arglist__13374 = cljs.core.next(arglist__13374);
var classes = cljs.core.first(arglist__13374);
var more_classes = cljs.core.rest(arglist__13374);
return G__13352__delegate(elem,classes,more_classes);
});
G__13352.cljs$core$IFn$_invoke$arity$variadic = G__13352__delegate;
return G__13352;
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
var G__13375 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__13375;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13384 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13384))
{var class_list_13385 = temp__4090__auto___13384;class_list_13385.remove(class$__$1);
} else
{var class_name_13386 = elem__$1.className;var new_class_name_13387 = dommy.attrs.remove_class_str.call(null,class_name_13386,class$__$1);if((class_name_13386 === new_class_name_13387))
{} else
{elem__$1.className = new_class_name_13387;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__13388__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13380 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13381 = null;var count__13382 = 0;var i__13383 = 0;while(true){
if((i__13383 < count__13382))
{var c = cljs.core._nth.call(null,chunk__13381,i__13383);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13389 = seq__13380;
var G__13390 = chunk__13381;
var G__13391 = count__13382;
var G__13392 = (i__13383 + 1);
seq__13380 = G__13389;
chunk__13381 = G__13390;
count__13382 = G__13391;
i__13383 = G__13392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13380);if(temp__4092__auto__)
{var seq__13380__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13380__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13380__$1);{
var G__13393 = cljs.core.chunk_rest.call(null,seq__13380__$1);
var G__13394 = c__4191__auto__;
var G__13395 = cljs.core.count.call(null,c__4191__auto__);
var G__13396 = 0;
seq__13380 = G__13393;
chunk__13381 = G__13394;
count__13382 = G__13395;
i__13383 = G__13396;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13380__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13397 = cljs.core.next.call(null,seq__13380__$1);
var G__13398 = null;
var G__13399 = 0;
var G__13400 = 0;
seq__13380 = G__13397;
chunk__13381 = G__13398;
count__13382 = G__13399;
i__13383 = G__13400;
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
var G__13388 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13388__delegate.call(this,elem,class$,classes);};
G__13388.cljs$lang$maxFixedArity = 2;
G__13388.cljs$lang$applyTo = (function (arglist__13401){
var elem = cljs.core.first(arglist__13401);
arglist__13401 = cljs.core.next(arglist__13401);
var class$ = cljs.core.first(arglist__13401);
var classes = cljs.core.rest(arglist__13401);
return G__13388__delegate(elem,class$,classes);
});
G__13388.cljs$core$IFn$_invoke$arity$variadic = G__13388__delegate;
return G__13388;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13402 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13402))
{var class_list_13403 = temp__4090__auto___13402;class_list_13403.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__13406){var vec__13407 = p__13406;var k = cljs.core.nth.call(null,vec__13407,0,null);var v = cljs.core.nth.call(null,vec__13407,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__13414_13420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13415_13421 = null;var count__13416_13422 = 0;var i__13417_13423 = 0;while(true){
if((i__13417_13423 < count__13416_13422))
{var vec__13418_13424 = cljs.core._nth.call(null,chunk__13415_13421,i__13417_13423);var k_13425 = cljs.core.nth.call(null,vec__13418_13424,0,null);var v_13426 = cljs.core.nth.call(null,vec__13418_13424,1,null);(style[cljs.core.name.call(null,k_13425)] = v_13426);
{
var G__13427 = seq__13414_13420;
var G__13428 = chunk__13415_13421;
var G__13429 = count__13416_13422;
var G__13430 = (i__13417_13423 + 1);
seq__13414_13420 = G__13427;
chunk__13415_13421 = G__13428;
count__13416_13422 = G__13429;
i__13417_13423 = G__13430;
continue;
}
} else
{var temp__4092__auto___13431 = cljs.core.seq.call(null,seq__13414_13420);if(temp__4092__auto___13431)
{var seq__13414_13432__$1 = temp__4092__auto___13431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13414_13432__$1))
{var c__4191__auto___13433 = cljs.core.chunk_first.call(null,seq__13414_13432__$1);{
var G__13434 = cljs.core.chunk_rest.call(null,seq__13414_13432__$1);
var G__13435 = c__4191__auto___13433;
var G__13436 = cljs.core.count.call(null,c__4191__auto___13433);
var G__13437 = 0;
seq__13414_13420 = G__13434;
chunk__13415_13421 = G__13435;
count__13416_13422 = G__13436;
i__13417_13423 = G__13437;
continue;
}
} else
{var vec__13419_13438 = cljs.core.first.call(null,seq__13414_13432__$1);var k_13439 = cljs.core.nth.call(null,vec__13419_13438,0,null);var v_13440 = cljs.core.nth.call(null,vec__13419_13438,1,null);(style[cljs.core.name.call(null,k_13439)] = v_13440);
{
var G__13441 = cljs.core.next.call(null,seq__13414_13432__$1);
var G__13442 = null;
var G__13443 = 0;
var G__13444 = 0;
seq__13414_13420 = G__13441;
chunk__13415_13421 = G__13442;
count__13416_13422 = G__13443;
i__13417_13423 = G__13444;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13445){
var elem = cljs.core.first(arglist__13445);
var kvs = cljs.core.rest(arglist__13445);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13452_13458 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13453_13459 = null;var count__13454_13460 = 0;var i__13455_13461 = 0;while(true){
if((i__13455_13461 < count__13454_13460))
{var vec__13456_13462 = cljs.core._nth.call(null,chunk__13453_13459,i__13455_13461);var k_13463 = cljs.core.nth.call(null,vec__13456_13462,0,null);var v_13464 = cljs.core.nth.call(null,vec__13456_13462,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13463,[cljs.core.str(v_13464),cljs.core.str("px")].join(''));
{
var G__13465 = seq__13452_13458;
var G__13466 = chunk__13453_13459;
var G__13467 = count__13454_13460;
var G__13468 = (i__13455_13461 + 1);
seq__13452_13458 = G__13465;
chunk__13453_13459 = G__13466;
count__13454_13460 = G__13467;
i__13455_13461 = G__13468;
continue;
}
} else
{var temp__4092__auto___13469 = cljs.core.seq.call(null,seq__13452_13458);if(temp__4092__auto___13469)
{var seq__13452_13470__$1 = temp__4092__auto___13469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13452_13470__$1))
{var c__4191__auto___13471 = cljs.core.chunk_first.call(null,seq__13452_13470__$1);{
var G__13472 = cljs.core.chunk_rest.call(null,seq__13452_13470__$1);
var G__13473 = c__4191__auto___13471;
var G__13474 = cljs.core.count.call(null,c__4191__auto___13471);
var G__13475 = 0;
seq__13452_13458 = G__13472;
chunk__13453_13459 = G__13473;
count__13454_13460 = G__13474;
i__13455_13461 = G__13475;
continue;
}
} else
{var vec__13457_13476 = cljs.core.first.call(null,seq__13452_13470__$1);var k_13477 = cljs.core.nth.call(null,vec__13457_13476,0,null);var v_13478 = cljs.core.nth.call(null,vec__13457_13476,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13477,[cljs.core.str(v_13478),cljs.core.str("px")].join(''));
{
var G__13479 = cljs.core.next.call(null,seq__13452_13470__$1);
var G__13480 = null;
var G__13481 = 0;
var G__13482 = 0;
seq__13452_13458 = G__13479;
chunk__13453_13459 = G__13480;
count__13454_13460 = G__13481;
i__13455_13461 = G__13482;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13483){
var elem = cljs.core.first(arglist__13483);
var kvs = cljs.core.rest(arglist__13483);
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
{var G__13492 = dommy.template.__GT_node_like.call(null,elem);(G__13492[cljs.core.name.call(null,k)] = v);
return G__13492;
} else
{var G__13493 = dommy.template.__GT_node_like.call(null,elem);G__13493.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__13493;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13500__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13494_13501 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__13495_13502 = null;var count__13496_13503 = 0;var i__13497_13504 = 0;while(true){
if((i__13497_13504 < count__13496_13503))
{var vec__13498_13505 = cljs.core._nth.call(null,chunk__13495_13502,i__13497_13504);var k_13506__$1 = cljs.core.nth.call(null,vec__13498_13505,0,null);var v_13507__$1 = cljs.core.nth.call(null,vec__13498_13505,1,null);set_attr_BANG_.call(null,elem__$1,k_13506__$1,v_13507__$1);
{
var G__13508 = seq__13494_13501;
var G__13509 = chunk__13495_13502;
var G__13510 = count__13496_13503;
var G__13511 = (i__13497_13504 + 1);
seq__13494_13501 = G__13508;
chunk__13495_13502 = G__13509;
count__13496_13503 = G__13510;
i__13497_13504 = G__13511;
continue;
}
} else
{var temp__4092__auto___13512 = cljs.core.seq.call(null,seq__13494_13501);if(temp__4092__auto___13512)
{var seq__13494_13513__$1 = temp__4092__auto___13512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13494_13513__$1))
{var c__4191__auto___13514 = cljs.core.chunk_first.call(null,seq__13494_13513__$1);{
var G__13515 = cljs.core.chunk_rest.call(null,seq__13494_13513__$1);
var G__13516 = c__4191__auto___13514;
var G__13517 = cljs.core.count.call(null,c__4191__auto___13514);
var G__13518 = 0;
seq__13494_13501 = G__13515;
chunk__13495_13502 = G__13516;
count__13496_13503 = G__13517;
i__13497_13504 = G__13518;
continue;
}
} else
{var vec__13499_13519 = cljs.core.first.call(null,seq__13494_13513__$1);var k_13520__$1 = cljs.core.nth.call(null,vec__13499_13519,0,null);var v_13521__$1 = cljs.core.nth.call(null,vec__13499_13519,1,null);set_attr_BANG_.call(null,elem__$1,k_13520__$1,v_13521__$1);
{
var G__13522 = cljs.core.next.call(null,seq__13494_13513__$1);
var G__13523 = null;
var G__13524 = 0;
var G__13525 = 0;
seq__13494_13501 = G__13522;
chunk__13495_13502 = G__13523;
count__13496_13503 = G__13524;
i__13497_13504 = G__13525;
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
var G__13500 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13500__delegate.call(this,elem,k,v,kvs);};
G__13500.cljs$lang$maxFixedArity = 3;
G__13500.cljs$lang$applyTo = (function (arglist__13526){
var elem = cljs.core.first(arglist__13526);
arglist__13526 = cljs.core.next(arglist__13526);
var k = cljs.core.first(arglist__13526);
arglist__13526 = cljs.core.next(arglist__13526);
var v = cljs.core.first(arglist__13526);
var kvs = cljs.core.rest(arglist__13526);
return G__13500__delegate(elem,k,v,kvs);
});
G__13500.cljs$core$IFn$_invoke$arity$variadic = G__13500__delegate;
return G__13500;
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
var G__13535__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13531_13536 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13532_13537 = null;var count__13533_13538 = 0;var i__13534_13539 = 0;while(true){
if((i__13534_13539 < count__13533_13538))
{var k_13540__$1 = cljs.core._nth.call(null,chunk__13532_13537,i__13534_13539);remove_attr_BANG_.call(null,elem__$1,k_13540__$1);
{
var G__13541 = seq__13531_13536;
var G__13542 = chunk__13532_13537;
var G__13543 = count__13533_13538;
var G__13544 = (i__13534_13539 + 1);
seq__13531_13536 = G__13541;
chunk__13532_13537 = G__13542;
count__13533_13538 = G__13543;
i__13534_13539 = G__13544;
continue;
}
} else
{var temp__4092__auto___13545 = cljs.core.seq.call(null,seq__13531_13536);if(temp__4092__auto___13545)
{var seq__13531_13546__$1 = temp__4092__auto___13545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13531_13546__$1))
{var c__4191__auto___13547 = cljs.core.chunk_first.call(null,seq__13531_13546__$1);{
var G__13548 = cljs.core.chunk_rest.call(null,seq__13531_13546__$1);
var G__13549 = c__4191__auto___13547;
var G__13550 = cljs.core.count.call(null,c__4191__auto___13547);
var G__13551 = 0;
seq__13531_13536 = G__13548;
chunk__13532_13537 = G__13549;
count__13533_13538 = G__13550;
i__13534_13539 = G__13551;
continue;
}
} else
{var k_13552__$1 = cljs.core.first.call(null,seq__13531_13546__$1);remove_attr_BANG_.call(null,elem__$1,k_13552__$1);
{
var G__13553 = cljs.core.next.call(null,seq__13531_13546__$1);
var G__13554 = null;
var G__13555 = 0;
var G__13556 = 0;
seq__13531_13536 = G__13553;
chunk__13532_13537 = G__13554;
count__13533_13538 = G__13555;
i__13534_13539 = G__13556;
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
var G__13535 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13535__delegate.call(this,elem,k,ks);};
G__13535.cljs$lang$maxFixedArity = 2;
G__13535.cljs$lang$applyTo = (function (arglist__13557){
var elem = cljs.core.first(arglist__13557);
arglist__13557 = cljs.core.next(arglist__13557);
var k = cljs.core.first(arglist__13557);
var ks = cljs.core.rest(arglist__13557);
return G__13535__delegate(elem,k,ks);
});
G__13535.cljs$core$IFn$_invoke$arity$variadic = G__13535__delegate;
return G__13535;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__13559 = dommy.template.__GT_node_like.call(null,elem);G__13559.style.display = ((show_QMARK_)?"":"none");
return G__13559;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__13561 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13561,false);
return G__13561;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__13563 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13563,true);
return G__13563;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__13565 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__13565["constructor"] = Object);
return G__13565;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
