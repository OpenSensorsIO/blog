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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10039 = (function (f,fn_handler,meta10040){
this.f = f;
this.fn_handler = fn_handler;
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10039.cljs$lang$type = true;
cljs.core.async.t10039.cljs$lang$ctorStr = "cljs.core.async/t10039";
cljs.core.async.t10039.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10039");
});
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10041){var self__ = this;
var _10041__$1 = this;return self__.meta10040;
});
cljs.core.async.t10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10041,meta10040__$1){var self__ = this;
var _10041__$1 = this;return (new cljs.core.async.t10039(self__.f,self__.fn_handler,meta10040__$1));
});
cljs.core.async.__GT_t10039 = (function __GT_t10039(f__$1,fn_handler__$1,meta10040){return (new cljs.core.async.t10039(f__$1,fn_handler__$1,meta10040));
});
}
return (new cljs.core.async.t10039(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10043 = buff;if(G__10043)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10043.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10043.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10043);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10043);
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
{var val_10044 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10044);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10044);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10045 = n;var x_10046 = 0;while(true){
if((x_10046 < n__4291__auto___10045))
{(a[x_10046] = 0);
{
var G__10047 = (x_10046 + 1);
x_10046 = G__10047;
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
var G__10048 = (i + 1);
i = G__10048;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10052 = (function (flag,alt_flag,meta10053){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10053 = meta10053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10052.cljs$lang$type = true;
cljs.core.async.t10052.cljs$lang$ctorStr = "cljs.core.async/t10052";
cljs.core.async.t10052.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10052");
});
cljs.core.async.t10052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10054){var self__ = this;
var _10054__$1 = this;return self__.meta10053;
});
cljs.core.async.t10052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10054,meta10053__$1){var self__ = this;
var _10054__$1 = this;return (new cljs.core.async.t10052(self__.flag,self__.alt_flag,meta10053__$1));
});
cljs.core.async.__GT_t10052 = (function __GT_t10052(flag__$1,alt_flag__$1,meta10053){return (new cljs.core.async.t10052(flag__$1,alt_flag__$1,meta10053));
});
}
return (new cljs.core.async.t10052(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10058 = (function (cb,flag,alt_handler,meta10059){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10059 = meta10059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10058.cljs$lang$type = true;
cljs.core.async.t10058.cljs$lang$ctorStr = "cljs.core.async/t10058";
cljs.core.async.t10058.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10058");
});
cljs.core.async.t10058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10060){var self__ = this;
var _10060__$1 = this;return self__.meta10059;
});
cljs.core.async.t10058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10060,meta10059__$1){var self__ = this;
var _10060__$1 = this;return (new cljs.core.async.t10058(self__.cb,self__.flag,self__.alt_handler,meta10059__$1));
});
cljs.core.async.__GT_t10058 = (function __GT_t10058(cb__$1,flag__$1,alt_handler__$1,meta10059){return (new cljs.core.async.t10058(cb__$1,flag__$1,alt_handler__$1,meta10059));
});
}
return (new cljs.core.async.t10058(cb,flag,alt_handler,null));
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
return (function (p1__10061_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10061_SHARP_,port], null));
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
var G__10062 = (i + 1);
i = G__10062;
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
var alts_BANG___delegate = function (ports,p__10063){var map__10065 = p__10063;var map__10065__$1 = ((cljs.core.seq_QMARK_.call(null,map__10065))?cljs.core.apply.call(null,cljs.core.hash_map,map__10065):map__10065);var opts = map__10065__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10063 = null;if (arguments.length > 1) {
  p__10063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10063);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10066){
var ports = cljs.core.first(arglist__10066);
var p__10063 = cljs.core.rest(arglist__10066);
return alts_BANG___delegate(ports,p__10063);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10074 = (function (ch,f,map_LT_,meta10075){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10075 = meta10075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10074.cljs$lang$type = true;
cljs.core.async.t10074.cljs$lang$ctorStr = "cljs.core.async/t10074";
cljs.core.async.t10074.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10074");
});
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10077 = (function (fn1,_,meta10075,ch,f,map_LT_,meta10078){
this.fn1 = fn1;
this._ = _;
this.meta10075 = meta10075;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10078 = meta10078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10077.cljs$lang$type = true;
cljs.core.async.t10077.cljs$lang$ctorStr = "cljs.core.async/t10077";
cljs.core.async.t10077.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10077");
});
cljs.core.async.t10077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10077.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10067_SHARP_){return f1.call(null,(((p1__10067_SHARP_ == null))?null:self__.f.call(null,p1__10067_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10079){var self__ = this;
var _10079__$1 = this;return self__.meta10078;
});
cljs.core.async.t10077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10079,meta10078__$1){var self__ = this;
var _10079__$1 = this;return (new cljs.core.async.t10077(self__.fn1,self__._,self__.meta10075,self__.ch,self__.f,self__.map_LT_,meta10078__$1));
});
cljs.core.async.__GT_t10077 = (function __GT_t10077(fn1__$1,___$2,meta10075__$1,ch__$2,f__$2,map_LT___$2,meta10078){return (new cljs.core.async.t10077(fn1__$1,___$2,meta10075__$1,ch__$2,f__$2,map_LT___$2,meta10078));
});
}
return (new cljs.core.async.t10077(fn1,___$1,self__.meta10075,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10076){var self__ = this;
var _10076__$1 = this;return self__.meta10075;
});
cljs.core.async.t10074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10076,meta10075__$1){var self__ = this;
var _10076__$1 = this;return (new cljs.core.async.t10074(self__.ch,self__.f,self__.map_LT_,meta10075__$1));
});
cljs.core.async.__GT_t10074 = (function __GT_t10074(ch__$1,f__$1,map_LT___$1,meta10075){return (new cljs.core.async.t10074(ch__$1,f__$1,map_LT___$1,meta10075));
});
}
return (new cljs.core.async.t10074(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10083 = (function (ch,f,map_GT_,meta10084){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10084 = meta10084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10083.cljs$lang$type = true;
cljs.core.async.t10083.cljs$lang$ctorStr = "cljs.core.async/t10083";
cljs.core.async.t10083.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10083");
});
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10085){var self__ = this;
var _10085__$1 = this;return self__.meta10084;
});
cljs.core.async.t10083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10085,meta10084__$1){var self__ = this;
var _10085__$1 = this;return (new cljs.core.async.t10083(self__.ch,self__.f,self__.map_GT_,meta10084__$1));
});
cljs.core.async.__GT_t10083 = (function __GT_t10083(ch__$1,f__$1,map_GT___$1,meta10084){return (new cljs.core.async.t10083(ch__$1,f__$1,map_GT___$1,meta10084));
});
}
return (new cljs.core.async.t10083(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10089 = (function (ch,p,filter_GT_,meta10090){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10090 = meta10090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10089.cljs$lang$type = true;
cljs.core.async.t10089.cljs$lang$ctorStr = "cljs.core.async/t10089";
cljs.core.async.t10089.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10089");
});
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10091){var self__ = this;
var _10091__$1 = this;return self__.meta10090;
});
cljs.core.async.t10089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10091,meta10090__$1){var self__ = this;
var _10091__$1 = this;return (new cljs.core.async.t10089(self__.ch,self__.p,self__.filter_GT_,meta10090__$1));
});
cljs.core.async.__GT_t10089 = (function __GT_t10089(ch__$1,p__$1,filter_GT___$1,meta10090){return (new cljs.core.async.t10089(ch__$1,p__$1,filter_GT___$1,meta10090));
});
}
return (new cljs.core.async.t10089(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___10174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10153){var state_val_10154 = (state_10153[1]);if((state_val_10154 === 1))
{var state_10153__$1 = state_10153;var statearr_10155_10175 = state_10153__$1;(statearr_10155_10175[2] = null);
(statearr_10155_10175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 2))
{var state_10153__$1 = state_10153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10153__$1,4,ch);
} else
{if((state_val_10154 === 3))
{var inst_10151 = (state_10153[2]);var state_10153__$1 = state_10153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10153__$1,inst_10151);
} else
{if((state_val_10154 === 4))
{var inst_10135 = (state_10153[7]);var inst_10135__$1 = (state_10153[2]);var inst_10136 = (inst_10135__$1 == null);var state_10153__$1 = (function (){var statearr_10156 = state_10153;(statearr_10156[7] = inst_10135__$1);
return statearr_10156;
})();if(cljs.core.truth_(inst_10136))
{var statearr_10157_10176 = state_10153__$1;(statearr_10157_10176[1] = 5);
} else
{var statearr_10158_10177 = state_10153__$1;(statearr_10158_10177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 5))
{var inst_10138 = cljs.core.async.close_BANG_.call(null,out);var state_10153__$1 = state_10153;var statearr_10159_10178 = state_10153__$1;(statearr_10159_10178[2] = inst_10138);
(statearr_10159_10178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 6))
{var inst_10135 = (state_10153[7]);var inst_10140 = p.call(null,inst_10135);var state_10153__$1 = state_10153;if(cljs.core.truth_(inst_10140))
{var statearr_10160_10179 = state_10153__$1;(statearr_10160_10179[1] = 8);
} else
{var statearr_10161_10180 = state_10153__$1;(statearr_10161_10180[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 7))
{var inst_10149 = (state_10153[2]);var state_10153__$1 = state_10153;var statearr_10162_10181 = state_10153__$1;(statearr_10162_10181[2] = inst_10149);
(statearr_10162_10181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 8))
{var inst_10135 = (state_10153[7]);var state_10153__$1 = state_10153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10153__$1,11,out,inst_10135);
} else
{if((state_val_10154 === 9))
{var state_10153__$1 = state_10153;var statearr_10163_10182 = state_10153__$1;(statearr_10163_10182[2] = null);
(statearr_10163_10182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 10))
{var inst_10146 = (state_10153[2]);var state_10153__$1 = (function (){var statearr_10164 = state_10153;(statearr_10164[8] = inst_10146);
return statearr_10164;
})();var statearr_10165_10183 = state_10153__$1;(statearr_10165_10183[2] = null);
(statearr_10165_10183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10154 === 11))
{var inst_10143 = (state_10153[2]);var state_10153__$1 = state_10153;var statearr_10166_10184 = state_10153__$1;(statearr_10166_10184[2] = inst_10143);
(statearr_10166_10184[1] = 10);
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
var state_machine__5709__auto____0 = (function (){var statearr_10170 = [null,null,null,null,null,null,null,null,null];(statearr_10170[0] = state_machine__5709__auto__);
(statearr_10170[1] = 1);
return statearr_10170;
});
var state_machine__5709__auto____1 = (function (state_10153){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10153);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10171){if((e10171 instanceof Object))
{var ex__5712__auto__ = e10171;var statearr_10172_10185 = state_10153;(statearr_10172_10185[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10186 = state_10153;
state_10153 = G__10186;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10153){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10173 = f__5724__auto__.call(null);(statearr_10173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10174);
return statearr_10173;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10338){var state_val_10339 = (state_10338[1]);if((state_val_10339 === 1))
{var state_10338__$1 = state_10338;var statearr_10340_10377 = state_10338__$1;(statearr_10340_10377[2] = null);
(statearr_10340_10377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 2))
{var state_10338__$1 = state_10338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10338__$1,4,in$);
} else
{if((state_val_10339 === 3))
{var inst_10336 = (state_10338[2]);var state_10338__$1 = state_10338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10338__$1,inst_10336);
} else
{if((state_val_10339 === 4))
{var inst_10284 = (state_10338[7]);var inst_10284__$1 = (state_10338[2]);var inst_10285 = (inst_10284__$1 == null);var state_10338__$1 = (function (){var statearr_10341 = state_10338;(statearr_10341[7] = inst_10284__$1);
return statearr_10341;
})();if(cljs.core.truth_(inst_10285))
{var statearr_10342_10378 = state_10338__$1;(statearr_10342_10378[1] = 5);
} else
{var statearr_10343_10379 = state_10338__$1;(statearr_10343_10379[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 5))
{var inst_10287 = cljs.core.async.close_BANG_.call(null,out);var state_10338__$1 = state_10338;var statearr_10344_10380 = state_10338__$1;(statearr_10344_10380[2] = inst_10287);
(statearr_10344_10380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 6))
{var inst_10284 = (state_10338[7]);var inst_10289 = f.call(null,inst_10284);var inst_10294 = cljs.core.seq.call(null,inst_10289);var inst_10295 = inst_10294;var inst_10296 = null;var inst_10297 = 0;var inst_10298 = 0;var state_10338__$1 = (function (){var statearr_10345 = state_10338;(statearr_10345[8] = inst_10298);
(statearr_10345[9] = inst_10297);
(statearr_10345[10] = inst_10295);
(statearr_10345[11] = inst_10296);
return statearr_10345;
})();var statearr_10346_10381 = state_10338__$1;(statearr_10346_10381[2] = null);
(statearr_10346_10381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 7))
{var inst_10334 = (state_10338[2]);var state_10338__$1 = state_10338;var statearr_10347_10382 = state_10338__$1;(statearr_10347_10382[2] = inst_10334);
(statearr_10347_10382[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 8))
{var inst_10298 = (state_10338[8]);var inst_10297 = (state_10338[9]);var inst_10300 = (inst_10298 < inst_10297);var inst_10301 = inst_10300;var state_10338__$1 = state_10338;if(cljs.core.truth_(inst_10301))
{var statearr_10348_10383 = state_10338__$1;(statearr_10348_10383[1] = 10);
} else
{var statearr_10349_10384 = state_10338__$1;(statearr_10349_10384[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 9))
{var inst_10331 = (state_10338[2]);var state_10338__$1 = (function (){var statearr_10350 = state_10338;(statearr_10350[12] = inst_10331);
return statearr_10350;
})();var statearr_10351_10385 = state_10338__$1;(statearr_10351_10385[2] = null);
(statearr_10351_10385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 10))
{var inst_10298 = (state_10338[8]);var inst_10296 = (state_10338[11]);var inst_10303 = cljs.core._nth.call(null,inst_10296,inst_10298);var state_10338__$1 = state_10338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10338__$1,13,out,inst_10303);
} else
{if((state_val_10339 === 11))
{var inst_10295 = (state_10338[10]);var inst_10309 = (state_10338[13]);var inst_10309__$1 = cljs.core.seq.call(null,inst_10295);var state_10338__$1 = (function (){var statearr_10355 = state_10338;(statearr_10355[13] = inst_10309__$1);
return statearr_10355;
})();if(inst_10309__$1)
{var statearr_10356_10386 = state_10338__$1;(statearr_10356_10386[1] = 14);
} else
{var statearr_10357_10387 = state_10338__$1;(statearr_10357_10387[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 12))
{var inst_10329 = (state_10338[2]);var state_10338__$1 = state_10338;var statearr_10358_10388 = state_10338__$1;(statearr_10358_10388[2] = inst_10329);
(statearr_10358_10388[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 13))
{var inst_10298 = (state_10338[8]);var inst_10297 = (state_10338[9]);var inst_10295 = (state_10338[10]);var inst_10296 = (state_10338[11]);var inst_10305 = (state_10338[2]);var inst_10306 = (inst_10298 + 1);var tmp10352 = inst_10297;var tmp10353 = inst_10295;var tmp10354 = inst_10296;var inst_10295__$1 = tmp10353;var inst_10296__$1 = tmp10354;var inst_10297__$1 = tmp10352;var inst_10298__$1 = inst_10306;var state_10338__$1 = (function (){var statearr_10359 = state_10338;(statearr_10359[8] = inst_10298__$1);
(statearr_10359[9] = inst_10297__$1);
(statearr_10359[10] = inst_10295__$1);
(statearr_10359[14] = inst_10305);
(statearr_10359[11] = inst_10296__$1);
return statearr_10359;
})();var statearr_10360_10389 = state_10338__$1;(statearr_10360_10389[2] = null);
(statearr_10360_10389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 14))
{var inst_10309 = (state_10338[13]);var inst_10311 = cljs.core.chunked_seq_QMARK_.call(null,inst_10309);var state_10338__$1 = state_10338;if(inst_10311)
{var statearr_10361_10390 = state_10338__$1;(statearr_10361_10390[1] = 17);
} else
{var statearr_10362_10391 = state_10338__$1;(statearr_10362_10391[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 15))
{var state_10338__$1 = state_10338;var statearr_10363_10392 = state_10338__$1;(statearr_10363_10392[2] = null);
(statearr_10363_10392[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 16))
{var inst_10327 = (state_10338[2]);var state_10338__$1 = state_10338;var statearr_10364_10393 = state_10338__$1;(statearr_10364_10393[2] = inst_10327);
(statearr_10364_10393[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 17))
{var inst_10309 = (state_10338[13]);var inst_10313 = cljs.core.chunk_first.call(null,inst_10309);var inst_10314 = cljs.core.chunk_rest.call(null,inst_10309);var inst_10315 = cljs.core.count.call(null,inst_10313);var inst_10295 = inst_10314;var inst_10296 = inst_10313;var inst_10297 = inst_10315;var inst_10298 = 0;var state_10338__$1 = (function (){var statearr_10365 = state_10338;(statearr_10365[8] = inst_10298);
(statearr_10365[9] = inst_10297);
(statearr_10365[10] = inst_10295);
(statearr_10365[11] = inst_10296);
return statearr_10365;
})();var statearr_10366_10394 = state_10338__$1;(statearr_10366_10394[2] = null);
(statearr_10366_10394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 18))
{var inst_10309 = (state_10338[13]);var inst_10318 = cljs.core.first.call(null,inst_10309);var state_10338__$1 = state_10338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10338__$1,20,out,inst_10318);
} else
{if((state_val_10339 === 19))
{var inst_10324 = (state_10338[2]);var state_10338__$1 = state_10338;var statearr_10367_10395 = state_10338__$1;(statearr_10367_10395[2] = inst_10324);
(statearr_10367_10395[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10339 === 20))
{var inst_10309 = (state_10338[13]);var inst_10320 = (state_10338[2]);var inst_10321 = cljs.core.next.call(null,inst_10309);var inst_10295 = inst_10321;var inst_10296 = null;var inst_10297 = 0;var inst_10298 = 0;var state_10338__$1 = (function (){var statearr_10368 = state_10338;(statearr_10368[8] = inst_10298);
(statearr_10368[9] = inst_10297);
(statearr_10368[10] = inst_10295);
(statearr_10368[11] = inst_10296);
(statearr_10368[15] = inst_10320);
return statearr_10368;
})();var statearr_10369_10396 = state_10338__$1;(statearr_10369_10396[2] = null);
(statearr_10369_10396[1] = 8);
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
var state_machine__5709__auto____0 = (function (){var statearr_10373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10373[0] = state_machine__5709__auto__);
(statearr_10373[1] = 1);
return statearr_10373;
});
var state_machine__5709__auto____1 = (function (state_10338){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10374){if((e10374 instanceof Object))
{var ex__5712__auto__ = e10374;var statearr_10375_10397 = state_10338;(statearr_10375_10397[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10398 = state_10338;
state_10338 = G__10398;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10338){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10376 = f__5724__auto__.call(null);(statearr_10376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10376;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5723__auto___10479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10458){var state_val_10459 = (state_10458[1]);if((state_val_10459 === 1))
{var state_10458__$1 = state_10458;var statearr_10460_10480 = state_10458__$1;(statearr_10460_10480[2] = null);
(statearr_10460_10480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 2))
{var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10458__$1,4,from);
} else
{if((state_val_10459 === 3))
{var inst_10456 = (state_10458[2]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10458__$1,inst_10456);
} else
{if((state_val_10459 === 4))
{var inst_10441 = (state_10458[7]);var inst_10441__$1 = (state_10458[2]);var inst_10442 = (inst_10441__$1 == null);var state_10458__$1 = (function (){var statearr_10461 = state_10458;(statearr_10461[7] = inst_10441__$1);
return statearr_10461;
})();if(cljs.core.truth_(inst_10442))
{var statearr_10462_10481 = state_10458__$1;(statearr_10462_10481[1] = 5);
} else
{var statearr_10463_10482 = state_10458__$1;(statearr_10463_10482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 5))
{var state_10458__$1 = state_10458;if(cljs.core.truth_(close_QMARK_))
{var statearr_10464_10483 = state_10458__$1;(statearr_10464_10483[1] = 8);
} else
{var statearr_10465_10484 = state_10458__$1;(statearr_10465_10484[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 6))
{var inst_10441 = (state_10458[7]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10458__$1,11,to,inst_10441);
} else
{if((state_val_10459 === 7))
{var inst_10454 = (state_10458[2]);var state_10458__$1 = state_10458;var statearr_10466_10485 = state_10458__$1;(statearr_10466_10485[2] = inst_10454);
(statearr_10466_10485[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 8))
{var inst_10445 = cljs.core.async.close_BANG_.call(null,to);var state_10458__$1 = state_10458;var statearr_10467_10486 = state_10458__$1;(statearr_10467_10486[2] = inst_10445);
(statearr_10467_10486[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 9))
{var state_10458__$1 = state_10458;var statearr_10468_10487 = state_10458__$1;(statearr_10468_10487[2] = null);
(statearr_10468_10487[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 10))
{var inst_10448 = (state_10458[2]);var state_10458__$1 = state_10458;var statearr_10469_10488 = state_10458__$1;(statearr_10469_10488[2] = inst_10448);
(statearr_10469_10488[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10459 === 11))
{var inst_10451 = (state_10458[2]);var state_10458__$1 = (function (){var statearr_10470 = state_10458;(statearr_10470[8] = inst_10451);
return statearr_10470;
})();var statearr_10471_10489 = state_10458__$1;(statearr_10471_10489[2] = null);
(statearr_10471_10489[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_10475 = [null,null,null,null,null,null,null,null,null];(statearr_10475[0] = state_machine__5709__auto__);
(statearr_10475[1] = 1);
return statearr_10475;
});
var state_machine__5709__auto____1 = (function (state_10458){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10458);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10476){if((e10476 instanceof Object))
{var ex__5712__auto__ = e10476;var statearr_10477_10490 = state_10458;(statearr_10477_10490[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10491 = state_10458;
state_10458 = G__10491;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10458){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10478 = f__5724__auto__.call(null);(statearr_10478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10479);
return statearr_10478;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5723__auto___10578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10556){var state_val_10557 = (state_10556[1]);if((state_val_10557 === 1))
{var state_10556__$1 = state_10556;var statearr_10558_10579 = state_10556__$1;(statearr_10558_10579[2] = null);
(statearr_10558_10579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 2))
{var state_10556__$1 = state_10556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10556__$1,4,ch);
} else
{if((state_val_10557 === 3))
{var inst_10554 = (state_10556[2]);var state_10556__$1 = state_10556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10556__$1,inst_10554);
} else
{if((state_val_10557 === 4))
{var inst_10537 = (state_10556[7]);var inst_10537__$1 = (state_10556[2]);var inst_10538 = (inst_10537__$1 == null);var state_10556__$1 = (function (){var statearr_10559 = state_10556;(statearr_10559[7] = inst_10537__$1);
return statearr_10559;
})();if(cljs.core.truth_(inst_10538))
{var statearr_10560_10580 = state_10556__$1;(statearr_10560_10580[1] = 5);
} else
{var statearr_10561_10581 = state_10556__$1;(statearr_10561_10581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 5))
{var inst_10540 = cljs.core.async.close_BANG_.call(null,tc);var inst_10541 = cljs.core.async.close_BANG_.call(null,fc);var state_10556__$1 = (function (){var statearr_10562 = state_10556;(statearr_10562[8] = inst_10540);
return statearr_10562;
})();var statearr_10563_10582 = state_10556__$1;(statearr_10563_10582[2] = inst_10541);
(statearr_10563_10582[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 6))
{var inst_10537 = (state_10556[7]);var inst_10543 = p.call(null,inst_10537);var state_10556__$1 = state_10556;if(cljs.core.truth_(inst_10543))
{var statearr_10564_10583 = state_10556__$1;(statearr_10564_10583[1] = 9);
} else
{var statearr_10565_10584 = state_10556__$1;(statearr_10565_10584[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 7))
{var inst_10552 = (state_10556[2]);var state_10556__$1 = state_10556;var statearr_10566_10585 = state_10556__$1;(statearr_10566_10585[2] = inst_10552);
(statearr_10566_10585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 8))
{var inst_10549 = (state_10556[2]);var state_10556__$1 = (function (){var statearr_10567 = state_10556;(statearr_10567[9] = inst_10549);
return statearr_10567;
})();var statearr_10568_10586 = state_10556__$1;(statearr_10568_10586[2] = null);
(statearr_10568_10586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 9))
{var state_10556__$1 = state_10556;var statearr_10569_10587 = state_10556__$1;(statearr_10569_10587[2] = tc);
(statearr_10569_10587[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 10))
{var state_10556__$1 = state_10556;var statearr_10570_10588 = state_10556__$1;(statearr_10570_10588[2] = fc);
(statearr_10570_10588[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10557 === 11))
{var inst_10537 = (state_10556[7]);var inst_10547 = (state_10556[2]);var state_10556__$1 = state_10556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10556__$1,8,inst_10547,inst_10537);
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
var state_machine__5709__auto____0 = (function (){var statearr_10574 = [null,null,null,null,null,null,null,null,null,null];(statearr_10574[0] = state_machine__5709__auto__);
(statearr_10574[1] = 1);
return statearr_10574;
});
var state_machine__5709__auto____1 = (function (state_10556){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10575){if((e10575 instanceof Object))
{var ex__5712__auto__ = e10575;var statearr_10576_10589 = state_10556;(statearr_10576_10589[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10590 = state_10556;
state_10556 = G__10590;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10556){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10577 = f__5724__auto__.call(null);(statearr_10577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___10578);
return statearr_10577;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10637){var state_val_10638 = (state_10637[1]);if((state_val_10638 === 7))
{var inst_10633 = (state_10637[2]);var state_10637__$1 = state_10637;var statearr_10639_10655 = state_10637__$1;(statearr_10639_10655[2] = inst_10633);
(statearr_10639_10655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 6))
{var inst_10626 = (state_10637[7]);var inst_10623 = (state_10637[8]);var inst_10630 = f.call(null,inst_10623,inst_10626);var inst_10623__$1 = inst_10630;var state_10637__$1 = (function (){var statearr_10640 = state_10637;(statearr_10640[8] = inst_10623__$1);
return statearr_10640;
})();var statearr_10641_10656 = state_10637__$1;(statearr_10641_10656[2] = null);
(statearr_10641_10656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 5))
{var inst_10623 = (state_10637[8]);var state_10637__$1 = state_10637;var statearr_10642_10657 = state_10637__$1;(statearr_10642_10657[2] = inst_10623);
(statearr_10642_10657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 4))
{var inst_10626 = (state_10637[7]);var inst_10626__$1 = (state_10637[2]);var inst_10627 = (inst_10626__$1 == null);var state_10637__$1 = (function (){var statearr_10643 = state_10637;(statearr_10643[7] = inst_10626__$1);
return statearr_10643;
})();if(cljs.core.truth_(inst_10627))
{var statearr_10644_10658 = state_10637__$1;(statearr_10644_10658[1] = 5);
} else
{var statearr_10645_10659 = state_10637__$1;(statearr_10645_10659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 3))
{var inst_10635 = (state_10637[2]);var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10637__$1,inst_10635);
} else
{if((state_val_10638 === 2))
{var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10637__$1,4,ch);
} else
{if((state_val_10638 === 1))
{var inst_10623 = init;var state_10637__$1 = (function (){var statearr_10646 = state_10637;(statearr_10646[8] = inst_10623);
return statearr_10646;
})();var statearr_10647_10660 = state_10637__$1;(statearr_10647_10660[2] = null);
(statearr_10647_10660[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_10651 = [null,null,null,null,null,null,null,null,null];(statearr_10651[0] = state_machine__5709__auto__);
(statearr_10651[1] = 1);
return statearr_10651;
});
var state_machine__5709__auto____1 = (function (state_10637){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10637);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10652){if((e10652 instanceof Object))
{var ex__5712__auto__ = e10652;var statearr_10653_10661 = state_10637;(statearr_10653_10661[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10662 = state_10637;
state_10637 = G__10662;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10637){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10654 = f__5724__auto__.call(null);(statearr_10654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10654;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5723__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_10724){var state_val_10725 = (state_10724[1]);if((state_val_10725 === 1))
{var inst_10704 = cljs.core.seq.call(null,coll);var inst_10705 = inst_10704;var state_10724__$1 = (function (){var statearr_10726 = state_10724;(statearr_10726[7] = inst_10705);
return statearr_10726;
})();var statearr_10727_10745 = state_10724__$1;(statearr_10727_10745[2] = null);
(statearr_10727_10745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 2))
{var inst_10705 = (state_10724[7]);var state_10724__$1 = state_10724;if(cljs.core.truth_(inst_10705))
{var statearr_10728_10746 = state_10724__$1;(statearr_10728_10746[1] = 4);
} else
{var statearr_10729_10747 = state_10724__$1;(statearr_10729_10747[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 3))
{var inst_10722 = (state_10724[2]);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10724__$1,inst_10722);
} else
{if((state_val_10725 === 4))
{var inst_10705 = (state_10724[7]);var inst_10708 = cljs.core.first.call(null,inst_10705);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10724__$1,7,ch,inst_10708);
} else
{if((state_val_10725 === 5))
{var state_10724__$1 = state_10724;if(cljs.core.truth_(close_QMARK_))
{var statearr_10730_10748 = state_10724__$1;(statearr_10730_10748[1] = 8);
} else
{var statearr_10731_10749 = state_10724__$1;(statearr_10731_10749[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 6))
{var inst_10720 = (state_10724[2]);var state_10724__$1 = state_10724;var statearr_10732_10750 = state_10724__$1;(statearr_10732_10750[2] = inst_10720);
(statearr_10732_10750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 7))
{var inst_10705 = (state_10724[7]);var inst_10710 = (state_10724[2]);var inst_10711 = cljs.core.next.call(null,inst_10705);var inst_10705__$1 = inst_10711;var state_10724__$1 = (function (){var statearr_10733 = state_10724;(statearr_10733[7] = inst_10705__$1);
(statearr_10733[8] = inst_10710);
return statearr_10733;
})();var statearr_10734_10751 = state_10724__$1;(statearr_10734_10751[2] = null);
(statearr_10734_10751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 8))
{var inst_10715 = cljs.core.async.close_BANG_.call(null,ch);var state_10724__$1 = state_10724;var statearr_10735_10752 = state_10724__$1;(statearr_10735_10752[2] = inst_10715);
(statearr_10735_10752[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 9))
{var state_10724__$1 = state_10724;var statearr_10736_10753 = state_10724__$1;(statearr_10736_10753[2] = null);
(statearr_10736_10753[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 10))
{var inst_10718 = (state_10724[2]);var state_10724__$1 = state_10724;var statearr_10737_10754 = state_10724__$1;(statearr_10737_10754[2] = inst_10718);
(statearr_10737_10754[1] = 6);
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
var state_machine__5709__auto____0 = (function (){var statearr_10741 = [null,null,null,null,null,null,null,null,null];(statearr_10741[0] = state_machine__5709__auto__);
(statearr_10741[1] = 1);
return statearr_10741;
});
var state_machine__5709__auto____1 = (function (state_10724){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_10724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e10742){if((e10742 instanceof Object))
{var ex__5712__auto__ = e10742;var statearr_10743_10755 = state_10724;(statearr_10743_10755[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10756 = state_10724;
state_10724 = G__10756;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_10724){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_10724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_10744 = f__5724__auto__.call(null);(statearr_10744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto__);
return statearr_10744;
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
cljs.core.async.Mux = (function (){var obj10758 = {};return obj10758;
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
cljs.core.async.Mult = (function (){var obj10760 = {};return obj10760;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10984 = (function (cs,ch,mult,meta10985){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10985 = meta10985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10984.cljs$lang$type = true;
cljs.core.async.t10984.cljs$lang$ctorStr = "cljs.core.async/t10984";
cljs.core.async.t10984.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10984");
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10984.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10986){var self__ = this;
var _10986__$1 = this;return self__.meta10985;
});})(cs))
;
cljs.core.async.t10984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10986,meta10985__$1){var self__ = this;
var _10986__$1 = this;return (new cljs.core.async.t10984(self__.cs,self__.ch,self__.mult,meta10985__$1));
});})(cs))
;
cljs.core.async.__GT_t10984 = ((function (cs){
return (function __GT_t10984(cs__$1,ch__$1,mult__$1,meta10985){return (new cljs.core.async.t10984(cs__$1,ch__$1,mult__$1,meta10985));
});})(cs))
;
}
return (new cljs.core.async.t10984(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5723__auto___11207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11121){var state_val_11122 = (state_11121[1]);if((state_val_11122 === 32))
{var inst_11065 = (state_11121[7]);var inst_10989 = (state_11121[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11121,31,Object,null,30);var inst_11072 = cljs.core.async.put_BANG_.call(null,inst_11065,inst_10989,done);var state_11121__$1 = state_11121;var statearr_11123_11208 = state_11121__$1;(statearr_11123_11208[2] = inst_11072);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 1))
{var state_11121__$1 = state_11121;var statearr_11124_11209 = state_11121__$1;(statearr_11124_11209[2] = null);
(statearr_11124_11209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 33))
{var inst_11078 = (state_11121[9]);var inst_11080 = cljs.core.chunked_seq_QMARK_.call(null,inst_11078);var state_11121__$1 = state_11121;if(inst_11080)
{var statearr_11125_11210 = state_11121__$1;(statearr_11125_11210[1] = 36);
} else
{var statearr_11126_11211 = state_11121__$1;(statearr_11126_11211[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 2))
{var state_11121__$1 = state_11121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11121__$1,4,ch);
} else
{if((state_val_11122 === 34))
{var state_11121__$1 = state_11121;var statearr_11127_11212 = state_11121__$1;(statearr_11127_11212[2] = null);
(statearr_11127_11212[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 3))
{var inst_11119 = (state_11121[2]);var state_11121__$1 = state_11121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11121__$1,inst_11119);
} else
{if((state_val_11122 === 35))
{var inst_11103 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11128_11213 = state_11121__$1;(statearr_11128_11213[2] = inst_11103);
(statearr_11128_11213[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 4))
{var inst_10989 = (state_11121[8]);var inst_10989__$1 = (state_11121[2]);var inst_10990 = (inst_10989__$1 == null);var state_11121__$1 = (function (){var statearr_11129 = state_11121;(statearr_11129[8] = inst_10989__$1);
return statearr_11129;
})();if(cljs.core.truth_(inst_10990))
{var statearr_11130_11214 = state_11121__$1;(statearr_11130_11214[1] = 5);
} else
{var statearr_11131_11215 = state_11121__$1;(statearr_11131_11215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 36))
{var inst_11078 = (state_11121[9]);var inst_11082 = cljs.core.chunk_first.call(null,inst_11078);var inst_11083 = cljs.core.chunk_rest.call(null,inst_11078);var inst_11084 = cljs.core.count.call(null,inst_11082);var inst_11057 = inst_11083;var inst_11058 = inst_11082;var inst_11059 = inst_11084;var inst_11060 = 0;var state_11121__$1 = (function (){var statearr_11132 = state_11121;(statearr_11132[10] = inst_11060);
(statearr_11132[11] = inst_11059);
(statearr_11132[12] = inst_11058);
(statearr_11132[13] = inst_11057);
return statearr_11132;
})();var statearr_11133_11216 = state_11121__$1;(statearr_11133_11216[2] = null);
(statearr_11133_11216[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 5))
{var inst_10996 = cljs.core.deref.call(null,cs);var inst_10997 = cljs.core.seq.call(null,inst_10996);var inst_10998 = inst_10997;var inst_10999 = null;var inst_11000 = 0;var inst_11001 = 0;var state_11121__$1 = (function (){var statearr_11134 = state_11121;(statearr_11134[14] = inst_10999);
(statearr_11134[15] = inst_10998);
(statearr_11134[16] = inst_11001);
(statearr_11134[17] = inst_11000);
return statearr_11134;
})();var statearr_11135_11217 = state_11121__$1;(statearr_11135_11217[2] = null);
(statearr_11135_11217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 37))
{var inst_11078 = (state_11121[9]);var inst_11087 = cljs.core.first.call(null,inst_11078);var state_11121__$1 = (function (){var statearr_11136 = state_11121;(statearr_11136[18] = inst_11087);
return statearr_11136;
})();var statearr_11137_11218 = state_11121__$1;(statearr_11137_11218[2] = null);
(statearr_11137_11218[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 6))
{var inst_11049 = (state_11121[19]);var inst_11048 = cljs.core.deref.call(null,cs);var inst_11049__$1 = cljs.core.keys.call(null,inst_11048);var inst_11050 = cljs.core.count.call(null,inst_11049__$1);var inst_11051 = cljs.core.reset_BANG_.call(null,dctr,inst_11050);var inst_11056 = cljs.core.seq.call(null,inst_11049__$1);var inst_11057 = inst_11056;var inst_11058 = null;var inst_11059 = 0;var inst_11060 = 0;var state_11121__$1 = (function (){var statearr_11138 = state_11121;(statearr_11138[20] = inst_11051);
(statearr_11138[10] = inst_11060);
(statearr_11138[19] = inst_11049__$1);
(statearr_11138[11] = inst_11059);
(statearr_11138[12] = inst_11058);
(statearr_11138[13] = inst_11057);
return statearr_11138;
})();var statearr_11139_11219 = state_11121__$1;(statearr_11139_11219[2] = null);
(statearr_11139_11219[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 38))
{var inst_11100 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11140_11220 = state_11121__$1;(statearr_11140_11220[2] = inst_11100);
(statearr_11140_11220[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 7))
{var inst_11117 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11141_11221 = state_11121__$1;(statearr_11141_11221[2] = inst_11117);
(statearr_11141_11221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 39))
{var inst_11078 = (state_11121[9]);var inst_11096 = (state_11121[2]);var inst_11097 = cljs.core.next.call(null,inst_11078);var inst_11057 = inst_11097;var inst_11058 = null;var inst_11059 = 0;var inst_11060 = 0;var state_11121__$1 = (function (){var statearr_11142 = state_11121;(statearr_11142[21] = inst_11096);
(statearr_11142[10] = inst_11060);
(statearr_11142[11] = inst_11059);
(statearr_11142[12] = inst_11058);
(statearr_11142[13] = inst_11057);
return statearr_11142;
})();var statearr_11143_11222 = state_11121__$1;(statearr_11143_11222[2] = null);
(statearr_11143_11222[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 8))
{var inst_11001 = (state_11121[16]);var inst_11000 = (state_11121[17]);var inst_11003 = (inst_11001 < inst_11000);var inst_11004 = inst_11003;var state_11121__$1 = state_11121;if(cljs.core.truth_(inst_11004))
{var statearr_11144_11223 = state_11121__$1;(statearr_11144_11223[1] = 10);
} else
{var statearr_11145_11224 = state_11121__$1;(statearr_11145_11224[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 40))
{var inst_11087 = (state_11121[18]);var inst_11088 = (state_11121[2]);var inst_11089 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11090 = cljs.core.async.untap_STAR_.call(null,m,inst_11087);var state_11121__$1 = (function (){var statearr_11146 = state_11121;(statearr_11146[22] = inst_11089);
(statearr_11146[23] = inst_11088);
return statearr_11146;
})();var statearr_11147_11225 = state_11121__$1;(statearr_11147_11225[2] = inst_11090);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 9))
{var inst_11046 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11148_11226 = state_11121__$1;(statearr_11148_11226[2] = inst_11046);
(statearr_11148_11226[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 41))
{var inst_10989 = (state_11121[8]);var inst_11087 = (state_11121[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11121,40,Object,null,39);var inst_11094 = cljs.core.async.put_BANG_.call(null,inst_11087,inst_10989,done);var state_11121__$1 = state_11121;var statearr_11149_11227 = state_11121__$1;(statearr_11149_11227[2] = inst_11094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 10))
{var inst_10999 = (state_11121[14]);var inst_11001 = (state_11121[16]);var inst_11007 = cljs.core._nth.call(null,inst_10999,inst_11001);var inst_11008 = cljs.core.nth.call(null,inst_11007,0,null);var inst_11009 = cljs.core.nth.call(null,inst_11007,1,null);var state_11121__$1 = (function (){var statearr_11150 = state_11121;(statearr_11150[24] = inst_11008);
return statearr_11150;
})();if(cljs.core.truth_(inst_11009))
{var statearr_11151_11228 = state_11121__$1;(statearr_11151_11228[1] = 13);
} else
{var statearr_11152_11229 = state_11121__$1;(statearr_11152_11229[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 42))
{var state_11121__$1 = state_11121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11121__$1,45,dchan);
} else
{if((state_val_11122 === 11))
{var inst_11018 = (state_11121[25]);var inst_10998 = (state_11121[15]);var inst_11018__$1 = cljs.core.seq.call(null,inst_10998);var state_11121__$1 = (function (){var statearr_11153 = state_11121;(statearr_11153[25] = inst_11018__$1);
return statearr_11153;
})();if(inst_11018__$1)
{var statearr_11154_11230 = state_11121__$1;(statearr_11154_11230[1] = 16);
} else
{var statearr_11155_11231 = state_11121__$1;(statearr_11155_11231[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 43))
{var state_11121__$1 = state_11121;var statearr_11156_11232 = state_11121__$1;(statearr_11156_11232[2] = null);
(statearr_11156_11232[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 12))
{var inst_11044 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11157_11233 = state_11121__$1;(statearr_11157_11233[2] = inst_11044);
(statearr_11157_11233[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 44))
{var inst_11114 = (state_11121[2]);var state_11121__$1 = (function (){var statearr_11158 = state_11121;(statearr_11158[26] = inst_11114);
return statearr_11158;
})();var statearr_11159_11234 = state_11121__$1;(statearr_11159_11234[2] = null);
(statearr_11159_11234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 13))
{var inst_11008 = (state_11121[24]);var inst_11011 = cljs.core.async.close_BANG_.call(null,inst_11008);var state_11121__$1 = state_11121;var statearr_11160_11235 = state_11121__$1;(statearr_11160_11235[2] = inst_11011);
(statearr_11160_11235[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 45))
{var inst_11111 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11164_11236 = state_11121__$1;(statearr_11164_11236[2] = inst_11111);
(statearr_11164_11236[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 14))
{var state_11121__$1 = state_11121;var statearr_11165_11237 = state_11121__$1;(statearr_11165_11237[2] = null);
(statearr_11165_11237[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 15))
{var inst_10999 = (state_11121[14]);var inst_10998 = (state_11121[15]);var inst_11001 = (state_11121[16]);var inst_11000 = (state_11121[17]);var inst_11014 = (state_11121[2]);var inst_11015 = (inst_11001 + 1);var tmp11161 = inst_10999;var tmp11162 = inst_10998;var tmp11163 = inst_11000;var inst_10998__$1 = tmp11162;var inst_10999__$1 = tmp11161;var inst_11000__$1 = tmp11163;var inst_11001__$1 = inst_11015;var state_11121__$1 = (function (){var statearr_11166 = state_11121;(statearr_11166[27] = inst_11014);
(statearr_11166[14] = inst_10999__$1);
(statearr_11166[15] = inst_10998__$1);
(statearr_11166[16] = inst_11001__$1);
(statearr_11166[17] = inst_11000__$1);
return statearr_11166;
})();var statearr_11167_11238 = state_11121__$1;(statearr_11167_11238[2] = null);
(statearr_11167_11238[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 16))
{var inst_11018 = (state_11121[25]);var inst_11020 = cljs.core.chunked_seq_QMARK_.call(null,inst_11018);var state_11121__$1 = state_11121;if(inst_11020)
{var statearr_11168_11239 = state_11121__$1;(statearr_11168_11239[1] = 19);
} else
{var statearr_11169_11240 = state_11121__$1;(statearr_11169_11240[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 17))
{var state_11121__$1 = state_11121;var statearr_11170_11241 = state_11121__$1;(statearr_11170_11241[2] = null);
(statearr_11170_11241[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 18))
{var inst_11042 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11171_11242 = state_11121__$1;(statearr_11171_11242[2] = inst_11042);
(statearr_11171_11242[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 19))
{var inst_11018 = (state_11121[25]);var inst_11022 = cljs.core.chunk_first.call(null,inst_11018);var inst_11023 = cljs.core.chunk_rest.call(null,inst_11018);var inst_11024 = cljs.core.count.call(null,inst_11022);var inst_10998 = inst_11023;var inst_10999 = inst_11022;var inst_11000 = inst_11024;var inst_11001 = 0;var state_11121__$1 = (function (){var statearr_11172 = state_11121;(statearr_11172[14] = inst_10999);
(statearr_11172[15] = inst_10998);
(statearr_11172[16] = inst_11001);
(statearr_11172[17] = inst_11000);
return statearr_11172;
})();var statearr_11173_11243 = state_11121__$1;(statearr_11173_11243[2] = null);
(statearr_11173_11243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 20))
{var inst_11018 = (state_11121[25]);var inst_11028 = cljs.core.first.call(null,inst_11018);var inst_11029 = cljs.core.nth.call(null,inst_11028,0,null);var inst_11030 = cljs.core.nth.call(null,inst_11028,1,null);var state_11121__$1 = (function (){var statearr_11174 = state_11121;(statearr_11174[28] = inst_11029);
return statearr_11174;
})();if(cljs.core.truth_(inst_11030))
{var statearr_11175_11244 = state_11121__$1;(statearr_11175_11244[1] = 22);
} else
{var statearr_11176_11245 = state_11121__$1;(statearr_11176_11245[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 21))
{var inst_11039 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11177_11246 = state_11121__$1;(statearr_11177_11246[2] = inst_11039);
(statearr_11177_11246[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 22))
{var inst_11029 = (state_11121[28]);var inst_11032 = cljs.core.async.close_BANG_.call(null,inst_11029);var state_11121__$1 = state_11121;var statearr_11178_11247 = state_11121__$1;(statearr_11178_11247[2] = inst_11032);
(statearr_11178_11247[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 23))
{var state_11121__$1 = state_11121;var statearr_11179_11248 = state_11121__$1;(statearr_11179_11248[2] = null);
(statearr_11179_11248[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 24))
{var inst_11018 = (state_11121[25]);var inst_11035 = (state_11121[2]);var inst_11036 = cljs.core.next.call(null,inst_11018);var inst_10998 = inst_11036;var inst_10999 = null;var inst_11000 = 0;var inst_11001 = 0;var state_11121__$1 = (function (){var statearr_11180 = state_11121;(statearr_11180[14] = inst_10999);
(statearr_11180[15] = inst_10998);
(statearr_11180[16] = inst_11001);
(statearr_11180[17] = inst_11000);
(statearr_11180[29] = inst_11035);
return statearr_11180;
})();var statearr_11181_11249 = state_11121__$1;(statearr_11181_11249[2] = null);
(statearr_11181_11249[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 25))
{var inst_11060 = (state_11121[10]);var inst_11059 = (state_11121[11]);var inst_11062 = (inst_11060 < inst_11059);var inst_11063 = inst_11062;var state_11121__$1 = state_11121;if(cljs.core.truth_(inst_11063))
{var statearr_11182_11250 = state_11121__$1;(statearr_11182_11250[1] = 27);
} else
{var statearr_11183_11251 = state_11121__$1;(statearr_11183_11251[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 26))
{var inst_11049 = (state_11121[19]);var inst_11107 = (state_11121[2]);var inst_11108 = cljs.core.seq.call(null,inst_11049);var state_11121__$1 = (function (){var statearr_11184 = state_11121;(statearr_11184[30] = inst_11107);
return statearr_11184;
})();if(inst_11108)
{var statearr_11185_11252 = state_11121__$1;(statearr_11185_11252[1] = 42);
} else
{var statearr_11186_11253 = state_11121__$1;(statearr_11186_11253[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 27))
{var inst_11060 = (state_11121[10]);var inst_11058 = (state_11121[12]);var inst_11065 = cljs.core._nth.call(null,inst_11058,inst_11060);var state_11121__$1 = (function (){var statearr_11187 = state_11121;(statearr_11187[7] = inst_11065);
return statearr_11187;
})();var statearr_11188_11254 = state_11121__$1;(statearr_11188_11254[2] = null);
(statearr_11188_11254[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 28))
{var inst_11057 = (state_11121[13]);var inst_11078 = (state_11121[9]);var inst_11078__$1 = cljs.core.seq.call(null,inst_11057);var state_11121__$1 = (function (){var statearr_11192 = state_11121;(statearr_11192[9] = inst_11078__$1);
return statearr_11192;
})();if(inst_11078__$1)
{var statearr_11193_11255 = state_11121__$1;(statearr_11193_11255[1] = 33);
} else
{var statearr_11194_11256 = state_11121__$1;(statearr_11194_11256[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 29))
{var inst_11105 = (state_11121[2]);var state_11121__$1 = state_11121;var statearr_11195_11257 = state_11121__$1;(statearr_11195_11257[2] = inst_11105);
(statearr_11195_11257[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 30))
{var inst_11060 = (state_11121[10]);var inst_11059 = (state_11121[11]);var inst_11058 = (state_11121[12]);var inst_11057 = (state_11121[13]);var inst_11074 = (state_11121[2]);var inst_11075 = (inst_11060 + 1);var tmp11189 = inst_11059;var tmp11190 = inst_11058;var tmp11191 = inst_11057;var inst_11057__$1 = tmp11191;var inst_11058__$1 = tmp11190;var inst_11059__$1 = tmp11189;var inst_11060__$1 = inst_11075;var state_11121__$1 = (function (){var statearr_11196 = state_11121;(statearr_11196[10] = inst_11060__$1);
(statearr_11196[11] = inst_11059__$1);
(statearr_11196[12] = inst_11058__$1);
(statearr_11196[13] = inst_11057__$1);
(statearr_11196[31] = inst_11074);
return statearr_11196;
})();var statearr_11197_11258 = state_11121__$1;(statearr_11197_11258[2] = null);
(statearr_11197_11258[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11122 === 31))
{var inst_11065 = (state_11121[7]);var inst_11066 = (state_11121[2]);var inst_11067 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11068 = cljs.core.async.untap_STAR_.call(null,m,inst_11065);var state_11121__$1 = (function (){var statearr_11198 = state_11121;(statearr_11198[32] = inst_11067);
(statearr_11198[33] = inst_11066);
return statearr_11198;
})();var statearr_11199_11259 = state_11121__$1;(statearr_11199_11259[2] = inst_11068);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121__$1);
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
var state_machine__5709__auto____0 = (function (){var statearr_11203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11203[0] = state_machine__5709__auto__);
(statearr_11203[1] = 1);
return statearr_11203;
});
var state_machine__5709__auto____1 = (function (state_11121){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11121);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11204){if((e11204 instanceof Object))
{var ex__5712__auto__ = e11204;var statearr_11205_11260 = state_11121;(statearr_11205_11260[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11261 = state_11121;
state_11121 = G__11261;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11121){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11206 = f__5724__auto__.call(null);(statearr_11206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11207);
return statearr_11206;
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
cljs.core.async.Mix = (function (){var obj11263 = {};return obj11263;
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
;var m = (function (){if(typeof cljs.core.async.t11373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11373 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11374){
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
this.meta11374 = meta11374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11373.cljs$lang$type = true;
cljs.core.async.t11373.cljs$lang$ctorStr = "cljs.core.async/t11373";
cljs.core.async.t11373.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11373");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11375){var self__ = this;
var _11375__$1 = this;return self__.meta11374;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11375,meta11374__$1){var self__ = this;
var _11375__$1 = this;return (new cljs.core.async.t11373(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11374__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11373 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11373(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11374){return (new cljs.core.async.t11373(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11374));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11373(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5723__auto___11482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11440){var state_val_11441 = (state_11440[1]);if((state_val_11441 === 1))
{var inst_11379 = (state_11440[7]);var inst_11379__$1 = calc_state.call(null);var inst_11380 = cljs.core.seq_QMARK_.call(null,inst_11379__$1);var state_11440__$1 = (function (){var statearr_11442 = state_11440;(statearr_11442[7] = inst_11379__$1);
return statearr_11442;
})();if(inst_11380)
{var statearr_11443_11483 = state_11440__$1;(statearr_11443_11483[1] = 2);
} else
{var statearr_11444_11484 = state_11440__$1;(statearr_11444_11484[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 2))
{var inst_11379 = (state_11440[7]);var inst_11382 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11379);var state_11440__$1 = state_11440;var statearr_11445_11485 = state_11440__$1;(statearr_11445_11485[2] = inst_11382);
(statearr_11445_11485[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 3))
{var inst_11379 = (state_11440[7]);var state_11440__$1 = state_11440;var statearr_11446_11486 = state_11440__$1;(statearr_11446_11486[2] = inst_11379);
(statearr_11446_11486[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 4))
{var inst_11379 = (state_11440[7]);var inst_11385 = (state_11440[2]);var inst_11386 = cljs.core.get.call(null,inst_11385,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11387 = cljs.core.get.call(null,inst_11385,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11388 = cljs.core.get.call(null,inst_11385,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11389 = inst_11379;var state_11440__$1 = (function (){var statearr_11447 = state_11440;(statearr_11447[8] = inst_11389);
(statearr_11447[9] = inst_11388);
(statearr_11447[10] = inst_11387);
(statearr_11447[11] = inst_11386);
return statearr_11447;
})();var statearr_11448_11487 = state_11440__$1;(statearr_11448_11487[2] = null);
(statearr_11448_11487[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 5))
{var inst_11389 = (state_11440[8]);var inst_11392 = cljs.core.seq_QMARK_.call(null,inst_11389);var state_11440__$1 = state_11440;if(inst_11392)
{var statearr_11449_11488 = state_11440__$1;(statearr_11449_11488[1] = 7);
} else
{var statearr_11450_11489 = state_11440__$1;(statearr_11450_11489[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 6))
{var inst_11438 = (state_11440[2]);var state_11440__$1 = state_11440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11440__$1,inst_11438);
} else
{if((state_val_11441 === 7))
{var inst_11389 = (state_11440[8]);var inst_11394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11389);var state_11440__$1 = state_11440;var statearr_11451_11490 = state_11440__$1;(statearr_11451_11490[2] = inst_11394);
(statearr_11451_11490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 8))
{var inst_11389 = (state_11440[8]);var state_11440__$1 = state_11440;var statearr_11452_11491 = state_11440__$1;(statearr_11452_11491[2] = inst_11389);
(statearr_11452_11491[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 9))
{var inst_11397 = (state_11440[12]);var inst_11397__$1 = (state_11440[2]);var inst_11398 = cljs.core.get.call(null,inst_11397__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11399 = cljs.core.get.call(null,inst_11397__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11400 = cljs.core.get.call(null,inst_11397__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11440__$1 = (function (){var statearr_11453 = state_11440;(statearr_11453[13] = inst_11400);
(statearr_11453[14] = inst_11399);
(statearr_11453[12] = inst_11397__$1);
return statearr_11453;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11440__$1,10,inst_11398);
} else
{if((state_val_11441 === 10))
{var inst_11404 = (state_11440[15]);var inst_11405 = (state_11440[16]);var inst_11403 = (state_11440[2]);var inst_11404__$1 = cljs.core.nth.call(null,inst_11403,0,null);var inst_11405__$1 = cljs.core.nth.call(null,inst_11403,1,null);var inst_11406 = (inst_11404__$1 == null);var inst_11407 = cljs.core._EQ_.call(null,inst_11405__$1,change);var inst_11408 = (inst_11406) || (inst_11407);var state_11440__$1 = (function (){var statearr_11454 = state_11440;(statearr_11454[15] = inst_11404__$1);
(statearr_11454[16] = inst_11405__$1);
return statearr_11454;
})();if(cljs.core.truth_(inst_11408))
{var statearr_11455_11492 = state_11440__$1;(statearr_11455_11492[1] = 11);
} else
{var statearr_11456_11493 = state_11440__$1;(statearr_11456_11493[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 11))
{var inst_11404 = (state_11440[15]);var inst_11410 = (inst_11404 == null);var state_11440__$1 = state_11440;if(cljs.core.truth_(inst_11410))
{var statearr_11457_11494 = state_11440__$1;(statearr_11457_11494[1] = 14);
} else
{var statearr_11458_11495 = state_11440__$1;(statearr_11458_11495[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 12))
{var inst_11405 = (state_11440[16]);var inst_11400 = (state_11440[13]);var inst_11419 = (state_11440[17]);var inst_11419__$1 = inst_11400.call(null,inst_11405);var state_11440__$1 = (function (){var statearr_11459 = state_11440;(statearr_11459[17] = inst_11419__$1);
return statearr_11459;
})();if(cljs.core.truth_(inst_11419__$1))
{var statearr_11460_11496 = state_11440__$1;(statearr_11460_11496[1] = 17);
} else
{var statearr_11461_11497 = state_11440__$1;(statearr_11461_11497[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 13))
{var inst_11436 = (state_11440[2]);var state_11440__$1 = state_11440;var statearr_11462_11498 = state_11440__$1;(statearr_11462_11498[2] = inst_11436);
(statearr_11462_11498[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 14))
{var inst_11405 = (state_11440[16]);var inst_11412 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11405);var state_11440__$1 = state_11440;var statearr_11463_11499 = state_11440__$1;(statearr_11463_11499[2] = inst_11412);
(statearr_11463_11499[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 15))
{var state_11440__$1 = state_11440;var statearr_11464_11500 = state_11440__$1;(statearr_11464_11500[2] = null);
(statearr_11464_11500[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 16))
{var inst_11415 = (state_11440[2]);var inst_11416 = calc_state.call(null);var inst_11389 = inst_11416;var state_11440__$1 = (function (){var statearr_11465 = state_11440;(statearr_11465[8] = inst_11389);
(statearr_11465[18] = inst_11415);
return statearr_11465;
})();var statearr_11466_11501 = state_11440__$1;(statearr_11466_11501[2] = null);
(statearr_11466_11501[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 17))
{var inst_11419 = (state_11440[17]);var state_11440__$1 = state_11440;var statearr_11467_11502 = state_11440__$1;(statearr_11467_11502[2] = inst_11419);
(statearr_11467_11502[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 18))
{var inst_11405 = (state_11440[16]);var inst_11400 = (state_11440[13]);var inst_11399 = (state_11440[14]);var inst_11422 = cljs.core.empty_QMARK_.call(null,inst_11400);var inst_11423 = inst_11399.call(null,inst_11405);var inst_11424 = cljs.core.not.call(null,inst_11423);var inst_11425 = (inst_11422) && (inst_11424);var state_11440__$1 = state_11440;var statearr_11468_11503 = state_11440__$1;(statearr_11468_11503[2] = inst_11425);
(statearr_11468_11503[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 19))
{var inst_11427 = (state_11440[2]);var state_11440__$1 = state_11440;if(cljs.core.truth_(inst_11427))
{var statearr_11469_11504 = state_11440__$1;(statearr_11469_11504[1] = 20);
} else
{var statearr_11470_11505 = state_11440__$1;(statearr_11470_11505[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 20))
{var inst_11404 = (state_11440[15]);var state_11440__$1 = state_11440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11440__$1,23,out,inst_11404);
} else
{if((state_val_11441 === 21))
{var state_11440__$1 = state_11440;var statearr_11471_11506 = state_11440__$1;(statearr_11471_11506[2] = null);
(statearr_11471_11506[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 22))
{var inst_11397 = (state_11440[12]);var inst_11433 = (state_11440[2]);var inst_11389 = inst_11397;var state_11440__$1 = (function (){var statearr_11472 = state_11440;(statearr_11472[8] = inst_11389);
(statearr_11472[19] = inst_11433);
return statearr_11472;
})();var statearr_11473_11507 = state_11440__$1;(statearr_11473_11507[2] = null);
(statearr_11473_11507[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11441 === 23))
{var inst_11430 = (state_11440[2]);var state_11440__$1 = state_11440;var statearr_11474_11508 = state_11440__$1;(statearr_11474_11508[2] = inst_11430);
(statearr_11474_11508[1] = 22);
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
var state_machine__5709__auto____0 = (function (){var statearr_11478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11478[0] = state_machine__5709__auto__);
(statearr_11478[1] = 1);
return statearr_11478;
});
var state_machine__5709__auto____1 = (function (state_11440){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11440);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11479){if((e11479 instanceof Object))
{var ex__5712__auto__ = e11479;var statearr_11480_11509 = state_11440;(statearr_11480_11509[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11510 = state_11440;
state_11440 = G__11510;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11440){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11481 = f__5724__auto__.call(null);(statearr_11481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11482);
return statearr_11481;
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
cljs.core.async.Pub = (function (){var obj11512 = {};return obj11512;
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
return (function (p1__11513_SHARP_){if(cljs.core.truth_(p1__11513_SHARP_.call(null,topic)))
{return p1__11513_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11513_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11638 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11639){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11639 = meta11639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11638.cljs$lang$type = true;
cljs.core.async.t11638.cljs$lang$ctorStr = "cljs.core.async/t11638";
cljs.core.async.t11638.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11638");
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11638.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11640){var self__ = this;
var _11640__$1 = this;return self__.meta11639;
});})(mults,ensure_mult))
;
cljs.core.async.t11638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11640,meta11639__$1){var self__ = this;
var _11640__$1 = this;return (new cljs.core.async.t11638(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11639__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11638 = ((function (mults,ensure_mult){
return (function __GT_t11638(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11639){return (new cljs.core.async.t11638(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11639));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11638(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5723__auto___11762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11714){var state_val_11715 = (state_11714[1]);if((state_val_11715 === 1))
{var state_11714__$1 = state_11714;var statearr_11716_11763 = state_11714__$1;(statearr_11716_11763[2] = null);
(statearr_11716_11763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 2))
{var state_11714__$1 = state_11714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11714__$1,4,ch);
} else
{if((state_val_11715 === 3))
{var inst_11712 = (state_11714[2]);var state_11714__$1 = state_11714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11714__$1,inst_11712);
} else
{if((state_val_11715 === 4))
{var inst_11643 = (state_11714[7]);var inst_11643__$1 = (state_11714[2]);var inst_11644 = (inst_11643__$1 == null);var state_11714__$1 = (function (){var statearr_11717 = state_11714;(statearr_11717[7] = inst_11643__$1);
return statearr_11717;
})();if(cljs.core.truth_(inst_11644))
{var statearr_11718_11764 = state_11714__$1;(statearr_11718_11764[1] = 5);
} else
{var statearr_11719_11765 = state_11714__$1;(statearr_11719_11765[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 5))
{var inst_11650 = cljs.core.deref.call(null,mults);var inst_11651 = cljs.core.vals.call(null,inst_11650);var inst_11652 = cljs.core.seq.call(null,inst_11651);var inst_11653 = inst_11652;var inst_11654 = null;var inst_11655 = 0;var inst_11656 = 0;var state_11714__$1 = (function (){var statearr_11720 = state_11714;(statearr_11720[8] = inst_11654);
(statearr_11720[9] = inst_11655);
(statearr_11720[10] = inst_11656);
(statearr_11720[11] = inst_11653);
return statearr_11720;
})();var statearr_11721_11766 = state_11714__$1;(statearr_11721_11766[2] = null);
(statearr_11721_11766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 6))
{var inst_11693 = (state_11714[12]);var inst_11691 = (state_11714[13]);var inst_11643 = (state_11714[7]);var inst_11691__$1 = topic_fn.call(null,inst_11643);var inst_11692 = cljs.core.deref.call(null,mults);var inst_11693__$1 = cljs.core.get.call(null,inst_11692,inst_11691__$1);var state_11714__$1 = (function (){var statearr_11722 = state_11714;(statearr_11722[12] = inst_11693__$1);
(statearr_11722[13] = inst_11691__$1);
return statearr_11722;
})();if(cljs.core.truth_(inst_11693__$1))
{var statearr_11723_11767 = state_11714__$1;(statearr_11723_11767[1] = 19);
} else
{var statearr_11724_11768 = state_11714__$1;(statearr_11724_11768[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 7))
{var inst_11710 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11725_11769 = state_11714__$1;(statearr_11725_11769[2] = inst_11710);
(statearr_11725_11769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 8))
{var inst_11655 = (state_11714[9]);var inst_11656 = (state_11714[10]);var inst_11658 = (inst_11656 < inst_11655);var inst_11659 = inst_11658;var state_11714__$1 = state_11714;if(cljs.core.truth_(inst_11659))
{var statearr_11729_11770 = state_11714__$1;(statearr_11729_11770[1] = 10);
} else
{var statearr_11730_11771 = state_11714__$1;(statearr_11730_11771[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 9))
{var inst_11689 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11731_11772 = state_11714__$1;(statearr_11731_11772[2] = inst_11689);
(statearr_11731_11772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 10))
{var inst_11654 = (state_11714[8]);var inst_11655 = (state_11714[9]);var inst_11656 = (state_11714[10]);var inst_11653 = (state_11714[11]);var inst_11661 = cljs.core._nth.call(null,inst_11654,inst_11656);var inst_11662 = cljs.core.async.muxch_STAR_.call(null,inst_11661);var inst_11663 = cljs.core.async.close_BANG_.call(null,inst_11662);var inst_11664 = (inst_11656 + 1);var tmp11726 = inst_11654;var tmp11727 = inst_11655;var tmp11728 = inst_11653;var inst_11653__$1 = tmp11728;var inst_11654__$1 = tmp11726;var inst_11655__$1 = tmp11727;var inst_11656__$1 = inst_11664;var state_11714__$1 = (function (){var statearr_11732 = state_11714;(statearr_11732[8] = inst_11654__$1);
(statearr_11732[14] = inst_11663);
(statearr_11732[9] = inst_11655__$1);
(statearr_11732[10] = inst_11656__$1);
(statearr_11732[11] = inst_11653__$1);
return statearr_11732;
})();var statearr_11733_11773 = state_11714__$1;(statearr_11733_11773[2] = null);
(statearr_11733_11773[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 11))
{var inst_11653 = (state_11714[11]);var inst_11667 = (state_11714[15]);var inst_11667__$1 = cljs.core.seq.call(null,inst_11653);var state_11714__$1 = (function (){var statearr_11734 = state_11714;(statearr_11734[15] = inst_11667__$1);
return statearr_11734;
})();if(inst_11667__$1)
{var statearr_11735_11774 = state_11714__$1;(statearr_11735_11774[1] = 13);
} else
{var statearr_11736_11775 = state_11714__$1;(statearr_11736_11775[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 12))
{var inst_11687 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11737_11776 = state_11714__$1;(statearr_11737_11776[2] = inst_11687);
(statearr_11737_11776[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 13))
{var inst_11667 = (state_11714[15]);var inst_11669 = cljs.core.chunked_seq_QMARK_.call(null,inst_11667);var state_11714__$1 = state_11714;if(inst_11669)
{var statearr_11738_11777 = state_11714__$1;(statearr_11738_11777[1] = 16);
} else
{var statearr_11739_11778 = state_11714__$1;(statearr_11739_11778[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 14))
{var state_11714__$1 = state_11714;var statearr_11740_11779 = state_11714__$1;(statearr_11740_11779[2] = null);
(statearr_11740_11779[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 15))
{var inst_11685 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11741_11780 = state_11714__$1;(statearr_11741_11780[2] = inst_11685);
(statearr_11741_11780[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 16))
{var inst_11667 = (state_11714[15]);var inst_11671 = cljs.core.chunk_first.call(null,inst_11667);var inst_11672 = cljs.core.chunk_rest.call(null,inst_11667);var inst_11673 = cljs.core.count.call(null,inst_11671);var inst_11653 = inst_11672;var inst_11654 = inst_11671;var inst_11655 = inst_11673;var inst_11656 = 0;var state_11714__$1 = (function (){var statearr_11742 = state_11714;(statearr_11742[8] = inst_11654);
(statearr_11742[9] = inst_11655);
(statearr_11742[10] = inst_11656);
(statearr_11742[11] = inst_11653);
return statearr_11742;
})();var statearr_11743_11781 = state_11714__$1;(statearr_11743_11781[2] = null);
(statearr_11743_11781[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 17))
{var inst_11667 = (state_11714[15]);var inst_11676 = cljs.core.first.call(null,inst_11667);var inst_11677 = cljs.core.async.muxch_STAR_.call(null,inst_11676);var inst_11678 = cljs.core.async.close_BANG_.call(null,inst_11677);var inst_11679 = cljs.core.next.call(null,inst_11667);var inst_11653 = inst_11679;var inst_11654 = null;var inst_11655 = 0;var inst_11656 = 0;var state_11714__$1 = (function (){var statearr_11744 = state_11714;(statearr_11744[8] = inst_11654);
(statearr_11744[9] = inst_11655);
(statearr_11744[10] = inst_11656);
(statearr_11744[11] = inst_11653);
(statearr_11744[16] = inst_11678);
return statearr_11744;
})();var statearr_11745_11782 = state_11714__$1;(statearr_11745_11782[2] = null);
(statearr_11745_11782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 18))
{var inst_11682 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11746_11783 = state_11714__$1;(statearr_11746_11783[2] = inst_11682);
(statearr_11746_11783[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 19))
{var state_11714__$1 = state_11714;var statearr_11747_11784 = state_11714__$1;(statearr_11747_11784[2] = null);
(statearr_11747_11784[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 20))
{var state_11714__$1 = state_11714;var statearr_11748_11785 = state_11714__$1;(statearr_11748_11785[2] = null);
(statearr_11748_11785[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 21))
{var inst_11707 = (state_11714[2]);var state_11714__$1 = (function (){var statearr_11749 = state_11714;(statearr_11749[17] = inst_11707);
return statearr_11749;
})();var statearr_11750_11786 = state_11714__$1;(statearr_11750_11786[2] = null);
(statearr_11750_11786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 22))
{var inst_11704 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11751_11787 = state_11714__$1;(statearr_11751_11787[2] = inst_11704);
(statearr_11751_11787[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 23))
{var inst_11691 = (state_11714[13]);var inst_11695 = (state_11714[2]);var inst_11696 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11691);var state_11714__$1 = (function (){var statearr_11752 = state_11714;(statearr_11752[18] = inst_11695);
return statearr_11752;
})();var statearr_11753_11788 = state_11714__$1;(statearr_11753_11788[2] = inst_11696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11715 === 24))
{var inst_11693 = (state_11714[12]);var inst_11643 = (state_11714[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11714,23,Object,null,22);var inst_11700 = cljs.core.async.muxch_STAR_.call(null,inst_11693);var state_11714__$1 = state_11714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11714__$1,25,inst_11700,inst_11643);
} else
{if((state_val_11715 === 25))
{var inst_11702 = (state_11714[2]);var state_11714__$1 = state_11714;var statearr_11754_11789 = state_11714__$1;(statearr_11754_11789[2] = inst_11702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714__$1);
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
var state_machine__5709__auto____0 = (function (){var statearr_11758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11758[0] = state_machine__5709__auto__);
(statearr_11758[1] = 1);
return statearr_11758;
});
var state_machine__5709__auto____1 = (function (state_11714){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11759){if((e11759 instanceof Object))
{var ex__5712__auto__ = e11759;var statearr_11760_11790 = state_11714;(statearr_11760_11790[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11791 = state_11714;
state_11714 = G__11791;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11714){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11761 = f__5724__auto__.call(null);(statearr_11761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11762);
return statearr_11761;
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
,cljs.core.range.call(null,cnt));var c__5723__auto___11928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_11898){var state_val_11899 = (state_11898[1]);if((state_val_11899 === 1))
{var state_11898__$1 = state_11898;var statearr_11900_11929 = state_11898__$1;(statearr_11900_11929[2] = null);
(statearr_11900_11929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 2))
{var inst_11861 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11862 = 0;var state_11898__$1 = (function (){var statearr_11901 = state_11898;(statearr_11901[7] = inst_11862);
(statearr_11901[8] = inst_11861);
return statearr_11901;
})();var statearr_11902_11930 = state_11898__$1;(statearr_11902_11930[2] = null);
(statearr_11902_11930[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 3))
{var inst_11896 = (state_11898[2]);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11898__$1,inst_11896);
} else
{if((state_val_11899 === 4))
{var inst_11862 = (state_11898[7]);var inst_11864 = (inst_11862 < cnt);var state_11898__$1 = state_11898;if(cljs.core.truth_(inst_11864))
{var statearr_11903_11931 = state_11898__$1;(statearr_11903_11931[1] = 6);
} else
{var statearr_11904_11932 = state_11898__$1;(statearr_11904_11932[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 5))
{var inst_11882 = (state_11898[2]);var state_11898__$1 = (function (){var statearr_11905 = state_11898;(statearr_11905[9] = inst_11882);
return statearr_11905;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11898__$1,12,dchan);
} else
{if((state_val_11899 === 6))
{var state_11898__$1 = state_11898;var statearr_11906_11933 = state_11898__$1;(statearr_11906_11933[2] = null);
(statearr_11906_11933[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 7))
{var state_11898__$1 = state_11898;var statearr_11907_11934 = state_11898__$1;(statearr_11907_11934[2] = null);
(statearr_11907_11934[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 8))
{var inst_11880 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11908_11935 = state_11898__$1;(statearr_11908_11935[2] = inst_11880);
(statearr_11908_11935[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 9))
{var inst_11862 = (state_11898[7]);var inst_11875 = (state_11898[2]);var inst_11876 = (inst_11862 + 1);var inst_11862__$1 = inst_11876;var state_11898__$1 = (function (){var statearr_11909 = state_11898;(statearr_11909[7] = inst_11862__$1);
(statearr_11909[10] = inst_11875);
return statearr_11909;
})();var statearr_11910_11936 = state_11898__$1;(statearr_11910_11936[2] = null);
(statearr_11910_11936[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 10))
{var inst_11866 = (state_11898[2]);var inst_11867 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11898__$1 = (function (){var statearr_11911 = state_11898;(statearr_11911[11] = inst_11866);
return statearr_11911;
})();var statearr_11912_11937 = state_11898__$1;(statearr_11912_11937[2] = inst_11867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11898__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 11))
{var inst_11862 = (state_11898[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11898,10,Object,null,9);var inst_11871 = chs__$1.call(null,inst_11862);var inst_11872 = done.call(null,inst_11862);var inst_11873 = cljs.core.async.take_BANG_.call(null,inst_11871,inst_11872);var state_11898__$1 = state_11898;var statearr_11913_11938 = state_11898__$1;(statearr_11913_11938[2] = inst_11873);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11898__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 12))
{var inst_11884 = (state_11898[12]);var inst_11884__$1 = (state_11898[2]);var inst_11885 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11884__$1);var state_11898__$1 = (function (){var statearr_11914 = state_11898;(statearr_11914[12] = inst_11884__$1);
return statearr_11914;
})();if(cljs.core.truth_(inst_11885))
{var statearr_11915_11939 = state_11898__$1;(statearr_11915_11939[1] = 13);
} else
{var statearr_11916_11940 = state_11898__$1;(statearr_11916_11940[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 13))
{var inst_11887 = cljs.core.async.close_BANG_.call(null,out);var state_11898__$1 = state_11898;var statearr_11917_11941 = state_11898__$1;(statearr_11917_11941[2] = inst_11887);
(statearr_11917_11941[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 14))
{var inst_11884 = (state_11898[12]);var inst_11889 = cljs.core.apply.call(null,f,inst_11884);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11898__$1,16,out,inst_11889);
} else
{if((state_val_11899 === 15))
{var inst_11894 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11918_11942 = state_11898__$1;(statearr_11918_11942[2] = inst_11894);
(statearr_11918_11942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 16))
{var inst_11891 = (state_11898[2]);var state_11898__$1 = (function (){var statearr_11919 = state_11898;(statearr_11919[13] = inst_11891);
return statearr_11919;
})();var statearr_11920_11943 = state_11898__$1;(statearr_11920_11943[2] = null);
(statearr_11920_11943[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_11924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11924[0] = state_machine__5709__auto__);
(statearr_11924[1] = 1);
return statearr_11924;
});
var state_machine__5709__auto____1 = (function (state_11898){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_11898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e11925){if((e11925 instanceof Object))
{var ex__5712__auto__ = e11925;var statearr_11926_11944 = state_11898;(statearr_11926_11944[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11945 = state_11898;
state_11898 = G__11945;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_11898){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_11898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_11927 = f__5724__auto__.call(null);(statearr_11927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___11928);
return statearr_11927;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12029){var state_val_12030 = (state_12029[1]);if((state_val_12030 === 1))
{var inst_12000 = cljs.core.vec.call(null,chs);var inst_12001 = inst_12000;var state_12029__$1 = (function (){var statearr_12031 = state_12029;(statearr_12031[7] = inst_12001);
return statearr_12031;
})();var statearr_12032_12054 = state_12029__$1;(statearr_12032_12054[2] = null);
(statearr_12032_12054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 2))
{var inst_12001 = (state_12029[7]);var inst_12003 = cljs.core.count.call(null,inst_12001);var inst_12004 = (inst_12003 > 0);var state_12029__$1 = state_12029;if(cljs.core.truth_(inst_12004))
{var statearr_12033_12055 = state_12029__$1;(statearr_12033_12055[1] = 4);
} else
{var statearr_12034_12056 = state_12029__$1;(statearr_12034_12056[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 3))
{var inst_12027 = (state_12029[2]);var state_12029__$1 = state_12029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12029__$1,inst_12027);
} else
{if((state_val_12030 === 4))
{var inst_12001 = (state_12029[7]);var state_12029__$1 = state_12029;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12029__$1,7,inst_12001);
} else
{if((state_val_12030 === 5))
{var inst_12023 = cljs.core.async.close_BANG_.call(null,out);var state_12029__$1 = state_12029;var statearr_12035_12057 = state_12029__$1;(statearr_12035_12057[2] = inst_12023);
(statearr_12035_12057[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 6))
{var inst_12025 = (state_12029[2]);var state_12029__$1 = state_12029;var statearr_12036_12058 = state_12029__$1;(statearr_12036_12058[2] = inst_12025);
(statearr_12036_12058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 7))
{var inst_12008 = (state_12029[8]);var inst_12009 = (state_12029[9]);var inst_12008__$1 = (state_12029[2]);var inst_12009__$1 = cljs.core.nth.call(null,inst_12008__$1,0,null);var inst_12010 = cljs.core.nth.call(null,inst_12008__$1,1,null);var inst_12011 = (inst_12009__$1 == null);var state_12029__$1 = (function (){var statearr_12037 = state_12029;(statearr_12037[8] = inst_12008__$1);
(statearr_12037[9] = inst_12009__$1);
(statearr_12037[10] = inst_12010);
return statearr_12037;
})();if(cljs.core.truth_(inst_12011))
{var statearr_12038_12059 = state_12029__$1;(statearr_12038_12059[1] = 8);
} else
{var statearr_12039_12060 = state_12029__$1;(statearr_12039_12060[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 8))
{var inst_12001 = (state_12029[7]);var inst_12008 = (state_12029[8]);var inst_12009 = (state_12029[9]);var inst_12010 = (state_12029[10]);var inst_12013 = (function (){var c = inst_12010;var v = inst_12009;var vec__12006 = inst_12008;var cs = inst_12001;return ((function (c,v,vec__12006,cs,inst_12001,inst_12008,inst_12009,inst_12010,state_val_12030){
return (function (p1__11946_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11946_SHARP_);
});
;})(c,v,vec__12006,cs,inst_12001,inst_12008,inst_12009,inst_12010,state_val_12030))
})();var inst_12014 = cljs.core.filterv.call(null,inst_12013,inst_12001);var inst_12001__$1 = inst_12014;var state_12029__$1 = (function (){var statearr_12040 = state_12029;(statearr_12040[7] = inst_12001__$1);
return statearr_12040;
})();var statearr_12041_12061 = state_12029__$1;(statearr_12041_12061[2] = null);
(statearr_12041_12061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 9))
{var inst_12009 = (state_12029[9]);var state_12029__$1 = state_12029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12029__$1,11,out,inst_12009);
} else
{if((state_val_12030 === 10))
{var inst_12021 = (state_12029[2]);var state_12029__$1 = state_12029;var statearr_12043_12062 = state_12029__$1;(statearr_12043_12062[2] = inst_12021);
(statearr_12043_12062[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12030 === 11))
{var inst_12001 = (state_12029[7]);var inst_12018 = (state_12029[2]);var tmp12042 = inst_12001;var inst_12001__$1 = tmp12042;var state_12029__$1 = (function (){var statearr_12044 = state_12029;(statearr_12044[11] = inst_12018);
(statearr_12044[7] = inst_12001__$1);
return statearr_12044;
})();var statearr_12045_12063 = state_12029__$1;(statearr_12045_12063[2] = null);
(statearr_12045_12063[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_12049 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12049[0] = state_machine__5709__auto__);
(statearr_12049[1] = 1);
return statearr_12049;
});
var state_machine__5709__auto____1 = (function (state_12029){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12029);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12050){if((e12050 instanceof Object))
{var ex__5712__auto__ = e12050;var statearr_12051_12064 = state_12029;(statearr_12051_12064[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12029);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12065 = state_12029;
state_12029 = G__12065;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12029){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12052 = f__5724__auto__.call(null);(statearr_12052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12053);
return statearr_12052;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12135){var state_val_12136 = (state_12135[1]);if((state_val_12136 === 1))
{var inst_12112 = 0;var state_12135__$1 = (function (){var statearr_12137 = state_12135;(statearr_12137[7] = inst_12112);
return statearr_12137;
})();var statearr_12138_12159 = state_12135__$1;(statearr_12138_12159[2] = null);
(statearr_12138_12159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 2))
{var inst_12112 = (state_12135[7]);var inst_12114 = (inst_12112 < n);var state_12135__$1 = state_12135;if(cljs.core.truth_(inst_12114))
{var statearr_12139_12160 = state_12135__$1;(statearr_12139_12160[1] = 4);
} else
{var statearr_12140_12161 = state_12135__$1;(statearr_12140_12161[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 3))
{var inst_12132 = (state_12135[2]);var inst_12133 = cljs.core.async.close_BANG_.call(null,out);var state_12135__$1 = (function (){var statearr_12141 = state_12135;(statearr_12141[8] = inst_12132);
return statearr_12141;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12135__$1,inst_12133);
} else
{if((state_val_12136 === 4))
{var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12135__$1,7,ch);
} else
{if((state_val_12136 === 5))
{var state_12135__$1 = state_12135;var statearr_12142_12162 = state_12135__$1;(statearr_12142_12162[2] = null);
(statearr_12142_12162[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 6))
{var inst_12130 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12143_12163 = state_12135__$1;(statearr_12143_12163[2] = inst_12130);
(statearr_12143_12163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 7))
{var inst_12117 = (state_12135[9]);var inst_12117__$1 = (state_12135[2]);var inst_12118 = (inst_12117__$1 == null);var inst_12119 = cljs.core.not.call(null,inst_12118);var state_12135__$1 = (function (){var statearr_12144 = state_12135;(statearr_12144[9] = inst_12117__$1);
return statearr_12144;
})();if(inst_12119)
{var statearr_12145_12164 = state_12135__$1;(statearr_12145_12164[1] = 8);
} else
{var statearr_12146_12165 = state_12135__$1;(statearr_12146_12165[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 8))
{var inst_12117 = (state_12135[9]);var state_12135__$1 = state_12135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12135__$1,11,out,inst_12117);
} else
{if((state_val_12136 === 9))
{var state_12135__$1 = state_12135;var statearr_12147_12166 = state_12135__$1;(statearr_12147_12166[2] = null);
(statearr_12147_12166[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 10))
{var inst_12127 = (state_12135[2]);var state_12135__$1 = state_12135;var statearr_12148_12167 = state_12135__$1;(statearr_12148_12167[2] = inst_12127);
(statearr_12148_12167[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12136 === 11))
{var inst_12112 = (state_12135[7]);var inst_12122 = (state_12135[2]);var inst_12123 = (inst_12112 + 1);var inst_12112__$1 = inst_12123;var state_12135__$1 = (function (){var statearr_12149 = state_12135;(statearr_12149[7] = inst_12112__$1);
(statearr_12149[10] = inst_12122);
return statearr_12149;
})();var statearr_12150_12168 = state_12135__$1;(statearr_12150_12168[2] = null);
(statearr_12150_12168[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_12154 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12154[0] = state_machine__5709__auto__);
(statearr_12154[1] = 1);
return statearr_12154;
});
var state_machine__5709__auto____1 = (function (state_12135){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12155){if((e12155 instanceof Object))
{var ex__5712__auto__ = e12155;var statearr_12156_12169 = state_12135;(statearr_12156_12169[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12170 = state_12135;
state_12135 = G__12170;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12135){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12157 = f__5724__auto__.call(null);(statearr_12157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12158);
return statearr_12157;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12242){var state_val_12243 = (state_12242[1]);if((state_val_12243 === 1))
{var inst_12219 = null;var state_12242__$1 = (function (){var statearr_12244 = state_12242;(statearr_12244[7] = inst_12219);
return statearr_12244;
})();var statearr_12245_12268 = state_12242__$1;(statearr_12245_12268[2] = null);
(statearr_12245_12268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 2))
{var state_12242__$1 = state_12242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12242__$1,4,ch);
} else
{if((state_val_12243 === 3))
{var inst_12239 = (state_12242[2]);var inst_12240 = cljs.core.async.close_BANG_.call(null,out);var state_12242__$1 = (function (){var statearr_12246 = state_12242;(statearr_12246[8] = inst_12239);
return statearr_12246;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12242__$1,inst_12240);
} else
{if((state_val_12243 === 4))
{var inst_12222 = (state_12242[9]);var inst_12222__$1 = (state_12242[2]);var inst_12223 = (inst_12222__$1 == null);var inst_12224 = cljs.core.not.call(null,inst_12223);var state_12242__$1 = (function (){var statearr_12247 = state_12242;(statearr_12247[9] = inst_12222__$1);
return statearr_12247;
})();if(inst_12224)
{var statearr_12248_12269 = state_12242__$1;(statearr_12248_12269[1] = 5);
} else
{var statearr_12249_12270 = state_12242__$1;(statearr_12249_12270[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 5))
{var inst_12222 = (state_12242[9]);var inst_12219 = (state_12242[7]);var inst_12226 = cljs.core._EQ_.call(null,inst_12222,inst_12219);var state_12242__$1 = state_12242;if(inst_12226)
{var statearr_12250_12271 = state_12242__$1;(statearr_12250_12271[1] = 8);
} else
{var statearr_12251_12272 = state_12242__$1;(statearr_12251_12272[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 6))
{var state_12242__$1 = state_12242;var statearr_12253_12273 = state_12242__$1;(statearr_12253_12273[2] = null);
(statearr_12253_12273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 7))
{var inst_12237 = (state_12242[2]);var state_12242__$1 = state_12242;var statearr_12254_12274 = state_12242__$1;(statearr_12254_12274[2] = inst_12237);
(statearr_12254_12274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 8))
{var inst_12219 = (state_12242[7]);var tmp12252 = inst_12219;var inst_12219__$1 = tmp12252;var state_12242__$1 = (function (){var statearr_12255 = state_12242;(statearr_12255[7] = inst_12219__$1);
return statearr_12255;
})();var statearr_12256_12275 = state_12242__$1;(statearr_12256_12275[2] = null);
(statearr_12256_12275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 9))
{var inst_12222 = (state_12242[9]);var state_12242__$1 = state_12242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12242__$1,11,out,inst_12222);
} else
{if((state_val_12243 === 10))
{var inst_12234 = (state_12242[2]);var state_12242__$1 = state_12242;var statearr_12257_12276 = state_12242__$1;(statearr_12257_12276[2] = inst_12234);
(statearr_12257_12276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12243 === 11))
{var inst_12222 = (state_12242[9]);var inst_12231 = (state_12242[2]);var inst_12219 = inst_12222;var state_12242__$1 = (function (){var statearr_12258 = state_12242;(statearr_12258[10] = inst_12231);
(statearr_12258[7] = inst_12219);
return statearr_12258;
})();var statearr_12259_12277 = state_12242__$1;(statearr_12259_12277[2] = null);
(statearr_12259_12277[1] = 2);
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
var state_machine__5709__auto____0 = (function (){var statearr_12263 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12263[0] = state_machine__5709__auto__);
(statearr_12263[1] = 1);
return statearr_12263;
});
var state_machine__5709__auto____1 = (function (state_12242){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12242);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12264){if((e12264 instanceof Object))
{var ex__5712__auto__ = e12264;var statearr_12265_12278 = state_12242;(statearr_12265_12278[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12279 = state_12242;
state_12242 = G__12279;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12242){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12266 = f__5724__auto__.call(null);(statearr_12266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12267);
return statearr_12266;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12384){var state_val_12385 = (state_12384[1]);if((state_val_12385 === 1))
{var inst_12347 = (new Array(n));var inst_12348 = inst_12347;var inst_12349 = 0;var state_12384__$1 = (function (){var statearr_12386 = state_12384;(statearr_12386[7] = inst_12348);
(statearr_12386[8] = inst_12349);
return statearr_12386;
})();var statearr_12387_12415 = state_12384__$1;(statearr_12387_12415[2] = null);
(statearr_12387_12415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 2))
{var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12384__$1,4,ch);
} else
{if((state_val_12385 === 3))
{var inst_12382 = (state_12384[2]);var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12384__$1,inst_12382);
} else
{if((state_val_12385 === 4))
{var inst_12352 = (state_12384[9]);var inst_12352__$1 = (state_12384[2]);var inst_12353 = (inst_12352__$1 == null);var inst_12354 = cljs.core.not.call(null,inst_12353);var state_12384__$1 = (function (){var statearr_12388 = state_12384;(statearr_12388[9] = inst_12352__$1);
return statearr_12388;
})();if(inst_12354)
{var statearr_12389_12416 = state_12384__$1;(statearr_12389_12416[1] = 5);
} else
{var statearr_12390_12417 = state_12384__$1;(statearr_12390_12417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 5))
{var inst_12357 = (state_12384[10]);var inst_12348 = (state_12384[7]);var inst_12349 = (state_12384[8]);var inst_12352 = (state_12384[9]);var inst_12356 = (inst_12348[inst_12349] = inst_12352);var inst_12357__$1 = (inst_12349 + 1);var inst_12358 = (inst_12357__$1 < n);var state_12384__$1 = (function (){var statearr_12391 = state_12384;(statearr_12391[10] = inst_12357__$1);
(statearr_12391[11] = inst_12356);
return statearr_12391;
})();if(cljs.core.truth_(inst_12358))
{var statearr_12392_12418 = state_12384__$1;(statearr_12392_12418[1] = 8);
} else
{var statearr_12393_12419 = state_12384__$1;(statearr_12393_12419[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 6))
{var inst_12349 = (state_12384[8]);var inst_12370 = (inst_12349 > 0);var state_12384__$1 = state_12384;if(cljs.core.truth_(inst_12370))
{var statearr_12395_12420 = state_12384__$1;(statearr_12395_12420[1] = 12);
} else
{var statearr_12396_12421 = state_12384__$1;(statearr_12396_12421[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 7))
{var inst_12380 = (state_12384[2]);var state_12384__$1 = state_12384;var statearr_12397_12422 = state_12384__$1;(statearr_12397_12422[2] = inst_12380);
(statearr_12397_12422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 8))
{var inst_12357 = (state_12384[10]);var inst_12348 = (state_12384[7]);var tmp12394 = inst_12348;var inst_12348__$1 = tmp12394;var inst_12349 = inst_12357;var state_12384__$1 = (function (){var statearr_12398 = state_12384;(statearr_12398[7] = inst_12348__$1);
(statearr_12398[8] = inst_12349);
return statearr_12398;
})();var statearr_12399_12423 = state_12384__$1;(statearr_12399_12423[2] = null);
(statearr_12399_12423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 9))
{var inst_12348 = (state_12384[7]);var inst_12362 = cljs.core.vec.call(null,inst_12348);var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12384__$1,11,out,inst_12362);
} else
{if((state_val_12385 === 10))
{var inst_12368 = (state_12384[2]);var state_12384__$1 = state_12384;var statearr_12400_12424 = state_12384__$1;(statearr_12400_12424[2] = inst_12368);
(statearr_12400_12424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 11))
{var inst_12364 = (state_12384[2]);var inst_12365 = (new Array(n));var inst_12348 = inst_12365;var inst_12349 = 0;var state_12384__$1 = (function (){var statearr_12401 = state_12384;(statearr_12401[7] = inst_12348);
(statearr_12401[8] = inst_12349);
(statearr_12401[12] = inst_12364);
return statearr_12401;
})();var statearr_12402_12425 = state_12384__$1;(statearr_12402_12425[2] = null);
(statearr_12402_12425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 12))
{var inst_12348 = (state_12384[7]);var inst_12372 = cljs.core.vec.call(null,inst_12348);var state_12384__$1 = state_12384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12384__$1,15,out,inst_12372);
} else
{if((state_val_12385 === 13))
{var state_12384__$1 = state_12384;var statearr_12403_12426 = state_12384__$1;(statearr_12403_12426[2] = null);
(statearr_12403_12426[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 14))
{var inst_12377 = (state_12384[2]);var inst_12378 = cljs.core.async.close_BANG_.call(null,out);var state_12384__$1 = (function (){var statearr_12404 = state_12384;(statearr_12404[13] = inst_12377);
return statearr_12404;
})();var statearr_12405_12427 = state_12384__$1;(statearr_12405_12427[2] = inst_12378);
(statearr_12405_12427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12385 === 15))
{var inst_12374 = (state_12384[2]);var state_12384__$1 = state_12384;var statearr_12406_12428 = state_12384__$1;(statearr_12406_12428[2] = inst_12374);
(statearr_12406_12428[1] = 14);
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
var state_machine__5709__auto____0 = (function (){var statearr_12410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12410[0] = state_machine__5709__auto__);
(statearr_12410[1] = 1);
return statearr_12410;
});
var state_machine__5709__auto____1 = (function (state_12384){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12411){if((e12411 instanceof Object))
{var ex__5712__auto__ = e12411;var statearr_12412_12429 = state_12384;(statearr_12412_12429[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12430 = state_12384;
state_12384 = G__12430;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12384){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12413 = f__5724__auto__.call(null);(statearr_12413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12414);
return statearr_12413;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5723__auto___12573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5724__auto__ = (function (){var switch__5708__auto__ = (function (state_12543){var state_val_12544 = (state_12543[1]);if((state_val_12544 === 1))
{var inst_12502 = [];var inst_12503 = inst_12502;var inst_12504 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12543__$1 = (function (){var statearr_12545 = state_12543;(statearr_12545[7] = inst_12503);
(statearr_12545[8] = inst_12504);
return statearr_12545;
})();var statearr_12546_12574 = state_12543__$1;(statearr_12546_12574[2] = null);
(statearr_12546_12574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 2))
{var state_12543__$1 = state_12543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12543__$1,4,ch);
} else
{if((state_val_12544 === 3))
{var inst_12541 = (state_12543[2]);var state_12543__$1 = state_12543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12543__$1,inst_12541);
} else
{if((state_val_12544 === 4))
{var inst_12507 = (state_12543[9]);var inst_12507__$1 = (state_12543[2]);var inst_12508 = (inst_12507__$1 == null);var inst_12509 = cljs.core.not.call(null,inst_12508);var state_12543__$1 = (function (){var statearr_12547 = state_12543;(statearr_12547[9] = inst_12507__$1);
return statearr_12547;
})();if(inst_12509)
{var statearr_12548_12575 = state_12543__$1;(statearr_12548_12575[1] = 5);
} else
{var statearr_12549_12576 = state_12543__$1;(statearr_12549_12576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 5))
{var inst_12511 = (state_12543[10]);var inst_12504 = (state_12543[8]);var inst_12507 = (state_12543[9]);var inst_12511__$1 = f.call(null,inst_12507);var inst_12512 = cljs.core._EQ_.call(null,inst_12511__$1,inst_12504);var inst_12513 = cljs.core.keyword_identical_QMARK_.call(null,inst_12504,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12514 = (inst_12512) || (inst_12513);var state_12543__$1 = (function (){var statearr_12550 = state_12543;(statearr_12550[10] = inst_12511__$1);
return statearr_12550;
})();if(cljs.core.truth_(inst_12514))
{var statearr_12551_12577 = state_12543__$1;(statearr_12551_12577[1] = 8);
} else
{var statearr_12552_12578 = state_12543__$1;(statearr_12552_12578[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 6))
{var inst_12503 = (state_12543[7]);var inst_12528 = inst_12503.length;var inst_12529 = (inst_12528 > 0);var state_12543__$1 = state_12543;if(cljs.core.truth_(inst_12529))
{var statearr_12554_12579 = state_12543__$1;(statearr_12554_12579[1] = 12);
} else
{var statearr_12555_12580 = state_12543__$1;(statearr_12555_12580[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 7))
{var inst_12539 = (state_12543[2]);var state_12543__$1 = state_12543;var statearr_12556_12581 = state_12543__$1;(statearr_12556_12581[2] = inst_12539);
(statearr_12556_12581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 8))
{var inst_12511 = (state_12543[10]);var inst_12503 = (state_12543[7]);var inst_12507 = (state_12543[9]);var inst_12516 = inst_12503.push(inst_12507);var tmp12553 = inst_12503;var inst_12503__$1 = tmp12553;var inst_12504 = inst_12511;var state_12543__$1 = (function (){var statearr_12557 = state_12543;(statearr_12557[11] = inst_12516);
(statearr_12557[7] = inst_12503__$1);
(statearr_12557[8] = inst_12504);
return statearr_12557;
})();var statearr_12558_12582 = state_12543__$1;(statearr_12558_12582[2] = null);
(statearr_12558_12582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 9))
{var inst_12503 = (state_12543[7]);var inst_12519 = cljs.core.vec.call(null,inst_12503);var state_12543__$1 = state_12543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12543__$1,11,out,inst_12519);
} else
{if((state_val_12544 === 10))
{var inst_12526 = (state_12543[2]);var state_12543__$1 = state_12543;var statearr_12559_12583 = state_12543__$1;(statearr_12559_12583[2] = inst_12526);
(statearr_12559_12583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 11))
{var inst_12511 = (state_12543[10]);var inst_12507 = (state_12543[9]);var inst_12521 = (state_12543[2]);var inst_12522 = [];var inst_12523 = inst_12522.push(inst_12507);var inst_12503 = inst_12522;var inst_12504 = inst_12511;var state_12543__$1 = (function (){var statearr_12560 = state_12543;(statearr_12560[7] = inst_12503);
(statearr_12560[8] = inst_12504);
(statearr_12560[12] = inst_12523);
(statearr_12560[13] = inst_12521);
return statearr_12560;
})();var statearr_12561_12584 = state_12543__$1;(statearr_12561_12584[2] = null);
(statearr_12561_12584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 12))
{var inst_12503 = (state_12543[7]);var inst_12531 = cljs.core.vec.call(null,inst_12503);var state_12543__$1 = state_12543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12543__$1,15,out,inst_12531);
} else
{if((state_val_12544 === 13))
{var state_12543__$1 = state_12543;var statearr_12562_12585 = state_12543__$1;(statearr_12562_12585[2] = null);
(statearr_12562_12585[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 14))
{var inst_12536 = (state_12543[2]);var inst_12537 = cljs.core.async.close_BANG_.call(null,out);var state_12543__$1 = (function (){var statearr_12563 = state_12543;(statearr_12563[14] = inst_12536);
return statearr_12563;
})();var statearr_12564_12586 = state_12543__$1;(statearr_12564_12586[2] = inst_12537);
(statearr_12564_12586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12544 === 15))
{var inst_12533 = (state_12543[2]);var state_12543__$1 = state_12543;var statearr_12565_12587 = state_12543__$1;(statearr_12565_12587[2] = inst_12533);
(statearr_12565_12587[1] = 14);
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
var state_machine__5709__auto____0 = (function (){var statearr_12569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12569[0] = state_machine__5709__auto__);
(statearr_12569[1] = 1);
return statearr_12569;
});
var state_machine__5709__auto____1 = (function (state_12543){while(true){
var ret_value__5710__auto__ = (function (){try{while(true){
var result__5711__auto__ = switch__5708__auto__.call(null,state_12543);if(cljs.core.keyword_identical_QMARK_.call(null,result__5711__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5711__auto__;
}
break;
}
}catch (e12570){if((e12570 instanceof Object))
{var ex__5712__auto__ = e12570;var statearr_12571_12588 = state_12543;(statearr_12571_12588[5] = ex__5712__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5710__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12589 = state_12543;
state_12543 = G__12589;
continue;
}
} else
{return ret_value__5710__auto__;
}
break;
}
});
state_machine__5709__auto__ = function(state_12543){
switch(arguments.length){
case 0:
return state_machine__5709__auto____0.call(this);
case 1:
return state_machine__5709__auto____1.call(this,state_12543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5709__auto____0;
state_machine__5709__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5709__auto____1;
return state_machine__5709__auto__;
})()
;})(switch__5708__auto__))
})();var state__5725__auto__ = (function (){var statearr_12572 = f__5724__auto__.call(null);(statearr_12572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5723__auto___12573);
return statearr_12572;
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
