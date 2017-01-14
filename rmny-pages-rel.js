db.source_path.find({}).forEach(function(source){
	for ( i=source.page.length-1; i >= 0; i-- ) {
		// print(source.page[i].page.pageNum)
		
		if ( source.page[i].page.pageNum == source.printedSources.page &&
			source.page[i].page.pageSubId == source.printedSources.pageSubId &&
			source.page[i].itemSubId == source.printedSources.itemSubId
		) 
			{
				print( "(match: " + source.id + ") \n\n\t source itemMainId: " + 
					source.printedSources.itemMainId +
					"\n\t RMNY itemMainId: " + source.rmny.itemMainId + 
					"\n\t RMNY MEKUrl path2: " + source.rmny.MEKUrl.path2 +
					"\n\t page MEKUrl path2: " +  source.page[i].MEKUrl.path2 +
					"\n\t RMNY page: " + source.printedSources.page +
					"\n\t page pageNum: " + source.page[i].page.pageNum + 
					"\n\t page path4: " + source.page[i].MEKUrl.path4 + 
					"\n\t page pageSubId: " + source.page[i].page.pageSubId +
					"\n\t source pageSubId: " + source.printedSources.pageSubId +
					"\n\t page itemSubId: " + source.page[i].itemSubId +
					"\n\t source itemSubId: " + source.printedSources.itemSubId + "\n")
				db.source_path.update({ "_id" : source._id}, { $set : 
				  	{  
				  		"MEKUrl.path1" : source.rmny.MEKUrl.path1,
				  		"MEKUrl.path2" : source.page[i].MEKUrl.path2,
				  		"MEKUrl.path4" : source.page[i].MEKUrl.path4
				  	} 
				})
			}			
	}
	
})
