({
initFilter : function(component, event, helper) {
        var locationOption =[{label:'ALL',Value:'ALL'},
                             {label:'Banglore',Value:'Banglore'},
                            {label:'Hyderabad',Value:'Hyderabad'},
                             {label:'Mumbai',Value:'Mumbai'},
                             {label:'Pune',Value:'Pune'},
                             {label:'Bhubaneswar',Value:'Bhubaneswar'}
                            ];
        component.set('v.locationOptions',locationOption);
}
})