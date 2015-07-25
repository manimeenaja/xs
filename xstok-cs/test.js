var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCJZ7b2qgxB3ALz9aWrcrXe_UU6wcyvG9w');
var registrationIds = [];
var mysql      = require('mysql');
var update_array = [];
var update_array_st = '';
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'stocklot_db'
});

connection.connect();

connection.query('SELECT *,(SELECT `regid_id` FROM `sll_device_reg` where `sll_device_reg`.`user_id` = `sll_notification`.`user_id` order by `id` desc limit 1) as `regid_id` FROM `sll_notification` WHERE `notification_sent` = "N"', function(err, rows, fields) {
  if (!err) {
    message.addData('title','XSTOK' );
	for(var i = 0; i < rows.length; i++ ) {
		var data = rows;
		update_array.push(data[i]['id']);
		console.log('The solution is: ', data[i]['user_id']);
		if( data[i]['regid_id'] != null) {			
			message.addData('message',data[i]['notification_text']);
			registrationIds.push(data[i]['regid_id']);
			sender.send(message, registrationIds, 4, function (result) {
				//console.log(result);
				});
		} else {
			console.log('Null');
		}		
	}	
	console.log(update_array.toString());
	update_array_st = update_array.toString();
  }
  else
    console.log('Error while performing Query.');
});
connection.query('UPDATE `sll_notification` SET `notification_sent` = "N" WHERE `sll_notification`.`id` in ('+update_array_st+')', function(err, rows, fields) {
	if (!err) {
	} else {
		console.log('UPDATE `sll_notification` SET `notification_sent` = "N" WHERE `sll_notification`.`id` in ('+update_array_st+')');
	}
});
connection.end();