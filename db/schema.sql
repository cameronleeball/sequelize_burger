create database 'burgers_db';
use 'burgers_db';
create table 'burgers'(
    id int auto_incrememt not null,
    burger_name varchar(50) not null,
    devoured boolean default false,
    createdAt timestamp,
    updatedAt timestamp,
    primary key (id)
);
