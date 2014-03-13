// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "../../cljs-demo/resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"name","name",1017277949),"Mary",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"name","name",1017277949),"Phone",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"cars",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"name","name",1017277949),"M's Car",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"name","name",1017277949),"Camden Council",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__13841 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13841.setAttribute("dur","1s");
G__13841.setAttribute("attributeName","cx");
G__13841.setAttribute("from",(x + 20));
G__13841.setAttribute("to",250);
G__13841.setAttribute("repeatCount","indefinite");
G__13841.setAttribute("calcMode","linear");
return G__13841;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__13843 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13843.setAttribute("dur","1s");
G__13843.setAttribute("attributeName","cy");
G__13843.setAttribute("from",0);
G__13843.setAttribute("to",150);
G__13843.setAttribute("repeatCount","indefinite");
G__13843.setAttribute("calcMode","linear");
return G__13843;
});
cljs_demo.core.rotate_lmax = (function rotate_lmax(rotate){cljs.core.swap_BANG_.call(null,rotate,cljs.core._PLUS_,18);
return document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#l","#l",1013905435)], null))).setAttribute("transform",[cljs.core.str("rotate("),cljs.core.str(cljs.core.deref.call(null,rotate)),cljs.core.str("300,37,50)")].join(''));
});
cljs_demo.core.make_animate_s_x = (function make_animate_s_x(y){var G__13845 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13845.setAttribute("dur","1s");
G__13845.setAttribute("attributeName","cx");
G__13845.setAttribute("from",250);
G__13845.setAttribute("to",y);
G__13845.setAttribute("repeatCount","indefinite");
G__13845.setAttribute("calcMode","linear");
return G__13845;
});
cljs_demo.core.make_annimate_s_y = (function make_annimate_s_y(){var G__13847 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__13847.setAttribute("dur","1s");
G__13847.setAttribute("attributeName","cy");
G__13847.setAttribute("from",500);
G__13847.setAttribute("to",700);
G__13847.setAttribute("repeatCount","indefinite");
G__13847.setAttribute("calcMode","linear");
return G__13847;
});
cljs_demo.core.to_subscriber = (function to_subscriber(){return console.log((function (){var iter__4160__auto__ = (function iter__13856(s__13857){return (new cljs.core.LazySeq(null,(function (){var s__13857__$1 = s__13857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13857__$1);if(temp__4092__auto__)
{var s__13857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13857__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13857__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13859 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13858 = 0;while(true){
if((i__13858 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__13858);cljs.core.chunk_append.call(null,b__13859,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13862 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom13862.setAttribute("cx",300);
} else
{}
if(300)
{dom13862.setAttribute("cy",300);
} else
{}
if(5)
{dom13862.setAttribute("r",5);
} else
{}
if("purple")
{dom13862.setAttribute("fill","purple");
} else
{}
if(1)
{dom13862.setAttribute("opacity",1);
} else
{}
dom13862.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom13862.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom13862;
})()));
{
var G__13864 = (i__13858 + 1);
i__13858 = G__13864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13859),iter__13856.call(null,cljs.core.chunk_rest.call(null,s__13857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13859),null);
}
} else
{var x = cljs.core.first.call(null,s__13857__$2);return cljs.core.cons.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13863 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom13863.setAttribute("cx",300);
} else
{}
if(300)
{dom13863.setAttribute("cy",300);
} else
{}
if(5)
{dom13863.setAttribute("r",5);
} else
{}
if("purple")
{dom13863.setAttribute("fill","purple");
} else
{}
if(1)
{dom13863.setAttribute("opacity",1);
} else
{}
dom13863.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom13863.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom13863;
})()),iter__13856.call(null,cljs.core.rest.call(null,s__13857__$2)));
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
cljs_demo.core.pub_component = (function pub_component(p__13865,chan,x){var map__13872 = p__13865;var map__13872__$1 = ((cljs.core.seq_QMARK_.call(null,map__13872))?cljs.core.apply.call(null,cljs.core.hash_map,map__13872):map__13872);var monitors = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.rand_int.call(null,100));var topic = cljs.core.atom.call(null,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(i)].join(''));var degree_rotate = cljs.core.atom.call(null,0);var new_topic = ((function (i,topic,degree_rotate){
return (function (chan__$1){return setInterval(((function (i,topic,degree_rotate){
return (function (){cljs.core.async.put_BANG_.call(null,chan__$1,cljs.core.deref.call(null,topic));
dommy.core.replace_BANG_.call(null,document.querySelector("#topic p"),(function (){var dom13873 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom13873.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,topic)));
return dom13873;
})());
cljs.core.reset_BANG_.call(null,topic,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(cljs.core.reset_BANG_.call(null,i,cljs.core.rand_int.call(null,100)))].join(''));
return cljs_demo.core.rotate_lmax.call(null,degree_rotate);
});})(i,topic,degree_rotate))
,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom13874 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom13874.setAttribute("cx",x);
} else
{}
if(40)
{dom13874.setAttribute("cy",40);
} else
{}
if(5)
{dom13874.setAttribute("r",5);
} else
{}
if("purple")
{dom13874.setAttribute("fill","purple");
} else
{}
if(1)
{dom13874.setAttribute("opacity",1);
} else
{}
dom13874.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom13874.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom13874;
})()),cljs_demo.core.to_subscriber.call(null),1000);
});})(i,topic,degree_rotate))
;var G__13875 = (function (){var dom13876 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom13876.setAttribute("href","#");
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)))
{dom13876.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)));
} else
{}
dom13876.appendChild(dommy.template.__GT_node_like.call(null,type));
dom13876.appendChild((function (){var dom13877 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom13877.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom13877.setAttribute("width",30);
} else
{}
if(35)
{dom13877.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)))
{dom13877.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)));
} else
{}
return dom13877;
})());
return dom13876;
})();dommy.core.listen_BANG_.call(null,G__13875,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__13875;
});
cljs_demo.core.sub = (function sub(listens,topic){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sub], true),listens);
});
cljs_demo.core.sub_component = (function sub_component(p__13878,chan,x){var map__13886 = p__13878;var map__13886__$1 = ((cljs.core.seq_QMARK_.call(null,map__13886))?cljs.core.apply.call(null,cljs.core.hash_map,map__13886):map__13886);var image = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var name = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"name","name",1017277949));var G__13887 = (function (){var dom13888 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom13888.appendChild((function (){var dom13889 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if(cljs.core.truth_(name))
{dom13889.setAttribute("id",name);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)))
{dom13889.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)));
} else
{}
dom13889.appendChild((function (){var dom13890 = document.createElementNS("http://www.w3.org/1999/xhtml","li");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)))
{dom13890.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)));
} else
{}
dom13890.appendChild((function (){var dom13891 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom13891.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom13891.setAttribute("width",30);
} else
{}
if(35)
{dom13891.setAttribute("height",35);
} else
{}
return dom13891;
})());
dom13890.appendChild((function (){var dom13892 = document.createElementNS("http://www.w3.org/1999/xhtml","br");return dom13892;
})());
dom13890.appendChild(dommy.template.__GT_node_like.call(null,name));
return dom13890;
})());
return dom13889;
})());
return dom13888;
})();dommy.core.listen_BANG_.call(null,G__13887,new cljs.core.Keyword(null,"hover","hover",1113373870),(function (){return "hi".call(null);
}));
return G__13887;
});
cljs_demo.core.who_is_listening = (function who_is_listening(topic){var sub = cljs.core.filter.call(null,(function (p1__13893_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__13893_SHARP_,new cljs.core.Keyword(null,"listens","listens",1195876094));
}),cljs_demo.core.things);var sensor = cljs.core.second.call(null,clojure.string.split.call(null,topic,/\//));var l = (function (){var iter__4160__auto__ = ((function (sub,sensor){
return (function iter__13907(s__13908){return (new cljs.core.LazySeq(null,((function (sub,sensor){
return (function (){var s__13908__$1 = s__13908;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13908__$1);if(temp__4092__auto__)
{var s__13908__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13908__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13908__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13910 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13909 = 0;while(true){
if((i__13909 < size__4159__auto__))
{var s = cljs.core._nth.call(null,c__4158__auto__,i__13909);cljs.core.chunk_append.call(null,b__13910,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null));
{
var G__13919 = (i__13909 + 1);
i__13909 = G__13919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13910),iter__13907.call(null,cljs.core.chunk_rest.call(null,s__13908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13910),null);
}
} else
{var s = cljs.core.first.call(null,s__13908__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null),iter__13907.call(null,cljs.core.rest.call(null,s__13908__$2)));
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
return (function (p1__13894_SHARP_){return !((p1__13894_SHARP_ == null));
});})(sub,sensor,l))
,l);var i = cljs.core.atom.call(null,0);return console.log((function (){var iter__4160__auto__ = (function iter__13911(s__13912){return (new cljs.core.LazySeq(null,(function (){var s__13912__$1 = s__13912;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13912__$1);if(temp__4092__auto__)
{var s__13912__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13912__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13912__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13914 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13913 = 0;while(true){
if((i__13913 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__13913);cljs.core.chunk_append.call(null,b__13914,(function (){var G__13917 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,i),0);if(cljs.core._EQ_.call(null,cljs.core.swap_BANG_.call(null,i,cljs.core.inc),G__13917))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)),G__13917))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",-1640528316,null),G__13917))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null),G__13917))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,document.querySelector("#received p"),G__13917))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol("d","replace!","d/replace!",-2070858021,null),G__13917))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
return cljs.core.reset_BANG_.call(null,i,0);
} else
{return null;
}
}
}
}
}
}
}
})());
{
var G__13920 = (i__13913 + 1);
i__13913 = G__13920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13914),iter__13911.call(null,cljs.core.chunk_rest.call(null,s__13912__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13914),null);
}
} else
{var x = cljs.core.first.call(null,s__13912__$2);return cljs.core.cons.call(null,(function (){var G__13918 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,i),0);if(cljs.core._EQ_.call(null,cljs.core.swap_BANG_.call(null,i,cljs.core.inc),G__13918))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)),G__13918))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",-1640528316,null),G__13918))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null),G__13918))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,document.querySelector("#received p"),G__13918))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol("d","replace!","d/replace!",-2070858021,null),G__13918))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
return cljs.core.reset_BANG_.call(null,i,0);
} else
{return null;
}
}
}
}
}
}
}
})(),iter__13911.call(null,cljs.core.rest.call(null,s__13912__$2)));
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
cljs_demo.core.renderer = (function renderer(things,chan,type,div){var pub_sub = cljs.core.filter.call(null,(function (p1__13921_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__13921_SHARP_,type);
}),things);var x = cljs.core.atom.call(null,35);var iter__4160__auto__ = (function iter__13926(s__13927){return (new cljs.core.LazySeq(null,(function (){var s__13927__$1 = s__13927;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13927__$1);if(temp__4092__auto__)
{var s__13927__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13927__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13927__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13929 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13928 = 0;while(true){
if((i__13928 < size__4159__auto__))
{var t = cljs.core._nth.call(null,c__4158__auto__,i__13928);cljs.core.chunk_append.call(null,b__13929,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})());
{
var G__13930 = (i__13928 + 1);
i__13928 = G__13930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13929),iter__13926.call(null,cljs.core.chunk_rest.call(null,s__13927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13929),null);
}
} else
{var t = cljs.core.first.call(null,s__13927__$2);return cljs.core.cons.call(null,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})(),iter__13926.call(null,cljs.core.rest.call(null,s__13927__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,pub_sub);
});
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_13972){var state_val_13973 = (state_13972[1]);if((state_val_13973 === 7))
{var inst_13967 = (state_13972[2]);var state_13972__$1 = (function (){var statearr_13974 = state_13972;(statearr_13974[7] = inst_13967);
return statearr_13974;
})();var statearr_13975_13989 = state_13972__$1;(statearr_13975_13989[2] = null);
(statearr_13975_13989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13973 === 6))
{var state_13972__$1 = state_13972;var statearr_13976_13990 = state_13972__$1;(statearr_13976_13990[2] = null);
(statearr_13976_13990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13973 === 5))
{var inst_13962 = (state_13972[8]);var inst_13964 = cljs_demo.core.who_is_listening.call(null,inst_13962);var state_13972__$1 = state_13972;var statearr_13977_13991 = state_13972__$1;(statearr_13977_13991[2] = inst_13964);
(statearr_13977_13991[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13973 === 4))
{var inst_13962 = (state_13972[8]);var inst_13962__$1 = (state_13972[2]);var state_13972__$1 = (function (){var statearr_13978 = state_13972;(statearr_13978[8] = inst_13962__$1);
return statearr_13978;
})();if(cljs.core.truth_(inst_13962__$1))
{var statearr_13979_13992 = state_13972__$1;(statearr_13979_13992[1] = 5);
} else
{var statearr_13980_13993 = state_13972__$1;(statearr_13980_13993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13973 === 3))
{var inst_13970 = (state_13972[2]);var state_13972__$1 = state_13972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13972__$1,inst_13970);
} else
{if((state_val_13973 === 2))
{var state_13972__$1 = state_13972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13972__$1,4,chan);
} else
{if((state_val_13973 === 1))
{var state_13972__$1 = state_13972;var statearr_13981_13994 = state_13972__$1;(statearr_13981_13994[2] = null);
(statearr_13981_13994[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_13985 = [null,null,null,null,null,null,null,null,null];(statearr_13985[0] = state_machine__5709__auto__);
(statearr_13985[1] = 1);
return statearr_13985;
});
var state_machine__5709__auto____1 = (function (state_13972){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_13972);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e13986){if((e13986 instanceof Object))
{var ex__5712__auto__ = e13986;var statearr_13987_13995 = state_13972;(statearr_13987_13995[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13996 = state_13972;
state_13972 = G__13996;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_13972){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_13972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_13988 = f__5724__auto__.call(null);(statearr_13988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_13988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
cljs_demo.core.lmax = (function (){var top = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(37, 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",1013904356),17.5,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),6], null)], null)], null);var f = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0, -20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"black"], null)], null)], null);var tail = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(18, 0, 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"#F6F7E4"], null)], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"0 0 250 80"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,25,25,"#a6bddb","black",0.1,5])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),28,new cljs.core.Keyword(null,"font-size","font-size",3722789425),2], null),"Message Broker"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#l","g#l",1014004418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(0,0,0)"], null),(function (){var a = cljs.core.conj.call(null,tail,tail);var i = 0;while(true){
if(cljs.core._EQ_.call(null,19,i))
{return cljs.core.conj.call(null,top,cljs.core.conj.call(null,f,a));
} else
{{
var G__13997 = cljs.core.conj.call(null,tail,a);
var G__13998 = (i + 1);
a = G__13997;
i = G__13998;
continue;
}
}
break;
}
})()], null)], null)], null);
})();
window.onload = (function (){var c = (function (){var G__13999 = cljs.core.async.chan.call(null,100);cljs_demo.core.watch_events_BANG_.call(null,G__13999);
return G__13999;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),1000], null)], null)], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Sent Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start simulation by clicking on the devices"], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),cljs_demo.core.lmax);
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#msg","div#msg",2686146561)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#subscribers","div#subscribers",704152459),(function (){var dom14000 = document.createElementNS("http://www.w3.org/1999/xhtml","ul");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)))
{dom14000.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)));
} else
{}
return dom14000;
})()], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subscribers","#subscribers",2078691450)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#received","div#received",4272036101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Received Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"No Messages Received"], null)], null));
console.log(cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null)));
return console.log(cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"listens","listens",1195876094),"#subscribers ul"));
});
