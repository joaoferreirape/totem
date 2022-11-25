DROP USER IF EXISTS usr_totem@'%';

CREATE USER 'usr_totem'@'%' IDENTIFIED WITH mysql_native_password BY 'pwd_totem';

GRANT ALL PRIVILEGES ON `totemdb`.* TO 'usr_totem'@'%';
