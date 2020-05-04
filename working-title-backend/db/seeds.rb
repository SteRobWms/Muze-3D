FavoriteMuseum.destroy_all
FavoriteExhibit.destroy_all
Item.destroy_all
Room.destroy_all
Exhibit.destroy_all
Museum.destroy_all
User.destroy_all

u1 = User.create(username: "stephen", password_digest: BCrypt::Password.create('guest'), bio: "I fux with code")
u2 = User.create(username: "anam", password_digest: BCrypt::Password.create('guest'), bio: "I like rocks")
u3 = User.create(username: "paul", password_digest: BCrypt::Password.create('guest'), bio: "I lie in bed all day, coding while my beard grows")
u4 = User.create(username: "caleb", password_digest: BCrypt::Password.create('guest'), bio: "I don't use a mouse, and I watch Paul's beard grow")

m1 = Museum.create(user_id: u1.id, name: "Cullen Sculpture Garden", description: 
"A collection of original and replica sculptures connected to the Glassell School of Art, placed in a park environment", country: "USA", state: "Texas", city: "Houston", category: "Art")#, background_image: "https://static.mfah.com/app/images/571fa1b7-ff32-48ac-9ef5-fee0ea8a44f6.jpg?maxWidth=1600&maxHeight=1600&format=jpg&quality=90")
m2 = Museum.create(user_id: u1.id, name: "Houston Museum of Natural Sciences", description: "Houston's oldest Science Museum, host of a famous Paleontology Hall, gemology exhibit, planetarium, and indoor butterfly center", country: "USA", state: "Texas", city: "Houston", category: "Science")#, background_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/HoustonMuseumOfNaturalScience_Pano.jpg/2880px-HoustonMuseumOfNaturalScience_Pano.jpg")

# Test case for museums with nothing but a name, no exhibits and no items.
m3 = Museum.create(user_id: u4.id, name: "Nihilism Museum")

e1 = Exhibit.create(museum_id: m1.id, name: "The Garden", description: "Serene enclave for viewing sculptures with tables for dining", depth:50, width:35, height: 5, background_image: "https://tclf.org/sites/default/files/thumbnails/image/CullenSculptureGarden_feature_07_CharlesBirnbaum_2005.jpg", img_prefix: 'cullen')
e2 = Exhibit.create(museum_id: m2.id, name: "Life in Stone", description: "A selection of carvings the Gerd Dreher, the preeminent lapidolary artist from a multigenerational family of artists", depth: 20, width:10, height: 5, background_image: "https://www.hmns.org/wp-content/uploads/2014/02/391.jpg", img_prefix: 'gerd')
e3 = Exhibit.create(museum_id: m2.id, name: "Art of the Gunsmith: from Columbus to Napoleon", description: "Traditional Gunsmithing and Firearms Tech in the European and North African World", depth: 30, width:30, height: 4, background_image: "https://www.hmns.org/wp-content/uploads/2019/02/antique-firearms-gunsmithing-houston-museum-of-natural-science.jpg", img_prefix: 'gunsmith')

# Test case for exhibits with nothing but a name and parent museum, no info and no items
e4 = Exhibit.create(museum_id: m2.id, name: "Solipsism", img_prefix: 'solipsism')

FavoriteExhibit.create(user_id: u2.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u2.id, exhibit_id: e2.id)
FavoriteExhibit.create(user_id: u1.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u3.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u4.id, exhibit_id: e3.id)

FavoriteMuseum.create(user_id: u1.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u2.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u3.id, museum_id: m1.id)

r1 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r2 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r3 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r4 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r5 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r6 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r7 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r8 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r9 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r10 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r11 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r12 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r13 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r14 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r15 = Room.create(exhibit_id: e1.id, background_image: 'cullen', img_prefix: 'cullen')
r16 = Room.create(exhibit_id: e2.id, background_image: 'cullen', img_prefix: 'cullen')

