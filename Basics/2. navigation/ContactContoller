public class ContactListController {
@AuraEnabled
public static list<contact> getContacts(string accountId){
    system.debug('accountId'+accountId);
    list<contact> contactList =[SELECT ID,FIRSTNAME,LASTNAME,NAME,EMAIl,PHONE
                                FROM contact
                                ];
        system.debug('contactList'+contactList);
    return contactList;
}
}
