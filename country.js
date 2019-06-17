//ARRAY from the following sources

/*
 * Program - Country Guessing Game
 * File Name - script.js
 * Author - ShuvoRim
 * Web site - http://www.shuvorim.tk
 * Email - shuvorim@hotmail.com
 * (c)ShuvoRim Pvt. Ltd. 2002 - 03
 * All rights reserved.
 * ------------------------------
 * Visit our web site for free open
 * source Applications, Applets,
 * Scripts and Games. Thank you for
 * using our program.
 http://www.javascriptsource.com/games/country-guessing-883281.html
 
declaring an array to hold the country names */
var country = new Array(188);
 
/* initializing the array */
 
   country[0] = "AFGHANISTAN";
   country[1] = "ARUBA";
   country[2] = "ALBANIA";
   country[3] = "ALGERIA";
   country[4] = "ANDORRA";
   country[5] = "ANGOLA";
   country[6] = "ANTARCTICA";
   country[7] = "ARGENTINA";
   country[8] = "ARMENIA";
  country[9] = "AUSTRALIA";
  country[10] = "AUSTRIA";
  country[11] = "AZERBAIJAN";
  country[12] = "BAHAMAS";
  country[13] = "BAHRAIN";
  country[14] = "BANGLADESH";
  country[15] = "BARBADOS";
  country[16] = "BELARUS";
  country[17] = "BELGIUM";
  country[18] = "BELIZE";
  country[19] = "BENIN";
  country[20] = "BHUTAN";
  country[21] = "BOLIVIA";
  country[22] = "BOSNIA";
  country[23] = "BOTSWANA";
  country[24] = "BRAZIL";
  country[25] = "BRUNEI";
  country[26] = "BULGARIA";
  country[27] = "BURKINA FASO";
  country[28] = "BURUNDI";
  country[29] = "CABO VERDE";
  country[30] = "CAMBODIA";
  country[31] = "CAMEROON";
  country[32] = "CANADA";
  country[33] = "CAPE VERDE ISLANDS";
  country[34] ="CENTRAL AFRICAN REPUBLIC";
  country[35] = "CHAD";
  country[36] = "CHILE";
  country[37] = "CHINA";
  country[38] = "COLOMBIA";
  country[39] = "COMOROS";
  country[40] = "DR CONGO";
  country[41] = "COSTA RICA";
  country[42] = "CROATIA";
  country[43] = "CUBA";
  country[44] = "CYPRUS";
  country[45] = "CZECH REPUBLIC";
  country[46] = "DENMARK";
  country[47] = "DJIBOUTI";
  country[48] = "DOMINICAN REPUBLIC";
  country[49] = "ECUADOR";
  country[50] = "EGYPT";
  country[51] = "EL SALVADOR";
  country[52] = "ERITREA";
  country[53] = "ESTONIA";
  country[54] = "ETHIOPIA";
  country[55] = "EUROPA ISLANDS";
  country[56] = "FIJI";
  country[57] = "FINLAND";
  country[58] = "FRANCE";
  country[59] = "GABON";
  country[60] = "GAMBIA";
  country[61] = "GEORGIA";
  country[62] = "GERMANY";
  country[63] = "GHANA";
  country[64] = "GREECE";
  country[65] = "GRENADA";
  country[66] = "GUATEMALA";
  country[67] = "GUINEA";
  country[68] ="GUYANA";
  country[69] = "HAITI";
  country[70] = "HOLLAND";
  country[71] = "HONDURAS";
  country[72] = "HONG KONG";
  country[73] = "HUNGARY";
  country[74] = "ICELAND";
  country[75] = "INDIA";
  country[76] = "INDONESIA";
  country[77] = "IRAN";
  country[78] = "IRAQ";
  country[79] = "ISRAEL";
  country[80] = "ITALY";
  country[81] ="IVORY COAST";
  country[82] = "JAMAICA";
  country[83] = "JAPAN";
  country[84] = "JORDAN";
  country[85] = "KAZAKHSTAN";
  country[86] = "KENYA";
  country[87] = "KIRGYZSTAN";
  country[88] = "KIRIBATI";
  country[89] = "KOREA NORTH";
  country[90] ="KOREA SOUTH";
  country[91] ="KOSOVO";
  country[92] = "KUWAIT";
  country[93] ="KYRGYZTAN";
  country[94] = "LAOS";
  country[95] = "LATVIA";
  country[96] = "LEBANON";
  country[97] = "LESOTHO";
  country[98] = "LIBERIA";
  country[99] = "LIBYA";
  country[100] = "LIECHTENSTEIN";
  country[101] = "LITHUANIA";
  country[102] = "LUXEMBOURG";
  country[103] = "MADAGASCAR";
  country[104] = "MALAWI";
  country[105] = "MALAYSIA";
 country[106] = "MALDIVES";
 country[107] = "MALI";
 country[108] = "MALTA";
 country[109] ="MARSHALL ISLANDS";
 country[110] = "MAURITANIA";
 country[111] = "MAURITIUS";
 country[112] = "MEXICO";
 country[113] = "MOLDOVA";
 country[114] = "MONACO";
 country[115] = "MONGOLIA";
 country[116] = "MONTSERRAT";
 country[117] = "MOROCCO";
 country[118] = "MOZAMBIQUE";
 country[119] = "MYANMAR";
 country[120] = "NAMIBIA";
 country[121] = "NAURU";
 country[122] = "NEPAL";
 country[123] = "NETHERLANDS";
 country[124] = "NEW ZEALAND";
 country[125] = "NICARAGUA";
 country[126] = "NIGERIA";
 country[127] = "NORWAY";
 country[128] = "OMAN";
 country[129] = "PAKISTAN";
 country[130] ="PALAU";
 country[131] = "PANAMA";
 country[132] = "PAPUA NEW GUINEA";
 country[133] = "PARAGUAY";
 country[134] = "PERU";
 country[135] = "PHILIPPINES";
 country[136] = "POLAND";
 country[137] = "PORTUGAL";
 country[138] = "QATAR";
 country[139] = "ROMANIA";
 country[140] = "RUSSIA";
 country[141] = "RWANDA";
 country[142] = "SAN MARINO";
 country[142] = "SAUDI ARABIA";
 country[143] = "SENEGAL";
 country[144] = "SEYCHELLES";
 country[145] = "SIERRA LEONE";
 country[146] = "SINGAPORE";
 country[146] = "SLOVAKIA";
 country[147] = "SLOVENIA";
 country[148] = "SOLOMON ISLANDS";
 country[149] = "SOMALIA";
 country[150] = "SOUTH AFRICA";
 country[151] = "SPAIN";
 country[152] = "SRILANKA";
 country[153] = "SUDAN";
 country[154] = "SURINAM";
 country[155] = "SWAZILAND";
 country[156] = "SWEDEN";
 country[156] = "SWITZERLAND";
 country[158] = "SYRIA";
 country[159] = "TAIWAN";
 country[160] = "TAJIKITAN";
 country[161] = "TANZANIA";
 country[162] = "THAILAND";
 country[163] = "TOGO";
 country[164] = "TONGA";
 country[165] = "TRINIDAD AND TOBEGO";
 country[166] = "TUNISIA";
 country[167] = "TURKEY";
 country[168] = "TURKMENISTAN";
 country[169] = "TUVALU";
 country[170] = "UGANDA";
 country[171] = "UKRAINE";
 country[172] = "UNITED ARAB EMIRATES";
 country[173] ="UNITED KINGDOM";
 country[174] ="UNITED STATES";
 country[175] = "URUGUAY";
 country[176] = "UZBEKISTAN";
 country[177] = "VANUATU";
 country[178] = "VATICAN CITY";
 country[179] = "VENEZUELA";
 country[180] = "VIETNAM";
 country[181] = "WEST INDIES";
 country[182] = "WESTERN SAMOA";
 country[183] = "YEMEN REPUBLIC";
 country[184] = "YUGOSLAVIA";
 country[185] = "ZAIRE";
 country[186] = "ZAMBIA";
 country[187] = "ZIMBABWE";