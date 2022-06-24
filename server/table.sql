create table love_user(
    id serial not null primary key,
	username text,
    password text,
    counter int not null
);
