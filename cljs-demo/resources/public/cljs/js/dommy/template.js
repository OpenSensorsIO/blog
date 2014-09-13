// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj13129 = {};return obj13129;
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
{var str_13132 = node_str.substring(base_idx);while(true){
var next_idx_13133 = dommy.template.next_css_index.call(null,str_13132,1);var frag_13134 = (((next_idx_13133 >= 0))?str_13132.substring(0,next_idx_13133):str_13132);var G__13131_13135 = frag_13134.charAt(0);if(cljs.core._EQ_.call(null,"#",G__13131_13135))
{node.setAttribute("id",frag_13134.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__13131_13135))
{dommy.attrs.add_class_BANG_.call(null,node,frag_13134.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_13134.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_13133 >= 0))
{{
var G__13136 = str_13132.substring(next_idx_13133);
str_13132 = G__13136;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__13142 = data;if(G__13142)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13142.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13142.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13142);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__13143_13147 = cljs.core.seq.call(null,data);var chunk__13144_13148 = null;var count__13145_13149 = 0;var i__13146_13150 = 0;while(true){
if((i__13146_13150 < count__13145_13149))
{var child_13151 = cljs.core._nth.call(null,chunk__13144_13148,i__13146_13150);__GT_document_fragment.call(null,result_frag,child_13151);
{
var G__13152 = seq__13143_13147;
var G__13153 = chunk__13144_13148;
var G__13154 = count__13145_13149;
var G__13155 = (i__13146_13150 + 1);
seq__13143_13147 = G__13152;
chunk__13144_13148 = G__13153;
count__13145_13149 = G__13154;
i__13146_13150 = G__13155;
continue;
}
} else
{var temp__4092__auto___13156 = cljs.core.seq.call(null,seq__13143_13147);if(temp__4092__auto___13156)
{var seq__13143_13157__$1 = temp__4092__auto___13156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13143_13157__$1))
{var c__4191__auto___13158 = cljs.core.chunk_first.call(null,seq__13143_13157__$1);{
var G__13159 = cljs.core.chunk_rest.call(null,seq__13143_13157__$1);
var G__13160 = c__4191__auto___13158;
var G__13161 = cljs.core.count.call(null,c__4191__auto___13158);
var G__13162 = 0;
seq__13143_13147 = G__13159;
chunk__13144_13148 = G__13160;
count__13145_13149 = G__13161;
i__13146_13150 = G__13162;
continue;
}
} else
{var child_13163 = cljs.core.first.call(null,seq__13143_13157__$1);__GT_document_fragment.call(null,result_frag,child_13163);
{
var G__13164 = cljs.core.next.call(null,seq__13143_13157__$1);
var G__13165 = null;
var G__13166 = 0;
var G__13167 = 0;
seq__13143_13147 = G__13164;
chunk__13144_13148 = G__13165;
count__13145_13149 = G__13166;
i__13146_13150 = G__13167;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__13169 = data;if(G__13169)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13169.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13169.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13169);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13169);
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
dommy.template.compound_element = (function compound_element(p__13170){var vec__13190 = p__13170;var tag_name = cljs.core.nth.call(null,vec__13190,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__13190,1,null);var children = cljs.core.nthnext.call(null,vec__13190,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__13192 = maybe_attrs;if(G__13192)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13192.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13192);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__13193_13209 = cljs.core.seq.call(null,attrs);var chunk__13194_13210 = null;var count__13195_13211 = 0;var i__13196_13212 = 0;while(true){
if((i__13196_13212 < count__13195_13211))
{var vec__13197_13213 = cljs.core._nth.call(null,chunk__13194_13210,i__13196_13212);var k_13214 = cljs.core.nth.call(null,vec__13197_13213,0,null);var v_13215 = cljs.core.nth.call(null,vec__13197_13213,1,null);var G__13198_13216 = k_13214;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13198_13216))
{var seq__13199_13217 = cljs.core.seq.call(null,v_13215);var chunk__13200_13218 = null;var count__13201_13219 = 0;var i__13202_13220 = 0;while(true){
if((i__13202_13220 < count__13201_13219))
{var c_13221 = cljs.core._nth.call(null,chunk__13200_13218,i__13202_13220);dommy.attrs.add_class_BANG_.call(null,n,c_13221);
{
var G__13222 = seq__13199_13217;
var G__13223 = chunk__13200_13218;
var G__13224 = count__13201_13219;
var G__13225 = (i__13202_13220 + 1);
seq__13199_13217 = G__13222;
chunk__13200_13218 = G__13223;
count__13201_13219 = G__13224;
i__13202_13220 = G__13225;
continue;
}
} else
{var temp__4092__auto___13226 = cljs.core.seq.call(null,seq__13199_13217);if(temp__4092__auto___13226)
{var seq__13199_13227__$1 = temp__4092__auto___13226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13199_13227__$1))
{var c__4191__auto___13228 = cljs.core.chunk_first.call(null,seq__13199_13227__$1);{
var G__13229 = cljs.core.chunk_rest.call(null,seq__13199_13227__$1);
var G__13230 = c__4191__auto___13228;
var G__13231 = cljs.core.count.call(null,c__4191__auto___13228);
var G__13232 = 0;
seq__13199_13217 = G__13229;
chunk__13200_13218 = G__13230;
count__13201_13219 = G__13231;
i__13202_13220 = G__13232;
continue;
}
} else
{var c_13233 = cljs.core.first.call(null,seq__13199_13227__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13233);
{
var G__13234 = cljs.core.next.call(null,seq__13199_13227__$1);
var G__13235 = null;
var G__13236 = 0;
var G__13237 = 0;
seq__13199_13217 = G__13234;
chunk__13200_13218 = G__13235;
count__13201_13219 = G__13236;
i__13202_13220 = G__13237;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13198_13216))
{dommy.attrs.add_class_BANG_.call(null,n,v_13215);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13214,v_13215);
} else
{}
}
}
{
var G__13238 = seq__13193_13209;
var G__13239 = chunk__13194_13210;
var G__13240 = count__13195_13211;
var G__13241 = (i__13196_13212 + 1);
seq__13193_13209 = G__13238;
chunk__13194_13210 = G__13239;
count__13195_13211 = G__13240;
i__13196_13212 = G__13241;
continue;
}
} else
{var temp__4092__auto___13242 = cljs.core.seq.call(null,seq__13193_13209);if(temp__4092__auto___13242)
{var seq__13193_13243__$1 = temp__4092__auto___13242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13193_13243__$1))
{var c__4191__auto___13244 = cljs.core.chunk_first.call(null,seq__13193_13243__$1);{
var G__13245 = cljs.core.chunk_rest.call(null,seq__13193_13243__$1);
var G__13246 = c__4191__auto___13244;
var G__13247 = cljs.core.count.call(null,c__4191__auto___13244);
var G__13248 = 0;
seq__13193_13209 = G__13245;
chunk__13194_13210 = G__13246;
count__13195_13211 = G__13247;
i__13196_13212 = G__13248;
continue;
}
} else
{var vec__13203_13249 = cljs.core.first.call(null,seq__13193_13243__$1);var k_13250 = cljs.core.nth.call(null,vec__13203_13249,0,null);var v_13251 = cljs.core.nth.call(null,vec__13203_13249,1,null);var G__13204_13252 = k_13250;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13204_13252))
{var seq__13205_13253 = cljs.core.seq.call(null,v_13251);var chunk__13206_13254 = null;var count__13207_13255 = 0;var i__13208_13256 = 0;while(true){
if((i__13208_13256 < count__13207_13255))
{var c_13257 = cljs.core._nth.call(null,chunk__13206_13254,i__13208_13256);dommy.attrs.add_class_BANG_.call(null,n,c_13257);
{
var G__13258 = seq__13205_13253;
var G__13259 = chunk__13206_13254;
var G__13260 = count__13207_13255;
var G__13261 = (i__13208_13256 + 1);
seq__13205_13253 = G__13258;
chunk__13206_13254 = G__13259;
count__13207_13255 = G__13260;
i__13208_13256 = G__13261;
continue;
}
} else
{var temp__4092__auto___13262__$1 = cljs.core.seq.call(null,seq__13205_13253);if(temp__4092__auto___13262__$1)
{var seq__13205_13263__$1 = temp__4092__auto___13262__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13205_13263__$1))
{var c__4191__auto___13264 = cljs.core.chunk_first.call(null,seq__13205_13263__$1);{
var G__13265 = cljs.core.chunk_rest.call(null,seq__13205_13263__$1);
var G__13266 = c__4191__auto___13264;
var G__13267 = cljs.core.count.call(null,c__4191__auto___13264);
var G__13268 = 0;
seq__13205_13253 = G__13265;
chunk__13206_13254 = G__13266;
count__13207_13255 = G__13267;
i__13208_13256 = G__13268;
continue;
}
} else
{var c_13269 = cljs.core.first.call(null,seq__13205_13263__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13269);
{
var G__13270 = cljs.core.next.call(null,seq__13205_13263__$1);
var G__13271 = null;
var G__13272 = 0;
var G__13273 = 0;
seq__13205_13253 = G__13270;
chunk__13206_13254 = G__13271;
count__13207_13255 = G__13272;
i__13208_13256 = G__13273;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13204_13252))
{dommy.attrs.add_class_BANG_.call(null,n,v_13251);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13250,v_13251);
} else
{}
}
}
{
var G__13274 = cljs.core.next.call(null,seq__13193_13243__$1);
var G__13275 = null;
var G__13276 = 0;
var G__13277 = 0;
seq__13193_13209 = G__13274;
chunk__13194_13210 = G__13275;
count__13195_13211 = G__13276;
i__13196_13212 = G__13277;
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
}catch (e13278){if((e13278 instanceof ReferenceError))
{var __13279 = e13278;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13278;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__13281 = data;if(G__13281)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13281.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13281.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13281);
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
