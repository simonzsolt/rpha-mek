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
				localField: "printedSources.docBibNum",
				foreignField: "docBibNum",
				as: "rmny"
			}
	},
	{
		$unwind: "$rmny"
	},
	{
		$lookup :
			{
				from: "page",
				localField: "rmny.MEKUrl.path2",
				foreignField: "MEKUrl.path2",
				as: "page"
			}
	},
	{
		$match:
		{
			$and:
			[
				{ "page.MEKUrl" : { $exists : true } },
				{ "rmny.MEKUrl" : { $exists : true } }
			]
		}
	}
])
