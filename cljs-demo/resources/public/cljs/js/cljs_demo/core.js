// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "/resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"name","name",1017277949),"Mary",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"name","name",1017277949),"Phone",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"cars",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"name","name",1017277949),"M's Car",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"name","name",1017277949),"Camden Council",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__15709 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__15709.setAttribute("dur","1s");
G__15709.setAttribute("attributeName","cx");
G__15709.setAttribute("from",(x + 20));
G__15709.setAttribute("to",250);
G__15709.setAttribute("repeatCount","indefinite");
G__15709.setAttribute("calcMode","linear");
return G__15709;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__15711 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__15711.setAttribute("dur","1s");
G__15711.setAttribute("attributeName","cy");
G__15711.setAttribute("from",0);
G__15711.setAttribute("to",150);
G__15711.setAttribute("repeatCount","indefinite");
G__15711.setAttribute("calcMode","linear");
return G__15711;
});
cljs_demo.core.rotate_lmax = (function rotate_lmax(rotate){cljs.core.swap_BANG_.call(null,rotate,cljs.core._PLUS_,18);
return document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#l","#l",1013905435)], null))).setAttribute("transform",[cljs.core.str("rotate("),cljs.core.str(cljs.core.deref.call(null,rotate)),cljs.core.str("300,37,50)")].join(''));
});
cljs_demo.core.make_animate_s_x = (function make_animate_s_x(y){var G__15713 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__15713.setAttribute("dur","1s");
G__15713.setAttribute("attributeName","cx");
G__15713.setAttribute("from",250);
G__15713.setAttribute("to",y);
G__15713.setAttribute("repeatCount","indefinite");
G__15713.setAttribute("calcMode","linear");
return G__15713;
});
cljs_demo.core.make_annimate_s_y = (function make_annimate_s_y(){var G__15715 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__15715.setAttribute("dur","1s");
G__15715.setAttribute("attributeName","cy");
G__15715.setAttribute("from",500);
G__15715.setAttribute("to",700);
G__15715.setAttribute("repeatCount","indefinite");
G__15715.setAttribute("calcMode","linear");
return G__15715;
});
cljs_demo.core.to_subscriber = (function to_subscriber(){return console.log((function (){var iter__4160__auto__ = (function iter__15724(s__15725){return (new cljs.core.LazySeq(null,(function (){var s__15725__$1 = s__15725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15725__$1);if(temp__4092__auto__)
{var s__15725__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15725__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__15725__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__15727 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__15726 = 0;while(true){
if((i__15726 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__15726);cljs.core.chunk_append.call(null,b__15727,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom15730 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom15730.setAttribute("cx",300);
} else
{}
if(300)
{dom15730.setAttribute("cy",300);
} else
{}
if(5)
{dom15730.setAttribute("r",5);
} else
{}
if("purple")
{dom15730.setAttribute("fill","purple");
} else
{}
if(1)
{dom15730.setAttribute("opacity",1);
} else
{}
dom15730.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom15730.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom15730;
})()));
{
var G__15732 = (i__15726 + 1);
i__15726 = G__15732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),iter__15724.call(null,cljs.core.chunk_rest.call(null,s__15725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),null);
}
} else
{var x = cljs.core.first.call(null,s__15725__$2);return cljs.core.cons.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom15731 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom15731.setAttribute("cx",300);
} else
{}
if(300)
{dom15731.setAttribute("cy",300);
} else
{}
if(5)
{dom15731.setAttribute("r",5);
} else
{}
if("purple")
{dom15731.setAttribute("fill","purple");
} else
{}
if(1)
{dom15731.setAttribute("opacity",1);
} else
{}
dom15731.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom15731.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom15731;
})()),iter__15724.call(null,cljs.core.rest.call(null,s__15725__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [70,170,270,370,470], null));
})());
});
cljs_demo.core.pub_component = (function pub_component(p__15733,chan,x){var map__15740 = p__15733;var map__15740__$1 = ((cljs.core.seq_QMARK_.call(null,map__15740))?cljs.core.apply.call(null,cljs.core.hash_map,map__15740):map__15740);var monitors = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.rand_int.call(null,100));var topic = cljs.core.atom.call(null,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(i)].join(''));var degree_rotate = cljs.core.atom.call(null,0);var new_topic = ((function (i,topic,degree_rotate){
return (function (chan__$1){return setInterval(((function (i,topic,degree_rotate){
return (function (){cljs.core.async.put_BANG_.call(null,chan__$1,cljs.core.deref.call(null,topic));
dommy.core.replace_BANG_.call(null,document.querySelector("#topic p"),(function (){var dom15741 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom15741.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,topic)));
return dom15741;
})());
cljs.core.reset_BANG_.call(null,topic,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(cljs.core.reset_BANG_.call(null,i,cljs.core.rand_int.call(null,100)))].join(''));
return cljs_demo.core.rotate_lmax.call(null,degree_rotate);
});})(i,topic,degree_rotate))
,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom15742 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom15742.setAttribute("cx",x);
} else
{}
if(40)
{dom15742.setAttribute("cy",40);
} else
{}
if(5)
{dom15742.setAttribute("r",5);
} else
{}
if("purple")
{dom15742.setAttribute("fill","purple");
} else
{}
if(1)
{dom15742.setAttribute("opacity",1);
} else
{}
dom15742.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom15742.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom15742;
})()),cljs_demo.core.to_subscriber.call(null),1000);
});})(i,topic,degree_rotate))
;var G__15743 = (function (){var dom15744 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom15744.setAttribute("href","#");
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)))
{dom15744.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)));
} else
{}
dom15744.appendChild(dommy.template.__GT_node_like.call(null,type));
dom15744.appendChild((function (){var dom15745 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom15745.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom15745.setAttribute("width",30);
} else
{}
if(35)
{dom15745.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"30px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)))
{dom15745.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"30px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)));
} else
{}
return dom15745;
})());
return dom15744;
})();dommy.core.listen_BANG_.call(null,G__15743,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__15743;
});
cljs_demo.core.sub = (function sub(listens,topic){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sub], true),listens);
});
cljs_demo.core.sub_component = (function sub_component(p__15746,chan,x){var map__15754 = p__15746;var map__15754__$1 = ((cljs.core.seq_QMARK_.call(null,map__15754))?cljs.core.apply.call(null,cljs.core.hash_map,map__15754):map__15754);var image = cljs.core.get.call(null,map__15754__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__15754__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var name = cljs.core.get.call(null,map__15754__$1,new cljs.core.Keyword(null,"name","name",1017277949));var G__15755 = (function (){var dom15756 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom15756.appendChild((function (){var dom15757 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if(cljs.core.truth_(name))
{dom15757.setAttribute("id",name);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)))
{dom15757.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)));
} else
{}
dom15757.appendChild((function (){var dom15758 = document.createElementNS("http://www.w3.org/1999/xhtml","li");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)))
{dom15758.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)));
} else
{}
dom15758.appendChild((function (){var dom15759 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom15759.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom15759.setAttribute("width",30);
} else
{}
if(35)
{dom15759.setAttribute("height",35);
} else
{}
return dom15759;
})());
dom15758.appendChild((function (){var dom15760 = document.createElementNS("http://www.w3.org/1999/xhtml","br");return dom15760;
})());
dom15758.appendChild(dommy.template.__GT_node_like.call(null,name));
return dom15758;
})());
return dom15757;
})());
return dom15756;
})();dommy.core.listen_BANG_.call(null,G__15755,new cljs.core.Keyword(null,"hover","hover",1113373870),(function (){return "hi".call(null);
}));
return G__15755;
});
cljs_demo.core.who_is_listening = (function who_is_listening(topic){var sub = cljs.core.filter.call(null,(function (p1__15761_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__15761_SHARP_,new cljs.core.Keyword(null,"listens","listens",1195876094));
}),cljs_demo.core.things);var sensor = cljs.core.second.call(null,clojure.string.split.call(null,topic,/\//));var l = (function (){var iter__4160__auto__ = ((function (sub,sensor){
return (function iter__15771(s__15772){return (new cljs.core.LazySeq(null,((function (sub,sensor){
return (function (){var s__15772__$1 = s__15772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15772__$1);if(temp__4092__auto__)
{var s__15772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15772__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__15772__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__15774 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__15773 = 0;while(true){
if((i__15773 < size__4159__auto__))
{var s = cljs.core._nth.call(null,c__4158__auto__,i__15773);cljs.core.chunk_append.call(null,b__15774,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null));
{
var G__15779 = (i__15773 + 1);
i__15773 = G__15779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15774),iter__15771.call(null,cljs.core.chunk_rest.call(null,s__15772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15774),null);
}
} else
{var s = cljs.core.first.call(null,s__15772__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null),iter__15771.call(null,cljs.core.rest.call(null,s__15772__$2)));
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
return (function (p1__15762_SHARP_){return !((p1__15762_SHARP_ == null));
});})(sub,sensor,l))
,l);return console.log((function (){var iter__4160__auto__ = (function iter__15775(s__15776){return (new cljs.core.LazySeq(null,(function (){var s__15776__$1 = s__15776;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15776__$1);if(temp__4092__auto__)
{var s__15776__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15776__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__15776__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__15778 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__15777 = 0;while(true){
if((i__15777 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__15777);cljs.core.chunk_append.call(null,b__15778,dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)));
{
var G__15780 = (i__15777 + 1);
i__15777 = G__15780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15778),iter__15775.call(null,cljs.core.chunk_rest.call(null,s__15776__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15778),null);
}
} else
{var x = cljs.core.first.call(null,s__15776__$2);return cljs.core.cons.call(null,dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)),iter__15775.call(null,cljs.core.rest.call(null,s__15776__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,listeners);
})());
});
cljs_demo.core.renderer = (function renderer(things,chan,type,div){var pub_sub = cljs.core.filter.call(null,(function (p1__15781_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__15781_SHARP_,type);
}),things);var x = cljs.core.atom.call(null,35);var iter__4160__auto__ = (function iter__15786(s__15787){return (new cljs.core.LazySeq(null,(function (){var s__15787__$1 = s__15787;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15787__$1);if(temp__4092__auto__)
{var s__15787__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15787__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__15787__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__15789 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__15788 = 0;while(true){
if((i__15788 < size__4159__auto__))
{var t = cljs.core._nth.call(null,c__4158__auto__,i__15788);cljs.core.chunk_append.call(null,b__15789,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})());
{
var G__15790 = (i__15788 + 1);
i__15788 = G__15790;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15789),iter__15786.call(null,cljs.core.chunk_rest.call(null,s__15787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15789),null);
}
} else
{var t = cljs.core.first.call(null,s__15787__$2);return cljs.core.cons.call(null,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})(),iter__15786.call(null,cljs.core.rest.call(null,s__15787__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,pub_sub);
});
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_15832){var state_val_15833 = (state_15832[1]);if((state_val_15833 === 7))
{var inst_15827 = (state_15832[2]);var state_15832__$1 = (function (){var statearr_15834 = state_15832;(statearr_15834[7] = inst_15827);
return statearr_15834;
})();var statearr_15835_15849 = state_15832__$1;(statearr_15835_15849[2] = null);
(statearr_15835_15849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15833 === 6))
{var state_15832__$1 = state_15832;var statearr_15836_15850 = state_15832__$1;(statearr_15836_15850[2] = null);
(statearr_15836_15850[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15833 === 5))
{var inst_15822 = (state_15832[8]);var inst_15824 = cljs_demo.core.who_is_listening.call(null,inst_15822);var state_15832__$1 = state_15832;var statearr_15837_15851 = state_15832__$1;(statearr_15837_15851[2] = inst_15824);
(statearr_15837_15851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15833 === 4))
{var inst_15822 = (state_15832[8]);var inst_15822__$1 = (state_15832[2]);var state_15832__$1 = (function (){var statearr_15838 = state_15832;(statearr_15838[8] = inst_15822__$1);
return statearr_15838;
})();if(cljs.core.truth_(inst_15822__$1))
{var statearr_15839_15852 = state_15832__$1;(statearr_15839_15852[1] = 5);
} else
{var statearr_15840_15853 = state_15832__$1;(statearr_15840_15853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15833 === 3))
{var inst_15830 = (state_15832[2]);var state_15832__$1 = state_15832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15832__$1,inst_15830);
} else
{if((state_val_15833 === 2))
{var state_15832__$1 = state_15832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15832__$1,4,chan);
} else
{if((state_val_15833 === 1))
{var state_15832__$1 = state_15832;var statearr_15841_15854 = state_15832__$1;(statearr_15841_15854[2] = null);
(statearr_15841_15854[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_15845 = [null,null,null,null,null,null,null,null,null];(statearr_15845[0] = state_machine__5709__auto__);
(statearr_15845[1] = 1);
return statearr_15845;
});
var state_machine__5709__auto____1 = (function (state_15832){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_15832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e15846){if((e15846 instanceof Object))
{var ex__5712__auto__ = e15846;var statearr_15847_15855 = state_15832;(statearr_15847_15855[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15856 = state_15832;
state_15832 = G__15856;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_15832){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_15832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_15848 = f__5724__auto__.call(null);(statearr_15848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_15848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
cljs_demo.core.lmax = (function (){var top = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(37, 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",1013904356),17.5,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),6], null)], null)], null);var f = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0, -20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"black"], null)], null)], null);var tail = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(18, 0, 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"#F6F7E4"], null)], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"0 0 250 500"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,25,25,"#a6bddb","black",0.1,5])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),28,new cljs.core.Keyword(null,"font-size","font-size",3722789425),2], null),"Message Broker"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#l","g#l",1014004418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(0,0,0)"], null),(function (){var a = cljs.core.conj.call(null,tail,tail);var i = 0;while(true){
if(cljs.core._EQ_.call(null,19,i))
{return cljs.core.conj.call(null,top,cljs.core.conj.call(null,f,a));
} else
{{
var G__15857 = cljs.core.conj.call(null,tail,a);
var G__15858 = (i + 1);
a = G__15857;
i = G__15858;
continue;
}
}
break;
}
})()], null)], null)], null);
})();
window.onload = (function (){var c = (function (){var G__15859 = cljs.core.async.chan.call(null,100);cljs_demo.core.watch_events_BANG_.call(null,G__15859);
return G__15859;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),1000], null)], null)], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Sent Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start simulation by clicking on the devices"], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),cljs_demo.core.lmax);
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#msg","div#msg",2686146561)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#subscribers","div#subscribers",704152459),(function (){var dom15860 = document.createElementNS("http://www.w3.org/1999/xhtml","ul");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)))
{dom15860.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)));
} else
{}
return dom15860;
})()], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subscribers","#subscribers",2078691450)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#received","div#received",4272036101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Received Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"No Messages Received"], null)], null));
return console.log((function (){cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"monitors","monitors",685105611),"#publishers");
return cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"listens","listens",1195876094),"#subscribers ul");
})());
});
