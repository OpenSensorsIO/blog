// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_demo.core.img_path = "resources/public/imgs/";
cljs_demo.core.things = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"env-monitor",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pollution","noise"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_001_leaf.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"personA",new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["crowdflow","heatbeat"], null),new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_003_user.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"personB",new cljs.core.Keyword(null,"name","name",1017277949),"Mary",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","pollution","temprature"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_035_woman.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"mobile",new cljs.core.Keyword(null,"name","name",1017277949),"Phone",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","crowdflow","noise","temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_279_tablet.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"cars",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["traffic"], null),new cljs.core.Keyword(null,"name","name",1017277949),"M's Car",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_005_car.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"transport",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["parking","traffic"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_014_train.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"weather-st",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["temprature","wind"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_013_beach_umbrella.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"building",new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["energy","pollution","parking"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_089_building.png"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"camden-la",new cljs.core.Keyword(null,"name","name",1017277949),"Camden Council",new cljs.core.Keyword(null,"listens","listens",1195876094),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["everything"], null),new cljs.core.Keyword(null,"image","image",1114217677),"glyphicons_042_pie_chart.png"], null)], null);
cljs_demo.core.make_animatex = (function make_animatex(x){var G__84802 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__84802.setAttribute("dur","1s");
G__84802.setAttribute("attributeName","cx");
G__84802.setAttribute("from",(x + 20));
G__84802.setAttribute("to",250);
G__84802.setAttribute("repeatCount","indefinite");
G__84802.setAttribute("calcMode","linear");
return G__84802;
});
cljs_demo.core.make_annimatey = (function make_annimatey(){var G__84804 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__84804.setAttribute("dur","1s");
G__84804.setAttribute("attributeName","cy");
G__84804.setAttribute("from",0);
G__84804.setAttribute("to",150);
G__84804.setAttribute("repeatCount","indefinite");
G__84804.setAttribute("calcMode","linear");
return G__84804;
});
cljs_demo.core.rotate_lmax = (function rotate_lmax(rotate){cljs.core.swap_BANG_.call(null,rotate,cljs.core._PLUS_,18);
return document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#l","#l",1013905435)], null))).setAttribute("transform",[cljs.core.str("rotate("),cljs.core.str(cljs.core.deref.call(null,rotate)),cljs.core.str("300,37,50)")].join(''));
});
cljs_demo.core.make_animate_s_x = (function make_animate_s_x(x){var G__84806 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__84806.setAttribute("dur","1s");
G__84806.setAttribute("attributeName","cx");
G__84806.setAttribute("from",(x - 20));
G__84806.setAttribute("to",250);
G__84806.setAttribute("repeatCount","indefinite");
G__84806.setAttribute("calcMode","linear");
return G__84806;
});
cljs_demo.core.make_annimate_s_y = (function make_annimate_s_y(){var G__84808 = document.createElementNS("http://www.w3.org/2000/svg","animate");G__84808.setAttribute("dur","1s");
G__84808.setAttribute("attributeName","cy");
G__84808.setAttribute("from",450);
G__84808.setAttribute("to",700);
G__84808.setAttribute("repeatCount","indefinite");
G__84808.setAttribute("calcMode","linear");
return G__84808;
});
cljs_demo.core.pub_component = (function pub_component(p__84809,chan,x){var map__84817 = p__84809;var map__84817__$1 = ((cljs.core.seq_QMARK_.call(null,map__84817))?cljs.core.apply.call(null,cljs.core.hash_map,map__84817):map__84817);var monitors = cljs.core.get.call(null,map__84817__$1,new cljs.core.Keyword(null,"monitors","monitors",685105611));var image = cljs.core.get.call(null,map__84817__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__84817__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var type = cljs.core.get.call(null,map__84817__$1,new cljs.core.Keyword(null,"type","type",1017479852));var i = cljs.core.atom.call(null,cljs.core.rand_int.call(null,100));var topic = cljs.core.atom.call(null,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(i)].join(''));var degree_rotate = cljs.core.atom.call(null,0);var new_topic = ((function (i,topic,degree_rotate){
return (function (chan__$1){return setInterval(((function (i,topic,degree_rotate){
return (function (){cljs.core.async.put_BANG_.call(null,chan__$1,cljs.core.deref.call(null,topic));
dommy.core.replace_BANG_.call(null,document.querySelector("#topic p"),(function (){var dom84818 = document.createElementNS("http://www.w3.org/1999/xhtml","p");dom84818.appendChild(dommy.template.__GT_node_like.call(null,cljs.core.deref.call(null,topic)));
return dom84818;
})());
cljs.core.reset_BANG_.call(null,topic,[cljs.core.str(type),cljs.core.str("/"),cljs.core.str(cljs.core.rand_nth.call(null,monitors)),cljs.core.str("/"),cljs.core.str(cljs.core.reset_BANG_.call(null,i,cljs.core.rand_int.call(null,100)))].join(''));
return cljs_demo.core.rotate_lmax.call(null,degree_rotate);
});})(i,topic,degree_rotate))
,dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom84819 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom84819.setAttribute("cx",x);
} else
{}
if(40)
{dom84819.setAttribute("cy",40);
} else
{}
if(5)
{dom84819.setAttribute("r",5);
} else
{}
if("purple")
{dom84819.setAttribute("fill","purple");
} else
{}
if(1)
{dom84819.setAttribute("opacity",1);
} else
{}
dom84819.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animatex.call(null,x)));
dom84819.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimatey.call(null)));
return dom84819;
})()),dommy.core.append_BANG_.call(null,document.querySelector("#messages svg"),(function (){var dom84820 = document.createElementNS("http://www.w3.org/2000/svg","circle");if(cljs.core.truth_(x))
{dom84820.setAttribute("cx",x);
} else
{}
if(300)
{dom84820.setAttribute("cy",300);
} else
{}
if(5)
{dom84820.setAttribute("r",5);
} else
{}
if("purple")
{dom84820.setAttribute("fill","purple");
} else
{}
if(1)
{dom84820.setAttribute("opacity",1);
} else
{}
dom84820.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_animate_s_x.call(null,x)));
dom84820.appendChild(dommy.template.__GT_node_like.call(null,cljs_demo.core.make_annimate_s_y.call(null)));
return dom84820;
})()),1000);
});})(i,topic,degree_rotate))
;var G__84821 = (function (){var dom84822 = document.createElementNS("http://www.w3.org/1999/xhtml","a");if("#")
{dom84822.setAttribute("href","#");
} else
{}
dom84822.appendChild(dommy.template.__GT_node_like.call(null,type));
dom84822.appendChild((function (){var dom84823 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom84823.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom84823.setAttribute("width",30);
} else
{}
if(35)
{dom84823.setAttribute("height",35);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px"], null)))
{dom84823.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"15px"], null)));
} else
{}
return dom84823;
})());
return dom84822;
})();dommy.core.listen_BANG_.call(null,G__84821,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return new_topic.call(null,chan);
}));
return G__84821;
});
cljs_demo.core.sub = (function sub(listens,topic){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sub], true),listens);
});
cljs_demo.core.sub_component = (function sub_component(p__84824,chan,x){var map__84830 = p__84824;var map__84830__$1 = ((cljs.core.seq_QMARK_.call(null,map__84830))?cljs.core.apply.call(null,cljs.core.hash_map,map__84830):map__84830);var image = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"image","image",1114217677));var listens = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"listens","listens",1195876094));var name = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"name","name",1017277949));var dom84831 = document.createElementNS("http://www.w3.org/1999/xhtml","div");if(cljs.core.truth_(name))
{dom84831.setAttribute("id",name);
} else
{}
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)))
{dom84831.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",2685668404),"inline",new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(x),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),"700px"], null)));
} else
{}
dom84831.appendChild((function (){var dom84832 = document.createElementNS("http://www.w3.org/1999/xhtml","li");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)))
{dom84832.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",617477330),"20px",new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"5px",new cljs.core.Keyword(null,"display","display",2685668404),"inline"], null)));
} else
{}
dom84832.appendChild((function (){var dom84833 = document.createElementNS("http://www.w3.org/1999/xhtml","img");if(cljs.core.truth_([cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join('')))
{dom84833.setAttribute("src",[cljs.core.str(cljs_demo.core.img_path),cljs.core.str(image)].join(''));
} else
{}
if(30)
{dom84833.setAttribute("width",30);
} else
{}
if(35)
{dom84833.setAttribute("height",35);
} else
{}
return dom84833;
})());
dom84832.appendChild((function (){var dom84834 = document.createElementNS("http://www.w3.org/1999/xhtml","br");return dom84834;
})());
dom84832.appendChild(dommy.template.__GT_node_like.call(null,name));
return dom84832;
})());
return dom84831;
});
cljs_demo.core.who_is_listening = (function who_is_listening(topic){var sub = cljs.core.filter.call(null,(function (p1__84835_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__84835_SHARP_,new cljs.core.Keyword(null,"listens","listens",1195876094));
}),cljs_demo.core.things);var sensor = cljs.core.second.call(null,clojure.string.split.call(null,topic,/\//));var l = (function (){var iter__4160__auto__ = ((function (sub,sensor){
return (function iter__84849(s__84850){return (new cljs.core.LazySeq(null,((function (sub,sensor){
return (function (){var s__84850__$1 = s__84850;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84850__$1);if(temp__4092__auto__)
{var s__84850__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84850__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__84850__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__84852 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__84851 = 0;while(true){
if((i__84851 < size__4159__auto__))
{var s = cljs.core._nth.call(null,c__4158__auto__,i__84851);cljs.core.chunk_append.call(null,b__84852,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null));
{
var G__84861 = (i__84851 + 1);
i__84851 = G__84861;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84852),iter__84849.call(null,cljs.core.chunk_rest.call(null,s__84850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84852),null);
}
} else
{var s = cljs.core.first.call(null,s__84850__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sensor], true),new cljs.core.Keyword(null,"listens","listens",1195876094).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s):null),iter__84849.call(null,cljs.core.rest.call(null,s__84850__$2)));
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
return (function (p1__84836_SHARP_){return !((p1__84836_SHARP_ == null));
});})(sub,sensor,l))
,l);var i = cljs.core.atom.call(null,0);return console.log((function (){var iter__4160__auto__ = (function iter__84853(s__84854){return (new cljs.core.LazySeq(null,(function (){var s__84854__$1 = s__84854;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84854__$1);if(temp__4092__auto__)
{var s__84854__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84854__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__84854__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__84856 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__84855 = 0;while(true){
if((i__84855 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__84855);cljs.core.chunk_append.call(null,b__84856,(function (){var G__84859 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,i),0);if(cljs.core._EQ_.call(null,cljs.core.swap_BANG_.call(null,i,cljs.core.inc),G__84859))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)),G__84859))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",-1640528316,null),G__84859))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null),G__84859))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,document.querySelector("#received p"),G__84859))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol("d","replace!","d/replace!",-2070858021,null),G__84859))
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
var G__84862 = (i__84855 + 1);
i__84855 = G__84862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84856),iter__84853.call(null,cljs.core.chunk_rest.call(null,s__84854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84856),null);
}
} else
{var x = cljs.core.first.call(null,s__84854__$2);return cljs.core.cons.call(null,(function (){var G__84860 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,i),0);if(cljs.core._EQ_.call(null,cljs.core.swap_BANG_.call(null,i,cljs.core.inc),G__84860))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,dommy.core.append_BANG_.call(null,document.querySelector("#received p"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null)),G__84860))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"do","do",-1640528316,null),G__84860))
{return new cljs.core.Keyword(null,"else","else",1017020587);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),[cljs.core.str(x),cljs.core.str(" received message "),cljs.core.str(topic)].join('')], null),G__84860))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,document.querySelector("#received p"),G__84860))
{return (10 > cljs.core.deref.call(null,i));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol("d","replace!","d/replace!",-2070858021,null),G__84860))
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
})(),iter__84853.call(null,cljs.core.rest.call(null,s__84854__$2)));
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
cljs_demo.core.renderer = (function renderer(things,chan,type,div){var pub_sub = cljs.core.filter.call(null,(function (p1__84863_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__84863_SHARP_,type);
}),things);var x = cljs.core.atom.call(null,35);var iter__4160__auto__ = (function iter__84868(s__84869){return (new cljs.core.LazySeq(null,(function (){var s__84869__$1 = s__84869;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84869__$1);if(temp__4092__auto__)
{var s__84869__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84869__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__84869__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__84871 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__84870 = 0;while(true){
if((i__84870 < size__4159__auto__))
{var t = cljs.core._nth.call(null,c__4158__auto__,i__84870);cljs.core.chunk_append.call(null,b__84871,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})());
{
var G__84872 = (i__84870 + 1);
i__84870 = G__84872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84871),iter__84868.call(null,cljs.core.chunk_rest.call(null,s__84869__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84871),null);
}
} else
{var t = cljs.core.first.call(null,s__84869__$2);return cljs.core.cons.call(null,(function (){dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,div)),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"monitors","monitors",685105611)))?cljs_demo.core.pub_component.call(null,t,chan,cljs.core.deref.call(null,x)):cljs_demo.core.sub_component.call(null,t,chan,(50 + cljs.core.deref.call(null,x)))));
return cljs.core.swap_BANG_.call(null,x,cljs.core._PLUS_,85);
})(),iter__84868.call(null,cljs.core.rest.call(null,s__84869__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,pub_sub);
});
cljs_demo.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_84914){var state_val_84915 = (state_84914[1]);if((state_val_84915 === 7))
{var inst_84909 = (state_84914[2]);var state_84914__$1 = (function (){var statearr_84916 = state_84914;(statearr_84916[7] = inst_84909);
return statearr_84916;
})();var statearr_84917_84931 = state_84914__$1;(statearr_84917_84931[2] = null);
(statearr_84917_84931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84915 === 6))
{var state_84914__$1 = state_84914;var statearr_84918_84932 = state_84914__$1;(statearr_84918_84932[2] = null);
(statearr_84918_84932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84915 === 5))
{var inst_84904 = (state_84914[8]);var inst_84906 = cljs_demo.core.who_is_listening.call(null,inst_84904);var state_84914__$1 = state_84914;var statearr_84919_84933 = state_84914__$1;(statearr_84919_84933[2] = inst_84906);
(statearr_84919_84933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84915 === 4))
{var inst_84904 = (state_84914[8]);var inst_84904__$1 = (state_84914[2]);var state_84914__$1 = (function (){var statearr_84920 = state_84914;(statearr_84920[8] = inst_84904__$1);
return statearr_84920;
})();if(cljs.core.truth_(inst_84904__$1))
{var statearr_84921_84934 = state_84914__$1;(statearr_84921_84934[1] = 5);
} else
{var statearr_84922_84935 = state_84914__$1;(statearr_84922_84935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_84915 === 3))
{var inst_84912 = (state_84914[2]);var state_84914__$1 = state_84914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84914__$1,inst_84912);
} else
{if((state_val_84915 === 2))
{var state_84914__$1 = state_84914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84914__$1,4,chan);
} else
{if((state_val_84915 === 1))
{var state_84914__$1 = state_84914;var statearr_84923_84936 = state_84914__$1;(statearr_84923_84936[2] = null);
(statearr_84923_84936[1] = 2);
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
var state_machine__8689__auto____0 = (function (){var statearr_84927 = [null,null,null,null,null,null,null,null,null];(statearr_84927[0] = state_machine__8689__auto__);
(statearr_84927[1] = 1);
return statearr_84927;
});
var state_machine__8689__auto____1 = (function (state_84914){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_84914);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e84928){if((e84928 instanceof Object))
{var ex__8692__auto__ = e84928;var statearr_84929_84937 = state_84914;(statearr_84929_84937[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__84938 = state_84914;
state_84914 = G__84938;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_84914){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_84914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_84930 = f__8704__auto__.call(null);(statearr_84930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_84930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
});
cljs_demo.core.lmax = (function (){var top = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(37, 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",1013904356),17.5,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),6], null)], null)], null);var f = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(0, -20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"black"], null)], null)], null);var tail = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(18, 0, 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),3,new cljs.core.Keyword(null,"height","height",4087841945),5,new cljs.core.Keyword(null,"fill","fill",1017047285),"#F6F7E4"], null)], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#lmax","div#lmax",1313772956),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",1468104792),"0 0 250 80"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),new cljs.core.Keyword(null,"height","height",4087841945)],[25,5,5,25,25,"#a6bddb","black",0.1,5])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),28,new cljs.core.Keyword(null,"y","y",1013904363),28,new cljs.core.Keyword(null,"font-size","font-size",3722789425),2], null),"Message Broker"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#l","g#l",1014004418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"rotate(0,0,0)"], null),(function (){var a = cljs.core.conj.call(null,tail,tail);var i = 0;while(true){
if(cljs.core._EQ_.call(null,19,i))
{return cljs.core.conj.call(null,top,cljs.core.conj.call(null,f,a));
} else
{{
var G__84939 = cljs.core.conj.call(null,tail,a);
var G__84940 = (i + 1);
a = G__84939;
i = G__84940;
continue;
}
}
break;
}
})()], null)], null)], null);
})();
window.onload = (function (){var c = (function (){var G__84941 = cljs.core.async.chan.call(null,100);cljs_demo.core.watch_events_BANG_.call(null,G__84941);
return G__84941;
})();dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#publishers","div#publishers",2758060187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",4618662000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),800,new cljs.core.Keyword(null,"height","height",4087841945),1000], null)], null)], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#topic","div#topic",1727361583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Sent Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Start simulation by clicking on the devices"], null)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),cljs_demo.core.lmax);
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#msg","div#msg",2686146561)], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#model","#model",2119994456)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#subscribers","div#subscribers",704152459),(function (){var dom84942 = document.createElementNS("http://www.w3.org/1999/xhtml","ul");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)))
{dom84942.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",1693670325),"10px",new cljs.core.Keyword(null,"list-style-type","list-style-type",2619292119),"none"], null)));
} else
{}
return dom84942;
})()], null));
dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subscribers","#subscribers",2078691450)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#received","div#received",4272036101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Received Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"No Messages Received"], null)], null));
console.log(cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"monitors","monitors",685105611),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#publishers","#publishers",4464968140)], null)));
console.log(cljs_demo.core.renderer.call(null,cljs_demo.core.things,c,new cljs.core.Keyword(null,"listens","listens",1195876094),"#subscribers ul"));
return dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#John","#John",1048542016)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"foo"], null));
});
