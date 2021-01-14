// Set up MySQL connection.
const mysql = require('mysql');
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: 'lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'cbrxr4wvkfv4baid',
    password: 'vwwrj0squ4mx69y2!',
    database: 'o0effs2ujic95mna'
  });
};
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'mikeServer1!',
//   database: 'burgers_db',
// });

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
