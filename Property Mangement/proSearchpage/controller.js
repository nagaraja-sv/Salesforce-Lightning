({
    getAllPros: function(component,event,helper){
        console.log('calling clentside getAllPros');
        var action = component.get('c.getLatestProperties');
        action.setCallback(this,function(response){
            var responsevalue = response.getReturnValue();
            component.set('{!v.proList}',responsevalue);
            component.set('{!v.proNotfound}',true);
        });
        $A.enqueueAction(action,false);
    },
    ownerDeatilsHandler: function(component,event,helper){
        var eveSource = event.getSource();
        var ownerid = eveSource.get('v.value');
        component.set('{!v.proOwnerId}',ownerid);
        component.set('{!v.openOwnerDeatils}',true);
    },
    closemodal: function(component,event,helper){
        component.set('{!v.openOwnerDeatils}',false);
    }
})