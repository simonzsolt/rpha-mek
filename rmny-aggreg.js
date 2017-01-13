db.source.aggregate([
	{
	  	$match:
	  		{
	  		  	$and:
	  		  		[
	  		  			{ "printedSources.docType" : "RMNY" },
	  		  			{ "recordType" : "5" }
	  		  		]
	  		 }
	},
	{
		$lookup :
			{
				from: "rmny",
				localField: "printedSources.itemMainId",
				foreignField: "itemMainId",
				as: "rmny"
			}
	},
	{
		$unwind: "$rmny"
	},
	{
		$lookup:
			{
				from: "page",
				localField: "rmny.MEKUrl.path2",
				foreignField: "MEKUrl.path2",
				as: "page"
			}
	},
	{
		$lookup:
			{
				from: "page",
				localField: "printedSources.page",
				foreignField: "pageNum",
				as: "page2"
			}
	},
	{
		$unwind: "$page2"
	},
	{
		$match:
		{
			$and:
			[
				{ "page.MEKUrl" : { $exists : true } },
				{ "rmny.MEKUrl" : { $exists : true } },
				{ "printedSources.page" : "page2.pageNum" }
			]
		}
	}
])

/*
	: 0023 --> 0199-RMNY-0357
	http://mek.oszk.hu/12400/12441/html/RMK_1_0355c_0002.html
	: 0024 --> 0945-RMNY-0357
	http://mek.oszk.hu/12400/12441/html/RMK_1_0355c_0003.html
	: 0314 --> 0101-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0320.html
	: 0407 --> 0144-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0415.html
	: 0234 --> 0511-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0240.html
	: 0033 --> 0867-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0037.html
	: 0369 --> 0629-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0379.html
	: 0000 --> 0634-RMNY-0458
	http://mek.oszk.hu/12000/12022/html/RMK_I_0165_0001.html
	: 0121 --> 0683-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0128.html
	: 0000 --> 0692-RMNY-0956
	http://mek.oszk.hu/12100/12140/html/RMK_I_0362_0001.html
	: 0004 --> 0819-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0008.html
	: 0000 --> 1015-RMNY-0348
	http://mek.oszk.hu/12000/12046/html/RMK_I_0109_0001.html
	: 0027 --> 1024-RMNY-0357
	http://mek.oszk.hu/12400/12441/html/RMK_1_0355c_0004.html
	: 0000 --> 1065-RMNY-0468
	http://mek.oszk.hu/12000/12027/html/RMK_I_0174_0001.html
	: 0088 --> 1065-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0094.html
	: 0216 --> 1244-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0222.html
	: 0140 --> 1245-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0146.html
	: 0445 --> 1247-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0453.html
	: 0000 --> 1250-RMNY-0439
	http://mek.oszk.hu/12000/12023/html/RMK_I_0156_0001.html
	: 0073 --> 1270-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0078.html
	: 0000 --> 1270-RMNY-0468
	http://mek.oszk.hu/12000/12027/html/RMK_I_0174_0001.html
	: 0000 --> 1287-RMNY-0438
	http://mek.oszk.hu/12000/12030/html/RMK_I_0155_0001.html
	: 0203 --> 1334-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0209.html
	: 0253 --> 1381-RMNY-0351
	http://mek.oszk.hu/12500/12523/html/RMK_I_0112_0259.html
	: 0043 --> 1389-RMNY-1059
	http://mek.oszk.hu/12500/12575/html/rmk-1_443.html
	: 0000 --> 0057-RMNY-0303
	http://mek.oszk.hu/11900/11991/html/RMK_I_0338_0001.html
*/
