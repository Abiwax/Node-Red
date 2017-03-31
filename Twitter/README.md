# Twitter Sentiment

Simple twitter sentiment application.
1. get/twittersentiments: main application contains a switch to check if data has been created by sentiments
2. twitter flow from twitter to sentiment to cloudant or debug
3. get/sentiments: get sentiments from cloudant , convert it to a different format and return.
4. inject, run every few seconds to check the size of data in the cloudant db, if its up to 7 or 8, send a mail or output to debug
