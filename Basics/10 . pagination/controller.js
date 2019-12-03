({
doInit : function(component, event, helper) {
component.set('v.columns',[
             {label:'Account Name',fieldName:'Name',type:'text',editable: true} ,
            {label:'Industry',fieldName:'Industry',type:'text',editable: true} ,
            {label:'Phone',fieldName:'Phone',type:'phone',editable: true} ,
            {label:'Rating',fieldName:'Rating',type:'text'} ,
            {label:'Website',fieldName:'Website',type:'url'}
        ]
        );
        helper.getAccounts(component, event, helper);
},
    onPrev:function(component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set('v.pageNumber',pageNumber-1);
        helper.getAccounts(component, event, helper);       
    },
    onNext:function(component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set('v.pageNumber',pageNumber+1);
        helper.getAccounts(component, event, helper);       
    },
     onFirst:function(component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set('v.pageNumber',1);
        helper.getAccounts(component, event, helper);       
    },
})