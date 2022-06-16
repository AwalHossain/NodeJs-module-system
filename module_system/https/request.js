
function encrypt (data){
    return 'encryped data';
}


function send(url, data){
    const encrypeeData = encrypt(data);
    console.log(`Sendign ${encrypeeData} to ${url} `);
}


module.exports = {
    send
}

