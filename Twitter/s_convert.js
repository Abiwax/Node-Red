var new_result = msg.payload;
var total_rows = msg.cloudant.total_rows;
var final_result = {};
var positive_sentiment = {};
var negative_sentiment = {};
positive_sentiment["name"] = "Positive";
negative_sentiment["name"] = "Negative";
positive_sentiment["children"] = [];
negative_sentiment["children"] = [];
for (var i in new_result) {
    p_sentiment = new_result[i]["sentiment"]["positive"];
    n_sentiment = new_result[i]["sentiment"]["negative"];

    if (p_sentiment.length > 0){
        user_sent_list = [];
        user_sent = {};
        user_sent["name"] = new_result[i]["topic"];
        user_sent["children"] = [];
        for (var value in p_sentiment) {
            children = {};
            children["name"] = p_sentiment[value];
            user_sent["children"].push(children)
        }
        positive_sentiment["children"].push(user_sent)
    }


    if (n_sentiment.length > 0) {
        user_sent_list = [];
        user_sent = {};
        user_sent["name"] = new_result[i]["topic"];
        user_sent["children"] = [];
        for (value in n_sentiment) {
            children = {};
            children["name"] = n_sentiment[value];
            user_sent["children"].push(children)
        }
        negative_sentiment["children"].push(user_sent)
    }
}

final_result["name"] = "Twitter Sentiments";
final_result["children"] = [];
final_result["children"].push(positive_sentiment);
final_result["children"].push(negative_sentiment);
final_result["total_rows"] = total_rows;
msg.payload = final_result

return msg;