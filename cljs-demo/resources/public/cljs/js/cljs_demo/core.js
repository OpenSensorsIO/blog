// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "/resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"name","name",1017277949),"Mary",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"name","name",1017277949),"Phone",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"cars",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"name","name",1017277949),"M's Car",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"name","name",1017277949),"Camden Council",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__24389 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__24389.setAttribute("dur","1s");
G__24389.setAttribute("attributeName","cx");
G__24389.setAttribute("from",(x + 20));
G__24389.setAttribute("to",250);
G__24389.setAttribute("repeatCount","indefinite");
G__24389.setAttribute("calcMode","linear");
return G__24389;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__24391 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__24391.setAttribute("dur","1s");
G__24391.setAttribute("attributeName","cy");
G__24391.setAttribute("from",0);
G__24391.setAttribute("to",200);
G__24391.setAttribute("repeatCount","indefinite");
G__24391.setAttribute("calcMode","linear");
return G__24391;
});
cljs_demo.core.rotate_lmax = (function rotate_lmax(rotate){cljs.core.swap_BANG_.call(null,rotate,cljs.core._PLUS_,18);
return document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#l","#l",1013905435)], null))).setAttribute("transform",[cljs.core.str("rotate("),cljs.core.str(cljs.core.deref.call(null,rotate)),cljs.core.str("300,37,50)")].join(''));
});
cljs_demo.core.make_animate_s_x = (function make_animate_s_x(y){var G__24393 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__24393.setAttribute("dur","1s");
G__24393.setAttribute("attributeName","cx");
G__24393.setAttribute("from",250);
G__24393.setAttribute("to",y);
G__24393.setAttribute("repeatCount","indefinite");
G__24393.setAttribute("calcMode","linear");
return G__24393;
});
cljs_demo.core.make_annimate_s_y = (function make_annimate_s_y(){var G__24395 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__24395.setAttribute("dur","1s");
G__24395.setAttribute("attributeName","cy");
G__24395.setAttribute("from",450);
G__24395.setAttribute("to",650);
G__24395.setAttribute("repeatCount","indefinite");
G__24395.setAttribute("calcMode","linear");
return G__24395;
});
cljs_demo.core.to_subscriber = (function to_subscriber(){var seq__24402 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [70,170,270,370,470], null));var chunk__24403 = null;var count__24404 = 0;var i__24405 = 0;while(true){
if((i__24405 < count__24404))
{var x = cljs.core._nth.call(null,chunk__24403,i__24405);dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom24406 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom24406.setAttribute("cx",300);
} else
{}
if(300)
{dom24406.setAttribute("cy",300);
} else
{}
if(5)
{dom24406.setAttribute("r",5);
} else
{}
if("purple")
{dom24406.setAttribute("fill","purple");
} else
{}
if(1)
{dom24406.setAttribute("opacity",1);
} else
{}
dom24406.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom24406.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom24406;
})());
{
var G__24408 = seq__24402;
var G__24409 = chunk__24403;
var G__24410 = count__24404;
var G__24411 = (i__24405 + 1);
seq__24402 = G__24408;
chunk__24403 = G__24409;
count__24404 = G__24410;
i__24405 = G__24411;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24402);if(temp__4092__auto__)
{var seq__24402__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24402__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__24402__$1);{
var G__24412 = cljs.core.chunk_rest.call(null,seq__24402__$1);
var G__24413 = c__4191__auto__;
var G__24414 = cljs.core.count.call(null,c__4191__auto__);
var G__24415 = 0;
seq__24402 = G__24412;
chunk__24403 = G__24413;
count__24404 = G__24414;
i__24405 = G__24415;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__24402__$1);dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom24407 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(300)
{dom24407.setAttribute("cx",300);
} else
{}
if(300)
{dom24407.setAttribute("cy",300);
} else
{}
if(5)
{dom24407.setAttribute("r",5);
} else
{}
if("purple")
{dom24407.setAttribute("fill","purple");
} else
{}
if(1)
{dom24407.setAttribute("opacity",1);
} else
{}
dom24407.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom24407.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom24407;
})());
{
var G__24416 = cljs.core.next.call(null,seq__24402__$1);
var G__24417 = null;
var G__24418 = 0;
var G__24419 = 0;
seq__24402 = G__24416;
chunk__24403 = G__24417;
count__24404 = G__24418;
i__24405 = G__24419;
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
cljs_demo.core.pub_component = (function pub_component(p__24420,chan,x){var map__24428 = p__24420;var map__24428__$1 = ((cljs.core.seq_QMARK_.call(null,map__24428))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);var monitors = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.rand_int.call(null,100));var topic = cljs.core.atom.call(null,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(i)].join(''));var degree_rotate = cljs.core.atom.call(null,0);var new_topic = ((function (i,topic,degree_rotate){
return (function (chan__$1){return setInterval(((function (i,topic,degree_rotate){
return (function (){cljs.core.async.put_BANG_.call(null,chan__$1,cljs.core.deref.call(null,topic));
dommy.core.replace_BANG_.call(null,document.querySelector("#topic p"),(function (){var dom24429 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom24429.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,topic)));
return dom24429;
})());
cljs.core.reset_BANG_.call(null,topic,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(cljs.core.reset_BANG_.call(null,i,cljs.core.rand_int.call(null,100)))].join(''));
return cljs_demo.core.rotate_lmax.call(null,degree_rotate);
});})(i,topic,degree_rotate))
,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom24430 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom24430.setAttribute("cx",x);
} else
{}
if(40)
{dom24430.setAttribute("cy",40);
} else
{}
if(5)
{dom24430.setAttribute("r",5);
} else
{}
if("purple")
{dom24430.setAttribute("fill","purple");
} else
{}
if(1)
{dom24430.setAttribute("opacity",1);
} else
{}
dom24430.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom24430.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom24430;
})()),cljs_demo.core.to_subscriber.call(null),1000);
});})(i,topic,degree_rotate))
;var G__24431 = (function (){var dom24432 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom24432.setAttribute("href","#");
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)))
{dom24432.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),"background-color: #2b8cbe;"], null)));
} else
{}
dom24432.appendChild((function (){var dom24433 = document.createElementNS("http://www.w3.org/1999/xhtml","p");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"50px"], null)))
{dom24433.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"50px"], null)));
} else
{}
dom24433.appendChild(dommy.template.__GT_node_like.call(null,type));
return dom24433;
})());
dom24432.appendChild((function (){var dom24434 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom24434.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom24434.setAttribute("width",30);
} else
{}
if(35)
{dom24434.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)))
{dom24434.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"40px"], null)));
} else
{}
return dom24434;
})());
return dom24432;
})();dommy.core.listen_BANG_.call(null,G__24431,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__24431;
});
cljs_demo.core.sub = (function sub(listens,topic){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sub], true),listens);
});
cljs_demo.core.sub_component = (function sub_component(p__24435,chan,x){var map__24443 = p__24435;var map__24443__$1 = ((cljs.core.seq_QMARK_.call(null,map__24443))?cljs.core.apply.call(null,cljs.core.hash_map,map__24443):map__24443);var image = cljs.core.get.call(null,map__24443__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__24443__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var name = cljs.core.get.call(null,map__24443__$1,new cljs.core.Keyword(null,"name","name",1017277949));var G__24444 = (function (){var dom24445 = document.createElementNS("http://www.w3.org/1999/xhtml","div");dom24445.appendChild((function (){var dom24446 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if(cljs.core.truth_(name))
{dom24446.setAttribute("id",name);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)))
{dom24446.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)));
} else
{}
dom24446.appendChild((function (){var dom24447 = document.createElementNS("http://www.w3.org/1999/xhtml","li");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)))
{dom24447.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)));
} else
{}
dom24447.appendChild((function (){var dom24448 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom24448.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom24448.setAttribute("width",30);
} else
{}
if(35)
{dom24448.setAttribute("height",35);
} else
{}
return dom24448;
})());
dom24447.appendChild((function (){var dom24449 = document.createElementNS("http://www.w3.org/1999/xhtml","br");return dom24449;
})());
dom24447.appendChild(dommy.template.__GT_node_like.call(null,name));
return dom24447;
})());
return dom24446;
})());
return dom24445;
})();dommy.core.listen_BANG_.call(null,G__24444,new cljs.core.Keyword(null,"hover","hover",1113373870),(function (){return "hi".call(null);
}));
return G__24444;
});
cljs_demo.core.who_is_listening = (function who_is_listening(topic){var sub = cljs.core.filter.call(null,(function (p1__24450_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__24450_SHARP_,new cljs.core.Keyword(null,"listens","listens",1195876094));
}),cljs_demo.core.things);var sensor = cljs.core.second.call(null,clojure.string.split.call(null,topic,/\//));var l = (function (){var iter__4160__auto__ = ((function (sub,sensor){
return (function iter__24460(s__24461){return (new cljs.core.LazySeq(null,((function (sub,sensor){
return (function (){var s__24461__$1 = s__24461;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24461__$1);if(temp__4092__auto__)
{var s__24461__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24461__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__24461__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__24463 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__24462 = 0;while(true){
if((i__24462 < size__4159__auto__))
{var s = cljs.core._nth.call(null,c__4158__auto__,i__24462);cljs.core.chunk_append.call(null,b__24463,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null));
{
var G__24468 = (i__24462 + 1);
i__24462 = G__24468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24463),iter__24460.call(null,cljs.core.chunk_rest.call(null,s__24461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24463),null);
}
} else
{var s = cljs.core.first.call(null,s__24461__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null),iter__24460.call(null,cljs.core.rest.call(null,s__24461__$2)));
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
return (function (p1__24451_SHARP_){return !((p1__24451_SHARP_ == null));
});})(sub,sensor,l))
,l);var seq__24464 = cljs.core.seq.call(null,listeners);var chunk__24465 = null;var count__24466 = 0;var i__24467 = 0;while(true){
if((i__24467 < count__24466))
{var x = cljs.core._nth.call(null,chunk__24465,i__24467);dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
{
var G__24469 = seq__24464;
var G__24470 = chunk__24465;
var G__24471 = count__24466;
var G__24472 = (i__24467 + 1);
seq__24464 = G__24469;
chunk__24465 = G__24470;
count__24466 = G__24471;
i__24467 = G__24472;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24464);if(temp__4092__auto__)
{var seq__24464__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24464__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__24464__$1);{
var G__24473 = cljs.core.chunk_rest.call(null,seq__24464__$1);
var G__24474 = c__4191__auto__;
var G__24475 = cljs.core.count.call(null,c__4191__auto__);
var G__24476 = 0;
seq__24464 = G__24473;
chunk__24465 = G__24474;
count__24466 = G__24475;
i__24467 = G__24476;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__24464__$1);dommy.core.replace_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null));
{
var G__24477 = cljs.core.next.call(null,seq__24464__$1);
var G__24478 = null;
var G__24479 = 0;
var G__24480 = 0;
seq__24464 = G__24477;
chunk__24465 = G__24478;
count__24466 = G__24479;
i__24467 = G__24480;
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
cljs_demo.core.renderer = (function renderer(things,chan,type,div){var pub_sub = cljs.core.filter.call(null,(function (p1__24481_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__24481_SHARP_,type);
}),things);var x = cljs.core.atom.call(null,35);var seq__24486 = cljs.core.seq.call(null,pub_sub);var chunk__24487 = null;var count__24488 = 0;var i__24489 = 0;while(true){
if((i__24489 < count__24488))
{var t = cljs.core._nth.call(null,chunk__24487,i__24489);dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
{
var G__24490 = seq__24486;
var G__24491 = chunk__24487;
var G__24492 = count__24488;
var G__24493 = (i__24489 + 1);
seq__24486 = G__24490;
chunk__24487 = G__24491;
count__24488 = G__24492;
i__24489 = G__24493;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24486);if(temp__4092__auto__)
{var seq__24486__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24486__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__24486__$1);{
var G__24494 = cljs.core.chunk_rest.call(null,seq__24486__$1);
var G__24495 = c__4191__auto__;
var G__24496 = cljs.core.count.call(null,c__4191__auto__);
var G__24497 = 0;
seq__24486 = G__24494;
chunk__24487 = G__24495;
count__24488 = G__24496;
i__24489 = G__24497;
continue;
}
} else
{var t = cljs.core.first.call(null,seq__24486__$1);dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
{
var G__24498 = cljs.core.next.call(null,seq__24486__$1);
var G__24499 = null;
var G__24500 = 0;
var G__24501 = 0;
seq__24486 = G__24498;
chunk__24487 = G__24499;
count__24488 = G__24500;
i__24489 = G__24501;
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
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_24543){var state_val_24544 = (state_24543[1]);if((state_val_24544 === 7))
{var inst_24538 = (state_24543[2]);var state_24543__$1 = (function (){var statearr_24545 = state_24543;(statearr_24545[7] = inst_24538);
return statearr_24545;
})();var statearr_24546_24560 = state_24543__$1;(statearr_24546_24560[2] = null);
(statearr_24546_24560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24544 === 6))
{var state_24543__$1 = state_24543;var statearr_24547_24561 = state_24543__$1;(statearr_24547_24561[2] = null);
(statearr_24547_24561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24544 === 5))
{var inst_24533 = (state_24543[8]);var inst_24535 = cljs_demo.core.who_is_listening.call(null,inst_24533);var state_24543__$1 = state_24543;var statearr_24548_24562 = state_24543__$1;(statearr_24548_24562[2] = inst_24535);
(statearr_24548_24562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24544 === 4))
{var inst_24533 = (state_24543[8]);var inst_24533__$1 = (state_24543[2]);var state_24543__$1 = (function (){var statearr_24549 = state_24543;(statearr_24549[8] = inst_24533__$1);
return statearr_24549;
})();if(cljs.core.truth_(inst_24533__$1))
{var statearr_24550_24563 = state_24543__$1;(statearr_24550_24563[1] = 5);
} else
{var statearr_24551_24564 = state_24543__$1;(statearr_24551_24564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24544 === 3))
{var inst_24541 = (state_24543[2]);var state_24543__$1 = state_24543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else
{if((state_val_24544 === 2))
{var state_24543__$1 = state_24543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24543__$1,4,chan);
} else
{if((state_val_24544 === 1))
{var state_24543__$1 = state_24543;var statearr_24552_24565 = state_24543__$1;(statearr_24552_24565[2] = null);
(statearr_24552_24565[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_24556 = [null,null,null,null,null,null,null,null,null];(statearr_24556[0] = state_machine__5709__auto__);
(statearr_24556[1] = 1);
return statearr_24556;
});
var state_machine__5709__auto____1 = (function (state_24543){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_24543);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e24557){if((e24557 instanceof Object))
{var ex__5712__auto__ = e24557;var statearr_24558_24566 = state_24543;(statearr_24558_24566[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24567 = state_24543;
state_24543 = G__24567;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_24559 = f__5724__auto__.call(null);(statearr_24559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_24559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
cljs_demo.core.lmax = (function (){var top = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(37, 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",1013904356),17.5,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),6], null)], null)], null);var f = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0, -20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"black"], null)], null)], null);var tail = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(18, 0, 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"#F6F7E4"], null)], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"-10 15 150 100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,25,25,"#a6bddb","black",0.1,5])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),28,new cljs.core.Keyword(null,"font-size","font-size",3722789425),2], null),"Message Broker"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#l","g#l",1014004418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(0,0,0)"], null),(function (){var a = cljs.core.conj.call(null,tail,tail);var i = 0;while(true){
if(cljs.core._EQ_.call(null,19,i))
{return cljs.core.conj.call(null,top,cljs.core.conj.call(null,f,a));
} else
{{
var G__24568 = cljs.core.conj.call(null,tail,a);
var G__24569 = (i + 1);
a = G__24568;
i = G__24569;
continue;
}
}
break;
}
})()], null)], null)], null);
})();
window.onload = (function (){var c = (function (){var G__24570 = cljs.core.async.chan.call(null,100);cljs_demo.core.watch_events_BANG_.call(null,G__24570);
return G__24570;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),1000], null)], null)], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Sent Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start simulation by clicking on the devices"], null)], null));
dommy.core.append_BANG_.call(null,document.getElementById("model"),cljs_demo.core.lmax);
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#msg","div#msg",2686146561)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#subscribers","div#subscribers",704152459),(function (){var dom24571 = document.createElementNS("http://www.w3.org/1999/xhtml","ul");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)))
{dom24571.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)));
} else
{}
return dom24571;
})()], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subscribers","#subscribers",2078691450)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#received","div#received",4272036101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Received Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"No Messages Received"], null)], null));
cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"monitors","monitors",685105611),"#publishers");
return cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"listens","listens",1195876094),"#subscribers ul");
});
