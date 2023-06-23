library(jsonlite)
df <- read.csv('gymdata.csv')
toJSON(df, pretty = T, auto_unbox = T)
