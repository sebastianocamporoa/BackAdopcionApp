INSERT INTO mydb.document_types (id, name, external_code) values 
(1, 'Cédula de ciudadanía', "CC"), 
(2, 'Cédula de extrangería', "CE"),
(3, 'Carné diplomático', "CD"),
(4, 'Pasaporte', "PA"),
(5, 'Salvo conducto de permanencia', "SC"),
(6, 'Permiso especial de permanencia', "PE"),
(7, 'Tarjeta de identidad', "TI"),
(8, 'Documento extranjero', "DE"),
(9, 'Numero de identificación tributaria', "NIT");

INSERT INTO mydb.countries (name) values 
('Colombia');

INSERT INTO mydb.cities (name, country_id) values 
('Bogotá', 1),
('Medellín', 1),
('Cali', 1);

INSERT INTO mydb.localities (name, city_id) values 
('Martires', 1),
('Usme', 1),
('Kennedy', 1);









