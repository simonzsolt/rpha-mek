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
