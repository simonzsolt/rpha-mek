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
				foreignField: "page.pageNum",
				as: "page2"
			}
	},
	{ $unwind : "$page" },
	{ $unwind : "$page2" },
	{
	  	$match : { "page.page.pageNum" : "page2.page.pageNum" }
	}
])