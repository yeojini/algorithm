var numUniqueEmails = function(emails) {
    // Set을 사용하면 중복 제거 목적에 더 적합합니다
    const uniqueEmails = new Set();
    
    for(const email of emails) {
        const [localName, domainName] = email.split('@');
        
        const cleanLocalName = localName.split('+')[0].replace(/\./g, '');
        
        const normalizedEmail = `${cleanLocalName}@${domainName}`;
        
        uniqueEmails.add(normalizedEmail);
    }
    
    return uniqueEmails.size;
};