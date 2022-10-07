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


INSERT INTO locality (id, name,cities_id)
VALUES
(1, 'Usaquen', 1),
(2, 'Chapinero', 1),
(3, 'Santa Fe', 1),
(4, 'San Cristobal', 1),
(5, 'Usme', 1),
(6, 'Tunjuelito', 1),
(7, 'Bosa', 1),
(8, 'Kennedy', 1),
(9, 'Fontibon', 1),
(10, 'Engativa',1),
(11, 'Suba', 1),
(12, 'Barrios Unidos',1),
(13, 'Teusaquillo', 1),
(14, 'Los Martires', 1),
(15, 'Antinio Nariño', 1),
(16, 'Puente Aranda', 1),
(17, 'La Candelaria', 1),
(18, 'Rafael Uribe Uribe', 1),
(19, 'Ciudad Bolivar', 1),
(20, 'Sumapaz', 1);