# Discord-snowflake-to-timestamp
Converts a Discord snowflake ID into a timestamp via bit-magic.


A snowflake is a unique ID used by Discord. Posts, servers and users all have a snowflake ID. It is an integer value, which is converted into a 64-bit binary number. We're particularly interested in the bits 22 to 64, which correspond to the timestamp of the ID, which is when the entity in question was created.