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
        var noOfBedRoomOptions = [{label:'ALL',value:'ALL'},
                                        {label:'1',value:'1'},
                                        {label:'2',value:'2'},
                                        {label:'3',value:'3'},
                                        {label:'4',value:'4'}];
        component.set('v.noOfBedRoomOptions',noOfBedRoomOptions);
                var noOfBathRoomOptions = [{label:'ALL',value:'ALL'},
                                        {label:'1',value:'1'},
                                        {label:'2',value:'2'},
                                        {label:'3',value:'3'},
                                        {label:'4',value:'4'}];
        component.set('v.noOfBathRoomOptions',noOfBathRoomOptions);
}
})