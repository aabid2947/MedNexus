const Hospital = artifacts.require("Hospital_Contract");

module.exports = function(deployer){
    deployer.deploy(Hospital);
}