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
        { id: 2633, name: "20th Century Boys Perfect Edition Vol 1", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6614105-01.jpg", badge: "" },
        { id: 2634, name: "20th Century Boys Perfect Edition Vol 2", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/6744366-9553396697-815VW.jpg", badge: "" },
        { id: 2635, name: "20th Century Boys Perfect Edition Vol 3", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6850007-03.jpg", badge: "" },
        { id: 2636, name: "20th Century Boys Perfect Edition Vol 4", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6981083-04.jpg", badge: "" },
        { id: 2637, name: "20th Century Boys Perfect Edition Vol 5", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7073747-05.jpg", badge: "" },
        { id: 2638, name: "20th Century Boys Perfect Edition Vol 6", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7203086-06.jpg", badge: "" },
        { id: 2639, name: "20th Century Boys Perfect Edition Vol 7", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7272516-07.jpg", badge: "" },
        { id: 2640, name: "20th Century Boys Perfect Edition Vol 8", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7424246-08.jpg", badge: "" },
        { id: 2641, name: "20th Century Boys Perfect Edition Vol 9", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7569892-09.jpg", badge: "" },
        { id: 2642, name: "20th Century Boys Perfect Edition Vol 10", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7717734-10.jpg", badge: "" },
        { id: 2643, name: "20th Century Boys Perfect Edition Vol 11", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7865886-11.jpg", badge: "" },
        { id: 2532, name: "Dandadan Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8686862-dandadanv1%282022%29.jpg", badge: "" },
        { id: 2533, name: "Dandadan Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8689243-2750951076-819x3.jpg", badge: "" },
        { id: 2534, name: "Dandadan Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8900820-dandadanv3%282023%29.jpg", badge: "" },
        { id: 2535, name: "Dandadan Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9016122-dandadanv4%282023%29.jpg", badge: "" },
        { id: 2536, name: "Dandadan Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9129545-dandadan-c033%28v05%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2537, name: "Dandadan Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9228664-8822046852-81lnl.jpg", badge: "" },
        { id: 2538, name: "Dandadan Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9326057-8306634511-91dsD.jpg", badge: "" },
        { id: 2539, name: "Dandadan Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9414854-dandadanv8%282024%29-page1.jpg", badge: "" },
        { id: 2540, name: "Dandadan Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9509803-9242788872-81rWn.jpg", badge: "" },
        { id: 2541, name: "Dandadan Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11188/111888298/9570081-dandadan10cover.jpg", badge: "" },
        { id: 2542, name: "Dandadan Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9621222-0111040720-81clp.jpg", badge: "" },
        { id: 2543, name: "Dandadan Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11179/111793855/9679891-dandadanvol.12%281%29.jpg", badge: "" },
        { id: 2544, name: "Dandadan Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9742296-dandadanv13%282025%29-page1.jpg", badge: "" },
        { id: 2545, name: "Dandadan Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/73748/9815304-dandadanv14%282025%29-page1.jpg", badge: "" },
        { id: 2546, name: "Dandadan Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9886241-1766856524-71-ce.jpg", badge: "" },
        { id: 2547, name: "Dandadan Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9932129-8587899405-810Ib.jpg", badge: "" },
        { id: 2548, name: "Dandadan Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9978172-dandadanv17%282026%29-page1.jpg", badge: "" },
        { id: 2645, name: "Monster Perfect Edition Vol 1", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3994124-01.jpg", badge: "" },
        { id: 2646, name: "Monster Perfect Edition Vol 2", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4170847-02.jpg", badge: "" },
        { id: 2647, name: "Monster Perfect Edition Vol 3", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4340288-03.jpg", badge: "" },
        { id: 2648, name: "Monster Perfect Edition Vol 4", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4504875-04.jpg", badge: "" },
        { id: 2649, name: "Monster Perfect Edition Vol 5", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4698035-05.jpg", badge: "" },
        { id: 2650, name: "Monster Perfect Edition Vol 6", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4838022-06.jpg", badge: "" },
        { id: 2651, name: "Monster Perfect Edition Vol 7", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5007441-07.jpg", badge: "" },
        { id: 2652, name: "Monster Perfect Edition Vol 8", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5120085-08.jpg", badge: "" },
        { id: 2653, name: "Monster Perfect Edition Vol 9", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5327686-09.jpg", badge: "" },
        { id: 2600, name: "Death Note Black Edition Vol 1", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060817-01.jpg", badge: "" },
        { id: 2601, name: "Death Note Black Edition Vol 2", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060826-01.jpg", badge: "" },
        { id: 2602, name: "Death Note Black Edition Vol 3", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060832-01.jpg", badge: "" },
        { id: 2603, name: "Death Note Black Edition Vol 4", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060835-01.jpg", badge: "" },
        { id: 2604, name: "Death Note Black Edition Vol 5", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060837-01.jpg", badge: "" },
        { id: 2605, name: "Death Note Black Edition Vol 6", price: 490, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111543828/8060840-01.jpg", badge: "" },
        { id: 2549, name: "Your Name Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5908948-01.jpg", badge: "" },
        { id: 2550, name: "Your Name Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6143927-02.jpg", badge: "" },
        { id: 2551, name: "Your Name Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6374021-03.jpg", badge: "" },
        { id: 2552, name: "Horimiya Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4876226-01.jpg", badge: "" },
        { id: 2553, name: "Horimiya Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5019049-02.jpg", badge: "" },
        { id: 2554, name: "Horimiya Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5172379-03.jpg", badge: "" },
        { id: 2555, name: "Horimiya Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5339978-04.jpg", badge: "" },
        { id: 2556, name: "Horimiya Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5500473-05.jpg", badge: "" },
        { id: 2557, name: "Horimiya Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5665018-06.jpg", badge: "" },
        { id: 2558, name: "Horimiya Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5808898-07.jpg", badge: "" },
        { id: 2559, name: "Horimiya Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5949954-08.jpg", badge: "" },
        { id: 2560, name: "Horimiya Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6114218-09.jpg", badge: "" },
        { id: 2561, name: "Horimiya Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6339492-10.jpg", badge: "" },
        { id: 2562, name: "Horimiya Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6477879-11.jpg", badge: "" },
        { id: 2563, name: "Horimiya Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6712471-12.jpg", badge: "" },
        { id: 2564, name: "Horimiya Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7218201-13.jpg", badge: "" },
        { id: 2565, name: "Horimiya Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7477236-14.jpg", badge: "" },
        { id: 2566, name: "Horimiya Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8063680-15.jpg", badge: "" },
        { id: 2567, name: "Horimiya Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/8953493-81cpg26gq2l.jpg", badge: "" },
        { id: 2568, name: "Horimiya Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9517505-4008689693-81gWH.jpg", badge: "" },
        { id: 2606, name: "Vinland Saga Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111541464/8201477-9784063144239_w.jpg", badge: "" },
        { id: 2607, name: "Vinland Saga Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099410-489011_cover_v02a_super.jpg", badge: "" },
        { id: 2608, name: "Vinland Saga Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099411-489012_cover_v03a_super.jpg", badge: "" },
        { id: 2609, name: "Vinland Saga Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099412-489013_cover_v04a_super.jpg", badge: "" },
        { id: 2610, name: "Vinland Saga Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099414-489014_cover_v05a_super.jpg", badge: "" },
        { id: 2611, name: "Vinland Saga Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099415-489015_vinland_saga_v06_front_super.jpg", badge: "" },
        { id: 2612, name: "Vinland Saga Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099416-489016_vinland_saga_v07_front_super.jpg", badge: "" },
        { id: 2613, name: "Vinland Saga Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099417-489017_cover_v08a_super.jpg", badge: "" },
        { id: 2614, name: "Vinland Saga Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099418-489018_cover_v09a_super.jpg", badge: "" },
        { id: 2615, name: "Vinland Saga Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/7/71975/2099419-489019_vinland_saga10_000a_super.jpg", badge: "" },
        { id: 2616, name: "Vinland Saga Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/14/147798/2807997-vinland_saga_11_kodansha.jpg", badge: "" },
        { id: 2617, name: "Vinland Saga Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/2916820-12.jpg", badge: "" },
        { id: 2618, name: "Vinland Saga Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3317497-13.jpg", badge: "" },
        { id: 2619, name: "Vinland Saga Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/12/129659/3800719-1.jpg", badge: "" },
        { id: 2620, name: "Vinland Saga Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4363013-15.jpg", badge: "" },
        { id: 2621, name: "Vinland Saga Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4665719-16.jpg", badge: "" },
        { id: 2622, name: "Vinland Saga Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5092704-17.jpg", badge: "" },
        { id: 2623, name: "Vinland Saga Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5383096-18.jpg", badge: "" },
        { id: 2624, name: "Vinland Saga Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5804315-19.jpg", badge: "" },
        { id: 2625, name: "Vinland Saga Vol 20", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6155328-20.jpg", badge: "" },
        { id: 2626, name: "Vinland Saga Vol 21", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6559768-21.jpg", badge: "" },
        { id: 2627, name: "Vinland Saga Vol 22", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7036673-22.jpg", badge: "" },
        { id: 2628, name: "Vinland Saga Vol 23", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7148345-23.jpg", badge: "" },
        { id: 2629, name: "Vinland Saga Vol 24", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7620999-24.jpg", badge: "" },
        { id: 2630, name: "Vinland Saga Vol 25", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8077886-25.jpg", badge: "" },
        { id: 2631, name: "Vinland Saga Vol 26", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11144/111442876/8501749-71vkeh%2Byw5l.jpg", badge: "" },
        { id: 2632, name: "Vinland Saga Vol 27", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111450787/8989320-9346486130-97840.jpg", badge: "" },
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
        { id: 2569, name: "Blue Box Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11/110017/9854004-wwww.jpg", badge: "" },
        { id: 2570, name: "Blue Box Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11167/111670821/8852315-9069008986-thumb.jpg", badge: "" },
        { id: 2571, name: "Blue Box Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8876650-0023304017-81fEl.jpg", badge: "" },
        { id: 2572, name: "Blue Box Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8876654-9063093687-81hzU.jpg", badge: "" },
        { id: 2573, name: "Blue Box Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9038756-bluebox-c035%28v05%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2574, name: "Blue Box Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9082239-bluebox-c044%28v06%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2575, name: "Blue Box Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9156434-bluebox-c053%28v07%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2576, name: "Blue Box Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9226757-bluebox-c062%28v08%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2577, name: "Blue Box Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9290540-bluebox-c071%28v09%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2578, name: "Blue Box Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9354722-bluebox-c081%28v10%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2579, name: "Blue Box Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11178/111784480/9414194-bluebox11cover.jpg", badge: "" },
        { id: 2580, name: "Blue Box Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9501352-blueboxv12%2312%282024%29-page1.jpg", badge: "" },
        { id: 2581, name: "Blue Box Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11187/111872170/9552604-7481586811-Cover.jpg", badge: "" },
        { id: 2582, name: "Blue Box Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9664303-blueboxv14%2314%282025%29-page1.jpg", badge: "" },
        { id: 2583, name: "Blue Box Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9782630-blueboxv15%2315%282025%29-page1.jpg", badge: "" },
        { id: 2584, name: "Blue Box Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9782631-blueboxv16%2316%282025%29-page1.jpg", badge: "" },
        { id: 2585, name: "Blue Box Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9851268-blueboxv17%2317%282025%29-page1.jpg", badge: "" },
        { id: 2586, name: "Blue Box Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9912755-blueboxv18%2318%282025%29-page1.jpg", badge: "" },
        { id: 2500, name: "One Punch Man Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3654598-01.jpg", badge: "" },
        { id: 2501, name: "One Punch Man Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3762722-02.jpg", badge: "" },
        { id: 2502, name: "One Punch Man Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3898552-03.jpg", badge: "" },
        { id: 2503, name: "One Punch Man Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4041035-04.jpg", badge: "" },
        { id: 2504, name: "One Punch Man Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4226633-05.jpg", badge: "" },
        { id: 2505, name: "One Punch Man Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4426947-06.jpg", badge: "" },
        { id: 2506, name: "One Punch Man Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4570377-07.jpg", badge: "" },
        { id: 2507, name: "One Punch Man Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4838030-08.jpg", badge: "" },
        { id: 2508, name: "One Punch Man Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5158470-09.jpg", badge: "" },
        { id: 2509, name: "One Punch Man Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5532943-10.jpg", badge: "" },
        { id: 2510, name: "One Punch Man Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5665028-11.jpg", badge: "" },
        { id: 2511, name: "One Punch Man Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5960694-12.jpg", badge: "" },
        { id: 2512, name: "One Punch Man Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6245032-13.jpg", badge: "" },
        { id: 2513, name: "One Punch Man Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6428117-14.jpg", badge: "" },
        { id: 2514, name: "One Punch Man Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6744705-15.jpg", badge: "" },
        { id: 2515, name: "One Punch Man Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6921550-16.jpg", badge: "" },
        { id: 2516, name: "One Punch Man Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7030948-17.jpg", badge: "" },
        { id: 2517, name: "One Punch Man Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7166981-18.jpg", badge: "" },
        { id: 2518, name: "One Punch Man Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7262226-19.jpg", badge: "" },
        { id: 2519, name: "One Punch Man Vol 20", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7459620-20.jpg", badge: "" },
        { id: 2520, name: "One Punch Man Vol 21", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597809-21.jpg", badge: "" },
        { id: 2521, name: "One Punch Man Vol 22", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8002597-22.jpg", badge: "" },
        { id: 2522, name: "One Punch Man Vol 23", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8185337-23.jpg", badge: "" },
        { id: 2523, name: "One Punch Man Vol 24", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11128/111288167/8705766-one-punchman-c113%28v24%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2524, name: "One Punch Man Vol 25", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11171/111718983/8927892-5322728380-1000.jpg", badge: "" },
        { id: 2525, name: "One Punch Man Vol 26", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9100494-one-punchmanv26%282023%29-page1.jpg", badge: "" },
        { id: 2526, name: "One Punch Man Vol 27", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9237453-one-punchman-c132%28v27%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2527, name: "One Punch Man Vol 28", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9366464-one-punchman-c138%28v28%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 2528, name: "One Punch Man Vol 29", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11136/111361230/9529948-v29.jpg", badge: "" },
        { id: 2529, name: "One Punch Man Vol 30", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11191/111916693/9663991-opm_cover_30.jpg", badge: "" },
        { id: 2530, name: "One Punch Man Vol 31", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/9793009-one-punchmanv31%282025%29-page1.jpg", badge: "" },
        { id: 2531, name: "One Punch Man Vol 32", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111546654/9940463-one-punchman-c162%28v32%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 300, name: "Blue Lock Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7866128-01.jpg", badge: "" },
        { id: 301, name: "Blue Lock Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7925075-02.jpg", badge: "" },
        { id: 302, name: "Blue Lock Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7974101-03.jpg", badge: "" },
        { id: 303, name: "Blue Lock Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8024288-04.jpg", badge: "" },
        { id: 304, name: "Blue Lock Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8070034-05.jpg", badge: "" },
        { id: 305, name: "Blue Lock Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8107843-06.jpg", badge: "" },
        { id: 306, name: "Blue Lock Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8163899-07.jpg", badge: "" },
        { id: 307, name: "Blue Lock Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8205714-08.jpg", badge: "" },
        { id: 308, name: "Blue Lock Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8253117-7755633996-97538.jpg", badge: "" },
        { id: 309, name: "Blue Lock Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11157/111571965/8345944-4805218683-BlueL.jpg", badge: "" },
        { id: 310, name: "Blue Lock Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11157/111571965/8345949-6860780959-BlueL.jpg", badge: "" },
        { id: 311, name: "Blue Lock Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8425687-bluelockv12.jpg", badge: "" },
        { id: 312, name: "Blue Lock Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8518678-bluelockv13%282022%29.jpg", badge: "" },
        { id: 313, name: "Blue Lock Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8593672-bluelockv14%282022%29.jpg", badge: "" },
        { id: 314, name: "Blue Lock Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8694797-bluelockv15%282022%29.jpg", badge: "" },
        { id: 315, name: "Blue Lock Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/8736162-9814714960-BlueL.jpg", badge: "" },
        { id: 316, name: "Blue Lock Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8841586-bluelockv17%282023%29.jpg", badge: "" },
        { id: 317, name: "Blue Lock Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8909317-bluelockv18%282023%29.jpg", badge: "" },
        { id: 318, name: "Blue Lock Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8963177-bluelockv19%282023%29.jpg", badge: "" },
        { id: 319, name: "Blue Lock Vol 20", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11139/111391600/9042938-b0c9pjtbf6.01.s001.lxxxxxxx.jpg", badge: "" },
        { id: 320, name: "Blue Lock Vol 21", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9119985-bluelock-c177%28v21%29-p000%5Bdig%5D%5Bkodansha%5D%5Bdeadman%5D.jpg", badge: "" },
        { id: 321, name: "Blue Lock Vol 22", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9164040-bluelock-c186%28v22%29-p000%5Bdig%5D%5Bkodansha%5D%5Bdeadman%5D.jpg", badge: "" },
        { id: 322, name: "Blue Lock Vol 23", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9245499-bluelock-c195%28v23%29-p000%5Bdig%5D%5Bkodansha%5D%5Bdeadman%5D.jpg", badge: "" },
        { id: 323, name: "Blue Lock Vol 24", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9336129-bluelock-c204%28v24%29-p000%5Bdig%5D%5Bkodansha%5D%5Bdeadman%5D.jpg", badge: "" },
        { id: 324, name: "Blue Lock Vol 25", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11184/111844056/9387465-9148786889-page-.jpg", badge: "" },
        { id: 325, name: "Blue Lock Vol 26", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9408036-1628473590-81vl5.jpg", badge: "" },
        { id: 326, name: "Blue Lock Vol 27", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9585167-bluelockv27%2327%282024%29-page1.jpg", badge: "" },
        { id: 327, name: "Blue Lock Vol 28", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9585195-bluelockv28%2328%282024%29-page1.jpg", badge: "" },
        { id: 328, name: "Blue Lock Vol 29", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9605755-0729210635-8118a.jpg", badge: "" },
        { id: 329, name: "Blue Lock Vol 30", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9654149-6710447480-81QtI.jpg", badge: "" },
        { id: 330, name: "Blue Lock Vol 31", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9719578-81aqea2nkul._sl1500_.jpg", badge: "" },
        { id: 331, name: "Blue Lock Vol 32", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9778016-8492512593-81jsM.jpg", badge: "" },
        { id: 332, name: "Blue Lock Vol 33", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9879461-bluelockv33%2333%282025%29-page1.jpg", badge: "" },
        { id: 333, name: "Blue Lock Vol 34", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11183/111832710/9914060-bluelockv34%2334%282025%29-page1.jpg", badge: "" },
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
        { id: 2587, name: "Ao Haru Ride Vol 1", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6631241-01.jpg", badge: "" },
        { id: 2588, name: "Ao Haru Ride Vol 2", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6711641-02.jpg", badge: "" },
        { id: 2589, name: "Ao Haru Ride Vol 3", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6789298-03.jpg", badge: "" },
        { id: 2590, name: "Ao Haru Ride Vol 4", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6874275-04.jpg", badge: "" },
        { id: 2591, name: "Ao Haru Ride Vol 5", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/6957090-05.jpg", badge: "" },
        { id: 2592, name: "Ao Haru Ride Vol 6", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7030940-06.jpg", badge: "" },
        { id: 2593, name: "Ao Haru Ride Vol 7", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7091295-07.jpg", badge: "" },
        { id: 2594, name: "Ao Haru Ride Vol 8", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7166976-08.jpg", badge: "" },
        { id: 2595, name: "Ao Haru Ride Vol 9", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7233932-09.jpg", badge: "" },
        { id: 2596, name: "Ao Haru Ride Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7311791-10.jpg", badge: "" },
        { id: 2597, name: "Ao Haru Ride Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7405088-11.jpg", badge: "" },
        { id: 2598, name: "Ao Haru Ride Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7501074-12.jpg", badge: "" },
        { id: 2599, name: "Ao Haru Ride Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597801-13.jpg", badge: "" },
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
        // 1. Dark Verse Series (Runyx)
        {id: 10001, name: "The Predator (Dark Verse #1)", price: 270, image: "https://m.media-amazon.com/images/I/41wZW+yLPUL._SY300_.jpg", badge: ""},
        {id: 10002, name: "The Reaper (Dark Verse #2)", price: 290, image: "https://m.media-amazon.com/images/I/41PzLhKSRNL._SY300_.jpg", badge: ""},
        {id: 10003, name: "The Emperor (Dark Verse #3)", price: 320, image: "https://m.media-amazon.com/images/I/51UdcSqrTAL._SY300_.jpg", badge: ""},
        {id: 10004, name: "The Finisher (Dark Verse #4)", price: 280, image: "https://m.media-amazon.com/images/I/51xnY6eavxL._SY300_.jpg", badge: ""},
        {id: 10005, name: "The Annihilator (Dark Verse #5)", price: 240, image: "https://m.media-amazon.com/images/I/51AK0i9edDL._SY300_.jpg", badge: ""},
        {id: 10006, name: "The Syndicater (Dark Verse #6)", price: 270, image: "https://m.media-amazon.com/images/I/413Cu8-xMTL._SY300_.jpg", badge: ""},

        // 2. Empyrean Series (Rebecca Yarros)
        {id: 10007, name: "Fourth Wing (Empyrean #1)", price: 500, image: "https://m.media-amazon.com/images/I/914HWd0RxsL._AC_UY218_.jpg", badge: ""},
        {id: 10008, name: "Iron Flame (Empyrean #2)", price: 660, image: "https://m.media-amazon.com/images/I/912fTvsUKLL._AC_UY218_.jpg", badge: ""},
        {id: 10009, name: "Onyx Storm (Empyrean #3)", price: 500, image: "https://m.media-amazon.com/images/I/91rcGxdclIL._AC_UY218_.jpg", badge: ""},

        // 3. Made Series (Danielle Lori)
        {id: 10010, name: "The Sweetest Oblivion (Made #1)", price: 310, image: "https://m.media-amazon.com/images/I/4117gTjPTPL._SY300_.jpg", badge: ""},
        {id: 10011, name: "The Maddest Obsession (Made #2)", price: 310, image: "https://m.media-amazon.com/images/I/41ny+qa7YgL._SY300_.jpg", badge: ""},
        {id: 10012, name: "The Darkest Temptation (Made #3)", price: 340, image: "https://m.media-amazon.com/images/I/417r53rY2FL._SY300_.jpg", badge: ""},

        // 7. Legacy of Gods (Rina Kent)
        {id: 10023, name: "God of Malice (Legacy of Gods #1)", price: 420, image: "https://m.media-amazon.com/images/I/51nXgmwselL._SY300_.jpg", badge: ""},
        {id: 10024, name: "God of Pain (Legacy of Gods #2)", price: 350, image: "https://m.media-amazon.com/images/I/51tpoy6704L._SY300_.jpg", badge: ""},
        {id: 10025, name: "God of Wrath (Legacy of Gods #3)", price: 380, image: "https://m.media-amazon.com/images/I/51sR8ua2z+L._SY300_.jpg", badge: ""},
        {id: 10026, name: "God of Ruin (Legacy of Gods #4)", price: 340, image: "https://m.media-amazon.com/images/I/51qC6uh0eWL._SY300_.jpg", badge: ""},
        {id: 10027, name: "God of Fury (Legacy of Gods #5)", price: 390, image: "https://m.media-amazon.com/images/I/51REpKJmJIL._SY300_.jpg", badge: ""},
        {id: 10029, name: "God of War (Legacy of Gods #6)", price: 350, image: "https://m.media-amazon.com/images/I/51AtU7O6hPL._SY300_.jpg", badge: ""},

        {id: 10037, name: "The Housemaid (The Housemaid, #1)", price: 240, image: "https://media.oceanofpdf.com/2024/10/PDF-EPUB-The-Housemaid-The-Housemaid-1-by-Freida-McFadden-Download.jpg", badge: ""},
        {id: 10038, name: "The Housemaid’s Secret (The Housemaid, #2)", price: 230, image: "https://media.oceanofpdf.com/2023/03/PDF-EPUB-The-Housemaids-Secret-The-Housemaid-2-by-Freida-McFadden-Download.jpg", badge: ""},
        {id: 10039, name: "The Housemaid Is Watching (The Housemaid, #3)", price: 270, image: "https://media.oceanofpdf.com/2024/06/PDF-EPUB-The-Housemaid-Is-Watching-The-Housemaid-3-by-Freida-McFadden-Download.jpg", badge: ""},
        {id: 10040, name: "Holly by Stephen King", price: 380, image: "https://media.oceanofpdf.com/2023/09/PDF-EPUB-Holly-by-Stephen-King-Download.jpg", badge: ""},
        {id: 10041, name: "IT by Stephen King", price: 850, image: "https://media.oceanofpdf.com/2023/02/PDF-EPUB-It-by-Stephen-King-Download.jpg", badge: ""},
        {id: 10042, name: "The Silent Patient", price: 280, image: "https://media.oceanofpdf.com/2025/01/PDF-EPUB-The-Silent-Patient-by-Alex-Michaelides-Download.png", badge: ""},
        {id: 10042, name: "Death Note: Another Note: The Los Angeles BB Murder Cases", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeF_T1XVyLcMirj4sqvBZaosLbAG53tczFow&s", badge: ""},
        {id: 10042, name: "Solo Leveling 1", price: 280, image: "https://m.media-amazon.com/images/I/51tNTYCv9TL._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 2", price: 280, image: "https://m.media-amazon.com/images/I/51OHhyCx6bL._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 3", price: 280, image: "https://m.media-amazon.com/images/I/514-dppeJ5L._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 4", price: 280, image: "https://m.media-amazon.com/images/I/51yCOQ-UbiL._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 5", price: 280, image: "https://m.media-amazon.com/images/I/51hwgcowSrL._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 6", price: 250, image: "https://m.media-amazon.com/images/I/51owl2h+bgL._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 7", price: 250, image: "https://m.media-amazon.com/images/I/51Qz1fH8j7L._SY300_.jpg", badge: ""},
        {id: 10042, name: "Solo Leveling 8", price: 250, image: "https://m.media-amazon.com/images/I/518Dw11D4RL._SY300_.jpg", badge: ""},
        {id: 10042, name: "86 v1", price: 230, image: "https://images.yenpress.com/imgs/9781975303129.jpg?w=285&h=422&type=books&s=39cec05c3ef2ad2f333e4aca4f5530f8", badge: ""},
        {id: 10042, name: "86 v2", price: 250, image: "https://images.yenpress.com/imgs/9781975303143.jpg?w=285&h=422&type=books&s=ae246ed0500d0d5e11cc52a9271d723b", badge: ""},
        {id: 10042, name: "86 v3", price: 210, image: "https://images.yenpress.com/imgs/9781975303112.jpg?w=285&h=422&type=books&s=4a8f3c907a23fb420fbc107561819cea", badge: ""},
        
        {id: 10042, name: "86 v4", price: 210, image: "https://images.yenpress.com/imgs/9781975303167.jpg?w=285&h=422&type=books&s=a8731b2a0346cc6c109e60378e6ff340", badge: ""},
        
        {id: 10042, name: "86 v5", price: 240, image: "https://images.yenpress.com/imgs/9781975399252.jpg?w=285&h=422&type=books&s=9922c0159fbb4beb1cb6842c579cfa74", badge: ""},
        
        {id: 10042, name: "86 v6", price: 210, image: "https://images.yenpress.com/imgs/9781975314514.jpg?w=285&h=422&type=books&s=baa47a75c93fcd68e66d02a390a8a381", badge: ""},
        
        {id: 10042, name: "86 v7", price: 200, image: "https://images.yenpress.com/imgs/9781975320744.jpg?w=285&h=422&type=books&s=b85f521edeba994a21dc9d1a5dda78b5", badge: ""},
        
        {id: 10042, name: "86 v8", price: 210, image: "https://images.yenpress.com/imgs/9781975320768.jpg?w=285&h=422&type=books&s=472b9257fc15d3942d0cf366f25ed402", badge: ""},
    
        {id: 10042, name: "86 v9", price: 250, image: "https://images.yenpress.com/imgs/9781975339999.jpg?w=285&h=422&type=books&s=98adc06d5ccb461f0e18b9be061f3398", badge: ""},
        
        {id: 10042, name: "86 v10", price: 250, image: "https://images.yenpress.com/imgs/9781975343347.jpg?w=285&h=422&type=books&s=c8d2575d23564a1334e2d454839c84d6", badge: ""},
        
        {id: 10042, name: "86 v11", price: 250, image: "https://images.yenpress.com/imgs/9781975349967.jpg?w=285&h=422&type=books&s=e227fdc18a90c2ccc6a4e72e270f9c2a", badge: ""},
        
        {id: 10042, name: "86 v12", price: 250, image: "https://images.yenpress.com/imgs/9781975373474.jpg?w=285&h=422&type=books&s=001a5912ad78a761500fc6d5fa97badd", badge: ""},
        
        {id: 10042, name: "86 v13", price: 250, image: "https://images.yenpress.com/imgs/9798855408294.jpg?w=285&h=422&type=books&s=9b2602834d37cf96490ff0cf294357b2", badge: ""},
    
        
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
