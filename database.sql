create database db_veiculos;
use db_veiculos;

create table veiculos(
    id      int             not null    auto_increment,
    marca   varchar(200)    not null,
    modelo  varchar(200)    not null,
    placa   varchar(7)      not null,
    ano     int             not null,
    primary key(id)
);

create table reservas(
    id          int         not null    auto_increment,
    veiculo_id  int         not null,
    inicio      datetime    not null,
    termino     datetime    not null,
    primary key (id),
    foreign key (veiculo_id) references veiculos (id)
        on update cascade
        on delete restrict
);

insert into veiculos (marca, modelo, placa, ano) values ("VW", "Gol", "NBT2345", 2017);
insert into veiculos (marca, modelo, placa, ano) values ("FORD", "KA", "XER3456", 2017);
insert into veiculos (marca, modelo, placa, ano) values ("FORD", "Ecosport", "PLJ7867", 2018);
insert into veiculos (marca, modelo, placa, ano) values ("FIAT", "Uno", "NBT5411", 2015);