Item.create(room_id: r1.id, name: "Oiseau (Bird)", description: "Spiky abstract sculpture in Bronze, cast in 1981", creator: "Joan Miró", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: "1968", item_code: "2000.540", image: "oiseau_(bird)", depth: 2, width: 2, height: 3, model:"", x_pos: 0, y_pos: 0, z_pos: 0)

Item.create(room_id: r2.id, name: "Decanter", description: "Steel and Bronze", creator: "Frank Stella", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: "1987", item_code: "87.239", image: "decanter", depth: 2, width: 2, height: 2, model:"", x_pos: 1, y_pos: 1, z_pos: 1)

Item.create(room_id: r2.id, name: "Conversation with the Wind", description: "Steel", creator: "Pietro Consagra", country_of_origin: "Italy", state_of_origin: "", city_of_origin: "", year_of_origin: "1962", item_code: "63.9", image: "conversation_with_the_wind", depth: 3, width: 1, height: 3, model:"", x_pos: 1, y_pos: 0, z_pos: 2)

Item.create(room_id: r3.id, name: "Magari", description: "Welded Steel", creator: "Mark Di Suvero", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: "1977", item_code: "81.39", image: "magari", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r3.id, name: "Cybele", description: "Bronze", creator: "August Rodin", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1890", item_code: "", image: "cybele", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r4.id, name: "The Dance", description: "Bronze", creator: "Linda Ridgway", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", year_of_origin: "2000", item_code: "2000.55", image: "the_dance", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r4.id, name: "Untitled", description: "Bronze", creator: "Joel Shapiro", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", year_of_origin: "1990", item_code: "90.487", image: "untitled_01", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r5.id, name: "The Pilgrim (Il Pellegrino", description: "Bronze", creator: "Marino Marini", country_of_origin: "Italy", state_of_origin: "", city_of_origin: "", year_of_origin: "1939", item_code: "88.111", image: "the_pilgrim", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r5.id, name: "Big Twist", description: "Bronze", creator: "Bryan Hunt", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", year_of_origin: "1978", item_code: "2007.585", image: "big_twist", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r6.id, name: "Quarantania I", description: "Bronze", creator: "Louise Bourgeois", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1953", item_code: "85.214", image: "quarantania_i", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r7.id, name: "Houston Triptych", description: "Bronze", creator: "Ellsworth Kelly", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: "1986", item_code: "86.487.1,.2,.3", image: "houston_triptych", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r7.id, name: "Back I, II, III, IV", description: "Bronze", creator: "Henri Matisse", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1930", item_code: "80.68, 80.69, 80.70, 80.71", image: "back_i_ii_iii_iv", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r8.id, name: "Recuerdo de Machu Picchu No. 3 (Las terrazas)", description: "Oxidized Iron", creator: "Eduardo Ramirez Villamizar", country_of_origin: "Colombia", state_of_origin: "", city_of_origin: "", year_of_origin: "1984", item_code: "2013.90", image: "recuerdo_de_machu_picchu_no_3_(las_terrazas)", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r8.id, name: "Spirit of Eternal Repose", description: "Bronze", creator: "Auguste Rodin", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1899", item_code: "", image: "spirit_of_eternal_repose", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r9.id, name: "Two Circle Sentinel", description: "Stainless Steel", creator: "David Smith", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", year_of_origin: "1961", item_code: "84.202", image: "two_circle_sentinel", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r9.id, name: "Spatial Concept/Nature No. 1", description: "Bronze", creator: "Lucio Fontana", country_of_origin: "Italy", state_of_origin: "", city_of_origin: "", year_of_origin: "1965", item_code: "67.15", image: "spatial_concept_nature_no_1", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r10.id, name: "Gymnast II", description: "Bronze", creator: "William Tucker", country_of_origin: "Great Britain", state_of_origin: "", city_of_origin: "", year_of_origin: "1985", item_code: "2007.695", image: "gymnast_ii", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r10.id, name: "Gymnast II", description: "Bronze", creator: "William Tucker", country_of_origin: "Great Britain", state_of_origin: "", city_of_origin: "", year_of_origin: "1985", item_code: "2007.695", image: "gymnast_ii", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r11.id, name: "The Large Horse", description: "Bronze", creator: "Raymond Duchamp-Villon", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1914", item_code: "70.29", image: "the_large_horse", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r12.id, name: "The Walkng Man", description: "Bronze", creator: "Auguste Rodin", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1905", item_code: "64.24", image: "the_walking_man", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r13.id, name: "New Forms", description: "Bronze", creator: "Tony Cragg", country_of_origin: "Great Britain", state_of_origin: "", city_of_origin: "", year_of_origin: "1992", item_code: "92.170.1,.2", image: "new_forms", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r13.id, name: "Flora, Nude", description: "Bronze", creator: "Aristide Maillol", country_of_origin: "France", state_of_origin: "", city_of_origin: "", year_of_origin: "1910", item_code: "81.40", image: "flora_nude", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r14.id, name: "Exhaling Pearls", description: "Patinated Bronze", creator: "Joseph Havel", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", year_of_origin: "1993", item_code: "94.115", image: "exhaling_pearls", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r15.id, name: "Unknown", description: "Unknown", creator: "Unknown", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", item_code: "", image: "unknown_01", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r3.id, name: "Unknown", description: "Bronze", creator: "Unknown", country_of_origin: "USA", state_of_origin: "", city_of_origin: "", item_code: "", image: "unknown_02", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r2.id, name: "Cloud Column", description: "Stainless Steel", creator: "Anish Kapoor", country_of_origin: "Great Britain", state_of_origin: "", city_of_origin: "", year_of_origin: "2006", item_code: "", image: "cloud_column", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r16.id, name: "Sea Otters", description: "Agate and Smoky Quartz", creator: "Gerd Dreher", country_of_origin: "Brazil", state_of_origin: "Minas Gerais", city_of_origin: "", year_of_origin: "", item_code: "50.2015.47", image: "https://lh3.googleusercontent.com/hkCJbfsJ7B9MtL7zFwzQZ7Pfi34hMDg5sgUO5nFU3g1sjwgzUAYq8RUe9-lhgPY5KlWyh65zYxYO6r6fjG0s2UYOlrF5CdQRSLKcsGtRwxcb--KJcC2BoghXlHoISf5PzBa7nV-rVa6Y98Tqn5Txkvpb3LFFUomSrCaw6KFi8AxhKIsdq9qegbpSsn1rrNsv1wcMkh_CUPrapEofDv-KZOw6Di47USIBJr9ZZRFlE7BxHWiOzvqr1_nn0fY2RVWrTKkVfWNsowzsjiQR_UP6RoM1edlLrnRZte7ktDG0PK076y_RIBYbf2tm2szqeb4pY2Ab2tlm77QY5urhViYNvQFciqkiTuSyczGQMmUIeCvWeav3HOlgF01_mGmvUD5qewFaxAd8Y6kriEYNImtQlOT1e2i6vKR-xMPo4QQhRto7SsFibZ4K80gp9FRS2XPdiKS7RFo3ylMKMS_IHrch9N7O7E9o3Ox2ivCIa1HCHoUONZY8D49zJcnl_GMqf_yv_UjFybB2sovhyiZXDTO5sKv6UycK2iRl_EbXA7jCAzsz9Up_Q2kpzaWnECx4BNTDBHbcF_Ku7NhD3OHH4seE5zkP2UnY_vnfkMAi-cVZm50ZWvbpO88tjLlZGLNkMZS7RXLdjKT1uptcOw-Z8IS-RVhbqNkx_GMB8FhXhZqyzwqwcnBjm9lNdKhiUrPrSs733LHNwHOByfs-qnQdGY3IlDjobfmEU_oZ5q2qpX13tL-ll8PxB3S0j0M=w473-h630-no", depth: 1, width: 1, height: 1, model:"", x_pos: 0, y_pos: 0, z_pos: 0)