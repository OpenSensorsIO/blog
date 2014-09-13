// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10062 = (function (f,fn_handler,meta10063){
this.f = f;
this.fn_handler = fn_handler;
this.meta10063 = meta10063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10062.cljs$lang$type = true;
cljs.core.async.t10062.cljs$lang$ctorStr = "cljs.core.async/t10062";
cljs.core.async.t10062.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10062");
});
cljs.core.async.t10062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10064){var self__ = this;
var _10064__$1 = this;return self__.meta10063;
});
cljs.core.async.t10062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10064,meta10063__$1){var self__ = this;
var _10064__$1 = this;return (new cljs.core.async.t10062(self__.f,self__.fn_handler,meta10063__$1));
});
cljs.core.async.__GT_t10062 = (function __GT_t10062(f__$1,fn_handler__$1,meta10063){return (new cljs.core.async.t10062(f__$1,fn_handler__$1,meta10063));
});
}
return (new cljs.core.async.t10062(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10066 = buff;if(G__10066)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10066.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10066.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10066);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10066);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10067 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10067);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10067);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10068 = n;var x_10069 = 0;while(true){
if((x_10069 < n__4291__auto___10068))
{(a[x_10069] = 0);
{
var G__10070 = (x_10069 + 1);
x_10069 = G__10070;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10071 = (i + 1);
i = G__10071;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10075 = (function (flag,alt_flag,meta10076){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10076 = meta10076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10075.cljs$lang$type = true;
cljs.core.async.t10075.cljs$lang$ctorStr = "cljs.core.async/t10075";
cljs.core.async.t10075.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10075");
});
cljs.core.async.t10075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10077){var self__ = this;
var _10077__$1 = this;return self__.meta10076;
});
cljs.core.async.t10075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10077,meta10076__$1){var self__ = this;
var _10077__$1 = this;return (new cljs.core.async.t10075(self__.flag,self__.alt_flag,meta10076__$1));
});
cljs.core.async.__GT_t10075 = (function __GT_t10075(flag__$1,alt_flag__$1,meta10076){return (new cljs.core.async.t10075(flag__$1,alt_flag__$1,meta10076));
});
}
return (new cljs.core.async.t10075(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10081 = (function (cb,flag,alt_handler,meta10082){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10082 = meta10082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10081.cljs$lang$type = true;
cljs.core.async.t10081.cljs$lang$ctorStr = "cljs.core.async/t10081";
cljs.core.async.t10081.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10081");
});
cljs.core.async.t10081.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10083){var self__ = this;
var _10083__$1 = this;return self__.meta10082;
});
cljs.core.async.t10081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10083,meta10082__$1){var self__ = this;
var _10083__$1 = this;return (new cljs.core.async.t10081(self__.cb,self__.flag,self__.alt_handler,meta10082__$1));
});
cljs.core.async.__GT_t10081 = (function __GT_t10081(cb__$1,flag__$1,alt_handler__$1,meta10082){return (new cljs.core.async.t10081(cb__$1,flag__$1,alt_handler__$1,meta10082));
});
}
return (new cljs.core.async.t10081(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10084_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10084_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10085 = (i + 1);
i = G__10085;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10086){var map__10088 = p__10086;var map__10088__$1 = ((cljs.core.seq_QMARK_.call(null,map__10088))?cljs.core.apply.call(null,cljs.core.hash_map,map__10088):map__10088);var opts = map__10088__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10086 = null;if (arguments.length > 1) {
  p__10086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10086);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10089){
var ports = cljs.core.first(arglist__10089);
var p__10086 = cljs.core.rest(arglist__10089);
return alts_BANG___delegate(ports,p__10086);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10097 = (function (ch,f,map_LT_,meta10098){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10098 = meta10098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10097.cljs$lang$type = true;
cljs.core.async.t10097.cljs$lang$ctorStr = "cljs.core.async/t10097";
cljs.core.async.t10097.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10097");
});
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10100 = (function (fn1,_,meta10098,ch,f,map_LT_,meta10101){
this.fn1 = fn1;
this._ = _;
this.meta10098 = meta10098;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10101 = meta10101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10100.cljs$lang$type = true;
cljs.core.async.t10100.cljs$lang$ctorStr = "cljs.core.async/t10100";
cljs.core.async.t10100.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10100");
});
cljs.core.async.t10100.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10100.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10090_SHARP_){return f1.call(null,(((p1__10090_SHARP_ == null))?null:self__.f.call(null,p1__10090_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10102){var self__ = this;
var _10102__$1 = this;return self__.meta10101;
});
cljs.core.async.t10100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10102,meta10101__$1){var self__ = this;
var _10102__$1 = this;return (new cljs.core.async.t10100(self__.fn1,self__._,self__.meta10098,self__.ch,self__.f,self__.map_LT_,meta10101__$1));
});
cljs.core.async.__GT_t10100 = (function __GT_t10100(fn1__$1,___$2,meta10098__$1,ch__$2,f__$2,map_LT___$2,meta10101){return (new cljs.core.async.t10100(fn1__$1,___$2,meta10098__$1,ch__$2,f__$2,map_LT___$2,meta10101));
});
}
return (new cljs.core.async.t10100(fn1,___$1,self__.meta10098,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10099){var self__ = this;
var _10099__$1 = this;return self__.meta10098;
});
cljs.core.async.t10097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10099,meta10098__$1){var self__ = this;
var _10099__$1 = this;return (new cljs.core.async.t10097(self__.ch,self__.f,self__.map_LT_,meta10098__$1));
});
cljs.core.async.__GT_t10097 = (function __GT_t10097(ch__$1,f__$1,map_LT___$1,meta10098){return (new cljs.core.async.t10097(ch__$1,f__$1,map_LT___$1,meta10098));
});
}
return (new cljs.core.async.t10097(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10106 = (function (ch,f,map_GT_,meta10107){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10107 = meta10107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10106.cljs$lang$type = true;
cljs.core.async.t10106.cljs$lang$ctorStr = "cljs.core.async/t10106";
cljs.core.async.t10106.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10106");
});
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10108){var self__ = this;
var _10108__$1 = this;return self__.meta10107;
});
cljs.core.async.t10106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10108,meta10107__$1){var self__ = this;
var _10108__$1 = this;return (new cljs.core.async.t10106(self__.ch,self__.f,self__.map_GT_,meta10107__$1));
});
cljs.core.async.__GT_t10106 = (function __GT_t10106(ch__$1,f__$1,map_GT___$1,meta10107){return (new cljs.core.async.t10106(ch__$1,f__$1,map_GT___$1,meta10107));
});
}
return (new cljs.core.async.t10106(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10112 = (function (ch,p,filter_GT_,meta10113){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10113 = meta10113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10112.cljs$lang$type = true;
cljs.core.async.t10112.cljs$lang$ctorStr = "cljs.core.async/t10112";
cljs.core.async.t10112.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10112");
});
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10114){var self__ = this;
var _10114__$1 = this;return self__.meta10113;
});
cljs.core.async.t10112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10114,meta10113__$1){var self__ = this;
var _10114__$1 = this;return (new cljs.core.async.t10112(self__.ch,self__.p,self__.filter_GT_,meta10113__$1));
});
cljs.core.async.__GT_t10112 = (function __GT_t10112(ch__$1,p__$1,filter_GT___$1,meta10113){return (new cljs.core.async.t10112(ch__$1,p__$1,filter_GT___$1,meta10113));
});
}
return (new cljs.core.async.t10112(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___10197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10176){var state_val_10177 = (state_10176[1]);if((state_val_10177 === 1))
{var state_10176__$1 = state_10176;var statearr_10178_10198 = state_10176__$1;(statearr_10178_10198[2] = null);
(statearr_10178_10198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 2))
{var state_10176__$1 = state_10176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10176__$1,4,ch);
} else
{if((state_val_10177 === 3))
{var inst_10174 = (state_10176[2]);var state_10176__$1 = state_10176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10176__$1,inst_10174);
} else
{if((state_val_10177 === 4))
{var inst_10158 = (state_10176[7]);var inst_10158__$1 = (state_10176[2]);var inst_10159 = (inst_10158__$1 == null);var state_10176__$1 = (function (){var statearr_10179 = state_10176;(statearr_10179[7] = inst_10158__$1);
return statearr_10179;
})();if(cljs.core.truth_(inst_10159))
{var statearr_10180_10199 = state_10176__$1;(statearr_10180_10199[1] = 5);
} else
{var statearr_10181_10200 = state_10176__$1;(statearr_10181_10200[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 5))
{var inst_10161 = cljs.core.async.close_BANG_.call(null,out);var state_10176__$1 = state_10176;var statearr_10182_10201 = state_10176__$1;(statearr_10182_10201[2] = inst_10161);
(statearr_10182_10201[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 6))
{var inst_10158 = (state_10176[7]);var inst_10163 = p.call(null,inst_10158);var state_10176__$1 = state_10176;if(cljs.core.truth_(inst_10163))
{var statearr_10183_10202 = state_10176__$1;(statearr_10183_10202[1] = 8);
} else
{var statearr_10184_10203 = state_10176__$1;(statearr_10184_10203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 7))
{var inst_10172 = (state_10176[2]);var state_10176__$1 = state_10176;var statearr_10185_10204 = state_10176__$1;(statearr_10185_10204[2] = inst_10172);
(statearr_10185_10204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 8))
{var inst_10158 = (state_10176[7]);var state_10176__$1 = state_10176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10176__$1,11,out,inst_10158);
} else
{if((state_val_10177 === 9))
{var state_10176__$1 = state_10176;var statearr_10186_10205 = state_10176__$1;(statearr_10186_10205[2] = null);
(statearr_10186_10205[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 10))
{var inst_10169 = (state_10176[2]);var state_10176__$1 = (function (){var statearr_10187 = state_10176;(statearr_10187[8] = inst_10169);
return statearr_10187;
})();var statearr_10188_10206 = state_10176__$1;(statearr_10188_10206[2] = null);
(statearr_10188_10206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10177 === 11))
{var inst_10166 = (state_10176[2]);var state_10176__$1 = state_10176;var statearr_10189_10207 = state_10176__$1;(statearr_10189_10207[2] = inst_10166);
(statearr_10189_10207[1] = 10);
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
}
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_10193 = [null,null,null,null,null,null,null,null,null];(statearr_10193[0] = state_machine__5709__auto__);
(statearr_10193[1] = 1);
return statearr_10193;
});
var state_machine__5709__auto____1 = (function (state_10176){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10176);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10194){if((e10194 instanceof Object))
{var ex__5712__auto__ = e10194;var statearr_10195_10208 = state_10176;(statearr_10195_10208[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10209 = state_10176;
state_10176 = G__10209;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10176){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10196 = f__5724__auto__.call(null);(statearr_10196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10197);
return statearr_10196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10361){var state_val_10362 = (state_10361[1]);if((state_val_10362 === 1))
{var state_10361__$1 = state_10361;var statearr_10363_10400 = state_10361__$1;(statearr_10363_10400[2] = null);
(statearr_10363_10400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 2))
{var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10361__$1,4,in$);
} else
{if((state_val_10362 === 3))
{var inst_10359 = (state_10361[2]);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10361__$1,inst_10359);
} else
{if((state_val_10362 === 4))
{var inst_10307 = (state_10361[7]);var inst_10307__$1 = (state_10361[2]);var inst_10308 = (inst_10307__$1 == null);var state_10361__$1 = (function (){var statearr_10364 = state_10361;(statearr_10364[7] = inst_10307__$1);
return statearr_10364;
})();if(cljs.core.truth_(inst_10308))
{var statearr_10365_10401 = state_10361__$1;(statearr_10365_10401[1] = 5);
} else
{var statearr_10366_10402 = state_10361__$1;(statearr_10366_10402[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 5))
{var inst_10310 = cljs.core.async.close_BANG_.call(null,out);var state_10361__$1 = state_10361;var statearr_10367_10403 = state_10361__$1;(statearr_10367_10403[2] = inst_10310);
(statearr_10367_10403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 6))
{var inst_10307 = (state_10361[7]);var inst_10312 = f.call(null,inst_10307);var inst_10317 = cljs.core.seq.call(null,inst_10312);var inst_10318 = inst_10317;var inst_10319 = null;var inst_10320 = 0;var inst_10321 = 0;var state_10361__$1 = (function (){var statearr_10368 = state_10361;(statearr_10368[8] = inst_10321);
(statearr_10368[9] = inst_10320);
(statearr_10368[10] = inst_10319);
(statearr_10368[11] = inst_10318);
return statearr_10368;
})();var statearr_10369_10404 = state_10361__$1;(statearr_10369_10404[2] = null);
(statearr_10369_10404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 7))
{var inst_10357 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10370_10405 = state_10361__$1;(statearr_10370_10405[2] = inst_10357);
(statearr_10370_10405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 8))
{var inst_10321 = (state_10361[8]);var inst_10320 = (state_10361[9]);var inst_10323 = (inst_10321 < inst_10320);var inst_10324 = inst_10323;var state_10361__$1 = state_10361;if(cljs.core.truth_(inst_10324))
{var statearr_10371_10406 = state_10361__$1;(statearr_10371_10406[1] = 10);
} else
{var statearr_10372_10407 = state_10361__$1;(statearr_10372_10407[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 9))
{var inst_10354 = (state_10361[2]);var state_10361__$1 = (function (){var statearr_10373 = state_10361;(statearr_10373[12] = inst_10354);
return statearr_10373;
})();var statearr_10374_10408 = state_10361__$1;(statearr_10374_10408[2] = null);
(statearr_10374_10408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 10))
{var inst_10321 = (state_10361[8]);var inst_10319 = (state_10361[10]);var inst_10326 = cljs.core._nth.call(null,inst_10319,inst_10321);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10361__$1,13,out,inst_10326);
} else
{if((state_val_10362 === 11))
{var inst_10332 = (state_10361[13]);var inst_10318 = (state_10361[11]);var inst_10332__$1 = cljs.core.seq.call(null,inst_10318);var state_10361__$1 = (function (){var statearr_10378 = state_10361;(statearr_10378[13] = inst_10332__$1);
return statearr_10378;
})();if(inst_10332__$1)
{var statearr_10379_10409 = state_10361__$1;(statearr_10379_10409[1] = 14);
} else
{var statearr_10380_10410 = state_10361__$1;(statearr_10380_10410[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 12))
{var inst_10352 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10381_10411 = state_10361__$1;(statearr_10381_10411[2] = inst_10352);
(statearr_10381_10411[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 13))
{var inst_10321 = (state_10361[8]);var inst_10320 = (state_10361[9]);var inst_10319 = (state_10361[10]);var inst_10318 = (state_10361[11]);var inst_10328 = (state_10361[2]);var inst_10329 = (inst_10321 + 1);var tmp10375 = inst_10320;var tmp10376 = inst_10319;var tmp10377 = inst_10318;var inst_10318__$1 = tmp10377;var inst_10319__$1 = tmp10376;var inst_10320__$1 = tmp10375;var inst_10321__$1 = inst_10329;var state_10361__$1 = (function (){var statearr_10382 = state_10361;(statearr_10382[8] = inst_10321__$1);
(statearr_10382[9] = inst_10320__$1);
(statearr_10382[10] = inst_10319__$1);
(statearr_10382[11] = inst_10318__$1);
(statearr_10382[14] = inst_10328);
return statearr_10382;
})();var statearr_10383_10412 = state_10361__$1;(statearr_10383_10412[2] = null);
(statearr_10383_10412[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 14))
{var inst_10332 = (state_10361[13]);var inst_10334 = cljs.core.chunked_seq_QMARK_.call(null,inst_10332);var state_10361__$1 = state_10361;if(inst_10334)
{var statearr_10384_10413 = state_10361__$1;(statearr_10384_10413[1] = 17);
} else
{var statearr_10385_10414 = state_10361__$1;(statearr_10385_10414[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 15))
{var state_10361__$1 = state_10361;var statearr_10386_10415 = state_10361__$1;(statearr_10386_10415[2] = null);
(statearr_10386_10415[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 16))
{var inst_10350 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10387_10416 = state_10361__$1;(statearr_10387_10416[2] = inst_10350);
(statearr_10387_10416[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 17))
{var inst_10332 = (state_10361[13]);var inst_10336 = cljs.core.chunk_first.call(null,inst_10332);var inst_10337 = cljs.core.chunk_rest.call(null,inst_10332);var inst_10338 = cljs.core.count.call(null,inst_10336);var inst_10318 = inst_10337;var inst_10319 = inst_10336;var inst_10320 = inst_10338;var inst_10321 = 0;var state_10361__$1 = (function (){var statearr_10388 = state_10361;(statearr_10388[8] = inst_10321);
(statearr_10388[9] = inst_10320);
(statearr_10388[10] = inst_10319);
(statearr_10388[11] = inst_10318);
return statearr_10388;
})();var statearr_10389_10417 = state_10361__$1;(statearr_10389_10417[2] = null);
(statearr_10389_10417[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 18))
{var inst_10332 = (state_10361[13]);var inst_10341 = cljs.core.first.call(null,inst_10332);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10361__$1,20,out,inst_10341);
} else
{if((state_val_10362 === 19))
{var inst_10347 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10390_10418 = state_10361__$1;(statearr_10390_10418[2] = inst_10347);
(statearr_10390_10418[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 20))
{var inst_10332 = (state_10361[13]);var inst_10343 = (state_10361[2]);var inst_10344 = cljs.core.next.call(null,inst_10332);var inst_10318 = inst_10344;var inst_10319 = null;var inst_10320 = 0;var inst_10321 = 0;var state_10361__$1 = (function (){var statearr_10391 = state_10361;(statearr_10391[8] = inst_10321);
(statearr_10391[9] = inst_10320);
(statearr_10391[10] = inst_10319);
(statearr_10391[11] = inst_10318);
(statearr_10391[15] = inst_10343);
return statearr_10391;
})();var statearr_10392_10419 = state_10361__$1;(statearr_10392_10419[2] = null);
(statearr_10392_10419[1] = 8);
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
}
}
}
}
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_10396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10396[0] = state_machine__5709__auto__);
(statearr_10396[1] = 1);
return statearr_10396;
});
var state_machine__5709__auto____1 = (function (state_10361){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10397){if((e10397 instanceof Object))
{var ex__5712__auto__ = e10397;var statearr_10398_10420 = state_10361;(statearr_10398_10420[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10421 = state_10361;
state_10361 = G__10421;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10361){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10399 = f__5724__auto__.call(null);(statearr_10399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5723__auto___10502 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10481){var state_val_10482 = (state_10481[1]);if((state_val_10482 === 1))
{var state_10481__$1 = state_10481;var statearr_10483_10503 = state_10481__$1;(statearr_10483_10503[2] = null);
(statearr_10483_10503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 2))
{var state_10481__$1 = state_10481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10481__$1,4,from);
} else
{if((state_val_10482 === 3))
{var inst_10479 = (state_10481[2]);var state_10481__$1 = state_10481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10481__$1,inst_10479);
} else
{if((state_val_10482 === 4))
{var inst_10464 = (state_10481[7]);var inst_10464__$1 = (state_10481[2]);var inst_10465 = (inst_10464__$1 == null);var state_10481__$1 = (function (){var statearr_10484 = state_10481;(statearr_10484[7] = inst_10464__$1);
return statearr_10484;
})();if(cljs.core.truth_(inst_10465))
{var statearr_10485_10504 = state_10481__$1;(statearr_10485_10504[1] = 5);
} else
{var statearr_10486_10505 = state_10481__$1;(statearr_10486_10505[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 5))
{var state_10481__$1 = state_10481;if(cljs.core.truth_(close_QMARK_))
{var statearr_10487_10506 = state_10481__$1;(statearr_10487_10506[1] = 8);
} else
{var statearr_10488_10507 = state_10481__$1;(statearr_10488_10507[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 6))
{var inst_10464 = (state_10481[7]);var state_10481__$1 = state_10481;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10481__$1,11,to,inst_10464);
} else
{if((state_val_10482 === 7))
{var inst_10477 = (state_10481[2]);var state_10481__$1 = state_10481;var statearr_10489_10508 = state_10481__$1;(statearr_10489_10508[2] = inst_10477);
(statearr_10489_10508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 8))
{var inst_10468 = cljs.core.async.close_BANG_.call(null,to);var state_10481__$1 = state_10481;var statearr_10490_10509 = state_10481__$1;(statearr_10490_10509[2] = inst_10468);
(statearr_10490_10509[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 9))
{var state_10481__$1 = state_10481;var statearr_10491_10510 = state_10481__$1;(statearr_10491_10510[2] = null);
(statearr_10491_10510[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 10))
{var inst_10471 = (state_10481[2]);var state_10481__$1 = state_10481;var statearr_10492_10511 = state_10481__$1;(statearr_10492_10511[2] = inst_10471);
(statearr_10492_10511[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10482 === 11))
{var inst_10474 = (state_10481[2]);var state_10481__$1 = (function (){var statearr_10493 = state_10481;(statearr_10493[8] = inst_10474);
return statearr_10493;
})();var statearr_10494_10512 = state_10481__$1;(statearr_10494_10512[2] = null);
(statearr_10494_10512[1] = 2);
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
}
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_10498 = [null,null,null,null,null,null,null,null,null];(statearr_10498[0] = state_machine__5709__auto__);
(statearr_10498[1] = 1);
return statearr_10498;
});
var state_machine__5709__auto____1 = (function (state_10481){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10481);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10499){if((e10499 instanceof Object))
{var ex__5712__auto__ = e10499;var statearr_10500_10513 = state_10481;(statearr_10500_10513[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10514 = state_10481;
state_10481 = G__10514;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10481){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10501 = f__5724__auto__.call(null);(statearr_10501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10502);
return statearr_10501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5723__auto___10601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10579){var state_val_10580 = (state_10579[1]);if((state_val_10580 === 1))
{var state_10579__$1 = state_10579;var statearr_10581_10602 = state_10579__$1;(statearr_10581_10602[2] = null);
(statearr_10581_10602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 2))
{var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10579__$1,4,ch);
} else
{if((state_val_10580 === 3))
{var inst_10577 = (state_10579[2]);var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10579__$1,inst_10577);
} else
{if((state_val_10580 === 4))
{var inst_10560 = (state_10579[7]);var inst_10560__$1 = (state_10579[2]);var inst_10561 = (inst_10560__$1 == null);var state_10579__$1 = (function (){var statearr_10582 = state_10579;(statearr_10582[7] = inst_10560__$1);
return statearr_10582;
})();if(cljs.core.truth_(inst_10561))
{var statearr_10583_10603 = state_10579__$1;(statearr_10583_10603[1] = 5);
} else
{var statearr_10584_10604 = state_10579__$1;(statearr_10584_10604[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 5))
{var inst_10563 = cljs.core.async.close_BANG_.call(null,tc);var inst_10564 = cljs.core.async.close_BANG_.call(null,fc);var state_10579__$1 = (function (){var statearr_10585 = state_10579;(statearr_10585[8] = inst_10563);
return statearr_10585;
})();var statearr_10586_10605 = state_10579__$1;(statearr_10586_10605[2] = inst_10564);
(statearr_10586_10605[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 6))
{var inst_10560 = (state_10579[7]);var inst_10566 = p.call(null,inst_10560);var state_10579__$1 = state_10579;if(cljs.core.truth_(inst_10566))
{var statearr_10587_10606 = state_10579__$1;(statearr_10587_10606[1] = 9);
} else
{var statearr_10588_10607 = state_10579__$1;(statearr_10588_10607[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 7))
{var inst_10575 = (state_10579[2]);var state_10579__$1 = state_10579;var statearr_10589_10608 = state_10579__$1;(statearr_10589_10608[2] = inst_10575);
(statearr_10589_10608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 8))
{var inst_10572 = (state_10579[2]);var state_10579__$1 = (function (){var statearr_10590 = state_10579;(statearr_10590[9] = inst_10572);
return statearr_10590;
})();var statearr_10591_10609 = state_10579__$1;(statearr_10591_10609[2] = null);
(statearr_10591_10609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 9))
{var state_10579__$1 = state_10579;var statearr_10592_10610 = state_10579__$1;(statearr_10592_10610[2] = tc);
(statearr_10592_10610[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 10))
{var state_10579__$1 = state_10579;var statearr_10593_10611 = state_10579__$1;(statearr_10593_10611[2] = fc);
(statearr_10593_10611[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10580 === 11))
{var inst_10560 = (state_10579[7]);var inst_10570 = (state_10579[2]);var state_10579__$1 = state_10579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10579__$1,8,inst_10570,inst_10560);
} else
{return null;
}
}
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_10597 = [null,null,null,null,null,null,null,null,null,null];(statearr_10597[0] = state_machine__5709__auto__);
(statearr_10597[1] = 1);
return statearr_10597;
});
var state_machine__5709__auto____1 = (function (state_10579){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10579);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10598){if((e10598 instanceof Object))
{var ex__5712__auto__ = e10598;var statearr_10599_10612 = state_10579;(statearr_10599_10612[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10613 = state_10579;
state_10579 = G__10613;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10579){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10600 = f__5724__auto__.call(null);(statearr_10600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10601);
return statearr_10600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10660){var state_val_10661 = (state_10660[1]);if((state_val_10661 === 7))
{var inst_10656 = (state_10660[2]);var state_10660__$1 = state_10660;var statearr_10662_10678 = state_10660__$1;(statearr_10662_10678[2] = inst_10656);
(statearr_10662_10678[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10661 === 6))
{var inst_10646 = (state_10660[7]);var inst_10649 = (state_10660[8]);var inst_10653 = f.call(null,inst_10646,inst_10649);var inst_10646__$1 = inst_10653;var state_10660__$1 = (function (){var statearr_10663 = state_10660;(statearr_10663[7] = inst_10646__$1);
return statearr_10663;
})();var statearr_10664_10679 = state_10660__$1;(statearr_10664_10679[2] = null);
(statearr_10664_10679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10661 === 5))
{var inst_10646 = (state_10660[7]);var state_10660__$1 = state_10660;var statearr_10665_10680 = state_10660__$1;(statearr_10665_10680[2] = inst_10646);
(statearr_10665_10680[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10661 === 4))
{var inst_10649 = (state_10660[8]);var inst_10649__$1 = (state_10660[2]);var inst_10650 = (inst_10649__$1 == null);var state_10660__$1 = (function (){var statearr_10666 = state_10660;(statearr_10666[8] = inst_10649__$1);
return statearr_10666;
})();if(cljs.core.truth_(inst_10650))
{var statearr_10667_10681 = state_10660__$1;(statearr_10667_10681[1] = 5);
} else
{var statearr_10668_10682 = state_10660__$1;(statearr_10668_10682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10661 === 3))
{var inst_10658 = (state_10660[2]);var state_10660__$1 = state_10660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10660__$1,inst_10658);
} else
{if((state_val_10661 === 2))
{var state_10660__$1 = state_10660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10660__$1,4,ch);
} else
{if((state_val_10661 === 1))
{var inst_10646 = init;var state_10660__$1 = (function (){var statearr_10669 = state_10660;(statearr_10669[7] = inst_10646);
return statearr_10669;
})();var statearr_10670_10683 = state_10660__$1;(statearr_10670_10683[2] = null);
(statearr_10670_10683[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_10674 = [null,null,null,null,null,null,null,null,null];(statearr_10674[0] = state_machine__5709__auto__);
(statearr_10674[1] = 1);
return statearr_10674;
});
var state_machine__5709__auto____1 = (function (state_10660){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10660);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10675){if((e10675 instanceof Object))
{var ex__5712__auto__ = e10675;var statearr_10676_10684 = state_10660;(statearr_10676_10684[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10685 = state_10660;
state_10660 = G__10685;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10660){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10677 = f__5724__auto__.call(null);(statearr_10677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10747){var state_val_10748 = (state_10747[1]);if((state_val_10748 === 1))
{var inst_10727 = cljs.core.seq.call(null,coll);var inst_10728 = inst_10727;var state_10747__$1 = (function (){var statearr_10749 = state_10747;(statearr_10749[7] = inst_10728);
return statearr_10749;
})();var statearr_10750_10768 = state_10747__$1;(statearr_10750_10768[2] = null);
(statearr_10750_10768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 2))
{var inst_10728 = (state_10747[7]);var state_10747__$1 = state_10747;if(cljs.core.truth_(inst_10728))
{var statearr_10751_10769 = state_10747__$1;(statearr_10751_10769[1] = 4);
} else
{var statearr_10752_10770 = state_10747__$1;(statearr_10752_10770[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 3))
{var inst_10745 = (state_10747[2]);var state_10747__$1 = state_10747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10747__$1,inst_10745);
} else
{if((state_val_10748 === 4))
{var inst_10728 = (state_10747[7]);var inst_10731 = cljs.core.first.call(null,inst_10728);var state_10747__$1 = state_10747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10747__$1,7,ch,inst_10731);
} else
{if((state_val_10748 === 5))
{var state_10747__$1 = state_10747;if(cljs.core.truth_(close_QMARK_))
{var statearr_10753_10771 = state_10747__$1;(statearr_10753_10771[1] = 8);
} else
{var statearr_10754_10772 = state_10747__$1;(statearr_10754_10772[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 6))
{var inst_10743 = (state_10747[2]);var state_10747__$1 = state_10747;var statearr_10755_10773 = state_10747__$1;(statearr_10755_10773[2] = inst_10743);
(statearr_10755_10773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 7))
{var inst_10728 = (state_10747[7]);var inst_10733 = (state_10747[2]);var inst_10734 = cljs.core.next.call(null,inst_10728);var inst_10728__$1 = inst_10734;var state_10747__$1 = (function (){var statearr_10756 = state_10747;(statearr_10756[7] = inst_10728__$1);
(statearr_10756[8] = inst_10733);
return statearr_10756;
})();var statearr_10757_10774 = state_10747__$1;(statearr_10757_10774[2] = null);
(statearr_10757_10774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 8))
{var inst_10738 = cljs.core.async.close_BANG_.call(null,ch);var state_10747__$1 = state_10747;var statearr_10758_10775 = state_10747__$1;(statearr_10758_10775[2] = inst_10738);
(statearr_10758_10775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 9))
{var state_10747__$1 = state_10747;var statearr_10759_10776 = state_10747__$1;(statearr_10759_10776[2] = null);
(statearr_10759_10776[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10748 === 10))
{var inst_10741 = (state_10747[2]);var state_10747__$1 = state_10747;var statearr_10760_10777 = state_10747__$1;(statearr_10760_10777[2] = inst_10741);
(statearr_10760_10777[1] = 6);
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
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_10764 = [null,null,null,null,null,null,null,null,null];(statearr_10764[0] = state_machine__5709__auto__);
(statearr_10764[1] = 1);
return statearr_10764;
});
var state_machine__5709__auto____1 = (function (state_10747){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10747);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10765){if((e10765 instanceof Object))
{var ex__5712__auto__ = e10765;var statearr_10766_10778 = state_10747;(statearr_10766_10778[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10779 = state_10747;
state_10747 = G__10779;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10747){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10767 = f__5724__auto__.call(null);(statearr_10767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return c__5723__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10781 = {};return obj10781;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10783 = {};return obj10783;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11007 = (function (cs,ch,mult,meta11008){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11008 = meta11008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11007.cljs$lang$type = true;
cljs.core.async.t11007.cljs$lang$ctorStr = "cljs.core.async/t11007";
cljs.core.async.t11007.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11007");
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11009){var self__ = this;
var _11009__$1 = this;return self__.meta11008;
});})(cs))
;
cljs.core.async.t11007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11009,meta11008__$1){var self__ = this;
var _11009__$1 = this;return (new cljs.core.async.t11007(self__.cs,self__.ch,self__.mult,meta11008__$1));
});})(cs))
;
cljs.core.async.__GT_t11007 = ((function (cs){
return (function __GT_t11007(cs__$1,ch__$1,mult__$1,meta11008){return (new cljs.core.async.t11007(cs__$1,ch__$1,mult__$1,meta11008));
});})(cs))
;
}
return (new cljs.core.async.t11007(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5723__auto___11230 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11144){var state_val_11145 = (state_11144[1]);if((state_val_11145 === 32))
{var inst_11012 = (state_11144[7]);var inst_11088 = (state_11144[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11144,31,Object,null,30);var inst_11095 = cljs.core.async.put_BANG_.call(null,inst_11088,inst_11012,done);var state_11144__$1 = state_11144;var statearr_11146_11231 = state_11144__$1;(statearr_11146_11231[2] = inst_11095);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 1))
{var state_11144__$1 = state_11144;var statearr_11147_11232 = state_11144__$1;(statearr_11147_11232[2] = null);
(statearr_11147_11232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 33))
{var inst_11101 = (state_11144[9]);var inst_11103 = cljs.core.chunked_seq_QMARK_.call(null,inst_11101);var state_11144__$1 = state_11144;if(inst_11103)
{var statearr_11148_11233 = state_11144__$1;(statearr_11148_11233[1] = 36);
} else
{var statearr_11149_11234 = state_11144__$1;(statearr_11149_11234[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 2))
{var state_11144__$1 = state_11144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11144__$1,4,ch);
} else
{if((state_val_11145 === 34))
{var state_11144__$1 = state_11144;var statearr_11150_11235 = state_11144__$1;(statearr_11150_11235[2] = null);
(statearr_11150_11235[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 3))
{var inst_11142 = (state_11144[2]);var state_11144__$1 = state_11144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11144__$1,inst_11142);
} else
{if((state_val_11145 === 35))
{var inst_11126 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11151_11236 = state_11144__$1;(statearr_11151_11236[2] = inst_11126);
(statearr_11151_11236[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 4))
{var inst_11012 = (state_11144[7]);var inst_11012__$1 = (state_11144[2]);var inst_11013 = (inst_11012__$1 == null);var state_11144__$1 = (function (){var statearr_11152 = state_11144;(statearr_11152[7] = inst_11012__$1);
return statearr_11152;
})();if(cljs.core.truth_(inst_11013))
{var statearr_11153_11237 = state_11144__$1;(statearr_11153_11237[1] = 5);
} else
{var statearr_11154_11238 = state_11144__$1;(statearr_11154_11238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 36))
{var inst_11101 = (state_11144[9]);var inst_11105 = cljs.core.chunk_first.call(null,inst_11101);var inst_11106 = cljs.core.chunk_rest.call(null,inst_11101);var inst_11107 = cljs.core.count.call(null,inst_11105);var inst_11080 = inst_11106;var inst_11081 = inst_11105;var inst_11082 = inst_11107;var inst_11083 = 0;var state_11144__$1 = (function (){var statearr_11155 = state_11144;(statearr_11155[10] = inst_11080);
(statearr_11155[11] = inst_11082);
(statearr_11155[12] = inst_11081);
(statearr_11155[13] = inst_11083);
return statearr_11155;
})();var statearr_11156_11239 = state_11144__$1;(statearr_11156_11239[2] = null);
(statearr_11156_11239[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 5))
{var inst_11019 = cljs.core.deref.call(null,cs);var inst_11020 = cljs.core.seq.call(null,inst_11019);var inst_11021 = inst_11020;var inst_11022 = null;var inst_11023 = 0;var inst_11024 = 0;var state_11144__$1 = (function (){var statearr_11157 = state_11144;(statearr_11157[14] = inst_11024);
(statearr_11157[15] = inst_11023);
(statearr_11157[16] = inst_11021);
(statearr_11157[17] = inst_11022);
return statearr_11157;
})();var statearr_11158_11240 = state_11144__$1;(statearr_11158_11240[2] = null);
(statearr_11158_11240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 37))
{var inst_11101 = (state_11144[9]);var inst_11110 = cljs.core.first.call(null,inst_11101);var state_11144__$1 = (function (){var statearr_11159 = state_11144;(statearr_11159[18] = inst_11110);
return statearr_11159;
})();var statearr_11160_11241 = state_11144__$1;(statearr_11160_11241[2] = null);
(statearr_11160_11241[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 6))
{var inst_11072 = (state_11144[19]);var inst_11071 = cljs.core.deref.call(null,cs);var inst_11072__$1 = cljs.core.keys.call(null,inst_11071);var inst_11073 = cljs.core.count.call(null,inst_11072__$1);var inst_11074 = cljs.core.reset_BANG_.call(null,dctr,inst_11073);var inst_11079 = cljs.core.seq.call(null,inst_11072__$1);var inst_11080 = inst_11079;var inst_11081 = null;var inst_11082 = 0;var inst_11083 = 0;var state_11144__$1 = (function (){var statearr_11161 = state_11144;(statearr_11161[10] = inst_11080);
(statearr_11161[20] = inst_11074);
(statearr_11161[19] = inst_11072__$1);
(statearr_11161[11] = inst_11082);
(statearr_11161[12] = inst_11081);
(statearr_11161[13] = inst_11083);
return statearr_11161;
})();var statearr_11162_11242 = state_11144__$1;(statearr_11162_11242[2] = null);
(statearr_11162_11242[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 38))
{var inst_11123 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11163_11243 = state_11144__$1;(statearr_11163_11243[2] = inst_11123);
(statearr_11163_11243[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 7))
{var inst_11140 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11164_11244 = state_11144__$1;(statearr_11164_11244[2] = inst_11140);
(statearr_11164_11244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 39))
{var inst_11101 = (state_11144[9]);var inst_11119 = (state_11144[2]);var inst_11120 = cljs.core.next.call(null,inst_11101);var inst_11080 = inst_11120;var inst_11081 = null;var inst_11082 = 0;var inst_11083 = 0;var state_11144__$1 = (function (){var statearr_11165 = state_11144;(statearr_11165[10] = inst_11080);
(statearr_11165[21] = inst_11119);
(statearr_11165[11] = inst_11082);
(statearr_11165[12] = inst_11081);
(statearr_11165[13] = inst_11083);
return statearr_11165;
})();var statearr_11166_11245 = state_11144__$1;(statearr_11166_11245[2] = null);
(statearr_11166_11245[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 8))
{var inst_11024 = (state_11144[14]);var inst_11023 = (state_11144[15]);var inst_11026 = (inst_11024 < inst_11023);var inst_11027 = inst_11026;var state_11144__$1 = state_11144;if(cljs.core.truth_(inst_11027))
{var statearr_11167_11246 = state_11144__$1;(statearr_11167_11246[1] = 10);
} else
{var statearr_11168_11247 = state_11144__$1;(statearr_11168_11247[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 40))
{var inst_11110 = (state_11144[18]);var inst_11111 = (state_11144[2]);var inst_11112 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11113 = cljs.core.async.untap_STAR_.call(null,m,inst_11110);var state_11144__$1 = (function (){var statearr_11169 = state_11144;(statearr_11169[22] = inst_11112);
(statearr_11169[23] = inst_11111);
return statearr_11169;
})();var statearr_11170_11248 = state_11144__$1;(statearr_11170_11248[2] = inst_11113);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 9))
{var inst_11069 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11171_11249 = state_11144__$1;(statearr_11171_11249[2] = inst_11069);
(statearr_11171_11249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 41))
{var inst_11012 = (state_11144[7]);var inst_11110 = (state_11144[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11144,40,Object,null,39);var inst_11117 = cljs.core.async.put_BANG_.call(null,inst_11110,inst_11012,done);var state_11144__$1 = state_11144;var statearr_11172_11250 = state_11144__$1;(statearr_11172_11250[2] = inst_11117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 10))
{var inst_11024 = (state_11144[14]);var inst_11022 = (state_11144[17]);var inst_11030 = cljs.core._nth.call(null,inst_11022,inst_11024);var inst_11031 = cljs.core.nth.call(null,inst_11030,0,null);var inst_11032 = cljs.core.nth.call(null,inst_11030,1,null);var state_11144__$1 = (function (){var statearr_11173 = state_11144;(statearr_11173[24] = inst_11031);
return statearr_11173;
})();if(cljs.core.truth_(inst_11032))
{var statearr_11174_11251 = state_11144__$1;(statearr_11174_11251[1] = 13);
} else
{var statearr_11175_11252 = state_11144__$1;(statearr_11175_11252[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 42))
{var state_11144__$1 = state_11144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11144__$1,45,dchan);
} else
{if((state_val_11145 === 11))
{var inst_11021 = (state_11144[16]);var inst_11041 = (state_11144[25]);var inst_11041__$1 = cljs.core.seq.call(null,inst_11021);var state_11144__$1 = (function (){var statearr_11176 = state_11144;(statearr_11176[25] = inst_11041__$1);
return statearr_11176;
})();if(inst_11041__$1)
{var statearr_11177_11253 = state_11144__$1;(statearr_11177_11253[1] = 16);
} else
{var statearr_11178_11254 = state_11144__$1;(statearr_11178_11254[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 43))
{var state_11144__$1 = state_11144;var statearr_11179_11255 = state_11144__$1;(statearr_11179_11255[2] = null);
(statearr_11179_11255[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 12))
{var inst_11067 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11180_11256 = state_11144__$1;(statearr_11180_11256[2] = inst_11067);
(statearr_11180_11256[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 44))
{var inst_11137 = (state_11144[2]);var state_11144__$1 = (function (){var statearr_11181 = state_11144;(statearr_11181[26] = inst_11137);
return statearr_11181;
})();var statearr_11182_11257 = state_11144__$1;(statearr_11182_11257[2] = null);
(statearr_11182_11257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 13))
{var inst_11031 = (state_11144[24]);var inst_11034 = cljs.core.async.close_BANG_.call(null,inst_11031);var state_11144__$1 = state_11144;var statearr_11183_11258 = state_11144__$1;(statearr_11183_11258[2] = inst_11034);
(statearr_11183_11258[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 45))
{var inst_11134 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11187_11259 = state_11144__$1;(statearr_11187_11259[2] = inst_11134);
(statearr_11187_11259[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 14))
{var state_11144__$1 = state_11144;var statearr_11188_11260 = state_11144__$1;(statearr_11188_11260[2] = null);
(statearr_11188_11260[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 15))
{var inst_11024 = (state_11144[14]);var inst_11023 = (state_11144[15]);var inst_11021 = (state_11144[16]);var inst_11022 = (state_11144[17]);var inst_11037 = (state_11144[2]);var inst_11038 = (inst_11024 + 1);var tmp11184 = inst_11023;var tmp11185 = inst_11021;var tmp11186 = inst_11022;var inst_11021__$1 = tmp11185;var inst_11022__$1 = tmp11186;var inst_11023__$1 = tmp11184;var inst_11024__$1 = inst_11038;var state_11144__$1 = (function (){var statearr_11189 = state_11144;(statearr_11189[14] = inst_11024__$1);
(statearr_11189[15] = inst_11023__$1);
(statearr_11189[16] = inst_11021__$1);
(statearr_11189[17] = inst_11022__$1);
(statearr_11189[27] = inst_11037);
return statearr_11189;
})();var statearr_11190_11261 = state_11144__$1;(statearr_11190_11261[2] = null);
(statearr_11190_11261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 16))
{var inst_11041 = (state_11144[25]);var inst_11043 = cljs.core.chunked_seq_QMARK_.call(null,inst_11041);var state_11144__$1 = state_11144;if(inst_11043)
{var statearr_11191_11262 = state_11144__$1;(statearr_11191_11262[1] = 19);
} else
{var statearr_11192_11263 = state_11144__$1;(statearr_11192_11263[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 17))
{var state_11144__$1 = state_11144;var statearr_11193_11264 = state_11144__$1;(statearr_11193_11264[2] = null);
(statearr_11193_11264[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 18))
{var inst_11065 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11194_11265 = state_11144__$1;(statearr_11194_11265[2] = inst_11065);
(statearr_11194_11265[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 19))
{var inst_11041 = (state_11144[25]);var inst_11045 = cljs.core.chunk_first.call(null,inst_11041);var inst_11046 = cljs.core.chunk_rest.call(null,inst_11041);var inst_11047 = cljs.core.count.call(null,inst_11045);var inst_11021 = inst_11046;var inst_11022 = inst_11045;var inst_11023 = inst_11047;var inst_11024 = 0;var state_11144__$1 = (function (){var statearr_11195 = state_11144;(statearr_11195[14] = inst_11024);
(statearr_11195[15] = inst_11023);
(statearr_11195[16] = inst_11021);
(statearr_11195[17] = inst_11022);
return statearr_11195;
})();var statearr_11196_11266 = state_11144__$1;(statearr_11196_11266[2] = null);
(statearr_11196_11266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 20))
{var inst_11041 = (state_11144[25]);var inst_11051 = cljs.core.first.call(null,inst_11041);var inst_11052 = cljs.core.nth.call(null,inst_11051,0,null);var inst_11053 = cljs.core.nth.call(null,inst_11051,1,null);var state_11144__$1 = (function (){var statearr_11197 = state_11144;(statearr_11197[28] = inst_11052);
return statearr_11197;
})();if(cljs.core.truth_(inst_11053))
{var statearr_11198_11267 = state_11144__$1;(statearr_11198_11267[1] = 22);
} else
{var statearr_11199_11268 = state_11144__$1;(statearr_11199_11268[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 21))
{var inst_11062 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11200_11269 = state_11144__$1;(statearr_11200_11269[2] = inst_11062);
(statearr_11200_11269[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 22))
{var inst_11052 = (state_11144[28]);var inst_11055 = cljs.core.async.close_BANG_.call(null,inst_11052);var state_11144__$1 = state_11144;var statearr_11201_11270 = state_11144__$1;(statearr_11201_11270[2] = inst_11055);
(statearr_11201_11270[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 23))
{var state_11144__$1 = state_11144;var statearr_11202_11271 = state_11144__$1;(statearr_11202_11271[2] = null);
(statearr_11202_11271[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 24))
{var inst_11041 = (state_11144[25]);var inst_11058 = (state_11144[2]);var inst_11059 = cljs.core.next.call(null,inst_11041);var inst_11021 = inst_11059;var inst_11022 = null;var inst_11023 = 0;var inst_11024 = 0;var state_11144__$1 = (function (){var statearr_11203 = state_11144;(statearr_11203[14] = inst_11024);
(statearr_11203[15] = inst_11023);
(statearr_11203[16] = inst_11021);
(statearr_11203[17] = inst_11022);
(statearr_11203[29] = inst_11058);
return statearr_11203;
})();var statearr_11204_11272 = state_11144__$1;(statearr_11204_11272[2] = null);
(statearr_11204_11272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 25))
{var inst_11082 = (state_11144[11]);var inst_11083 = (state_11144[13]);var inst_11085 = (inst_11083 < inst_11082);var inst_11086 = inst_11085;var state_11144__$1 = state_11144;if(cljs.core.truth_(inst_11086))
{var statearr_11205_11273 = state_11144__$1;(statearr_11205_11273[1] = 27);
} else
{var statearr_11206_11274 = state_11144__$1;(statearr_11206_11274[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 26))
{var inst_11072 = (state_11144[19]);var inst_11130 = (state_11144[2]);var inst_11131 = cljs.core.seq.call(null,inst_11072);var state_11144__$1 = (function (){var statearr_11207 = state_11144;(statearr_11207[30] = inst_11130);
return statearr_11207;
})();if(inst_11131)
{var statearr_11208_11275 = state_11144__$1;(statearr_11208_11275[1] = 42);
} else
{var statearr_11209_11276 = state_11144__$1;(statearr_11209_11276[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 27))
{var inst_11081 = (state_11144[12]);var inst_11083 = (state_11144[13]);var inst_11088 = cljs.core._nth.call(null,inst_11081,inst_11083);var state_11144__$1 = (function (){var statearr_11210 = state_11144;(statearr_11210[8] = inst_11088);
return statearr_11210;
})();var statearr_11211_11277 = state_11144__$1;(statearr_11211_11277[2] = null);
(statearr_11211_11277[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 28))
{var inst_11080 = (state_11144[10]);var inst_11101 = (state_11144[9]);var inst_11101__$1 = cljs.core.seq.call(null,inst_11080);var state_11144__$1 = (function (){var statearr_11215 = state_11144;(statearr_11215[9] = inst_11101__$1);
return statearr_11215;
})();if(inst_11101__$1)
{var statearr_11216_11278 = state_11144__$1;(statearr_11216_11278[1] = 33);
} else
{var statearr_11217_11279 = state_11144__$1;(statearr_11217_11279[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 29))
{var inst_11128 = (state_11144[2]);var state_11144__$1 = state_11144;var statearr_11218_11280 = state_11144__$1;(statearr_11218_11280[2] = inst_11128);
(statearr_11218_11280[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 30))
{var inst_11080 = (state_11144[10]);var inst_11082 = (state_11144[11]);var inst_11081 = (state_11144[12]);var inst_11083 = (state_11144[13]);var inst_11097 = (state_11144[2]);var inst_11098 = (inst_11083 + 1);var tmp11212 = inst_11080;var tmp11213 = inst_11082;var tmp11214 = inst_11081;var inst_11080__$1 = tmp11212;var inst_11081__$1 = tmp11214;var inst_11082__$1 = tmp11213;var inst_11083__$1 = inst_11098;var state_11144__$1 = (function (){var statearr_11219 = state_11144;(statearr_11219[10] = inst_11080__$1);
(statearr_11219[31] = inst_11097);
(statearr_11219[11] = inst_11082__$1);
(statearr_11219[12] = inst_11081__$1);
(statearr_11219[13] = inst_11083__$1);
return statearr_11219;
})();var statearr_11220_11281 = state_11144__$1;(statearr_11220_11281[2] = null);
(statearr_11220_11281[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11145 === 31))
{var inst_11088 = (state_11144[8]);var inst_11089 = (state_11144[2]);var inst_11090 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11091 = cljs.core.async.untap_STAR_.call(null,m,inst_11088);var state_11144__$1 = (function (){var statearr_11221 = state_11144;(statearr_11221[32] = inst_11089);
(statearr_11221[33] = inst_11090);
return statearr_11221;
})();var statearr_11222_11282 = state_11144__$1;(statearr_11222_11282[2] = inst_11091);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_11226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11226[0] = state_machine__5709__auto__);
(statearr_11226[1] = 1);
return statearr_11226;
});
var state_machine__5709__auto____1 = (function (state_11144){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11227){if((e11227 instanceof Object))
{var ex__5712__auto__ = e11227;var statearr_11228_11283 = state_11144;(statearr_11228_11283[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11284 = state_11144;
state_11144 = G__11284;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11144){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11229 = f__5724__auto__.call(null);(statearr_11229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11230);
return statearr_11229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11286 = {};return obj11286;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11396 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11397){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11397 = meta11397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11396.cljs$lang$type = true;
cljs.core.async.t11396.cljs$lang$ctorStr = "cljs.core.async/t11396";
cljs.core.async.t11396.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11396");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11398){var self__ = this;
var _11398__$1 = this;return self__.meta11397;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11398,meta11397__$1){var self__ = this;
var _11398__$1 = this;return (new cljs.core.async.t11396(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11397__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11396 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11397){return (new cljs.core.async.t11396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11397));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11396(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5723__auto___11505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11463){var state_val_11464 = (state_11463[1]);if((state_val_11464 === 1))
{var inst_11402 = (state_11463[7]);var inst_11402__$1 = calc_state.call(null);var inst_11403 = cljs.core.seq_QMARK_.call(null,inst_11402__$1);var state_11463__$1 = (function (){var statearr_11465 = state_11463;(statearr_11465[7] = inst_11402__$1);
return statearr_11465;
})();if(inst_11403)
{var statearr_11466_11506 = state_11463__$1;(statearr_11466_11506[1] = 2);
} else
{var statearr_11467_11507 = state_11463__$1;(statearr_11467_11507[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 2))
{var inst_11402 = (state_11463[7]);var inst_11405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11402);var state_11463__$1 = state_11463;var statearr_11468_11508 = state_11463__$1;(statearr_11468_11508[2] = inst_11405);
(statearr_11468_11508[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 3))
{var inst_11402 = (state_11463[7]);var state_11463__$1 = state_11463;var statearr_11469_11509 = state_11463__$1;(statearr_11469_11509[2] = inst_11402);
(statearr_11469_11509[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 4))
{var inst_11402 = (state_11463[7]);var inst_11408 = (state_11463[2]);var inst_11409 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11410 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11411 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11412 = inst_11402;var state_11463__$1 = (function (){var statearr_11470 = state_11463;(statearr_11470[8] = inst_11412);
(statearr_11470[9] = inst_11411);
(statearr_11470[10] = inst_11410);
(statearr_11470[11] = inst_11409);
return statearr_11470;
})();var statearr_11471_11510 = state_11463__$1;(statearr_11471_11510[2] = null);
(statearr_11471_11510[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 5))
{var inst_11412 = (state_11463[8]);var inst_11415 = cljs.core.seq_QMARK_.call(null,inst_11412);var state_11463__$1 = state_11463;if(inst_11415)
{var statearr_11472_11511 = state_11463__$1;(statearr_11472_11511[1] = 7);
} else
{var statearr_11473_11512 = state_11463__$1;(statearr_11473_11512[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 6))
{var inst_11461 = (state_11463[2]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11463__$1,inst_11461);
} else
{if((state_val_11464 === 7))
{var inst_11412 = (state_11463[8]);var inst_11417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11412);var state_11463__$1 = state_11463;var statearr_11474_11513 = state_11463__$1;(statearr_11474_11513[2] = inst_11417);
(statearr_11474_11513[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 8))
{var inst_11412 = (state_11463[8]);var state_11463__$1 = state_11463;var statearr_11475_11514 = state_11463__$1;(statearr_11475_11514[2] = inst_11412);
(statearr_11475_11514[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 9))
{var inst_11420 = (state_11463[12]);var inst_11420__$1 = (state_11463[2]);var inst_11421 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11422 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11423 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11463__$1 = (function (){var statearr_11476 = state_11463;(statearr_11476[13] = inst_11422);
(statearr_11476[12] = inst_11420__$1);
(statearr_11476[14] = inst_11423);
return statearr_11476;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11463__$1,10,inst_11421);
} else
{if((state_val_11464 === 10))
{var inst_11428 = (state_11463[15]);var inst_11427 = (state_11463[16]);var inst_11426 = (state_11463[2]);var inst_11427__$1 = cljs.core.nth.call(null,inst_11426,0,null);var inst_11428__$1 = cljs.core.nth.call(null,inst_11426,1,null);var inst_11429 = (inst_11427__$1 == null);var inst_11430 = cljs.core._EQ_.call(null,inst_11428__$1,change);var inst_11431 = (inst_11429) || (inst_11430);var state_11463__$1 = (function (){var statearr_11477 = state_11463;(statearr_11477[15] = inst_11428__$1);
(statearr_11477[16] = inst_11427__$1);
return statearr_11477;
})();if(cljs.core.truth_(inst_11431))
{var statearr_11478_11515 = state_11463__$1;(statearr_11478_11515[1] = 11);
} else
{var statearr_11479_11516 = state_11463__$1;(statearr_11479_11516[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 11))
{var inst_11427 = (state_11463[16]);var inst_11433 = (inst_11427 == null);var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11433))
{var statearr_11480_11517 = state_11463__$1;(statearr_11480_11517[1] = 14);
} else
{var statearr_11481_11518 = state_11463__$1;(statearr_11481_11518[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 12))
{var inst_11428 = (state_11463[15]);var inst_11442 = (state_11463[17]);var inst_11423 = (state_11463[14]);var inst_11442__$1 = inst_11423.call(null,inst_11428);var state_11463__$1 = (function (){var statearr_11482 = state_11463;(statearr_11482[17] = inst_11442__$1);
return statearr_11482;
})();if(cljs.core.truth_(inst_11442__$1))
{var statearr_11483_11519 = state_11463__$1;(statearr_11483_11519[1] = 17);
} else
{var statearr_11484_11520 = state_11463__$1;(statearr_11484_11520[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 13))
{var inst_11459 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11485_11521 = state_11463__$1;(statearr_11485_11521[2] = inst_11459);
(statearr_11485_11521[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 14))
{var inst_11428 = (state_11463[15]);var inst_11435 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11428);var state_11463__$1 = state_11463;var statearr_11486_11522 = state_11463__$1;(statearr_11486_11522[2] = inst_11435);
(statearr_11486_11522[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 15))
{var state_11463__$1 = state_11463;var statearr_11487_11523 = state_11463__$1;(statearr_11487_11523[2] = null);
(statearr_11487_11523[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 16))
{var inst_11438 = (state_11463[2]);var inst_11439 = calc_state.call(null);var inst_11412 = inst_11439;var state_11463__$1 = (function (){var statearr_11488 = state_11463;(statearr_11488[8] = inst_11412);
(statearr_11488[18] = inst_11438);
return statearr_11488;
})();var statearr_11489_11524 = state_11463__$1;(statearr_11489_11524[2] = null);
(statearr_11489_11524[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 17))
{var inst_11442 = (state_11463[17]);var state_11463__$1 = state_11463;var statearr_11490_11525 = state_11463__$1;(statearr_11490_11525[2] = inst_11442);
(statearr_11490_11525[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 18))
{var inst_11428 = (state_11463[15]);var inst_11422 = (state_11463[13]);var inst_11423 = (state_11463[14]);var inst_11445 = cljs.core.empty_QMARK_.call(null,inst_11423);var inst_11446 = inst_11422.call(null,inst_11428);var inst_11447 = cljs.core.not.call(null,inst_11446);var inst_11448 = (inst_11445) && (inst_11447);var state_11463__$1 = state_11463;var statearr_11491_11526 = state_11463__$1;(statearr_11491_11526[2] = inst_11448);
(statearr_11491_11526[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 19))
{var inst_11450 = (state_11463[2]);var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11450))
{var statearr_11492_11527 = state_11463__$1;(statearr_11492_11527[1] = 20);
} else
{var statearr_11493_11528 = state_11463__$1;(statearr_11493_11528[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 20))
{var inst_11427 = (state_11463[16]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11463__$1,23,out,inst_11427);
} else
{if((state_val_11464 === 21))
{var state_11463__$1 = state_11463;var statearr_11494_11529 = state_11463__$1;(statearr_11494_11529[2] = null);
(statearr_11494_11529[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 22))
{var inst_11420 = (state_11463[12]);var inst_11456 = (state_11463[2]);var inst_11412 = inst_11420;var state_11463__$1 = (function (){var statearr_11495 = state_11463;(statearr_11495[8] = inst_11412);
(statearr_11495[19] = inst_11456);
return statearr_11495;
})();var statearr_11496_11530 = state_11463__$1;(statearr_11496_11530[2] = null);
(statearr_11496_11530[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 23))
{var inst_11453 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11497_11531 = state_11463__$1;(statearr_11497_11531[2] = inst_11453);
(statearr_11497_11531[1] = 22);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_11501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11501[0] = state_machine__5709__auto__);
(statearr_11501[1] = 1);
return statearr_11501;
});
var state_machine__5709__auto____1 = (function (state_11463){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11463);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11502){if((e11502 instanceof Object))
{var ex__5712__auto__ = e11502;var statearr_11503_11532 = state_11463;(statearr_11503_11532[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11533 = state_11463;
state_11463 = G__11533;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11504 = f__5724__auto__.call(null);(statearr_11504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11505);
return statearr_11504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11535 = {};return obj11535;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__11536_SHARP_){if(cljs.core.truth_(p1__11536_SHARP_.call(null,topic)))
{return p1__11536_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11536_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11661 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11662){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11662 = meta11662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11661.cljs$lang$type = true;
cljs.core.async.t11661.cljs$lang$ctorStr = "cljs.core.async/t11661";
cljs.core.async.t11661.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11661");
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11661.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11663){var self__ = this;
var _11663__$1 = this;return self__.meta11662;
});})(mults,ensure_mult))
;
cljs.core.async.t11661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11663,meta11662__$1){var self__ = this;
var _11663__$1 = this;return (new cljs.core.async.t11661(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11662__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11661 = ((function (mults,ensure_mult){
return (function __GT_t11661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11662){return (new cljs.core.async.t11661(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11662));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11661(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5723__auto___11785 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11737){var state_val_11738 = (state_11737[1]);if((state_val_11738 === 1))
{var state_11737__$1 = state_11737;var statearr_11739_11786 = state_11737__$1;(statearr_11739_11786[2] = null);
(statearr_11739_11786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 2))
{var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,4,ch);
} else
{if((state_val_11738 === 3))
{var inst_11735 = (state_11737[2]);var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11737__$1,inst_11735);
} else
{if((state_val_11738 === 4))
{var inst_11666 = (state_11737[7]);var inst_11666__$1 = (state_11737[2]);var inst_11667 = (inst_11666__$1 == null);var state_11737__$1 = (function (){var statearr_11740 = state_11737;(statearr_11740[7] = inst_11666__$1);
return statearr_11740;
})();if(cljs.core.truth_(inst_11667))
{var statearr_11741_11787 = state_11737__$1;(statearr_11741_11787[1] = 5);
} else
{var statearr_11742_11788 = state_11737__$1;(statearr_11742_11788[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 5))
{var inst_11673 = cljs.core.deref.call(null,mults);var inst_11674 = cljs.core.vals.call(null,inst_11673);var inst_11675 = cljs.core.seq.call(null,inst_11674);var inst_11676 = inst_11675;var inst_11677 = null;var inst_11678 = 0;var inst_11679 = 0;var state_11737__$1 = (function (){var statearr_11743 = state_11737;(statearr_11743[8] = inst_11676);
(statearr_11743[9] = inst_11677);
(statearr_11743[10] = inst_11678);
(statearr_11743[11] = inst_11679);
return statearr_11743;
})();var statearr_11744_11789 = state_11737__$1;(statearr_11744_11789[2] = null);
(statearr_11744_11789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 6))
{var inst_11714 = (state_11737[12]);var inst_11716 = (state_11737[13]);var inst_11666 = (state_11737[7]);var inst_11714__$1 = topic_fn.call(null,inst_11666);var inst_11715 = cljs.core.deref.call(null,mults);var inst_11716__$1 = cljs.core.get.call(null,inst_11715,inst_11714__$1);var state_11737__$1 = (function (){var statearr_11745 = state_11737;(statearr_11745[12] = inst_11714__$1);
(statearr_11745[13] = inst_11716__$1);
return statearr_11745;
})();if(cljs.core.truth_(inst_11716__$1))
{var statearr_11746_11790 = state_11737__$1;(statearr_11746_11790[1] = 19);
} else
{var statearr_11747_11791 = state_11737__$1;(statearr_11747_11791[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 7))
{var inst_11733 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11748_11792 = state_11737__$1;(statearr_11748_11792[2] = inst_11733);
(statearr_11748_11792[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 8))
{var inst_11678 = (state_11737[10]);var inst_11679 = (state_11737[11]);var inst_11681 = (inst_11679 < inst_11678);var inst_11682 = inst_11681;var state_11737__$1 = state_11737;if(cljs.core.truth_(inst_11682))
{var statearr_11752_11793 = state_11737__$1;(statearr_11752_11793[1] = 10);
} else
{var statearr_11753_11794 = state_11737__$1;(statearr_11753_11794[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 9))
{var inst_11712 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11754_11795 = state_11737__$1;(statearr_11754_11795[2] = inst_11712);
(statearr_11754_11795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 10))
{var inst_11676 = (state_11737[8]);var inst_11677 = (state_11737[9]);var inst_11678 = (state_11737[10]);var inst_11679 = (state_11737[11]);var inst_11684 = cljs.core._nth.call(null,inst_11677,inst_11679);var inst_11685 = cljs.core.async.muxch_STAR_.call(null,inst_11684);var inst_11686 = cljs.core.async.close_BANG_.call(null,inst_11685);var inst_11687 = (inst_11679 + 1);var tmp11749 = inst_11676;var tmp11750 = inst_11677;var tmp11751 = inst_11678;var inst_11676__$1 = tmp11749;var inst_11677__$1 = tmp11750;var inst_11678__$1 = tmp11751;var inst_11679__$1 = inst_11687;var state_11737__$1 = (function (){var statearr_11755 = state_11737;(statearr_11755[14] = inst_11686);
(statearr_11755[8] = inst_11676__$1);
(statearr_11755[9] = inst_11677__$1);
(statearr_11755[10] = inst_11678__$1);
(statearr_11755[11] = inst_11679__$1);
return statearr_11755;
})();var statearr_11756_11796 = state_11737__$1;(statearr_11756_11796[2] = null);
(statearr_11756_11796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 11))
{var inst_11690 = (state_11737[15]);var inst_11676 = (state_11737[8]);var inst_11690__$1 = cljs.core.seq.call(null,inst_11676);var state_11737__$1 = (function (){var statearr_11757 = state_11737;(statearr_11757[15] = inst_11690__$1);
return statearr_11757;
})();if(inst_11690__$1)
{var statearr_11758_11797 = state_11737__$1;(statearr_11758_11797[1] = 13);
} else
{var statearr_11759_11798 = state_11737__$1;(statearr_11759_11798[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 12))
{var inst_11710 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11760_11799 = state_11737__$1;(statearr_11760_11799[2] = inst_11710);
(statearr_11760_11799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 13))
{var inst_11690 = (state_11737[15]);var inst_11692 = cljs.core.chunked_seq_QMARK_.call(null,inst_11690);var state_11737__$1 = state_11737;if(inst_11692)
{var statearr_11761_11800 = state_11737__$1;(statearr_11761_11800[1] = 16);
} else
{var statearr_11762_11801 = state_11737__$1;(statearr_11762_11801[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 14))
{var state_11737__$1 = state_11737;var statearr_11763_11802 = state_11737__$1;(statearr_11763_11802[2] = null);
(statearr_11763_11802[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 15))
{var inst_11708 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11764_11803 = state_11737__$1;(statearr_11764_11803[2] = inst_11708);
(statearr_11764_11803[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 16))
{var inst_11690 = (state_11737[15]);var inst_11694 = cljs.core.chunk_first.call(null,inst_11690);var inst_11695 = cljs.core.chunk_rest.call(null,inst_11690);var inst_11696 = cljs.core.count.call(null,inst_11694);var inst_11676 = inst_11695;var inst_11677 = inst_11694;var inst_11678 = inst_11696;var inst_11679 = 0;var state_11737__$1 = (function (){var statearr_11765 = state_11737;(statearr_11765[8] = inst_11676);
(statearr_11765[9] = inst_11677);
(statearr_11765[10] = inst_11678);
(statearr_11765[11] = inst_11679);
return statearr_11765;
})();var statearr_11766_11804 = state_11737__$1;(statearr_11766_11804[2] = null);
(statearr_11766_11804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 17))
{var inst_11690 = (state_11737[15]);var inst_11699 = cljs.core.first.call(null,inst_11690);var inst_11700 = cljs.core.async.muxch_STAR_.call(null,inst_11699);var inst_11701 = cljs.core.async.close_BANG_.call(null,inst_11700);var inst_11702 = cljs.core.next.call(null,inst_11690);var inst_11676 = inst_11702;var inst_11677 = null;var inst_11678 = 0;var inst_11679 = 0;var state_11737__$1 = (function (){var statearr_11767 = state_11737;(statearr_11767[8] = inst_11676);
(statearr_11767[9] = inst_11677);
(statearr_11767[10] = inst_11678);
(statearr_11767[11] = inst_11679);
(statearr_11767[16] = inst_11701);
return statearr_11767;
})();var statearr_11768_11805 = state_11737__$1;(statearr_11768_11805[2] = null);
(statearr_11768_11805[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 18))
{var inst_11705 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11769_11806 = state_11737__$1;(statearr_11769_11806[2] = inst_11705);
(statearr_11769_11806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 19))
{var state_11737__$1 = state_11737;var statearr_11770_11807 = state_11737__$1;(statearr_11770_11807[2] = null);
(statearr_11770_11807[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 20))
{var state_11737__$1 = state_11737;var statearr_11771_11808 = state_11737__$1;(statearr_11771_11808[2] = null);
(statearr_11771_11808[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 21))
{var inst_11730 = (state_11737[2]);var state_11737__$1 = (function (){var statearr_11772 = state_11737;(statearr_11772[17] = inst_11730);
return statearr_11772;
})();var statearr_11773_11809 = state_11737__$1;(statearr_11773_11809[2] = null);
(statearr_11773_11809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 22))
{var inst_11727 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11774_11810 = state_11737__$1;(statearr_11774_11810[2] = inst_11727);
(statearr_11774_11810[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 23))
{var inst_11714 = (state_11737[12]);var inst_11718 = (state_11737[2]);var inst_11719 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11714);var state_11737__$1 = (function (){var statearr_11775 = state_11737;(statearr_11775[18] = inst_11718);
return statearr_11775;
})();var statearr_11776_11811 = state_11737__$1;(statearr_11776_11811[2] = inst_11719);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11738 === 24))
{var inst_11716 = (state_11737[13]);var inst_11666 = (state_11737[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11737,23,Object,null,22);var inst_11723 = cljs.core.async.muxch_STAR_.call(null,inst_11716);var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11737__$1,25,inst_11723,inst_11666);
} else
{if((state_val_11738 === 25))
{var inst_11725 = (state_11737[2]);var state_11737__$1 = state_11737;var statearr_11777_11812 = state_11737__$1;(statearr_11777_11812[2] = inst_11725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737__$1);
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
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_11781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11781[0] = state_machine__5709__auto__);
(statearr_11781[1] = 1);
return statearr_11781;
});
var state_machine__5709__auto____1 = (function (state_11737){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11782){if((e11782 instanceof Object))
{var ex__5712__auto__ = e11782;var statearr_11783_11813 = state_11737;(statearr_11783_11813[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11814 = state_11737;
state_11737 = G__11814;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11784 = f__5724__auto__.call(null);(statearr_11784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11785);
return statearr_11784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5723__auto___11951 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11921){var state_val_11922 = (state_11921[1]);if((state_val_11922 === 1))
{var state_11921__$1 = state_11921;var statearr_11923_11952 = state_11921__$1;(statearr_11923_11952[2] = null);
(statearr_11923_11952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 2))
{var inst_11884 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11885 = 0;var state_11921__$1 = (function (){var statearr_11924 = state_11921;(statearr_11924[7] = inst_11885);
(statearr_11924[8] = inst_11884);
return statearr_11924;
})();var statearr_11925_11953 = state_11921__$1;(statearr_11925_11953[2] = null);
(statearr_11925_11953[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 3))
{var inst_11919 = (state_11921[2]);var state_11921__$1 = state_11921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11921__$1,inst_11919);
} else
{if((state_val_11922 === 4))
{var inst_11885 = (state_11921[7]);var inst_11887 = (inst_11885 < cnt);var state_11921__$1 = state_11921;if(cljs.core.truth_(inst_11887))
{var statearr_11926_11954 = state_11921__$1;(statearr_11926_11954[1] = 6);
} else
{var statearr_11927_11955 = state_11921__$1;(statearr_11927_11955[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 5))
{var inst_11905 = (state_11921[2]);var state_11921__$1 = (function (){var statearr_11928 = state_11921;(statearr_11928[9] = inst_11905);
return statearr_11928;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11921__$1,12,dchan);
} else
{if((state_val_11922 === 6))
{var state_11921__$1 = state_11921;var statearr_11929_11956 = state_11921__$1;(statearr_11929_11956[2] = null);
(statearr_11929_11956[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 7))
{var state_11921__$1 = state_11921;var statearr_11930_11957 = state_11921__$1;(statearr_11930_11957[2] = null);
(statearr_11930_11957[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 8))
{var inst_11903 = (state_11921[2]);var state_11921__$1 = state_11921;var statearr_11931_11958 = state_11921__$1;(statearr_11931_11958[2] = inst_11903);
(statearr_11931_11958[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 9))
{var inst_11885 = (state_11921[7]);var inst_11898 = (state_11921[2]);var inst_11899 = (inst_11885 + 1);var inst_11885__$1 = inst_11899;var state_11921__$1 = (function (){var statearr_11932 = state_11921;(statearr_11932[10] = inst_11898);
(statearr_11932[7] = inst_11885__$1);
return statearr_11932;
})();var statearr_11933_11959 = state_11921__$1;(statearr_11933_11959[2] = null);
(statearr_11933_11959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 10))
{var inst_11889 = (state_11921[2]);var inst_11890 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11921__$1 = (function (){var statearr_11934 = state_11921;(statearr_11934[11] = inst_11889);
return statearr_11934;
})();var statearr_11935_11960 = state_11921__$1;(statearr_11935_11960[2] = inst_11890);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 11))
{var inst_11885 = (state_11921[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11921,10,Object,null,9);var inst_11894 = chs__$1.call(null,inst_11885);var inst_11895 = done.call(null,inst_11885);var inst_11896 = cljs.core.async.take_BANG_.call(null,inst_11894,inst_11895);var state_11921__$1 = state_11921;var statearr_11936_11961 = state_11921__$1;(statearr_11936_11961[2] = inst_11896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 12))
{var inst_11907 = (state_11921[12]);var inst_11907__$1 = (state_11921[2]);var inst_11908 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11907__$1);var state_11921__$1 = (function (){var statearr_11937 = state_11921;(statearr_11937[12] = inst_11907__$1);
return statearr_11937;
})();if(cljs.core.truth_(inst_11908))
{var statearr_11938_11962 = state_11921__$1;(statearr_11938_11962[1] = 13);
} else
{var statearr_11939_11963 = state_11921__$1;(statearr_11939_11963[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 13))
{var inst_11910 = cljs.core.async.close_BANG_.call(null,out);var state_11921__$1 = state_11921;var statearr_11940_11964 = state_11921__$1;(statearr_11940_11964[2] = inst_11910);
(statearr_11940_11964[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 14))
{var inst_11907 = (state_11921[12]);var inst_11912 = cljs.core.apply.call(null,f,inst_11907);var state_11921__$1 = state_11921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11921__$1,16,out,inst_11912);
} else
{if((state_val_11922 === 15))
{var inst_11917 = (state_11921[2]);var state_11921__$1 = state_11921;var statearr_11941_11965 = state_11921__$1;(statearr_11941_11965[2] = inst_11917);
(statearr_11941_11965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11922 === 16))
{var inst_11914 = (state_11921[2]);var state_11921__$1 = (function (){var statearr_11942 = state_11921;(statearr_11942[13] = inst_11914);
return statearr_11942;
})();var statearr_11943_11966 = state_11921__$1;(statearr_11943_11966[2] = null);
(statearr_11943_11966[1] = 2);
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
}
}
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
var state_machine__5709__auto____0 = (function (){var statearr_11947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11947[0] = state_machine__5709__auto__);
(statearr_11947[1] = 1);
return statearr_11947;
});
var state_machine__5709__auto____1 = (function (state_11921){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11921);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11948){if((e11948 instanceof Object))
{var ex__5712__auto__ = e11948;var statearr_11949_11967 = state_11921;(statearr_11949_11967[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11968 = state_11921;
state_11921 = G__11968;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11921){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11950 = f__5724__auto__.call(null);(statearr_11950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11951);
return statearr_11950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12076 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12052){var state_val_12053 = (state_12052[1]);if((state_val_12053 === 1))
{var inst_12023 = cljs.core.vec.call(null,chs);var inst_12024 = inst_12023;var state_12052__$1 = (function (){var statearr_12054 = state_12052;(statearr_12054[7] = inst_12024);
return statearr_12054;
})();var statearr_12055_12077 = state_12052__$1;(statearr_12055_12077[2] = null);
(statearr_12055_12077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 2))
{var inst_12024 = (state_12052[7]);var inst_12026 = cljs.core.count.call(null,inst_12024);var inst_12027 = (inst_12026 > 0);var state_12052__$1 = state_12052;if(cljs.core.truth_(inst_12027))
{var statearr_12056_12078 = state_12052__$1;(statearr_12056_12078[1] = 4);
} else
{var statearr_12057_12079 = state_12052__$1;(statearr_12057_12079[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 3))
{var inst_12050 = (state_12052[2]);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12052__$1,inst_12050);
} else
{if((state_val_12053 === 4))
{var inst_12024 = (state_12052[7]);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12052__$1,7,inst_12024);
} else
{if((state_val_12053 === 5))
{var inst_12046 = cljs.core.async.close_BANG_.call(null,out);var state_12052__$1 = state_12052;var statearr_12058_12080 = state_12052__$1;(statearr_12058_12080[2] = inst_12046);
(statearr_12058_12080[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 6))
{var inst_12048 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12059_12081 = state_12052__$1;(statearr_12059_12081[2] = inst_12048);
(statearr_12059_12081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 7))
{var inst_12031 = (state_12052[8]);var inst_12032 = (state_12052[9]);var inst_12031__$1 = (state_12052[2]);var inst_12032__$1 = cljs.core.nth.call(null,inst_12031__$1,0,null);var inst_12033 = cljs.core.nth.call(null,inst_12031__$1,1,null);var inst_12034 = (inst_12032__$1 == null);var state_12052__$1 = (function (){var statearr_12060 = state_12052;(statearr_12060[10] = inst_12033);
(statearr_12060[8] = inst_12031__$1);
(statearr_12060[9] = inst_12032__$1);
return statearr_12060;
})();if(cljs.core.truth_(inst_12034))
{var statearr_12061_12082 = state_12052__$1;(statearr_12061_12082[1] = 8);
} else
{var statearr_12062_12083 = state_12052__$1;(statearr_12062_12083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 8))
{var inst_12033 = (state_12052[10]);var inst_12031 = (state_12052[8]);var inst_12032 = (state_12052[9]);var inst_12024 = (state_12052[7]);var inst_12036 = (function (){var c = inst_12033;var v = inst_12032;var vec__12029 = inst_12031;var cs = inst_12024;return ((function (c,v,vec__12029,cs,inst_12033,inst_12031,inst_12032,inst_12024,state_val_12053){
return (function (p1__11969_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11969_SHARP_);
});
;})(c,v,vec__12029,cs,inst_12033,inst_12031,inst_12032,inst_12024,state_val_12053))
})();var inst_12037 = cljs.core.filterv.call(null,inst_12036,inst_12024);var inst_12024__$1 = inst_12037;var state_12052__$1 = (function (){var statearr_12063 = state_12052;(statearr_12063[7] = inst_12024__$1);
return statearr_12063;
})();var statearr_12064_12084 = state_12052__$1;(statearr_12064_12084[2] = null);
(statearr_12064_12084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 9))
{var inst_12032 = (state_12052[9]);var state_12052__$1 = state_12052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12052__$1,11,out,inst_12032);
} else
{if((state_val_12053 === 10))
{var inst_12044 = (state_12052[2]);var state_12052__$1 = state_12052;var statearr_12066_12085 = state_12052__$1;(statearr_12066_12085[2] = inst_12044);
(statearr_12066_12085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12053 === 11))
{var inst_12024 = (state_12052[7]);var inst_12041 = (state_12052[2]);var tmp12065 = inst_12024;var inst_12024__$1 = tmp12065;var state_12052__$1 = (function (){var statearr_12067 = state_12052;(statearr_12067[7] = inst_12024__$1);
(statearr_12067[11] = inst_12041);
return statearr_12067;
})();var statearr_12068_12086 = state_12052__$1;(statearr_12068_12086[2] = null);
(statearr_12068_12086[1] = 2);
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
}
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_12072 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12072[0] = state_machine__5709__auto__);
(statearr_12072[1] = 1);
return statearr_12072;
});
var state_machine__5709__auto____1 = (function (state_12052){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12052);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12073){if((e12073 instanceof Object))
{var ex__5712__auto__ = e12073;var statearr_12074_12087 = state_12052;(statearr_12074_12087[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12088 = state_12052;
state_12052 = G__12088;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12052){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12075 = f__5724__auto__.call(null);(statearr_12075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12076);
return statearr_12075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12158){var state_val_12159 = (state_12158[1]);if((state_val_12159 === 1))
{var inst_12135 = 0;var state_12158__$1 = (function (){var statearr_12160 = state_12158;(statearr_12160[7] = inst_12135);
return statearr_12160;
})();var statearr_12161_12182 = state_12158__$1;(statearr_12161_12182[2] = null);
(statearr_12161_12182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 2))
{var inst_12135 = (state_12158[7]);var inst_12137 = (inst_12135 < n);var state_12158__$1 = state_12158;if(cljs.core.truth_(inst_12137))
{var statearr_12162_12183 = state_12158__$1;(statearr_12162_12183[1] = 4);
} else
{var statearr_12163_12184 = state_12158__$1;(statearr_12163_12184[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 3))
{var inst_12155 = (state_12158[2]);var inst_12156 = cljs.core.async.close_BANG_.call(null,out);var state_12158__$1 = (function (){var statearr_12164 = state_12158;(statearr_12164[8] = inst_12155);
return statearr_12164;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12158__$1,inst_12156);
} else
{if((state_val_12159 === 4))
{var state_12158__$1 = state_12158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12158__$1,7,ch);
} else
{if((state_val_12159 === 5))
{var state_12158__$1 = state_12158;var statearr_12165_12185 = state_12158__$1;(statearr_12165_12185[2] = null);
(statearr_12165_12185[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 6))
{var inst_12153 = (state_12158[2]);var state_12158__$1 = state_12158;var statearr_12166_12186 = state_12158__$1;(statearr_12166_12186[2] = inst_12153);
(statearr_12166_12186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 7))
{var inst_12140 = (state_12158[9]);var inst_12140__$1 = (state_12158[2]);var inst_12141 = (inst_12140__$1 == null);var inst_12142 = cljs.core.not.call(null,inst_12141);var state_12158__$1 = (function (){var statearr_12167 = state_12158;(statearr_12167[9] = inst_12140__$1);
return statearr_12167;
})();if(inst_12142)
{var statearr_12168_12187 = state_12158__$1;(statearr_12168_12187[1] = 8);
} else
{var statearr_12169_12188 = state_12158__$1;(statearr_12169_12188[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 8))
{var inst_12140 = (state_12158[9]);var state_12158__$1 = state_12158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12158__$1,11,out,inst_12140);
} else
{if((state_val_12159 === 9))
{var state_12158__$1 = state_12158;var statearr_12170_12189 = state_12158__$1;(statearr_12170_12189[2] = null);
(statearr_12170_12189[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 10))
{var inst_12150 = (state_12158[2]);var state_12158__$1 = state_12158;var statearr_12171_12190 = state_12158__$1;(statearr_12171_12190[2] = inst_12150);
(statearr_12171_12190[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12159 === 11))
{var inst_12135 = (state_12158[7]);var inst_12145 = (state_12158[2]);var inst_12146 = (inst_12135 + 1);var inst_12135__$1 = inst_12146;var state_12158__$1 = (function (){var statearr_12172 = state_12158;(statearr_12172[10] = inst_12145);
(statearr_12172[7] = inst_12135__$1);
return statearr_12172;
})();var statearr_12173_12191 = state_12158__$1;(statearr_12173_12191[2] = null);
(statearr_12173_12191[1] = 2);
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
}
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_12177 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12177[0] = state_machine__5709__auto__);
(statearr_12177[1] = 1);
return statearr_12177;
});
var state_machine__5709__auto____1 = (function (state_12158){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12158);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12178){if((e12178 instanceof Object))
{var ex__5712__auto__ = e12178;var statearr_12179_12192 = state_12158;(statearr_12179_12192[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12193 = state_12158;
state_12158 = G__12193;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12158){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12180 = f__5724__auto__.call(null);(statearr_12180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12181);
return statearr_12180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12265){var state_val_12266 = (state_12265[1]);if((state_val_12266 === 1))
{var inst_12242 = null;var state_12265__$1 = (function (){var statearr_12267 = state_12265;(statearr_12267[7] = inst_12242);
return statearr_12267;
})();var statearr_12268_12291 = state_12265__$1;(statearr_12268_12291[2] = null);
(statearr_12268_12291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 2))
{var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12265__$1,4,ch);
} else
{if((state_val_12266 === 3))
{var inst_12262 = (state_12265[2]);var inst_12263 = cljs.core.async.close_BANG_.call(null,out);var state_12265__$1 = (function (){var statearr_12269 = state_12265;(statearr_12269[8] = inst_12262);
return statearr_12269;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12265__$1,inst_12263);
} else
{if((state_val_12266 === 4))
{var inst_12245 = (state_12265[9]);var inst_12245__$1 = (state_12265[2]);var inst_12246 = (inst_12245__$1 == null);var inst_12247 = cljs.core.not.call(null,inst_12246);var state_12265__$1 = (function (){var statearr_12270 = state_12265;(statearr_12270[9] = inst_12245__$1);
return statearr_12270;
})();if(inst_12247)
{var statearr_12271_12292 = state_12265__$1;(statearr_12271_12292[1] = 5);
} else
{var statearr_12272_12293 = state_12265__$1;(statearr_12272_12293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 5))
{var inst_12242 = (state_12265[7]);var inst_12245 = (state_12265[9]);var inst_12249 = cljs.core._EQ_.call(null,inst_12245,inst_12242);var state_12265__$1 = state_12265;if(inst_12249)
{var statearr_12273_12294 = state_12265__$1;(statearr_12273_12294[1] = 8);
} else
{var statearr_12274_12295 = state_12265__$1;(statearr_12274_12295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 6))
{var state_12265__$1 = state_12265;var statearr_12276_12296 = state_12265__$1;(statearr_12276_12296[2] = null);
(statearr_12276_12296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 7))
{var inst_12260 = (state_12265[2]);var state_12265__$1 = state_12265;var statearr_12277_12297 = state_12265__$1;(statearr_12277_12297[2] = inst_12260);
(statearr_12277_12297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 8))
{var inst_12242 = (state_12265[7]);var tmp12275 = inst_12242;var inst_12242__$1 = tmp12275;var state_12265__$1 = (function (){var statearr_12278 = state_12265;(statearr_12278[7] = inst_12242__$1);
return statearr_12278;
})();var statearr_12279_12298 = state_12265__$1;(statearr_12279_12298[2] = null);
(statearr_12279_12298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 9))
{var inst_12245 = (state_12265[9]);var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12265__$1,11,out,inst_12245);
} else
{if((state_val_12266 === 10))
{var inst_12257 = (state_12265[2]);var state_12265__$1 = state_12265;var statearr_12280_12299 = state_12265__$1;(statearr_12280_12299[2] = inst_12257);
(statearr_12280_12299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 11))
{var inst_12245 = (state_12265[9]);var inst_12254 = (state_12265[2]);var inst_12242 = inst_12245;var state_12265__$1 = (function (){var statearr_12281 = state_12265;(statearr_12281[7] = inst_12242);
(statearr_12281[10] = inst_12254);
return statearr_12281;
})();var statearr_12282_12300 = state_12265__$1;(statearr_12282_12300[2] = null);
(statearr_12282_12300[1] = 2);
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
}
}
}
}
});return ((function (switch__5708__auto__){
return (function() {
var state_machine__5709__auto__ = null;
var state_machine__5709__auto____0 = (function (){var statearr_12286 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12286[0] = state_machine__5709__auto__);
(statearr_12286[1] = 1);
return statearr_12286;
});
var state_machine__5709__auto____1 = (function (state_12265){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12287){if((e12287 instanceof Object))
{var ex__5712__auto__ = e12287;var statearr_12288_12301 = state_12265;(statearr_12288_12301[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12302 = state_12265;
state_12265 = G__12302;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12289 = f__5724__auto__.call(null);(statearr_12289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12290);
return statearr_12289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12407){var state_val_12408 = (state_12407[1]);if((state_val_12408 === 1))
{var inst_12370 = (new Array(n));var inst_12371 = inst_12370;var inst_12372 = 0;var state_12407__$1 = (function (){var statearr_12409 = state_12407;(statearr_12409[7] = inst_12372);
(statearr_12409[8] = inst_12371);
return statearr_12409;
})();var statearr_12410_12438 = state_12407__$1;(statearr_12410_12438[2] = null);
(statearr_12410_12438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 2))
{var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12407__$1,4,ch);
} else
{if((state_val_12408 === 3))
{var inst_12405 = (state_12407[2]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12407__$1,inst_12405);
} else
{if((state_val_12408 === 4))
{var inst_12375 = (state_12407[9]);var inst_12375__$1 = (state_12407[2]);var inst_12376 = (inst_12375__$1 == null);var inst_12377 = cljs.core.not.call(null,inst_12376);var state_12407__$1 = (function (){var statearr_12411 = state_12407;(statearr_12411[9] = inst_12375__$1);
return statearr_12411;
})();if(inst_12377)
{var statearr_12412_12439 = state_12407__$1;(statearr_12412_12439[1] = 5);
} else
{var statearr_12413_12440 = state_12407__$1;(statearr_12413_12440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 5))
{var inst_12380 = (state_12407[10]);var inst_12375 = (state_12407[9]);var inst_12372 = (state_12407[7]);var inst_12371 = (state_12407[8]);var inst_12379 = (inst_12371[inst_12372] = inst_12375);var inst_12380__$1 = (inst_12372 + 1);var inst_12381 = (inst_12380__$1 < n);var state_12407__$1 = (function (){var statearr_12414 = state_12407;(statearr_12414[10] = inst_12380__$1);
(statearr_12414[11] = inst_12379);
return statearr_12414;
})();if(cljs.core.truth_(inst_12381))
{var statearr_12415_12441 = state_12407__$1;(statearr_12415_12441[1] = 8);
} else
{var statearr_12416_12442 = state_12407__$1;(statearr_12416_12442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 6))
{var inst_12372 = (state_12407[7]);var inst_12393 = (inst_12372 > 0);var state_12407__$1 = state_12407;if(cljs.core.truth_(inst_12393))
{var statearr_12418_12443 = state_12407__$1;(statearr_12418_12443[1] = 12);
} else
{var statearr_12419_12444 = state_12407__$1;(statearr_12419_12444[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 7))
{var inst_12403 = (state_12407[2]);var state_12407__$1 = state_12407;var statearr_12420_12445 = state_12407__$1;(statearr_12420_12445[2] = inst_12403);
(statearr_12420_12445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 8))
{var inst_12380 = (state_12407[10]);var inst_12371 = (state_12407[8]);var tmp12417 = inst_12371;var inst_12371__$1 = tmp12417;var inst_12372 = inst_12380;var state_12407__$1 = (function (){var statearr_12421 = state_12407;(statearr_12421[7] = inst_12372);
(statearr_12421[8] = inst_12371__$1);
return statearr_12421;
})();var statearr_12422_12446 = state_12407__$1;(statearr_12422_12446[2] = null);
(statearr_12422_12446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 9))
{var inst_12371 = (state_12407[8]);var inst_12385 = cljs.core.vec.call(null,inst_12371);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12407__$1,11,out,inst_12385);
} else
{if((state_val_12408 === 10))
{var inst_12391 = (state_12407[2]);var state_12407__$1 = state_12407;var statearr_12423_12447 = state_12407__$1;(statearr_12423_12447[2] = inst_12391);
(statearr_12423_12447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 11))
{var inst_12387 = (state_12407[2]);var inst_12388 = (new Array(n));var inst_12371 = inst_12388;var inst_12372 = 0;var state_12407__$1 = (function (){var statearr_12424 = state_12407;(statearr_12424[12] = inst_12387);
(statearr_12424[7] = inst_12372);
(statearr_12424[8] = inst_12371);
return statearr_12424;
})();var statearr_12425_12448 = state_12407__$1;(statearr_12425_12448[2] = null);
(statearr_12425_12448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 12))
{var inst_12371 = (state_12407[8]);var inst_12395 = cljs.core.vec.call(null,inst_12371);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12407__$1,15,out,inst_12395);
} else
{if((state_val_12408 === 13))
{var state_12407__$1 = state_12407;var statearr_12426_12449 = state_12407__$1;(statearr_12426_12449[2] = null);
(statearr_12426_12449[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 14))
{var inst_12400 = (state_12407[2]);var inst_12401 = cljs.core.async.close_BANG_.call(null,out);var state_12407__$1 = (function (){var statearr_12427 = state_12407;(statearr_12427[13] = inst_12400);
return statearr_12427;
})();var statearr_12428_12450 = state_12407__$1;(statearr_12428_12450[2] = inst_12401);
(statearr_12428_12450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12408 === 15))
{var inst_12397 = (state_12407[2]);var state_12407__$1 = state_12407;var statearr_12429_12451 = state_12407__$1;(statearr_12429_12451[2] = inst_12397);
(statearr_12429_12451[1] = 14);
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
}
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
var state_machine__5709__auto____0 = (function (){var statearr_12433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12433[0] = state_machine__5709__auto__);
(statearr_12433[1] = 1);
return statearr_12433;
});
var state_machine__5709__auto____1 = (function (state_12407){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12407);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12434){if((e12434 instanceof Object))
{var ex__5712__auto__ = e12434;var statearr_12435_12452 = state_12407;(statearr_12435_12452[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12453 = state_12407;
state_12407 = G__12453;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12407){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12436 = f__5724__auto__.call(null);(statearr_12436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12437);
return statearr_12436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12596 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12566){var state_val_12567 = (state_12566[1]);if((state_val_12567 === 1))
{var inst_12525 = [];var inst_12526 = inst_12525;var inst_12527 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12566__$1 = (function (){var statearr_12568 = state_12566;(statearr_12568[7] = inst_12527);
(statearr_12568[8] = inst_12526);
return statearr_12568;
})();var statearr_12569_12597 = state_12566__$1;(statearr_12569_12597[2] = null);
(statearr_12569_12597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 2))
{var state_12566__$1 = state_12566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12566__$1,4,ch);
} else
{if((state_val_12567 === 3))
{var inst_12564 = (state_12566[2]);var state_12566__$1 = state_12566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12566__$1,inst_12564);
} else
{if((state_val_12567 === 4))
{var inst_12530 = (state_12566[9]);var inst_12530__$1 = (state_12566[2]);var inst_12531 = (inst_12530__$1 == null);var inst_12532 = cljs.core.not.call(null,inst_12531);var state_12566__$1 = (function (){var statearr_12570 = state_12566;(statearr_12570[9] = inst_12530__$1);
return statearr_12570;
})();if(inst_12532)
{var statearr_12571_12598 = state_12566__$1;(statearr_12571_12598[1] = 5);
} else
{var statearr_12572_12599 = state_12566__$1;(statearr_12572_12599[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 5))
{var inst_12527 = (state_12566[7]);var inst_12534 = (state_12566[10]);var inst_12530 = (state_12566[9]);var inst_12534__$1 = f.call(null,inst_12530);var inst_12535 = cljs.core._EQ_.call(null,inst_12534__$1,inst_12527);var inst_12536 = cljs.core.keyword_identical_QMARK_.call(null,inst_12527,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12537 = (inst_12535) || (inst_12536);var state_12566__$1 = (function (){var statearr_12573 = state_12566;(statearr_12573[10] = inst_12534__$1);
return statearr_12573;
})();if(cljs.core.truth_(inst_12537))
{var statearr_12574_12600 = state_12566__$1;(statearr_12574_12600[1] = 8);
} else
{var statearr_12575_12601 = state_12566__$1;(statearr_12575_12601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 6))
{var inst_12526 = (state_12566[8]);var inst_12551 = inst_12526.length;var inst_12552 = (inst_12551 > 0);var state_12566__$1 = state_12566;if(cljs.core.truth_(inst_12552))
{var statearr_12577_12602 = state_12566__$1;(statearr_12577_12602[1] = 12);
} else
{var statearr_12578_12603 = state_12566__$1;(statearr_12578_12603[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 7))
{var inst_12562 = (state_12566[2]);var state_12566__$1 = state_12566;var statearr_12579_12604 = state_12566__$1;(statearr_12579_12604[2] = inst_12562);
(statearr_12579_12604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 8))
{var inst_12534 = (state_12566[10]);var inst_12530 = (state_12566[9]);var inst_12526 = (state_12566[8]);var inst_12539 = inst_12526.push(inst_12530);var tmp12576 = inst_12526;var inst_12526__$1 = tmp12576;var inst_12527 = inst_12534;var state_12566__$1 = (function (){var statearr_12580 = state_12566;(statearr_12580[7] = inst_12527);
(statearr_12580[11] = inst_12539);
(statearr_12580[8] = inst_12526__$1);
return statearr_12580;
})();var statearr_12581_12605 = state_12566__$1;(statearr_12581_12605[2] = null);
(statearr_12581_12605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 9))
{var inst_12526 = (state_12566[8]);var inst_12542 = cljs.core.vec.call(null,inst_12526);var state_12566__$1 = state_12566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12566__$1,11,out,inst_12542);
} else
{if((state_val_12567 === 10))
{var inst_12549 = (state_12566[2]);var state_12566__$1 = state_12566;var statearr_12582_12606 = state_12566__$1;(statearr_12582_12606[2] = inst_12549);
(statearr_12582_12606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 11))
{var inst_12534 = (state_12566[10]);var inst_12530 = (state_12566[9]);var inst_12544 = (state_12566[2]);var inst_12545 = [];var inst_12546 = inst_12545.push(inst_12530);var inst_12526 = inst_12545;var inst_12527 = inst_12534;var state_12566__$1 = (function (){var statearr_12583 = state_12566;(statearr_12583[12] = inst_12546);
(statearr_12583[7] = inst_12527);
(statearr_12583[13] = inst_12544);
(statearr_12583[8] = inst_12526);
return statearr_12583;
})();var statearr_12584_12607 = state_12566__$1;(statearr_12584_12607[2] = null);
(statearr_12584_12607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 12))
{var inst_12526 = (state_12566[8]);var inst_12554 = cljs.core.vec.call(null,inst_12526);var state_12566__$1 = state_12566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12566__$1,15,out,inst_12554);
} else
{if((state_val_12567 === 13))
{var state_12566__$1 = state_12566;var statearr_12585_12608 = state_12566__$1;(statearr_12585_12608[2] = null);
(statearr_12585_12608[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 14))
{var inst_12559 = (state_12566[2]);var inst_12560 = cljs.core.async.close_BANG_.call(null,out);var state_12566__$1 = (function (){var statearr_12586 = state_12566;(statearr_12586[14] = inst_12559);
return statearr_12586;
})();var statearr_12587_12609 = state_12566__$1;(statearr_12587_12609[2] = inst_12560);
(statearr_12587_12609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12567 === 15))
{var inst_12556 = (state_12566[2]);var state_12566__$1 = state_12566;var statearr_12588_12610 = state_12566__$1;(statearr_12588_12610[2] = inst_12556);
(statearr_12588_12610[1] = 14);
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
}
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
var state_machine__5709__auto____0 = (function (){var statearr_12592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12592[0] = state_machine__5709__auto__);
(statearr_12592[1] = 1);
return statearr_12592;
});
var state_machine__5709__auto____1 = (function (state_12566){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12566);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12593){if((e12593 instanceof Object))
{var ex__5712__auto__ = e12593;var statearr_12594_12611 = state_12566;(statearr_12594_12611[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12593;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12612 = state_12566;
state_12566 = G__12612;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12566){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12595 = f__5724__auto__.call(null);(statearr_12595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12596);
return statearr_12595;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5725__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
