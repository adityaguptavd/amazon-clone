const clientCardData1 = [
    {
        key : 1,
        title : 'Shop holiday gift guides',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg',
        alt : 'Shop holiday gift guides',
        footer : 'See more',
        href : 'https://www.amazon.com/b/?_encoding=UTF8&node=23634165011&pd_rd_w=CWO2H&content-id=amzn1.sym.ba76db05-e684-49cb-b685-50173ac23a0c&pf_rd_p=ba76db05-e684-49cb-b685-50173ac23a0c&pf_rd_r=7EXKB977BY3P50H841D7&pd_rd_wg=z12zC&pd_rd_r=cc82c9c8-869e-4ea3-a753-813b363dad94&ref_=pd_gw_unk'
    },
    {
        key : 2,
        title : 'Home decor under $50',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg',
        alt : 'Home decor',
        footer : 'Shop now',
        href : 'https://www.amazon.com/s/?_encoding=UTF8&k=home%20decor&rh=p_36%3A-5000&pd_rd_w=ZEYmS&content-id=amzn1.sym.f7def1d9-177b-415d-89b3-9d866650f7d7&pf_rd_p=f7def1d9-177b-415d-89b3-9d866650f7d7&pf_rd_r=CYW686EJST80KE0T3E4G&pd_rd_wg=aHnba&pd_rd_r=01e55839-21b0-4d16-b2e0-671dbe0c3147&ref_=pd_gw_unk'
    },
    {
        key : 3,
        title : 'Top Deal',
        src : "https://m.media-amazon.com/images/I/31rpfpz3aJL._AC_SY230_.jpg",
        alt : 'Vacuum Cleaner',
        footer : 'See all deals',
        href : 'https://www.amazon.com/deal/098c8340/?_encoding=UTF8&_encoding=UTF8&showVariations=true&ref_=dlx_gate_dd_dcl_tlt_098c8340_dt_pd_gw_unk&pd_rd_w=2Rltr&content-id=amzn1.sym.def2f06c-d9a7-4927-8433-aa333a9fca53&pf_rd_p=def2f06c-d9a7-4927-8433-aa333a9fca53&pf_rd_r=MDMFEFA5292E8EHEADV3&pd_rd_wg=t4dXG&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b'
    },
    {
        key : 4,
        title : 'Beauty steals under $25',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg',
        alt : 'Beauty steals under $25',
        footer : 'Shop now',
        href : 'https://www.amazon.com/s?k=beauty&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.948ea99a-cbb3-4484-a15c-59648e21b8ad&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b&pd_rd_w=CS6rG&pd_rd_wg=t4dXG&pf_rd_p=948ea99a-cbb3-4484-a15c-59648e21b8ad&pf_rd_r=MDMFEFA5292E8EHEADV3&ref=pd_gw_unk'
    },
    {
        key : 5,
        title : 'Toys under $25',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg',
        alt : 'Toys under $25',
        footer : 'Shop now',
        href : 'https://www.amazon.com/s?k=toys&rh=p_36%3A-2500&_encoding=UTF8&content-id=amzn1.sym.44da4965-9668-4613-bec2-a3a75f0c2ad4&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b&pd_rd_w=InznT&pd_rd_wg=t4dXG&pf_rd_p=44da4965-9668-4613-bec2-a3a75f0c2ad4&pf_rd_r=MDMFEFA5292E8EHEADV3&ref=pd_gw_unk'
    },
    {
        key : 6,
        title : 'Deals in PCs',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg',
        alt : 'Deals in PCs',
        footer : 'Shop now',
        href : 'https://www.amazon.com/blackfriday/?_encoding=UTF8&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-collection-all-deals%2522%252C%2522departments%2522%253A%255B%2522541966%2522%255D%252C%2522sorting%2522%253A%2522FEATURED%2522%257D&pd_rd_w=0zNKO&content-id=amzn1.sym.4f927c78-8312-433d-894f-ce39ab49d900&pf_rd_p=4f927c78-8312-433d-894f-ce39ab49d900&pf_rd_r=MDMFEFA5292E8EHEADV3&pd_rd_wg=t4dXG&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b&ref_=pd_gw_unk'
    },
    {
        key : 7,
        title : 'Refresh your space',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg',
        alt : 'Refresh your space',
        footer : 'See more',
        href : 'https://www.amazon.com/s?k=Dinnerware+%26+accessories&_encoding=UTF8&content-id=amzn1.sym.c0480761-6b7c-400b-bca5-28ff417248d1&crid=IBML6MYDLJ4A&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b&pd_rd_w=JkmjQ&pd_rd_wg=t4dXG&pf_rd_p=c0480761-6b7c-400b-bca5-28ff417248d1&pf_rd_r=MDMFEFA5292E8EHEADV3&sprefix=dinnerware+%26+accessorie%2Caps%2C190&ref=pd_gw_unk'
    },
    {
        key : 8,
        title : 'Fashion trends you like',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg',
        alt : 'Fashion trends you like',
        footer : 'Explore more',
        href : 'https://www.amazon.com/s?k=Spring+Jackets&_encoding=UTF8&content-id=amzn1.sym.b4114be9-6d3d-4aed-8b31-fcbf38a83486&crid=28AAZ2JDZCYX1&pd_rd_r=425c07b9-7bc3-40d9-b9cc-905eecb7a83b&pd_rd_w=fQtpr&pd_rd_wg=t4dXG&pf_rd_p=b4114be9-6d3d-4aed-8b31-fcbf38a83486&pf_rd_r=MDMFEFA5292E8EHEADV3&sprefix=spring+jackets%2Caps%2C140&ref=pd_gw_unk'
    }
];

