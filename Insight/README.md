# Insights

A simple application that gets the percentages of specific personality traits for individuals that made reviews on certain amazon instant videos.

Flow

1. get/review: web service that returns 30 amazon reviews in JSON format.
2. post/wordcloud: web service that gets uses the results from a particular review and formats it to a JQCloud readable format.
3. post/personality: passes the user review to the personality insights service and returns the result.
4. get/insights: return an html template.
5. get/d3tip: makes an http request to d3 tool tip service and returns the information. This is done because the tooltip service doesnt use a secure connection.
