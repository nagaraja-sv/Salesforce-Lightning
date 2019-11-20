({
	fireCompEvent : function(component, event, helper) {
        console.log('Calling Inside Child Contoller');
        // get the event which you want to fire 
        var cmpEvent = component.getEvent("cmt");
        // set the parameter of the event 
        cmpEvent.setParams({
            "message":"message set in component set event"
        });
        cmpEvent.fire();
        // Fire the event using JS Method
	}
})