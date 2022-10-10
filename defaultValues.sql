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

INSERT INTO mydb.pet_types (name) values 
('Perro'), ('Gato');

INSERT INTO mydb.breeds (name, pet_type_id) values 
('Chihuahua', 1),
('Bulldog', 1),
('Pitbull bum dale, mr worldwide', 1),
('Abisinio', 2),
('Asiático', 2),
('Azul ruso', 2);

'''
/oauth/signip POST
{
    "email": "johan@gmail.com",
    "password": "1123123",
    "first_name": "Johan",
    "last_name": "Mancilla",
    "document_type_id": 1,
    "document_number": "23123112",
    "country_id": 1,
    "city_id": 1,
    "locality_id": 1
}
'''

-- INSERT INTO mydb.users (document_type_id, document_number, first_name, last_name, email, country_id, city_id, locality_id) values 
-- (1, '1000250190', 'Salomón', 'Salmón', 'salomon@gmail.com', 1, 1, 1),
-- (1, '1000250191', 'Johan', 'Mancilla', 'johan@gmail.com', 1, 1, 1),
-- (1, '1000250192', 'Israel', 'De la rose', 'israel@gmail.com', 1, 1, 1);







