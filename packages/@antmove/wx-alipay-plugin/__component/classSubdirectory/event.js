var slice = [].slice;

/*
* event control class
* @param {context}
*/

function Event(ctx){
    this._ctx = ctx || this;
    this._events = {};
}

var EventProto = Event.prototype;

/*
* bind a event
* @param {event} eventType
* @param {fn} function
*/
EventProto.on = function(event, fn){
    this._events[event] = this._events[event] || [];
    this._events[event].push(fn);

    return this;
};

/*
* bind an event but only called one time
* @param {event} eventType
* @param {fn} function
*/
EventProto.once = function(event, fn){
    var self = this;

    //when fn is called, remove all event listener
    function fnWrap(){
        self.off(event, fnWrap);
        fn.apply(this, arguments);
    }

    //to specifiy remove method
    fnWrap.fn = fn;
    this.on(event, fnWrap);
    return this;
};


/*
* unbind an event  
* @param {event} eventType
* @param {fn} function
*/

EventProto.off = function(event, fn){
    //remove all events
    if(!arguments){
        this._events = {};
        return this;
    }

    //there are not fn binded
    var events = this._events[event];
    if(!events) return this;

    //remove an type events
    if(arguments.length === 1 && typeof event === 'string'){
        delete this._events[event];
        return this;
    }

    //remove fn
    var handler;
    for(var i = 0; i < events.length; i++){
        handler = events[i];
        if(handler === fn || handler.fn === fn){
            events.splice(i, 1);
            break;
        }
    }
    return this;
};

/*
* emit
* @param {event}
* @param {fn param}
*/
EventProto.emit = function(event){
    var events = this._events[event],
        args;
    if(events){
        events = events.slice(0);
        args = slice.call(arguments, 1);
        events.forEach((event)=>{
            event.apply(this._ctx, args);
        });
    }
    return this;
};

export default Event;