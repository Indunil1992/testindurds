module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["DBInstanceIdentifier1"] = {
        host: process.env.EndPoint_rdsDBInstanceIdentifier1,
        port: process.env.Port_rdsDBInstanceIdentifier1,
        user: process.env.User_rdsDBInstanceIdentifier1,
        password: process.env.Password_rdsDBInstanceIdentifier1,
        database: "DatabaseName1"
    };
};