public with sharing class WireClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> wireMethod(){
        try {
            List<Account> acc = [select id, name, Phone, Industry from Account limit 10];
            return acc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Contact> updateContact(){
        List<Contact> conList = [select id, name from Contact limit 10];
        update conList;
        return conList;
    }
   
}