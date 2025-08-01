CREATE TABLE Cloths (
    cloth_id VARCHAR(10) PRIMARY KEY,
    cloth_type VARCHAR(50),
    client_order VARCHAR(50)
);

CREATE TABLE Processes (
    process_id SERIAL PRIMARY KEY,
    process_name VARCHAR(50)
);

CREATE TABLE Process_Logs (
    log_id SERIAL PRIMARY KEY,
    cloth_id VARCHAR(10),
    process_id INTEGER,
    status VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cloth_id) REFERENCES Cloths(cloth_id),
    FOREIGN KEY (process_id) REFERENCES Processes(process_id)
);

INSERT INTO Cloths (cloth_id, cloth_type, client_order) VALUES
('CLOTH001', 'Cotton', 'ORDER123'),
('CLOTH002', 'Polyester', 'ORDER124');

INSERT INTO Processes (process_name) VALUES
('Spinning'), ('Weaving'), ('Dyeing'), ('Bleaching'), ('Finishing');

