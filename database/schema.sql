create table family(
    id integer primary key, 
    username varchar(50),
    pid integer, 
    ppid integer, 
    title varchar(50),
    img varchar(100),
    main_user boolean, 
    tag varchar(20)
);

drop table family;



INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('King George VI', NULL, NULL, 'The greatest', 'https://cdn.balkan.app/shared/f1.png', TRUE, NULL); 


INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('Queen Elizabeth', 1, NULL, 'Queen Eliz', 'https://cdn.balkan.app/shared/f2.png', FALSE, 'partner'); 

INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('Queen Elizabeth II', 1, 2, 'The baby', 'https://cdn.balkan.app/shared/f5.png', FALSE, NULL); 



create table memories(
    name varchar(50) primary key, 
    img varchar(100),
    labels text,
    happy boolean
);

drop table memories;

delete from memories;