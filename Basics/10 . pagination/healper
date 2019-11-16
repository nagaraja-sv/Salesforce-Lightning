({
    getAccounts : function(component, event, helper) {
var action =   component.get("c.getAccountsWithOffset");
        action.setParams({
            'pageSize':component.get("v.pageSize").toString(),
            'pageNumber':component.get("v.pageNumber").toString()
        });
        action.setCallback(this,function(response){
        var state = response.getState();
            if(state ==="SUCCESS"){
                if(response.getReturnValue().length < component.get("v.pageSize")){
                component.set("v.isLastPage",true);   
                }
                else{
                    component.set("v.isLastPage",false);
                }
                component.set("v.resultSize",response.getReturnValue().length);
                component.set("v.data",response.getReturnValue());
}
        });
         $A.enqueueAction(action);
}
})