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
var append_BANG___2 = (function (parent,child){var G__12721 = dommy.template.__GT_node_like.call(null,parent);G__12721.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__12721;
});
var append_BANG___3 = (function() { 
var G__12726__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12722_12727 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12723_12728 = null;var count__12724_12729 = 0;var i__12725_12730 = 0;while(true){
if((i__12725_12730 < count__12724_12729))
{var c_12731 = cljs.core._nth.call(null,chunk__12723_12728,i__12725_12730);append_BANG_.call(null,parent__$1,c_12731);
{
var G__12732 = seq__12722_12727;
var G__12733 = chunk__12723_12728;
var G__12734 = count__12724_12729;
var G__12735 = (i__12725_12730 + 1);
seq__12722_12727 = G__12732;
chunk__12723_12728 = G__12733;
count__12724_12729 = G__12734;
i__12725_12730 = G__12735;
continue;
}
} else
{var temp__4092__auto___12736 = cljs.core.seq.call(null,seq__12722_12727);if(temp__4092__auto___12736)
{var seq__12722_12737__$1 = temp__4092__auto___12736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12722_12737__$1))
{var c__4191__auto___12738 = cljs.core.chunk_first.call(null,seq__12722_12737__$1);{
var G__12739 = cljs.core.chunk_rest.call(null,seq__12722_12737__$1);
var G__12740 = c__4191__auto___12738;
var G__12741 = cljs.core.count.call(null,c__4191__auto___12738);
var G__12742 = 0;
seq__12722_12727 = G__12739;
chunk__12723_12728 = G__12740;
count__12724_12729 = G__12741;
i__12725_12730 = G__12742;
continue;
}
} else
{var c_12743 = cljs.core.first.call(null,seq__12722_12737__$1);append_BANG_.call(null,parent__$1,c_12743);
{
var G__12744 = cljs.core.next.call(null,seq__12722_12737__$1);
var G__12745 = null;
var G__12746 = 0;
var G__12747 = 0;
seq__12722_12727 = G__12744;
chunk__12723_12728 = G__12745;
count__12724_12729 = G__12746;
i__12725_12730 = G__12747;
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
var G__12726 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12726__delegate.call(this,parent,child,more_children);};
G__12726.cljs$lang$maxFixedArity = 2;
G__12726.cljs$lang$applyTo = (function (arglist__12748){
var parent = cljs.core.first(arglist__12748);
arglist__12748 = cljs.core.next(arglist__12748);
var child = cljs.core.first(arglist__12748);
var more_children = cljs.core.rest(arglist__12748);
return G__12726__delegate(parent,child,more_children);
});
G__12726.cljs$core$IFn$_invoke$arity$variadic = G__12726__delegate;
return G__12726;
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
var G__12757__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12753_12758 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12754_12759 = null;var count__12755_12760 = 0;var i__12756_12761 = 0;while(true){
if((i__12756_12761 < count__12755_12760))
{var c_12762 = cljs.core._nth.call(null,chunk__12754_12759,i__12756_12761);prepend_BANG_.call(null,parent__$1,c_12762);
{
var G__12763 = seq__12753_12758;
var G__12764 = chunk__12754_12759;
var G__12765 = count__12755_12760;
var G__12766 = (i__12756_12761 + 1);
seq__12753_12758 = G__12763;
chunk__12754_12759 = G__12764;
count__12755_12760 = G__12765;
i__12756_12761 = G__12766;
continue;
}
} else
{var temp__4092__auto___12767 = cljs.core.seq.call(null,seq__12753_12758);if(temp__4092__auto___12767)
{var seq__12753_12768__$1 = temp__4092__auto___12767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12753_12768__$1))
{var c__4191__auto___12769 = cljs.core.chunk_first.call(null,seq__12753_12768__$1);{
var G__12770 = cljs.core.chunk_rest.call(null,seq__12753_12768__$1);
var G__12771 = c__4191__auto___12769;
var G__12772 = cljs.core.count.call(null,c__4191__auto___12769);
var G__12773 = 0;
seq__12753_12758 = G__12770;
chunk__12754_12759 = G__12771;
count__12755_12760 = G__12772;
i__12756_12761 = G__12773;
continue;
}
} else
{var c_12774 = cljs.core.first.call(null,seq__12753_12768__$1);prepend_BANG_.call(null,parent__$1,c_12774);
{
var G__12775 = cljs.core.next.call(null,seq__12753_12768__$1);
var G__12776 = null;
var G__12777 = 0;
var G__12778 = 0;
seq__12753_12758 = G__12775;
chunk__12754_12759 = G__12776;
count__12755_12760 = G__12777;
i__12756_12761 = G__12778;
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
var G__12757 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12757__delegate.call(this,parent,child,more_children);};
G__12757.cljs$lang$maxFixedArity = 2;
G__12757.cljs$lang$applyTo = (function (arglist__12779){
var parent = cljs.core.first(arglist__12779);
arglist__12779 = cljs.core.next(arglist__12779);
var child = cljs.core.first(arglist__12779);
var more_children = cljs.core.rest(arglist__12779);
return G__12757__delegate(parent,child,more_children);
});
G__12757.cljs$core$IFn$_invoke$arity$variadic = G__12757__delegate;
return G__12757;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___12780 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___12780))
{var next_12781 = temp__4090__auto___12780;parent.insertBefore(actual_node,next_12781);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__12783 = dommy.template.__GT_node_like.call(null,parent);G__12783.innerHTML = "";
dommy.core.append_BANG_.call(null,G__12783,node_like);
return G__12783;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__12785 = elem__$1.parentNode;G__12785.removeChild(elem__$1);
return G__12785;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12791){var vec__12792 = p__12791;var k = cljs.core.nth.call(null,vec__12792,0,null);var v = cljs.core.nth.call(null,vec__12792,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t12793 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t12793 = (function (v,k,vec__12792,p__12791,container,key_selectors_map,template,selector_map,meta12794){
this.v = v;
this.k = k;
this.vec__12792 = vec__12792;
this.p__12791 = p__12791;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta12794 = meta12794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t12793.cljs$lang$type = true;
dommy.core.t12793.cljs$lang$ctorStr = "dommy.core/t12793";
dommy.core.t12793.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t12793");
});
dommy.core.t12793.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t12793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12795){var self__ = this;
var _12795__$1 = this;return self__.meta12794;
});
dommy.core.t12793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12795,meta12794__$1){var self__ = this;
var _12795__$1 = this;return (new dommy.core.t12793(self__.v,self__.k,self__.vec__12792,self__.p__12791,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta12794__$1));
});
dommy.core.__GT_t12793 = (function __GT_t12793(v__$1,k__$1,vec__12792__$1,p__12791__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta12794){return (new dommy.core.t12793(v__$1,k__$1,vec__12792__$1,p__12791__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta12794));
});
}
return (new dommy.core.t12793(v,k,vec__12792,p__12791,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__12796_SHARP_){return p1__12796_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__12797_SHARP_){return !((p1__12797_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12798){var vec__12799 = p__12798;var special_mouse_event = cljs.core.nth.call(null,vec__12799,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__12799,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__12800){
var elem = cljs.core.first(arglist__12800);
arglist__12800 = cljs.core.next(arglist__12800);
var f = cljs.core.first(arglist__12800);
var args = cljs.core.rest(arglist__12800);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__12801_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__12801_SHARP_));
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
var vec__12825_12848 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12849 = cljs.core.nth.call(null,vec__12825_12848,0,null);var selector_12850 = cljs.core.nth.call(null,vec__12825_12848,1,null);var seq__12826_12851 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12833_12852 = null;var count__12834_12853 = 0;var i__12835_12854 = 0;while(true){
if((i__12835_12854 < count__12834_12853))
{var vec__12842_12855 = cljs.core._nth.call(null,chunk__12833_12852,i__12835_12854);var orig_type_12856 = cljs.core.nth.call(null,vec__12842_12855,0,null);var f_12857 = cljs.core.nth.call(null,vec__12842_12855,1,null);var seq__12836_12858 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12856,new cljs.core.PersistentArrayMap.fromArray([orig_type_12856,cljs.core.identity], true, false)));var chunk__12838_12859 = null;var count__12839_12860 = 0;var i__12840_12861 = 0;while(true){
if((i__12840_12861 < count__12839_12860))
{var vec__12843_12862 = cljs.core._nth.call(null,chunk__12838_12859,i__12840_12861);var actual_type_12863 = cljs.core.nth.call(null,vec__12843_12862,0,null);var factory_12864 = cljs.core.nth.call(null,vec__12843_12862,1,null);var canonical_f_12865 = (cljs.core.truth_(selector_12850)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12849,selector_12850):cljs.core.identity).call(null,factory_12864.call(null,f_12857));dommy.core.update_event_listeners_BANG_.call(null,elem_12849,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12850,actual_type_12863,f_12857], null),canonical_f_12865);
if(cljs.core.truth_(elem_12849.addEventListener))
{elem_12849.addEventListener(cljs.core.name.call(null,actual_type_12863),canonical_f_12865);
} else
{elem_12849.attachEvent(cljs.core.name.call(null,actual_type_12863),canonical_f_12865);
}
{
var G__12866 = seq__12836_12858;
var G__12867 = chunk__12838_12859;
var G__12868 = count__12839_12860;
var G__12869 = (i__12840_12861 + 1);
seq__12836_12858 = G__12866;
chunk__12838_12859 = G__12867;
count__12839_12860 = G__12868;
i__12840_12861 = G__12869;
continue;
}
} else
{var temp__4092__auto___12870 = cljs.core.seq.call(null,seq__12836_12858);if(temp__4092__auto___12870)
{var seq__12836_12871__$1 = temp__4092__auto___12870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12836_12871__$1))
{var c__4191__auto___12872 = cljs.core.chunk_first.call(null,seq__12836_12871__$1);{
var G__12873 = cljs.core.chunk_rest.call(null,seq__12836_12871__$1);
var G__12874 = c__4191__auto___12872;
var G__12875 = cljs.core.count.call(null,c__4191__auto___12872);
var G__12876 = 0;
seq__12836_12858 = G__12873;
chunk__12838_12859 = G__12874;
count__12839_12860 = G__12875;
i__12840_12861 = G__12876;
continue;
}
} else
{var vec__12844_12877 = cljs.core.first.call(null,seq__12836_12871__$1);var actual_type_12878 = cljs.core.nth.call(null,vec__12844_12877,0,null);var factory_12879 = cljs.core.nth.call(null,vec__12844_12877,1,null);var canonical_f_12880 = (cljs.core.truth_(selector_12850)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12849,selector_12850):cljs.core.identity).call(null,factory_12879.call(null,f_12857));dommy.core.update_event_listeners_BANG_.call(null,elem_12849,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12850,actual_type_12878,f_12857], null),canonical_f_12880);
if(cljs.core.truth_(elem_12849.addEventListener))
{elem_12849.addEventListener(cljs.core.name.call(null,actual_type_12878),canonical_f_12880);
} else
{elem_12849.attachEvent(cljs.core.name.call(null,actual_type_12878),canonical_f_12880);
}
{
var G__12881 = cljs.core.next.call(null,seq__12836_12871__$1);
var G__12882 = null;
var G__12883 = 0;
var G__12884 = 0;
seq__12836_12858 = G__12881;
chunk__12838_12859 = G__12882;
count__12839_12860 = G__12883;
i__12840_12861 = G__12884;
continue;
}
}
} else
{}
}
break;
}
{
var G__12885 = seq__12826_12851;
var G__12886 = chunk__12833_12852;
var G__12887 = count__12834_12853;
var G__12888 = (i__12835_12854 + 1);
seq__12826_12851 = G__12885;
chunk__12833_12852 = G__12886;
count__12834_12853 = G__12887;
i__12835_12854 = G__12888;
continue;
}
} else
{var temp__4092__auto___12889 = cljs.core.seq.call(null,seq__12826_12851);if(temp__4092__auto___12889)
{var seq__12826_12890__$1 = temp__4092__auto___12889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12826_12890__$1))
{var c__4191__auto___12891 = cljs.core.chunk_first.call(null,seq__12826_12890__$1);{
var G__12892 = cljs.core.chunk_rest.call(null,seq__12826_12890__$1);
var G__12893 = c__4191__auto___12891;
var G__12894 = cljs.core.count.call(null,c__4191__auto___12891);
var G__12895 = 0;
seq__12826_12851 = G__12892;
chunk__12833_12852 = G__12893;
count__12834_12853 = G__12894;
i__12835_12854 = G__12895;
continue;
}
} else
{var vec__12845_12896 = cljs.core.first.call(null,seq__12826_12890__$1);var orig_type_12897 = cljs.core.nth.call(null,vec__12845_12896,0,null);var f_12898 = cljs.core.nth.call(null,vec__12845_12896,1,null);var seq__12827_12899 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12897,new cljs.core.PersistentArrayMap.fromArray([orig_type_12897,cljs.core.identity], true, false)));var chunk__12829_12900 = null;var count__12830_12901 = 0;var i__12831_12902 = 0;while(true){
if((i__12831_12902 < count__12830_12901))
{var vec__12846_12903 = cljs.core._nth.call(null,chunk__12829_12900,i__12831_12902);var actual_type_12904 = cljs.core.nth.call(null,vec__12846_12903,0,null);var factory_12905 = cljs.core.nth.call(null,vec__12846_12903,1,null);var canonical_f_12906 = (cljs.core.truth_(selector_12850)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12849,selector_12850):cljs.core.identity).call(null,factory_12905.call(null,f_12898));dommy.core.update_event_listeners_BANG_.call(null,elem_12849,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12850,actual_type_12904,f_12898], null),canonical_f_12906);
if(cljs.core.truth_(elem_12849.addEventListener))
{elem_12849.addEventListener(cljs.core.name.call(null,actual_type_12904),canonical_f_12906);
} else
{elem_12849.attachEvent(cljs.core.name.call(null,actual_type_12904),canonical_f_12906);
}
{
var G__12907 = seq__12827_12899;
var G__12908 = chunk__12829_12900;
var G__12909 = count__12830_12901;
var G__12910 = (i__12831_12902 + 1);
seq__12827_12899 = G__12907;
chunk__12829_12900 = G__12908;
count__12830_12901 = G__12909;
i__12831_12902 = G__12910;
continue;
}
} else
{var temp__4092__auto___12911__$1 = cljs.core.seq.call(null,seq__12827_12899);if(temp__4092__auto___12911__$1)
{var seq__12827_12912__$1 = temp__4092__auto___12911__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12827_12912__$1))
{var c__4191__auto___12913 = cljs.core.chunk_first.call(null,seq__12827_12912__$1);{
var G__12914 = cljs.core.chunk_rest.call(null,seq__12827_12912__$1);
var G__12915 = c__4191__auto___12913;
var G__12916 = cljs.core.count.call(null,c__4191__auto___12913);
var G__12917 = 0;
seq__12827_12899 = G__12914;
chunk__12829_12900 = G__12915;
count__12830_12901 = G__12916;
i__12831_12902 = G__12917;
continue;
}
} else
{var vec__12847_12918 = cljs.core.first.call(null,seq__12827_12912__$1);var actual_type_12919 = cljs.core.nth.call(null,vec__12847_12918,0,null);var factory_12920 = cljs.core.nth.call(null,vec__12847_12918,1,null);var canonical_f_12921 = (cljs.core.truth_(selector_12850)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12849,selector_12850):cljs.core.identity).call(null,factory_12920.call(null,f_12898));dommy.core.update_event_listeners_BANG_.call(null,elem_12849,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12850,actual_type_12919,f_12898], null),canonical_f_12921);
if(cljs.core.truth_(elem_12849.addEventListener))
{elem_12849.addEventListener(cljs.core.name.call(null,actual_type_12919),canonical_f_12921);
} else
{elem_12849.attachEvent(cljs.core.name.call(null,actual_type_12919),canonical_f_12921);
}
{
var G__12922 = cljs.core.next.call(null,seq__12827_12912__$1);
var G__12923 = null;
var G__12924 = 0;
var G__12925 = 0;
seq__12827_12899 = G__12922;
chunk__12829_12900 = G__12923;
count__12830_12901 = G__12924;
i__12831_12902 = G__12925;
continue;
}
}
} else
{}
}
break;
}
{
var G__12926 = cljs.core.next.call(null,seq__12826_12890__$1);
var G__12927 = null;
var G__12928 = 0;
var G__12929 = 0;
seq__12826_12851 = G__12926;
chunk__12833_12852 = G__12927;
count__12834_12853 = G__12928;
i__12835_12854 = G__12929;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__12930){
var elem_sel = cljs.core.first(arglist__12930);
var type_fs = cljs.core.rest(arglist__12930);
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
var vec__12954_12977 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12978 = cljs.core.nth.call(null,vec__12954_12977,0,null);var selector_12979 = cljs.core.nth.call(null,vec__12954_12977,1,null);var seq__12955_12980 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12962_12981 = null;var count__12963_12982 = 0;var i__12964_12983 = 0;while(true){
if((i__12964_12983 < count__12963_12982))
{var vec__12971_12984 = cljs.core._nth.call(null,chunk__12962_12981,i__12964_12983);var orig_type_12985 = cljs.core.nth.call(null,vec__12971_12984,0,null);var f_12986 = cljs.core.nth.call(null,vec__12971_12984,1,null);var seq__12965_12987 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12985,new cljs.core.PersistentArrayMap.fromArray([orig_type_12985,cljs.core.identity], true, false)));var chunk__12967_12988 = null;var count__12968_12989 = 0;var i__12969_12990 = 0;while(true){
if((i__12969_12990 < count__12968_12989))
{var vec__12972_12991 = cljs.core._nth.call(null,chunk__12967_12988,i__12969_12990);var actual_type_12992 = cljs.core.nth.call(null,vec__12972_12991,0,null);var __12993 = cljs.core.nth.call(null,vec__12972_12991,1,null);var keys_12994 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12979,actual_type_12992,f_12986], null);var canonical_f_12995 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12978),keys_12994);dommy.core.update_event_listeners_BANG_.call(null,elem_12978,dommy.utils.dissoc_in,keys_12994);
if(cljs.core.truth_(elem_12978.removeEventListener))
{elem_12978.removeEventListener(cljs.core.name.call(null,actual_type_12992),canonical_f_12995);
} else
{elem_12978.detachEvent(cljs.core.name.call(null,actual_type_12992),canonical_f_12995);
}
{
var G__12996 = seq__12965_12987;
var G__12997 = chunk__12967_12988;
var G__12998 = count__12968_12989;
var G__12999 = (i__12969_12990 + 1);
seq__12965_12987 = G__12996;
chunk__12967_12988 = G__12997;
count__12968_12989 = G__12998;
i__12969_12990 = G__12999;
continue;
}
} else
{var temp__4092__auto___13000 = cljs.core.seq.call(null,seq__12965_12987);if(temp__4092__auto___13000)
{var seq__12965_13001__$1 = temp__4092__auto___13000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12965_13001__$1))
{var c__4191__auto___13002 = cljs.core.chunk_first.call(null,seq__12965_13001__$1);{
var G__13003 = cljs.core.chunk_rest.call(null,seq__12965_13001__$1);
var G__13004 = c__4191__auto___13002;
var G__13005 = cljs.core.count.call(null,c__4191__auto___13002);
var G__13006 = 0;
seq__12965_12987 = G__13003;
chunk__12967_12988 = G__13004;
count__12968_12989 = G__13005;
i__12969_12990 = G__13006;
continue;
}
} else
{var vec__12973_13007 = cljs.core.first.call(null,seq__12965_13001__$1);var actual_type_13008 = cljs.core.nth.call(null,vec__12973_13007,0,null);var __13009 = cljs.core.nth.call(null,vec__12973_13007,1,null);var keys_13010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12979,actual_type_13008,f_12986], null);var canonical_f_13011 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12978),keys_13010);dommy.core.update_event_listeners_BANG_.call(null,elem_12978,dommy.utils.dissoc_in,keys_13010);
if(cljs.core.truth_(elem_12978.removeEventListener))
{elem_12978.removeEventListener(cljs.core.name.call(null,actual_type_13008),canonical_f_13011);
} else
{elem_12978.detachEvent(cljs.core.name.call(null,actual_type_13008),canonical_f_13011);
}
{
var G__13012 = cljs.core.next.call(null,seq__12965_13001__$1);
var G__13013 = null;
var G__13014 = 0;
var G__13015 = 0;
seq__12965_12987 = G__13012;
chunk__12967_12988 = G__13013;
count__12968_12989 = G__13014;
i__12969_12990 = G__13015;
continue;
}
}
} else
{}
}
break;
}
{
var G__13016 = seq__12955_12980;
var G__13017 = chunk__12962_12981;
var G__13018 = count__12963_12982;
var G__13019 = (i__12964_12983 + 1);
seq__12955_12980 = G__13016;
chunk__12962_12981 = G__13017;
count__12963_12982 = G__13018;
i__12964_12983 = G__13019;
continue;
}
} else
{var temp__4092__auto___13020 = cljs.core.seq.call(null,seq__12955_12980);if(temp__4092__auto___13020)
{var seq__12955_13021__$1 = temp__4092__auto___13020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12955_13021__$1))
{var c__4191__auto___13022 = cljs.core.chunk_first.call(null,seq__12955_13021__$1);{
var G__13023 = cljs.core.chunk_rest.call(null,seq__12955_13021__$1);
var G__13024 = c__4191__auto___13022;
var G__13025 = cljs.core.count.call(null,c__4191__auto___13022);
var G__13026 = 0;
seq__12955_12980 = G__13023;
chunk__12962_12981 = G__13024;
count__12963_12982 = G__13025;
i__12964_12983 = G__13026;
continue;
}
} else
{var vec__12974_13027 = cljs.core.first.call(null,seq__12955_13021__$1);var orig_type_13028 = cljs.core.nth.call(null,vec__12974_13027,0,null);var f_13029 = cljs.core.nth.call(null,vec__12974_13027,1,null);var seq__12956_13030 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13028,new cljs.core.PersistentArrayMap.fromArray([orig_type_13028,cljs.core.identity], true, false)));var chunk__12958_13031 = null;var count__12959_13032 = 0;var i__12960_13033 = 0;while(true){
if((i__12960_13033 < count__12959_13032))
{var vec__12975_13034 = cljs.core._nth.call(null,chunk__12958_13031,i__12960_13033);var actual_type_13035 = cljs.core.nth.call(null,vec__12975_13034,0,null);var __13036 = cljs.core.nth.call(null,vec__12975_13034,1,null);var keys_13037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12979,actual_type_13035,f_13029], null);var canonical_f_13038 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12978),keys_13037);dommy.core.update_event_listeners_BANG_.call(null,elem_12978,dommy.utils.dissoc_in,keys_13037);
if(cljs.core.truth_(elem_12978.removeEventListener))
{elem_12978.removeEventListener(cljs.core.name.call(null,actual_type_13035),canonical_f_13038);
} else
{elem_12978.detachEvent(cljs.core.name.call(null,actual_type_13035),canonical_f_13038);
}
{
var G__13039 = seq__12956_13030;
var G__13040 = chunk__12958_13031;
var G__13041 = count__12959_13032;
var G__13042 = (i__12960_13033 + 1);
seq__12956_13030 = G__13039;
chunk__12958_13031 = G__13040;
count__12959_13032 = G__13041;
i__12960_13033 = G__13042;
continue;
}
} else
{var temp__4092__auto___13043__$1 = cljs.core.seq.call(null,seq__12956_13030);if(temp__4092__auto___13043__$1)
{var seq__12956_13044__$1 = temp__4092__auto___13043__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12956_13044__$1))
{var c__4191__auto___13045 = cljs.core.chunk_first.call(null,seq__12956_13044__$1);{
var G__13046 = cljs.core.chunk_rest.call(null,seq__12956_13044__$1);
var G__13047 = c__4191__auto___13045;
var G__13048 = cljs.core.count.call(null,c__4191__auto___13045);
var G__13049 = 0;
seq__12956_13030 = G__13046;
chunk__12958_13031 = G__13047;
count__12959_13032 = G__13048;
i__12960_13033 = G__13049;
continue;
}
} else
{var vec__12976_13050 = cljs.core.first.call(null,seq__12956_13044__$1);var actual_type_13051 = cljs.core.nth.call(null,vec__12976_13050,0,null);var __13052 = cljs.core.nth.call(null,vec__12976_13050,1,null);var keys_13053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12979,actual_type_13051,f_13029], null);var canonical_f_13054 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12978),keys_13053);dommy.core.update_event_listeners_BANG_.call(null,elem_12978,dommy.utils.dissoc_in,keys_13053);
if(cljs.core.truth_(elem_12978.removeEventListener))
{elem_12978.removeEventListener(cljs.core.name.call(null,actual_type_13051),canonical_f_13054);
} else
{elem_12978.detachEvent(cljs.core.name.call(null,actual_type_13051),canonical_f_13054);
}
{
var G__13055 = cljs.core.next.call(null,seq__12956_13044__$1);
var G__13056 = null;
var G__13057 = 0;
var G__13058 = 0;
seq__12956_13030 = G__13055;
chunk__12958_13031 = G__13056;
count__12959_13032 = G__13057;
i__12960_13033 = G__13058;
continue;
}
}
} else
{}
}
break;
}
{
var G__13059 = cljs.core.next.call(null,seq__12955_13021__$1);
var G__13060 = null;
var G__13061 = 0;
var G__13062 = 0;
seq__12955_12980 = G__13059;
chunk__12962_12981 = G__13060;
count__12963_12982 = G__13061;
i__12964_12983 = G__13062;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13063){
var elem_sel = cljs.core.first(arglist__13063);
var type_fs = cljs.core.rest(arglist__13063);
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
var vec__13071_13078 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13079 = cljs.core.nth.call(null,vec__13071_13078,0,null);var selector_13080 = cljs.core.nth.call(null,vec__13071_13078,1,null);var seq__13072_13081 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13073_13082 = null;var count__13074_13083 = 0;var i__13075_13084 = 0;while(true){
if((i__13075_13084 < count__13074_13083))
{var vec__13076_13085 = cljs.core._nth.call(null,chunk__13073_13082,i__13075_13084);var type_13086 = cljs.core.nth.call(null,vec__13076_13085,0,null);var f_13087 = cljs.core.nth.call(null,vec__13076_13085,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13086,((function (seq__13072_13081,chunk__13073_13082,count__13074_13083,i__13075_13084,vec__13076_13085,type_13086,f_13087){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13086,this_fn);
return f_13087.call(null,e);
});})(seq__13072_13081,chunk__13073_13082,count__13074_13083,i__13075_13084,vec__13076_13085,type_13086,f_13087))
);
{
var G__13088 = seq__13072_13081;
var G__13089 = chunk__13073_13082;
var G__13090 = count__13074_13083;
var G__13091 = (i__13075_13084 + 1);
seq__13072_13081 = G__13088;
chunk__13073_13082 = G__13089;
count__13074_13083 = G__13090;
i__13075_13084 = G__13091;
continue;
}
} else
{var temp__4092__auto___13092 = cljs.core.seq.call(null,seq__13072_13081);if(temp__4092__auto___13092)
{var seq__13072_13093__$1 = temp__4092__auto___13092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13072_13093__$1))
{var c__4191__auto___13094 = cljs.core.chunk_first.call(null,seq__13072_13093__$1);{
var G__13095 = cljs.core.chunk_rest.call(null,seq__13072_13093__$1);
var G__13096 = c__4191__auto___13094;
var G__13097 = cljs.core.count.call(null,c__4191__auto___13094);
var G__13098 = 0;
seq__13072_13081 = G__13095;
chunk__13073_13082 = G__13096;
count__13074_13083 = G__13097;
i__13075_13084 = G__13098;
continue;
}
} else
{var vec__13077_13099 = cljs.core.first.call(null,seq__13072_13093__$1);var type_13100 = cljs.core.nth.call(null,vec__13077_13099,0,null);var f_13101 = cljs.core.nth.call(null,vec__13077_13099,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13100,((function (seq__13072_13081,chunk__13073_13082,count__13074_13083,i__13075_13084,vec__13077_13099,type_13100,f_13101,seq__13072_13093__$1,temp__4092__auto___13092){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13100,this_fn);
return f_13101.call(null,e);
});})(seq__13072_13081,chunk__13073_13082,count__13074_13083,i__13075_13084,vec__13077_13099,type_13100,f_13101,seq__13072_13093__$1,temp__4092__auto___13092))
);
{
var G__13102 = cljs.core.next.call(null,seq__13072_13093__$1);
var G__13103 = null;
var G__13104 = 0;
var G__13105 = 0;
seq__13072_13081 = G__13102;
chunk__13073_13082 = G__13103;
count__13074_13083 = G__13104;
i__13075_13084 = G__13105;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__13106){
var elem_sel = cljs.core.first(arglist__13106);
var type_fs = cljs.core.rest(arglist__13106);
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
var fire_BANG___delegate = function (node,event_type,p__13107){var vec__13109 = p__13107;var update_event_BANG_ = cljs.core.nth.call(null,vec__13109,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__13107 = null;if (arguments.length > 2) {
  p__13107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__13107);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__13110){
var node = cljs.core.first(arglist__13110);
arglist__13110 = cljs.core.next(arglist__13110);
var event_type = cljs.core.first(arglist__13110);
var p__13107 = cljs.core.rest(arglist__13110);
return fire_BANG___delegate(node,event_type,p__13107);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
