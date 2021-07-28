# Discord-snowflake-to-timestamp
Converts a Discord snowflake ID into a Unix timestamp via bit-magic.


A snowflake is a unique ID used by Discord. Posts, servers and users all have a snowflake ID. It is an integer value, which is converted into a 64-bit binary number. We're particularly interested in the bits 22 to 64, which correspond to the amount of milliseconds (ms) since 00:00 1.1.2015, which is 1420070400000 ms since 1.1.1970. After adding both ms values together, we convert it into Unix time using  the Date() -function.