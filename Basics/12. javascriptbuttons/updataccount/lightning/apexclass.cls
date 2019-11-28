public class AccountUpdateLightning{
    @AuraEnabled
    public static void AccountUpdate(string accId){
        Account acc = new Account(id=accid,rating='HOT');
        update acc;
    }
}