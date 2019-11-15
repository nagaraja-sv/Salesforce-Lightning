public class ContactOperation {
    @AuraEnabled
    
    public static List<Contact> getAllContact(string aid){
        return  [Select FirstName,LastName, Phone, Email, Title,Account.Name from Contact WHERE AccountId=:aid];
    }
    @AuraEnabled
    public static contact createContact(contact con, string accid){
           System.debug('con==>'+con);
        System.debug('accountid==>'+accid);
        con.accountId = accid;
        
      
        
        insert con;
        return con;
        
    }
}