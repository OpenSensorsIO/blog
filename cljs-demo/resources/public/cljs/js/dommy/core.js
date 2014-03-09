// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3443__auto__ = elem.textContent;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__15966 = dommy.template.__GT_node_like.call(null,parent);G__15966.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__15966;
});
var append_BANG___3 = (function() { 
var G__15971__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__15967_15972 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__15968_15973 = null;var count__15969_15974 = 0;var i__15970_15975 = 0;while(true){
if((i__15970_15975 < count__15969_15974))
{var c_15976 = cljs.core._nth.call(null,chunk__15968_15973,i__15970_15975);append_BANG_.call(null,parent__$1,c_15976);
{
var G__15977 = seq__15967_15972;
var G__15978 = chunk__15968_15973;
var G__15979 = count__15969_15974;
var G__15980 = (i__15970_15975 + 1);
seq__15967_15972 = G__15977;
chunk__15968_15973 = G__15978;
count__15969_15974 = G__15979;
i__15970_15975 = G__15980;
continue;
}
} else
{var temp__4092__auto___15981 = cljs.core.seq.call(null,seq__15967_15972);if(temp__4092__auto___15981)
{var seq__15967_15982__$1 = temp__4092__auto___15981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15967_15982__$1))
{var c__4191__auto___15983 = cljs.core.chunk_first.call(null,seq__15967_15982__$1);{
var G__15984 = cljs.core.chunk_rest.call(null,seq__15967_15982__$1);
var G__15985 = c__4191__auto___15983;
var G__15986 = cljs.core.count.call(null,c__4191__auto___15983);
var G__15987 = 0;
seq__15967_15972 = G__15984;
chunk__15968_15973 = G__15985;
count__15969_15974 = G__15986;
i__15970_15975 = G__15987;
continue;
}
} else
{var c_15988 = cljs.core.first.call(null,seq__15967_15982__$1);append_BANG_.call(null,parent__$1,c_15988);
{
var G__15989 = cljs.core.next.call(null,seq__15967_15982__$1);
var G__15990 = null;
var G__15991 = 0;
var G__15992 = 0;
seq__15967_15972 = G__15989;
chunk__15968_15973 = G__15990;
count__15969_15974 = G__15991;
i__15970_15975 = G__15992;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__15971 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15971__delegate.call(this,parent,child,more_children);};
G__15971.cljs$lang$maxFixedArity = 2;
G__15971.cljs$lang$applyTo = (function (arglist__15993){
var parent = cljs.core.first(arglist__15993);
arglist__15993 = cljs.core.next(arglist__15993);
var child = cljs.core.first(arglist__15993);
var more_children = cljs.core.rest(arglist__15993);
return G__15971__delegate(parent,child,more_children);
});
G__15971.cljs$core$IFn$_invoke$arity$variadic = G__15971__delegate;
return G__15971;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__16002__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__15998_16003 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__15999_16004 = null;var count__16000_16005 = 0;var i__16001_16006 = 0;while(true){
if((i__16001_16006 < count__16000_16005))
{var c_16007 = cljs.core._nth.call(null,chunk__15999_16004,i__16001_16006);prepend_BANG_.call(null,parent__$1,c_16007);
{
var G__16008 = seq__15998_16003;
var G__16009 = chunk__15999_16004;
var G__16010 = count__16000_16005;
var G__16011 = (i__16001_16006 + 1);
seq__15998_16003 = G__16008;
chunk__15999_16004 = G__16009;
count__16000_16005 = G__16010;
i__16001_16006 = G__16011;
continue;
}
} else
{var temp__4092__auto___16012 = cljs.core.seq.call(null,seq__15998_16003);if(temp__4092__auto___16012)
{var seq__15998_16013__$1 = temp__4092__auto___16012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15998_16013__$1))
{var c__4191__auto___16014 = cljs.core.chunk_first.call(null,seq__15998_16013__$1);{
var G__16015 = cljs.core.chunk_rest.call(null,seq__15998_16013__$1);
var G__16016 = c__4191__auto___16014;
var G__16017 = cljs.core.count.call(null,c__4191__auto___16014);
var G__16018 = 0;
seq__15998_16003 = G__16015;
chunk__15999_16004 = G__16016;
count__16000_16005 = G__16017;
i__16001_16006 = G__16018;
continue;
}
} else
{var c_16019 = cljs.core.first.call(null,seq__15998_16013__$1);prepend_BANG_.call(null,parent__$1,c_16019);
{
var G__16020 = cljs.core.next.call(null,seq__15998_16013__$1);
var G__16021 = null;
var G__16022 = 0;
var G__16023 = 0;
seq__15998_16003 = G__16020;
chunk__15999_16004 = G__16021;
count__16000_16005 = G__16022;
i__16001_16006 = G__16023;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__16002 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16002__delegate.call(this,parent,child,more_children);};
G__16002.cljs$lang$maxFixedArity = 2;
G__16002.cljs$lang$applyTo = (function (arglist__16024){
var parent = cljs.core.first(arglist__16024);
arglist__16024 = cljs.core.next(arglist__16024);
var child = cljs.core.first(arglist__16024);
var more_children = cljs.core.rest(arglist__16024);
return G__16002__delegate(parent,child,more_children);
});
G__16002.cljs$core$IFn$_invoke$arity$variadic = G__16002__delegate;
return G__16002;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16025 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16025))
{var next_16026 = temp__4090__auto___16025;parent.insertBefore(actual_node,next_16026);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16028 = dommy.template.__GT_node_like.call(null,parent);G__16028.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16028,node_like);
return G__16028;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16030 = elem__$1.parentNode;G__16030.removeChild(elem__$1);
return G__16030;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16036){var vec__16037 = p__16036;var k = cljs.core.nth.call(null,vec__16037,0,null);var v = cljs.core.nth.call(null,vec__16037,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16038 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16038 = (function (v,k,vec__16037,p__16036,container,key_selectors_map,template,selector_map,meta16039){
this.v = v;
this.k = k;
this.vec__16037 = vec__16037;
this.p__16036 = p__16036;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16039 = meta16039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16038.cljs$lang$type = true;
dommy.core.t16038.cljs$lang$ctorStr = "dommy.core/t16038";
dommy.core.t16038.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t16038");
});
dommy.core.t16038.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16040){var self__ = this;
var _16040__$1 = this;return self__.meta16039;
});
dommy.core.t16038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16040,meta16039__$1){var self__ = this;
var _16040__$1 = this;return (new dommy.core.t16038(self__.v,self__.k,self__.vec__16037,self__.p__16036,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16039__$1));
});
dommy.core.__GT_t16038 = (function __GT_t16038(v__$1,k__$1,vec__16037__$1,p__16036__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16039){return (new dommy.core.t16038(v__$1,k__$1,vec__16037__$1,p__16036__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16039));
});
}
return (new dommy.core.t16038(v,k,vec__16037,p__16036,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16041_SHARP_){return p1__16041_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16042_SHARP_){return !((p1__16042_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16043){var vec__16044 = p__16043;var special_mouse_event = cljs.core.nth.call(null,vec__16044,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16044,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = related_target;if(cljs.core.truth_(and__3431__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3431__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3431__auto__ = selected_target;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3431__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3443__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16045){
var elem = cljs.core.first(arglist__16045);
arglist__16045 = cljs.core.next(arglist__16045);
var f = cljs.core.first(arglist__16045);
var args = cljs.core.rest(arglist__16045);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16046_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16046_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16070_16093 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16094 = cljs.core.nth.call(null,vec__16070_16093,0,null);var selector_16095 = cljs.core.nth.call(null,vec__16070_16093,1,null);var seq__16071_16096 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16078_16097 = null;var count__16079_16098 = 0;var i__16080_16099 = 0;while(true){
if((i__16080_16099 < count__16079_16098))
{var vec__16087_16100 = cljs.core._nth.call(null,chunk__16078_16097,i__16080_16099);var orig_type_16101 = cljs.core.nth.call(null,vec__16087_16100,0,null);var f_16102 = cljs.core.nth.call(null,vec__16087_16100,1,null);var seq__16081_16103 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16101,new cljs.core.PersistentArrayMap.fromArray([orig_type_16101,cljs.core.identity], true, false)));var chunk__16083_16104 = null;var count__16084_16105 = 0;var i__16085_16106 = 0;while(true){
if((i__16085_16106 < count__16084_16105))
{var vec__16088_16107 = cljs.core._nth.call(null,chunk__16083_16104,i__16085_16106);var actual_type_16108 = cljs.core.nth.call(null,vec__16088_16107,0,null);var factory_16109 = cljs.core.nth.call(null,vec__16088_16107,1,null);var canonical_f_16110 = (cljs.core.truth_(selector_16095)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16094,selector_16095):cljs.core.identity).call(null,factory_16109.call(null,f_16102));dommy.core.update_event_listeners_BANG_.call(null,elem_16094,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16095,actual_type_16108,f_16102], null),canonical_f_16110);
if(cljs.core.truth_(elem_16094.addEventListener))
{elem_16094.addEventListener(cljs.core.name.call(null,actual_type_16108),canonical_f_16110);
} else
{elem_16094.attachEvent(cljs.core.name.call(null,actual_type_16108),canonical_f_16110);
}
{
var G__16111 = seq__16081_16103;
var G__16112 = chunk__16083_16104;
var G__16113 = count__16084_16105;
var G__16114 = (i__16085_16106 + 1);
seq__16081_16103 = G__16111;
chunk__16083_16104 = G__16112;
count__16084_16105 = G__16113;
i__16085_16106 = G__16114;
continue;
}
} else
{var temp__4092__auto___16115 = cljs.core.seq.call(null,seq__16081_16103);if(temp__4092__auto___16115)
{var seq__16081_16116__$1 = temp__4092__auto___16115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16081_16116__$1))
{var c__4191__auto___16117 = cljs.core.chunk_first.call(null,seq__16081_16116__$1);{
var G__16118 = cljs.core.chunk_rest.call(null,seq__16081_16116__$1);
var G__16119 = c__4191__auto___16117;
var G__16120 = cljs.core.count.call(null,c__4191__auto___16117);
var G__16121 = 0;
seq__16081_16103 = G__16118;
chunk__16083_16104 = G__16119;
count__16084_16105 = G__16120;
i__16085_16106 = G__16121;
continue;
}
} else
{var vec__16089_16122 = cljs.core.first.call(null,seq__16081_16116__$1);var actual_type_16123 = cljs.core.nth.call(null,vec__16089_16122,0,null);var factory_16124 = cljs.core.nth.call(null,vec__16089_16122,1,null);var canonical_f_16125 = (cljs.core.truth_(selector_16095)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16094,selector_16095):cljs.core.identity).call(null,factory_16124.call(null,f_16102));dommy.core.update_event_listeners_BANG_.call(null,elem_16094,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16095,actual_type_16123,f_16102], null),canonical_f_16125);
if(cljs.core.truth_(elem_16094.addEventListener))
{elem_16094.addEventListener(cljs.core.name.call(null,actual_type_16123),canonical_f_16125);
} else
{elem_16094.attachEvent(cljs.core.name.call(null,actual_type_16123),canonical_f_16125);
}
{
var G__16126 = cljs.core.next.call(null,seq__16081_16116__$1);
var G__16127 = null;
var G__16128 = 0;
var G__16129 = 0;
seq__16081_16103 = G__16126;
chunk__16083_16104 = G__16127;
count__16084_16105 = G__16128;
i__16085_16106 = G__16129;
continue;
}
}
} else
{}
}
break;
}
{
var G__16130 = seq__16071_16096;
var G__16131 = chunk__16078_16097;
var G__16132 = count__16079_16098;
var G__16133 = (i__16080_16099 + 1);
seq__16071_16096 = G__16130;
chunk__16078_16097 = G__16131;
count__16079_16098 = G__16132;
i__16080_16099 = G__16133;
continue;
}
} else
{var temp__4092__auto___16134 = cljs.core.seq.call(null,seq__16071_16096);if(temp__4092__auto___16134)
{var seq__16071_16135__$1 = temp__4092__auto___16134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16071_16135__$1))
{var c__4191__auto___16136 = cljs.core.chunk_first.call(null,seq__16071_16135__$1);{
var G__16137 = cljs.core.chunk_rest.call(null,seq__16071_16135__$1);
var G__16138 = c__4191__auto___16136;
var G__16139 = cljs.core.count.call(null,c__4191__auto___16136);
var G__16140 = 0;
seq__16071_16096 = G__16137;
chunk__16078_16097 = G__16138;
count__16079_16098 = G__16139;
i__16080_16099 = G__16140;
continue;
}
} else
{var vec__16090_16141 = cljs.core.first.call(null,seq__16071_16135__$1);var orig_type_16142 = cljs.core.nth.call(null,vec__16090_16141,0,null);var f_16143 = cljs.core.nth.call(null,vec__16090_16141,1,null);var seq__16072_16144 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16142,new cljs.core.PersistentArrayMap.fromArray([orig_type_16142,cljs.core.identity], true, false)));var chunk__16074_16145 = null;var count__16075_16146 = 0;var i__16076_16147 = 0;while(true){
if((i__16076_16147 < count__16075_16146))
{var vec__16091_16148 = cljs.core._nth.call(null,chunk__16074_16145,i__16076_16147);var actual_type_16149 = cljs.core.nth.call(null,vec__16091_16148,0,null);var factory_16150 = cljs.core.nth.call(null,vec__16091_16148,1,null);var canonical_f_16151 = (cljs.core.truth_(selector_16095)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16094,selector_16095):cljs.core.identity).call(null,factory_16150.call(null,f_16143));dommy.core.update_event_listeners_BANG_.call(null,elem_16094,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16095,actual_type_16149,f_16143], null),canonical_f_16151);
if(cljs.core.truth_(elem_16094.addEventListener))
{elem_16094.addEventListener(cljs.core.name.call(null,actual_type_16149),canonical_f_16151);
} else
{elem_16094.attachEvent(cljs.core.name.call(null,actual_type_16149),canonical_f_16151);
}
{
var G__16152 = seq__16072_16144;
var G__16153 = chunk__16074_16145;
var G__16154 = count__16075_16146;
var G__16155 = (i__16076_16147 + 1);
seq__16072_16144 = G__16152;
chunk__16074_16145 = G__16153;
count__16075_16146 = G__16154;
i__16076_16147 = G__16155;
continue;
}
} else
{var temp__4092__auto___16156__$1 = cljs.core.seq.call(null,seq__16072_16144);if(temp__4092__auto___16156__$1)
{var seq__16072_16157__$1 = temp__4092__auto___16156__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16072_16157__$1))
{var c__4191__auto___16158 = cljs.core.chunk_first.call(null,seq__16072_16157__$1);{
var G__16159 = cljs.core.chunk_rest.call(null,seq__16072_16157__$1);
var G__16160 = c__4191__auto___16158;
var G__16161 = cljs.core.count.call(null,c__4191__auto___16158);
var G__16162 = 0;
seq__16072_16144 = G__16159;
chunk__16074_16145 = G__16160;
count__16075_16146 = G__16161;
i__16076_16147 = G__16162;
continue;
}
} else
{var vec__16092_16163 = cljs.core.first.call(null,seq__16072_16157__$1);var actual_type_16164 = cljs.core.nth.call(null,vec__16092_16163,0,null);var factory_16165 = cljs.core.nth.call(null,vec__16092_16163,1,null);var canonical_f_16166 = (cljs.core.truth_(selector_16095)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16094,selector_16095):cljs.core.identity).call(null,factory_16165.call(null,f_16143));dommy.core.update_event_listeners_BANG_.call(null,elem_16094,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16095,actual_type_16164,f_16143], null),canonical_f_16166);
if(cljs.core.truth_(elem_16094.addEventListener))
{elem_16094.addEventListener(cljs.core.name.call(null,actual_type_16164),canonical_f_16166);
} else
{elem_16094.attachEvent(cljs.core.name.call(null,actual_type_16164),canonical_f_16166);
}
{
var G__16167 = cljs.core.next.call(null,seq__16072_16157__$1);
var G__16168 = null;
var G__16169 = 0;
var G__16170 = 0;
seq__16072_16144 = G__16167;
chunk__16074_16145 = G__16168;
count__16075_16146 = G__16169;
i__16076_16147 = G__16170;
continue;
}
}
} else
{}
}
break;
}
{
var G__16171 = cljs.core.next.call(null,seq__16071_16135__$1);
var G__16172 = null;
var G__16173 = 0;
var G__16174 = 0;
seq__16071_16096 = G__16171;
chunk__16078_16097 = G__16172;
count__16079_16098 = G__16173;
i__16080_16099 = G__16174;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__16175){
var elem_sel = cljs.core.first(arglist__16175);
var type_fs = cljs.core.rest(arglist__16175);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16199_16222 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16223 = cljs.core.nth.call(null,vec__16199_16222,0,null);var selector_16224 = cljs.core.nth.call(null,vec__16199_16222,1,null);var seq__16200_16225 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16207_16226 = null;var count__16208_16227 = 0;var i__16209_16228 = 0;while(true){
if((i__16209_16228 < count__16208_16227))
{var vec__16216_16229 = cljs.core._nth.call(null,chunk__16207_16226,i__16209_16228);var orig_type_16230 = cljs.core.nth.call(null,vec__16216_16229,0,null);var f_16231 = cljs.core.nth.call(null,vec__16216_16229,1,null);var seq__16210_16232 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16230,new cljs.core.PersistentArrayMap.fromArray([orig_type_16230,cljs.core.identity], true, false)));var chunk__16212_16233 = null;var count__16213_16234 = 0;var i__16214_16235 = 0;while(true){
if((i__16214_16235 < count__16213_16234))
{var vec__16217_16236 = cljs.core._nth.call(null,chunk__16212_16233,i__16214_16235);var actual_type_16237 = cljs.core.nth.call(null,vec__16217_16236,0,null);var __16238 = cljs.core.nth.call(null,vec__16217_16236,1,null);var keys_16239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16224,actual_type_16237,f_16231], null);var canonical_f_16240 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16223),keys_16239);dommy.core.update_event_listeners_BANG_.call(null,elem_16223,dommy.utils.dissoc_in,keys_16239);
if(cljs.core.truth_(elem_16223.removeEventListener))
{elem_16223.removeEventListener(cljs.core.name.call(null,actual_type_16237),canonical_f_16240);
} else
{elem_16223.detachEvent(cljs.core.name.call(null,actual_type_16237),canonical_f_16240);
}
{
var G__16241 = seq__16210_16232;
var G__16242 = chunk__16212_16233;
var G__16243 = count__16213_16234;
var G__16244 = (i__16214_16235 + 1);
seq__16210_16232 = G__16241;
chunk__16212_16233 = G__16242;
count__16213_16234 = G__16243;
i__16214_16235 = G__16244;
continue;
}
} else
{var temp__4092__auto___16245 = cljs.core.seq.call(null,seq__16210_16232);if(temp__4092__auto___16245)
{var seq__16210_16246__$1 = temp__4092__auto___16245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16210_16246__$1))
{var c__4191__auto___16247 = cljs.core.chunk_first.call(null,seq__16210_16246__$1);{
var G__16248 = cljs.core.chunk_rest.call(null,seq__16210_16246__$1);
var G__16249 = c__4191__auto___16247;
var G__16250 = cljs.core.count.call(null,c__4191__auto___16247);
var G__16251 = 0;
seq__16210_16232 = G__16248;
chunk__16212_16233 = G__16249;
count__16213_16234 = G__16250;
i__16214_16235 = G__16251;
continue;
}
} else
{var vec__16218_16252 = cljs.core.first.call(null,seq__16210_16246__$1);var actual_type_16253 = cljs.core.nth.call(null,vec__16218_16252,0,null);var __16254 = cljs.core.nth.call(null,vec__16218_16252,1,null);var keys_16255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16224,actual_type_16253,f_16231], null);var canonical_f_16256 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16223),keys_16255);dommy.core.update_event_listeners_BANG_.call(null,elem_16223,dommy.utils.dissoc_in,keys_16255);
if(cljs.core.truth_(elem_16223.removeEventListener))
{elem_16223.removeEventListener(cljs.core.name.call(null,actual_type_16253),canonical_f_16256);
} else
{elem_16223.detachEvent(cljs.core.name.call(null,actual_type_16253),canonical_f_16256);
}
{
var G__16257 = cljs.core.next.call(null,seq__16210_16246__$1);
var G__16258 = null;
var G__16259 = 0;
var G__16260 = 0;
seq__16210_16232 = G__16257;
chunk__16212_16233 = G__16258;
count__16213_16234 = G__16259;
i__16214_16235 = G__16260;
continue;
}
}
} else
{}
}
break;
}
{
var G__16261 = seq__16200_16225;
var G__16262 = chunk__16207_16226;
var G__16263 = count__16208_16227;
var G__16264 = (i__16209_16228 + 1);
seq__16200_16225 = G__16261;
chunk__16207_16226 = G__16262;
count__16208_16227 = G__16263;
i__16209_16228 = G__16264;
continue;
}
} else
{var temp__4092__auto___16265 = cljs.core.seq.call(null,seq__16200_16225);if(temp__4092__auto___16265)
{var seq__16200_16266__$1 = temp__4092__auto___16265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16200_16266__$1))
{var c__4191__auto___16267 = cljs.core.chunk_first.call(null,seq__16200_16266__$1);{
var G__16268 = cljs.core.chunk_rest.call(null,seq__16200_16266__$1);
var G__16269 = c__4191__auto___16267;
var G__16270 = cljs.core.count.call(null,c__4191__auto___16267);
var G__16271 = 0;
seq__16200_16225 = G__16268;
chunk__16207_16226 = G__16269;
count__16208_16227 = G__16270;
i__16209_16228 = G__16271;
continue;
}
} else
{var vec__16219_16272 = cljs.core.first.call(null,seq__16200_16266__$1);var orig_type_16273 = cljs.core.nth.call(null,vec__16219_16272,0,null);var f_16274 = cljs.core.nth.call(null,vec__16219_16272,1,null);var seq__16201_16275 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16273,new cljs.core.PersistentArrayMap.fromArray([orig_type_16273,cljs.core.identity], true, false)));var chunk__16203_16276 = null;var count__16204_16277 = 0;var i__16205_16278 = 0;while(true){
if((i__16205_16278 < count__16204_16277))
{var vec__16220_16279 = cljs.core._nth.call(null,chunk__16203_16276,i__16205_16278);var actual_type_16280 = cljs.core.nth.call(null,vec__16220_16279,0,null);var __16281 = cljs.core.nth.call(null,vec__16220_16279,1,null);var keys_16282 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16224,actual_type_16280,f_16274], null);var canonical_f_16283 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16223),keys_16282);dommy.core.update_event_listeners_BANG_.call(null,elem_16223,dommy.utils.dissoc_in,keys_16282);
if(cljs.core.truth_(elem_16223.removeEventListener))
{elem_16223.removeEventListener(cljs.core.name.call(null,actual_type_16280),canonical_f_16283);
} else
{elem_16223.detachEvent(cljs.core.name.call(null,actual_type_16280),canonical_f_16283);
}
{
var G__16284 = seq__16201_16275;
var G__16285 = chunk__16203_16276;
var G__16286 = count__16204_16277;
var G__16287 = (i__16205_16278 + 1);
seq__16201_16275 = G__16284;
chunk__16203_16276 = G__16285;
count__16204_16277 = G__16286;
i__16205_16278 = G__16287;
continue;
}
} else
{var temp__4092__auto___16288__$1 = cljs.core.seq.call(null,seq__16201_16275);if(temp__4092__auto___16288__$1)
{var seq__16201_16289__$1 = temp__4092__auto___16288__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16201_16289__$1))
{var c__4191__auto___16290 = cljs.core.chunk_first.call(null,seq__16201_16289__$1);{
var G__16291 = cljs.core.chunk_rest.call(null,seq__16201_16289__$1);
var G__16292 = c__4191__auto___16290;
var G__16293 = cljs.core.count.call(null,c__4191__auto___16290);
var G__16294 = 0;
seq__16201_16275 = G__16291;
chunk__16203_16276 = G__16292;
count__16204_16277 = G__16293;
i__16205_16278 = G__16294;
continue;
}
} else
{var vec__16221_16295 = cljs.core.first.call(null,seq__16201_16289__$1);var actual_type_16296 = cljs.core.nth.call(null,vec__16221_16295,0,null);var __16297 = cljs.core.nth.call(null,vec__16221_16295,1,null);var keys_16298 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16224,actual_type_16296,f_16274], null);var canonical_f_16299 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16223),keys_16298);dommy.core.update_event_listeners_BANG_.call(null,elem_16223,dommy.utils.dissoc_in,keys_16298);
if(cljs.core.truth_(elem_16223.removeEventListener))
{elem_16223.removeEventListener(cljs.core.name.call(null,actual_type_16296),canonical_f_16299);
} else
{elem_16223.detachEvent(cljs.core.name.call(null,actual_type_16296),canonical_f_16299);
}
{
var G__16300 = cljs.core.next.call(null,seq__16201_16289__$1);
var G__16301 = null;
var G__16302 = 0;
var G__16303 = 0;
seq__16201_16275 = G__16300;
chunk__16203_16276 = G__16301;
count__16204_16277 = G__16302;
i__16205_16278 = G__16303;
continue;
}
}
} else
{}
}
break;
}
{
var G__16304 = cljs.core.next.call(null,seq__16200_16266__$1);
var G__16305 = null;
var G__16306 = 0;
var G__16307 = 0;
seq__16200_16225 = G__16304;
chunk__16207_16226 = G__16305;
count__16208_16227 = G__16306;
i__16209_16228 = G__16307;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16308){
var elem_sel = cljs.core.first(arglist__16308);
var type_fs = cljs.core.rest(arglist__16308);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16316_16323 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16324 = cljs.core.nth.call(null,vec__16316_16323,0,null);var selector_16325 = cljs.core.nth.call(null,vec__16316_16323,1,null);var seq__16317_16326 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16318_16327 = null;var count__16319_16328 = 0;var i__16320_16329 = 0;while(true){
if((i__16320_16329 < count__16319_16328))
{var vec__16321_16330 = cljs.core._nth.call(null,chunk__16318_16327,i__16320_16329);var type_16331 = cljs.core.nth.call(null,vec__16321_16330,0,null);var f_16332 = cljs.core.nth.call(null,vec__16321_16330,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16331,((function (seq__16317_16326,chunk__16318_16327,count__16319_16328,i__16320_16329,vec__16321_16330,type_16331,f_16332){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16331,this_fn);
return f_16332.call(null,e);
});})(seq__16317_16326,chunk__16318_16327,count__16319_16328,i__16320_16329,vec__16321_16330,type_16331,f_16332))
);
{
var G__16333 = seq__16317_16326;
var G__16334 = chunk__16318_16327;
var G__16335 = count__16319_16328;
var G__16336 = (i__16320_16329 + 1);
seq__16317_16326 = G__16333;
chunk__16318_16327 = G__16334;
count__16319_16328 = G__16335;
i__16320_16329 = G__16336;
continue;
}
} else
{var temp__4092__auto___16337 = cljs.core.seq.call(null,seq__16317_16326);if(temp__4092__auto___16337)
{var seq__16317_16338__$1 = temp__4092__auto___16337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16317_16338__$1))
{var c__4191__auto___16339 = cljs.core.chunk_first.call(null,seq__16317_16338__$1);{
var G__16340 = cljs.core.chunk_rest.call(null,seq__16317_16338__$1);
var G__16341 = c__4191__auto___16339;
var G__16342 = cljs.core.count.call(null,c__4191__auto___16339);
var G__16343 = 0;
seq__16317_16326 = G__16340;
chunk__16318_16327 = G__16341;
count__16319_16328 = G__16342;
i__16320_16329 = G__16343;
continue;
}
} else
{var vec__16322_16344 = cljs.core.first.call(null,seq__16317_16338__$1);var type_16345 = cljs.core.nth.call(null,vec__16322_16344,0,null);var f_16346 = cljs.core.nth.call(null,vec__16322_16344,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16345,((function (seq__16317_16326,chunk__16318_16327,count__16319_16328,i__16320_16329,vec__16322_16344,type_16345,f_16346,seq__16317_16338__$1,temp__4092__auto___16337){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16345,this_fn);
return f_16346.call(null,e);
});})(seq__16317_16326,chunk__16318_16327,count__16319_16328,i__16320_16329,vec__16322_16344,type_16345,f_16346,seq__16317_16338__$1,temp__4092__auto___16337))
);
{
var G__16347 = cljs.core.next.call(null,seq__16317_16338__$1);
var G__16348 = null;
var G__16349 = 0;
var G__16350 = 0;
seq__16317_16326 = G__16347;
chunk__16318_16327 = G__16348;
count__16319_16328 = G__16349;
i__16320_16329 = G__16350;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16351){
var elem_sel = cljs.core.first(arglist__16351);
var type_fs = cljs.core.rest(arglist__16351);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__16352){var vec__16354 = p__16352;var update_event_BANG_ = cljs.core.nth.call(null,vec__16354,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3443__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__16352 = null;if (arguments.length > 2) {
  p__16352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16352);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16355){
var node = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var event_type = cljs.core.first(arglist__16355);
var p__16352 = cljs.core.rest(arglist__16355);
return fire_BANG___delegate(node,event_type,p__16352);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
