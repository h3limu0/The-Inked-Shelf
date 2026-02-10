const products = {
    // ============================================
    // MANGA PRODUCTS
    // ============================================
    manga: [
        { id: 107, name: "Vagabond Vizbig Vol 1",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938686-01.jpg", badge: "" },
        { id: 108, name: "Vagabond Vizbig Vol 2",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938687-02.jpg", badge: "" },
        { id: 109, name: "Vagabond Vizbig Vol 3",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938688-03.jpg", badge: "" },
        { id: 110, name: "Vagabond Vizbig Vol 4",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938689-04.jpg", badge: "" },
        { id: 111, name: "Vagabond Vizbig Vol 5",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938690-05.jpg", badge: "" },
        { id: 112, name: "Vagabond Vizbig Vol 6",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938691-06.jpg", badge: "" },
        { id: 113, name: "Vagabond Vizbig Vol 7",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938692-07.jpg", badge: "" },
        { id: 114, name: "Vagabond Vizbig Vol 8",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938693-08.jpg", badge: "" },
        { id: 115, name: "Vagabond Vizbig Vol 9",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938694-09.jpg", badge: "" },
        { id: 116, name: "Vagabond Vizbig Vol 10", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938695-10.jpg", badge: "" },
        { id: 117, name: "Vagabond Vizbig Vol 11", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2938696-11.jpg", badge: "" },
        { id: 118, name: "Vagabond Vizbig Vol 12", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4478104-12.jpg", badge: "" },
        { id: 141, name: "Kaiju No. 8 Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8283850-6010268651-95584.jpg", badge: "" },
        { id: 142, name: "Kaiju No. 8 Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8443682-kaijuno8v2.jpg", badge: "" },
        { id: 143, name: "Kaiju No. 8 Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8576126-kaijunov3%238%282022%29.jpg", badge: "" },
        { id: 144, name: "Kaiju No. 8 Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/8678612-kaijunov4%238%282022%29-page1.jpg", badge: "" },
        { id: 145, name: "Kaiju No. 8 Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8689405-0348530208-818TK.jpg", badge: "" },
        { id: 146, name: "Kaiju No. 8 Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8900811-kaijuno8v6%282023%29.jpg", badge: "" },
        { id: 147, name: "Kaiju No. 8 Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9012729-kaijunov7%238%282023%29-page1.jpg", badge: "" },
        { id: 148, name: "Kaiju No. 8 Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9129577-kaijuno.8-c060%28v08%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 149, name: "Kaiju No. 8 Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9219586-kaijuno.8-c067%28v09%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 150, name: "Kaiju No. 8 Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9380408-kaijuno.8-c074%28v10%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 150, name: "Kaiju No. 8 Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9498895-kaijunov11%238%282024%29-page1.jpg", badge: "" },
        { id: 150, name: "Kaiju No. 8 Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9640953-kaijunov12%2312%282025%29-page1.jpg", badge: "" },
        { id: 150, name: "Kaiju No. 8 Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11188/111888298/9744023-kaijuno.8%2Cvol.13.jpg", badge: "" },
        { id: 150, name: "Kaiju No. 8 Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9849863-kaijunov14%238%282025%29-page1.jpg", badge: "" },
        { "id": 2001, "name": "Attack on Titan Vol 1", "price": 270, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506326-01.jpg", "badge": "" },
        { "id": 2002, "name": "Attack on Titan Vol 2", "price": 270, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506327-02.jpg", "badge": "" },
        { "id": 2003, "name": "Attack on Titan Vol 3", "price": 270, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506328-03.jpg", "badge": "" },
        { "id": 2004, "name": "Attack on Titan Vol 4", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506329-04.jpg", "badge": "" },
        { "id": 2005, "name": "Attack on Titan Vol 5", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506330-05.jpg", "badge": "" },
        { "id": 2006, "name": "Attack on Titan Vol 6", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3506331-06.jpg", "badge": "" },
        { "id": 2007, "name": "Attack on Titan Vol 7", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3345396-07.jpg", "badge": "" },
        { "id": 2008, "name": "Attack on Titan Vol 8", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3424019-08.jpg", "badge": "" },
        { "id": 2009, "name": "Attack on Titan Vol 9", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3468882-09.jpg", "badge": "" },
        { "id": 2010, "name": "Attack on Titan Vol 10", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3556541-10.jpg", "badge": "" },
        { "id": 2011, "name": "Attack on Titan Vol 11", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3588710-11.jpg", "badge": "" },
        { "id": 2012, "name": "Attack on Titan Vol 12", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3790863-12.jpg", "badge": "" },
        { "id": 2013, "name": "Attack on Titan Vol 13", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4058009-13.jpg", "badge": "" },
        { "id": 2014, "name": "Attack on Titan Vol 14", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4201199-14.jpg", "badge": "" },
        { "id": 2015, "name": "Attack on Titan Vol 15", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4478086-15.jpg", "badge": "" },
        { "id": 2016, "name": "Attack on Titan Vol 16", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4764750-16.jpg", "badge": "" },
        { "id": 2017, "name": "Attack on Titan Vol 17", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4954438-17.jpg", "badge": "" },
        { "id": 2018, "name": "Attack on Titan Vol 18", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5132472-18.jpg", "badge": "" },
        { "id": 2019, "name": "Attack on Titan Vol 19", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5355229-19.jpg", "badge": "" },
        { "id": 2020, "name": "Attack on Titan Vol 20", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5571425-20.jpg", "badge": "" },
        { "id": 2021, "name": "Attack on Titan Vol 21", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5819536-21.jpg", "badge": "" },
        { "id": 2022, "name": "Attack on Titan Vol 22", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5985446-22.jpg", "badge": "" },
        { "id": 2023, "name": "Attack on Titan Vol 23", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6195505-23.jpg", "badge": "" },
        { "id": 2024, "name": "Attack on Titan Vol 24", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6372839-24.jpg", "badge": "" },
        { "id": 2025, "name": "Attack on Titan Vol 25", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6497295-25.jpg", "badge": "" },
        { "id": 2026, "name": "Attack on Titan Vol 26", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6710707-26.jpg", "badge": "" },
        { "id": 2027, "name": "Attack on Titan Vol 27", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6881163-27.jpg", "badge": "" },
        { "id": 2028, "name": "Attack on Titan Vol 28", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7038880-28.jpg", "badge": "" },
        { "id": 2029, "name": "Attack on Titan Vol 29", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7166936-29.jpg", "badge": "" },
        { "id": 2030, "name": "Attack on Titan Vol 30", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7321446-30.jpg", "badge": "" },
        { "id": 2031, "name": "Attack on Titan Vol 31", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7538779-31.jpg", "badge": "" },
        { "id": 2032, "name": "Attack on Titan Vol 32", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7728569-32.jpg", "badge": "" },
        { "id": 2033, "name": "Attack on Titan Vol 33", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7943393-33.jpg", "badge": "" },
        { "id": 2034, "name": "Attack on Titan Vol 34", "price": 300, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8205713-34.jpg", "badge": "" },
        { id: 1001, "name": "Demon Slayer Vol 1", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6497309-01.jpg", "badge": "" },
        { id: 1002, "name": "Demon Slayer Vol 2", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6594479-02.jpg", "badge": "" },
        { id: 1003, "name": "Demon Slayer Vol 3", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6675930-03.jpg", "badge": "" },
        { id: 1004, "name": "Demon Slayer Vol 4", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6744697-04.jpg", "badge": "" },
        { id: 1005, "name": "Demon Slayer Vol 5", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6828031-05.jpg", "badge": "" },
        { id: 1006, "name": "Demon Slayer Vol 6", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6921533-06.jpg", "badge": "" },
        { id: 1007, "name": "Demon Slayer Vol 7", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6990191-07.jpg", "badge": "" },
        { id: 1008, "name": "Demon Slayer Vol 8", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7059844-08.jpg", "badge": "" },
        { id: 1009, "name": "Demon Slayer Vol 9", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7137950-09.jpg", "badge": "" },
        { id: 1010, "name": "Demon Slayer Vol 10", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7203054-10.jpg", "badge": "" },
        { id: 1011, "name": "Demon Slayer Vol 11", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7262218-11.jpg", "badge": "" },
        { id: 1012, "name": "Demon Slayer Vol 12", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7363877-12.jpg", "badge": "" },
        { id: 1013, "name": "Demon Slayer Vol 13", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7405090-13.jpg", "badge": "" },
        { id: 1014, "name": "Demon Slayer Vol 14", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7459614-14.jpg", "badge": "" },
        { id: 1015, "name": "Demon Slayer Vol 15", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7501078-15.jpg", "badge": "" },
        { id: 1016, "name": "Demon Slayer Vol 16", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7548770-16.jpg", "badge": "" },
        { id: 1017, "name": "Demon Slayer Vol 17", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597806-17.jpg", "badge": "" },
        { id: 1018, "name": "Demon Slayer Vol 18", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7646099-18.jpg", "badge": "" },
        { id: 1019, "name": "Demon Slayer Vol 19", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7694179-19.jpg", "badge": "" },
        { id: 1020, "name": "Demon Slayer Vol 20", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7793246-20.jpg", "badge": "" },
        { id: 1021, "name": "Demon Slayer Vol 21", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7902569-21.jpg", "badge": "" },
        { id: 1022, "name": "Demon Slayer Vol 22", "price": 250, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8002592-22.jpg", "badge": "" },
        { id: 1023, "name": "Demon Slayer Vol 23", "price": 280, "image": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8084566-23.jpg", "badge": "" },
        { id: 169, name: "Sakamoto Days Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8443699-sakamotodaysv1.jpg", badge: "" },
        { id: 170, name: "Sakamoto Days Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8542240-sakamotodaysv2%282022%29.jpg", badge: "" },
        { id: 171, name: "Sakamoto Days Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8614964-sakamotodaysv3%282022%29.jpg", badge: "" },
        { id: 172, name: "Sakamoto Days Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8623387-9952990726-8167k.jpg", badge: "" },
        { id: 173, name: "Sakamoto Days Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8752473-sakamotodaysv5%282022%29.jpg", badge: "" },
        { id: 174, name: "Sakamoto Days Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8778495-1898626187-81i9F.jpg", badge: "" },
        { id: 175, name: "Sakamoto Days Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8778496-0544222893-81gMT.jpg", badge: "" },
        { id: 176, name: "Sakamoto Days Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8841144-1012197783-81PRf.jpg", badge: "" },
        { id: 177, name: "Sakamoto Days Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9041219-sakamotodays-c071%28v09%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 178, name: "Sakamoto Days Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9188122-sakamotodays-c080%28v10%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 179, name: "Sakamoto Days Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9324585-4385883465-23033.jpg", badge: "" },
        { id: 180, name: "Sakamoto Days Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9380415-sakamotodays-c098%28v12%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 181, name: "Sakamoto Days Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9469422-3840107229-23462.jpg", badge: "" },
        { id: 182, name: "Sakamoto Days Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9531571-1087464346-23657.jpg", badge: "" },
        { id: 183, name: "Sakamoto Days Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9599004-2927770403-23851.jpg", badge: "" },
        { id: 184, name: "Sakamoto Days Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11174/111740190/9670694-sakamotodaysv16%282025%29-page1.jpg", badge: "" },
        { id: 185, name: "Sakamoto Days Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11179/111793855/9724978-sakamotodaysvol.17cover.jpg", badge: "" },
        { id: 186, name: "Sakamoto Days Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9826457-8916558200-81MFE.jpg", badge: "" },
        { id: 187, name: "Sakamoto Days Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9926729-sakamotodaysv19%2319%282025%29-page1.jpg", badge: "" },
        { id: 119, name: "Fire Punch Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6223119-01.jpg", badge: "" },
        { id: 120, name: "Fire Punch Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6385699-02.jpg", badge: "" },
        { id: 121, name: "Fire Punch Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6518537-03.jpg", badge: "" },
        { id: 122, name: "Fire Punch Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6649356-04.jpg", badge: "" },
        { id: 123, name: "Fire Punch Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6759812-05.jpg", badge: "" },
        { id: 124, name: "Fire Punch Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6892564-06.jpg", badge: "" },
        { id: 125, name: "Fire Punch Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7007948-07.jpg", badge: "" },
        { id: 126, name: "Fire Punch Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7107182-08.jpg", badge: "" },
        { id: 151, name: "Spy x Family Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7405099-01.jpg", badge: "" },
        { id: 152, name: "Spy x Family Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7548786-02.jpg", badge: "" },
        { id: 153, name: "Spy x Family Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7694185-03.jpg", badge: "" },
        { id: 154, name: "Spy x Family Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7838939-04.jpg", badge: "" },
        { id: 155, name: "Spy x Family Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8014995-05.jpg", badge: "" },
        { id: 156, name: "Spy x Family Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8185340-06.jpg", badge: "" },
        { id: 157, name: "Spy x Family Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11135/111359134/8441371-spyxfamily%237%282022%29-page1.jpg", badge: "" },
        { id: 158, name: "Spy x Family Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11142/111425425/8662277-spyxfamily-c045%28v08%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 159, name: "Spy x Family Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11172/111720342/8863712-sxf9.jpg", badge: "" },
        { id: 160, name: "Spy x Family Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9136718-6877783886-71%2B4a.jpg", badge: "" },
        { id: 161, name: "Spy x Family Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9304579-spyxfamily-c067%28v11%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 162, name: "Spy x Family Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9436485-7843944817-81XQ6.jpg", badge: "" },
        { id: 1620, name: "Spy x Family Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9600088-spyxfamilyv13%282025%29-page1.jpg", badge: "" },
        { id: 1512, name: "Spy x Family Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/73748/9815320-spyxfamilyv14%282025%29-page1.jpg", badge: "" },
        { id: 1615612, name: "Spy x Family Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9926723-spyxfamilyv15%2315%282025%29-page1.jpg", badge: "" },
        { id: 86, name: "Hell's Paradise Vol 1",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7272542-01.jpg", badge: "" },
        { id: 87, name: "Hell's Paradise Vol 2",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7384200-02.jpg", badge: "" },
        { id: 88, name: "Hell's Paradise Vol 3",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7480583-03.jpg", badge: "" },
        { id: 89, name: "Hell's Paradise Vol 4",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7569722-04.jpg", badge: "" },
        { id: 90, name: "Hell's Paradise Vol 5",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7673654-05.jpg", badge: "" },
        { id: 91, name: "Hell's Paradise Vol 6",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7769194-06.jpg", badge: "" },
        { id: 92, name: "Hell's Paradise Vol 7",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7865433-07.jpg", badge: "" },
        { id: 93, name: "Hell's Paradise Vol 8",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7974160-08.jpg", badge: "" },
        { id: 94, name: "Hell's Paradise Vol 9",  price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8070114-09.jpg", badge: "" },
        { id: 95, name: "Hell's Paradise Vol 10", price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8164268-10.jpg", badge: "" },
        { id: 96, name: "Hell's Paradise Vol 11", price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11135/111359134/8249772-hell%27sparadise-jigokurakuv11%282021%29-page1.jpg", badge: "" },
        { id: 97, name: "Hell's Paradise Vol 12", price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8342397-1485151924-98206.jpg", badge: "" },
        { id: 98, name: "Hell's Paradise Vol 13", price: 260, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11135/111359134/8409062-hell%27sparadise-jigokurakuv13%282022%29-page1.jpg", badge: "" },
        { id: 99,  name: "Parasyte Vol 1", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4934222-01.jpg", badge: "" },
        { id: 100, name: "Parasyte Vol 2", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4943745-02.jpg", badge: "" },
        { id: 101, name: "Parasyte Vol 3", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4954469-03.jpg", badge: "" },
        { id: 102, name: "Parasyte Vol 4", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4963375-04.jpg", badge: "" },
        { id: 103, name: "Parasyte Vol 5", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4973048-05.jpg", badge: "" },
        { id: 104, name: "Parasyte Vol 6", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4983810-06.jpg", badge: "" },
        { id: 105, name: "Parasyte Vol 7", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4995271-07.jpg", badge: "" },
        { id: 106, name: "Parasyte Vol 8", price: 300, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5007449-08.jpg", badge: "" },
        { id: 56, name: "Jujutsu Kaisen Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7166979-01.jpg", badge: "" },
        { id: 57, name: "Jujutsu Kaisen Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7233938-02.jpg", badge: "" },
        { id: 58, name: "Jujutsu Kaisen Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7311794-03.jpg", badge: "" },
        { id: 59, name: "Jujutsu Kaisen Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7405093-04.jpg", badge: "" },
        { id: 60, name: "Jujutsu Kaisen Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7501083-05.jpg", badge: "" },
        { id: 61, name: "Jujutsu Kaisen Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597807-06.jpg", badge: "" },
        { id: 62, name: "Jujutsu Kaisen Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7694182-07.jpg", badge: "" },
        { id: 63, name: "Jujutsu Kaisen Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7793251-08.jpg", badge: "" },
        { id: 64, name: "Jujutsu Kaisen Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7902571-09.jpg", badge: "" },
        { id: 65, name: "Jujutsu Kaisen Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8002594-10.jpg", badge: "" },
        { id: 66, name: "Jujutsu Kaisen Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8084568-11.jpg", badge: "" },
        { id: 67, name: "Jujutsu Kaisen Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8185335-12.jpg", badge: "" },
        { id: 68, name: "Jujutsu Kaisen Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8283834-7150018027-97813.jpg", badge: "" },
        { id: 69, name: "Jujutsu Kaisen Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8363264-5184063998-98593.jpg", badge: "" },
        { id: 70, name: "Jujutsu Kaisen Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8442457-jujutsukaisenv15%282022%29-page1.jpg", badge: "" },
        { id: 71, name: "Jujutsu Kaisen Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/8546603-jujutsukaisenv16%282022%29-page1.jpg", badge: "" },
        { id: 72, name: "Jujutsu Kaisen Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111600871/8623695-9652014916-71l8U.jpg", badge: "" },
        { id: 73, name: "Jujutsu Kaisen Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8761907-jujutsukaisenv18%282022%29.jpg", badge: "" },
        { id: 74, name: "Jujutsu Kaisen Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8778504-9161940657-811kK.jpg", badge: "" },
        { id: 75, name: "Jujutsu Kaisen Vol 20", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8876601-9590173931-81%2B-9.jpg", badge: "" },
        { id: 76, name: "Jujutsu Kaisen Vol 21", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9173142-jujutsukaisenv21%282023%29%28digital%29%281r0n%29_jujutsukaisen-c181%28v21%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 77, name: "Jujutsu Kaisen Vol 22", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9335263-jujutsukaisen-c192%28v22%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 78, name: "Jujutsu Kaisen Vol 23", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9454021-3712588743-23379.jpg", badge: "" },
        { id: 79, name: "Jujutsu Kaisen Vol 24", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9566278-3615986653-23740.jpg", badge: "" },
        { id: 80, name: "Jujutsu Kaisen Vol 25", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9660091-1028468972-24025.jpg", badge: "" },
        { id: 81, name: "Jujutsu Kaisen Vol 26", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9733955-4528831879-24221.jpg", badge: "" },
        { id: 82, name: "Jujutsu Kaisen Vol 27", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9838340-5021240531-24510.jpg", badge: "" },
        { id: 83, name: "Jujutsu Kaisen Vol 28", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11179/111793855/9909982-jujutsukaisen-c246%28v28%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D-min.jpg", badge: "" },
        { id: 84, name: "Jujutsu Kaisen Vol 29", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9577296-29.jpg", badge: "" },
        { id: 85, name: "Jujutsu Kaisen Vol 30", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9577297-30.jpg", badge: "" },
        { id: 86, name: "Jujutsu Kaisen Vol 0", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7747691-00.jpg", badge: "" },
        { id: 32, name: "Kagurabachi Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9255733-9978731836-97840.jpg", badge: "" },
        { id: 33, name: "Kagurabachi Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9349807-8196362595-97840.jpg", badge: "" },
        { id: 34, name: "Kagurabachi Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9404430-2545031867-97840.jpg", badge: "" },
        { id: 35, name: "Kagurabachi Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9500021-3585271038-97840.jpg", badge: "" },
        { id: 36, name: "Kagurabachi Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9553576-3537987822-97840.jpg", badge: "" },
        { id: 37, name: "Kagurabachi Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9647764-9581827925-97840.jpg", badge: "" },
        { id: 38, name: "Kagurabachi Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9710899-6820755196-97840.jpg", badge: "" },
        { id: 39, name: "Kagurabachi Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9779697-8468786652-97840.jpg", badge: "" },
        { id: 40, name: "Kagurabachi Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9882745-3700386120-97840.jpg", badge: "" },
        { id: 41, name: "Kagurabachi Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9954082-9262625353-97840.jpg", badge: "" },
        { id: 1,  name: "Chainsaw Man Vol 1",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597895-01.jpg", badge: "" },
        { id: 2,  name: "Chainsaw Man Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7694178-02.jpg", badge: "" },
        { id: 3,  name: "Chainsaw Man Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7793245-03.jpg", badge: "" },
        { id: 4,  name: "Chainsaw Man Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7902566-04.jpg", badge: "" },
        { id: 5,  name: "Chainsaw Man Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8002591-05.jpg", badge: "" },
        { id: 6,  name: "Chainsaw Man Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8084565-06.jpg", badge: "" },
        { id: 7,  name: "Chainsaw Man Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8185334-07.jpg", badge: "" },
        { id: 8,  name: "Chainsaw Man Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8283825-4181227440-97814.jpg", badge: "" },
        { id: 9,  name: "Chainsaw Man Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8363258-4505369067-98592.jpg", badge: "" },
        { id: 10, name: "Chainsaw Man Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/8439965-chainsawmanv10%282022%29-page1.jpg", badge: "" },
        { id: 11, name: "Chainsaw Man Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111580527/8531791-71joichqygl.jpg", badge: "" },
        { id: 12, name: "Chainsaw Man Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9119938-chainsawman-c098%28v12%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 13, name: "Chainsaw Man Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9188086-chainsawman-c104%28v13%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 14, name: "Chainsaw Man Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9261243-chainsawman-c113%28v14%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 15, name: "Chainsaw Man Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9354333-1194381157-81SwG.jpg", badge: "" },
        { id: 16, name: "Chainsaw Man Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9464301-3247294773-818hk.jpg", badge: "" },
        { id: 17, name: "Chainsaw Man Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9595180-5175667596-81X2O.jpg", badge: "" },
        { id: 18, name: "Chainsaw Man Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9718795-6863719678-24220.jpg", badge: "" },
        { id: 19, name: "Chainsaw Man Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9886242-0762374814-81RjR.jpg", badge: "" },
        { id: 20, name: "Death Note Vol 1",  price: 250, image: "https://m.media-amazon.com/images/I/81iDNjn-r3L._SY425_.jpg", badge: "" },
        { id: 21, name: "Death Note Vol 2",  price: 250, image: "https://m.media-amazon.com/images/I/61Kx4vs5yCL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 22, name: "Death Note Vol 3",  price: 250, image: "https://m.media-amazon.com/images/I/61YClPOqjVL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 23, name: "Death Note Vol 4",  price: 250, image: "https://m.media-amazon.com/images/I/91mgtWmsepL._SY425_.jpg", badge: "" },
        { id: 24, name: "Death Note Vol 5",  price: 250, image: "https://m.media-amazon.com/images/I/61RhrBxecnL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 25, name: "Death Note Vol 6",  price: 250, image: "https://m.media-amazon.com/images/I/617LLH0ZabL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 26, name: "Death Note Vol 7",  price: 250, image: "https://m.media-amazon.com/images/I/61giqeei2QL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 27, name: "Death Note Vol 8",  price: 250, image: "https://m.media-amazon.com/images/I/61Kc-jQ9yQL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 28, name: "Death Note Vol 9",  price: 250, image: "https://m.media-amazon.com/images/I/61rNRGygD9L._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 29, name: "Death Note Vol 10", price: 250, image: "https://m.media-amazon.com/images/I/61Vw+U6AvnL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 30, name: "Death Note Vol 11", price: 250, image: "https://m.media-amazon.com/images/I/61y1zZQ4fhL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 31, name: "Death Note Vol 12", price: 250, image: "https://m.media-amazon.com/images/I/61nBCgvM1LL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 127, name: "Berserk Deluxe Vol 1",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6818216-01.jpg", badge: "" },
        { id: 128, name: "Berserk Deluxe Vol 2",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6981087-02.jpg", badge: "" },
        { id: 129, name: "Berserk Deluxe Vol 3",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7115109-03.jpg", badge: "" },
        { id: 130, name: "Berserk Deluxe Vol 4",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7262206-04.jpg", badge: "" },
        { id: 131, name: "Berserk Deluxe Vol 5",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7444966-05.jpg", badge: "" },
        { id: 132, name: "Berserk Deluxe Vol 6",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7688739-06.jpg", badge: "" },
        { id: 133, name: "Berserk Deluxe Vol 7",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7856590-07.jpg", badge: "" },
        { id: 134, name: "Berserk Deluxe Vol 8",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8125312-08.jpg", badge: "" },
        { id: 135, name: "Berserk Deluxe Vol 9",  price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111842591/9385048-berserkdeluxevolume9.jpg", badge: "" },
        { id: 136, name: "Berserk Deluxe Vol 10", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111842591/9385050-berserkdeluxevolume10.jpg", badge: "" },
        { id: 137, name: "Berserk Deluxe Vol 11", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111842591/9385053-berserkdeluxevolume11.jpg", badge: "" },
        { id: 138, name: "Berserk Deluxe Vol 12", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111842591/9385054-berserkdeluxevolume12.jpg", badge: "" },
        { id: 139, name: "Berserk Deluxe Vol 13", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/8853601-9233063385-916Yy.jpg", badge: "" },
        { id: 140, name: "Berserk Deluxe Vol 14", price: 640, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111842591/9385056-berserkdeluxevolume14.jpg", badge: "" },

    ],
    // ============================================
    // NOVEL PRODUCTS
    // ============================================
    novels: [
        {
            id: 101,
            name: "The Great Gatsby",
            price: 450,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop",
            badge: "Classic"
        },
        {
            id: 102,
            name: "1984 by George Orwell",
            price: 420,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
            badge: "Bestseller"
        },
        {
            id: 103,
            name: "Pride and Prejudice",
            price: 480,
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
            badge: ""
        },
        {
            id: 104,
            name: "To Kill a Mockingbird",
            price: 460,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop",
            badge: "Popular"
        },
        // ADD MORE NOVELS HERE - Just copy the format above!
    ]
};

// ================================================================
// AUTO-RENDER FUNCTIONS (Don't edit below unless you know what you're doing)
// ================================================================

function renderProducts(productArray, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const html = productArray.map(product => `
        <div class="product-card">
            <div class="image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">৳${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    grid.innerHTML = html;
    updateProductCount(productArray.length);
}

function updateProductCount(count) {
    const countElement = document.querySelector('.filter-bar span');
    if (countElement) {
        countElement.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}`;
    }
}

function setupSearch(productArray, gridId) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = productArray.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filtered, gridId);
    });
}

// Auto-initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    const path = (window.location.pathname || window.location.href || '').toLowerCase();
    
    if (path.includes('manga')) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            renderProducts(products.manga, 'productsGrid');
            setupSearch(products.manga, 'productsGrid');
        }
    } else if (path.includes('novel')) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            renderProducts(products.novels, 'productsGrid');
            setupSearch(products.novels, 'productsGrid');
        }
    }
});

// Cart functions (if not already defined)
if (typeof addToCart === 'undefined') {
    function addToCart(name, price, image) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.name === name);
        
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast();
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        const countEl = document.getElementById('cartCount');
        if (countEl) countEl.textContent = total;
    }

    function showToast() {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    }

    // Initialize cart count
    document.addEventListener('DOMContentLoaded', updateCartCount);
}
