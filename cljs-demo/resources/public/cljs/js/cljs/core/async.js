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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13307 = (function (f,fn_handler,meta13308){
this.f = f;
this.fn_handler = fn_handler;
this.meta13308 = meta13308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13307.cljs$lang$type = true;
cljs.core.async.t13307.cljs$lang$ctorStr = "cljs.core.async/t13307";
cljs.core.async.t13307.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13307");
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13309){var self__ = this;
var _13309__$1 = this;return self__.meta13308;
});
cljs.core.async.t13307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13309,meta13308__$1){var self__ = this;
var _13309__$1 = this;return (new cljs.core.async.t13307(self__.f,self__.fn_handler,meta13308__$1));
});
cljs.core.async.__GT_t13307 = (function __GT_t13307(f__$1,fn_handler__$1,meta13308){return (new cljs.core.async.t13307(f__$1,fn_handler__$1,meta13308));
});
}
return (new cljs.core.async.t13307(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13311 = buff;if(G__13311)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13311.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13311);
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
{var val_13312 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13312);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13312);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___13313 = n;var x_13314 = 0;while(true){
if((x_13314 < n__4291__auto___13313))
{(a[x_13314] = 0);
{
var G__13315 = (x_13314 + 1);
x_13314 = G__13315;
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
var G__13316 = (i + 1);
i = G__13316;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13320 = (function (flag,alt_flag,meta13321){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13321 = meta13321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13320.cljs$lang$type = true;
cljs.core.async.t13320.cljs$lang$ctorStr = "cljs.core.async/t13320";
cljs.core.async.t13320.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13320");
});
cljs.core.async.t13320.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13322){var self__ = this;
var _13322__$1 = this;return self__.meta13321;
});
cljs.core.async.t13320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13322,meta13321__$1){var self__ = this;
var _13322__$1 = this;return (new cljs.core.async.t13320(self__.flag,self__.alt_flag,meta13321__$1));
});
cljs.core.async.__GT_t13320 = (function __GT_t13320(flag__$1,alt_flag__$1,meta13321){return (new cljs.core.async.t13320(flag__$1,alt_flag__$1,meta13321));
});
}
return (new cljs.core.async.t13320(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13326 = (function (cb,flag,alt_handler,meta13327){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13327 = meta13327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13326.cljs$lang$type = true;
cljs.core.async.t13326.cljs$lang$ctorStr = "cljs.core.async/t13326";
cljs.core.async.t13326.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13326");
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13328){var self__ = this;
var _13328__$1 = this;return self__.meta13327;
});
cljs.core.async.t13326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13328,meta13327__$1){var self__ = this;
var _13328__$1 = this;return (new cljs.core.async.t13326(self__.cb,self__.flag,self__.alt_handler,meta13327__$1));
});
cljs.core.async.__GT_t13326 = (function __GT_t13326(cb__$1,flag__$1,alt_handler__$1,meta13327){return (new cljs.core.async.t13326(cb__$1,flag__$1,alt_handler__$1,meta13327));
});
}
return (new cljs.core.async.t13326(cb,flag,alt_handler,null));
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
return (function (p1__13329_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13329_SHARP_,port], null));
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
var G__13330 = (i + 1);
i = G__13330;
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
var alts_BANG___delegate = function (ports,p__13331){var map__13333 = p__13331;var map__13333__$1 = ((cljs.core.seq_QMARK_.call(null,map__13333))?cljs.core.apply.call(null,cljs.core.hash_map,map__13333):map__13333);var opts = map__13333__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13331 = null;if (arguments.length > 1) {
  p__13331 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13331);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13334){
var ports = cljs.core.first(arglist__13334);
var p__13331 = cljs.core.rest(arglist__13334);
return alts_BANG___delegate(ports,p__13331);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13342 = (function (ch,f,map_LT_,meta13343){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13343 = meta13343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13342.cljs$lang$type = true;
cljs.core.async.t13342.cljs$lang$ctorStr = "cljs.core.async/t13342";
cljs.core.async.t13342.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13342");
});
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13345 = (function (fn1,_,meta13343,ch,f,map_LT_,meta13346){
this.fn1 = fn1;
this._ = _;
this.meta13343 = meta13343;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13346 = meta13346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13345.cljs$lang$type = true;
cljs.core.async.t13345.cljs$lang$ctorStr = "cljs.core.async/t13345";
cljs.core.async.t13345.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13345");
});
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13335_SHARP_){return f1.call(null,(((p1__13335_SHARP_ == null))?null:self__.f.call(null,p1__13335_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13347){var self__ = this;
var _13347__$1 = this;return self__.meta13346;
});
cljs.core.async.t13345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13347,meta13346__$1){var self__ = this;
var _13347__$1 = this;return (new cljs.core.async.t13345(self__.fn1,self__._,self__.meta13343,self__.ch,self__.f,self__.map_LT_,meta13346__$1));
});
cljs.core.async.__GT_t13345 = (function __GT_t13345(fn1__$1,___$2,meta13343__$1,ch__$2,f__$2,map_LT___$2,meta13346){return (new cljs.core.async.t13345(fn1__$1,___$2,meta13343__$1,ch__$2,f__$2,map_LT___$2,meta13346));
});
}
return (new cljs.core.async.t13345(fn1,___$1,self__.meta13343,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13344){var self__ = this;
var _13344__$1 = this;return self__.meta13343;
});
cljs.core.async.t13342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13344,meta13343__$1){var self__ = this;
var _13344__$1 = this;return (new cljs.core.async.t13342(self__.ch,self__.f,self__.map_LT_,meta13343__$1));
});
cljs.core.async.__GT_t13342 = (function __GT_t13342(ch__$1,f__$1,map_LT___$1,meta13343){return (new cljs.core.async.t13342(ch__$1,f__$1,map_LT___$1,meta13343));
});
}
return (new cljs.core.async.t13342(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13351 = (function (ch,f,map_GT_,meta13352){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13352 = meta13352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13351.cljs$lang$type = true;
cljs.core.async.t13351.cljs$lang$ctorStr = "cljs.core.async/t13351";
cljs.core.async.t13351.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13351");
});
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13353){var self__ = this;
var _13353__$1 = this;return self__.meta13352;
});
cljs.core.async.t13351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13353,meta13352__$1){var self__ = this;
var _13353__$1 = this;return (new cljs.core.async.t13351(self__.ch,self__.f,self__.map_GT_,meta13352__$1));
});
cljs.core.async.__GT_t13351 = (function __GT_t13351(ch__$1,f__$1,map_GT___$1,meta13352){return (new cljs.core.async.t13351(ch__$1,f__$1,map_GT___$1,meta13352));
});
}
return (new cljs.core.async.t13351(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13357 = (function (ch,p,filter_GT_,meta13358){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13358 = meta13358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13357.cljs$lang$type = true;
cljs.core.async.t13357.cljs$lang$ctorStr = "cljs.core.async/t13357";
cljs.core.async.t13357.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13357");
});
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13359){var self__ = this;
var _13359__$1 = this;return self__.meta13358;
});
cljs.core.async.t13357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13359,meta13358__$1){var self__ = this;
var _13359__$1 = this;return (new cljs.core.async.t13357(self__.ch,self__.p,self__.filter_GT_,meta13358__$1));
});
cljs.core.async.__GT_t13357 = (function __GT_t13357(ch__$1,p__$1,filter_GT___$1,meta13358){return (new cljs.core.async.t13357(ch__$1,p__$1,filter_GT___$1,meta13358));
});
}
return (new cljs.core.async.t13357(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___13442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13421){var state_val_13422 = (state_13421[1]);if((state_val_13422 === 1))
{var state_13421__$1 = state_13421;var statearr_13423_13443 = state_13421__$1;(statearr_13423_13443[2] = null);
(statearr_13423_13443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 2))
{var state_13421__$1 = state_13421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13421__$1,4,ch);
} else
{if((state_val_13422 === 3))
{var inst_13419 = (state_13421[2]);var state_13421__$1 = state_13421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13421__$1,inst_13419);
} else
{if((state_val_13422 === 4))
{var inst_13403 = (state_13421[7]);var inst_13403__$1 = (state_13421[2]);var inst_13404 = (inst_13403__$1 == null);var state_13421__$1 = (function (){var statearr_13424 = state_13421;(statearr_13424[7] = inst_13403__$1);
return statearr_13424;
})();if(cljs.core.truth_(inst_13404))
{var statearr_13425_13444 = state_13421__$1;(statearr_13425_13444[1] = 5);
} else
{var statearr_13426_13445 = state_13421__$1;(statearr_13426_13445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 5))
{var inst_13406 = cljs.core.async.close_BANG_.call(null,out);var state_13421__$1 = state_13421;var statearr_13427_13446 = state_13421__$1;(statearr_13427_13446[2] = inst_13406);
(statearr_13427_13446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 6))
{var inst_13403 = (state_13421[7]);var inst_13408 = p.call(null,inst_13403);var state_13421__$1 = state_13421;if(cljs.core.truth_(inst_13408))
{var statearr_13428_13447 = state_13421__$1;(statearr_13428_13447[1] = 8);
} else
{var statearr_13429_13448 = state_13421__$1;(statearr_13429_13448[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 7))
{var inst_13417 = (state_13421[2]);var state_13421__$1 = state_13421;var statearr_13430_13449 = state_13421__$1;(statearr_13430_13449[2] = inst_13417);
(statearr_13430_13449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 8))
{var inst_13403 = (state_13421[7]);var state_13421__$1 = state_13421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13421__$1,11,out,inst_13403);
} else
{if((state_val_13422 === 9))
{var state_13421__$1 = state_13421;var statearr_13431_13450 = state_13421__$1;(statearr_13431_13450[2] = null);
(statearr_13431_13450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 10))
{var inst_13414 = (state_13421[2]);var state_13421__$1 = (function (){var statearr_13432 = state_13421;(statearr_13432[8] = inst_13414);
return statearr_13432;
})();var statearr_13433_13451 = state_13421__$1;(statearr_13433_13451[2] = null);
(statearr_13433_13451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13422 === 11))
{var inst_13411 = (state_13421[2]);var state_13421__$1 = state_13421;var statearr_13434_13452 = state_13421__$1;(statearr_13434_13452[2] = inst_13411);
(statearr_13434_13452[1] = 10);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_13438 = [null,null,null,null,null,null,null,null,null];(statearr_13438[0] = state_machine__8689__auto__);
(statearr_13438[1] = 1);
return statearr_13438;
});
var state_machine__8689__auto____1 = (function (state_13421){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13421);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e13439){if((e13439 instanceof Object))
{var ex__8692__auto__ = e13439;var statearr_13440_13453 = state_13421;(statearr_13440_13453[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13454 = state_13421;
state_13421 = G__13454;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13421){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_13441 = f__8704__auto__.call(null);(statearr_13441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___13442);
return statearr_13441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13606){var state_val_13607 = (state_13606[1]);if((state_val_13607 === 1))
{var state_13606__$1 = state_13606;var statearr_13608_13645 = state_13606__$1;(statearr_13608_13645[2] = null);
(statearr_13608_13645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 2))
{var state_13606__$1 = state_13606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13606__$1,4,in$);
} else
{if((state_val_13607 === 3))
{var inst_13604 = (state_13606[2]);var state_13606__$1 = state_13606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13606__$1,inst_13604);
} else
{if((state_val_13607 === 4))
{var inst_13552 = (state_13606[7]);var inst_13552__$1 = (state_13606[2]);var inst_13553 = (inst_13552__$1 == null);var state_13606__$1 = (function (){var statearr_13609 = state_13606;(statearr_13609[7] = inst_13552__$1);
return statearr_13609;
})();if(cljs.core.truth_(inst_13553))
{var statearr_13610_13646 = state_13606__$1;(statearr_13610_13646[1] = 5);
} else
{var statearr_13611_13647 = state_13606__$1;(statearr_13611_13647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 5))
{var inst_13555 = cljs.core.async.close_BANG_.call(null,out);var state_13606__$1 = state_13606;var statearr_13612_13648 = state_13606__$1;(statearr_13612_13648[2] = inst_13555);
(statearr_13612_13648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 6))
{var inst_13552 = (state_13606[7]);var inst_13557 = f.call(null,inst_13552);var inst_13562 = cljs.core.seq.call(null,inst_13557);var inst_13563 = inst_13562;var inst_13564 = null;var inst_13565 = 0;var inst_13566 = 0;var state_13606__$1 = (function (){var statearr_13613 = state_13606;(statearr_13613[8] = inst_13566);
(statearr_13613[9] = inst_13565);
(statearr_13613[10] = inst_13564);
(statearr_13613[11] = inst_13563);
return statearr_13613;
})();var statearr_13614_13649 = state_13606__$1;(statearr_13614_13649[2] = null);
(statearr_13614_13649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 7))
{var inst_13602 = (state_13606[2]);var state_13606__$1 = state_13606;var statearr_13615_13650 = state_13606__$1;(statearr_13615_13650[2] = inst_13602);
(statearr_13615_13650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 8))
{var inst_13566 = (state_13606[8]);var inst_13565 = (state_13606[9]);var inst_13568 = (inst_13566 < inst_13565);var inst_13569 = inst_13568;var state_13606__$1 = state_13606;if(cljs.core.truth_(inst_13569))
{var statearr_13616_13651 = state_13606__$1;(statearr_13616_13651[1] = 10);
} else
{var statearr_13617_13652 = state_13606__$1;(statearr_13617_13652[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 9))
{var inst_13599 = (state_13606[2]);var state_13606__$1 = (function (){var statearr_13618 = state_13606;(statearr_13618[12] = inst_13599);
return statearr_13618;
})();var statearr_13619_13653 = state_13606__$1;(statearr_13619_13653[2] = null);
(statearr_13619_13653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 10))
{var inst_13566 = (state_13606[8]);var inst_13564 = (state_13606[10]);var inst_13571 = cljs.core._nth.call(null,inst_13564,inst_13566);var state_13606__$1 = state_13606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13606__$1,13,out,inst_13571);
} else
{if((state_val_13607 === 11))
{var inst_13563 = (state_13606[11]);var inst_13577 = (state_13606[13]);var inst_13577__$1 = cljs.core.seq.call(null,inst_13563);var state_13606__$1 = (function (){var statearr_13623 = state_13606;(statearr_13623[13] = inst_13577__$1);
return statearr_13623;
})();if(inst_13577__$1)
{var statearr_13624_13654 = state_13606__$1;(statearr_13624_13654[1] = 14);
} else
{var statearr_13625_13655 = state_13606__$1;(statearr_13625_13655[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 12))
{var inst_13597 = (state_13606[2]);var state_13606__$1 = state_13606;var statearr_13626_13656 = state_13606__$1;(statearr_13626_13656[2] = inst_13597);
(statearr_13626_13656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 13))
{var inst_13566 = (state_13606[8]);var inst_13565 = (state_13606[9]);var inst_13564 = (state_13606[10]);var inst_13563 = (state_13606[11]);var inst_13573 = (state_13606[2]);var inst_13574 = (inst_13566 + 1);var tmp13620 = inst_13565;var tmp13621 = inst_13564;var tmp13622 = inst_13563;var inst_13563__$1 = tmp13622;var inst_13564__$1 = tmp13621;var inst_13565__$1 = tmp13620;var inst_13566__$1 = inst_13574;var state_13606__$1 = (function (){var statearr_13627 = state_13606;(statearr_13627[8] = inst_13566__$1);
(statearr_13627[9] = inst_13565__$1);
(statearr_13627[10] = inst_13564__$1);
(statearr_13627[11] = inst_13563__$1);
(statearr_13627[14] = inst_13573);
return statearr_13627;
})();var statearr_13628_13657 = state_13606__$1;(statearr_13628_13657[2] = null);
(statearr_13628_13657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 14))
{var inst_13577 = (state_13606[13]);var inst_13579 = cljs.core.chunked_seq_QMARK_.call(null,inst_13577);var state_13606__$1 = state_13606;if(inst_13579)
{var statearr_13629_13658 = state_13606__$1;(statearr_13629_13658[1] = 17);
} else
{var statearr_13630_13659 = state_13606__$1;(statearr_13630_13659[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 15))
{var state_13606__$1 = state_13606;var statearr_13631_13660 = state_13606__$1;(statearr_13631_13660[2] = null);
(statearr_13631_13660[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 16))
{var inst_13595 = (state_13606[2]);var state_13606__$1 = state_13606;var statearr_13632_13661 = state_13606__$1;(statearr_13632_13661[2] = inst_13595);
(statearr_13632_13661[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 17))
{var inst_13577 = (state_13606[13]);var inst_13581 = cljs.core.chunk_first.call(null,inst_13577);var inst_13582 = cljs.core.chunk_rest.call(null,inst_13577);var inst_13583 = cljs.core.count.call(null,inst_13581);var inst_13563 = inst_13582;var inst_13564 = inst_13581;var inst_13565 = inst_13583;var inst_13566 = 0;var state_13606__$1 = (function (){var statearr_13633 = state_13606;(statearr_13633[8] = inst_13566);
(statearr_13633[9] = inst_13565);
(statearr_13633[10] = inst_13564);
(statearr_13633[11] = inst_13563);
return statearr_13633;
})();var statearr_13634_13662 = state_13606__$1;(statearr_13634_13662[2] = null);
(statearr_13634_13662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 18))
{var inst_13577 = (state_13606[13]);var inst_13586 = cljs.core.first.call(null,inst_13577);var state_13606__$1 = state_13606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13606__$1,20,out,inst_13586);
} else
{if((state_val_13607 === 19))
{var inst_13592 = (state_13606[2]);var state_13606__$1 = state_13606;var statearr_13635_13663 = state_13606__$1;(statearr_13635_13663[2] = inst_13592);
(statearr_13635_13663[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13607 === 20))
{var inst_13577 = (state_13606[13]);var inst_13588 = (state_13606[2]);var inst_13589 = cljs.core.next.call(null,inst_13577);var inst_13563 = inst_13589;var inst_13564 = null;var inst_13565 = 0;var inst_13566 = 0;var state_13606__$1 = (function (){var statearr_13636 = state_13606;(statearr_13636[8] = inst_13566);
(statearr_13636[9] = inst_13565);
(statearr_13636[10] = inst_13564);
(statearr_13636[11] = inst_13563);
(statearr_13636[15] = inst_13588);
return statearr_13636;
})();var statearr_13637_13664 = state_13606__$1;(statearr_13637_13664[2] = null);
(statearr_13637_13664[1] = 8);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_13641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13641[0] = state_machine__8689__auto__);
(statearr_13641[1] = 1);
return statearr_13641;
});
var state_machine__8689__auto____1 = (function (state_13606){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13606);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e13642){if((e13642 instanceof Object))
{var ex__8692__auto__ = e13642;var statearr_13643_13665 = state_13606;(statearr_13643_13665[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13666 = state_13606;
state_13606 = G__13666;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13606){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_13644 = f__8704__auto__.call(null);(statearr_13644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_13644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8703__auto___13747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13726){var state_val_13727 = (state_13726[1]);if((state_val_13727 === 1))
{var state_13726__$1 = state_13726;var statearr_13728_13748 = state_13726__$1;(statearr_13728_13748[2] = null);
(statearr_13728_13748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 2))
{var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13726__$1,4,from);
} else
{if((state_val_13727 === 3))
{var inst_13724 = (state_13726[2]);var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13726__$1,inst_13724);
} else
{if((state_val_13727 === 4))
{var inst_13709 = (state_13726[7]);var inst_13709__$1 = (state_13726[2]);var inst_13710 = (inst_13709__$1 == null);var state_13726__$1 = (function (){var statearr_13729 = state_13726;(statearr_13729[7] = inst_13709__$1);
return statearr_13729;
})();if(cljs.core.truth_(inst_13710))
{var statearr_13730_13749 = state_13726__$1;(statearr_13730_13749[1] = 5);
} else
{var statearr_13731_13750 = state_13726__$1;(statearr_13731_13750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 5))
{var state_13726__$1 = state_13726;if(cljs.core.truth_(close_QMARK_))
{var statearr_13732_13751 = state_13726__$1;(statearr_13732_13751[1] = 8);
} else
{var statearr_13733_13752 = state_13726__$1;(statearr_13733_13752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 6))
{var inst_13709 = (state_13726[7]);var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13726__$1,11,to,inst_13709);
} else
{if((state_val_13727 === 7))
{var inst_13722 = (state_13726[2]);var state_13726__$1 = state_13726;var statearr_13734_13753 = state_13726__$1;(statearr_13734_13753[2] = inst_13722);
(statearr_13734_13753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 8))
{var inst_13713 = cljs.core.async.close_BANG_.call(null,to);var state_13726__$1 = state_13726;var statearr_13735_13754 = state_13726__$1;(statearr_13735_13754[2] = inst_13713);
(statearr_13735_13754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 9))
{var state_13726__$1 = state_13726;var statearr_13736_13755 = state_13726__$1;(statearr_13736_13755[2] = null);
(statearr_13736_13755[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 10))
{var inst_13716 = (state_13726[2]);var state_13726__$1 = state_13726;var statearr_13737_13756 = state_13726__$1;(statearr_13737_13756[2] = inst_13716);
(statearr_13737_13756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 11))
{var inst_13719 = (state_13726[2]);var state_13726__$1 = (function (){var statearr_13738 = state_13726;(statearr_13738[8] = inst_13719);
return statearr_13738;
})();var statearr_13739_13757 = state_13726__$1;(statearr_13739_13757[2] = null);
(statearr_13739_13757[1] = 2);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_13743 = [null,null,null,null,null,null,null,null,null];(statearr_13743[0] = state_machine__8689__auto__);
(statearr_13743[1] = 1);
return statearr_13743;
});
var state_machine__8689__auto____1 = (function (state_13726){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13726);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e13744){if((e13744 instanceof Object))
{var ex__8692__auto__ = e13744;var statearr_13745_13758 = state_13726;(statearr_13745_13758[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13759 = state_13726;
state_13726 = G__13759;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13726){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_13746 = f__8704__auto__.call(null);(statearr_13746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___13747);
return statearr_13746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8703__auto___13846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13824){var state_val_13825 = (state_13824[1]);if((state_val_13825 === 1))
{var state_13824__$1 = state_13824;var statearr_13826_13847 = state_13824__$1;(statearr_13826_13847[2] = null);
(statearr_13826_13847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 2))
{var state_13824__$1 = state_13824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13824__$1,4,ch);
} else
{if((state_val_13825 === 3))
{var inst_13822 = (state_13824[2]);var state_13824__$1 = state_13824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13824__$1,inst_13822);
} else
{if((state_val_13825 === 4))
{var inst_13805 = (state_13824[7]);var inst_13805__$1 = (state_13824[2]);var inst_13806 = (inst_13805__$1 == null);var state_13824__$1 = (function (){var statearr_13827 = state_13824;(statearr_13827[7] = inst_13805__$1);
return statearr_13827;
})();if(cljs.core.truth_(inst_13806))
{var statearr_13828_13848 = state_13824__$1;(statearr_13828_13848[1] = 5);
} else
{var statearr_13829_13849 = state_13824__$1;(statearr_13829_13849[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 5))
{var inst_13808 = cljs.core.async.close_BANG_.call(null,tc);var inst_13809 = cljs.core.async.close_BANG_.call(null,fc);var state_13824__$1 = (function (){var statearr_13830 = state_13824;(statearr_13830[8] = inst_13808);
return statearr_13830;
})();var statearr_13831_13850 = state_13824__$1;(statearr_13831_13850[2] = inst_13809);
(statearr_13831_13850[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 6))
{var inst_13805 = (state_13824[7]);var inst_13811 = p.call(null,inst_13805);var state_13824__$1 = state_13824;if(cljs.core.truth_(inst_13811))
{var statearr_13832_13851 = state_13824__$1;(statearr_13832_13851[1] = 9);
} else
{var statearr_13833_13852 = state_13824__$1;(statearr_13833_13852[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 7))
{var inst_13820 = (state_13824[2]);var state_13824__$1 = state_13824;var statearr_13834_13853 = state_13824__$1;(statearr_13834_13853[2] = inst_13820);
(statearr_13834_13853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 8))
{var inst_13817 = (state_13824[2]);var state_13824__$1 = (function (){var statearr_13835 = state_13824;(statearr_13835[9] = inst_13817);
return statearr_13835;
})();var statearr_13836_13854 = state_13824__$1;(statearr_13836_13854[2] = null);
(statearr_13836_13854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 9))
{var state_13824__$1 = state_13824;var statearr_13837_13855 = state_13824__$1;(statearr_13837_13855[2] = tc);
(statearr_13837_13855[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 10))
{var state_13824__$1 = state_13824;var statearr_13838_13856 = state_13824__$1;(statearr_13838_13856[2] = fc);
(statearr_13838_13856[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 11))
{var inst_13805 = (state_13824[7]);var inst_13815 = (state_13824[2]);var state_13824__$1 = state_13824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13824__$1,8,inst_13815,inst_13805);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_13842 = [null,null,null,null,null,null,null,null,null,null];(statearr_13842[0] = state_machine__8689__auto__);
(statearr_13842[1] = 1);
return statearr_13842;
});
var state_machine__8689__auto____1 = (function (state_13824){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13824);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e13843){if((e13843 instanceof Object))
{var ex__8692__auto__ = e13843;var statearr_13844_13857 = state_13824;(statearr_13844_13857[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13858 = state_13824;
state_13824 = G__13858;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13824){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_13845 = f__8704__auto__.call(null);(statearr_13845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___13846);
return statearr_13845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13905){var state_val_13906 = (state_13905[1]);if((state_val_13906 === 7))
{var inst_13901 = (state_13905[2]);var state_13905__$1 = state_13905;var statearr_13907_13923 = state_13905__$1;(statearr_13907_13923[2] = inst_13901);
(statearr_13907_13923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 6))
{var inst_13891 = (state_13905[7]);var inst_13894 = (state_13905[8]);var inst_13898 = f.call(null,inst_13891,inst_13894);var inst_13891__$1 = inst_13898;var state_13905__$1 = (function (){var statearr_13908 = state_13905;(statearr_13908[7] = inst_13891__$1);
return statearr_13908;
})();var statearr_13909_13924 = state_13905__$1;(statearr_13909_13924[2] = null);
(statearr_13909_13924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 5))
{var inst_13891 = (state_13905[7]);var state_13905__$1 = state_13905;var statearr_13910_13925 = state_13905__$1;(statearr_13910_13925[2] = inst_13891);
(statearr_13910_13925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 4))
{var inst_13894 = (state_13905[8]);var inst_13894__$1 = (state_13905[2]);var inst_13895 = (inst_13894__$1 == null);var state_13905__$1 = (function (){var statearr_13911 = state_13905;(statearr_13911[8] = inst_13894__$1);
return statearr_13911;
})();if(cljs.core.truth_(inst_13895))
{var statearr_13912_13926 = state_13905__$1;(statearr_13912_13926[1] = 5);
} else
{var statearr_13913_13927 = state_13905__$1;(statearr_13913_13927[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13906 === 3))
{var inst_13903 = (state_13905[2]);var state_13905__$1 = state_13905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13905__$1,inst_13903);
} else
{if((state_val_13906 === 2))
{var state_13905__$1 = state_13905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13905__$1,4,ch);
} else
{if((state_val_13906 === 1))
{var inst_13891 = init;var state_13905__$1 = (function (){var statearr_13914 = state_13905;(statearr_13914[7] = inst_13891);
return statearr_13914;
})();var statearr_13915_13928 = state_13905__$1;(statearr_13915_13928[2] = null);
(statearr_13915_13928[1] = 2);
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
var state_machine__8689__auto____0 = (function (){var statearr_13919 = [null,null,null,null,null,null,null,null,null];(statearr_13919[0] = state_machine__8689__auto__);
(statearr_13919[1] = 1);
return statearr_13919;
});
var state_machine__8689__auto____1 = (function (state_13905){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13905);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e13920){if((e13920 instanceof Object))
{var ex__8692__auto__ = e13920;var statearr_13921_13929 = state_13905;(statearr_13921_13929[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13930 = state_13905;
state_13905 = G__13930;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13905){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_13922 = f__8704__auto__.call(null);(statearr_13922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_13922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8703__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_13992){var state_val_13993 = (state_13992[1]);if((state_val_13993 === 1))
{var inst_13972 = cljs.core.seq.call(null,coll);var inst_13973 = inst_13972;var state_13992__$1 = (function (){var statearr_13994 = state_13992;(statearr_13994[7] = inst_13973);
return statearr_13994;
})();var statearr_13995_14013 = state_13992__$1;(statearr_13995_14013[2] = null);
(statearr_13995_14013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 2))
{var inst_13973 = (state_13992[7]);var state_13992__$1 = state_13992;if(cljs.core.truth_(inst_13973))
{var statearr_13996_14014 = state_13992__$1;(statearr_13996_14014[1] = 4);
} else
{var statearr_13997_14015 = state_13992__$1;(statearr_13997_14015[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 3))
{var inst_13990 = (state_13992[2]);var state_13992__$1 = state_13992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13992__$1,inst_13990);
} else
{if((state_val_13993 === 4))
{var inst_13973 = (state_13992[7]);var inst_13976 = cljs.core.first.call(null,inst_13973);var state_13992__$1 = state_13992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13992__$1,7,ch,inst_13976);
} else
{if((state_val_13993 === 5))
{var state_13992__$1 = state_13992;if(cljs.core.truth_(close_QMARK_))
{var statearr_13998_14016 = state_13992__$1;(statearr_13998_14016[1] = 8);
} else
{var statearr_13999_14017 = state_13992__$1;(statearr_13999_14017[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 6))
{var inst_13988 = (state_13992[2]);var state_13992__$1 = state_13992;var statearr_14000_14018 = state_13992__$1;(statearr_14000_14018[2] = inst_13988);
(statearr_14000_14018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 7))
{var inst_13973 = (state_13992[7]);var inst_13978 = (state_13992[2]);var inst_13979 = cljs.core.next.call(null,inst_13973);var inst_13973__$1 = inst_13979;var state_13992__$1 = (function (){var statearr_14001 = state_13992;(statearr_14001[8] = inst_13978);
(statearr_14001[7] = inst_13973__$1);
return statearr_14001;
})();var statearr_14002_14019 = state_13992__$1;(statearr_14002_14019[2] = null);
(statearr_14002_14019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 8))
{var inst_13983 = cljs.core.async.close_BANG_.call(null,ch);var state_13992__$1 = state_13992;var statearr_14003_14020 = state_13992__$1;(statearr_14003_14020[2] = inst_13983);
(statearr_14003_14020[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 9))
{var state_13992__$1 = state_13992;var statearr_14004_14021 = state_13992__$1;(statearr_14004_14021[2] = null);
(statearr_14004_14021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 10))
{var inst_13986 = (state_13992[2]);var state_13992__$1 = state_13992;var statearr_14005_14022 = state_13992__$1;(statearr_14005_14022[2] = inst_13986);
(statearr_14005_14022[1] = 6);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_14009 = [null,null,null,null,null,null,null,null,null];(statearr_14009[0] = state_machine__8689__auto__);
(statearr_14009[1] = 1);
return statearr_14009;
});
var state_machine__8689__auto____1 = (function (state_13992){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_13992);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e14010){if((e14010 instanceof Object))
{var ex__8692__auto__ = e14010;var statearr_14011_14023 = state_13992;(statearr_14011_14023[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14024 = state_13992;
state_13992 = G__14024;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_14012 = f__8704__auto__.call(null);(statearr_14012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto__);
return statearr_14012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
}));
return c__8703__auto__;
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
cljs.core.async.Mux = (function (){var obj14026 = {};return obj14026;
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
cljs.core.async.Mult = (function (){var obj14028 = {};return obj14028;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14252 = (function (cs,ch,mult,meta14253){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14253 = meta14253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14252.cljs$lang$type = true;
cljs.core.async.t14252.cljs$lang$ctorStr = "cljs.core.async/t14252";
cljs.core.async.t14252.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14252");
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14252.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14254){var self__ = this;
var _14254__$1 = this;return self__.meta14253;
});})(cs))
;
cljs.core.async.t14252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14254,meta14253__$1){var self__ = this;
var _14254__$1 = this;return (new cljs.core.async.t14252(self__.cs,self__.ch,self__.mult,meta14253__$1));
});})(cs))
;
cljs.core.async.__GT_t14252 = ((function (cs){
return (function __GT_t14252(cs__$1,ch__$1,mult__$1,meta14253){return (new cljs.core.async.t14252(cs__$1,ch__$1,mult__$1,meta14253));
});})(cs))
;
}
return (new cljs.core.async.t14252(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8703__auto___14475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_14389){var state_val_14390 = (state_14389[1]);if((state_val_14390 === 32))
{var inst_14257 = (state_14389[7]);var inst_14333 = (state_14389[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14389,31,Object,null,30);var inst_14340 = cljs.core.async.put_BANG_.call(null,inst_14333,inst_14257,done);var state_14389__$1 = state_14389;var statearr_14391_14476 = state_14389__$1;(statearr_14391_14476[2] = inst_14340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 1))
{var state_14389__$1 = state_14389;var statearr_14392_14477 = state_14389__$1;(statearr_14392_14477[2] = null);
(statearr_14392_14477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 33))
{var inst_14346 = (state_14389[9]);var inst_14348 = cljs.core.chunked_seq_QMARK_.call(null,inst_14346);var state_14389__$1 = state_14389;if(inst_14348)
{var statearr_14393_14478 = state_14389__$1;(statearr_14393_14478[1] = 36);
} else
{var statearr_14394_14479 = state_14389__$1;(statearr_14394_14479[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 2))
{var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14389__$1,4,ch);
} else
{if((state_val_14390 === 34))
{var state_14389__$1 = state_14389;var statearr_14395_14480 = state_14389__$1;(statearr_14395_14480[2] = null);
(statearr_14395_14480[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 3))
{var inst_14387 = (state_14389[2]);var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14389__$1,inst_14387);
} else
{if((state_val_14390 === 35))
{var inst_14371 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14396_14481 = state_14389__$1;(statearr_14396_14481[2] = inst_14371);
(statearr_14396_14481[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 4))
{var inst_14257 = (state_14389[7]);var inst_14257__$1 = (state_14389[2]);var inst_14258 = (inst_14257__$1 == null);var state_14389__$1 = (function (){var statearr_14397 = state_14389;(statearr_14397[7] = inst_14257__$1);
return statearr_14397;
})();if(cljs.core.truth_(inst_14258))
{var statearr_14398_14482 = state_14389__$1;(statearr_14398_14482[1] = 5);
} else
{var statearr_14399_14483 = state_14389__$1;(statearr_14399_14483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 36))
{var inst_14346 = (state_14389[9]);var inst_14350 = cljs.core.chunk_first.call(null,inst_14346);var inst_14351 = cljs.core.chunk_rest.call(null,inst_14346);var inst_14352 = cljs.core.count.call(null,inst_14350);var inst_14325 = inst_14351;var inst_14326 = inst_14350;var inst_14327 = inst_14352;var inst_14328 = 0;var state_14389__$1 = (function (){var statearr_14400 = state_14389;(statearr_14400[10] = inst_14327);
(statearr_14400[11] = inst_14328);
(statearr_14400[12] = inst_14326);
(statearr_14400[13] = inst_14325);
return statearr_14400;
})();var statearr_14401_14484 = state_14389__$1;(statearr_14401_14484[2] = null);
(statearr_14401_14484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 5))
{var inst_14264 = cljs.core.deref.call(null,cs);var inst_14265 = cljs.core.seq.call(null,inst_14264);var inst_14266 = inst_14265;var inst_14267 = null;var inst_14268 = 0;var inst_14269 = 0;var state_14389__$1 = (function (){var statearr_14402 = state_14389;(statearr_14402[14] = inst_14266);
(statearr_14402[15] = inst_14267);
(statearr_14402[16] = inst_14269);
(statearr_14402[17] = inst_14268);
return statearr_14402;
})();var statearr_14403_14485 = state_14389__$1;(statearr_14403_14485[2] = null);
(statearr_14403_14485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 37))
{var inst_14346 = (state_14389[9]);var inst_14355 = cljs.core.first.call(null,inst_14346);var state_14389__$1 = (function (){var statearr_14404 = state_14389;(statearr_14404[18] = inst_14355);
return statearr_14404;
})();var statearr_14405_14486 = state_14389__$1;(statearr_14405_14486[2] = null);
(statearr_14405_14486[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 6))
{var inst_14317 = (state_14389[19]);var inst_14316 = cljs.core.deref.call(null,cs);var inst_14317__$1 = cljs.core.keys.call(null,inst_14316);var inst_14318 = cljs.core.count.call(null,inst_14317__$1);var inst_14319 = cljs.core.reset_BANG_.call(null,dctr,inst_14318);var inst_14324 = cljs.core.seq.call(null,inst_14317__$1);var inst_14325 = inst_14324;var inst_14326 = null;var inst_14327 = 0;var inst_14328 = 0;var state_14389__$1 = (function (){var statearr_14406 = state_14389;(statearr_14406[10] = inst_14327);
(statearr_14406[11] = inst_14328);
(statearr_14406[12] = inst_14326);
(statearr_14406[13] = inst_14325);
(statearr_14406[19] = inst_14317__$1);
(statearr_14406[20] = inst_14319);
return statearr_14406;
})();var statearr_14407_14487 = state_14389__$1;(statearr_14407_14487[2] = null);
(statearr_14407_14487[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 38))
{var inst_14368 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14408_14488 = state_14389__$1;(statearr_14408_14488[2] = inst_14368);
(statearr_14408_14488[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 7))
{var inst_14385 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14409_14489 = state_14389__$1;(statearr_14409_14489[2] = inst_14385);
(statearr_14409_14489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 39))
{var inst_14346 = (state_14389[9]);var inst_14364 = (state_14389[2]);var inst_14365 = cljs.core.next.call(null,inst_14346);var inst_14325 = inst_14365;var inst_14326 = null;var inst_14327 = 0;var inst_14328 = 0;var state_14389__$1 = (function (){var statearr_14410 = state_14389;(statearr_14410[21] = inst_14364);
(statearr_14410[10] = inst_14327);
(statearr_14410[11] = inst_14328);
(statearr_14410[12] = inst_14326);
(statearr_14410[13] = inst_14325);
return statearr_14410;
})();var statearr_14411_14490 = state_14389__$1;(statearr_14411_14490[2] = null);
(statearr_14411_14490[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 8))
{var inst_14269 = (state_14389[16]);var inst_14268 = (state_14389[17]);var inst_14271 = (inst_14269 < inst_14268);var inst_14272 = inst_14271;var state_14389__$1 = state_14389;if(cljs.core.truth_(inst_14272))
{var statearr_14412_14491 = state_14389__$1;(statearr_14412_14491[1] = 10);
} else
{var statearr_14413_14492 = state_14389__$1;(statearr_14413_14492[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 40))
{var inst_14355 = (state_14389[18]);var inst_14356 = (state_14389[2]);var inst_14357 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14358 = cljs.core.async.untap_STAR_.call(null,m,inst_14355);var state_14389__$1 = (function (){var statearr_14414 = state_14389;(statearr_14414[22] = inst_14357);
(statearr_14414[23] = inst_14356);
return statearr_14414;
})();var statearr_14415_14493 = state_14389__$1;(statearr_14415_14493[2] = inst_14358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 9))
{var inst_14314 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14416_14494 = state_14389__$1;(statearr_14416_14494[2] = inst_14314);
(statearr_14416_14494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 41))
{var inst_14257 = (state_14389[7]);var inst_14355 = (state_14389[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14389,40,Object,null,39);var inst_14362 = cljs.core.async.put_BANG_.call(null,inst_14355,inst_14257,done);var state_14389__$1 = state_14389;var statearr_14417_14495 = state_14389__$1;(statearr_14417_14495[2] = inst_14362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 10))
{var inst_14267 = (state_14389[15]);var inst_14269 = (state_14389[16]);var inst_14275 = cljs.core._nth.call(null,inst_14267,inst_14269);var inst_14276 = cljs.core.nth.call(null,inst_14275,0,null);var inst_14277 = cljs.core.nth.call(null,inst_14275,1,null);var state_14389__$1 = (function (){var statearr_14418 = state_14389;(statearr_14418[24] = inst_14276);
return statearr_14418;
})();if(cljs.core.truth_(inst_14277))
{var statearr_14419_14496 = state_14389__$1;(statearr_14419_14496[1] = 13);
} else
{var statearr_14420_14497 = state_14389__$1;(statearr_14420_14497[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 42))
{var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14389__$1,45,dchan);
} else
{if((state_val_14390 === 11))
{var inst_14286 = (state_14389[25]);var inst_14266 = (state_14389[14]);var inst_14286__$1 = cljs.core.seq.call(null,inst_14266);var state_14389__$1 = (function (){var statearr_14421 = state_14389;(statearr_14421[25] = inst_14286__$1);
return statearr_14421;
})();if(inst_14286__$1)
{var statearr_14422_14498 = state_14389__$1;(statearr_14422_14498[1] = 16);
} else
{var statearr_14423_14499 = state_14389__$1;(statearr_14423_14499[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 43))
{var state_14389__$1 = state_14389;var statearr_14424_14500 = state_14389__$1;(statearr_14424_14500[2] = null);
(statearr_14424_14500[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 12))
{var inst_14312 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14425_14501 = state_14389__$1;(statearr_14425_14501[2] = inst_14312);
(statearr_14425_14501[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 44))
{var inst_14382 = (state_14389[2]);var state_14389__$1 = (function (){var statearr_14426 = state_14389;(statearr_14426[26] = inst_14382);
return statearr_14426;
})();var statearr_14427_14502 = state_14389__$1;(statearr_14427_14502[2] = null);
(statearr_14427_14502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 13))
{var inst_14276 = (state_14389[24]);var inst_14279 = cljs.core.async.close_BANG_.call(null,inst_14276);var state_14389__$1 = state_14389;var statearr_14428_14503 = state_14389__$1;(statearr_14428_14503[2] = inst_14279);
(statearr_14428_14503[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 45))
{var inst_14379 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14432_14504 = state_14389__$1;(statearr_14432_14504[2] = inst_14379);
(statearr_14432_14504[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 14))
{var state_14389__$1 = state_14389;var statearr_14433_14505 = state_14389__$1;(statearr_14433_14505[2] = null);
(statearr_14433_14505[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 15))
{var inst_14266 = (state_14389[14]);var inst_14267 = (state_14389[15]);var inst_14269 = (state_14389[16]);var inst_14268 = (state_14389[17]);var inst_14282 = (state_14389[2]);var inst_14283 = (inst_14269 + 1);var tmp14429 = inst_14266;var tmp14430 = inst_14267;var tmp14431 = inst_14268;var inst_14266__$1 = tmp14429;var inst_14267__$1 = tmp14430;var inst_14268__$1 = tmp14431;var inst_14269__$1 = inst_14283;var state_14389__$1 = (function (){var statearr_14434 = state_14389;(statearr_14434[27] = inst_14282);
(statearr_14434[14] = inst_14266__$1);
(statearr_14434[15] = inst_14267__$1);
(statearr_14434[16] = inst_14269__$1);
(statearr_14434[17] = inst_14268__$1);
return statearr_14434;
})();var statearr_14435_14506 = state_14389__$1;(statearr_14435_14506[2] = null);
(statearr_14435_14506[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 16))
{var inst_14286 = (state_14389[25]);var inst_14288 = cljs.core.chunked_seq_QMARK_.call(null,inst_14286);var state_14389__$1 = state_14389;if(inst_14288)
{var statearr_14436_14507 = state_14389__$1;(statearr_14436_14507[1] = 19);
} else
{var statearr_14437_14508 = state_14389__$1;(statearr_14437_14508[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 17))
{var state_14389__$1 = state_14389;var statearr_14438_14509 = state_14389__$1;(statearr_14438_14509[2] = null);
(statearr_14438_14509[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 18))
{var inst_14310 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14439_14510 = state_14389__$1;(statearr_14439_14510[2] = inst_14310);
(statearr_14439_14510[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 19))
{var inst_14286 = (state_14389[25]);var inst_14290 = cljs.core.chunk_first.call(null,inst_14286);var inst_14291 = cljs.core.chunk_rest.call(null,inst_14286);var inst_14292 = cljs.core.count.call(null,inst_14290);var inst_14266 = inst_14291;var inst_14267 = inst_14290;var inst_14268 = inst_14292;var inst_14269 = 0;var state_14389__$1 = (function (){var statearr_14440 = state_14389;(statearr_14440[14] = inst_14266);
(statearr_14440[15] = inst_14267);
(statearr_14440[16] = inst_14269);
(statearr_14440[17] = inst_14268);
return statearr_14440;
})();var statearr_14441_14511 = state_14389__$1;(statearr_14441_14511[2] = null);
(statearr_14441_14511[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 20))
{var inst_14286 = (state_14389[25]);var inst_14296 = cljs.core.first.call(null,inst_14286);var inst_14297 = cljs.core.nth.call(null,inst_14296,0,null);var inst_14298 = cljs.core.nth.call(null,inst_14296,1,null);var state_14389__$1 = (function (){var statearr_14442 = state_14389;(statearr_14442[28] = inst_14297);
return statearr_14442;
})();if(cljs.core.truth_(inst_14298))
{var statearr_14443_14512 = state_14389__$1;(statearr_14443_14512[1] = 22);
} else
{var statearr_14444_14513 = state_14389__$1;(statearr_14444_14513[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 21))
{var inst_14307 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14445_14514 = state_14389__$1;(statearr_14445_14514[2] = inst_14307);
(statearr_14445_14514[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 22))
{var inst_14297 = (state_14389[28]);var inst_14300 = cljs.core.async.close_BANG_.call(null,inst_14297);var state_14389__$1 = state_14389;var statearr_14446_14515 = state_14389__$1;(statearr_14446_14515[2] = inst_14300);
(statearr_14446_14515[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 23))
{var state_14389__$1 = state_14389;var statearr_14447_14516 = state_14389__$1;(statearr_14447_14516[2] = null);
(statearr_14447_14516[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 24))
{var inst_14286 = (state_14389[25]);var inst_14303 = (state_14389[2]);var inst_14304 = cljs.core.next.call(null,inst_14286);var inst_14266 = inst_14304;var inst_14267 = null;var inst_14268 = 0;var inst_14269 = 0;var state_14389__$1 = (function (){var statearr_14448 = state_14389;(statearr_14448[14] = inst_14266);
(statearr_14448[15] = inst_14267);
(statearr_14448[29] = inst_14303);
(statearr_14448[16] = inst_14269);
(statearr_14448[17] = inst_14268);
return statearr_14448;
})();var statearr_14449_14517 = state_14389__$1;(statearr_14449_14517[2] = null);
(statearr_14449_14517[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 25))
{var inst_14327 = (state_14389[10]);var inst_14328 = (state_14389[11]);var inst_14330 = (inst_14328 < inst_14327);var inst_14331 = inst_14330;var state_14389__$1 = state_14389;if(cljs.core.truth_(inst_14331))
{var statearr_14450_14518 = state_14389__$1;(statearr_14450_14518[1] = 27);
} else
{var statearr_14451_14519 = state_14389__$1;(statearr_14451_14519[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 26))
{var inst_14317 = (state_14389[19]);var inst_14375 = (state_14389[2]);var inst_14376 = cljs.core.seq.call(null,inst_14317);var state_14389__$1 = (function (){var statearr_14452 = state_14389;(statearr_14452[30] = inst_14375);
return statearr_14452;
})();if(inst_14376)
{var statearr_14453_14520 = state_14389__$1;(statearr_14453_14520[1] = 42);
} else
{var statearr_14454_14521 = state_14389__$1;(statearr_14454_14521[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 27))
{var inst_14328 = (state_14389[11]);var inst_14326 = (state_14389[12]);var inst_14333 = cljs.core._nth.call(null,inst_14326,inst_14328);var state_14389__$1 = (function (){var statearr_14455 = state_14389;(statearr_14455[8] = inst_14333);
return statearr_14455;
})();var statearr_14456_14522 = state_14389__$1;(statearr_14456_14522[2] = null);
(statearr_14456_14522[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 28))
{var inst_14325 = (state_14389[13]);var inst_14346 = (state_14389[9]);var inst_14346__$1 = cljs.core.seq.call(null,inst_14325);var state_14389__$1 = (function (){var statearr_14460 = state_14389;(statearr_14460[9] = inst_14346__$1);
return statearr_14460;
})();if(inst_14346__$1)
{var statearr_14461_14523 = state_14389__$1;(statearr_14461_14523[1] = 33);
} else
{var statearr_14462_14524 = state_14389__$1;(statearr_14462_14524[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 29))
{var inst_14373 = (state_14389[2]);var state_14389__$1 = state_14389;var statearr_14463_14525 = state_14389__$1;(statearr_14463_14525[2] = inst_14373);
(statearr_14463_14525[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 30))
{var inst_14327 = (state_14389[10]);var inst_14328 = (state_14389[11]);var inst_14326 = (state_14389[12]);var inst_14325 = (state_14389[13]);var inst_14342 = (state_14389[2]);var inst_14343 = (inst_14328 + 1);var tmp14457 = inst_14327;var tmp14458 = inst_14326;var tmp14459 = inst_14325;var inst_14325__$1 = tmp14459;var inst_14326__$1 = tmp14458;var inst_14327__$1 = tmp14457;var inst_14328__$1 = inst_14343;var state_14389__$1 = (function (){var statearr_14464 = state_14389;(statearr_14464[10] = inst_14327__$1);
(statearr_14464[11] = inst_14328__$1);
(statearr_14464[12] = inst_14326__$1);
(statearr_14464[13] = inst_14325__$1);
(statearr_14464[31] = inst_14342);
return statearr_14464;
})();var statearr_14465_14526 = state_14389__$1;(statearr_14465_14526[2] = null);
(statearr_14465_14526[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14390 === 31))
{var inst_14333 = (state_14389[8]);var inst_14334 = (state_14389[2]);var inst_14335 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14336 = cljs.core.async.untap_STAR_.call(null,m,inst_14333);var state_14389__$1 = (function (){var statearr_14466 = state_14389;(statearr_14466[32] = inst_14335);
(statearr_14466[33] = inst_14334);
return statearr_14466;
})();var statearr_14467_14527 = state_14389__$1;(statearr_14467_14527[2] = inst_14336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389__$1);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_14471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14471[0] = state_machine__8689__auto__);
(statearr_14471[1] = 1);
return statearr_14471;
});
var state_machine__8689__auto____1 = (function (state_14389){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_14389);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e14472){if((e14472 instanceof Object))
{var ex__8692__auto__ = e14472;var statearr_14473_14528 = state_14389;(statearr_14473_14528[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14529 = state_14389;
state_14389 = G__14529;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_14389){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_14389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_14474 = f__8704__auto__.call(null);(statearr_14474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___14475);
return statearr_14474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
cljs.core.async.Mix = (function (){var obj14531 = {};return obj14531;
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
;var m = (function (){if(typeof cljs.core.async.t14641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14641 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14642){
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
this.meta14642 = meta14642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14641.cljs$lang$type = true;
cljs.core.async.t14641.cljs$lang$ctorStr = "cljs.core.async/t14641";
cljs.core.async.t14641.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14641");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14643){var self__ = this;
var _14643__$1 = this;return self__.meta14642;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14643,meta14642__$1){var self__ = this;
var _14643__$1 = this;return (new cljs.core.async.t14641(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14642__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14641 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14641(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14642){return (new cljs.core.async.t14641(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14642));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14641(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8703__auto___14750 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_14708){var state_val_14709 = (state_14708[1]);if((state_val_14709 === 1))
{var inst_14647 = (state_14708[7]);var inst_14647__$1 = calc_state.call(null);var inst_14648 = cljs.core.seq_QMARK_.call(null,inst_14647__$1);var state_14708__$1 = (function (){var statearr_14710 = state_14708;(statearr_14710[7] = inst_14647__$1);
return statearr_14710;
})();if(inst_14648)
{var statearr_14711_14751 = state_14708__$1;(statearr_14711_14751[1] = 2);
} else
{var statearr_14712_14752 = state_14708__$1;(statearr_14712_14752[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 2))
{var inst_14647 = (state_14708[7]);var inst_14650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14647);var state_14708__$1 = state_14708;var statearr_14713_14753 = state_14708__$1;(statearr_14713_14753[2] = inst_14650);
(statearr_14713_14753[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 3))
{var inst_14647 = (state_14708[7]);var state_14708__$1 = state_14708;var statearr_14714_14754 = state_14708__$1;(statearr_14714_14754[2] = inst_14647);
(statearr_14714_14754[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 4))
{var inst_14647 = (state_14708[7]);var inst_14653 = (state_14708[2]);var inst_14654 = cljs.core.get.call(null,inst_14653,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14655 = cljs.core.get.call(null,inst_14653,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14656 = cljs.core.get.call(null,inst_14653,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14657 = inst_14647;var state_14708__$1 = (function (){var statearr_14715 = state_14708;(statearr_14715[8] = inst_14656);
(statearr_14715[9] = inst_14655);
(statearr_14715[10] = inst_14654);
(statearr_14715[11] = inst_14657);
return statearr_14715;
})();var statearr_14716_14755 = state_14708__$1;(statearr_14716_14755[2] = null);
(statearr_14716_14755[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 5))
{var inst_14657 = (state_14708[11]);var inst_14660 = cljs.core.seq_QMARK_.call(null,inst_14657);var state_14708__$1 = state_14708;if(inst_14660)
{var statearr_14717_14756 = state_14708__$1;(statearr_14717_14756[1] = 7);
} else
{var statearr_14718_14757 = state_14708__$1;(statearr_14718_14757[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 6))
{var inst_14706 = (state_14708[2]);var state_14708__$1 = state_14708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14708__$1,inst_14706);
} else
{if((state_val_14709 === 7))
{var inst_14657 = (state_14708[11]);var inst_14662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14657);var state_14708__$1 = state_14708;var statearr_14719_14758 = state_14708__$1;(statearr_14719_14758[2] = inst_14662);
(statearr_14719_14758[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 8))
{var inst_14657 = (state_14708[11]);var state_14708__$1 = state_14708;var statearr_14720_14759 = state_14708__$1;(statearr_14720_14759[2] = inst_14657);
(statearr_14720_14759[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 9))
{var inst_14665 = (state_14708[12]);var inst_14665__$1 = (state_14708[2]);var inst_14666 = cljs.core.get.call(null,inst_14665__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14667 = cljs.core.get.call(null,inst_14665__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14668 = cljs.core.get.call(null,inst_14665__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14708__$1 = (function (){var statearr_14721 = state_14708;(statearr_14721[13] = inst_14668);
(statearr_14721[14] = inst_14667);
(statearr_14721[12] = inst_14665__$1);
return statearr_14721;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14708__$1,10,inst_14666);
} else
{if((state_val_14709 === 10))
{var inst_14673 = (state_14708[15]);var inst_14672 = (state_14708[16]);var inst_14671 = (state_14708[2]);var inst_14672__$1 = cljs.core.nth.call(null,inst_14671,0,null);var inst_14673__$1 = cljs.core.nth.call(null,inst_14671,1,null);var inst_14674 = (inst_14672__$1 == null);var inst_14675 = cljs.core._EQ_.call(null,inst_14673__$1,change);var inst_14676 = (inst_14674) || (inst_14675);var state_14708__$1 = (function (){var statearr_14722 = state_14708;(statearr_14722[15] = inst_14673__$1);
(statearr_14722[16] = inst_14672__$1);
return statearr_14722;
})();if(cljs.core.truth_(inst_14676))
{var statearr_14723_14760 = state_14708__$1;(statearr_14723_14760[1] = 11);
} else
{var statearr_14724_14761 = state_14708__$1;(statearr_14724_14761[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 11))
{var inst_14672 = (state_14708[16]);var inst_14678 = (inst_14672 == null);var state_14708__$1 = state_14708;if(cljs.core.truth_(inst_14678))
{var statearr_14725_14762 = state_14708__$1;(statearr_14725_14762[1] = 14);
} else
{var statearr_14726_14763 = state_14708__$1;(statearr_14726_14763[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 12))
{var inst_14687 = (state_14708[17]);var inst_14668 = (state_14708[13]);var inst_14673 = (state_14708[15]);var inst_14687__$1 = inst_14668.call(null,inst_14673);var state_14708__$1 = (function (){var statearr_14727 = state_14708;(statearr_14727[17] = inst_14687__$1);
return statearr_14727;
})();if(cljs.core.truth_(inst_14687__$1))
{var statearr_14728_14764 = state_14708__$1;(statearr_14728_14764[1] = 17);
} else
{var statearr_14729_14765 = state_14708__$1;(statearr_14729_14765[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 13))
{var inst_14704 = (state_14708[2]);var state_14708__$1 = state_14708;var statearr_14730_14766 = state_14708__$1;(statearr_14730_14766[2] = inst_14704);
(statearr_14730_14766[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 14))
{var inst_14673 = (state_14708[15]);var inst_14680 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14673);var state_14708__$1 = state_14708;var statearr_14731_14767 = state_14708__$1;(statearr_14731_14767[2] = inst_14680);
(statearr_14731_14767[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 15))
{var state_14708__$1 = state_14708;var statearr_14732_14768 = state_14708__$1;(statearr_14732_14768[2] = null);
(statearr_14732_14768[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 16))
{var inst_14683 = (state_14708[2]);var inst_14684 = calc_state.call(null);var inst_14657 = inst_14684;var state_14708__$1 = (function (){var statearr_14733 = state_14708;(statearr_14733[18] = inst_14683);
(statearr_14733[11] = inst_14657);
return statearr_14733;
})();var statearr_14734_14769 = state_14708__$1;(statearr_14734_14769[2] = null);
(statearr_14734_14769[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 17))
{var inst_14687 = (state_14708[17]);var state_14708__$1 = state_14708;var statearr_14735_14770 = state_14708__$1;(statearr_14735_14770[2] = inst_14687);
(statearr_14735_14770[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 18))
{var inst_14668 = (state_14708[13]);var inst_14673 = (state_14708[15]);var inst_14667 = (state_14708[14]);var inst_14690 = cljs.core.empty_QMARK_.call(null,inst_14668);var inst_14691 = inst_14667.call(null,inst_14673);var inst_14692 = cljs.core.not.call(null,inst_14691);var inst_14693 = (inst_14690) && (inst_14692);var state_14708__$1 = state_14708;var statearr_14736_14771 = state_14708__$1;(statearr_14736_14771[2] = inst_14693);
(statearr_14736_14771[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 19))
{var inst_14695 = (state_14708[2]);var state_14708__$1 = state_14708;if(cljs.core.truth_(inst_14695))
{var statearr_14737_14772 = state_14708__$1;(statearr_14737_14772[1] = 20);
} else
{var statearr_14738_14773 = state_14708__$1;(statearr_14738_14773[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 20))
{var inst_14672 = (state_14708[16]);var state_14708__$1 = state_14708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14708__$1,23,out,inst_14672);
} else
{if((state_val_14709 === 21))
{var state_14708__$1 = state_14708;var statearr_14739_14774 = state_14708__$1;(statearr_14739_14774[2] = null);
(statearr_14739_14774[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 22))
{var inst_14665 = (state_14708[12]);var inst_14701 = (state_14708[2]);var inst_14657 = inst_14665;var state_14708__$1 = (function (){var statearr_14740 = state_14708;(statearr_14740[19] = inst_14701);
(statearr_14740[11] = inst_14657);
return statearr_14740;
})();var statearr_14741_14775 = state_14708__$1;(statearr_14741_14775[2] = null);
(statearr_14741_14775[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14709 === 23))
{var inst_14698 = (state_14708[2]);var state_14708__$1 = state_14708;var statearr_14742_14776 = state_14708__$1;(statearr_14742_14776[2] = inst_14698);
(statearr_14742_14776[1] = 22);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_14746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14746[0] = state_machine__8689__auto__);
(statearr_14746[1] = 1);
return statearr_14746;
});
var state_machine__8689__auto____1 = (function (state_14708){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_14708);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e14747){if((e14747 instanceof Object))
{var ex__8692__auto__ = e14747;var statearr_14748_14777 = state_14708;(statearr_14748_14777[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14778 = state_14708;
state_14708 = G__14778;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_14749 = f__8704__auto__.call(null);(statearr_14749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___14750);
return statearr_14749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
cljs.core.async.Pub = (function (){var obj14780 = {};return obj14780;
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
return (function (p1__14781_SHARP_){if(cljs.core.truth_(p1__14781_SHARP_.call(null,topic)))
{return p1__14781_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14781_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14906 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14907){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14907 = meta14907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14906.cljs$lang$type = true;
cljs.core.async.t14906.cljs$lang$ctorStr = "cljs.core.async/t14906";
cljs.core.async.t14906.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14906");
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14906.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14908){var self__ = this;
var _14908__$1 = this;return self__.meta14907;
});})(mults,ensure_mult))
;
cljs.core.async.t14906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14908,meta14907__$1){var self__ = this;
var _14908__$1 = this;return (new cljs.core.async.t14906(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14907__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14906 = ((function (mults,ensure_mult){
return (function __GT_t14906(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14907){return (new cljs.core.async.t14906(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14907));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14906(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8703__auto___15030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_14982){var state_val_14983 = (state_14982[1]);if((state_val_14983 === 1))
{var state_14982__$1 = state_14982;var statearr_14984_15031 = state_14982__$1;(statearr_14984_15031[2] = null);
(statearr_14984_15031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 2))
{var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14982__$1,4,ch);
} else
{if((state_val_14983 === 3))
{var inst_14980 = (state_14982[2]);var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14982__$1,inst_14980);
} else
{if((state_val_14983 === 4))
{var inst_14911 = (state_14982[7]);var inst_14911__$1 = (state_14982[2]);var inst_14912 = (inst_14911__$1 == null);var state_14982__$1 = (function (){var statearr_14985 = state_14982;(statearr_14985[7] = inst_14911__$1);
return statearr_14985;
})();if(cljs.core.truth_(inst_14912))
{var statearr_14986_15032 = state_14982__$1;(statearr_14986_15032[1] = 5);
} else
{var statearr_14987_15033 = state_14982__$1;(statearr_14987_15033[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 5))
{var inst_14918 = cljs.core.deref.call(null,mults);var inst_14919 = cljs.core.vals.call(null,inst_14918);var inst_14920 = cljs.core.seq.call(null,inst_14919);var inst_14921 = inst_14920;var inst_14922 = null;var inst_14923 = 0;var inst_14924 = 0;var state_14982__$1 = (function (){var statearr_14988 = state_14982;(statearr_14988[8] = inst_14921);
(statearr_14988[9] = inst_14922);
(statearr_14988[10] = inst_14923);
(statearr_14988[11] = inst_14924);
return statearr_14988;
})();var statearr_14989_15034 = state_14982__$1;(statearr_14989_15034[2] = null);
(statearr_14989_15034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 6))
{var inst_14911 = (state_14982[7]);var inst_14961 = (state_14982[12]);var inst_14959 = (state_14982[13]);var inst_14959__$1 = topic_fn.call(null,inst_14911);var inst_14960 = cljs.core.deref.call(null,mults);var inst_14961__$1 = cljs.core.get.call(null,inst_14960,inst_14959__$1);var state_14982__$1 = (function (){var statearr_14990 = state_14982;(statearr_14990[12] = inst_14961__$1);
(statearr_14990[13] = inst_14959__$1);
return statearr_14990;
})();if(cljs.core.truth_(inst_14961__$1))
{var statearr_14991_15035 = state_14982__$1;(statearr_14991_15035[1] = 19);
} else
{var statearr_14992_15036 = state_14982__$1;(statearr_14992_15036[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 7))
{var inst_14978 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_14993_15037 = state_14982__$1;(statearr_14993_15037[2] = inst_14978);
(statearr_14993_15037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 8))
{var inst_14923 = (state_14982[10]);var inst_14924 = (state_14982[11]);var inst_14926 = (inst_14924 < inst_14923);var inst_14927 = inst_14926;var state_14982__$1 = state_14982;if(cljs.core.truth_(inst_14927))
{var statearr_14997_15038 = state_14982__$1;(statearr_14997_15038[1] = 10);
} else
{var statearr_14998_15039 = state_14982__$1;(statearr_14998_15039[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 9))
{var inst_14957 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_14999_15040 = state_14982__$1;(statearr_14999_15040[2] = inst_14957);
(statearr_14999_15040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 10))
{var inst_14921 = (state_14982[8]);var inst_14922 = (state_14982[9]);var inst_14923 = (state_14982[10]);var inst_14924 = (state_14982[11]);var inst_14929 = cljs.core._nth.call(null,inst_14922,inst_14924);var inst_14930 = cljs.core.async.muxch_STAR_.call(null,inst_14929);var inst_14931 = cljs.core.async.close_BANG_.call(null,inst_14930);var inst_14932 = (inst_14924 + 1);var tmp14994 = inst_14921;var tmp14995 = inst_14922;var tmp14996 = inst_14923;var inst_14921__$1 = tmp14994;var inst_14922__$1 = tmp14995;var inst_14923__$1 = tmp14996;var inst_14924__$1 = inst_14932;var state_14982__$1 = (function (){var statearr_15000 = state_14982;(statearr_15000[8] = inst_14921__$1);
(statearr_15000[14] = inst_14931);
(statearr_15000[9] = inst_14922__$1);
(statearr_15000[10] = inst_14923__$1);
(statearr_15000[11] = inst_14924__$1);
return statearr_15000;
})();var statearr_15001_15041 = state_14982__$1;(statearr_15001_15041[2] = null);
(statearr_15001_15041[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 11))
{var inst_14921 = (state_14982[8]);var inst_14935 = (state_14982[15]);var inst_14935__$1 = cljs.core.seq.call(null,inst_14921);var state_14982__$1 = (function (){var statearr_15002 = state_14982;(statearr_15002[15] = inst_14935__$1);
return statearr_15002;
})();if(inst_14935__$1)
{var statearr_15003_15042 = state_14982__$1;(statearr_15003_15042[1] = 13);
} else
{var statearr_15004_15043 = state_14982__$1;(statearr_15004_15043[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 12))
{var inst_14955 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15005_15044 = state_14982__$1;(statearr_15005_15044[2] = inst_14955);
(statearr_15005_15044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 13))
{var inst_14935 = (state_14982[15]);var inst_14937 = cljs.core.chunked_seq_QMARK_.call(null,inst_14935);var state_14982__$1 = state_14982;if(inst_14937)
{var statearr_15006_15045 = state_14982__$1;(statearr_15006_15045[1] = 16);
} else
{var statearr_15007_15046 = state_14982__$1;(statearr_15007_15046[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 14))
{var state_14982__$1 = state_14982;var statearr_15008_15047 = state_14982__$1;(statearr_15008_15047[2] = null);
(statearr_15008_15047[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 15))
{var inst_14953 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15009_15048 = state_14982__$1;(statearr_15009_15048[2] = inst_14953);
(statearr_15009_15048[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 16))
{var inst_14935 = (state_14982[15]);var inst_14939 = cljs.core.chunk_first.call(null,inst_14935);var inst_14940 = cljs.core.chunk_rest.call(null,inst_14935);var inst_14941 = cljs.core.count.call(null,inst_14939);var inst_14921 = inst_14940;var inst_14922 = inst_14939;var inst_14923 = inst_14941;var inst_14924 = 0;var state_14982__$1 = (function (){var statearr_15010 = state_14982;(statearr_15010[8] = inst_14921);
(statearr_15010[9] = inst_14922);
(statearr_15010[10] = inst_14923);
(statearr_15010[11] = inst_14924);
return statearr_15010;
})();var statearr_15011_15049 = state_14982__$1;(statearr_15011_15049[2] = null);
(statearr_15011_15049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 17))
{var inst_14935 = (state_14982[15]);var inst_14944 = cljs.core.first.call(null,inst_14935);var inst_14945 = cljs.core.async.muxch_STAR_.call(null,inst_14944);var inst_14946 = cljs.core.async.close_BANG_.call(null,inst_14945);var inst_14947 = cljs.core.next.call(null,inst_14935);var inst_14921 = inst_14947;var inst_14922 = null;var inst_14923 = 0;var inst_14924 = 0;var state_14982__$1 = (function (){var statearr_15012 = state_14982;(statearr_15012[8] = inst_14921);
(statearr_15012[9] = inst_14922);
(statearr_15012[10] = inst_14923);
(statearr_15012[11] = inst_14924);
(statearr_15012[16] = inst_14946);
return statearr_15012;
})();var statearr_15013_15050 = state_14982__$1;(statearr_15013_15050[2] = null);
(statearr_15013_15050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 18))
{var inst_14950 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15014_15051 = state_14982__$1;(statearr_15014_15051[2] = inst_14950);
(statearr_15014_15051[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 19))
{var state_14982__$1 = state_14982;var statearr_15015_15052 = state_14982__$1;(statearr_15015_15052[2] = null);
(statearr_15015_15052[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 20))
{var state_14982__$1 = state_14982;var statearr_15016_15053 = state_14982__$1;(statearr_15016_15053[2] = null);
(statearr_15016_15053[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 21))
{var inst_14975 = (state_14982[2]);var state_14982__$1 = (function (){var statearr_15017 = state_14982;(statearr_15017[17] = inst_14975);
return statearr_15017;
})();var statearr_15018_15054 = state_14982__$1;(statearr_15018_15054[2] = null);
(statearr_15018_15054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 22))
{var inst_14972 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15019_15055 = state_14982__$1;(statearr_15019_15055[2] = inst_14972);
(statearr_15019_15055[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 23))
{var inst_14959 = (state_14982[13]);var inst_14963 = (state_14982[2]);var inst_14964 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14959);var state_14982__$1 = (function (){var statearr_15020 = state_14982;(statearr_15020[18] = inst_14963);
return statearr_15020;
})();var statearr_15021_15056 = state_14982__$1;(statearr_15021_15056[2] = inst_14964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14982__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 24))
{var inst_14911 = (state_14982[7]);var inst_14961 = (state_14982[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14982,23,Object,null,22);var inst_14968 = cljs.core.async.muxch_STAR_.call(null,inst_14961);var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14982__$1,25,inst_14968,inst_14911);
} else
{if((state_val_14983 === 25))
{var inst_14970 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15022_15057 = state_14982__$1;(statearr_15022_15057[2] = inst_14970);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14982__$1);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15026[0] = state_machine__8689__auto__);
(statearr_15026[1] = 1);
return statearr_15026;
});
var state_machine__8689__auto____1 = (function (state_14982){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_14982);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15027){if((e15027 instanceof Object))
{var ex__8692__auto__ = e15027;var statearr_15028_15058 = state_14982;(statearr_15028_15058[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15059 = state_14982;
state_14982 = G__15059;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_14982){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_14982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15029 = f__8704__auto__.call(null);(statearr_15029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15030);
return statearr_15029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
,cljs.core.range.call(null,cnt));var c__8703__auto___15196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15166){var state_val_15167 = (state_15166[1]);if((state_val_15167 === 1))
{var state_15166__$1 = state_15166;var statearr_15168_15197 = state_15166__$1;(statearr_15168_15197[2] = null);
(statearr_15168_15197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 2))
{var inst_15129 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15130 = 0;var state_15166__$1 = (function (){var statearr_15169 = state_15166;(statearr_15169[7] = inst_15130);
(statearr_15169[8] = inst_15129);
return statearr_15169;
})();var statearr_15170_15198 = state_15166__$1;(statearr_15170_15198[2] = null);
(statearr_15170_15198[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 3))
{var inst_15164 = (state_15166[2]);var state_15166__$1 = state_15166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15166__$1,inst_15164);
} else
{if((state_val_15167 === 4))
{var inst_15130 = (state_15166[7]);var inst_15132 = (inst_15130 < cnt);var state_15166__$1 = state_15166;if(cljs.core.truth_(inst_15132))
{var statearr_15171_15199 = state_15166__$1;(statearr_15171_15199[1] = 6);
} else
{var statearr_15172_15200 = state_15166__$1;(statearr_15172_15200[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 5))
{var inst_15150 = (state_15166[2]);var state_15166__$1 = (function (){var statearr_15173 = state_15166;(statearr_15173[9] = inst_15150);
return statearr_15173;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15166__$1,12,dchan);
} else
{if((state_val_15167 === 6))
{var state_15166__$1 = state_15166;var statearr_15174_15201 = state_15166__$1;(statearr_15174_15201[2] = null);
(statearr_15174_15201[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 7))
{var state_15166__$1 = state_15166;var statearr_15175_15202 = state_15166__$1;(statearr_15175_15202[2] = null);
(statearr_15175_15202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 8))
{var inst_15148 = (state_15166[2]);var state_15166__$1 = state_15166;var statearr_15176_15203 = state_15166__$1;(statearr_15176_15203[2] = inst_15148);
(statearr_15176_15203[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 9))
{var inst_15130 = (state_15166[7]);var inst_15143 = (state_15166[2]);var inst_15144 = (inst_15130 + 1);var inst_15130__$1 = inst_15144;var state_15166__$1 = (function (){var statearr_15177 = state_15166;(statearr_15177[7] = inst_15130__$1);
(statearr_15177[10] = inst_15143);
return statearr_15177;
})();var statearr_15178_15204 = state_15166__$1;(statearr_15178_15204[2] = null);
(statearr_15178_15204[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 10))
{var inst_15134 = (state_15166[2]);var inst_15135 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15166__$1 = (function (){var statearr_15179 = state_15166;(statearr_15179[11] = inst_15134);
return statearr_15179;
})();var statearr_15180_15205 = state_15166__$1;(statearr_15180_15205[2] = inst_15135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15166__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 11))
{var inst_15130 = (state_15166[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15166,10,Object,null,9);var inst_15139 = chs__$1.call(null,inst_15130);var inst_15140 = done.call(null,inst_15130);var inst_15141 = cljs.core.async.take_BANG_.call(null,inst_15139,inst_15140);var state_15166__$1 = state_15166;var statearr_15181_15206 = state_15166__$1;(statearr_15181_15206[2] = inst_15141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15166__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 12))
{var inst_15152 = (state_15166[12]);var inst_15152__$1 = (state_15166[2]);var inst_15153 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15152__$1);var state_15166__$1 = (function (){var statearr_15182 = state_15166;(statearr_15182[12] = inst_15152__$1);
return statearr_15182;
})();if(cljs.core.truth_(inst_15153))
{var statearr_15183_15207 = state_15166__$1;(statearr_15183_15207[1] = 13);
} else
{var statearr_15184_15208 = state_15166__$1;(statearr_15184_15208[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 13))
{var inst_15155 = cljs.core.async.close_BANG_.call(null,out);var state_15166__$1 = state_15166;var statearr_15185_15209 = state_15166__$1;(statearr_15185_15209[2] = inst_15155);
(statearr_15185_15209[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 14))
{var inst_15152 = (state_15166[12]);var inst_15157 = cljs.core.apply.call(null,f,inst_15152);var state_15166__$1 = state_15166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15166__$1,16,out,inst_15157);
} else
{if((state_val_15167 === 15))
{var inst_15162 = (state_15166[2]);var state_15166__$1 = state_15166;var statearr_15186_15210 = state_15166__$1;(statearr_15186_15210[2] = inst_15162);
(statearr_15186_15210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15167 === 16))
{var inst_15159 = (state_15166[2]);var state_15166__$1 = (function (){var statearr_15187 = state_15166;(statearr_15187[13] = inst_15159);
return statearr_15187;
})();var statearr_15188_15211 = state_15166__$1;(statearr_15188_15211[2] = null);
(statearr_15188_15211[1] = 2);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15192[0] = state_machine__8689__auto__);
(statearr_15192[1] = 1);
return statearr_15192;
});
var state_machine__8689__auto____1 = (function (state_15166){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15166);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15193){if((e15193 instanceof Object))
{var ex__8692__auto__ = e15193;var statearr_15194_15212 = state_15166;(statearr_15194_15212[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15213 = state_15166;
state_15166 = G__15213;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15166){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15195 = f__8704__auto__.call(null);(statearr_15195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15196);
return statearr_15195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___15321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15297){var state_val_15298 = (state_15297[1]);if((state_val_15298 === 1))
{var inst_15268 = cljs.core.vec.call(null,chs);var inst_15269 = inst_15268;var state_15297__$1 = (function (){var statearr_15299 = state_15297;(statearr_15299[7] = inst_15269);
return statearr_15299;
})();var statearr_15300_15322 = state_15297__$1;(statearr_15300_15322[2] = null);
(statearr_15300_15322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 2))
{var inst_15269 = (state_15297[7]);var inst_15271 = cljs.core.count.call(null,inst_15269);var inst_15272 = (inst_15271 > 0);var state_15297__$1 = state_15297;if(cljs.core.truth_(inst_15272))
{var statearr_15301_15323 = state_15297__$1;(statearr_15301_15323[1] = 4);
} else
{var statearr_15302_15324 = state_15297__$1;(statearr_15302_15324[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 3))
{var inst_15295 = (state_15297[2]);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else
{if((state_val_15298 === 4))
{var inst_15269 = (state_15297[7]);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15297__$1,7,inst_15269);
} else
{if((state_val_15298 === 5))
{var inst_15291 = cljs.core.async.close_BANG_.call(null,out);var state_15297__$1 = state_15297;var statearr_15303_15325 = state_15297__$1;(statearr_15303_15325[2] = inst_15291);
(statearr_15303_15325[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 6))
{var inst_15293 = (state_15297[2]);var state_15297__$1 = state_15297;var statearr_15304_15326 = state_15297__$1;(statearr_15304_15326[2] = inst_15293);
(statearr_15304_15326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 7))
{var inst_15276 = (state_15297[8]);var inst_15277 = (state_15297[9]);var inst_15276__$1 = (state_15297[2]);var inst_15277__$1 = cljs.core.nth.call(null,inst_15276__$1,0,null);var inst_15278 = cljs.core.nth.call(null,inst_15276__$1,1,null);var inst_15279 = (inst_15277__$1 == null);var state_15297__$1 = (function (){var statearr_15305 = state_15297;(statearr_15305[10] = inst_15278);
(statearr_15305[8] = inst_15276__$1);
(statearr_15305[9] = inst_15277__$1);
return statearr_15305;
})();if(cljs.core.truth_(inst_15279))
{var statearr_15306_15327 = state_15297__$1;(statearr_15306_15327[1] = 8);
} else
{var statearr_15307_15328 = state_15297__$1;(statearr_15307_15328[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 8))
{var inst_15269 = (state_15297[7]);var inst_15278 = (state_15297[10]);var inst_15276 = (state_15297[8]);var inst_15277 = (state_15297[9]);var inst_15281 = (function (){var c = inst_15278;var v = inst_15277;var vec__15274 = inst_15276;var cs = inst_15269;return ((function (c,v,vec__15274,cs,inst_15269,inst_15278,inst_15276,inst_15277,state_val_15298){
return (function (p1__15214_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15214_SHARP_);
});
;})(c,v,vec__15274,cs,inst_15269,inst_15278,inst_15276,inst_15277,state_val_15298))
})();var inst_15282 = cljs.core.filterv.call(null,inst_15281,inst_15269);var inst_15269__$1 = inst_15282;var state_15297__$1 = (function (){var statearr_15308 = state_15297;(statearr_15308[7] = inst_15269__$1);
return statearr_15308;
})();var statearr_15309_15329 = state_15297__$1;(statearr_15309_15329[2] = null);
(statearr_15309_15329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 9))
{var inst_15277 = (state_15297[9]);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,11,out,inst_15277);
} else
{if((state_val_15298 === 10))
{var inst_15289 = (state_15297[2]);var state_15297__$1 = state_15297;var statearr_15311_15330 = state_15297__$1;(statearr_15311_15330[2] = inst_15289);
(statearr_15311_15330[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 11))
{var inst_15269 = (state_15297[7]);var inst_15286 = (state_15297[2]);var tmp15310 = inst_15269;var inst_15269__$1 = tmp15310;var state_15297__$1 = (function (){var statearr_15312 = state_15297;(statearr_15312[7] = inst_15269__$1);
(statearr_15312[11] = inst_15286);
return statearr_15312;
})();var statearr_15313_15331 = state_15297__$1;(statearr_15313_15331[2] = null);
(statearr_15313_15331[1] = 2);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15317 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15317[0] = state_machine__8689__auto__);
(statearr_15317[1] = 1);
return statearr_15317;
});
var state_machine__8689__auto____1 = (function (state_15297){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15297);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15318){if((e15318 instanceof Object))
{var ex__8692__auto__ = e15318;var statearr_15319_15332 = state_15297;(statearr_15319_15332[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15333 = state_15297;
state_15297 = G__15333;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15320 = f__8704__auto__.call(null);(statearr_15320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15321);
return statearr_15320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___15426 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15403){var state_val_15404 = (state_15403[1]);if((state_val_15404 === 1))
{var inst_15380 = 0;var state_15403__$1 = (function (){var statearr_15405 = state_15403;(statearr_15405[7] = inst_15380);
return statearr_15405;
})();var statearr_15406_15427 = state_15403__$1;(statearr_15406_15427[2] = null);
(statearr_15406_15427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 2))
{var inst_15380 = (state_15403[7]);var inst_15382 = (inst_15380 < n);var state_15403__$1 = state_15403;if(cljs.core.truth_(inst_15382))
{var statearr_15407_15428 = state_15403__$1;(statearr_15407_15428[1] = 4);
} else
{var statearr_15408_15429 = state_15403__$1;(statearr_15408_15429[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 3))
{var inst_15400 = (state_15403[2]);var inst_15401 = cljs.core.async.close_BANG_.call(null,out);var state_15403__$1 = (function (){var statearr_15409 = state_15403;(statearr_15409[8] = inst_15400);
return statearr_15409;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15403__$1,inst_15401);
} else
{if((state_val_15404 === 4))
{var state_15403__$1 = state_15403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15403__$1,7,ch);
} else
{if((state_val_15404 === 5))
{var state_15403__$1 = state_15403;var statearr_15410_15430 = state_15403__$1;(statearr_15410_15430[2] = null);
(statearr_15410_15430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 6))
{var inst_15398 = (state_15403[2]);var state_15403__$1 = state_15403;var statearr_15411_15431 = state_15403__$1;(statearr_15411_15431[2] = inst_15398);
(statearr_15411_15431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 7))
{var inst_15385 = (state_15403[9]);var inst_15385__$1 = (state_15403[2]);var inst_15386 = (inst_15385__$1 == null);var inst_15387 = cljs.core.not.call(null,inst_15386);var state_15403__$1 = (function (){var statearr_15412 = state_15403;(statearr_15412[9] = inst_15385__$1);
return statearr_15412;
})();if(inst_15387)
{var statearr_15413_15432 = state_15403__$1;(statearr_15413_15432[1] = 8);
} else
{var statearr_15414_15433 = state_15403__$1;(statearr_15414_15433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 8))
{var inst_15385 = (state_15403[9]);var state_15403__$1 = state_15403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15403__$1,11,out,inst_15385);
} else
{if((state_val_15404 === 9))
{var state_15403__$1 = state_15403;var statearr_15415_15434 = state_15403__$1;(statearr_15415_15434[2] = null);
(statearr_15415_15434[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 10))
{var inst_15395 = (state_15403[2]);var state_15403__$1 = state_15403;var statearr_15416_15435 = state_15403__$1;(statearr_15416_15435[2] = inst_15395);
(statearr_15416_15435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15404 === 11))
{var inst_15380 = (state_15403[7]);var inst_15390 = (state_15403[2]);var inst_15391 = (inst_15380 + 1);var inst_15380__$1 = inst_15391;var state_15403__$1 = (function (){var statearr_15417 = state_15403;(statearr_15417[10] = inst_15390);
(statearr_15417[7] = inst_15380__$1);
return statearr_15417;
})();var statearr_15418_15436 = state_15403__$1;(statearr_15418_15436[2] = null);
(statearr_15418_15436[1] = 2);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15422 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15422[0] = state_machine__8689__auto__);
(statearr_15422[1] = 1);
return statearr_15422;
});
var state_machine__8689__auto____1 = (function (state_15403){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15403);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15423){if((e15423 instanceof Object))
{var ex__8692__auto__ = e15423;var statearr_15424_15437 = state_15403;(statearr_15424_15437[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15438 = state_15403;
state_15403 = G__15438;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15403){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15425 = f__8704__auto__.call(null);(statearr_15425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15426);
return statearr_15425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___15535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15510){var state_val_15511 = (state_15510[1]);if((state_val_15511 === 1))
{var inst_15487 = null;var state_15510__$1 = (function (){var statearr_15512 = state_15510;(statearr_15512[7] = inst_15487);
return statearr_15512;
})();var statearr_15513_15536 = state_15510__$1;(statearr_15513_15536[2] = null);
(statearr_15513_15536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 2))
{var state_15510__$1 = state_15510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15510__$1,4,ch);
} else
{if((state_val_15511 === 3))
{var inst_15507 = (state_15510[2]);var inst_15508 = cljs.core.async.close_BANG_.call(null,out);var state_15510__$1 = (function (){var statearr_15514 = state_15510;(statearr_15514[8] = inst_15507);
return statearr_15514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15510__$1,inst_15508);
} else
{if((state_val_15511 === 4))
{var inst_15490 = (state_15510[9]);var inst_15490__$1 = (state_15510[2]);var inst_15491 = (inst_15490__$1 == null);var inst_15492 = cljs.core.not.call(null,inst_15491);var state_15510__$1 = (function (){var statearr_15515 = state_15510;(statearr_15515[9] = inst_15490__$1);
return statearr_15515;
})();if(inst_15492)
{var statearr_15516_15537 = state_15510__$1;(statearr_15516_15537[1] = 5);
} else
{var statearr_15517_15538 = state_15510__$1;(statearr_15517_15538[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 5))
{var inst_15487 = (state_15510[7]);var inst_15490 = (state_15510[9]);var inst_15494 = cljs.core._EQ_.call(null,inst_15490,inst_15487);var state_15510__$1 = state_15510;if(inst_15494)
{var statearr_15518_15539 = state_15510__$1;(statearr_15518_15539[1] = 8);
} else
{var statearr_15519_15540 = state_15510__$1;(statearr_15519_15540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 6))
{var state_15510__$1 = state_15510;var statearr_15521_15541 = state_15510__$1;(statearr_15521_15541[2] = null);
(statearr_15521_15541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 7))
{var inst_15505 = (state_15510[2]);var state_15510__$1 = state_15510;var statearr_15522_15542 = state_15510__$1;(statearr_15522_15542[2] = inst_15505);
(statearr_15522_15542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 8))
{var inst_15487 = (state_15510[7]);var tmp15520 = inst_15487;var inst_15487__$1 = tmp15520;var state_15510__$1 = (function (){var statearr_15523 = state_15510;(statearr_15523[7] = inst_15487__$1);
return statearr_15523;
})();var statearr_15524_15543 = state_15510__$1;(statearr_15524_15543[2] = null);
(statearr_15524_15543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 9))
{var inst_15490 = (state_15510[9]);var state_15510__$1 = state_15510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15510__$1,11,out,inst_15490);
} else
{if((state_val_15511 === 10))
{var inst_15502 = (state_15510[2]);var state_15510__$1 = state_15510;var statearr_15525_15544 = state_15510__$1;(statearr_15525_15544[2] = inst_15502);
(statearr_15525_15544[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 11))
{var inst_15490 = (state_15510[9]);var inst_15499 = (state_15510[2]);var inst_15487 = inst_15490;var state_15510__$1 = (function (){var statearr_15526 = state_15510;(statearr_15526[10] = inst_15499);
(statearr_15526[7] = inst_15487);
return statearr_15526;
})();var statearr_15527_15545 = state_15510__$1;(statearr_15527_15545[2] = null);
(statearr_15527_15545[1] = 2);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15531 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15531[0] = state_machine__8689__auto__);
(statearr_15531[1] = 1);
return statearr_15531;
});
var state_machine__8689__auto____1 = (function (state_15510){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15510);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15532){if((e15532 instanceof Object))
{var ex__8692__auto__ = e15532;var statearr_15533_15546 = state_15510;(statearr_15533_15546[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15547 = state_15510;
state_15510 = G__15547;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15510){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15534 = f__8704__auto__.call(null);(statearr_15534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15535);
return statearr_15534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___15682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15652){var state_val_15653 = (state_15652[1]);if((state_val_15653 === 1))
{var inst_15615 = (new Array(n));var inst_15616 = inst_15615;var inst_15617 = 0;var state_15652__$1 = (function (){var statearr_15654 = state_15652;(statearr_15654[7] = inst_15616);
(statearr_15654[8] = inst_15617);
return statearr_15654;
})();var statearr_15655_15683 = state_15652__$1;(statearr_15655_15683[2] = null);
(statearr_15655_15683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 2))
{var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15652__$1,4,ch);
} else
{if((state_val_15653 === 3))
{var inst_15650 = (state_15652[2]);var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15652__$1,inst_15650);
} else
{if((state_val_15653 === 4))
{var inst_15620 = (state_15652[9]);var inst_15620__$1 = (state_15652[2]);var inst_15621 = (inst_15620__$1 == null);var inst_15622 = cljs.core.not.call(null,inst_15621);var state_15652__$1 = (function (){var statearr_15656 = state_15652;(statearr_15656[9] = inst_15620__$1);
return statearr_15656;
})();if(inst_15622)
{var statearr_15657_15684 = state_15652__$1;(statearr_15657_15684[1] = 5);
} else
{var statearr_15658_15685 = state_15652__$1;(statearr_15658_15685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 5))
{var inst_15616 = (state_15652[7]);var inst_15617 = (state_15652[8]);var inst_15620 = (state_15652[9]);var inst_15625 = (state_15652[10]);var inst_15624 = (inst_15616[inst_15617] = inst_15620);var inst_15625__$1 = (inst_15617 + 1);var inst_15626 = (inst_15625__$1 < n);var state_15652__$1 = (function (){var statearr_15659 = state_15652;(statearr_15659[11] = inst_15624);
(statearr_15659[10] = inst_15625__$1);
return statearr_15659;
})();if(cljs.core.truth_(inst_15626))
{var statearr_15660_15686 = state_15652__$1;(statearr_15660_15686[1] = 8);
} else
{var statearr_15661_15687 = state_15652__$1;(statearr_15661_15687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 6))
{var inst_15617 = (state_15652[8]);var inst_15638 = (inst_15617 > 0);var state_15652__$1 = state_15652;if(cljs.core.truth_(inst_15638))
{var statearr_15663_15688 = state_15652__$1;(statearr_15663_15688[1] = 12);
} else
{var statearr_15664_15689 = state_15652__$1;(statearr_15664_15689[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 7))
{var inst_15648 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15665_15690 = state_15652__$1;(statearr_15665_15690[2] = inst_15648);
(statearr_15665_15690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 8))
{var inst_15616 = (state_15652[7]);var inst_15625 = (state_15652[10]);var tmp15662 = inst_15616;var inst_15616__$1 = tmp15662;var inst_15617 = inst_15625;var state_15652__$1 = (function (){var statearr_15666 = state_15652;(statearr_15666[7] = inst_15616__$1);
(statearr_15666[8] = inst_15617);
return statearr_15666;
})();var statearr_15667_15691 = state_15652__$1;(statearr_15667_15691[2] = null);
(statearr_15667_15691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 9))
{var inst_15616 = (state_15652[7]);var inst_15630 = cljs.core.vec.call(null,inst_15616);var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15652__$1,11,out,inst_15630);
} else
{if((state_val_15653 === 10))
{var inst_15636 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15668_15692 = state_15652__$1;(statearr_15668_15692[2] = inst_15636);
(statearr_15668_15692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 11))
{var inst_15632 = (state_15652[2]);var inst_15633 = (new Array(n));var inst_15616 = inst_15633;var inst_15617 = 0;var state_15652__$1 = (function (){var statearr_15669 = state_15652;(statearr_15669[7] = inst_15616);
(statearr_15669[8] = inst_15617);
(statearr_15669[12] = inst_15632);
return statearr_15669;
})();var statearr_15670_15693 = state_15652__$1;(statearr_15670_15693[2] = null);
(statearr_15670_15693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 12))
{var inst_15616 = (state_15652[7]);var inst_15640 = cljs.core.vec.call(null,inst_15616);var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15652__$1,15,out,inst_15640);
} else
{if((state_val_15653 === 13))
{var state_15652__$1 = state_15652;var statearr_15671_15694 = state_15652__$1;(statearr_15671_15694[2] = null);
(statearr_15671_15694[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 14))
{var inst_15645 = (state_15652[2]);var inst_15646 = cljs.core.async.close_BANG_.call(null,out);var state_15652__$1 = (function (){var statearr_15672 = state_15652;(statearr_15672[13] = inst_15645);
return statearr_15672;
})();var statearr_15673_15695 = state_15652__$1;(statearr_15673_15695[2] = inst_15646);
(statearr_15673_15695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 15))
{var inst_15642 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15674_15696 = state_15652__$1;(statearr_15674_15696[2] = inst_15642);
(statearr_15674_15696[1] = 14);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15678[0] = state_machine__8689__auto__);
(statearr_15678[1] = 1);
return statearr_15678;
});
var state_machine__8689__auto____1 = (function (state_15652){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15652);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15679){if((e15679 instanceof Object))
{var ex__8692__auto__ = e15679;var statearr_15680_15697 = state_15652;(statearr_15680_15697[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15698 = state_15652;
state_15652 = G__15698;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15681 = f__8704__auto__.call(null);(statearr_15681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15682);
return statearr_15681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8703__auto___15841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8704__auto__ = (function (){var switch__8688__auto__ = (function (state_15811){var state_val_15812 = (state_15811[1]);if((state_val_15812 === 1))
{var inst_15770 = [];var inst_15771 = inst_15770;var inst_15772 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15811__$1 = (function (){var statearr_15813 = state_15811;(statearr_15813[7] = inst_15771);
(statearr_15813[8] = inst_15772);
return statearr_15813;
})();var statearr_15814_15842 = state_15811__$1;(statearr_15814_15842[2] = null);
(statearr_15814_15842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 2))
{var state_15811__$1 = state_15811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15811__$1,4,ch);
} else
{if((state_val_15812 === 3))
{var inst_15809 = (state_15811[2]);var state_15811__$1 = state_15811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15811__$1,inst_15809);
} else
{if((state_val_15812 === 4))
{var inst_15775 = (state_15811[9]);var inst_15775__$1 = (state_15811[2]);var inst_15776 = (inst_15775__$1 == null);var inst_15777 = cljs.core.not.call(null,inst_15776);var state_15811__$1 = (function (){var statearr_15815 = state_15811;(statearr_15815[9] = inst_15775__$1);
return statearr_15815;
})();if(inst_15777)
{var statearr_15816_15843 = state_15811__$1;(statearr_15816_15843[1] = 5);
} else
{var statearr_15817_15844 = state_15811__$1;(statearr_15817_15844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 5))
{var inst_15772 = (state_15811[8]);var inst_15779 = (state_15811[10]);var inst_15775 = (state_15811[9]);var inst_15779__$1 = f.call(null,inst_15775);var inst_15780 = cljs.core._EQ_.call(null,inst_15779__$1,inst_15772);var inst_15781 = cljs.core.keyword_identical_QMARK_.call(null,inst_15772,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15782 = (inst_15780) || (inst_15781);var state_15811__$1 = (function (){var statearr_15818 = state_15811;(statearr_15818[10] = inst_15779__$1);
return statearr_15818;
})();if(cljs.core.truth_(inst_15782))
{var statearr_15819_15845 = state_15811__$1;(statearr_15819_15845[1] = 8);
} else
{var statearr_15820_15846 = state_15811__$1;(statearr_15820_15846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 6))
{var inst_15771 = (state_15811[7]);var inst_15796 = inst_15771.length;var inst_15797 = (inst_15796 > 0);var state_15811__$1 = state_15811;if(cljs.core.truth_(inst_15797))
{var statearr_15822_15847 = state_15811__$1;(statearr_15822_15847[1] = 12);
} else
{var statearr_15823_15848 = state_15811__$1;(statearr_15823_15848[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 7))
{var inst_15807 = (state_15811[2]);var state_15811__$1 = state_15811;var statearr_15824_15849 = state_15811__$1;(statearr_15824_15849[2] = inst_15807);
(statearr_15824_15849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 8))
{var inst_15771 = (state_15811[7]);var inst_15779 = (state_15811[10]);var inst_15775 = (state_15811[9]);var inst_15784 = inst_15771.push(inst_15775);var tmp15821 = inst_15771;var inst_15771__$1 = tmp15821;var inst_15772 = inst_15779;var state_15811__$1 = (function (){var statearr_15825 = state_15811;(statearr_15825[7] = inst_15771__$1);
(statearr_15825[8] = inst_15772);
(statearr_15825[11] = inst_15784);
return statearr_15825;
})();var statearr_15826_15850 = state_15811__$1;(statearr_15826_15850[2] = null);
(statearr_15826_15850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 9))
{var inst_15771 = (state_15811[7]);var inst_15787 = cljs.core.vec.call(null,inst_15771);var state_15811__$1 = state_15811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15811__$1,11,out,inst_15787);
} else
{if((state_val_15812 === 10))
{var inst_15794 = (state_15811[2]);var state_15811__$1 = state_15811;var statearr_15827_15851 = state_15811__$1;(statearr_15827_15851[2] = inst_15794);
(statearr_15827_15851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 11))
{var inst_15779 = (state_15811[10]);var inst_15775 = (state_15811[9]);var inst_15789 = (state_15811[2]);var inst_15790 = [];var inst_15791 = inst_15790.push(inst_15775);var inst_15771 = inst_15790;var inst_15772 = inst_15779;var state_15811__$1 = (function (){var statearr_15828 = state_15811;(statearr_15828[7] = inst_15771);
(statearr_15828[8] = inst_15772);
(statearr_15828[12] = inst_15789);
(statearr_15828[13] = inst_15791);
return statearr_15828;
})();var statearr_15829_15852 = state_15811__$1;(statearr_15829_15852[2] = null);
(statearr_15829_15852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 12))
{var inst_15771 = (state_15811[7]);var inst_15799 = cljs.core.vec.call(null,inst_15771);var state_15811__$1 = state_15811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15811__$1,15,out,inst_15799);
} else
{if((state_val_15812 === 13))
{var state_15811__$1 = state_15811;var statearr_15830_15853 = state_15811__$1;(statearr_15830_15853[2] = null);
(statearr_15830_15853[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 14))
{var inst_15804 = (state_15811[2]);var inst_15805 = cljs.core.async.close_BANG_.call(null,out);var state_15811__$1 = (function (){var statearr_15831 = state_15811;(statearr_15831[14] = inst_15804);
return statearr_15831;
})();var statearr_15832_15854 = state_15811__$1;(statearr_15832_15854[2] = inst_15805);
(statearr_15832_15854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15812 === 15))
{var inst_15801 = (state_15811[2]);var state_15811__$1 = state_15811;var statearr_15833_15855 = state_15811__$1;(statearr_15833_15855[2] = inst_15801);
(statearr_15833_15855[1] = 14);
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
});return ((function (switch__8688__auto__){
return (function() {
var state_machine__8689__auto__ = null;
var state_machine__8689__auto____0 = (function (){var statearr_15837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15837[0] = state_machine__8689__auto__);
(statearr_15837[1] = 1);
return statearr_15837;
});
var state_machine__8689__auto____1 = (function (state_15811){while(true){
var ret_value__8690__auto__ = (function (){try{while(true){
var result__8691__auto__ = switch__8688__auto__.call(null,state_15811);if(cljs.core.keyword_identical_QMARK_.call(null,result__8691__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8691__auto__;
}
break;
}
}catch (e15838){if((e15838 instanceof Object))
{var ex__8692__auto__ = e15838;var statearr_15839_15856 = state_15811;(statearr_15839_15856[5] = ex__8692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8690__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15857 = state_15811;
state_15811 = G__15857;
continue;
}
} else
{return ret_value__8690__auto__;
}
break;
}
});
state_machine__8689__auto__ = function(state_15811){
switch(arguments.length){
case 0:
return state_machine__8689__auto____0.call(this);
case 1:
return state_machine__8689__auto____1.call(this,state_15811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8689__auto____0;
state_machine__8689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8689__auto____1;
return state_machine__8689__auto__;
})()
;})(switch__8688__auto__))
})();var state__8705__auto__ = (function (){var statearr_15840 = f__8704__auto__.call(null);(statearr_15840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8703__auto___15841);
return statearr_15840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8705__auto__);
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
