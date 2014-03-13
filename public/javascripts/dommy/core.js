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
var append_BANG___2 = (function (parent,child){var G__12698 = dommy.template.__GT_node_like.call(null,parent);G__12698.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__12698;
});
var append_BANG___3 = (function() { 
var G__12703__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12699_12704 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12700_12705 = null;var count__12701_12706 = 0;var i__12702_12707 = 0;while(true){
if((i__12702_12707 < count__12701_12706))
{var c_12708 = cljs.core._nth.call(null,chunk__12700_12705,i__12702_12707);append_BANG_.call(null,parent__$1,c_12708);
{
var G__12709 = seq__12699_12704;
var G__12710 = chunk__12700_12705;
var G__12711 = count__12701_12706;
var G__12712 = (i__12702_12707 + 1);
seq__12699_12704 = G__12709;
chunk__12700_12705 = G__12710;
count__12701_12706 = G__12711;
i__12702_12707 = G__12712;
continue;
}
} else
{var temp__4092__auto___12713 = cljs.core.seq.call(null,seq__12699_12704);if(temp__4092__auto___12713)
{var seq__12699_12714__$1 = temp__4092__auto___12713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12699_12714__$1))
{var c__4191__auto___12715 = cljs.core.chunk_first.call(null,seq__12699_12714__$1);{
var G__12716 = cljs.core.chunk_rest.call(null,seq__12699_12714__$1);
var G__12717 = c__4191__auto___12715;
var G__12718 = cljs.core.count.call(null,c__4191__auto___12715);
var G__12719 = 0;
seq__12699_12704 = G__12716;
chunk__12700_12705 = G__12717;
count__12701_12706 = G__12718;
i__12702_12707 = G__12719;
continue;
}
} else
{var c_12720 = cljs.core.first.call(null,seq__12699_12714__$1);append_BANG_.call(null,parent__$1,c_12720);
{
var G__12721 = cljs.core.next.call(null,seq__12699_12714__$1);
var G__12722 = null;
var G__12723 = 0;
var G__12724 = 0;
seq__12699_12704 = G__12721;
chunk__12700_12705 = G__12722;
count__12701_12706 = G__12723;
i__12702_12707 = G__12724;
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
var G__12703 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12703__delegate.call(this,parent,child,more_children);};
G__12703.cljs$lang$maxFixedArity = 2;
G__12703.cljs$lang$applyTo = (function (arglist__12725){
var parent = cljs.core.first(arglist__12725);
arglist__12725 = cljs.core.next(arglist__12725);
var child = cljs.core.first(arglist__12725);
var more_children = cljs.core.rest(arglist__12725);
return G__12703__delegate(parent,child,more_children);
});
G__12703.cljs$core$IFn$_invoke$arity$variadic = G__12703__delegate;
return G__12703;
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
var G__12734__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__12730_12735 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__12731_12736 = null;var count__12732_12737 = 0;var i__12733_12738 = 0;while(true){
if((i__12733_12738 < count__12732_12737))
{var c_12739 = cljs.core._nth.call(null,chunk__12731_12736,i__12733_12738);prepend_BANG_.call(null,parent__$1,c_12739);
{
var G__12740 = seq__12730_12735;
var G__12741 = chunk__12731_12736;
var G__12742 = count__12732_12737;
var G__12743 = (i__12733_12738 + 1);
seq__12730_12735 = G__12740;
chunk__12731_12736 = G__12741;
count__12732_12737 = G__12742;
i__12733_12738 = G__12743;
continue;
}
} else
{var temp__4092__auto___12744 = cljs.core.seq.call(null,seq__12730_12735);if(temp__4092__auto___12744)
{var seq__12730_12745__$1 = temp__4092__auto___12744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12730_12745__$1))
{var c__4191__auto___12746 = cljs.core.chunk_first.call(null,seq__12730_12745__$1);{
var G__12747 = cljs.core.chunk_rest.call(null,seq__12730_12745__$1);
var G__12748 = c__4191__auto___12746;
var G__12749 = cljs.core.count.call(null,c__4191__auto___12746);
var G__12750 = 0;
seq__12730_12735 = G__12747;
chunk__12731_12736 = G__12748;
count__12732_12737 = G__12749;
i__12733_12738 = G__12750;
continue;
}
} else
{var c_12751 = cljs.core.first.call(null,seq__12730_12745__$1);prepend_BANG_.call(null,parent__$1,c_12751);
{
var G__12752 = cljs.core.next.call(null,seq__12730_12745__$1);
var G__12753 = null;
var G__12754 = 0;
var G__12755 = 0;
seq__12730_12735 = G__12752;
chunk__12731_12736 = G__12753;
count__12732_12737 = G__12754;
i__12733_12738 = G__12755;
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
var G__12734 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12734__delegate.call(this,parent,child,more_children);};
G__12734.cljs$lang$maxFixedArity = 2;
G__12734.cljs$lang$applyTo = (function (arglist__12756){
var parent = cljs.core.first(arglist__12756);
arglist__12756 = cljs.core.next(arglist__12756);
var child = cljs.core.first(arglist__12756);
var more_children = cljs.core.rest(arglist__12756);
return G__12734__delegate(parent,child,more_children);
});
G__12734.cljs$core$IFn$_invoke$arity$variadic = G__12734__delegate;
return G__12734;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___12757 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___12757))
{var next_12758 = temp__4090__auto___12757;parent.insertBefore(actual_node,next_12758);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__12760 = dommy.template.__GT_node_like.call(null,parent);G__12760.innerHTML = "";
dommy.core.append_BANG_.call(null,G__12760,node_like);
return G__12760;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__12762 = elem__$1.parentNode;G__12762.removeChild(elem__$1);
return G__12762;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12768){var vec__12769 = p__12768;var k = cljs.core.nth.call(null,vec__12769,0,null);var v = cljs.core.nth.call(null,vec__12769,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t12770 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t12770 = (function (v,k,vec__12769,p__12768,container,key_selectors_map,template,selector_map,meta12771){
this.v = v;
this.k = k;
this.vec__12769 = vec__12769;
this.p__12768 = p__12768;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta12771 = meta12771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t12770.cljs$lang$type = true;
dommy.core.t12770.cljs$lang$ctorStr = "dommy.core/t12770";
dommy.core.t12770.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t12770");
});
dommy.core.t12770.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t12770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12772){var self__ = this;
var _12772__$1 = this;return self__.meta12771;
});
dommy.core.t12770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12772,meta12771__$1){var self__ = this;
var _12772__$1 = this;return (new dommy.core.t12770(self__.v,self__.k,self__.vec__12769,self__.p__12768,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta12771__$1));
});
dommy.core.__GT_t12770 = (function __GT_t12770(v__$1,k__$1,vec__12769__$1,p__12768__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta12771){return (new dommy.core.t12770(v__$1,k__$1,vec__12769__$1,p__12768__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta12771));
});
}
return (new dommy.core.t12770(v,k,vec__12769,p__12768,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__12773_SHARP_){return p1__12773_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__12774_SHARP_){return !((p1__12774_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12775){var vec__12776 = p__12775;var special_mouse_event = cljs.core.nth.call(null,vec__12776,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__12776,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__12777){
var elem = cljs.core.first(arglist__12777);
arglist__12777 = cljs.core.next(arglist__12777);
var f = cljs.core.first(arglist__12777);
var args = cljs.core.rest(arglist__12777);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__12778_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__12778_SHARP_));
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
var vec__12802_12825 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12826 = cljs.core.nth.call(null,vec__12802_12825,0,null);var selector_12827 = cljs.core.nth.call(null,vec__12802_12825,1,null);var seq__12803_12828 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12810_12829 = null;var count__12811_12830 = 0;var i__12812_12831 = 0;while(true){
if((i__12812_12831 < count__12811_12830))
{var vec__12819_12832 = cljs.core._nth.call(null,chunk__12810_12829,i__12812_12831);var orig_type_12833 = cljs.core.nth.call(null,vec__12819_12832,0,null);var f_12834 = cljs.core.nth.call(null,vec__12819_12832,1,null);var seq__12813_12835 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12833,new cljs.core.PersistentArrayMap.fromArray([orig_type_12833,cljs.core.identity], true, false)));var chunk__12815_12836 = null;var count__12816_12837 = 0;var i__12817_12838 = 0;while(true){
if((i__12817_12838 < count__12816_12837))
{var vec__12820_12839 = cljs.core._nth.call(null,chunk__12815_12836,i__12817_12838);var actual_type_12840 = cljs.core.nth.call(null,vec__12820_12839,0,null);var factory_12841 = cljs.core.nth.call(null,vec__12820_12839,1,null);var canonical_f_12842 = (cljs.core.truth_(selector_12827)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12826,selector_12827):cljs.core.identity).call(null,factory_12841.call(null,f_12834));dommy.core.update_event_listeners_BANG_.call(null,elem_12826,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12827,actual_type_12840,f_12834], null),canonical_f_12842);
if(cljs.core.truth_(elem_12826.addEventListener))
{elem_12826.addEventListener(cljs.core.name.call(null,actual_type_12840),canonical_f_12842);
} else
{elem_12826.attachEvent(cljs.core.name.call(null,actual_type_12840),canonical_f_12842);
}
{
var G__12843 = seq__12813_12835;
var G__12844 = chunk__12815_12836;
var G__12845 = count__12816_12837;
var G__12846 = (i__12817_12838 + 1);
seq__12813_12835 = G__12843;
chunk__12815_12836 = G__12844;
count__12816_12837 = G__12845;
i__12817_12838 = G__12846;
continue;
}
} else
{var temp__4092__auto___12847 = cljs.core.seq.call(null,seq__12813_12835);if(temp__4092__auto___12847)
{var seq__12813_12848__$1 = temp__4092__auto___12847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12813_12848__$1))
{var c__4191__auto___12849 = cljs.core.chunk_first.call(null,seq__12813_12848__$1);{
var G__12850 = cljs.core.chunk_rest.call(null,seq__12813_12848__$1);
var G__12851 = c__4191__auto___12849;
var G__12852 = cljs.core.count.call(null,c__4191__auto___12849);
var G__12853 = 0;
seq__12813_12835 = G__12850;
chunk__12815_12836 = G__12851;
count__12816_12837 = G__12852;
i__12817_12838 = G__12853;
continue;
}
} else
{var vec__12821_12854 = cljs.core.first.call(null,seq__12813_12848__$1);var actual_type_12855 = cljs.core.nth.call(null,vec__12821_12854,0,null);var factory_12856 = cljs.core.nth.call(null,vec__12821_12854,1,null);var canonical_f_12857 = (cljs.core.truth_(selector_12827)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12826,selector_12827):cljs.core.identity).call(null,factory_12856.call(null,f_12834));dommy.core.update_event_listeners_BANG_.call(null,elem_12826,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12827,actual_type_12855,f_12834], null),canonical_f_12857);
if(cljs.core.truth_(elem_12826.addEventListener))
{elem_12826.addEventListener(cljs.core.name.call(null,actual_type_12855),canonical_f_12857);
} else
{elem_12826.attachEvent(cljs.core.name.call(null,actual_type_12855),canonical_f_12857);
}
{
var G__12858 = cljs.core.next.call(null,seq__12813_12848__$1);
var G__12859 = null;
var G__12860 = 0;
var G__12861 = 0;
seq__12813_12835 = G__12858;
chunk__12815_12836 = G__12859;
count__12816_12837 = G__12860;
i__12817_12838 = G__12861;
continue;
}
}
} else
{}
}
break;
}
{
var G__12862 = seq__12803_12828;
var G__12863 = chunk__12810_12829;
var G__12864 = count__12811_12830;
var G__12865 = (i__12812_12831 + 1);
seq__12803_12828 = G__12862;
chunk__12810_12829 = G__12863;
count__12811_12830 = G__12864;
i__12812_12831 = G__12865;
continue;
}
} else
{var temp__4092__auto___12866 = cljs.core.seq.call(null,seq__12803_12828);if(temp__4092__auto___12866)
{var seq__12803_12867__$1 = temp__4092__auto___12866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12803_12867__$1))
{var c__4191__auto___12868 = cljs.core.chunk_first.call(null,seq__12803_12867__$1);{
var G__12869 = cljs.core.chunk_rest.call(null,seq__12803_12867__$1);
var G__12870 = c__4191__auto___12868;
var G__12871 = cljs.core.count.call(null,c__4191__auto___12868);
var G__12872 = 0;
seq__12803_12828 = G__12869;
chunk__12810_12829 = G__12870;
count__12811_12830 = G__12871;
i__12812_12831 = G__12872;
continue;
}
} else
{var vec__12822_12873 = cljs.core.first.call(null,seq__12803_12867__$1);var orig_type_12874 = cljs.core.nth.call(null,vec__12822_12873,0,null);var f_12875 = cljs.core.nth.call(null,vec__12822_12873,1,null);var seq__12804_12876 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12874,new cljs.core.PersistentArrayMap.fromArray([orig_type_12874,cljs.core.identity], true, false)));var chunk__12806_12877 = null;var count__12807_12878 = 0;var i__12808_12879 = 0;while(true){
if((i__12808_12879 < count__12807_12878))
{var vec__12823_12880 = cljs.core._nth.call(null,chunk__12806_12877,i__12808_12879);var actual_type_12881 = cljs.core.nth.call(null,vec__12823_12880,0,null);var factory_12882 = cljs.core.nth.call(null,vec__12823_12880,1,null);var canonical_f_12883 = (cljs.core.truth_(selector_12827)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12826,selector_12827):cljs.core.identity).call(null,factory_12882.call(null,f_12875));dommy.core.update_event_listeners_BANG_.call(null,elem_12826,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12827,actual_type_12881,f_12875], null),canonical_f_12883);
if(cljs.core.truth_(elem_12826.addEventListener))
{elem_12826.addEventListener(cljs.core.name.call(null,actual_type_12881),canonical_f_12883);
} else
{elem_12826.attachEvent(cljs.core.name.call(null,actual_type_12881),canonical_f_12883);
}
{
var G__12884 = seq__12804_12876;
var G__12885 = chunk__12806_12877;
var G__12886 = count__12807_12878;
var G__12887 = (i__12808_12879 + 1);
seq__12804_12876 = G__12884;
chunk__12806_12877 = G__12885;
count__12807_12878 = G__12886;
i__12808_12879 = G__12887;
continue;
}
} else
{var temp__4092__auto___12888__$1 = cljs.core.seq.call(null,seq__12804_12876);if(temp__4092__auto___12888__$1)
{var seq__12804_12889__$1 = temp__4092__auto___12888__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12804_12889__$1))
{var c__4191__auto___12890 = cljs.core.chunk_first.call(null,seq__12804_12889__$1);{
var G__12891 = cljs.core.chunk_rest.call(null,seq__12804_12889__$1);
var G__12892 = c__4191__auto___12890;
var G__12893 = cljs.core.count.call(null,c__4191__auto___12890);
var G__12894 = 0;
seq__12804_12876 = G__12891;
chunk__12806_12877 = G__12892;
count__12807_12878 = G__12893;
i__12808_12879 = G__12894;
continue;
}
} else
{var vec__12824_12895 = cljs.core.first.call(null,seq__12804_12889__$1);var actual_type_12896 = cljs.core.nth.call(null,vec__12824_12895,0,null);var factory_12897 = cljs.core.nth.call(null,vec__12824_12895,1,null);var canonical_f_12898 = (cljs.core.truth_(selector_12827)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12826,selector_12827):cljs.core.identity).call(null,factory_12897.call(null,f_12875));dommy.core.update_event_listeners_BANG_.call(null,elem_12826,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12827,actual_type_12896,f_12875], null),canonical_f_12898);
if(cljs.core.truth_(elem_12826.addEventListener))
{elem_12826.addEventListener(cljs.core.name.call(null,actual_type_12896),canonical_f_12898);
} else
{elem_12826.attachEvent(cljs.core.name.call(null,actual_type_12896),canonical_f_12898);
}
{
var G__12899 = cljs.core.next.call(null,seq__12804_12889__$1);
var G__12900 = null;
var G__12901 = 0;
var G__12902 = 0;
seq__12804_12876 = G__12899;
chunk__12806_12877 = G__12900;
count__12807_12878 = G__12901;
i__12808_12879 = G__12902;
continue;
}
}
} else
{}
}
break;
}
{
var G__12903 = cljs.core.next.call(null,seq__12803_12867__$1);
var G__12904 = null;
var G__12905 = 0;
var G__12906 = 0;
seq__12803_12828 = G__12903;
chunk__12810_12829 = G__12904;
count__12811_12830 = G__12905;
i__12812_12831 = G__12906;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__12907){
var elem_sel = cljs.core.first(arglist__12907);
var type_fs = cljs.core.rest(arglist__12907);
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
var vec__12931_12954 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_12955 = cljs.core.nth.call(null,vec__12931_12954,0,null);var selector_12956 = cljs.core.nth.call(null,vec__12931_12954,1,null);var seq__12932_12957 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__12939_12958 = null;var count__12940_12959 = 0;var i__12941_12960 = 0;while(true){
if((i__12941_12960 < count__12940_12959))
{var vec__12948_12961 = cljs.core._nth.call(null,chunk__12939_12958,i__12941_12960);var orig_type_12962 = cljs.core.nth.call(null,vec__12948_12961,0,null);var f_12963 = cljs.core.nth.call(null,vec__12948_12961,1,null);var seq__12942_12964 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12962,new cljs.core.PersistentArrayMap.fromArray([orig_type_12962,cljs.core.identity], true, false)));var chunk__12944_12965 = null;var count__12945_12966 = 0;var i__12946_12967 = 0;while(true){
if((i__12946_12967 < count__12945_12966))
{var vec__12949_12968 = cljs.core._nth.call(null,chunk__12944_12965,i__12946_12967);var actual_type_12969 = cljs.core.nth.call(null,vec__12949_12968,0,null);var __12970 = cljs.core.nth.call(null,vec__12949_12968,1,null);var keys_12971 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12956,actual_type_12969,f_12963], null);var canonical_f_12972 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12955),keys_12971);dommy.core.update_event_listeners_BANG_.call(null,elem_12955,dommy.utils.dissoc_in,keys_12971);
if(cljs.core.truth_(elem_12955.removeEventListener))
{elem_12955.removeEventListener(cljs.core.name.call(null,actual_type_12969),canonical_f_12972);
} else
{elem_12955.detachEvent(cljs.core.name.call(null,actual_type_12969),canonical_f_12972);
}
{
var G__12973 = seq__12942_12964;
var G__12974 = chunk__12944_12965;
var G__12975 = count__12945_12966;
var G__12976 = (i__12946_12967 + 1);
seq__12942_12964 = G__12973;
chunk__12944_12965 = G__12974;
count__12945_12966 = G__12975;
i__12946_12967 = G__12976;
continue;
}
} else
{var temp__4092__auto___12977 = cljs.core.seq.call(null,seq__12942_12964);if(temp__4092__auto___12977)
{var seq__12942_12978__$1 = temp__4092__auto___12977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12942_12978__$1))
{var c__4191__auto___12979 = cljs.core.chunk_first.call(null,seq__12942_12978__$1);{
var G__12980 = cljs.core.chunk_rest.call(null,seq__12942_12978__$1);
var G__12981 = c__4191__auto___12979;
var G__12982 = cljs.core.count.call(null,c__4191__auto___12979);
var G__12983 = 0;
seq__12942_12964 = G__12980;
chunk__12944_12965 = G__12981;
count__12945_12966 = G__12982;
i__12946_12967 = G__12983;
continue;
}
} else
{var vec__12950_12984 = cljs.core.first.call(null,seq__12942_12978__$1);var actual_type_12985 = cljs.core.nth.call(null,vec__12950_12984,0,null);var __12986 = cljs.core.nth.call(null,vec__12950_12984,1,null);var keys_12987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12956,actual_type_12985,f_12963], null);var canonical_f_12988 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12955),keys_12987);dommy.core.update_event_listeners_BANG_.call(null,elem_12955,dommy.utils.dissoc_in,keys_12987);
if(cljs.core.truth_(elem_12955.removeEventListener))
{elem_12955.removeEventListener(cljs.core.name.call(null,actual_type_12985),canonical_f_12988);
} else
{elem_12955.detachEvent(cljs.core.name.call(null,actual_type_12985),canonical_f_12988);
}
{
var G__12989 = cljs.core.next.call(null,seq__12942_12978__$1);
var G__12990 = null;
var G__12991 = 0;
var G__12992 = 0;
seq__12942_12964 = G__12989;
chunk__12944_12965 = G__12990;
count__12945_12966 = G__12991;
i__12946_12967 = G__12992;
continue;
}
}
} else
{}
}
break;
}
{
var G__12993 = seq__12932_12957;
var G__12994 = chunk__12939_12958;
var G__12995 = count__12940_12959;
var G__12996 = (i__12941_12960 + 1);
seq__12932_12957 = G__12993;
chunk__12939_12958 = G__12994;
count__12940_12959 = G__12995;
i__12941_12960 = G__12996;
continue;
}
} else
{var temp__4092__auto___12997 = cljs.core.seq.call(null,seq__12932_12957);if(temp__4092__auto___12997)
{var seq__12932_12998__$1 = temp__4092__auto___12997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12932_12998__$1))
{var c__4191__auto___12999 = cljs.core.chunk_first.call(null,seq__12932_12998__$1);{
var G__13000 = cljs.core.chunk_rest.call(null,seq__12932_12998__$1);
var G__13001 = c__4191__auto___12999;
var G__13002 = cljs.core.count.call(null,c__4191__auto___12999);
var G__13003 = 0;
seq__12932_12957 = G__13000;
chunk__12939_12958 = G__13001;
count__12940_12959 = G__13002;
i__12941_12960 = G__13003;
continue;
}
} else
{var vec__12951_13004 = cljs.core.first.call(null,seq__12932_12998__$1);var orig_type_13005 = cljs.core.nth.call(null,vec__12951_13004,0,null);var f_13006 = cljs.core.nth.call(null,vec__12951_13004,1,null);var seq__12933_13007 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13005,new cljs.core.PersistentArrayMap.fromArray([orig_type_13005,cljs.core.identity], true, false)));var chunk__12935_13008 = null;var count__12936_13009 = 0;var i__12937_13010 = 0;while(true){
if((i__12937_13010 < count__12936_13009))
{var vec__12952_13011 = cljs.core._nth.call(null,chunk__12935_13008,i__12937_13010);var actual_type_13012 = cljs.core.nth.call(null,vec__12952_13011,0,null);var __13013 = cljs.core.nth.call(null,vec__12952_13011,1,null);var keys_13014 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12956,actual_type_13012,f_13006], null);var canonical_f_13015 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12955),keys_13014);dommy.core.update_event_listeners_BANG_.call(null,elem_12955,dommy.utils.dissoc_in,keys_13014);
if(cljs.core.truth_(elem_12955.removeEventListener))
{elem_12955.removeEventListener(cljs.core.name.call(null,actual_type_13012),canonical_f_13015);
} else
{elem_12955.detachEvent(cljs.core.name.call(null,actual_type_13012),canonical_f_13015);
}
{
var G__13016 = seq__12933_13007;
var G__13017 = chunk__12935_13008;
var G__13018 = count__12936_13009;
var G__13019 = (i__12937_13010 + 1);
seq__12933_13007 = G__13016;
chunk__12935_13008 = G__13017;
count__12936_13009 = G__13018;
i__12937_13010 = G__13019;
continue;
}
} else
{var temp__4092__auto___13020__$1 = cljs.core.seq.call(null,seq__12933_13007);if(temp__4092__auto___13020__$1)
{var seq__12933_13021__$1 = temp__4092__auto___13020__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12933_13021__$1))
{var c__4191__auto___13022 = cljs.core.chunk_first.call(null,seq__12933_13021__$1);{
var G__13023 = cljs.core.chunk_rest.call(null,seq__12933_13021__$1);
var G__13024 = c__4191__auto___13022;
var G__13025 = cljs.core.count.call(null,c__4191__auto___13022);
var G__13026 = 0;
seq__12933_13007 = G__13023;
chunk__12935_13008 = G__13024;
count__12936_13009 = G__13025;
i__12937_13010 = G__13026;
continue;
}
} else
{var vec__12953_13027 = cljs.core.first.call(null,seq__12933_13021__$1);var actual_type_13028 = cljs.core.nth.call(null,vec__12953_13027,0,null);var __13029 = cljs.core.nth.call(null,vec__12953_13027,1,null);var keys_13030 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12956,actual_type_13028,f_13006], null);var canonical_f_13031 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12955),keys_13030);dommy.core.update_event_listeners_BANG_.call(null,elem_12955,dommy.utils.dissoc_in,keys_13030);
if(cljs.core.truth_(elem_12955.removeEventListener))
{elem_12955.removeEventListener(cljs.core.name.call(null,actual_type_13028),canonical_f_13031);
} else
{elem_12955.detachEvent(cljs.core.name.call(null,actual_type_13028),canonical_f_13031);
}
{
var G__13032 = cljs.core.next.call(null,seq__12933_13021__$1);
var G__13033 = null;
var G__13034 = 0;
var G__13035 = 0;
seq__12933_13007 = G__13032;
chunk__12935_13008 = G__13033;
count__12936_13009 = G__13034;
i__12937_13010 = G__13035;
continue;
}
}
} else
{}
}
break;
}
{
var G__13036 = cljs.core.next.call(null,seq__12932_12998__$1);
var G__13037 = null;
var G__13038 = 0;
var G__13039 = 0;
seq__12932_12957 = G__13036;
chunk__12939_12958 = G__13037;
count__12940_12959 = G__13038;
i__12941_12960 = G__13039;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13040){
var elem_sel = cljs.core.first(arglist__13040);
var type_fs = cljs.core.rest(arglist__13040);
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
var vec__13048_13055 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13056 = cljs.core.nth.call(null,vec__13048_13055,0,null);var selector_13057 = cljs.core.nth.call(null,vec__13048_13055,1,null);var seq__13049_13058 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13050_13059 = null;var count__13051_13060 = 0;var i__13052_13061 = 0;while(true){
if((i__13052_13061 < count__13051_13060))
{var vec__13053_13062 = cljs.core._nth.call(null,chunk__13050_13059,i__13052_13061);var type_13063 = cljs.core.nth.call(null,vec__13053_13062,0,null);var f_13064 = cljs.core.nth.call(null,vec__13053_13062,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13063,((function (seq__13049_13058,chunk__13050_13059,count__13051_13060,i__13052_13061,vec__13053_13062,type_13063,f_13064){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13063,this_fn);
return f_13064.call(null,e);
});})(seq__13049_13058,chunk__13050_13059,count__13051_13060,i__13052_13061,vec__13053_13062,type_13063,f_13064))
);
{
var G__13065 = seq__13049_13058;
var G__13066 = chunk__13050_13059;
var G__13067 = count__13051_13060;
var G__13068 = (i__13052_13061 + 1);
seq__13049_13058 = G__13065;
chunk__13050_13059 = G__13066;
count__13051_13060 = G__13067;
i__13052_13061 = G__13068;
continue;
}
} else
{var temp__4092__auto___13069 = cljs.core.seq.call(null,seq__13049_13058);if(temp__4092__auto___13069)
{var seq__13049_13070__$1 = temp__4092__auto___13069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13049_13070__$1))
{var c__4191__auto___13071 = cljs.core.chunk_first.call(null,seq__13049_13070__$1);{
var G__13072 = cljs.core.chunk_rest.call(null,seq__13049_13070__$1);
var G__13073 = c__4191__auto___13071;
var G__13074 = cljs.core.count.call(null,c__4191__auto___13071);
var G__13075 = 0;
seq__13049_13058 = G__13072;
chunk__13050_13059 = G__13073;
count__13051_13060 = G__13074;
i__13052_13061 = G__13075;
continue;
}
} else
{var vec__13054_13076 = cljs.core.first.call(null,seq__13049_13070__$1);var type_13077 = cljs.core.nth.call(null,vec__13054_13076,0,null);var f_13078 = cljs.core.nth.call(null,vec__13054_13076,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13077,((function (seq__13049_13058,chunk__13050_13059,count__13051_13060,i__13052_13061,vec__13054_13076,type_13077,f_13078,seq__13049_13070__$1,temp__4092__auto___13069){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13077,this_fn);
return f_13078.call(null,e);
});})(seq__13049_13058,chunk__13050_13059,count__13051_13060,i__13052_13061,vec__13054_13076,type_13077,f_13078,seq__13049_13070__$1,temp__4092__auto___13069))
);
{
var G__13079 = cljs.core.next.call(null,seq__13049_13070__$1);
var G__13080 = null;
var G__13081 = 0;
var G__13082 = 0;
seq__13049_13058 = G__13079;
chunk__13050_13059 = G__13080;
count__13051_13060 = G__13081;
i__13052_13061 = G__13082;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__13083){
var elem_sel = cljs.core.first(arglist__13083);
var type_fs = cljs.core.rest(arglist__13083);
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
var fire_BANG___delegate = function (node,event_type,p__13084){var vec__13086 = p__13084;var update_event_BANG_ = cljs.core.nth.call(null,vec__13086,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__13084 = null;if (arguments.length > 2) {
  p__13084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__13084);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__13087){
var node = cljs.core.first(arglist__13087);
arglist__13087 = cljs.core.next(arglist__13087);
var event_type = cljs.core.first(arglist__13087);
var p__13084 = cljs.core.rest(arglist__13087);
return fire_BANG___delegate(node,event_type,p__13084);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
