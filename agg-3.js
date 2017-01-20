
db.source.aggregate([
	{
		$match: { "printedSources":{$exists:true} }
	},
	{
		$lookup: {
			from: "book_page",
			localField: "printedSources.itemMainId",
			foreignField: "itemMainId",
			as: "url"
		}
	}, {$unwind:"$url"},
	{ $match: { "url.MEK":{$exists:true} } },
	{ $project: {
			"printedSources":1,
			"id":1,
			"_id":1,
			"url.itemMainId":1,
			"url.itemSubId":1,
			"url.MEK":1,
			"url.page": {
				$filter: {
					input: "$url.page",
					as: "page",
					cond: { $and: [ 
					  { $eq: [ "$$page.page.pageNum", "$printedSources.page" ] },
					  { $eq: [ "$$page.page.pageSubId", "$printedSources.pageSubId" ]  },
					  { $eq: [ "$$page.itemSubId", "$printedSources.itemSubId" ]  }
					] }
				}
			}
		}
	},
	{ $match: { "url.page.MEK":{$exists:true} } }
])
