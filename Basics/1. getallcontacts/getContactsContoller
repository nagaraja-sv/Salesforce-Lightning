public class ContactOperation {
    @AuraEnabled
    public static List<Contact> getAllContact(){
        return  [Select FirstName,LastName, Phone, Email, Title,Account.Name from Contact];
    }
}