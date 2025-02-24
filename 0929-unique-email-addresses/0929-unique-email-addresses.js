/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const map = new Map();
    for(let i=0; i<emails.length; i++) {
        const email = emails[i];
        const [localName, domainName] = email.split('@');
        let newLocalName = localName.replace(/\./g,'').replace(/\++[a-z]*/g,'');
        const key = `${newLocalName}@${domainName}`;
        map.set(key,  (map.get(key) || 0 ) + 1);
    }
    console.log(map);
    return map.size;
};