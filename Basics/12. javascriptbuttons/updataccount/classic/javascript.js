{!REQUIRESCRIPT("/soap/ajax/30.0/connection.js")}
{!REQUIRESCRIPT("/soap/ajax/30.0/apex.js")}
 
    var result =sforce.apex.execute("AccountUpdateController","AccountUpdate",{accId:"{!Account.Id}"});
    alert("result ");
 
window.location.reload();