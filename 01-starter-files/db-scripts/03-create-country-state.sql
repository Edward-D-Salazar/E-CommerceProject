CREATE TABLE country (
id smallint unsigned NOT NULL auto_increment,
code varchar(2) DEFAULT NULL,
name varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
);

CREATE TABLE state (
id smallint unsigned NOT NULL AUTO_INCREMENT,
name varchar(255) DEFAULT NULL,
country_id smallint unsigned NOT NULL,
primary key (id),
KEY fk_country (country_id),
CONSTRAINT fk_country FOREIGN KEY (country_id) REFERENCES country (id)
);

INSERT INTO country (id, code, name) VALUES
(default, 'BR', 'Brazil'),
(default, 'CA', 'Canada'),
(default, 'DE', 'Germany'),
(default, 'IN', 'India'),
(default, 'TR', 'Turkey'),
(default, 'US', 'United States');

SELECT * FROM country;

