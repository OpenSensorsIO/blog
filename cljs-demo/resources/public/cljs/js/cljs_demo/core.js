// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "/home/yods/work/opensensorsBlog/cljs-demo/resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"name","name",1017277949),"Mary",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"name","name",1017277949),"Phone",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"cars",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"name","name",1017277949),"M's Car",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"name","name",1017277949),"Camden Council",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__13567 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13567.setAttribute("dur","1s");
G__13567.setAttribute("attributeName","cx");
G__13567.setAttribute("from",(x + 20));
G__13567.setAttribute("to",250);
G__13567.setAttribute("repeatCount","indefinite");
G__13567.setAttribute("calcMode","linear");
return G__13567;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__13569 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13569.setAttribute("dur","1s");
G__13569.setAttribute("attributeName","cy");
G__13569.setAttribute("from",0);
G__13569.setAttribute("to",300);
G__13569.setAttribute("repeatCount","indefinite");
G__13569.setAttribute("calcMode","linear");
return G__13569;
});
cljs_demo.core.rotate_lmax = (function rotate_lmax(rotate){cljs.core.swap_BANG_.call(null,rotate,cljs.core._PLUS_,18);
return document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#l","#l",1013905435)], null))).setAttribute("transform",[cljs.core.str("rotate("),cljs.core.str(cljs.core.deref.call(null,rotate)),cljs.core.str("300,37,50)")].join(''));
});
cljs_demo.core.make_animate_s_x = (function make_animate_s_x(y){var G__13571 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13571.setAttribute("dur","1s");
G__13571.setAttribute("attributeName","cx");
G__13571.setAttribute("from",450);
G__13571.setAttribute("to",y);
G__13571.setAttribute("repeatCount","indefinite");
G__13571.setAttribute("calcMode","linear");
return G__13571;
});
cljs_demo.core.make_annimate_s_y = (function make_annimate_s_y(){var G__13573 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13573.setAttribute("dur","1s");
G__13573.setAttribute("attributeName","cy");
G__13573.setAttribute("from",450);
G__13573.setAttribute("to",650);
G__13573.setAttribute("repeatCount","indefinite");
G__13573.setAttribute("calcMode","linear");
return G__13573;
});
cljs_demo.core.to_subscriber = (function to_subscriber(){var seq__13580 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [70,170,270,370,470], null));var chunk__13581 = null;var count__13582 = 0;var i__13583 = 0;while(true){
if((i__13583 < count__13582))
{var x = cljs.core._nth.call(null,chunk__13581,i__13583);dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13584 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom13584.setAttribute("cx",300);
} else
{}
if(300)
{dom13584.setAttribute("cy",300);
} else
{}
if(5)
{dom13584.setAttribute("r",5);
} else
{}
if("purple")
{dom13584.setAttribute("fill","purple");
} else
{}
if(1)
{dom13584.setAttribute("opacity",1);
} else
{}
dom13584.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom13584.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom13584;
})());
{
var G__13586 = seq__13580;
var G__13587 = chunk__13581;
var G__13588 = count__13582;
var G__13589 = (i__13583 + 1);
seq__13580 = G__13586;
chunk__13581 = G__13587;
count__13582 = G__13588;
i__13583 = G__13589;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13580);if(temp__4092__auto__)
{var seq__13580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13580__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13580__$1);{
var G__13590 = cljs.core.chunk_rest.call(null,seq__13580__$1);
var G__13591 = c__4191__auto__;
var G__13592 = cljs.core.count.call(null,c__4191__auto__);
var G__13593 = 0;
seq__13580 = G__13590;
chunk__13581 = G__13591;
count__13582 = G__13592;
i__13583 = G__13593;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__13580__$1);dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13585 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom13585.setAttribute("cx",300);
} else
{}
if(300)
{dom13585.setAttribute("cy",300);
} else
{}
if(5)
{dom13585.setAttribute("r",5);
} else
{}
if("purple")
{dom13585.setAttribute("fill","purple");
} else
{}
if(1)
{dom13585.setAttribute("opacity",1);
} else
{}
dom13585.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom13585.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom13585;
})());
{
var G__13594 = cljs.core.next.call(null,seq__13580__$1);
var G__13595 = null;
var G__13596 = 0;
var G__13597 = 0;
seq__13580 = G__13594;
chunk__13581 = G__13595;
count__13582 = G__13596;
i__13583 = G__13597;
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
cljs_demo.core.pub_component = (function pub_component(p__13598,chan,x){var map__13606 = p__13598;var map__13606__$1 = ((cljs.core.seq_QMARK_.call(null,map__13606))?cljs.core.apply.call(null,cljs.core.hash_map,map__13606):map__13606);var monitors = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.rand_int.call(null,100));var topic = cljs.core.atom.call(null,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(i)].join(''));var degree_rotate = cljs.core.atom.call(null,0);var new_topic = ((function (i,topic,degree_rotate){
return (function (chan__$1){return setInterval(((function (i,topic,degree_rotate){
return (function (){cljs.core.async.put_BANG_.call(null,chan__$1,cljs.core.deref.call(null,topic));
dommy.core.replace_BANG_.call(null,document.querySelector("#topic p"),(function (){var dom13607 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom13607.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,topic)));
return dom13607;
})());
cljs.core.reset_BANG_.call(null,topic,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(cljs.core.reset_BANG_.call(null,i,cljs.core.rand_int.call(null,100)))].join(''));
return cljs_demo.core.rotate_lmax.call(null,degree_rotate);
});})(i,topic,degree_rotate))
,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13608 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom13608.setAttribute("cx",x);
} else
{}
if(40)
{dom13608.setAttribute("cy",40);
} else
{}
if(5)
{dom13608.setAttribute("r",5);
} else
{}
if("purple")
{dom13608.setAttribute("fill","purple");
} else
{}
if(1)
{dom13608.setAttribute("opacity",1);
} else
{}
dom13608.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom13608.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom13608;
})()),cljs_demo.core.to_subscriber.call(null),1000);
});})(i,topic,degree_rotate))
;var G__13609 = (function (){var dom13610 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom13610.setAttribute("href","#");
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)))
{dom13610.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)));
} else
{}
dom13610.appendChild((function (){var dom13611 = document.createElementNS("http://www.w3.org/1999/xhtml","p");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"50px"], null)))
{dom13611.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"50px"], null)));
} else
{}
dom13611.appendChild(dommy.template.__GT_node_like.call(null,type));
return dom13611;
})());
dom13610.appendChild((function (){var dom13612 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom13612.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom13612.setAttribute("width",30);
} else
{}
if(35)
{dom13612.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)))
{dom13612.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)));
} else
{}
return dom13612;
})());
return dom13610;
})();dommy.core.listen_BANG_.call(null,G__13609,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__13609;
});
cljs_demo.core.sub = (function sub(listens,topic){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sub], true),listens);
});
cljs_demo.core.sub_component = (function sub_component(p__13613,chan,x){var map__13621 = p__13613;var map__13621__$1 = ((cljs.core.seq_QMARK_.call(null,map__13621))?cljs.core.apply.call(null,cljs.core.hash_map,map__13621):map__13621);var image = cljs.core.get.call(null,map__13621__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__13621__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var name = cljs.core.get.call(null,map__13621__$1,new cljs.core.Keyword(null,"name","name",1017277949));var G__13622 = (function (){var dom13623 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom13623.appendChild((function (){var dom13624 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if(cljs.core.truth_(name))
{dom13624.setAttribute("id",name);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)))
{dom13624.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)));
} else
{}
dom13624.appendChild((function (){var dom13625 = document.createElementNS("http://www.w3.org/1999/xhtml","li");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)))
{dom13625.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)));
} else
{}
dom13625.appendChild((function (){var dom13626 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom13626.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom13626.setAttribute("width",30);
} else
{}
if(35)
{dom13626.setAttribute("height",35);
} else
{}
return dom13626;
})());
dom13625.appendChild((function (){var dom13627 = document.createElementNS("http://www.w3.org/1999/xhtml","br");return dom13627;
})());
dom13625.appendChild(dommy.template.__GT_node_like.call(null,name));
return dom13625;
})());
return dom13624;
})());
return dom13623;
})();dommy.core.listen_BANG_.call(null,G__13622,new cljs.core.Keyword(null,"hover","hover",1113373870),(function (){return "hi".call(null);
}));
return G__13622;
});
cljs_demo.core.who_is_listening = (function who_is_listening(topic){var sub = cljs.core.filter.call(null,(function (p1__13628_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__13628_SHARP_,new cljs.core.Keyword(null,"listens","listens",1195876094));
}),cljs_demo.core.things);var sensor = cljs.core.second.call(null,clojure.string.split.call(null,topic,/\//));var l = (function (){var iter__4160__auto__ = ((function (sub,sensor){
return (function iter__13638(s__13639){return (new cljs.core.LazySeq(null,((function (sub,sensor){
return (function (){var s__13639__$1 = s__13639;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13639__$1);if(temp__4092__auto__)
{var s__13639__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13639__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13639__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13641 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13640 = 0;while(true){
if((i__13640 < size__4159__auto__))
{var s = cljs.core._nth.call(null,c__4158__auto__,i__13640);cljs.core.chunk_append.call(null,b__13641,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null));
{
var G__13646 = (i__13640 + 1);
i__13640 = G__13646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13641),iter__13638.call(null,cljs.core.chunk_rest.call(null,s__13639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13641),null);
}
} else
{var s = cljs.core.first.call(null,s__13639__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null),iter__13638.call(null,cljs.core.rest.call(null,s__13639__$2)));
}
} else
{return null;
}
break;
}
});})(sub,sensor))
,null,null));
});})(sub,sensor))
;return iter__4160__auto__.call(null,sub);
})();var listeners = cljs.core.filter.call(null,((function (sub,sensor,l){
return (function (p1__13629_SHARP_){return !((p1__13629_SHARP_ == null));
});})(sub,sensor,l))
,l);var seq__13642 = cljs.core.seq.call(null,listeners);var chunk__13643 = null;var count__13644 = 0;var i__13645 = 0;while(true){
if((i__13645 < count__13644))
{var x = cljs.core._nth.call(null,chunk__13643,i__13645);dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
{
var G__13647 = seq__13642;
var G__13648 = chunk__13643;
var G__13649 = count__13644;
var G__13650 = (i__13645 + 1);
seq__13642 = G__13647;
chunk__13643 = G__13648;
count__13644 = G__13649;
i__13645 = G__13650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13642);if(temp__4092__auto__)
{var seq__13642__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13642__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13642__$1);{
var G__13651 = cljs.core.chunk_rest.call(null,seq__13642__$1);
var G__13652 = c__4191__auto__;
var G__13653 = cljs.core.count.call(null,c__4191__auto__);
var G__13654 = 0;
seq__13642 = G__13651;
chunk__13643 = G__13652;
count__13644 = G__13653;
i__13645 = G__13654;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__13642__$1);dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
{
var G__13655 = cljs.core.next.call(null,seq__13642__$1);
var G__13656 = null;
var G__13657 = 0;
var G__13658 = 0;
seq__13642 = G__13655;
chunk__13643 = G__13656;
count__13644 = G__13657;
i__13645 = G__13658;
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
cljs_demo.core.renderer = (function renderer(things,chan,type,div){var pub_sub = cljs.core.filter.call(null,(function (p1__13659_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__13659_SHARP_,type);
}),things);var x = cljs.core.atom.call(null,35);var seq__13664 = cljs.core.seq.call(null,pub_sub);var chunk__13665 = null;var count__13666 = 0;var i__13667 = 0;while(true){
if((i__13667 < count__13666))
{var t = cljs.core._nth.call(null,chunk__13665,i__13667);dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
{
var G__13668 = seq__13664;
var G__13669 = chunk__13665;
var G__13670 = count__13666;
var G__13671 = (i__13667 + 1);
seq__13664 = G__13668;
chunk__13665 = G__13669;
count__13666 = G__13670;
i__13667 = G__13671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13664);if(temp__4092__auto__)
{var seq__13664__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13664__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13664__$1);{
var G__13672 = cljs.core.chunk_rest.call(null,seq__13664__$1);
var G__13673 = c__4191__auto__;
var G__13674 = cljs.core.count.call(null,c__4191__auto__);
var G__13675 = 0;
seq__13664 = G__13672;
chunk__13665 = G__13673;
count__13666 = G__13674;
i__13667 = G__13675;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__13664__$1);dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
{
var G__13676 = cljs.core.next.call(null,seq__13664__$1);
var G__13677 = null;
var G__13678 = 0;
var G__13679 = 0;
seq__13664 = G__13676;
chunk__13665 = G__13677;
count__13666 = G__13678;
i__13667 = G__13679;
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
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_13721){var state_val_13722 = (state_13721[1]);if((state_val_13722 === 7))
{var inst_13716 = (state_13721[2]);var state_13721__$1 = (function (){var statearr_13723 = state_13721;(statearr_13723[7] = inst_13716);
return statearr_13723;
})();var statearr_13724_13738 = state_13721__$1;(statearr_13724_13738[2] = null);
(statearr_13724_13738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13722 === 6))
{var state_13721__$1 = state_13721;var statearr_13725_13739 = state_13721__$1;(statearr_13725_13739[2] = null);
(statearr_13725_13739[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13722 === 5))
{var inst_13711 = (state_13721[8]);var inst_13713 = cljs_demo.core.who_is_listening.call(null,inst_13711);var state_13721__$1 = state_13721;var statearr_13726_13740 = state_13721__$1;(statearr_13726_13740[2] = inst_13713);
(statearr_13726_13740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13722 === 4))
{var inst_13711 = (state_13721[8]);var inst_13711__$1 = (state_13721[2]);var state_13721__$1 = (function (){var statearr_13727 = state_13721;(statearr_13727[8] = inst_13711__$1);
return statearr_13727;
})();if(cljs.core.truth_(inst_13711__$1))
{var statearr_13728_13741 = state_13721__$1;(statearr_13728_13741[1] = 5);
} else
{var statearr_13729_13742 = state_13721__$1;(statearr_13729_13742[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13722 === 3))
{var inst_13719 = (state_13721[2]);var state_13721__$1 = state_13721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13721__$1,inst_13719);
} else
{if((state_val_13722 === 2))
{var state_13721__$1 = state_13721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13721__$1,4,chan);
} else
{if((state_val_13722 === 1))
{var state_13721__$1 = state_13721;var statearr_13730_13743 = state_13721__$1;(statearr_13730_13743[2] = null);
(statearr_13730_13743[1] = 2);
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
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_13734 = [null,null,null,null,null,null,null,null,null];(statearr_13734[0] = state_machine__5709__auto__);
(statearr_13734[1] = 1);
return statearr_13734;
});
var state_machine__5709__auto____1 = (function (state_13721){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_13721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e13735){if((e13735 instanceof Object))
{var ex__5712__auto__ = e13735;var statearr_13736_13744 = state_13721;(statearr_13736_13744[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13745 = state_13721;
state_13721 = G__13745;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_13721){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_13721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_13737 = f__5724__auto__.call(null);(statearr_13737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_13737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
cljs_demo.core.lmax = (function (){var top = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(37, 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",1013904356),17.5,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),6], null)], null)], null);var f = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0, -20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"black"], null)], null)], null);var tail = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(18, 0, 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"#F6F7E4"], null)], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"-10 15 150 100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,25,25,"#a6bddb","black",0.1,5])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),28,new cljs.core.Keyword(null,"font-size","font-size",3722789425),2], null),"Message Broker"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#l","g#l",1014004418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(0,0,0)"], null),(function (){var a = cljs.core.conj.call(null,tail,tail);var i = 0;while(true){
if(cljs.core._EQ_.call(null,19,i))
{return cljs.core.conj.call(null,top,cljs.core.conj.call(null,f,a));
} else
{{
var G__13746 = cljs.core.conj.call(null,tail,a);
var G__13747 = (i + 1);
a = G__13746;
i = G__13747;
continue;
}
}
break;
}
})()], null)], null)], null);
})();
window.onload = (function (){var c = (function (){var G__13748 = cljs.core.async.chan.call(null,100);cljs_demo.core.watch_events_BANG_.call(null,G__13748);
return G__13748;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518)], null)], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Sent Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start simulation by clicking on the devices"], null)], null));
dommy.core.append_BANG_.call(null,document.getElementById("model"),cljs_demo.core.lmax);
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#msg","div#msg",2686146561)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#subscribers","div#subscribers",704152459),(function (){var dom13749 = document.createElementNS("http://www.w3.org/1999/xhtml","ul");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)))
{dom13749.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)));
} else
{}
return dom13749;
})()], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subscribers","#subscribers",2078691450)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#received","div#received",4272036101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Received Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"No Messages Received"], null)], null));
cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"monitors","monitors",685105611),"#publishers");
return cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"listens","listens",1195876094),"#subscribers ul");
});
