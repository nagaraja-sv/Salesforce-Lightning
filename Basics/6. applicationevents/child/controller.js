({
    handelClick : function(component, event, helper) {
        //get the event 
        var appEvent = $A.get('e.c:ApplicationEventExample')
        appEvent.setParams({
            "message" : "Value Fried from the Component 1"
        });
        appEvent.fire();
    }
})