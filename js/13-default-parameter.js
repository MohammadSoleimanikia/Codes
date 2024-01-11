// default params used with equal sign and if we dont pass value it use the default
function rollDie(numSides=6)
{
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie());