// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj16374 = {};return obj16374;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (dommy.template._elem[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (dommy.template._elem["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_16377 = node_str.substring(base_idx);while(true){
var next_idx_16378 = dommy.template.next_css_index.call(null,str_16377,1);var frag_16379 = (((next_idx_16378 >= 0))?str_16377.substring(0,next_idx_16378):str_16377);var G__16376_16380 = frag_16379.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16376_16380))
{node.setAttribute("id",frag_16379.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16376_16380))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16379.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16379.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16378 >= 0))
{{
var G__16381 = str_16377.substring(next_idx_16378);
str_16377 = G__16381;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16387 = data;if(G__16387)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16387.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16387.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16387);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16387);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16388_16392 = cljs.core.seq.call(null,data);var chunk__16389_16393 = null;var count__16390_16394 = 0;var i__16391_16395 = 0;while(true){
if((i__16391_16395 < count__16390_16394))
{var child_16396 = cljs.core._nth.call(null,chunk__16389_16393,i__16391_16395);__GT_document_fragment.call(null,result_frag,child_16396);
{
var G__16397 = seq__16388_16392;
var G__16398 = chunk__16389_16393;
var G__16399 = count__16390_16394;
var G__16400 = (i__16391_16395 + 1);
seq__16388_16392 = G__16397;
chunk__16389_16393 = G__16398;
count__16390_16394 = G__16399;
i__16391_16395 = G__16400;
continue;
}
} else
{var temp__4092__auto___16401 = cljs.core.seq.call(null,seq__16388_16392);if(temp__4092__auto___16401)
{var seq__16388_16402__$1 = temp__4092__auto___16401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388_16402__$1))
{var c__4191__auto___16403 = cljs.core.chunk_first.call(null,seq__16388_16402__$1);{
var G__16404 = cljs.core.chunk_rest.call(null,seq__16388_16402__$1);
var G__16405 = c__4191__auto___16403;
var G__16406 = cljs.core.count.call(null,c__4191__auto___16403);
var G__16407 = 0;
seq__16388_16392 = G__16404;
chunk__16389_16393 = G__16405;
count__16390_16394 = G__16406;
i__16391_16395 = G__16407;
continue;
}
} else
{var child_16408 = cljs.core.first.call(null,seq__16388_16402__$1);__GT_document_fragment.call(null,result_frag,child_16408);
{
var G__16409 = cljs.core.next.call(null,seq__16388_16402__$1);
var G__16410 = null;
var G__16411 = 0;
var G__16412 = 0;
seq__16388_16392 = G__16409;
chunk__16389_16393 = G__16410;
count__16390_16394 = G__16411;
i__16391_16395 = G__16412;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16414 = data;if(G__16414)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16414.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16414.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16414);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16414);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__16415){var vec__16435 = p__16415;var tag_name = cljs.core.nth.call(null,vec__16435,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16435,1,null);var children = cljs.core.nthnext.call(null,vec__16435,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16437 = maybe_attrs;if(G__16437)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16437.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16437.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16437);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16437);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16438_16454 = cljs.core.seq.call(null,attrs);var chunk__16439_16455 = null;var count__16440_16456 = 0;var i__16441_16457 = 0;while(true){
if((i__16441_16457 < count__16440_16456))
{var vec__16442_16458 = cljs.core._nth.call(null,chunk__16439_16455,i__16441_16457);var k_16459 = cljs.core.nth.call(null,vec__16442_16458,0,null);var v_16460 = cljs.core.nth.call(null,vec__16442_16458,1,null);var G__16443_16461 = k_16459;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16443_16461))
{var seq__16444_16462 = cljs.core.seq.call(null,v_16460);var chunk__16445_16463 = null;var count__16446_16464 = 0;var i__16447_16465 = 0;while(true){
if((i__16447_16465 < count__16446_16464))
{var c_16466 = cljs.core._nth.call(null,chunk__16445_16463,i__16447_16465);dommy.attrs.add_class_BANG_.call(null,n,c_16466);
{
var G__16467 = seq__16444_16462;
var G__16468 = chunk__16445_16463;
var G__16469 = count__16446_16464;
var G__16470 = (i__16447_16465 + 1);
seq__16444_16462 = G__16467;
chunk__16445_16463 = G__16468;
count__16446_16464 = G__16469;
i__16447_16465 = G__16470;
continue;
}
} else
{var temp__4092__auto___16471 = cljs.core.seq.call(null,seq__16444_16462);if(temp__4092__auto___16471)
{var seq__16444_16472__$1 = temp__4092__auto___16471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16444_16472__$1))
{var c__4191__auto___16473 = cljs.core.chunk_first.call(null,seq__16444_16472__$1);{
var G__16474 = cljs.core.chunk_rest.call(null,seq__16444_16472__$1);
var G__16475 = c__4191__auto___16473;
var G__16476 = cljs.core.count.call(null,c__4191__auto___16473);
var G__16477 = 0;
seq__16444_16462 = G__16474;
chunk__16445_16463 = G__16475;
count__16446_16464 = G__16476;
i__16447_16465 = G__16477;
continue;
}
} else
{var c_16478 = cljs.core.first.call(null,seq__16444_16472__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16478);
{
var G__16479 = cljs.core.next.call(null,seq__16444_16472__$1);
var G__16480 = null;
var G__16481 = 0;
var G__16482 = 0;
seq__16444_16462 = G__16479;
chunk__16445_16463 = G__16480;
count__16446_16464 = G__16481;
i__16447_16465 = G__16482;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16443_16461))
{dommy.attrs.add_class_BANG_.call(null,n,v_16460);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16459,v_16460);
} else
{}
}
}
{
var G__16483 = seq__16438_16454;
var G__16484 = chunk__16439_16455;
var G__16485 = count__16440_16456;
var G__16486 = (i__16441_16457 + 1);
seq__16438_16454 = G__16483;
chunk__16439_16455 = G__16484;
count__16440_16456 = G__16485;
i__16441_16457 = G__16486;
continue;
}
} else
{var temp__4092__auto___16487 = cljs.core.seq.call(null,seq__16438_16454);if(temp__4092__auto___16487)
{var seq__16438_16488__$1 = temp__4092__auto___16487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16438_16488__$1))
{var c__4191__auto___16489 = cljs.core.chunk_first.call(null,seq__16438_16488__$1);{
var G__16490 = cljs.core.chunk_rest.call(null,seq__16438_16488__$1);
var G__16491 = c__4191__auto___16489;
var G__16492 = cljs.core.count.call(null,c__4191__auto___16489);
var G__16493 = 0;
seq__16438_16454 = G__16490;
chunk__16439_16455 = G__16491;
count__16440_16456 = G__16492;
i__16441_16457 = G__16493;
continue;
}
} else
{var vec__16448_16494 = cljs.core.first.call(null,seq__16438_16488__$1);var k_16495 = cljs.core.nth.call(null,vec__16448_16494,0,null);var v_16496 = cljs.core.nth.call(null,vec__16448_16494,1,null);var G__16449_16497 = k_16495;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16449_16497))
{var seq__16450_16498 = cljs.core.seq.call(null,v_16496);var chunk__16451_16499 = null;var count__16452_16500 = 0;var i__16453_16501 = 0;while(true){
if((i__16453_16501 < count__16452_16500))
{var c_16502 = cljs.core._nth.call(null,chunk__16451_16499,i__16453_16501);dommy.attrs.add_class_BANG_.call(null,n,c_16502);
{
var G__16503 = seq__16450_16498;
var G__16504 = chunk__16451_16499;
var G__16505 = count__16452_16500;
var G__16506 = (i__16453_16501 + 1);
seq__16450_16498 = G__16503;
chunk__16451_16499 = G__16504;
count__16452_16500 = G__16505;
i__16453_16501 = G__16506;
continue;
}
} else
{var temp__4092__auto___16507__$1 = cljs.core.seq.call(null,seq__16450_16498);if(temp__4092__auto___16507__$1)
{var seq__16450_16508__$1 = temp__4092__auto___16507__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16450_16508__$1))
{var c__4191__auto___16509 = cljs.core.chunk_first.call(null,seq__16450_16508__$1);{
var G__16510 = cljs.core.chunk_rest.call(null,seq__16450_16508__$1);
var G__16511 = c__4191__auto___16509;
var G__16512 = cljs.core.count.call(null,c__4191__auto___16509);
var G__16513 = 0;
seq__16450_16498 = G__16510;
chunk__16451_16499 = G__16511;
count__16452_16500 = G__16512;
i__16453_16501 = G__16513;
continue;
}
} else
{var c_16514 = cljs.core.first.call(null,seq__16450_16508__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16514);
{
var G__16515 = cljs.core.next.call(null,seq__16450_16508__$1);
var G__16516 = null;
var G__16517 = 0;
var G__16518 = 0;
seq__16450_16498 = G__16515;
chunk__16451_16499 = G__16516;
count__16452_16500 = G__16517;
i__16453_16501 = G__16518;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16449_16497))
{dommy.attrs.add_class_BANG_.call(null,n,v_16496);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16495,v_16496);
} else
{}
}
}
{
var G__16519 = cljs.core.next.call(null,seq__16438_16488__$1);
var G__16520 = null;
var G__16521 = 0;
var G__16522 = 0;
seq__16438_16454 = G__16519;
chunk__16439_16455 = G__16520;
count__16440_16456 = G__16521;
i__16441_16457 = G__16522;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e16523){if((e16523 instanceof ReferenceError))
{var __16524 = e16523;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16523;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16526 = data;if(G__16526)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16526.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16526.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16526);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16526);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
