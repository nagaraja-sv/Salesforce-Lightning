({
doInit : function(component, event, helper) {
    //step 1
var action = component.get('c.getContacts');
    console.log('action'+action);
    //step 2 pass parameter if need
    // have to pass accountid parameter with recird id value
    var acId = component.get("v.recordId");
    console.log('acIcd'+acId);
        /* action.setParam({
            accountId:acId
        });*/
    action.setParams({ "accountId": acId });
    //step 4 - callback action
        action.setCallback(this,function(response){
        var responsevalues = response.getReturnValue();
            console.log('responsevalues'+responsevalues);
            component.set('v.contactList',responsevalues);
        });
    //step 3 invoke action- enqueue action
    $A.enqueueAction(action,false);
},
doRedirect:function(component, event, helper) {
        console.log('doRedirect invoked');
    var eventSource = event.getSource();
    console.log('eventSource'+eventSource);
    var cid = eventSource.get("v.name");
    console.log('cid'+cid);
        var ctitle = eventSource.get("v.title");
        console.log('ctitle'+ctitle);
    //step1 - get navigation object which need to use - using $A
    var navEvent = $A.get("e.force:navigateToSObject");
    //step2 - set attribute for navigation - event type
    navEvent.setParams({
        "recordId":cid,
        "slideDevName":"detail"
    });
    // fire the event
    navEvent.fire();
}
})