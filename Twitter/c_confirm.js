rows = msg.cloudant.total_rows;
msg.rows = rows;
msg.payload = "Cloudant has been populated.";
return msg;