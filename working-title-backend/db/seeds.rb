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
"A collection of original and replica sculptures connected to the Glassell School of Art, placed in a park environment", country: "USA", state: "Texas", city: "Houston", category: "Art", background_image: "https://static.mfah.com/app/images/571fa1b7-ff32-48ac-9ef5-fee0ea8a44f6.jpg?maxWidth=1600&maxHeight=1600&format=jpg&quality=90")
m2 = Museum.create(user_id: u1.id, name: "Houston Museum of Natural Sciences", description: "Houston's oldest Science Museum, host of a famous Paleontology Hall, gemology exhibit, planetarium, and indoor butterfly center", country: "USA", state: "Texas", city: "Houston", category: "Science", background_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/HoustonMuseumOfNaturalScience_Pano.jpg/2880px-HoustonMuseumOfNaturalScience_Pano.jpg")

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
FavoriteExhibit.create(user_id: u4.id, exhibit_id: e3.id)

FavoriteMuseum.create(user_id: u1.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u2.id, museum_id: m2.id)
FavoriteMuseum.create(user_id: u3.id, museum_id: m1.id)

r1 = Room.create(exhibit_id: e1.id)
r2 = Room.create(exhibit_id: e1.id)
r3 = Room.create(exhibit_id: e1.id)
r4 = Room.create(exhibit_id: e1.id)
r5 = Room.create(exhibit_id: e2.id)

Item.create(room_id: r1.id, name: "Oiseau (Bird)", description: "Spiky abstract sculpture in Bronze, cast in 1981", creator: "Joan Miró", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1968, item_code: "2000.540", image: "https://lh3.googleusercontent.com/7MiyEGXXBRt3gM8ISw5f-bD8euleqgFDpom6gCPxfIhEp1v21AiN1cl7coDmYExpvWtkd1C3NnmxgEUMdaQqbmYrVtWqTEtN8oGTps9AsqP24BGhSx6VDchEZAyttoDNNbtQljbloK8ABtEYTk4DCTiejjOjkxDHv65BQnprl0cpT-eQ-DL4GuvOAIA2JBNGAZcD0pBm04enHTZtGdw7nPlf3oEA1JEtEtsRfyWlHDyuY-S_nFcawuKfVuNFUhoxn6VP6QLvpSoDTOEGYFOCWtKUNFcsrrgRUBxfOMUXgrc3VykyvFOzwEo3Q1PWrrOqqptRA3MmErztmwxVe5AxxYJNxGDf2uBduPTj1IbfsVkhg1sOaFgsZ3s-G6wI2NzX4cGYT22Ns_KbSX_4gD9-yKnQmRPuXeLi6pJrSkdamDm01QAYbguVkvzqkG-wqzXCbPUrfmONwd_HbDeQehcEp5bhPpTOP1FypW_ta5R0i9rWKGHLm-IH1i9tyO0LyLygRn_7D6o_38BZhK5Ni2Ydby9gzk3m2k-vkMykB2yHIDcmpH_pmfuE8kpmP4nbrivBSepdALyUu7iqN5VJN2UQTr7vjHAZpqslor1OiayD6Ey42oFBMSStkq1KeencgfmVkXH7gtNerUtLJBEyFm56s-yNNsx3gjKb_khiffKYvFk67I5jna8fbDjHFbasJlXrbcwooEQm0s6kegzASgME_pdx6VQAQZLKsm_d3lJ6UmfXVbSHT5z5Dfk=w1182-h1576-no", depth: 2, width: 2, height: 3, model:"", x_pos: 0, y_pos: 0, z_pos: 0)

Item.create(room_id: r2.id, name: "Decanter", description: "Steel and Bronze", creator: "Frank Stella", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1987, item_code: "87.239", image: "https://lh3.googleusercontent.com/0_JQ12qyAB3yK-5qfq9qU4SIMdw4Py_pj8P4QGYkV7t-zYoGbj0zxLBsYRXiSBfyOkh1IwdALKjE2WgQmku54JM3iwUdWuBpKdcJd_8Hob83AD3_d5MtMarGZCEgpA057n1gTps82AUbljnDfreAy_TPDUKPB7-xHU7sG4AmKORmPZ4eqT0HhdmVcsJJ2g8zWnD_0msLMNY16-jXwh2weXLVQWSLN97qURBNVKEztQ2zzwL8T1UGqoCHy7fsW_AI6ucoq8AwxYnUDUi7q5sTOTO8XH68qSCn5CQ0wtZVnWa4aEmJ-f_E1-sBwAdn6dilYr_AKaibvFnzfvtCPgpmsqLrR9f8v8yLM2wtfPcXvGsc-7O36fHXwq8KVIPOvNuyro8PSsMHCl6xg_NzRTxRqG2gMwjEDJAJddcf3MhXTUrdyKnHzKwzCq7h1GtmcDbYQir6ouGgRlTkjH__spHw2ezvfoF8g-t6xt7k-mEfNFtXc9G2yrUdkcfuUd54-4fDhgateBkSAitra_IM11-fEc74xMQEBZnGwkh1t7628o1VIJxn9lN-FRkRifMbJrkrrCIxS794_-rKAiODl7zI4C2CfYmz9lu3naUD9gBkinUgD4aDna2C1-8F3hCelmfDB6PfmU4UwYiGYQraMYuhsDZ9fwbnN8iahMzIIjp5NxXy-YxZgDALvQR2ORdTWd02fxGocafUbMz9XaTC1aKNYstrn4brisMN0po8jOSWAjoStd8G2PybX5Y=w2102-h1576-no", depth: 2, width: 2, height: 2, model:"", x_pos: 1, y_pos: 1, z_pos: 1)

Item.create(room_id: r3.id, name: "Conversation with the Wind", description: "Steel", creator: "Pietro Consagra", country_of_origin: "Italy", state_of_origin: "", city_of_origin: "", year_of_origin: 1962, item_code: "63.9", image: "https://lh3.googleusercontent.com/OkEWaWwQMKpj8mXeES24K7J8GZsFUluAc4UhODfWfEqpyySgaXMwON397wasW_r8peSzpMlMjWKL0amiWibmhOwz3pIRD-Wy1auett6RFcwyjihGel9t8APzBF1NRtQaFIvdelBa0NfsUog-_E98woPeEsG9r77Mh8WqUEitWROUre4GIY06tQs9bAPQLqNf_WAQnc8KoCz7orLKrZsGdVR3lr-V5uXBId5-eyzQSlNrtgfJ1W3W8NXQfcKSZt869nGfJiSSK0QuVY03kcUXDDPDU5jiaF8SOGf9FcEGeAHXwKhWVQ05G9D7siVvXe59h9gTaP9wD1wU2c1oWthM4sVvquCZGlEZvLDFbpg_J4ZYT09qx4omg-0Lt8mtS_6AIiwvA7e1Doutra8oclX5aZdLdwBSL_uB4mIIBdg2sZAgsRUxDYqhfDLP4BauJAe9f_q1s-kWNh3Xrt0R9Sxz7MpwGYffwltlpj5yTn2mrmJldpNzKA8p7mcrq0a8e0CGoSU81NTfKiH8U6-8U3HHA0sSQkWnHbmoUnbGryZZfGcExHrH2xS9j5ooXZV98ZmgpyMQJOBPZ3h155-3Szh9btbTpTBQMb4F5SG5CiRi_HH8lUkv7UfYMXV_oztOMmej58ei3KNwj17ICz2ACTdWWUB8rjc_m__hbbIPt2CYZbJjlFZsp6OshLPAVazHwQ=w1182-h1576-no", depth: 3, width: 1, height: 3, model:"", x_pos: 1, y_pos: 0, z_pos: 2)

Item.create(room_id: r4.id, name: "Magari", description: "Welded Steel", creator: "Mark Di Suvero", country_of_origin: "USA", state_of_origin: "Texas", city_of_origin: "Houston", year_of_origin: 1977, item_code: "81.39", image: "https://lh3.googleusercontent.com/y9-B0R99mRXPXRAyHj5Su2XwpZPYjbdiqePG-hqvP9eLODLlQ-neh0OgkFZfgJNIVGuFsGxo9eMOUWyUrwywkCaS__cK5-f6UErbAfbiByrlD86n2u7ztFQz2fskhVJYlkqV_VLh9eJfM0FI9hri_GVYJHHGvTWW-6_ceH5RmkUD2bdt5JiP4fb0p1TFp3TZP20g0hFlXwmSQHuymG5HU5qUn4uSAiUdQlO5mAxxLDG_wSbRo20MvlSGTUhtxKZJtBtrJHTYdiGDcg5X6Qm4poCO7VNwZqAkyuj0obMLALu2sDFC4DknErmf8mvzYO82PULyF7pprqqu2cprWvPkctnkLQHW_DjeKcOloXoEK5QkXvauX9GY-TJTRMYWZ96pKKa8EnzB0ERTslhJe_RT1ero4kDXoEsTm7y-cITw0ihRDhanxI2nDRM2EXJhICb9KieqGZ2abP-fFXReK60tHch0zvjW3E4fe49nLYCKb4xlAb4dVOrMDm79wggJKtip_hnr-jSlYW7l9RABbdOveFOtVTmI2bvJSrrwGZYpoeeH1zZUShAR7azuwbL60rSe6Lb4dOPJuKc_Sq0XCTGKg5PDjKbi1iO-NCgJ4ck0vUKMnq4ffPaCVW3zk8yiJ5NvGwiwihKRuhrz6zvGJiB8rPTz0wJnw8GxR_ncMR6h-7Ja-LETmO4CnXunG-gDb5EHbQa7_el4gUY9MZjLPJkxGoMfaqAFkUeF3YI2-V2DBoYugQmjFNvEcgM=w1182-h1576-no", depth: 2, width: 2, height: 3, model:"", x_pos: 2, y_pos: 0, z_pos: 1)

Item.create(room_id: r5.id, name: "Sea Otters", description: "Agate and Smoky Quartz", creator: "Gerd Dreher", country_of_origin: "Brazil", state_of_origin: "Minas Gerais", city_of_origin: "", year_of_origin: 0, item_code: "50.2015.47", image: "https://lh3.googleusercontent.com/hkCJbfsJ7B9MtL7zFwzQZ7Pfi34hMDg5sgUO5nFU3g1sjwgzUAYq8RUe9-lhgPY5KlWyh65zYxYO6r6fjG0s2UYOlrF5CdQRSLKcsGtRwxcb--KJcC2BoghXlHoISf5PzBa7nV-rVa6Y98Tqn5Txkvpb3LFFUomSrCaw6KFi8AxhKIsdq9qegbpSsn1rrNsv1wcMkh_CUPrapEofDv-KZOw6Di47USIBJr9ZZRFlE7BxHWiOzvqr1_nn0fY2RVWrTKkVfWNsowzsjiQR_UP6RoM1edlLrnRZte7ktDG0PK076y_RIBYbf2tm2szqeb4pY2Ab2tlm77QY5urhViYNvQFciqkiTuSyczGQMmUIeCvWeav3HOlgF01_mGmvUD5qewFaxAd8Y6kriEYNImtQlOT1e2i6vKR-xMPo4QQhRto7SsFibZ4K80gp9FRS2XPdiKS7RFo3ylMKMS_IHrch9N7O7E9o3Ox2ivCIa1HCHoUONZY8D49zJcnl_GMqf_yv_UjFybB2sovhyiZXDTO5sKv6UycK2iRl_EbXA7jCAzsz9Up_Q2kpzaWnECx4BNTDBHbcF_Ku7NhD3OHH4seE5zkP2UnY_vnfkMAi-cVZm50ZWvbpO88tjLlZGLNkMZS7RXLdjKT1uptcOw-Z8IS-RVhbqNkx_GMB8FhXhZqyzwqwcnBjm9lNdKhiUrPrSs733LHNwHOByfs-qnQdGY3IlDjobfmEU_oZ5q2qpX13tL-ll8PxB3S0j0M=w473-h630-no", depth: 1, width: 1, height: 1, model:"", x_pos: 0, y_pos: 0, z_pos: 0)