# deploy9

A library to automatically deploy commands to joyent

## Install 

```
npm install deploy9 -g
```

## Usage 

This lib Assumes your system is already capable of accessing Joyent from the commandline with a non-password protected key.

If you keyfile is password protected see Generating Non-Password Keys below

```
deploy9 COMMANDTORUN -a USERNAME -i NAMEOFKEYONSERVER  -k YOURPRIVATEKEY
```

Example 

```
deploy9 ls -a nearform -i /nearform/keys/nearform_joyent_rsa  -k nearform_joyent_rsa
```

## Generating Non-Password Keys 

Create an key file that is not password protected 

```
ssh-keygen -t rsa -C "your-email@email.con"
```

## MAKE SURE THAT YOU SPECIFIY A DIFFERENT LOCATION THAN THE DEFAULT

Don't enter a password. 
This is required as ssh2 has no way of prompting for passwords as yet. 

Copy the .pub up to your Joyent public key store 


## TODO

1. Execute multiple commands instead of one huge string to improve debugging. 

2. Improve error handling 

## Licence

MIT

