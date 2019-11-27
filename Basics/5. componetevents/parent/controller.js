({
	handlerAction : function(component, event, helper) {
		var msg = event.getParam("message");
        component.set("v.ParentMeassage",msg);
	}
})