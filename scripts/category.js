  function Category(categoryId,categoryName)
  {
    this.categoryId = categoryId ;
    this.categoryName = categoryName ;
    this.Displayorder = 1 ;
  }
  
  
  function Subcategory(categoryId,subcategoryId,subcategoryName)
  {
    this.categoryId = categoryId ;
    this.subcategoryId = subcategoryId ;
    this.subcategoryName = subcategoryName ;
    this.Displayorder = 1 ;
  }
  
  var arrayCategory=new Array(20);
  var arraySubcategory=new Array(144);             
  arrayCategory[0] = new Category(1,'宠物') ;
arrayCategory[1] = new Category(18,'个人证件') ;
arrayCategory[2] = new Category(10,'人') ;
arrayCategory[3] = new Category(15,'交通工具') ;
arrayCategory[4] = new Category(4,'电子产品') ;
arrayCategory[5] = new Category(2,'包') ;
arrayCategory[6] = new Category(13,'个人用品') ;
arrayCategory[7] = new Category(6,'珠宝、首饰') ;
arrayCategory[8] = new Category(7,'书籍') ;
arrayCategory[9] = new Category(8,'医学') ;
arrayCategory[10] = new Category(9,'音乐器具') ;
arrayCategory[11] = new Category(3,'衣服') ;
arrayCategory[12] = new Category(5,'使用工具') ;
arrayCategory[13] = new Category(14,'玩具') ;
arrayCategory[14] = new Category(11,'票据') ;
arrayCategory[15] = new Category(12,'体育用品') ;
arrayCategory[16] = new Category(16,'艺术品') ;
arrayCategory[17] = new Category(17,'卡') ;
arrayCategory[18] = new Category(19,'单位证件') ;
arrayCategory[19] = new Category(20,'印章') ;

  
  //arrayCategory[0] = new Subcategory(1,'aaa_sub') ;
  //arrayCategory[1] = new Subcategory(2,'222_sub') ;
  //arrayCategory[2] = new Subcategory(3,'333_sub') ;
  
  arraySubcategory[0] = new Subcategory(15,85,'汽车') ;
