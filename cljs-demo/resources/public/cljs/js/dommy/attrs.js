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
var G__16527 = (i + class$.length);
start_from = G__16527;
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
{var temp__4090__auto___16552 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16552))
{var class_list_16553 = temp__4090__auto___16552;var seq__16540_16554 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16541_16555 = null;var count__16542_16556 = 0;var i__16543_16557 = 0;while(true){
if((i__16543_16557 < count__16542_16556))
{var class_16558 = cljs.core._nth.call(null,chunk__16541_16555,i__16543_16557);class_list_16553.add(class_16558);
{
var G__16559 = seq__16540_16554;
var G__16560 = chunk__16541_16555;
var G__16561 = count__16542_16556;
var G__16562 = (i__16543_16557 + 1);
seq__16540_16554 = G__16559;
chunk__16541_16555 = G__16560;
count__16542_16556 = G__16561;
i__16543_16557 = G__16562;
continue;
}
} else
{var temp__4092__auto___16563 = cljs.core.seq.call(null,seq__16540_16554);if(temp__4092__auto___16563)
{var seq__16540_16564__$1 = temp__4092__auto___16563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16540_16564__$1))
{var c__4191__auto___16565 = cljs.core.chunk_first.call(null,seq__16540_16564__$1);{
var G__16566 = cljs.core.chunk_rest.call(null,seq__16540_16564__$1);
var G__16567 = c__4191__auto___16565;
var G__16568 = cljs.core.count.call(null,c__4191__auto___16565);
var G__16569 = 0;
seq__16540_16554 = G__16566;
chunk__16541_16555 = G__16567;
count__16542_16556 = G__16568;
i__16543_16557 = G__16569;
continue;
}
} else
{var class_16570 = cljs.core.first.call(null,seq__16540_16564__$1);class_list_16553.add(class_16570);
{
var G__16571 = cljs.core.next.call(null,seq__16540_16564__$1);
var G__16572 = null;
var G__16573 = 0;
var G__16574 = 0;
seq__16540_16554 = G__16571;
chunk__16541_16555 = G__16572;
count__16542_16556 = G__16573;
i__16543_16557 = G__16574;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16575 = elem__$1.className;var seq__16544_16576 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16545_16577 = null;var count__16546_16578 = 0;var i__16547_16579 = 0;while(true){
if((i__16547_16579 < count__16546_16578))
{var class_16580 = cljs.core._nth.call(null,chunk__16545_16577,i__16547_16579);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16575,class_16580)))
{} else
{elem__$1.className = (((class_name_16575 === ""))?class_16580:[cljs.core.str(class_name_16575),cljs.core.str(" "),cljs.core.str(class_16580)].join(''));
}
{
var G__16581 = seq__16544_16576;
var G__16582 = chunk__16545_16577;
var G__16583 = count__16546_16578;
var G__16584 = (i__16547_16579 + 1);
seq__16544_16576 = G__16581;
chunk__16545_16577 = G__16582;
count__16546_16578 = G__16583;
i__16547_16579 = G__16584;
continue;
}
} else
{var temp__4092__auto___16585 = cljs.core.seq.call(null,seq__16544_16576);if(temp__4092__auto___16585)
{var seq__16544_16586__$1 = temp__4092__auto___16585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16544_16586__$1))
{var c__4191__auto___16587 = cljs.core.chunk_first.call(null,seq__16544_16586__$1);{
var G__16588 = cljs.core.chunk_rest.call(null,seq__16544_16586__$1);
var G__16589 = c__4191__auto___16587;
var G__16590 = cljs.core.count.call(null,c__4191__auto___16587);
var G__16591 = 0;
seq__16544_16576 = G__16588;
chunk__16545_16577 = G__16589;
count__16546_16578 = G__16590;
i__16547_16579 = G__16591;
continue;
}
} else
{var class_16592 = cljs.core.first.call(null,seq__16544_16586__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16575,class_16592)))
{} else
{elem__$1.className = (((class_name_16575 === ""))?class_16592:[cljs.core.str(class_name_16575),cljs.core.str(" "),cljs.core.str(class_16592)].join(''));
}
{
var G__16593 = cljs.core.next.call(null,seq__16544_16586__$1);
var G__16594 = null;
var G__16595 = 0;
var G__16596 = 0;
seq__16544_16576 = G__16593;
chunk__16545_16577 = G__16594;
count__16546_16578 = G__16595;
i__16547_16579 = G__16596;
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
var G__16597__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16548_16598 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16549_16599 = null;var count__16550_16600 = 0;var i__16551_16601 = 0;while(true){
if((i__16551_16601 < count__16550_16600))
{var c_16602 = cljs.core._nth.call(null,chunk__16549_16599,i__16551_16601);add_class_BANG_.call(null,elem__$1,c_16602);
{
var G__16603 = seq__16548_16598;
var G__16604 = chunk__16549_16599;
var G__16605 = count__16550_16600;
var G__16606 = (i__16551_16601 + 1);
seq__16548_16598 = G__16603;
chunk__16549_16599 = G__16604;
count__16550_16600 = G__16605;
i__16551_16601 = G__16606;
continue;
}
} else
{var temp__4092__auto___16607 = cljs.core.seq.call(null,seq__16548_16598);if(temp__4092__auto___16607)
{var seq__16548_16608__$1 = temp__4092__auto___16607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16548_16608__$1))
{var c__4191__auto___16609 = cljs.core.chunk_first.call(null,seq__16548_16608__$1);{
var G__16610 = cljs.core.chunk_rest.call(null,seq__16548_16608__$1);
var G__16611 = c__4191__auto___16609;
var G__16612 = cljs.core.count.call(null,c__4191__auto___16609);
var G__16613 = 0;
seq__16548_16598 = G__16610;
chunk__16549_16599 = G__16611;
count__16550_16600 = G__16612;
i__16551_16601 = G__16613;
continue;
}
} else
{var c_16614 = cljs.core.first.call(null,seq__16548_16608__$1);add_class_BANG_.call(null,elem__$1,c_16614);
{
var G__16615 = cljs.core.next.call(null,seq__16548_16608__$1);
var G__16616 = null;
var G__16617 = 0;
var G__16618 = 0;
seq__16548_16598 = G__16615;
chunk__16549_16599 = G__16616;
count__16550_16600 = G__16617;
i__16551_16601 = G__16618;
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
var G__16597 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16597__delegate.call(this,elem,classes,more_classes);};
G__16597.cljs$lang$maxFixedArity = 2;
G__16597.cljs$lang$applyTo = (function (arglist__16619){
var elem = cljs.core.first(arglist__16619);
arglist__16619 = cljs.core.next(arglist__16619);
var classes = cljs.core.first(arglist__16619);
var more_classes = cljs.core.rest(arglist__16619);
return G__16597__delegate(elem,classes,more_classes);
});
G__16597.cljs$core$IFn$_invoke$arity$variadic = G__16597__delegate;
return G__16597;
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
var G__16620 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16620;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16629 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16629))
{var class_list_16630 = temp__4090__auto___16629;class_list_16630.remove(class$__$1);
} else
{var class_name_16631 = elem__$1.className;var new_class_name_16632 = dommy.attrs.remove_class_str.call(null,class_name_16631,class$__$1);if((class_name_16631 === new_class_name_16632))
{} else
{elem__$1.className = new_class_name_16632;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16633__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16625 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16626 = null;var count__16627 = 0;var i__16628 = 0;while(true){
if((i__16628 < count__16627))
{var c = cljs.core._nth.call(null,chunk__16626,i__16628);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16634 = seq__16625;
var G__16635 = chunk__16626;
var G__16636 = count__16627;
var G__16637 = (i__16628 + 1);
seq__16625 = G__16634;
chunk__16626 = G__16635;
count__16627 = G__16636;
i__16628 = G__16637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16625);if(temp__4092__auto__)
{var seq__16625__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16625__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16625__$1);{
var G__16638 = cljs.core.chunk_rest.call(null,seq__16625__$1);
var G__16639 = c__4191__auto__;
var G__16640 = cljs.core.count.call(null,c__4191__auto__);
var G__16641 = 0;
seq__16625 = G__16638;
chunk__16626 = G__16639;
count__16627 = G__16640;
i__16628 = G__16641;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16625__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16642 = cljs.core.next.call(null,seq__16625__$1);
var G__16643 = null;
var G__16644 = 0;
var G__16645 = 0;
seq__16625 = G__16642;
chunk__16626 = G__16643;
count__16627 = G__16644;
i__16628 = G__16645;
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
var G__16633 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16633__delegate.call(this,elem,class$,classes);};
G__16633.cljs$lang$maxFixedArity = 2;
G__16633.cljs$lang$applyTo = (function (arglist__16646){
var elem = cljs.core.first(arglist__16646);
arglist__16646 = cljs.core.next(arglist__16646);
var class$ = cljs.core.first(arglist__16646);
var classes = cljs.core.rest(arglist__16646);
return G__16633__delegate(elem,class$,classes);
});
G__16633.cljs$core$IFn$_invoke$arity$variadic = G__16633__delegate;
return G__16633;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16647 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16647))
{var class_list_16648 = temp__4090__auto___16647;class_list_16648.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16651){var vec__16652 = p__16651;var k = cljs.core.nth.call(null,vec__16652,0,null);var v = cljs.core.nth.call(null,vec__16652,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16659_16665 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16660_16666 = null;var count__16661_16667 = 0;var i__16662_16668 = 0;while(true){
if((i__16662_16668 < count__16661_16667))
{var vec__16663_16669 = cljs.core._nth.call(null,chunk__16660_16666,i__16662_16668);var k_16670 = cljs.core.nth.call(null,vec__16663_16669,0,null);var v_16671 = cljs.core.nth.call(null,vec__16663_16669,1,null);(style[cljs.core.name.call(null,k_16670)] = v_16671);
{
var G__16672 = seq__16659_16665;
var G__16673 = chunk__16660_16666;
var G__16674 = count__16661_16667;
var G__16675 = (i__16662_16668 + 1);
seq__16659_16665 = G__16672;
chunk__16660_16666 = G__16673;
count__16661_16667 = G__16674;
i__16662_16668 = G__16675;
continue;
}
} else
{var temp__4092__auto___16676 = cljs.core.seq.call(null,seq__16659_16665);if(temp__4092__auto___16676)
{var seq__16659_16677__$1 = temp__4092__auto___16676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659_16677__$1))
{var c__4191__auto___16678 = cljs.core.chunk_first.call(null,seq__16659_16677__$1);{
var G__16679 = cljs.core.chunk_rest.call(null,seq__16659_16677__$1);
var G__16680 = c__4191__auto___16678;
var G__16681 = cljs.core.count.call(null,c__4191__auto___16678);
var G__16682 = 0;
seq__16659_16665 = G__16679;
chunk__16660_16666 = G__16680;
count__16661_16667 = G__16681;
i__16662_16668 = G__16682;
continue;
}
} else
{var vec__16664_16683 = cljs.core.first.call(null,seq__16659_16677__$1);var k_16684 = cljs.core.nth.call(null,vec__16664_16683,0,null);var v_16685 = cljs.core.nth.call(null,vec__16664_16683,1,null);(style[cljs.core.name.call(null,k_16684)] = v_16685);
{
var G__16686 = cljs.core.next.call(null,seq__16659_16677__$1);
var G__16687 = null;
var G__16688 = 0;
var G__16689 = 0;
seq__16659_16665 = G__16686;
chunk__16660_16666 = G__16687;
count__16661_16667 = G__16688;
i__16662_16668 = G__16689;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16690){
var elem = cljs.core.first(arglist__16690);
var kvs = cljs.core.rest(arglist__16690);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16697_16703 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16698_16704 = null;var count__16699_16705 = 0;var i__16700_16706 = 0;while(true){
if((i__16700_16706 < count__16699_16705))
{var vec__16701_16707 = cljs.core._nth.call(null,chunk__16698_16704,i__16700_16706);var k_16708 = cljs.core.nth.call(null,vec__16701_16707,0,null);var v_16709 = cljs.core.nth.call(null,vec__16701_16707,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16708,[cljs.core.str(v_16709),cljs.core.str("px")].join(''));
{
var G__16710 = seq__16697_16703;
var G__16711 = chunk__16698_16704;
var G__16712 = count__16699_16705;
var G__16713 = (i__16700_16706 + 1);
seq__16697_16703 = G__16710;
chunk__16698_16704 = G__16711;
count__16699_16705 = G__16712;
i__16700_16706 = G__16713;
continue;
}
} else
{var temp__4092__auto___16714 = cljs.core.seq.call(null,seq__16697_16703);if(temp__4092__auto___16714)
{var seq__16697_16715__$1 = temp__4092__auto___16714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16697_16715__$1))
{var c__4191__auto___16716 = cljs.core.chunk_first.call(null,seq__16697_16715__$1);{
var G__16717 = cljs.core.chunk_rest.call(null,seq__16697_16715__$1);
var G__16718 = c__4191__auto___16716;
var G__16719 = cljs.core.count.call(null,c__4191__auto___16716);
var G__16720 = 0;
seq__16697_16703 = G__16717;
chunk__16698_16704 = G__16718;
count__16699_16705 = G__16719;
i__16700_16706 = G__16720;
continue;
}
} else
{var vec__16702_16721 = cljs.core.first.call(null,seq__16697_16715__$1);var k_16722 = cljs.core.nth.call(null,vec__16702_16721,0,null);var v_16723 = cljs.core.nth.call(null,vec__16702_16721,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16722,[cljs.core.str(v_16723),cljs.core.str("px")].join(''));
{
var G__16724 = cljs.core.next.call(null,seq__16697_16715__$1);
var G__16725 = null;
var G__16726 = 0;
var G__16727 = 0;
seq__16697_16703 = G__16724;
chunk__16698_16704 = G__16725;
count__16699_16705 = G__16726;
i__16700_16706 = G__16727;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16728){
var elem = cljs.core.first(arglist__16728);
var kvs = cljs.core.rest(arglist__16728);
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
{var G__16737 = dommy.template.__GT_node_like.call(null,elem);(G__16737[cljs.core.name.call(null,k)] = v);
return G__16737;
} else
{var G__16738 = dommy.template.__GT_node_like.call(null,elem);G__16738.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16738;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16745__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16739_16746 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__16740_16747 = null;var count__16741_16748 = 0;var i__16742_16749 = 0;while(true){
if((i__16742_16749 < count__16741_16748))
{var vec__16743_16750 = cljs.core._nth.call(null,chunk__16740_16747,i__16742_16749);var k_16751__$1 = cljs.core.nth.call(null,vec__16743_16750,0,null);var v_16752__$1 = cljs.core.nth.call(null,vec__16743_16750,1,null);set_attr_BANG_.call(null,elem__$1,k_16751__$1,v_16752__$1);
{
var G__16753 = seq__16739_16746;
var G__16754 = chunk__16740_16747;
var G__16755 = count__16741_16748;
var G__16756 = (i__16742_16749 + 1);
seq__16739_16746 = G__16753;
chunk__16740_16747 = G__16754;
count__16741_16748 = G__16755;
i__16742_16749 = G__16756;
continue;
}
} else
{var temp__4092__auto___16757 = cljs.core.seq.call(null,seq__16739_16746);if(temp__4092__auto___16757)
{var seq__16739_16758__$1 = temp__4092__auto___16757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16739_16758__$1))
{var c__4191__auto___16759 = cljs.core.chunk_first.call(null,seq__16739_16758__$1);{
var G__16760 = cljs.core.chunk_rest.call(null,seq__16739_16758__$1);
var G__16761 = c__4191__auto___16759;
var G__16762 = cljs.core.count.call(null,c__4191__auto___16759);
var G__16763 = 0;
seq__16739_16746 = G__16760;
chunk__16740_16747 = G__16761;
count__16741_16748 = G__16762;
i__16742_16749 = G__16763;
continue;
}
} else
{var vec__16744_16764 = cljs.core.first.call(null,seq__16739_16758__$1);var k_16765__$1 = cljs.core.nth.call(null,vec__16744_16764,0,null);var v_16766__$1 = cljs.core.nth.call(null,vec__16744_16764,1,null);set_attr_BANG_.call(null,elem__$1,k_16765__$1,v_16766__$1);
{
var G__16767 = cljs.core.next.call(null,seq__16739_16758__$1);
var G__16768 = null;
var G__16769 = 0;
var G__16770 = 0;
seq__16739_16746 = G__16767;
chunk__16740_16747 = G__16768;
count__16741_16748 = G__16769;
i__16742_16749 = G__16770;
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
var G__16745 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16745__delegate.call(this,elem,k,v,kvs);};
G__16745.cljs$lang$maxFixedArity = 3;
G__16745.cljs$lang$applyTo = (function (arglist__16771){
var elem = cljs.core.first(arglist__16771);
arglist__16771 = cljs.core.next(arglist__16771);
var k = cljs.core.first(arglist__16771);
arglist__16771 = cljs.core.next(arglist__16771);
var v = cljs.core.first(arglist__16771);
var kvs = cljs.core.rest(arglist__16771);
return G__16745__delegate(elem,k,v,kvs);
});
G__16745.cljs$core$IFn$_invoke$arity$variadic = G__16745__delegate;
return G__16745;
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
var G__16780__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16776_16781 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16777_16782 = null;var count__16778_16783 = 0;var i__16779_16784 = 0;while(true){
if((i__16779_16784 < count__16778_16783))
{var k_16785__$1 = cljs.core._nth.call(null,chunk__16777_16782,i__16779_16784);remove_attr_BANG_.call(null,elem__$1,k_16785__$1);
{
var G__16786 = seq__16776_16781;
var G__16787 = chunk__16777_16782;
var G__16788 = count__16778_16783;
var G__16789 = (i__16779_16784 + 1);
seq__16776_16781 = G__16786;
chunk__16777_16782 = G__16787;
count__16778_16783 = G__16788;
i__16779_16784 = G__16789;
continue;
}
} else
{var temp__4092__auto___16790 = cljs.core.seq.call(null,seq__16776_16781);if(temp__4092__auto___16790)
{var seq__16776_16791__$1 = temp__4092__auto___16790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16776_16791__$1))
{var c__4191__auto___16792 = cljs.core.chunk_first.call(null,seq__16776_16791__$1);{
var G__16793 = cljs.core.chunk_rest.call(null,seq__16776_16791__$1);
var G__16794 = c__4191__auto___16792;
var G__16795 = cljs.core.count.call(null,c__4191__auto___16792);
var G__16796 = 0;
seq__16776_16781 = G__16793;
chunk__16777_16782 = G__16794;
count__16778_16783 = G__16795;
i__16779_16784 = G__16796;
continue;
}
} else
{var k_16797__$1 = cljs.core.first.call(null,seq__16776_16791__$1);remove_attr_BANG_.call(null,elem__$1,k_16797__$1);
{
var G__16798 = cljs.core.next.call(null,seq__16776_16791__$1);
var G__16799 = null;
var G__16800 = 0;
var G__16801 = 0;
seq__16776_16781 = G__16798;
chunk__16777_16782 = G__16799;
count__16778_16783 = G__16800;
i__16779_16784 = G__16801;
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
var G__16780 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16780__delegate.call(this,elem,k,ks);};
G__16780.cljs$lang$maxFixedArity = 2;
G__16780.cljs$lang$applyTo = (function (arglist__16802){
var elem = cljs.core.first(arglist__16802);
arglist__16802 = cljs.core.next(arglist__16802);
var k = cljs.core.first(arglist__16802);
var ks = cljs.core.rest(arglist__16802);
return G__16780__delegate(elem,k,ks);
});
G__16780.cljs$core$IFn$_invoke$arity$variadic = G__16780__delegate;
return G__16780;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16804 = dommy.template.__GT_node_like.call(null,elem);G__16804.style.display = ((show_QMARK_)?"":"none");
return G__16804;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16806 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16806,false);
return G__16806;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16808 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16808,true);
return G__16808;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16810 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16810["constructor"] = Object);
return G__16810;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
