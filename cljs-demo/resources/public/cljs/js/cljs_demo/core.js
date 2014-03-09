// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"tree",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"car",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-station",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null)], null);
cljs_demo.core.pub_component = (function pub_component(p__36100,chan){var map__36109 = p__36100;var map__36109__$1 = ((cljs.core.seq_QMARK_.call(null,map__36109))?cljs.core.apply.call(null,cljs.core.hash_map,map__36109):map__36109);var monitors = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__36109__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.List.EMPTY);var new_topic = ((function (i){
return (function (chan__$1){var t = cljs.core.swap_BANG_.call(null,i,((function (i){
return (function (){return cljs.core.rand_int.call(null,100);
});})(i))
);var topic = [cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(t)].join('');cljs.core.async.put_BANG_.call(null,chan__$1,topic);
dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#topic","#topic",2126470750)], null))),(function (){var dom36110 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom36110.setAttribute("id","topic");
dom36110.appendChild((function (){var dom36111 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom36111.appendChild(dommy.template.__GT_node_like.call(null,topic));
return dom36111;
})());
return dom36110;
})());
return dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#connector","#connector",2146655996)], null))),(function (){var dom36112 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(35)
{dom36112.setAttribute("cx",35);
} else
{}
if(40)
{dom36112.setAttribute("cy",40);
} else
{}
if(5)
{dom36112.setAttribute("r",5);
} else
{}
if("purple")
{dom36112.setAttribute("fill","purple");
} else
{}
if(0.5)
{dom36112.setAttribute("opacity",0.5);
} else
{}
dom36112.appendChild((function (){var dom36113 = document.createElementNS("http://www.w3.org/1999/xhtml","animate");if("cx")
{dom36113.setAttribute("attributeName","cx");
} else
{}
if(35)
{dom36113.setAttribute("from",35);
} else
{}
if(100)
{dom36113.setAttribute("to",100);
} else
{}
if("5s")
{dom36113.setAttribute("dur","5s");
} else
{}
return dom36113;
})());
return dom36112;
})());
});})(i))
;var G__36114 = (function (){var dom36115 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom36115.setAttribute("href","#");
} else
{}
dom36115.appendChild((function (){var dom36116 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom36116.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom36116.setAttribute("width",30);
} else
{}
if(35)
{dom36116.setAttribute("height",35);
} else
{}
return dom36116;
})());
return dom36115;
})();dommy.core.listen_BANG_.call(null,G__36114,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__36114;
});
cljs_demo.core.render_publishers = (function render_publishers(things,chan){var pubs = cljs.core.filter.call(null,(function (p1__36117_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__36117_SHARP_,new cljs.core.Keyword(null,"monitors","monitors",685105611));
}),things);var iter__4160__auto__ = (function iter__36122(s__36123){return (new cljs.core.LazySeq(null,(function (){var s__36123__$1 = s__36123;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36123__$1);if(temp__4092__auto__)
{var s__36123__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36123__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__36123__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__36125 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__36124 = 0;while(true){
if((i__36124 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__36124);cljs.core.chunk_append.call(null,b__36125,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),cljs_demo.core.pub_component.call(null,p,chan)));
{
var G__36126 = (i__36124 + 1);
i__36124 = G__36126;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36125),iter__36122.call(null,cljs.core.chunk_rest.call(null,s__36123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36125),null);
}
} else
{var p = cljs.core.first.call(null,s__36123__$2);return cljs.core.cons.call(null,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),cljs_demo.core.pub_component.call(null,p,chan)),iter__36122.call(null,cljs.core.rest.call(null,s__36123__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,pubs);
});
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_36168){var state_val_36169 = (state_36168[1]);if((state_val_36169 === 7))
{var inst_36163 = (state_36168[2]);var state_36168__$1 = (function (){var statearr_36170 = state_36168;(statearr_36170[7] = inst_36163);
return statearr_36170;
})();var statearr_36171_36185 = state_36168__$1;(statearr_36171_36185[2] = null);
(statearr_36171_36185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36169 === 6))
{var state_36168__$1 = state_36168;var statearr_36172_36186 = state_36168__$1;(statearr_36172_36186[2] = null);
(statearr_36172_36186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36169 === 5))
{var inst_36158 = (state_36168[8]);var inst_36160 = console.log(inst_36158);var state_36168__$1 = state_36168;var statearr_36173_36187 = state_36168__$1;(statearr_36173_36187[2] = inst_36160);
(statearr_36173_36187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36169 === 4))
{var inst_36158 = (state_36168[8]);var inst_36158__$1 = (state_36168[2]);var state_36168__$1 = (function (){var statearr_36174 = state_36168;(statearr_36174[8] = inst_36158__$1);
return statearr_36174;
})();if(cljs.core.truth_(inst_36158__$1))
{var statearr_36175_36188 = state_36168__$1;(statearr_36175_36188[1] = 5);
} else
{var statearr_36176_36189 = state_36168__$1;(statearr_36176_36189[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36169 === 3))
{var inst_36166 = (state_36168[2]);var state_36168__$1 = state_36168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36168__$1,inst_36166);
} else
{if((state_val_36169 === 2))
{var state_36168__$1 = state_36168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36168__$1,4,chan);
} else
{if((state_val_36169 === 1))
{var state_36168__$1 = state_36168;var statearr_36177_36190 = state_36168__$1;(statearr_36177_36190[2] = null);
(statearr_36177_36190[1] = 2);
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
var state_machine__8689__auto____0 = (function (){var statearr_36181 = [null,null,null,null,null,null,null,null,null];(statearr_36181[0] = state_machine__8689__auto__);
(statearr_36181[1] = 1);
return statearr_36181;
});
var state_machine__8689__auto____1 = (function (state_36168){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_36168);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e36182){if((e36182 instanceof Object))
{var ex__8692__auto__ = e36182;var statearr_36183_36191 = state_36168;(statearr_36183_36191[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36192 = state_36168;
state_36168 = G__36192;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_36168){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_36168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_36184 = f__8704__auto__.call(null);(statearr_36184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_36184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
});
cljs_demo.core.lmax = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"0 0 250 80"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,5,18,"#a6bddb","black",0.5,10])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),20,new cljs.core.Keyword(null,"y","y",1013904363),10,new cljs.core.Keyword(null,"font-size","font-size",3722789425),3], null),"MQTT Broker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1013907431),30,new cljs.core.Keyword(null,"cy","cy",1013907432),40,new cljs.core.Keyword(null,"r","r",1013904356),20,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#2b8cbe",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),4], null)], null)], null)], null);
window.onload = (function (){var c = (function (){var G__36193 = cljs.core.async.chan.call(null);cljs_demo.core.watch_events_BANG_.call(null,G__36193);
return G__36193;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187)], null));
console.log(cljs_demo.core.render_publishers.call(null,cljs_demo.core.things,c));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start Simulation"], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),(function (){var dom36194 = document.createElementNS("http://www.w3.org/2000/svg","svg");dom36194.setAttribute("id","connector");
dom36194.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__4160__auto__ = (function iter__36195(s__36196){return (new cljs.core.LazySeq(null,(function (){var s__36196__$1 = s__36196;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36196__$1);if(temp__4092__auto__)
{var s__36196__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36196__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__36196__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__36198 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__36197 = 0;while(true){
if((i__36197 < size__4159__auto__))
{var x1 = cljs.core._nth.call(null,c__4158__auto__,i__36197);cljs.core.chunk_append.call(null,b__36198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",1013908011),x1,new cljs.core.Keyword(null,"y1","y1",1013908042),40,new cljs.core.Keyword(null,"x2","x2",1013908012),220,new cljs.core.Keyword(null,"y2","y2",1013908043),110,new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),2], null)], null));
{
var G__36199 = (i__36197 + 1);
i__36197 = G__36199;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36198),iter__36195.call(null,cljs.core.chunk_rest.call(null,s__36196__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36198),null);
}
} else
{var x1 = cljs.core.first.call(null,s__36196__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",1013908011),x1,new cljs.core.Keyword(null,"y1","y1",1013908042),40,new cljs.core.Keyword(null,"x2","x2",1013908012),220,new cljs.core.Keyword(null,"y2","y2",1013908043),110,new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),2], null)], null),iter__36195.call(null,cljs.core.rest.call(null,s__36196__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [35,105,175,245,315,385], null));
})()));
return dom36194;
})());
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),cljs_demo.core.lmax);
return dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"subscribers"], null));
});
