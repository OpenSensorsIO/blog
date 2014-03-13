// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj13106 = {};return obj13106;
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
{var str_13109 = node_str.substring(base_idx);while(true){
var next_idx_13110 = dommy.template.next_css_index.call(null,str_13109,1);var frag_13111 = (((next_idx_13110 >= 0))?str_13109.substring(0,next_idx_13110):str_13109);var G__13108_13112 = frag_13111.charAt(0);if(cljs.core._EQ_.call(null,"#",G__13108_13112))
{node.setAttribute("id",frag_13111.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__13108_13112))
{dommy.attrs.add_class_BANG_.call(null,node,frag_13111.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_13111.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_13110 >= 0))
{{
var G__13113 = str_13109.substring(next_idx_13110);
str_13109 = G__13113;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__13119 = data;if(G__13119)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13119.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13119.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13119);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13119);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__13120_13124 = cljs.core.seq.call(null,data);var chunk__13121_13125 = null;var count__13122_13126 = 0;var i__13123_13127 = 0;while(true){
if((i__13123_13127 < count__13122_13126))
{var child_13128 = cljs.core._nth.call(null,chunk__13121_13125,i__13123_13127);__GT_document_fragment.call(null,result_frag,child_13128);
{
var G__13129 = seq__13120_13124;
var G__13130 = chunk__13121_13125;
var G__13131 = count__13122_13126;
var G__13132 = (i__13123_13127 + 1);
seq__13120_13124 = G__13129;
chunk__13121_13125 = G__13130;
count__13122_13126 = G__13131;
i__13123_13127 = G__13132;
continue;
}
} else
{var temp__4092__auto___13133 = cljs.core.seq.call(null,seq__13120_13124);if(temp__4092__auto___13133)
{var seq__13120_13134__$1 = temp__4092__auto___13133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13120_13134__$1))
{var c__4191__auto___13135 = cljs.core.chunk_first.call(null,seq__13120_13134__$1);{
var G__13136 = cljs.core.chunk_rest.call(null,seq__13120_13134__$1);
var G__13137 = c__4191__auto___13135;
var G__13138 = cljs.core.count.call(null,c__4191__auto___13135);
var G__13139 = 0;
seq__13120_13124 = G__13136;
chunk__13121_13125 = G__13137;
count__13122_13126 = G__13138;
i__13123_13127 = G__13139;
continue;
}
} else
{var child_13140 = cljs.core.first.call(null,seq__13120_13134__$1);__GT_document_fragment.call(null,result_frag,child_13140);
{
var G__13141 = cljs.core.next.call(null,seq__13120_13134__$1);
var G__13142 = null;
var G__13143 = 0;
var G__13144 = 0;
seq__13120_13124 = G__13141;
chunk__13121_13125 = G__13142;
count__13122_13126 = G__13143;
i__13123_13127 = G__13144;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__13146 = data;if(G__13146)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13146.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13146.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13146);
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
dommy.template.compound_element = (function compound_element(p__13147){var vec__13167 = p__13147;var tag_name = cljs.core.nth.call(null,vec__13167,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__13167,1,null);var children = cljs.core.nthnext.call(null,vec__13167,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__13169 = maybe_attrs;if(G__13169)
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
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__13170_13186 = cljs.core.seq.call(null,attrs);var chunk__13171_13187 = null;var count__13172_13188 = 0;var i__13173_13189 = 0;while(true){
if((i__13173_13189 < count__13172_13188))
{var vec__13174_13190 = cljs.core._nth.call(null,chunk__13171_13187,i__13173_13189);var k_13191 = cljs.core.nth.call(null,vec__13174_13190,0,null);var v_13192 = cljs.core.nth.call(null,vec__13174_13190,1,null);var G__13175_13193 = k_13191;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13175_13193))
{var seq__13176_13194 = cljs.core.seq.call(null,v_13192);var chunk__13177_13195 = null;var count__13178_13196 = 0;var i__13179_13197 = 0;while(true){
if((i__13179_13197 < count__13178_13196))
{var c_13198 = cljs.core._nth.call(null,chunk__13177_13195,i__13179_13197);dommy.attrs.add_class_BANG_.call(null,n,c_13198);
{
var G__13199 = seq__13176_13194;
var G__13200 = chunk__13177_13195;
var G__13201 = count__13178_13196;
var G__13202 = (i__13179_13197 + 1);
seq__13176_13194 = G__13199;
chunk__13177_13195 = G__13200;
count__13178_13196 = G__13201;
i__13179_13197 = G__13202;
continue;
}
} else
{var temp__4092__auto___13203 = cljs.core.seq.call(null,seq__13176_13194);if(temp__4092__auto___13203)
{var seq__13176_13204__$1 = temp__4092__auto___13203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13176_13204__$1))
{var c__4191__auto___13205 = cljs.core.chunk_first.call(null,seq__13176_13204__$1);{
var G__13206 = cljs.core.chunk_rest.call(null,seq__13176_13204__$1);
var G__13207 = c__4191__auto___13205;
var G__13208 = cljs.core.count.call(null,c__4191__auto___13205);
var G__13209 = 0;
seq__13176_13194 = G__13206;
chunk__13177_13195 = G__13207;
count__13178_13196 = G__13208;
i__13179_13197 = G__13209;
continue;
}
} else
{var c_13210 = cljs.core.first.call(null,seq__13176_13204__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13210);
{
var G__13211 = cljs.core.next.call(null,seq__13176_13204__$1);
var G__13212 = null;
var G__13213 = 0;
var G__13214 = 0;
seq__13176_13194 = G__13211;
chunk__13177_13195 = G__13212;
count__13178_13196 = G__13213;
i__13179_13197 = G__13214;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13175_13193))
{dommy.attrs.add_class_BANG_.call(null,n,v_13192);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13191,v_13192);
} else
{}
}
}
{
var G__13215 = seq__13170_13186;
var G__13216 = chunk__13171_13187;
var G__13217 = count__13172_13188;
var G__13218 = (i__13173_13189 + 1);
seq__13170_13186 = G__13215;
chunk__13171_13187 = G__13216;
count__13172_13188 = G__13217;
i__13173_13189 = G__13218;
continue;
}
} else
{var temp__4092__auto___13219 = cljs.core.seq.call(null,seq__13170_13186);if(temp__4092__auto___13219)
{var seq__13170_13220__$1 = temp__4092__auto___13219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13170_13220__$1))
{var c__4191__auto___13221 = cljs.core.chunk_first.call(null,seq__13170_13220__$1);{
var G__13222 = cljs.core.chunk_rest.call(null,seq__13170_13220__$1);
var G__13223 = c__4191__auto___13221;
var G__13224 = cljs.core.count.call(null,c__4191__auto___13221);
var G__13225 = 0;
seq__13170_13186 = G__13222;
chunk__13171_13187 = G__13223;
count__13172_13188 = G__13224;
i__13173_13189 = G__13225;
continue;
}
} else
{var vec__13180_13226 = cljs.core.first.call(null,seq__13170_13220__$1);var k_13227 = cljs.core.nth.call(null,vec__13180_13226,0,null);var v_13228 = cljs.core.nth.call(null,vec__13180_13226,1,null);var G__13181_13229 = k_13227;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13181_13229))
{var seq__13182_13230 = cljs.core.seq.call(null,v_13228);var chunk__13183_13231 = null;var count__13184_13232 = 0;var i__13185_13233 = 0;while(true){
if((i__13185_13233 < count__13184_13232))
{var c_13234 = cljs.core._nth.call(null,chunk__13183_13231,i__13185_13233);dommy.attrs.add_class_BANG_.call(null,n,c_13234);
{
var G__13235 = seq__13182_13230;
var G__13236 = chunk__13183_13231;
var G__13237 = count__13184_13232;
var G__13238 = (i__13185_13233 + 1);
seq__13182_13230 = G__13235;
chunk__13183_13231 = G__13236;
count__13184_13232 = G__13237;
i__13185_13233 = G__13238;
continue;
}
} else
{var temp__4092__auto___13239__$1 = cljs.core.seq.call(null,seq__13182_13230);if(temp__4092__auto___13239__$1)
{var seq__13182_13240__$1 = temp__4092__auto___13239__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13182_13240__$1))
{var c__4191__auto___13241 = cljs.core.chunk_first.call(null,seq__13182_13240__$1);{
var G__13242 = cljs.core.chunk_rest.call(null,seq__13182_13240__$1);
var G__13243 = c__4191__auto___13241;
var G__13244 = cljs.core.count.call(null,c__4191__auto___13241);
var G__13245 = 0;
seq__13182_13230 = G__13242;
chunk__13183_13231 = G__13243;
count__13184_13232 = G__13244;
i__13185_13233 = G__13245;
continue;
}
} else
{var c_13246 = cljs.core.first.call(null,seq__13182_13240__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13246);
{
var G__13247 = cljs.core.next.call(null,seq__13182_13240__$1);
var G__13248 = null;
var G__13249 = 0;
var G__13250 = 0;
seq__13182_13230 = G__13247;
chunk__13183_13231 = G__13248;
count__13184_13232 = G__13249;
i__13185_13233 = G__13250;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13181_13229))
{dommy.attrs.add_class_BANG_.call(null,n,v_13228);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13227,v_13228);
} else
{}
}
}
{
var G__13251 = cljs.core.next.call(null,seq__13170_13220__$1);
var G__13252 = null;
var G__13253 = 0;
var G__13254 = 0;
seq__13170_13186 = G__13251;
chunk__13171_13187 = G__13252;
count__13172_13188 = G__13253;
i__13173_13189 = G__13254;
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
}catch (e13255){if((e13255 instanceof ReferenceError))
{var __13256 = e13255;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13255;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__13258 = data;if(G__13258)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13258.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13258.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13258);
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
