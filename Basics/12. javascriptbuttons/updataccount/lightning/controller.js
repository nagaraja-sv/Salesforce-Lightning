({
    updateRating:function(component,event,helper){
alert('Hi');
        var action = component.get('c.AccountUpdate');

        action.setParams({
            'accId':component.get('v.recordId')
        });

        action.setCallback(this,function(response){
            

                $A.get("e.force:closeQuickAction").fire();

           
        });
        $A.enqueueAction(action);
    }
})