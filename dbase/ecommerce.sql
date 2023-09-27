# CREO BD
create database ecommerce;
use ecommerce;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(250),
    precio DECIMAL(12 , 2 ),
    id_categoria INT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(250),
    email VARCHAR(250),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(250),
    PRIMARY KEY (id)
);

# CREO CLAVE FORANEA DE PRODUCTOS REFERENCIANDO A CATEGORIAS
alter table productos
add foreign key(id_categoria) references categorias(id);

#INSERTO REGISTROS EN TABLA USUARIOS
insert into usuarios (nombre, email) values ('OSCAR MARMELI', 'oscarmarmeli@gmail.com');

#INSERTO REGISTROS EN TABLA PRODUCTOS
insert into productos (nombre, precio, id_categoria) values ('PARRILLA PARANA', 56700, 1);
insert into productos (nombre, precio, id_categoria) values ('PARRILLA PACIFICO', 58500, 3);
insert into productos (nombre, precio, id_categoria) values ('PARRILLA DELTA', 42300, 1);
insert into productos (nombre, precio, id_categoria) values ('PARRILLA MALEVO', 68700, 1);
insert into productos (nombre, precio, id_categoria) values ('PARRILLA PUMA', 65400, 2);
insert into productos (nombre, precio, id_categoria) values ('PARRILLA CAMPER', 48300, 2);

