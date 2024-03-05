public with sharing class SearchClasssLwc {
    @AuraEnabled
    public static List<Account> accSearchMethod(string accName){
        
       List<Account> acc = [select name from Account where name =: accName];
       return acc;
    }
}