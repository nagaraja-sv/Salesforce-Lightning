public class AccounntPaginationController {
@AuraEnabled
    public static list<Account> getAccountsWithOffset(string pageSize,string pageNumber){
    integer ps  = integer.valueof(pagesize);
        integer pn  = integer.valueof(pageNumber)-1;
        list<Account> accounts = [SELECT ID, Name, Phone,Industry,Rating,Website from Account
                                 Limit :ps OFFSET :(ps*pn)];
        return accounts;
    }
    /*page no       page size
        1          3             limit 3   pn*ps = 0*3 = 0
        2          3             limit 3   1*3 = 3
        offset 3 */
}