const clientCardData2 = [
    {
        key : 1,
        title : 'Shop activity trackers smartwatches',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg',
        alt : 'smart watches',
        footer : 'Shop now',
        href : 'https://www.amazon.com/s?k=activity+trackers+and+smartwatches&_encoding=UTF8&content-id=amzn1.sym.33f8f65b-b95c-44af-8b89-e59e69e79828&pd_rd_r=91402a00-fe87-41a4-b34e-97750523e105&pd_rd_w=l89ml&pd_rd_wg=cvHME&pf_rd_p=33f8f65b-b95c-44af-8b89-e59e69e79828&pf_rd_r=FZYZSGWQWCK4KGDWA1FR&ref=pd_gw_unk'
    },
    {
        key : 2,
        title : 'Upgrade your office furniture',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg',
        alt : 'Furniture',
        footer : 'Shop now',
        href : 'https://www.amazon.com/s?i=garden&srs=117030914011&bbn=1063306&rh=n%3A1055398%2Cn%3A1063306%2Cp_90%3A8308921011&s=price-desc-rank&_encoding=UTF8&content-id=amzn1.sym.664445f4-e24f-42c8-8613-1c15be2d6a54&pd_rd_r=91402a00-fe87-41a4-b34e-97750523e105&pd_rd_w=YcWPU&pd_rd_wg=cvHME&pf_rd_p=664445f4-e24f-42c8-8613-1c15be2d6a54&pf_rd_r=FZYZSGWQWCK4KGDWA1FR&ref=roarr_gw_1023_Furniture_OD_bf_DSCC'
    },
    {
        key : 3,
        title : 'A whole new way to work',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg',
        alt : 'PCs',
        footer : 'Shop personal computers',
        href : 'https://www.amazon.com/s?k=PC+for+work&_encoding=UTF8&content-id=amzn1.sym.6fb11530-aa4d-4809-af57-61c93f9fed0b&pd_rd_r=91402a00-fe87-41a4-b34e-97750523e105&pd_rd_w=BGpeM&pd_rd_wg=cvHME&pf_rd_p=6fb11530-aa4d-4809-af57-61c93f9fed0b&pf_rd_r=FZYZSGWQWCK4KGDWA1FR&ref=pd_gw_unk'
    },
    {
        key : 4,
        title : 'Laptops for every need',
        src : 'https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg',
        alt : 'Laptops',
        footer : 'Find your laptops here',
        href : 'https://www.amazon.com/s?k=laptops&_encoding=UTF8&content-id=amzn1.sym.133c76c2-17c5-4fe7-be87-8177a87f7092&pd_rd_r=91402a00-fe87-41a4-b34e-97750523e105&pd_rd_w=Vkb8B&pd_rd_wg=cvHME&pf_rd_p=133c76c2-17c5-4fe7-be87-8177a87f7092&pf_rd_r=FZYZSGWQWCK4KGDWA1FR&ref=pd_gw_unk'
    }
];

export {clientCardData1, clientCardData2};