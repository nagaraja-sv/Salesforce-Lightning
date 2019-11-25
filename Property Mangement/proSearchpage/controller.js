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
    }
})