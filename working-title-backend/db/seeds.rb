FavoriteMuseum.destroy_all
FavoriteExhibit.destroy_all
Item.destroy_all
Exhibit.destroy_all
Museum.destroy_all
User.destroy_all

u1 = User.create(username: "stephen", password_digest: BCrypt::Password.create('guest'), bio: "I fux with code")
u2 = User.create(username: "anam", password_digest: BCrypt::Password.create('guest'), bio: "I like rocks")
u3 = User.create(username: "paul", password_digest: BCrypt::Password.create('guest'), bio: "I lie in bed all day, coding while my beard grows")
u4 = User.create(username: "caleb", password_digest: BCrypt::Password.create('guest'), bio: "I don't use a mouse, and I watch Paul's beard grow")

m1 = Museum.create(user_id: u1.id, name: "Cullen Sculpture Garden", description: 
"A collection of original and replica sculptures connected to the Glassell School of Art, placed in a park environment", country: "USA", state: "Texas", city: "Houston", category: "Art")
m2 = Museum.create(user_id: u1.id, name: "Houston Museum of Natural Sciences", description: "Houston's oldest Science Museum, host of a famous Paleontology Hall, gemology exhibit, planetarium, and indoor butterfly center", country: "USA", state: "Texas", city: "Houston", category: "Science")

# Test case for museums with nothing but a name, no exhibits and no items.
m3 = Museum.create(user_id: u4.id, name: "Nihilism Museum")

e1 = Exhibit.create(museum_id: m1.id, name: "The Garden", description: "Serene enclave for viewing sculptures with tables for dining", depth:50, width:35, height: 5, background_image: "https://tclf.org/sites/default/files/thumbnails/image/CullenSculptureGarden_feature_07_CharlesBirnbaum_2005.jpg")
e2 = Exhibit.create(museum_id: m2.id, name: "Life in Stone", description: "A selection of carvings the Gerd Dreher, the preeminent lapidolary artist from a multigenerational family of artists", depth: 20, width:10, height: 5, background_image: "https://www.hmns.org/wp-content/uploads/2014/02/391.jpg")
e3 = Exhibit.create(museum_id: m2.id, name: "Art of the Gunsmith: from Columbus to Napoleon", description: "Traditional Gunsmithing and Firearms Tech in the European and North African World", depth: 30, width:30, height: 4, background_image: "https://www.hmns.org/wp-content/uploads/2019/02/antique-firearms-gunsmithing-houston-museum-of-natural-science.jpg")

# Test case for exhibits with nothing but a name and parent museum, no info and no items
e4 = Exhibit.create(museum_id: m2.id, name: "Solipsism")

FavoriteExhibit.create(user_id: u2.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u2.id, exhibit_id: e2.id)
FavoriteExhibit.create(user_id: u1.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u3.id, exhibit_id: e3.id)
FavoriteExhibit.create(user_id: u3.id, exhibit_id: e3.id)

FavoriteMuseum.create(user_id: u1.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u2.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u3.id, museum_id: m1.id)


Item.create(exhibit_id: e1.id, name: "Oiseau (Bird)", description: "Spiky abstract sculpture in Bronze, cast in 1981", creator: "Joan Miró", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1968, item_code: "2000.540", image: "https://photos.app.goo.gl/x7DcpVwGzJaMtzXe7", depth: 2, width: 2, height: 3, model:"", x_pos: 0, y_pos: 0, z_pos: 0)

Item.create(exhibit_id: e1.id, name: "Decanter", description: "Steel and Bronze", creator: "Frank Stella", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1987, item_code: "87.239", image: "https://photos.app.goo.gl/yeZNQCDtyL17EM3G6", depth: 2, width: 2, height: 2, model:"", x_pos: 1, y_pos: 1, z_pos: 1)

Item.create(exhibit_id: e1.id, name: "Conversation with the Wind", description: "Steel", creator: "Pietro Consagra", country_of_origin: "Italy", state_of_origin: "", city_of_origin: "", year_of_origin: 1962, item_code: "63.9", image: "https://photos.app.goo.gl/ehed83cabHbAQvJLA", depth: 3, width: 1, height: 3, model:"", x_pos: 1, y_pos: 0, z_pos: 2)

Item.create(exhibit_id: e1.id, name: "Magari", description: "Welded Steel", creator: "Mark Di Suvero", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1977, item_code: "81.39", image: "https://photos.app.goo.gl/UEHzrEWnJJ7y8btA8", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(exhibit_id: e2.id, name: "Sea Otters", description: "Agate and Smoky Quartz", creator: "Gerd Dreher", country_of_origin: "Brazil", state_of_origin: "Minas Gerais", city_of_origin: "", year_of_origin: 0, item_code: "50.2015.47", image: "https://photos.app.goo.gl/tn3LcN62SYv9EWa67", depth: 1, width: 1, height: 1, model:"", x_pos: 0, y_pos: 0, z_pos: 0)