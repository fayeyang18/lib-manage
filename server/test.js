var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'anywhere',       
  port: '3306',                   
  database: 'book' 
}); 
 
connection.connect();
 
var  addSql = 'INSERT INTO book(id,name) VALUES(3,?)';
var  addSqlParams = ['CSS权威指南'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});

var  sql = 'SELECT * FROM book';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
