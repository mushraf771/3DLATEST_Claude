CREATE TABLE terrain (
    id SERIAL PRIMARY KEY,
    zoom INTEGER NOT NULL,
    x INTEGER NOT NULL,
    y INTEGER NOT NULL,
    data TEXT
);

INSERT INTO terrain (zoom, x, y, data) VALUES
(0, 0, 0, 'Placeholder data for 0/0/0'),
(0, 0, 1, 'Placeholder data for 0/0/1'),
(1, 1, 1, 'Placeholder data for 1/1/1'),
(2, 5, 2, 'Placeholder data for 2/5/2'),
(3, 11, 5, 'Placeholder data for 3/11/5');