arraySubcategory[1] = new Subcategory(4,147,'笔记本') ;
arraySubcategory[2] = new Subcategory(4,148,'数码相机') ;
arraySubcategory[3] = new Subcategory(15,146,'货车') ;
arraySubcategory[4] = new Subcategory(4,29,'移动硬盘') ;
arraySubcategory[5] = new Subcategory(15,88,'电动车') ;
arraySubcategory[6] = new Subcategory(15,89,'单车、自行车') ;
arraySubcategory[7] = new Subcategory(4,26,'手机') ;
arraySubcategory[8] = new Subcategory(15,86,'摩托车') ;
arraySubcategory[9] = new Subcategory(15,87,'船') ;
arraySubcategory[10] = new Subcategory(4,149,'摄像机') ;
arraySubcategory[11] = new Subcategory(4,30,'电视机') ;
arraySubcategory[12] = new Subcategory(15,90,'其它') ;
arraySubcategory[13] = new Subcategory(4,28,'台式机') ;
arraySubcategory[14] = new Subcategory(4,31,'其它') ;
arraySubcategory[15] = new Subcategory(5,32,'厨房用具') ;
arraySubcategory[16] = new Subcategory(5,33,'五金用具') ;
arraySubcategory[17] = new Subcategory(5,34,'其它') ;
arraySubcategory[18] = new Subcategory(6,35,'项链') ;
arraySubcategory[19] = new Subcategory(6,36,'手链') ;
arraySubcategory[20] = new Subcategory(6,37,'戒指') ;
arraySubcategory[21] = new Subcategory(6,38,'手镯') ;
arraySubcategory[22] = new Subcategory(6,39,'玉佩') ;
arraySubcategory[23] = new Subcategory(6,40,'脚链') ;
arraySubcategory[24] = new Subcategory(6,41,'耳环') ;
arraySubcategory[25] = new Subcategory(6,42,'胸针、领针') ;
arraySubcategory[26] = new Subcategory(6,43,'手表') ;
arraySubcategory[27] = new Subcategory(6,44,'其它') ;
arraySubcategory[28] = new Subcategory(7,45,'名著') ;
arraySubcategory[29] = new Subcategory(7,46,'日记') ;
arraySubcategory[30] = new Subcategory(7,47,'杂志') ;
arraySubcategory[31] = new Subcategory(7,48,'课本') ;
arraySubcategory[32] = new Subcategory(7,49,'信件') ;
arraySubcategory[33] = new Subcategory(7,50,'其它') ;
arraySubcategory[34] = new Subcategory(8,51,'助听器') ;
arraySubcategory[35] = new Subcategory(8,52,'拐杖') ;
arraySubcategory[36] = new Subcategory(8,53,'药品') ;
arraySubcategory[37] = new Subcategory(8,54,'其它') ;
arraySubcategory[38] = new Subcategory(9,55,'小提琴') ;
arraySubcategory[39] = new Subcategory(9,56,'吉它') ;
arraySubcategory[40] = new Subcategory(9,57,'钢琴') ;
arraySubcategory[41] = new Subcategory(9,58,'其它') ;
arraySubcategory[42] = new Subcategory(10,59,'大人') ;
arraySubcategory[43] = new Subcategory(10,60,'小孩') ;
arraySubcategory[44] = new Subcategory(10,61,'老年人') ;
arraySubcategory[45] = new Subcategory(10,62,'其它') ;
arraySubcategory[46] = new Subcategory(11,63,'火车票') ;
arraySubcategory[47] = new Subcategory(11,64,'飞机票') ;
arraySubcategory[48] = new Subcategory(11,65,'景点门票') ;
arraySubcategory[49] = new Subcategory(11,66,'车票') ;
arraySubcategory[50] = new Subcategory(11,67,'入场券') ;
arraySubcategory[51] = new Subcategory(12,69,'足球') ;
arraySubcategory[52] = new Subcategory(12,70,'篮球') ;
arraySubcategory[53] = new Subcategory(12,71,'网球') ;
arraySubcategory[54] = new Subcategory(12,72,'乒乓球拍') ;
arraySubcategory[55] = new Subcategory(12,73,'羽毛球拍') ;
arraySubcategory[56] = new Subcategory(12,74,'脚踏车') ;
arraySubcategory[57] = new Subcategory(12,75,'高尔夫球杆') ;
arraySubcategory[58] = new Subcategory(12,76,'其它') ;
arraySubcategory[59] = new Subcategory(13,77,'伞') ;
arraySubcategory[60] = new Subcategory(13,78,'钥匙') ;
arraySubcategory[61] = new Subcategory(13,79,'文件') ;
arraySubcategory[62] = new Subcategory(13,80,'化妆品') ;
arraySubcategory[63] = new Subcategory(13,81,'其它') ;
arraySubcategory[64] = new Subcategory(14,82,'娃娃') ;
arraySubcategory[65] = new Subcategory(14,83,'游戏卡') ;
arraySubcategory[66] = new Subcategory(14,84,'其它') ;
arraySubcategory[67] = new Subcategory(16,91,'古董') ;
arraySubcategory[68] = new Subcategory(16,92,'画') ;
arraySubcategory[69] = new Subcategory(16,93,'照片') ;
arraySubcategory[70] = new Subcategory(16,94,'雕刻') ;
arraySubcategory[71] = new Subcategory(16,95,'其它') ;
arraySubcategory[72] = new Subcategory(17,96,'信用卡') ;
arraySubcategory[73] = new Subcategory(17,97,'银行卡(借记卡)') ;
arraySubcategory[74] = new Subcategory(17,98,'VIP卡') ;
arraySubcategory[75] = new Subcategory(17,99,'门禁卡') ;
arraySubcategory[76] = new Subcategory(17,100,'公交IC卡') ;
arraySubcategory[77] = new Subcategory(17,101,'电话卡') ;
arraySubcategory[78] = new Subcategory(18,102,'身份证') ;
arraySubcategory[79] = new Subcategory(18,103,'驾驶证') ;
arraySubcategory[80] = new Subcategory(18,104,'车牌') ;
arraySubcategory[81] = new Subcategory(18,105,'居住证') ;
arraySubcategory[82] = new Subcategory(18,106,'营业执照证') ;
arraySubcategory[83] = new Subcategory(18,107,'税务登记证') ;
arraySubcategory[84] = new Subcategory(18,108,'公章') ;
arraySubcategory[85] = new Subcategory(18,109,'港澳通行证') ;
arraySubcategory[86] = new Subcategory(18,110,'护照') ;
arraySubcategory[87] = new Subcategory(18,111,'其它') ;
arraySubcategory[88] = new Subcategory(19,112,'开户许可证') ;
arraySubcategory[89] = new Subcategory(19,113,'营业执照') ;
arraySubcategory[90] = new Subcategory(19,114,'国税登记证') ;
arraySubcategory[91] = new Subcategory(19,115,'地税登记证') ;
arraySubcategory[92] = new Subcategory(19,116,'公章') ;
arraySubcategory[93] = new Subcategory(19,117,'合同书、文件资料等') ;
arraySubcategory[94] = new Subcategory(20,118,'财务章') ;
arraySubcategory[95] = new Subcategory(20,119,'私章') ;
arraySubcategory[96] = new Subcategory(20,120,'报关章') ;
arraySubcategory[97] = new Subcategory(20,121,'注册会计师章') ;
arraySubcategory[98] = new Subcategory(20,122,'出图章') ;
arraySubcategory[99] = new Subcategory(11,123,'发票') ;
arraySubcategory[100] = new Subcategory(11,124,'收据') ;
arraySubcategory[101] = new Subcategory(11,125,'回执单') ;
arraySubcategory[102] = new Subcategory(11,126,'提单') ;
arraySubcategory[103] = new Subcategory(11,127,'养路费单') ;
arraySubcategory[104] = new Subcategory(11,128,'其它') ;
arraySubcategory[105] = new Subcategory(18,129,'毕业证') ;
arraySubcategory[106] = new Subcategory(18,130,'学位证') ;
arraySubcategory[107] = new Subcategory(18,131,'学生证') ;
arraySubcategory[108] = new Subcategory(18,132,'上岗证') ;
arraySubcategory[109] = new Subcategory(18,133,'军官证') ;
arraySubcategory[110] = new Subcategory(18,134,'残疾证') ;
arraySubcategory[111] = new Subcategory(18,135,'房产证') ;
arraySubcategory[112] = new Subcategory(18,136,'会计证') ;
arraySubcategory[113] = new Subcategory(18,137,'律师证') ;
arraySubcategory[114] = new Subcategory(18,138,'护照') ;
arraySubcategory[115] = new Subcategory(18,139,'结婚证') ;
arraySubcategory[116] = new Subcategory(17,140,'工卡') ;
arraySubcategory[117] = new Subcategory(17,141,'银行回单卡') ;
arraySubcategory[118] = new Subcategory(17,142,'投标卡') ;
arraySubcategory[119] = new Subcategory(17,143,'VIP卡') ;
arraySubcategory[120] = new Subcategory(17,144,'会员卡') ;
arraySubcategory[121] = new Subcategory(17,145,'其它') ;
arraySubcategory[122] = new Subcategory(4,27,'CD、DVD、MP3、U盘、光盘') ;
arraySubcategory[123] = new Subcategory(1,1,'狗') ;
arraySubcategory[124] = new Subcategory(1,2,'猫') ;
arraySubcategory[125] = new Subcategory(1,3,'鸟') ;
arraySubcategory[126] = new Subcategory(1,7,'兔') ;
arraySubcategory[127] = new Subcategory(1,9,'其它') ;
arraySubcategory[128] = new Subcategory(2,10,'背包') ;
arraySubcategory[129] = new Subcategory(2,11,'公文包') ;
arraySubcategory[130] = new Subcategory(2,12,'手提包') ;
arraySubcategory[131] = new Subcategory(2,13,'钱包') ;
arraySubcategory[132] = new Subcategory(2,14,'其它') ;
arraySubcategory[133] = new Subcategory(3,15,'裤子') ;
arraySubcategory[134] = new Subcategory(3,16,'外套') ;
arraySubcategory[135] = new Subcategory(3,17,'礼服') ;
arraySubcategory[136] = new Subcategory(3,18,'上衣') ;
arraySubcategory[137] = new Subcategory(3,19,'运动衫') ;
arraySubcategory[138] = new Subcategory(3,20,'泳衣') ;
arraySubcategory[139] = new Subcategory(3,21,'裙子') ;
arraySubcategory[140] = new Subcategory(3,22,'帽子') ;
arraySubcategory[141] = new Subcategory(3,23,'鞋子') ;
arraySubcategory[142] = new Subcategory(3,24,'袜子') ;
arraySubcategory[143] = new Subcategory(3,25,'其它') ;

  
//  arraySubcategory[0] = new Subcategory(0,1,'aaa_sub') ;
//  arraySubcategory[1] = new Subcategory(0,2,'bbb_sub') ;
//  arraySubcategory[2] = new Subcategory(1,3,'ccc_sub') ;
//  arraySubcategory[3] = new Subcategory(1,4,'ddd_sub') ;
  
  