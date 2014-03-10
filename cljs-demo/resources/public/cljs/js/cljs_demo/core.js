// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"car",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__47187 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__47187.setAttribute("dur","1s");
G__47187.setAttribute("attributeName","cx");
G__47187.setAttribute("from",(x + 20));
G__47187.setAttribute("to",250);
G__47187.setAttribute("repeatCount","indefinite");
G__47187.setAttribute("calcMode","linear");
return G__47187;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__47189 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__47189.setAttribute("dur","1s");
G__47189.setAttribute("attributeName","cy");
G__47189.setAttribute("from",0);
G__47189.setAttribute("to",150);
G__47189.setAttribute("repeatCount","indefinite");
G__47189.setAttribute("calcMode","linear");
return G__47189;
});
cljs_demo.core.pub_component = (function pub_component(p__47190,chan,x){var map__47198 = p__47190;var map__47198__$1 = ((cljs.core.seq_QMARK_.call(null,map__47198))?cljs.core.apply.call(null,cljs.core.hash_map,map__47198):map__47198);var monitors = cljs.core.get.call(null,map__47198__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__47198__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__47198__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__47198__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.List.EMPTY);var new_topic = ((function (i){
return (function (chan__$1){var t = cljs.core.swap_BANG_.call(null,i,((function (i){
return (function (){return cljs.core.rand_int.call(null,100);
});})(i))
);var topic = [cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(t)].join('');cljs.core.async.put_BANG_.call(null,chan__$1,topic);
dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#topic","#topic",2126470750)], null))),(function (){var dom47199 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom47199.setAttribute("id","topic");
dom47199.appendChild((function (){var dom47200 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom47200.appendChild(dommy.template.__GT_node_like.call(null,topic));
return dom47200;
})());
return dom47199;
})());
return dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom47201 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom47201.setAttribute("cx",x);
} else
{}
if(40)
{dom47201.setAttribute("cy",40);
} else
{}
if(5)
{dom47201.setAttribute("r",5);
} else
{}
if("purple")
{dom47201.setAttribute("fill","purple");
} else
{}
if(0.5)
{dom47201.setAttribute("opacity",0.5);
} else
{}
dom47201.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom47201.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom47201;
})());
});})(i))
;var G__47202 = (function (){var dom47203 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom47203.setAttribute("href","#");
} else
{}
dom47203.appendChild(dommy.template.__GT_node_like.call(null,type));
dom47203.appendChild((function (){var dom47204 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom47204.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom47204.setAttribute("width",30);
} else
{}
if(35)
{dom47204.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px"], null)))
{dom47204.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px"], null)));
} else
{}
return dom47204;
})());
return dom47203;
})();dommy.core.listen_BANG_.call(null,G__47202,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__47202;
});
cljs_demo.core.render_publishers = (function render_publishers(things,chan){var pubs = cljs.core.filter.call(null,(function (p1__47205_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__47205_SHARP_,new cljs.core.Keyword(null,"monitors","monitors",685105611));
}),things);var x = cljs.core.atom.call(null,35);var iter__4160__auto__ = (function iter__47210(s__47211){return (new cljs.core.LazySeq(null,(function (){var s__47211__$1 = s__47211;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__47211__$1);if(temp__4092__auto__)
{var s__47211__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47211__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__47211__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__47213 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__47212 = 0;while(true){
if((i__47212 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__47212);cljs.core.chunk_append.call(null,b__47213,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),cljs_demo.core.pub_component.call(null,p,chan,cljs.core.deref.call(null,x)));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})());
{
var G__47214 = (i__47212 + 1);
i__47212 = G__47214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47213),iter__47210.call(null,cljs.core.chunk_rest.call(null,s__47211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47213),null);
}
} else
{var p = cljs.core.first.call(null,s__47211__$2);return cljs.core.cons.call(null,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),cljs_demo.core.pub_component.call(null,p,chan,cljs.core.deref.call(null,x)));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})(),iter__47210.call(null,cljs.core.rest.call(null,s__47211__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,pubs);
});
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_47256){var state_val_47257 = (state_47256[1]);if((state_val_47257 === 7))
{var inst_47251 = (state_47256[2]);var state_47256__$1 = (function (){var statearr_47258 = state_47256;(statearr_47258[7] = inst_47251);
return statearr_47258;
})();var statearr_47259_47273 = state_47256__$1;(statearr_47259_47273[2] = null);
(statearr_47259_47273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47257 === 6))
{var state_47256__$1 = state_47256;var statearr_47260_47274 = state_47256__$1;(statearr_47260_47274[2] = null);
(statearr_47260_47274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47257 === 5))
{var inst_47246 = (state_47256[8]);var inst_47248 = console.log(inst_47246);var state_47256__$1 = state_47256;var statearr_47261_47275 = state_47256__$1;(statearr_47261_47275[2] = inst_47248);
(statearr_47261_47275[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47257 === 4))
{var inst_47246 = (state_47256[8]);var inst_47246__$1 = (state_47256[2]);var state_47256__$1 = (function (){var statearr_47262 = state_47256;(statearr_47262[8] = inst_47246__$1);
return statearr_47262;
})();if(cljs.core.truth_(inst_47246__$1))
{var statearr_47263_47276 = state_47256__$1;(statearr_47263_47276[1] = 5);
} else
{var statearr_47264_47277 = state_47256__$1;(statearr_47264_47277[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47257 === 3))
{var inst_47254 = (state_47256[2]);var state_47256__$1 = state_47256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47256__$1,inst_47254);
} else
{if((state_val_47257 === 2))
{var state_47256__$1 = state_47256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47256__$1,4,chan);
} else
{if((state_val_47257 === 1))
{var state_47256__$1 = state_47256;var statearr_47265_47278 = state_47256__$1;(statearr_47265_47278[2] = null);
(statearr_47265_47278[1] = 2);
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
var state_machine__8689__auto____0 = (function (){var statearr_47269 = [null,null,null,null,null,null,null,null,null];(statearr_47269[0] = state_machine__8689__auto__);
(statearr_47269[1] = 1);
return statearr_47269;
});
var state_machine__8689__auto____1 = (function (state_47256){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_47256);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e47270){if((e47270 instanceof Object))
{var ex__8692__auto__ = e47270;var statearr_47271_47279 = state_47256;(statearr_47271_47279[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47280 = state_47256;
state_47256 = G__47280;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_47256){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_47256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_47272 = f__8704__auto__.call(null);(statearr_47272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_47272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
});
cljs_demo.core.lmax = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"0 0 250 80"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,10,25,"#a6bddb","black",0.5,10])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),15,new cljs.core.Keyword(null,"font-size","font-size",3722789425),3], null),"MQTT Broker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1013907431),40,new cljs.core.Keyword(null,"cy","cy",1013907432),50,new cljs.core.Keyword(null,"r","r",1013904356),20,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#2b8cbe",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),4], null)], null)], null)], null);
window.onload = (function (){var c = (function (){var G__47281 = cljs.core.async.chan.call(null);cljs_demo.core.watch_events_BANG_.call(null,G__47281);
return G__47281;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),300], null)], null)], null)], null));
console.log(cljs_demo.core.render_publishers.call(null,cljs_demo.core.things,c));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start Simulation"], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),cljs_demo.core.lmax);
return dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"subscribers"], null));
});
