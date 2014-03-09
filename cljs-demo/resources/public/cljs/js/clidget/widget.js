// Compiled by ClojureScript 0.0-2173
goog.provide('clidget.widget');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clidget.widget._STAR_context_STAR_ = null;
clidget.widget.get_widget_key = (function get_widget_key(system,keys_binding){return cljs.core.select_keys.call(null,system,cljs.core.map.call(null,new cljs.core.Keyword(null,"val-key","val-key",1243370789),keys_binding));
});
clidget.widget.resolve_state = (function resolve_state(system,keys_binding){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__12130(s__12131){return (new cljs.core.LazySeq(null,(function (){var s__12131__$1 = s__12131;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12131__$1);if(temp__4092__auto__)
{var s__12131__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12131__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12131__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12133 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12132 = 0;while(true){
if((i__12132 < size__4159__auto__))
{var map__12138 = cljs.core._nth.call(null,c__4158__auto__,i__12132);var map__12138__$1 = ((cljs.core.seq_QMARK_.call(null,map__12138))?cljs.core.apply.call(null,cljs.core.hash_map,map__12138):map__12138);var atom_key = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"atom-key","atom-key",1418973013));var val_key = cljs.core.get.call(null,map__12138__$1,new cljs.core.Keyword(null,"val-key","val-key",1243370789));cljs.core.chunk_append.call(null,b__12133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_key,(function (){var or__3443__auto__ = cljs.core.get.call(null,system,val_key);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{var G__12139 = atom_key;var G__12139__$1 = (((G__12139 == null))?null:cljs.core.get.call(null,system,G__12139));var G__12139__$2 = (((G__12139__$1 == null))?null:cljs.core.deref.call(null,G__12139__$1));return G__12139__$2;
}
})()], null));
{
var G__12142 = (i__12132 + 1);
i__12132 = G__12142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12133),iter__12130.call(null,cljs.core.chunk_rest.call(null,s__12131__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12133),null);
}
} else
{var map__12140 = cljs.core.first.call(null,s__12131__$2);var map__12140__$1 = ((cljs.core.seq_QMARK_.call(null,map__12140))?cljs.core.apply.call(null,cljs.core.hash_map,map__12140):map__12140);var atom_key = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"atom-key","atom-key",1418973013));var val_key = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"val-key","val-key",1243370789));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_key,(function (){var or__3443__auto__ = cljs.core.get.call(null,system,val_key);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{var G__12141 = atom_key;var G__12141__$1 = (((G__12141 == null))?null:cljs.core.get.call(null,system,G__12141));var G__12141__$2 = (((G__12141__$1 == null))?null:cljs.core.deref.call(null,G__12141__$1));return G__12141__$2;
}
})()], null),iter__12130.call(null,cljs.core.rest.call(null,s__12131__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,keys_binding);
})());
});
clidget.widget.get_cached_widget = (function get_cached_widget(p__12143,widget_key){var map__12145 = p__12143;var map__12145__$1 = ((cljs.core.seq_QMARK_.call(null,map__12145))?cljs.core.apply.call(null,cljs.core.hash_map,map__12145):map__12145);var _BANG_to_cache = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"!to-cache","!to-cache",2911374403));var from_cache = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"from-cache","from-cache",2067785489));if(cljs.core.truth_(from_cache))
{var cached_widget = cljs.core.get.call(null,from_cache,widget_key);if(cljs.core.truth_((function (){var and__3431__auto__ = cached_widget;if(cljs.core.truth_(and__3431__auto__))
{return _BANG_to_cache;
} else
{return and__3431__auto__;
}
})()))
{cljs.core.swap_BANG_.call(null,_BANG_to_cache,cljs.core.assoc,widget_key,cached_widget);
return cached_widget;
} else
{return null;
}
} else
{return null;
}
});
clidget.widget.cache_widget_BANG_ = (function cache_widget_BANG_(widget,_BANG_widget_cache,widget_key){if(cljs.core.truth_(_BANG_widget_cache))
{return cljs.core.swap_BANG_.call(null,_BANG_widget_cache,cljs.core.assoc,widget_key,widget);
} else
{return null;
}
});
clidget.widget.init_locals = (function init_locals(system,locals_binding){return cljs.core.reduce.call(null,(function (system__$1,p__12148){var vec__12149 = p__12148;var atom_key = cljs.core.nth.call(null,vec__12149,0,null);var init_fn = cljs.core.nth.call(null,vec__12149,1,null);return cljs.core.assoc.call(null,system__$1,atom_key,init_fn.call(null));
}),system,locals_binding);
});
clidget.widget.add_watches = (function add_watches(system,keys_binding,render_ch){var seq__12158 = cljs.core.seq.call(null,keys_binding);var chunk__12159 = null;var count__12160 = 0;var i__12161 = 0;while(true){
if((i__12161 < count__12160))
{var map__12162 = cljs.core._nth.call(null,chunk__12159,i__12161);var map__12162__$1 = ((cljs.core.seq_QMARK_.call(null,map__12162))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162):map__12162);var atom_key = cljs.core.get.call(null,map__12162__$1,new cljs.core.Keyword(null,"atom-key","atom-key",1418973013));var val_key = cljs.core.get.call(null,map__12162__$1,new cljs.core.Keyword(null,"val-key","val-key",1243370789));var temp__4092__auto___12166 = (function (){var G__12163 = atom_key;var G__12163__$1 = (((G__12163 == null))?null:cljs.core.get.call(null,system,G__12163));return G__12163__$1;
})();if(cljs.core.truth_(temp__4092__auto___12166))
{var watched_atom_12167 = temp__4092__auto___12166;cljs.core.add_watch.call(null,watched_atom_12167,cljs.core.gensym.call(null,"clidget"),((function (seq__12158,chunk__12159,count__12160,i__12161,watched_atom_12167,temp__4092__auto___12166,map__12162,map__12162__$1,atom_key,val_key){
return (function (_,___$1,___$2,new_value){return cljs.core.async.put_BANG_.call(null,render_ch,cljs.core.assoc.call(null,system,val_key,new_value));
});})(seq__12158,chunk__12159,count__12160,i__12161,watched_atom_12167,temp__4092__auto___12166,map__12162,map__12162__$1,atom_key,val_key))
);
} else
{}
{
var G__12168 = seq__12158;
var G__12169 = chunk__12159;
var G__12170 = count__12160;
var G__12171 = (i__12161 + 1);
seq__12158 = G__12168;
chunk__12159 = G__12169;
count__12160 = G__12170;
i__12161 = G__12171;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12158);if(temp__4092__auto__)
{var seq__12158__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12158__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__12158__$1);{
var G__12172 = cljs.core.chunk_rest.call(null,seq__12158__$1);
var G__12173 = c__4191__auto__;
var G__12174 = cljs.core.count.call(null,c__4191__auto__);
var G__12175 = 0;
seq__12158 = G__12172;
chunk__12159 = G__12173;
count__12160 = G__12174;
i__12161 = G__12175;
continue;
}
} else
{var map__12164 = cljs.core.first.call(null,seq__12158__$1);var map__12164__$1 = ((cljs.core.seq_QMARK_.call(null,map__12164))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164):map__12164);var atom_key = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"atom-key","atom-key",1418973013));var val_key = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"val-key","val-key",1243370789));var temp__4092__auto___12176__$1 = (function (){var G__12165 = atom_key;var G__12165__$1 = (((G__12165 == null))?null:cljs.core.get.call(null,system,G__12165));return G__12165__$1;
})();if(cljs.core.truth_(temp__4092__auto___12176__$1))
{var watched_atom_12177 = temp__4092__auto___12176__$1;cljs.core.add_watch.call(null,watched_atom_12177,cljs.core.gensym.call(null,"clidget"),((function (seq__12158,chunk__12159,count__12160,i__12161,watched_atom_12177,temp__4092__auto___12176__$1,map__12164,map__12164__$1,atom_key,val_key,seq__12158__$1,temp__4092__auto__){
return (function (_,___$1,___$2,new_value){return cljs.core.async.put_BANG_.call(null,render_ch,cljs.core.assoc.call(null,system,val_key,new_value));
});})(seq__12158,chunk__12159,count__12160,i__12161,watched_atom_12177,temp__4092__auto___12176__$1,map__12164,map__12164__$1,atom_key,val_key,seq__12158__$1,temp__4092__auto__))
);
} else
{}
{
var G__12178 = cljs.core.next.call(null,seq__12158__$1);
var G__12179 = null;
var G__12180 = 0;
var G__12181 = 0;
seq__12158 = G__12178;
chunk__12159 = G__12179;
count__12160 = G__12180;
i__12161 = G__12181;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clidget.widget.make_render_ch = (function make_render_ch(render_widget_BANG_){var ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var c__8703__auto___12240 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_12223){var state_val_12224 = (state_12223[1]);if((state_val_12224 === 7))
{var inst_12219 = (state_12223[2]);var state_12223__$1 = state_12223;var statearr_12225_12241 = state_12223__$1;(statearr_12225_12241[2] = inst_12219);
(statearr_12225_12241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12224 === 6))
{var state_12223__$1 = state_12223;var statearr_12226_12242 = state_12223__$1;(statearr_12226_12242[2] = null);
(statearr_12226_12242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12224 === 5))
{var inst_12213 = (state_12223[7]);var inst_12215 = render_widget_BANG_.call(null,inst_12213);var state_12223__$1 = (function (){var statearr_12227 = state_12223;(statearr_12227[8] = inst_12215);
return statearr_12227;
})();var statearr_12228_12243 = state_12223__$1;(statearr_12228_12243[2] = null);
(statearr_12228_12243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12224 === 4))
{var inst_12213 = (state_12223[7]);var inst_12213__$1 = (state_12223[2]);var state_12223__$1 = (function (){var statearr_12229 = state_12223;(statearr_12229[7] = inst_12213__$1);
return statearr_12229;
})();if(cljs.core.truth_(inst_12213__$1))
{var statearr_12230_12244 = state_12223__$1;(statearr_12230_12244[1] = 5);
} else
{var statearr_12231_12245 = state_12223__$1;(statearr_12231_12245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12224 === 3))
{var inst_12221 = (state_12223[2]);var state_12223__$1 = state_12223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12223__$1,inst_12221);
} else
{if((state_val_12224 === 2))
{var state_12223__$1 = state_12223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12223__$1,4,ch);
} else
{if((state_val_12224 === 1))
{var state_12223__$1 = state_12223;var statearr_12232_12246 = state_12223__$1;(statearr_12232_12246[2] = null);
(statearr_12232_12246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_12236 = [null,null,null,null,null,null,null,null,null];(statearr_12236[0] = state_machine__8689__auto__);
(statearr_12236[1] = 1);
return statearr_12236;
});
var state_machine__8689__auto____1 = (function (state_12223){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_12223);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e12237){if((e12237 instanceof Object))
{var ex__8692__auto__ = e12237;var statearr_12238_12247 = state_12223;(statearr_12238_12247[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12248 = state_12223;
state_12223 = G__12248;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_12223){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_12223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_12239 = f__8704__auto__.call(null);(statearr_12239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___12240);
return statearr_12239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return ch;
});
clidget.widget.re_render_widget = (function re_render_widget(p__12250,widget_key,system,keys_binding,render_widget_fn){var map__12255 = p__12250;var map__12255__$1 = ((cljs.core.seq_QMARK_.call(null,map__12255))?cljs.core.apply.call(null,cljs.core.hash_map,map__12255):map__12255);var _BANG_parent_widget_cache = cljs.core.get.call(null,map__12255__$1,new cljs.core.Keyword(null,"!to-cache","!to-cache",2911374403));var _BANG_widget = cljs.core.atom.call(null,null);var _BANG_widget_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_widget_BANG_ = ((function (_BANG_widget,_BANG_widget_cache){
return (function (system__$1){var G__12256 = (function (){var from_cache__7563__auto__ = cljs.core.deref.call(null,_BANG_widget_cache);var _STAR_context_STAR_12257 = clidget.widget._STAR_context_STAR_;try{clidget.widget._STAR_context_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!to-cache","!to-cache",2911374403),(function (){var G__12258 = _BANG_widget_cache;cljs.core.reset_BANG_.call(null,G__12258,cljs.core.PersistentArrayMap.EMPTY);
return G__12258;
})(),new cljs.core.Keyword(null,"from-cache","from-cache",2067785489),from_cache__7563__auto__], null);
return render_widget_fn.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,system__$1,clidget.widget.resolve_state.call(null,system__$1,keys_binding)),new cljs.core.Keyword("clidget","widget-key","clidget/widget-key",4133760282),new cljs.core.Keyword("clidget","widget-type","clidget/widget-type",4655661835)));
}finally {clidget.widget._STAR_context_STAR_ = _STAR_context_STAR_12257;
}})();clidget.widget.cache_widget_BANG_.call(null,G__12256,_BANG_parent_widget_cache,widget_key);
((function (G__12256,_BANG_widget,_BANG_widget_cache){
return (function (p1__12249_SHARP_){var temp__4092__auto__ = cljs.core.deref.call(null,_BANG_widget);if(cljs.core.truth_(temp__4092__auto__))
{var current_widget = temp__4092__auto__;return current_widget.parentNode.replaceChild(p1__12249_SHARP_,current_widget);
} else
{return null;
}
});})(G__12256,_BANG_widget,_BANG_widget_cache))
.call(null,G__12256);
cljs.core.reset_BANG_.call(null,_BANG_widget,G__12256);
return G__12256;
});})(_BANG_widget,_BANG_widget_cache))
;var render_ch = clidget.widget.make_render_ch.call(null,render_widget_BANG_);clidget.widget.add_watches.call(null,system,keys_binding,render_ch);
return cljs.core.reset_BANG_.call(null,_BANG_widget,render_widget_BANG_.call(null,system));
});
clidget.widget.updated_widget = (function updated_widget(system,keys_binding,locals_binding,render_widget_fn){var widget_key = clidget.widget.get_widget_key.call(null,system,keys_binding);var or__3443__auto__ = clidget.widget.get_cached_widget.call(null,clidget.widget._STAR_context_STAR_,widget_key);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return clidget.widget.re_render_widget.call(null,clidget.widget._STAR_context_STAR_,widget_key,clidget.widget.init_locals.call(null,system,locals_binding),keys_binding,render_widget_fn);
}
});
