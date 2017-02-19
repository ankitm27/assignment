#!/bin/bash
apt-get install nodejs
apt-get install npm
mysql -uroot -proot -e "create database login"
mysql -u root -proot -Bse "create table login.users( username varchar(20), email varchar(50), password varchar(100), created_date date)"
