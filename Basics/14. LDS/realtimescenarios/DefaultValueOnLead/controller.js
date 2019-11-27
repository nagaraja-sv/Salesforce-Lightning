({
    createRecord : function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Lead",
            "defaultFieldValues": {
                'Company' : $A.get("$Label.c.LeadCompanyDefaultValue")
            },
            "panelOnDestroyCallback":function(event2) {                  
                var splits = window.location.href.split('/');
                console.log(splits); 
                var returnToList = true;
                for(var s in splits){ 
                    if(splits[s].startsWith("00Q")){
                        returnToList = false;
                        break;
                    }
                }
                 
                if(returnToList===true){
                    var eUrl= $A.get("e.force:navigateToURL");
                    eUrl.setParams({
                        "url": '/lightning/o/Lead/home' 
                    });
                    eUrl.fire();
                } 
            }
        });
        createRecordEvent.fire();
    }
})