function ipv4Parser(ip, mask){
    const ipOctets = ip.split('.').map(Number);
    
    const maskOctets = mask.split('.').map(Number);  
    
    const networkBlock = ipOctets.map((octet, i) => octet & maskOctets[i]).join('.');
  
    const hostID = ipOctets.map((octet, i) => octet - (octet & maskOctets[i])).join('.');
    
    return [networkBlock, hostID];
}