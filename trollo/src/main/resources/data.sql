INSERT INTO "PUBLIC"."BOARD" VALUES
(1, 'moja ploca');

INSERT INTO "PUBLIC"."CARD_LIST" VALUES
(2, 'moja lista'),
(5, 'moja lista 2');

INSERT INTO "PUBLIC"."BOARD_CARD_LISTS" VALUES
(1, 2),
(1, 5);

INSERT INTO "PUBLIC"."CARD" VALUES
(3, 'opis moje kartice', 'moja kartica'),
(4, 'opis moje kartice', 'moja kartica 2'),
(6, 'opis moje kartice', 'moja kartica'),
(7, 'opis moje kartice', 'moja kartica 2');

INSERT INTO "PUBLIC"."CARD_LIST_CARDS" VALUES
(2, 3),
(2, 4),
(5, 6),
(5, 7);