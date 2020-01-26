var tv = {};
tv.functions = {};
tv.eles = {};
tv.vars = {};
tv.debug = {};
tv.consts = {
	styleId: "tv-styles",
	/* id of the style tag used */
	attr: {
		nameSource: "aria-describedby",
		/* reference from icon -> name location */
		filterable: "tv-filterable-icon",
		/* a mark for the querys to select from */
		iconName: "tv-assumed-name",
		/* name of icon */
		iconType: "tv-types-by-assumed-name",
		/* type of icon */
		bodyFilterName: "tv-filterby-name",
		/* global mark to indicate filtering by what... */
		bodyFilterType: "tv-filterby-type",
		bodyFilterNdex: "tv-filterby-ndex",
		matchedName: "tv-match-name",
		/* icon name matched query */
		matchedType: "tv-match-type",
		/* icon type matched query */
		match: "tv-match" /* all query elements matched */
	}
};

tv.vars.iconIDs = {};

tv.vars.truMatchStyles = "filter: none;"; /* leaves icons in default state */
tv.vars.falMatchStyles = "filter: brightness(.1) invert(80%) blur(2px);";
/* makes the icons grey and shadowy */

/* Array of all pokemon for types, by national dex order */
tv.vars.monData = {
	"types": ["grass", "poison", "fire", "no-secondary-type", "flying", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon", "dark"],
	"columns": {
		"pokemon": ["ndex", "name", "types"]
	},
	"pokemon": [
		[1, "bulbasaur", [0, 1]],
		[2, "ivysaur", [0, 1]],
		[3, "venusaur", [0, 1]],
		[4, "charmander", [2, 3]],
		[5, "charmeleon", [2, 3]],
		[6, "charizard", [2, 4]],
		[7, "squirtle", [5, 3]],
		[8, "wartortle", [5, 3]],
		[9, "blastoise", [5, 3]],
		[10, "caterpie", [6, 3]],
		[11, "metapod", [6, 3]],
		[12, "butterfree", [6, 4]],
		[13, "weedle", [6, 1]],
		[14, "kakuna", [6, 1]],
		[15, "beedrill", [6, 1]],
		[16, "pidgey", [7, 4]],
		[17, "pidgeotto", [7, 4]],
		[18, "pidgeot", [7, 4]],
		[19, "rattata", [7, 3]],
		[20, "raticate", [7, 3]],
		[21, "spearow", [7, 4]],
		[22, "fearow", [7, 4]],
		[23, "ekans", [1, 3]],
		[24, "arbok", [1, 3]],
		[25, "pikachu", [8, 3]],
		[26, "raichu", [8, 3]],
		[27, "sandshrew", [9, 3]],
		[28, "sandslash", [9, 3]],
		[29, "nidoran♀", [1, 3]],
		[30, "nidorina", [1, 3]],
		[31, "nidoqueen", [1, 9]],
		[32, "nidoran♂", [1, 3]],
		[33, "nidorino", [1, 3]],
		[34, "nidoking", [1, 9]],
		[35, "clefairy", [10, 3]],
		[36, "clefable", [10, 3]],
		[37, "vulpix", [2, 3]],
		[38, "ninetales", [2, 3]],
		[39, "jigglypuff", [7, 10]],
		[40, "wigglytuff", [7, 10]],
		[41, "zubat", [1, 4]],
		[42, "golbat", [1, 4]],
		[43, "oddish", [0, 1]],
		[44, "gloom", [0, 1]],
		[45, "vileplume", [0, 1]],
		[46, "paras", [6, 0]],
		[47, "parasect", [6, 0]],
		[48, "venonat", [6, 1]],
		[49, "venomoth", [6, 1]],
		[50, "diglett", [9, 3]],
		[51, "dugtrio", [9, 3]],
		[52, "meowth", [7, 3]],
		[53, "persian", [7, 3]],
		[54, "psyduck", [5, 3]],
		[55, "golduck", [5, 3]],
		[56, "mankey", [11, 3]],
		[57, "primeape", [11, 3]],
		[58, "growlithe", [2, 3]],
		[59, "arcanine", [2, 3]],
		[60, "poliwag", [5, 3]],
		[61, "poliwhirl", [5, 3]],
		[62, "poliwrath", [5, 11]],
		[63, "abra", [12, 3]],
		[64, "kadabra", [12, 3]],
		[65, "alakazam", [12, 3]],
		[66, "machop", [11, 3]],
		[67, "machoke", [11, 3]],
		[68, "machamp", [11, 3]],
		[69, "bellsprout", [0, 1]],
		[70, "weepinbell", [0, 1]],
		[71, "victreebel", [0, 1]],
		[72, "tentacool", [5, 1]],
		[73, "tentacruel", [5, 1]],
		[74, "geodude", [13, 9]],
		[75, "graveler", [13, 9]],
		[76, "golem", [13, 9]],
		[77, "ponyta", [2, 3]],
		[78, "rapidash", [2, 3]],
		[79, "slowpoke", [5, 12]],
		[80, "slowbro", [5, 12]],
		[81, "magnemite", [8, 14]],
		[82, "magneton", [8, 14]],
		[83, "farfetch'd", "types" [7, 4]],
		[84, "doduo", [7, 4]],
		[85, "dodrio", [7, 4]],
		[86, "seel", [5, 3]],
		[87, "dewgong", [5, 15]],
		[88, "grimer", [1, 3]],
		[89, "muk", [1, 3]],
		[90, "shellder", [5, 3]],
		[91, "cloyster", [5, 15]],
		[92, "gastly", [16, 1]],
		[93, "haunter", [16, 1]],
		[94, "gengar", [16, 1]],
		[95, "onix", [13, 9]],
		[96, "drowzee", [12, 3]],
		[97, "hypno", [12, 3]],
		[98, "krabby", [5, 3]],
		[99, "kingler", [5, 3]],
		[100, "voltorb", [8, 3]],
		[101, "electrode", [8, 3]],
		[102, "exeggcute", [0, 12]],
		[103, "exeggutor", [0, 12]],
		[104, "cubone", [9, 3]],
		[105, "marowak", [9, 3]],
		[106, "hitmonlee", [11, 3]],
		[107, "hitmonchan", [11, 3]],
		[108, "lickitung", [7, 3]],
		[109, "koffing", [1, 3]],
		[110, "weezing", [1, 3]],
		[111, "rhyhorn", [9, 13]],
		[112, "rhydon", [9, 13]],
		[113, "chansey", [7, 3]],
		[114, "tangela", [0, 3]],
		[115, "kangaskhan", [7, 3]],
		[116, "horsea", [5, 3]],
		[117, "seadra", [5, 3]],
		[118, "goldeen", [5, 3]],
		[119, "seaking", [5, 3]],
		[120, "staryu", [5, 3]],
		[121, "starmie", [5, 12]],
		[122, "mr. mime", [12, 10]],
		[123, "scyther", [6, 4]],
		[124, "jynx", [15, 12]],
		[125, "electabuzz", [8, 3]],
		[126, "magmar", [2, 3]],
		[127, "pinsir", [6, 3]],
		[128, "tauros", [7, 3]],
		[129, "magikarp", [5, 3]],
		[130, "gyarados", [5, 4]],
		[131, "lapras", [5, 15]],
		[132, "ditto", [7, 3]],
		[133, "eevee", [7, 3]],
		[134, "vaporeon", [5, 3]],
		[135, "jolteon", [8, 3]],
		[136, "flareon", [2, 3]],
		[137, "porygon", [7, 3]],
		[138, "omanyte", [13, 5]],
		[139, "omastar", [13, 5]],
		[140, "kabuto", [13, 5]],
		[141, "kabutops", [13, 5]],
		[142, "aerodactyl", [13, 4]],
		[143, "snorlax", [7, 3]],
		[144, "articuno", [15, 4]],
		[145, "zapdos", [8, 4]],
		[146, "moltres", [2, 4]],
		[147, "dratini", [17, 3]],
		[148, "dragonair", [17, 3]],
		[149, "dragonite", [17, 4]],
		[150, "mewtwo", [12, 3]],
		[151, "mew", [12, 3]],
		[152, "chikorita", [0, 3]],
		[153, "bayleef", [0, 3]],
		[154, "meganium", [0, 3]],
		[155, "cyndaquil", [2, 3]],
		[156, "quilava", [2, 3]],
		[157, "typhlosion", [2, 3]],
		[158, "totodile", [5, 3]],
		[159, "croconaw", [5, 3]],
		[160, "feraligatr", [5, 3]],
		[161, "sentret", [7, 3]],
		[162, "furret", [7, 3]],
		[163, "hoothoot", [7, 4]],
		[164, "noctowl", [7, 4]],
		[165, "ledyba", [6, 4]],
		[166, "ledian", [6, 4]],
		[167, "spinarak", [6, 1]],
		[168, "ariados", [6, 1]],
		[169, "crobat", [1, 4]],
		[170, "chinchou", [5, 8]],
		[171, "lanturn", [5, 8]],
		[172, "pichu", [8, 3]],
		[173, "cleffa", [10, 3]],
		[174, "igglybuff", [7, 10]],
		[175, "togepi", [10, 3]],
		[176, "togetic", [10, 4]],
		[177, "natu", [12, 4]],
		[178, "xatu", [12, 4]],
		[179, "mareep", [8, 3]],
		[180, "flaaffy", [8, 3]],
		[181, "ampharos", [8, 3]],
		[182, "bellossom", [0, 3]],
		[183, "marill", [5, 10]],
		[184, "azumarill", [5, 10]],
		[185, "sudowoodo", [13, 3]],
		[186, "politoed", [5, 3]],
		[187, "hoppip", [0, 4]],
		[188, "skiploom", [0, 4]],
		[189, "jumpluff", [0, 4]],
		[190, "aipom", [7, 3]],
		[191, "sunkern", [0, 3]],
		[192, "sunflora", [0, 3]],
		[193, "yanma", [6, 4]],
		[194, "wooper", [5, 9]],
		[195, "quagsire", [5, 9]],
		[196, "espeon", [12, 3]],
		[197, "umbreon", [18, 3]],
		[198, "murkrow", [18, 4]],
		[199, "slowking", [5, 12]],
		[200, "misdreavus", [16, 3]],
		[201, "unown", [12, 3]],
		[202, "wobbuffet", [12, 3]],
		[203, "girafarig", [7, 12]],
		[204, "pineco", [6, 3]],
		[205, "forretress", [6, 14]],
		[206, "dunsparce", [7, 3]],
		[207, "gligar", [9, 4]],
		[208, "Steelix", [14, 9]],
		[209, "snubbull", [10, 3]],
		[210, "granbull", [10, 3]],
		[211, "qwilfish", [5, 1]],
		[212, "scizor", [6, 14]],
		[213, "shuckle", [6, 13]],
		[214, "heracross", [6, 11]],
		[215, "sneasel", [18, 15]],
		[216, "teddiursa", [7, 3]],
		[217, "ursaring", [7, 3]],
		[218, "slugma", [2, 3]],
		[219, "magcargo", [2, 13]],
		[220, "swinub", [15, 9]],
		[221, "piloswine", [15, 9]],
		[222, "corsola", [5, 13]],
		[223, "remoraid", [5, 3]],
		[224, "octillery", [5, 3]],
		[225, "delibird", [15, 4]],
		[226, "mantine", [5, 4]],
		[227, "skarmory", [14, 4]],
		[228, "houndour", [18, 2]],
		[229, "houndoom", [18, 2]],
		[230, "kingdra", [5, 17]],
		[231, "phanpy", [9, 3]],
		[232, "donphan", [9, 3]],
		[233, "porygon2", [7, 3]],
		[234, "stantler", [7, 3]],
		[235, "smeargle", [7, 3]],
		[236, "tyrogue", [11, 3]],
		[237, "hitmontop", [11, 3]],
		[238, "smoochum", [15, 12]],
		[239, "elekid", [8, 3]],
		[240, "magby", [2, 3]],
		[241, "miltank", [7, 3]],
		[242, "blissey", [7, 3]],
		[243, "raikou", [8, 3]],
		[244, "entei", [2, 3]],
		[245, "suicune", [5, 3]],
		[246, "larvitar", [13, 9]],
		[247, "pupitar", [13, 9]],
		[248, "tyranitar", [13, 18]],
		[249, "lugia", [12, 4]],
		[250, "ho-oh", [2, 4]],
		[251, "celebi", [12, 0]],
		[252, "treecko", [0, 3]],
		[253, "grovyle", [0, 3]],
		[254, "sceptile", [0, 3]],
		[255, "torchic", [2, 3]],
		[256, "combusken", [2, 11]],
		[257, "blaziken", [2, 11]],
		[258, "mudkip", [5, 3]],
		[259, "marshtomp", [5, 9]],
		[260, "swampert", [5, 9]],
		[261, "poochyena", [18, 3]],
		[262, "mightyena", [18, 3]],
		[263, "zigzagoon", [7, 3]],
		[264, "linoone", [7, 3]],
		[265, "wurmple", [6, 3]],
		[266, "silcoon", [6, 3]],
		[267, "beautifly", [6, 4]],
		[268, "cascoon", [6, 3]],
		[269, "dustox", [6, 1]],
		[270, "lotad", [5, 0]],
		[271, "lombre", [5, 0]],
		[272, "ludicolo", [5, 0]],
		[273, "seedot", [0, 3]],
		[274, "nuzleaf", [0, 18]],
		[275, "shiftry", [0, 18]],
		[276, "taillow", [7, 4]],
		[277, "swellow", [7, 4]],
		[278, "wingull", [5, 4]],
		[279, "pelipper", [5, 4]],
		[280, "ralts", [12, 10]],
		[281, "kirlia", [12, 10]],
		[282, "gardevoir", [12, 10]],
		[283, "surskit", [6, 5]],
		[284, "masquerain", [6, 4]],
		[285, "shroomish", [0, 3]],
		[286, "breloom", [0, 11]],
		[287, "slakoth", [7, 3]],
		[288, "vigoroth", [7, 3]],
		[289, "slaking", [7, 3]],
		[290, "nincada", [6, 9]],
		[291, "ninjask", [6, 4]],
		[292, "shedinja", [6, 16]],
		[293, "whismur", [7, 3]],
		[294, "loudred", [7, 3]],
		[295, "exploud", [7, 3]],
		[296, "makuhita", [11, 3]],
		[297, "hariyama", [11, 3]],
		[298, "azurill", [7, 10]],
		[299, "nosepass", [13, 3]],
		[300, "skitty", [7, 3]],
		[301, "delcatty", [7, 3]],
		[302, "sableye", [18, 16]],
		[303, "mawile", [14, 10]],
		[304, "aron", [14, 13]],
		[305, "lairon", [14, 13]],
		[306, "aggron", [14, 13]],
		[307, "meditite", [11, 12]],
		[308, "medicham", [11, 12]],
		[309, "electrike", [8, 3]],
		[310, "manectric", [8, 3]],
		[311, "plusle", [8, 3]],
		[312, "minun", [8, 3]],
		[313, "volbeat", [6, 3]],
		[314, "illumise", [6, 3]],
		[315, "roselia", [0, 1]],
		[316, "gulpin", [1, 3]],
		[317, "swalot", [1, 3]],
		[318, "carvanha", [5, 18]],
		[319, "sharpedo", [5, 18]],
		[320, "wailmer", [5, 3]],
		[321, "wailord", [5, 3]],
		[322, "numel", [2, 9]],
		[323, "camerupt", [2, 9]],
		[324, "torkoal", [2, 3]],
		[325, "spoink", [12, 3]],
		[326, "grumpig", [12, 3]],
		[327, "spinda", [7, 3]],
		[328, "trapinch", [9, 3]],
		[329, "vibrava", [9, 17]],
		[330, "flygon", [9, 17]],
		[331, "cacnea", [0, 3]],
		[332, "cacturne", [0, 18]],
		[333, "swablu", [7, 4]],
		[334, "altaria", [17, 4]],
		[335, "zangoose", [7, 3]],
		[336, "seviper", [1, 3]],
		[337, "lunatone", [13, 12]],
		[338, "solrock", [13, 12]],
		[339, "barboach", [5, 9]],
		[340, "whiscash", [5, 9]],
		[341, "corphish", [5, 3]],
		[342, "crawdaunt", [5, 18]],
		[343, "baltoy", [9, 12]],
		[344, "claydol", [9, 12]],
		[345, "lileep", [13, 0]],
		[346, "cradily", [13, 0]],
		[347, "anorith", [13, 6]],
		[348, "armaldo", [13, 6]],
		[349, "feebas", [5, 3]],
		[350, "milotic", [5, 3]],
		[351, "castform", [7, 3]],
		[352, "kecleon", [7, 3]],
		[353, "shuppet", [16, 3]],
		[354, "banette", [16, 3]],
		[355, "duskull", [16, 3]],
		[356, "dusclops", [16, 3]],
		[357, "tropius", [0, 4]],
		[358, "chimecho", [12, 3]],
		[359, "absol", [18, 3]],
		[360, "wynaut", [12, 3]],
		[361, "snorunt", [15, 3]],
		[362, "glalie", [15, 3]],
		[363, "spheal", [15, 5]],
		[364, "sealeo", [15, 5]],
		[365, "walrein", [15, 5]],
		[366, "clamperl", [5, 3]],
		[367, "huntail", [5, 3]],
		[368, "gorebyss", [5, 3]],
		[369, "relicanth", [5, 13]],
		[370, "luvdisc", [5, 3]],
		[371, "bagon", [17, 3]],
		[372, "shelgon", [17, 3]],
		[373, "salamence", [17, 4]],
		[374, "beldum", [14, 12]],
		[375, "metang", [14, 12]],
		[376, "metagross", [14, 12]],
		[377, "regirock", [13, 3]],
		[378, "regice", [15, 3]],
		[379, "registeel", [14, 3]],
		[380, "latias", [17, 12]],
		[381, "latios", [17, 12]],
		[382, "kyogre", [5, 3]],
		[383, "groudon", [9, 3]],
		[384, "rayquaza", [17, 4]],
		[385, "jirachi", [14, 12]],
		[386, "deoxys", [12, 3]],
		[387, "turtwig", [0, 3]],
		[388, "grotle", [0, 3]],
		[389, "torterra", [0, 9]],
		[390, "chimchar", [2, 3]],
		[391, "monferno", [2, 11]],
		[392, "infernape", [2, 11]],
		[393, "piplup", [5, 3]],
		[394, "prinplup", [5, 3]],
		[395, "empoleon", [5, 14]],
		[396, "starly", [7, 4]],
		[397, "staravia", [7, 4]],
		[398, "staraptor", [7, 4]],
		[399, "bidoof", [7, 3]],
		[400, "bibarel", [7, 5]],
		[401, "kricketot", [6, 3]],
		[402, "kricketune", [6, 3]],
		[403, "shinx", [8, 3]],
		[404, "luxio", [8, 3]],
		[405, "luxray", [8, 3]],
		[406, "budew", [0, 1]],
		[407, "roserade", [0, 1]],
		[408, "cranidos", [13, 3]],
		[409, "rampardos", [13, 3]],
		[410, "shieldon", [13, 14]],
		[411, "bastiodon", [13, 14]],
		[412, "burmy", [6, 3]],
		[413, "wormadam", [6, 14]],
		[414, "mothim", [6, 4]],
		[415, "combee", [6, 4]],
		[416, "vespiquen", [6, 4]],
		[417, "pachirisu", [8, 3]],
		[418, "buizel", [5, 3]],
		[419, "floatzel", [5, 3]],
		[420, "cherubi", [0, 3]],
		[421, "cherrim", [0, 3]],
		[422, "shellos", [5, 3]],
		[423, "gastrodon", [5, 9]],
		[424, "ambipom", [7, 3]],
		[425, "drifloon", [16, 4]],
		[426, "drifblim", [16, 4]],
		[427, "buneary", [7, 3]],
		[428, "lopunny", [7, 3]],
		[429, "mismagius", [16, 3]],
		[430, "honchkrow", [18, 4]],
		[431, "glameow", [7, 3]],
		[432, "purugly", [7, 3]],
		[433, "chingling", [12, 3]],
		[434, "stunky", [1, 18]],
		[435, "skuntank", [1, 18]],
		[436, "bronzor", [14, 12]],
		[437, "bronzong", [14, 12]],
		[438, "bonsly", [13, 3]],
		[439, "mime jr.", "types" [12, 10]],
		[440, "happiny", [7, 3]],
		[441, "chatot", [7, 4]],
		[442, "spiritomb", [16, 18]],
		[443, "gible", [17, 9]],
		[444, "gabite", [17, 9]],
		[445, "garchomp", [17, 9]],
		[446, "munchlax", [7, 3]],
		[447, "riolu", [11, 3]],
		[448, "lucario", [11, 14]],
		[449, "hippopotas", [9, 3]],
		[450, "hippowdon", [9, 3]],
		[451, "skorupi", [1, 6]],
		[452, "drapion", [1, 18]],
		[453, "croagunk", [1, 11]],
		[454, "toxicroak", [1, 11]],
		[455, "carnivine", [0, 3]],
		[456, "finneon", [5, 3]],
		[457, "lumineon", [5, 3]],
		[458, "mantyke", [5, 4]],
		[459, "snover", [0, 15]],
		[460, "abomasnow", [0, 15]],
		[461, "weavile", [18, 15]],
		[462, "magnezone", [8, 14]],
		[463, "lickilicky", [7, 3]],
		[464, "rhyperior", [9, 13]],
		[465, "tangrowth", [0, 3]],
		[466, "electivire", [8, 3]],
		[467, "magmortar", [2, 3]],
		[468, "togekiss", [10, 4]],
		[469, "yanmega", [6, 4]],
		[470, "leafeon", [0, 3]],
		[471, "glaceon", [15, 3]],
		[472, "gliscor", [9, 4]],
		[473, "mamoswine", [15, 9]],
		[474, "porygon-z", [7, 3]],
		[475, "gallade", [12, 11]],
		[476, "probopass", [13, 14]],
		[477, "dusknoir", [16, 3]],
		[478, "froslass", [15, 16]],
		[479, "rotom", [8, 16]],
		[480, "uxie", [12, 3]],
		[481, "mesprit", [12, 3]],
		[482, "azelf", [12, 3]],
		[483, "dialga", [14, 17]],
		[484, "palkia", [5, 17]],
		[485, "heatran", [2, 14]],
		[486, "regigigas", [7, 3]],
		[487, "giratina", [16, 17]],
		[488, "cresselia", [12, 3]],
		[489, "phione", [5, 3]],
		[490, "manaphy", [5, 3]],
		[491, "darkrai", [18, 3]],
		[492, "shaymin", [0, 4]],
		[493, "arceus", [7, 3]],
		[494, "victini", [12, 2]],
		[495, "snivy", [0, 3]],
		[496, "servine", [0, 3]],
		[497, "serperior", [0, 3]],
		[498, "tepig", [2, 3]],
		[499, "pignite", [2, 11]],
		[500, "emboar", [2, 11]],
		[501, "oshawott", [5, 3]],
		[502, "dewott", [5, 3]],
		[503, "samurott", [5, 3]],
		[504, "patrat", [7, 3]],
		[505, "watchog", [7, 3]],
		[506, "lillipup", [7, 3]],
		[507, "herdier", [7, 3]],
		[508, "stoutland", [7, 3]],
		[509, "purrloin", [18, 3]],
		[510, "liepard", [18, 3]],
		[511, "pansage", [0, 3]],
		[512, "simisage", [0, 3]],
		[513, "pansear", [2, 3]],
		[514, "simisear", [2, 3]],
		[515, "panpour", [5, 3]],
		[516, "simipour", [5, 3]],
		[517, "munna", [12, 3]],
		[518, "musharna", [12, 3]],
		[519, "pidove", [7, 4]],
		[520, "tranquill", [7, 4]],
		[521, "unfezant", [7, 4]],
		[522, "blitzle", [8, 3]],
		[523, "zebstrika", [8, 3]],
		[524, "roggenrola", [13, 3]],
		[525, "boldore", [13, 3]],
		[526, "gigalith", [13, 3]],
		[527, "woobat", [12, 4]],
		[528, "swoobat", [12, 4]],
		[529, "drilbur", [9, 3]],
		[530, "excadrill", [9, 14]],
		[531, "audino", [7, 3]],
		[532, "timburr", [11, 3]],
		[533, "gurdurr", [11, 3]],
		[534, "conkeldurr", [11, 3]],
		[535, "tympole", [5, 3]],
		[536, "palpitoad", [5, 9]],
		[537, "seismitoad", [5, 9]],
		[538, "throh", [11, 3]],
		[539, "sawk", [11, 3]],
		[540, "sewaddle", [6, 0]],
		[541, "swadloon", [6, 0]],
		[542, "leavanny", [6, 0]],
		[543, "venipede", [6, 1]],
		[544, "whirlipede", [6, 1]],
		[545, "scolipede", [6, 1]],
		[546, "cottonee", [0, 3]],
		[547, "whimsicott", [0, 10]],
		[548, "petilil", [0, 3]],
		[549, "lilligant", [0, 3]],
		[550, "basculin", [5, 3]],
		[551, "sandile", [9, 18]],
		[552, "krokorok", [9, 18]],
		[553, "krookodile", [9, 18]],
		[554, "darumaka", [2, 3]],
		[555, "darmanitan", [2, 3]],
		[556, "maractus", [0, 3]],
		[557, "dwebble", [6, 13]],
		[558, "crustle", [6, 13]],
		[559, "scraggy", [18, 11]],
		[560, "scrafty", [18, 11]],
		[561, "sigilyph", [12, 4]],
		[562, "yamask", [16, 3]],
		[563, "cofagrigus", [16, 3]],
		[564, "tirtouga", [5, 13]],
		[565, "carracosta", [5, 13]],
		[566, "archen", [13, 4]],
		[567, "archeops", [13, 4]],
		[568, "trubbish", [1, 3]],
		[569, "garbodor", [1, 3]],
		[570, "zorua", [18, 3]],
		[571, "zoroark", [18, 3]],
		[572, "minccino", [7, 3]],
		[573, "cinccino", [7, 3]],
		[574, "gothita", [12, 3]],
		[575, "gothorita", [12, 3]],
		[576, "gothitelle", [12, 3]],
		[577, "solosis", [12, 3]],
		[578, "duosion", [12, 3]],
		[579, "reuniclus", [12, 3]],
		[580, "ducklett", [5, 4]],
		[581, "swanna", [5, 4]],
		[582, "vanillite", [15, 3]],
		[583, "vanillish", [15, 3]],
		[584, "vanilluxe", [15, 3]],
		[585, "deerling", [7, 0]],
		[586, "sawsbuck", [7, 0]],
		[587, "emolga", [8, 4]],
		[588, "karrablast", [6, 3]],
		[589, "escavalier", [6, 14]],
		[590, "foongus", [0, 1]],
		[591, "amoonguss", [0, 1]],
		[592, "frillish", [5, 16]],
		[593, "jellicent", [5, 16]],
		[594, "alomomola", [5, 3]],
		[595, "joltik", [6, 8]],
		[596, "galvantula", [6, 8]],
		[597, "ferroseed", [0, 14]],
		[598, "ferrothorn", [0, 14]],
		[599, "klink", [14, 3]],
		[600, "klang", [14, 3]],
		[601, "klinklang", [14, 3]],
		[602, "tynamo", [8, 3]],
		[603, "eelektrik", [8, 3]],
		[604, "eelektross", [8, 3]],
		[605, "elgyem", [12, 3]],
		[606, "beheeyem", [12, 3]],
		[607, "litwick", [16, 2]],
		[608, "lampent", [16, 2]],
		[609, "chandelure", [16, 2]],
		[610, "axew", [17, 3]],
		[611, "fraxure", [17, 3]],
		[612, "haxorus", [17, 3]],
		[613, "cubchoo", [15, 3]],
		[614, "beartic", [15, 3]],
		[615, "cryogonal", [15, 3]],
		[616, "shelmet", [6, 3]],
		[617, "accelgor", [6, 3]],
		[618, "stunfisk", [9, 8]],
		[619, "mienfoo", [11, 3]],
		[620, "mienshao", [11, 3]],
		[621, "druddigon", [17, 3]],
		[622, "golett", [9, 16]],
		[623, "golurk", [9, 16]],
		[624, "pawniard", [18, 14]],
		[625, "bisharp", [18, 14]],
		[626, "bouffalant", [7, 3]],
		[627, "rufflet", [7, 4]],
		[628, "braviary", [7, 4]],
		[629, "vullaby", [18, 4]],
		[630, "mandibuzz", [18, 4]],
		[631, "heatmor", [2, 3]],
		[632, "durant", [6, 14]],
		[633, "deino", [18, 17]],
		[634, "zweilous", [18, 17]],
		[635, "hydreigon", [18, 17]],
		[636, "larvesta", [6, 2]],
		[637, "volcarona", [6, 2]],
		[638, "cobalion", [14, 11]],
		[639, "terrakion", [13, 11]],
		[640, "virizion", [0, 11]],
		[641, "tornadus", [4, 3]],
		[642, "thundurus", [8, 4]],
		[643, "reshiram", [17, 2]],
		[644, "zekrom", [17, 8]],
		[645, "landorus", [9, 4]],
		[646, "kyurem", [17, 15]],
		[647, "keldeo", [5, 11]],
		[648, "meloetta", [7, 12]],
		[649, "genesect", [6, 14]],
		[650, "chespin", [0, 3]],
		[651, "quilladin", [0, 3]],
		[652, "chesnaught", [0, 11]],
		[653, "fennekin", [2, 3]],
		[654, "braixen", [2, 3]],
		[655, "delphox", [2, 12]],
		[656, "froakie", [5, 3]],
		[657, "frogadier", [5, 3]],
		[658, "greninja", [5, 18]],
		[659, "bunnelby", [7, 3]],
		[660, "diggersby", [7, 9]],
		[661, "fletchling", [7, 4]],
		[662, "fletchinder", [2, 4]],
		[663, "talonflame", [2, 4]],
		[664, "scatterbug", [6, 3]],
		[665, "spewpa", [6, 3]],
		[666, "vivillon", [6, 4]],
		[667, "litleo", [2, 7]],
		[668, "pyroar", [2, 7]],
		[669, "flabébé", [10, 3]],
		[670, "floette", [10, 3]],
		[671, "florges", [10, 3]],
		[672, "skiddo", [0, 3]],
		[673, "gogoat", [0, 3]],
		[674, "pancham", [11, 3]],
		[675, "pangoro", [11, 18]],
		[676, "furfrou", [7, 3]],
		[677, "espurr", [12, 3]],
		[678, "meowstic", [12, 3]],
		[679, "honedge", [14, 16]],
		[680, "doublade", [14, 16]],
		[681, "aegislash", [14, 16]],
		[682, "spritzee", [10, 3]],
		[683, "aromatisse", [10, 3]],
		[684, "swirlix", [10, 3]],
		[685, "slurpuff", [10, 3]],
		[686, "inkay", [18, 12]],
		[687, "malamar", [18, 12]],
		[688, "binacle", [13, 5]],
		[689, "barbaracle", [13, 5]],
		[690, "skrelp", [1, 5]],
		[691, "dragalge", [1, 17]],
		[692, "clauncher", [5, 3]],
		[693, "clawitzer", [5, 3]],
		[694, "helioptile", [8, 7]],
		[695, "heliolisk", [8, 7]],
		[696, "tyrunt", [13, 17]],
		[697, "tyrantrum", [13, 17]],
		[698, "amaura", [13, 15]],
		[699, "aurorus", [13, 15]],
		[700, "sylveon", [10, 3]],
		[701, "hawlucha", [11, 4]],
		[702, "dedenne", [8, 10]],
		[703, "carbink", [13, 10]],
		[704, "goomy", [17, 3]],
		[705, "sliggoo", [17, 3]],
		[706, "goodra", [17, 3]],
		[707, "klefki", [14, 10]],
		[708, "phantump", [16, 0]],
		[709, "trevenant", [16, 0]],
		[710, "pumpkaboo", [16, 0]],
		[711, "gourgeist", [16, 0]],
		[712, "bergmite", [15, 3]],
		[713, "avalugg", [15, 3]],
		[714, "noibat", [4, 17]],
		[715, "noivern", [4, 17]],
		[716, "xerneas", [10, 3]],
		[717, "yveltal", [18, 4]],
		[718, "zygarde", [17, 9]],
		[719, "diancie", [13, 10]]
	]
};

tv.functions.surroundBy = function(string, char) {
	var result = "";

	if (Array.isArray(char) && char.length > 1) {
		result = char[0] + string + char[1];
	} else {
		result = char + string + char;
	}

	return result;
}
tv.functions.surroundBrackets = function(string) {
	return tv.functions.surroundBy(string, ["[", "]"]);
}
tv.functions.surroundDQuotes = function(string) {
	return tv.functions.surroundBy(string, '"');
}

tv.functions.getIconId = function(icon) {
	var classes = icon.classList;
	var result = "";

	var i = 0;
	try {
		while (result == "" && i < classes.length) {
			if (classes[i].startsWith("icon-")) {
				result = classes[i].replace("icon-", "");
			}
			i += 1;
		}
	} catch (err) {}

	return result;
};

tv.functions.getCell = function(row, columnName, columnArray) {
	var result, index;

	index = columnArray.indexOf(columnName);
	result = row[index];

	return result;
};

tv.functions.getPokemonCell = function(row, columnName) {
	return tv.functions.getCell(row, columnName,
		tv.vars.monData.columns.pokemon);
};

tv.functions.getIconTypes = function(icon) {
	var result = "";
	var iconId = tv.functions.getIconId(icon);

	try {
		var mon, typeIDs, typeString;
		mon = tv.vars.monData.pokemon.filter(function(row) {return row[0] == iconId;})[0];
		typeIDs = tv.functions.getPokemonCell(mon, "types");
		typeString = [];

		for (i in typeIDs) {
			var typeId = typeIDs[i];

			typeString.push(tv.vars.monData.types[typeId]);
		}

		result = typeString.join(" ");
	} catch (err) {}

	return result;
};

tv.functions.filterGeneric = function(query, filter, attribute) {
	var br = tv.functions.surroundBrackets;
	var quot = tv.functions.surroundDQuotes;
	var allIcons = document.querySelectorAll(
		br(tv.consts.attr.filterable));
	var matches;
	switch (query) {
		case "":
			matches = allIcons;
			break;
		case -1:
			matches = document.querySelectorAll(
				br(tv.consts.attr.filterable) +
				filter);
			break;
		default:
			var sel = "";
			query.split(" ").forEach(function (item) {
				sel += ((sel.length > 0) ? "" : "") +
				br(tv.consts.attr.filterable) +
				br(filter + "=" + quot(item))});
			matches = document.querySelectorAll(sel);
			break;
	}

	for (i in allIcons) {
		try {
			allIcons[i].setAttribute(attribute, "false");
		} catch (err) {}
	}
	for (i in matches) {
		try {
			matches[i].setAttribute(attribute, "true");
		} catch (err) {}
	}
}

tv.functions.filterGenericFuzzy = function(query, filter, attribute) {
	if (document.body.hasAttribute(tv.consts.attr.bodyFilterNdex)) {
		tv.functions.filterClear();
	}
	tv.functions.filterGeneric(query, filter + "*", attribute);
}

tv.functions.filterFinal = function() {
	var br = tv.functions.surroundBrackets;
	var filterSelector = "";
	if (document.body.hasAttribute(tv.consts.attr.bodyFilterName)) {
		filterSelector += br(tv.consts.attr.matchedName + "=true");
	}
	if (document.body.hasAttribute(tv.consts.attr.bodyFilterType)) {
		filterSelector += br(tv.consts.attr.matchedType + "=true");
	}
	if (document.body.hasAttribute(tv.consts.attr.bodyFilterNdex)) {
		filterSelector += br(tv.consts.attr.matchedName + "=true");
	}

	tv.functions.filterGeneric(-1,
		filterSelector,
		tv.consts.attr.match);
};

tv.functions.filterMonsName = function(query) {
	tv.functions.filterGenericFuzzy(query,
		tv.consts.attr.iconName,
		tv.consts.attr.matchedName);

	document.body.setAttribute(tv.consts.attr.bodyFilterName, null);

	tv.functions.filterFinal();
};

tv.functions.filterMonsType = function(query) {
	tv.functions.filterGenericFuzzy(query,
		tv.consts.attr.iconType,
		tv.consts.attr.matchedType);

	document.body.setAttribute(tv.consts.attr.bodyFilterType, null);

	tv.functions.filterFinal();
};

/* quick added, not best*/
tv.functions.filterMonsNdex = function(query) {
	tv.functions.filterClear();

	tv.functions.filterGeneric("icon-" + query,
		"class$",
		tv.consts.attr.matchedName);

	document.body.setAttribute(tv.consts.attr.bodyFilterNdex, null);

	tv.functions.filterFinal();
};

tv.functions.filterClear = function() {
	var attrToRemove = [
		tv.consts.attr.bodyFilterName,
		tv.consts.attr.bodyFilterType,
		tv.consts.attr.bodyFilterNdex,
		tv.consts.attr.matchedName,
		tv.consts.attr.matchedType,
		tv.consts.attr.match
	];

	attrToRemove.forEach(function(x) {
		var elements = document.querySelectorAll("[" + x + "]");
		if (elements.length > 0) {
			for (i in elements) {
				try {
					elements[i].removeAttribute(x);
				} catch (err) {}
			}
		}
	});
};

tv.functions.start = function() {
	tv.vars.dom = {};

	tv.vars.dom.icons = document.getElementsByClassName("icon");

	/*
		Force icons to have their aira (text labels for the blind)
		described by attribute as a data attribute.  This can reduce the json
		data by a bunch if I ever need to remove column 2 from the pokemon
		table.  

		Also adds types, and a filterable tag.

		And finally, adds the styles to the page.
	*/
	/* tldr; mew icon named mew + psychic, not only "icon-151" */
	for (i in tv.vars.dom.icons) {
		var icon, describedBy, ndexId, types;
		icon = tv.vars.dom.icons[i];

		try {
			describedBy = document.getElementById(
				icon.getAttribute(tv.consts.attr.nameSource));
			ndexId = tv.functions.getIconId(icon);

			types = tv.functions.getIconTypes(icon);


			icon.setAttribute(tv.consts.attr.filterable, "");
			icon.setAttribute(tv.consts.attr.iconName,
				describedBy.innerText.toLowerCase());
			icon.setAttribute(tv.consts.attr.iconType,
				types);

			/* debugging purposes, for checking if icon IDs match ndex IDs
				find info in the counsole using 
				console.dir(document.querySelectorAll("[tv-debug-ndex-matches=false]"));
			*/
			/*if (tv.debug["iconIds"] == undefined) { tv.debug["iconIds"] = {};}
			tv.debug.iconIds[ndexId] = {};
			tv.debug.iconIds[ndexId]["aria-name"] = 
				describedBy.innerText.toLowerCase();
			
			var foundNdexRow = tv.vars.monData.pokemon.filter(mon => mon[0] == ndexId)[0];
			tv.debug.iconIds[ndexId]["data-name"] = 
				tv.functions.getPokemonCell(foundNdexRow, "name");

			tv.debug.iconIds[ndexId]["match"] = 
				(tv.debug.iconIds[ndexId]["data-name"] == 
					tv.debug.iconIds[ndexId]["aria-name"]);

			icon.setAttribute("tv-debug-ndex-name",
				tv.debug.iconIds[ndexId]["data-name"]);

			icon.setAttribute("tv-debug-ndex-matches",
				tv.debug.iconIds[ndexId]["match"]); */


		} catch (err) {}
	};

	var style = document.createElement("style");

	style.innerText +=
		tv.functions.surroundBrackets(tv.consts.attr.match + "=false") +
		"{" + tv.vars.falMatchStyles + "}";
	style.innerText +=
		tv.functions.surroundBrackets(tv.consts.attr.match + "=true") +
		"{" + tv.vars.truMatchStyles + "}";
	style.id = tv.consts.styleId;

	tv.vars.dom.style = style;

	document.body.appendChild(tv.vars.dom.style);

	/* removes old form if opened twice */
	try {
		var garcol = document.getElementById("tvSearchForm");
		garcol.parentNode.removeChild(garcol);
	} catch (err) {}

	var formContainer = document.createElement("div");
	formContainer.id = "tvSearchForm";
	var form = document.createElement("form");
	var label = document.createElement("label");
	var textInput = document.createElement("input");
	var searchByName = document.createElement("input");
	var searchByType = document.createElement("input");
	var searchByNDex = document.createElement("input");
	var clear = document.createElement("input");

	label.innerText = "Search Bookmarklet (by /u/Televis10n)";
	textInput.type = "text";
	textInput.id = "txtQuery";
	searchByName.type = "button";
	searchByName.value = "Name";
	searchByName.addEventListener('click', function(){tv.functions.filterMonsName(textInput.value);});
	searchByType.type = "button";
	searchByType.value = "Type";
	searchByType.addEventListener('click', function(){tv.functions.filterMonsType(textInput.value);});
	searchByNDex.type = "button";
	searchByNDex.value = "NDex";
	searchByNDex.addEventListener('click', function(){tv.functions.filterMonsNdex(textInput.value);});
	clear.type = "button";
	clear.value = "Clear";
	clear.addEventListener('click', function(){tv.functions.filterClear();textInput.value = "";});



	form.appendChild(label);
	form.appendChild(textInput);
	form.appendChild(searchByName);
	form.appendChild(searchByType);
	form.appendChild(searchByNDex);
	form.appendChild(clear);
	formContainer.appendChild(form);
	tv.vars.dom.form = formContainer
	document.body.appendChild(tv.vars.dom.form);
};

tv.functions.start();