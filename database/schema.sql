create table family(
    id serial primary key, 
    username varchar(50),
    pid integer, 
    ppid integer, 
    title varchar(50),
    img varchar(100),
    main_user boolean, 
    tag varchar(20)
);

drop table family;
-- { id: 1, tags: ["blue"], name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png"},
--             { id: 2, pid: 1, tags: ["partner"], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png" },
--             { id: 3, pid: 1,  ppid: 2, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png"},
--             { id: 4, pid: 3, tags: ["partner"], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png"},
--             { id: 5, pid: 1, ppid: 2, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png"}



INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('King George VI', NULL, NULL, 'The greatest', 'https://cdn.balkan.app/shared/f1.png', TRUE, NULL); 

-- { id: 2, pid: 1, tags: ["partner"], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png" },
--     //         { id: 3, pid: 1,  ppid: 2, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png"},
--     //         { id: 4, pid: 3, tags: ["partner"], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png"},
--     //         { id: 5, pid: 1, ppid: 2, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png"}

INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('Queen Elizabeth', 1, NULL, 'Queen Eliz', 'https://cdn.balkan.app/shared/f2.png', FALSE, 'partner'); 

INSERT INTO family (username, pid, ppid, title, img, main_user, tag) 
VALUES ('Queen Elizabeth II', 1, 2, 'The baby', 'https://cdn.balkan.app/shared/f5.png', FALSE, NULL); 