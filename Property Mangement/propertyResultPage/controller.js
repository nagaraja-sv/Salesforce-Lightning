({
    fetchAllProperty : function(component, event, helper) {
        var action = component.get('c.getLatestProperties');
        action.setCallback(this,function(response){
            console.log('response.getreturnValue()'+response.getReturnValue());
            console.log(response.getState());
            var responsevalue = response.getReturnValue();
            component.set('{!v.propertyList}',responsevalue);
            component.set('{!v.propertiesFound}',true); 
        });
        $A.enqueueAction(action,false);
    },
    ownerDetailsClick : function(component, event, helper) {
        
        var eventSource = event.getSource();
        var propOwnerId = eventSource.get('v.value');
        component.set('v.propownerId',propOwnerId);
        
        console.log('propownerId'+ propOwnerId);
        component.set('{!v.openOwnerDetails}',true);
        
        
        
        
    },
    closeownerDetailsClick : function(component, event, helper) {
        
        component.set('{!v.openOwnerDetails}',false);
        
    },
    closeEnquiryModel : function(component, event, helper) {
        
        component.set('{!v.openEnqDetails}',false);
        
    },
    feedbackClicked : function(component, event, helper) {
        
        var eventSource = event.getSource();
        var propId = eventSource.get('v.value');
        component.set('v.propertyId',propId);     
        component.set('{!v.openEnqDetails}',true); 
        
    },
    NavigateToPropDetails : function(component, event, helper) {
        alert('calling javascript');
        
        var navService = component.find("navService");
        var eventSource = event.getSource();
        var proId = eventSource.get('v.value');
        console.log('proId'+proId);
        
        var pageReference = {
            type: "standard__component",
            attributes:{
                componentName:"c__myMasterPropertyTab"
            },
            state:{
                "c__propertyId":proId
            }
        };
        console.log('NavigateToPropDetails pageReference'+pageReference);
        component.set("v.pageReference",pageReference);
        console.log('NavigateToPropDetails pageReference'+JSON.stringify(pageReference));
        navService.navigate(pageReference);
        
        
    }
})